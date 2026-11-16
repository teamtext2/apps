/**
 * Spac2 PDF Suite — Shared Javascript Utilities
 */

const PDF_CATEGORIES = {
    organize: {
        id: "organize",
        name: "Organize & Pages",
        icon: "layers",
        desc: "Merge, split, reorder, rotate, and crop PDF pages effortlessly."
    },
    convert: {
        id: "convert",
        name: "Convert & Compress",
        icon: "refresh-cw",
        desc: "Convert images to PDF, export high-res images, and compress file size."
    },
    edit: {
        id: "edit",
        name: "Edit, Sign & Watermark",
        icon: "pen-tool",
        desc: "Annotate pages, apply digital signatures, and add copyright watermarks."
    },
    extract: {
        id: "extract",
        name: "AI & Data Extraction",
        icon: "scan-text",
        desc: "Optical Character Recognition (OCR) and document metadata management."
    }
};

const PDF_TOOLS = [
    {
        id: "merge",
        title: "Merge PDF",
        subtitle: "Combine multiple PDF files",
        url: "/apps/pdf-hub/merge",
        desc: "Combine multiple PDF documents into a single unified file with flexible drag-and-drop ordering.",
        category: "organize",
        icon: "files",
        badge: "Popular",
        hot: true,
        tag: "Multi-file merge",
        keywords: "merge combine join pdf files ghep noi gop file"
    },
    {
        id: "split",
        title: "Split PDF",
        subtitle: "Extract or divide pages",
        url: "/apps/pdf-hub/split",
        desc: "Extract specific page ranges or split each page into standalone individual PDF files.",
        category: "organize",
        icon: "scissors",
        badge: "Utility",
        tag: "Page ranges",
        keywords: "split extract divide separate pages tach cat trang"
    },
    {
        id: "organize",
        title: "Organize PDF",
        subtitle: "Reorder, rotate & delete",
        url: "/apps/pdf-hub/organize",
        desc: "Rearrange page orders, rotate orientations by 90°, delete unwanted pages, or extract selected sheets.",
        category: "organize",
        icon: "grid",
        badge: "Visual",
        tag: "Drag & drop pages",
        keywords: "organize reorder sort rotate delete remove pages sap xep xoay trang"
    },
    {
        id: "compress",
        title: "Compress PDF",
        subtitle: "Reduce file size",
        url: "/apps/pdf-hub/compress",
        desc: "Shrink PDF file size directly in your browser while preserving optimal visual clarity and layout fidelity.",
        category: "convert",
        icon: "minimize-2",
        badge: "Optimization",
        hot: true,
        tag: "Max compression",
        keywords: "compress shrink optimize reduce file size nen giam dung luong"
    },
    {
        id: "pdf-to-image",
        title: "PDF to Image",
        subtitle: "Export high-res photos",
        url: "/apps/pdf-hub/pdf-to-image",
        desc: "Render and export every PDF page into crystal-clear PNG or JPG images at high resolution (150/300 DPI).",
        category: "convert",
        icon: "file-image",
        badge: "High-DPI",
        tag: "PNG / JPG export",
        keywords: "pdf to image export render png jpg photos chuyen pdf sang anh"
    },
    {
        id: "images-to-pdf",
        title: "Images to PDF",
        subtitle: "Convert JPG, PNG to PDF",
        url: "/apps/pdf-hub/images-to-pdf",
        desc: "Convert JPG, PNG, WebP images to high-quality PDF documents with custom page sizes, margins, and reordering.",
        category: "convert",
        icon: "image",
        badge: "Popular",
        hot: true,
        tag: "JPG/PNG to PDF",
        keywords: "images to pdf jpg to pdf png to pdf convert picture photo chuyen anh sang pdf gop anh thanh pdf"
    },
    {
        id: "pdf-to-doc",
        title: "PDF to Word (DOCX)",
        subtitle: "Convert to DOCX document",
        url: "/apps/pdf-hub/pdf-to-doc",
        desc: "Convert PDF files into Microsoft Word (.docx) documents with 100% Visual Image mode or Editable Text Flow reconstruction.",
        category: "convert",
        icon: "file-text",
        badge: "Word DOCX",
        hot: true,
        tag: "Visual or Editable",
        keywords: "pdf to doc pdf to docx convert word chuyen pdf sang word van ban"
    },
    {
        id: "annotate",
        title: "Annotate PDF",
        subtitle: "Draw, highlight & notes",
        url: "/apps/pdf-hub/annotate",
        desc: "Add custom text notes, freehand drawings, colored highlights, shapes, and arrows directly onto documents.",
        category: "edit",
        icon: "edit-3",
        badge: "Editor",
        hot: true,
        tag: "Highlight & notes",
        keywords: "annotate edit highlight draw note mark chu thich ghi chu to sang"
    },
    {
        id: "sign",
        title: "Sign PDF",
        subtitle: "Electronic signatures",
        url: "/apps/pdf-hub/sign",
        desc: "Draw electronic handwritten signatures or upload official stamp seals to place accurately on documents.",
        category: "edit",
        icon: "pen-tool",
        badge: "Fast Sign",
        hot: true,
        tag: "E-signature & seal",
        keywords: "sign signature e-sign stamp seal ky ten chu ky dien tu"
    },
    {
        id: "watermark",
        title: "Watermark PDF",
        subtitle: "Stamp copyright & logo",
        url: "/apps/pdf-hub/watermark",
        desc: "Overlay copyright watermarks, insert transparent company logos, and automatically insert page numbers.",
        category: "edit",
        icon: "stamp",
        badge: "Copyright",
        tag: "Logo & page number",
        keywords: "watermark stamp logo copyright page number dong dau chu chim ban quyen"
    },
    {
        id: "crop-resize",
        title: "Crop & Resize PDF",
        subtitle: "Trim margins & formats",
        url: "/apps/pdf-hub/crop-resize",
        desc: "Visually trim whitespace margins, switch paper formats (A4, Letter, A3), and standardize dimensions.",
        category: "organize",
        icon: "crop",
        badge: "Paper Size",
        tag: "A4, Letter, A3",
        keywords: "crop resize trim margins paper size dimension cat le doi kho giay"
    },

    {
        id: "ocr",
        title: "OCR PDF",
        subtitle: "AI optical recognition",
        url: "/apps/pdf-hub/ocr",
        desc: "Extract editable text from scanned documents or photographed pages directly within your browser.",
        category: "extract",
        icon: "scan",
        badge: "AI Vision",
        ai: true,
        tag: "Scan to text",
        keywords: "ocr optical character recognition scan image to text ai nhan dien chu quang hoc"
    },
    {
        id: "metadata",
        title: "PDF Metadata",
        subtitle: "Edit & strip metadata",
        url: "/apps/pdf-hub/metadata",
        desc: "Inspect and edit title, author, and keyword properties, or wipe hidden metadata completely for privacy.",
        category: "extract",
        icon: "info",
        badge: "Privacy",
        tag: "Wipe hidden data",
        keywords: "metadata properties author title keywords privacy clean xoa thong tin an"
    }
];

