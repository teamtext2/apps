const APPS_ORIGIN = "https://apps-abu.pages.dev";
const APPS_PREFIX = "/apps";

export default {
  async fetch(request, env, ctx) {
    const publicUrl = new URL(request.url);
    const pathname = publicUrl.pathname;

    // Chỉ xử lý /apps và /apps/*
    if (
      pathname !== APPS_PREFIX &&
      !pathname.startsWith(`${APPS_PREFIX}/`)
    ) {
      return new Response("Not Found", { status: 404 });
    }

    // Chuẩn hóa /apps thành /apps/
    if (pathname === APPS_PREFIX) {
      publicUrl.pathname = `${APPS_PREFIX}/`;

      return Response.redirect(publicUrl.toString(), 308);
    }

    // Thêm dấu / cuối đường dẫn không có phần mở rộng tệp.
    const lastSegment = pathname.slice(
      pathname.lastIndexOf("/") + 1
    );

    if (
      lastSegment.length > 0 &&
      !lastSegment.includes(".")
    ) {
      publicUrl.pathname = `${pathname}/`;

      return Response.redirect(publicUrl.toString(), 308);
    }

    // Bỏ tiền tố /apps khi chuyển tới Cloudflare Pages.
    const originUrl = new URL(APPS_ORIGIN);

    originUrl.pathname =
      pathname.slice(APPS_PREFIX.length) || "/";

    // Giữ nguyên query string.
    originUrl.search = publicUrl.search;

    // Chỉ cache GET và HEAD.
    const isCacheableMethod =
      request.method === "GET" ||
      request.method === "HEAD";

    if (!isCacheableMethod) {
      return fetch(new Request(originUrl, request));
    }

    // Không cache request có thông tin xác thực hoặc cookie.
    if (
      request.headers.has("Authorization") ||
      request.headers.has("Cookie")
    ) {
      return fetch(new Request(originUrl, request));
    }

    const cache = caches.default;

    // Cache key dùng URL công khai, gồm cả query string.
    const cacheKey = new Request(publicUrl.toString(), {
      method: "GET",
      headers: request.headers,
    });

    const cached = await cache.match(cacheKey);

    if (cached) {
      // HEAD chỉ trả headers, không trả body.
      if (request.method === "HEAD") {
        return new Response(null, {
          status: cached.status,
          statusText: cached.statusText,
          headers: cached.headers,
        });
      }

      return cached;
    }

    // Luôn lấy GET từ nguồn để cache nội dung đầy đủ,
    // kể cả khi request ban đầu là HEAD.
    const upstreamRequest = new Request(originUrl.toString(), {
      method: "GET",
      headers: request.headers,
      redirect: request.redirect,
    });

    const upstream = await fetch(upstreamRequest);

    // Chỉ cache phản hồi 200, không có Set-Cookie.
    if (
      upstream.status !== 200 ||
      upstream.headers.has("Set-Cookie")
    ) {
      if (request.method === "HEAD") {
        return new Response(null, {
          status: upstream.status,
          statusText: upstream.statusText,
          headers: upstream.headers,
        });
      }

      return upstream;
    }

    const contentType =
      upstream.headers.get("Content-Type") || "";

    const normalizedContentType =
      contentType.toLowerCase();

    const isHtml =
      normalizedContentType.includes("text/html");

    const isStaticAsset =
      /^(text\/css|text\/javascript|application\/javascript|application\/x-javascript|image\/|font\/|application\/font|application\/x-font|application\/wasm|application\/vnd\.ms-fontobject)/i
        .test(normalizedContentType.trim());

    // Không cache các loại nội dung chưa được nhận diện.
    if (!isHtml && !isStaticAsset) {
      if (request.method === "HEAD") {
        return new Response(null, {
          status: upstream.status,
          statusText: upstream.statusText,
          headers: upstream.headers,
        });
      }

      return upstream;
    }

    // HTML: 60 giây; tài nguyên tĩnh: 1 giờ.
    const ttl = isHtml ? 60 : 3600;

    const headers = new Headers(upstream.headers);

    headers.set(
      "Cache-Control",
      `public, max-age=0, s-maxage=${ttl}`
    );

    const response = new Response(upstream.body, {
      status: upstream.status,
      statusText: upstream.statusText,
      headers,
    });

    // Lưu bản GET đầy đủ vào Cloudflare Cache API.
    ctx.waitUntil(cache.put(cacheKey, response.clone()));

    // HEAD không trả về body.
    if (request.method === "HEAD") {
      return new Response(null, {
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
      });
    }

    return response;
  },
};