// Initialize theme
function initTheme() {
    const savedTheme = localStorage.getItem("spac2_theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme") || "light";
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("spac2_theme", next);
    updateThemeIcon(next);
}

function updateThemeIcon(theme) {
    const btn = document.getElementById("theme-toggle-btn");
    if (!btn) return;
    const icon = btn.querySelector("i");
    if (icon) {
        icon.setAttribute("data-lucide", theme === "dark" ? "sun" : "moon");
        if (window.lucide) window.lucide.createIcons();
    }
}

// Toast notification
function showToast(message, type = "info") {
    let container = document.getElementById("toast-container");
    if (!container) {
        container = document.createElement("div");
        container.id = "toast-container";
        document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    const iconName = type === "success" ? "check-circle" : type === "error" ? "alert-circle" : "info";
    toast.innerHTML = `
        <i data-lucide="${iconName}" style="width: 18px; height: 18px; shrink: 0;"></i>
        <span>${message}</span>
    `;

    container.appendChild(toast);
    if (window.lucide) window.lucide.createIcons({ root: toast });

    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(10px) scale(0.95)";
        toast.style.transition = "all 0.25s ease";
        setTimeout(() => toast.remove(), 250);
    }, 3500);
}

// Format bytes
function formatBytes(bytes, decimals = 2) {
    if (!bytes || bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}

// Download blob
function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }, 100);
}

// Setup Dropzone
function setupDropzone(zoneElement, inputElement, onFilesSelected) {
    if (!zoneElement || !inputElement) return;

    zoneElement.addEventListener("click", () => inputElement.click());

    zoneElement.addEventListener("dragover", (e) => {
        e.preventDefault();
        zoneElement.classList.add("drag-over");
    });

    zoneElement.addEventListener("dragleave", (e) => {
        e.preventDefault();
        zoneElement.classList.remove("drag-over");
    });

    zoneElement.addEventListener("drop", (e) => {
        e.preventDefault();
        zoneElement.classList.remove("drag-over");
        if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            onFilesSelected(e.dataTransfer.files);
        }
    });

    inputElement.addEventListener("change", (e) => {
        if (e.target.files && e.target.files.length > 0) {
            onFilesSelected(e.target.files);
        }
    });
}

// Initialize Tool Switcher Dropdown
function initToolSwitcher() {
    const switcher = document.querySelector(".tool-switcher");
    if (!switcher) return;

    const btn = switcher.querySelector(".tool-switcher-btn");
    const menu = switcher.querySelector(".tool-dropdown-menu");
    if (!btn || !menu) return;

    // Populate items if empty
    if (menu.children.length === 0) {
        PDF_TOOLS.forEach(tool => {
            const item = document.createElement("a");
            item.href = tool.url;
            item.className = "tool-dropdown-item";
            item.innerHTML = `
                <i data-lucide="${tool.icon}" style="width: 16px; height: 16px; flex-shrink: 0; color: var(--accent-red);"></i>
                <div style="flex-grow: 1; display: flex; flex-direction: column; min-width: 0;">
                    <span style="font-weight: 600; font-size: 0.85rem; color: var(--text-primary);">${tool.title}</span>
                    <span style="font-size: 0.72rem; color: var(--text-muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${tool.subtitle || ''}</span>
                </div>
                <span style="font-size: 0.68rem; color: var(--text-muted); padding: 0.15rem 0.45rem; background: rgba(255, 255, 255, 0.05); border-radius: 9999px; white-space: nowrap;">${tool.badge}</span>
            `;
            menu.appendChild(item);
        });
    }

    btn.addEventListener("click", (e) => {
        e.stopPropagation();
        menu.classList.toggle("active");
    });

    document.addEventListener("click", () => {
        menu.classList.remove("active");
    });
}

// Document Ready
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initToolSwitcher();
    if (window.lucide) {
        window.lucide.createIcons();
    }
});

// === App-Specific Script (pdf-to-image) ===
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

        document.addEventListener("DOMContentLoaded", () => {
            const dropzone = document.getElementById("dropzone");
            const fileInput = document.getElementById("file-input");

            // Studios
            const configStudio = document.getElementById("config-studio");
            const progressStudio = document.getElementById("progress-studio");
            const galleryStudio = document.getElementById("gallery-studio");

            // Elements
            const fileNameLabel = document.getElementById("file-name-label");
            const fileSizePill = document.getElementById("file-size-pill");
            const filePagesPill = document.getElementById("file-pages-pill");
            const btnChangeFile = document.getElementById("btn-change-file");
            const btnConvertAnother = document.getElementById("btn-convert-another");
            const btnStartConvert = document.getElementById("btn-start-convert");
            const btnDownloadAllZip = document.getElementById("btn-download-all-zip");
            const btnDownloadAllZipMobile = document.getElementById("btn-download-all-zip-mobile");

            const selectFormat = document.getElementById("select-format");
            const selectDpi = document.getElementById("select-dpi");
            const inpPageRange = document.getElementById("inp-page-range");

            const progressBarFill = document.getElementById("progress-bar-fill");
            const progressPercent = document.getElementById("progress-percent");
            const progressStatusText = document.getElementById("progress-status-text");

            const galleryGrid = document.getElementById("gallery-grid");
            const galleryCountText = document.getElementById("gallery-count-text");

            // State
            let loadedFile = null;
            let loadedBuffer = null;
            let pdfDoc = null;
            let totalPages = 0;

            // Rendered images list: [ { pageNum, blob, dataUrl, width, height, filename } ]
            let renderedImages = [];

            // Native SVG Icons Library
            const SVG_ICONS = {
                download: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 14px; height: 14px;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
                layers: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" style="width: 12px; height: 12px;"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`
            };

            setupDropzone(dropzone, fileInput, (files) => {
                if (!files || files.length === 0) return;
                const file = files[0];
                if (file.type !== "application/pdf" && !file.name.toLowerCase().endsWith(".pdf")) {
                    showToast("Please upload a valid PDF document.", "error");
                    return;
                }
                loadFile(file);
            });

            async function loadFile(file) {
                try {
                    showToast("Reading PDF document...", "info");
                    loadedFile = file;
                    loadedBuffer = await file.arrayBuffer();

                    const loadingTask = pdfjsLib.getDocument({ data: loadedBuffer.slice(0) });
                    pdfDoc = await loadingTask.promise;
                    totalPages = pdfDoc.numPages;

                    fileNameLabel.textContent = file.name;
                    fileNameLabel.title = file.name;
                    if (fileSizePill) fileSizePill.textContent = formatBytes(file.size);
                    if (filePagesPill) filePagesPill.textContent = `${totalPages} ${totalPages === 1 ? 'Page' : 'Pages'}`;

                    document.body.classList.add("in-studio-mode");
                    dropzone.style.display = "none";
                    galleryStudio.style.display = "none";
                    progressStudio.style.display = "none";
                    configStudio.style.display = "block";

                    showToast(`Loaded ${file.name} successfully`, "success");
                } catch (err) {
                    console.error("PDF load error:", err);
                    document.body.classList.remove("in-studio-mode");
                    showToast("Failed to load PDF: " + err.message, "error");
                }
            }

            btnChangeFile.addEventListener("click", resetUpload);
            btnConvertAnother.addEventListener("click", resetUpload);

            function resetUpload() {
                loadedFile = null;
                loadedBuffer = null;
                pdfDoc = null;
                renderedImages = [];
                fileInput.value = "";
                document.body.classList.remove("in-studio-mode");
                configStudio.style.display = "none";
                progressStudio.style.display = "none";
                galleryStudio.style.display = "none";
                dropzone.style.display = "block";
            }

            // Parse Page Range helper
            function parseTargetPages(rangeStr, maxPages) {
                const s = rangeStr.trim().toLowerCase();
                if (!s || s === "all") return Array.from({ length: maxPages }, (_, i) => i + 1);

                const pages = [];
                const parts = s.split(",");

                for (let part of parts) {
                    part = part.trim();
                    if (!part) continue;

                    if (part.includes("-")) {
                        const [startS, endS] = part.split("-");
                        const start = Math.max(1, parseInt(startS, 10) || 1);
                        const end = Math.min(maxPages, parseInt(endS, 10) || maxPages);
                        for (let p = start; p <= end; p++) {
                            if (!pages.includes(p)) pages.push(p);
                        }
                    } else {
                        const p = parseInt(part, 10);
                        if (p >= 1 && p <= maxPages && !pages.includes(p)) {
                            pages.push(p);
                        }
                    }
                }

                return pages.length > 0 ? pages : Array.from({ length: maxPages }, (_, i) => i + 1);
            }

            // ============================================================
            // CONVERT TO IMAGES ENGINE
            // ============================================================
            btnStartConvert.addEventListener("click", async () => {
                if (!pdfDoc) return;

                const targetPages = parseTargetPages(inpPageRange.value, totalPages);
                if (targetPages.length === 0) {
                    showToast("Invalid page range specified.", "error");
                    return;
                }

                configStudio.style.display = "none";
                progressStudio.style.display = "block";
                progressBarFill.style.width = "0%";
                progressPercent.textContent = "0%";

                renderedImages = [];
                const format = selectFormat.value; // 'image/png' | 'image/jpeg' | 'image/webp'
                const scale = parseFloat(selectDpi.value) || 2.083;
                const ext = format === "image/png" ? "png" : format === "image/webp" ? "webp" : "jpg";
                const baseName = loadedFile.name.replace(/\.pdf$/i, "");

                const offscreenCanvas = document.createElement("canvas");
                const offCtx = offscreenCanvas.getContext("2d");

                try {
                    for (let idx = 0; idx < targetPages.length; idx++) {
                        const pageNum = targetPages[idx];
                        progressStatusText.textContent = `Rendering page ${pageNum} of ${totalPages}...`;
                        const pct = Math.round(((idx + 1) / targetPages.length) * 100);
                        progressBarFill.style.width = `${pct}%`;
                        progressPercent.textContent = `${pct}%`;

                        const page = await pdfDoc.getPage(pageNum);
                        const viewport = page.getViewport({ scale: scale });

                        offscreenCanvas.width = viewport.width;
                        offscreenCanvas.height = viewport.height;

                        // Fill white background for JPEGs
                        if (format !== "image/png") {
                            offCtx.fillStyle = "#ffffff";
                            offCtx.fillRect(0, 0, viewport.width, viewport.height);
                        }

                        await page.render({
                            canvasContext: offCtx,
                            viewport: viewport
                        }).promise;

                        const dataUrl = offscreenCanvas.toDataURL(format, 0.92);

                        // Convert dataURL to Blob for ZIP and size checking
                        const byteString = atob(dataUrl.split(",")[1]);
                        const ab = new ArrayBuffer(byteString.length);
                        const ia = new Uint8Array(ab);
                        for (let i = 0; i < byteString.length; i++) {
                            ia[i] = byteString.charCodeAt(i);
                        }
                        const blob = new Blob([ab], { type: format });

                        renderedImages.push({
                            pageNum: pageNum,
                            blob: blob,
                            dataUrl: dataUrl,
                            width: Math.round(viewport.width),
                            height: Math.round(viewport.height),
                            filename: `${baseName}-page-${pageNum}.${ext}`
                        });
                    }

                    // Show Gallery
                    progressStudio.style.display = "none";
                    galleryStudio.style.display = "flex";
                    renderGalleryGrid();
                    showToast(`Rendered ${renderedImages.length} images successfully!`, "success");
                } catch (err) {
                    console.error("Rendering error:", err);
                    progressStudio.style.display = "none";
                    configStudio.style.display = "block";
                    showToast("Failed to render pages: " + err.message, "error");
                }
            });

            // Render Gallery Grid
            function renderGalleryGrid() {
                galleryGrid.innerHTML = "";
                if (galleryCountText) {
                    galleryCountText.textContent = `${renderedImages.length} ${renderedImages.length === 1 ? 'Page' : 'Pages'} Rendered`;
                }

                renderedImages.forEach((imgObj, idx) => {
                    const card = document.createElement("div");
                    card.className = "gallery-card";
                    card.innerHTML = `
                        <div class="gallery-preview-box">
                            <span class="page-badge">
                                ${SVG_ICONS.layers}
                                Page ${imgObj.pageNum}
                            </span>
                            <img src="${imgObj.dataUrl}" class="gallery-img" alt="Page ${imgObj.pageNum}">
                        </div>
                        <div class="card-details-row">
                            <span class="card-dimen-tag">${imgObj.width} × ${imgObj.height} px</span>
                            <span class="card-size-tag">${formatBytes(imgObj.blob.size)}</span>
                        </div>
                        <button type="button" class="btn-download-single" data-index="${idx}">
                            ${SVG_ICONS.download}
                            <span>Download Image</span>
                        </button>
                    `;

                    card.querySelector(".btn-download-single").addEventListener("click", () => {
                        downloadBlob(imgObj.blob, imgObj.filename);
                        showToast(`Downloaded page ${imgObj.pageNum}`, "success");
                    });

                    galleryGrid.appendChild(card);
                });
            }

            // Download All as ZIP
            async function executeZipDownload() {
                if (renderedImages.length === 0) return;

                if (typeof JSZip === "undefined") {
                    showToast("ZIP library not loaded. Downloading files individually...", "info");
                    renderedImages.forEach(img => downloadBlob(img.blob, img.filename));
                    return;
                }

                showToast("Packaging ZIP archive...", "info");
                try {
                    const zip = new JSZip();
                    const folderName = loadedFile.name.replace(/\.pdf$/i, "") + "-images";
                    const folder = zip.folder(folderName);

                    renderedImages.forEach(img => {
                        folder.file(img.filename, img.blob);
                    });

                    const zipBlob = await zip.generateAsync({ type: "blob" });
                    downloadBlob(zipBlob, `${folderName}.zip`);
                    showToast("ZIP archive downloaded successfully!", "success");
                } catch (err) {
                    console.error("ZIP creation error:", err);
                    showToast("Failed to create ZIP: " + err.message, "error");
                }
            }

            btnDownloadAllZip.addEventListener("click", executeZipDownload);
            if (btnDownloadAllZipMobile) {
                btnDownloadAllZipMobile.addEventListener("click", executeZipDownload);
            }
        });
