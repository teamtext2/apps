/**
 * Spac2 PDF to Image — Client-Side Rasterization Engine
 */
(function () {
    "use strict";

    const PDF_TOOLS = [
        { id: "merge", title: "Merge PDF", subtitle: "Combine multiple PDF files", url: "/apps/pdf-hub/merge", badge: "Popular" },
        { id: "split", title: "Split PDF", subtitle: "Extract or divide pages", url: "/apps/pdf-hub/split", badge: "Utility" },
        { id: "organize", title: "Organize PDF", subtitle: "Reorder, rotate & delete", url: "/apps/pdf-hub/organize", badge: "Visual" },
        { id: "compress", title: "Compress PDF", subtitle: "Reduce file size", url: "/apps/pdf-hub/compress", badge: "Optimization" },
        { id: "pdf-to-image", title: "PDF to Image", subtitle: "Export high-res photos", url: "/apps/pdf-hub/pdf-to-image", badge: "High-DPI" },
        { id: "images-to-pdf", title: "Images to PDF", subtitle: "Convert JPG, PNG to PDF", url: "/apps/pdf-hub/images-to-pdf", badge: "Popular" },
        { id: "pdf-to-doc", title: "PDF to Word (DOCX)", subtitle: "Convert to DOCX document", url: "/apps/pdf-hub/pdf-to-doc", badge: "Word DOCX" },
        { id: "annotate", title: "Annotate PDF", subtitle: "Draw, highlight & notes", url: "/apps/pdf-hub/annotate", badge: "Editor" },
        { id: "sign", title: "Sign PDF", subtitle: "Electronic signatures", url: "/apps/pdf-hub/sign", badge: "Fast Sign" },
        { id: "watermark", title: "Watermark PDF", subtitle: "Stamp copyright & logo", url: "/apps/pdf-hub/watermark", badge: "Copyright" },
        { id: "crop-resize", title: "Crop & Resize PDF", subtitle: "Trim margins & formats", url: "/apps/pdf-hub/crop-resize", badge: "Paper Size" },
        { id: "ocr", title: "OCR PDF", subtitle: "AI optical recognition", url: "/apps/pdf-hub/ocr", badge: "AI Vision" },
        { id: "metadata", title: "PDF Metadata", subtitle: "Edit & strip metadata", url: "/apps/pdf-hub/metadata", badge: "Privacy" }
    ];

    const SVG = {
        download: '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
        layers: '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
        tool: '<svg class="tool-dropdown-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>',
        success: '<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
        error: '<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>',
        info: '<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>'
    };

    // Configure PDF.js worker
    if (window.pdfjsLib) {
        window.pdfjsLib.GlobalWorkerOptions.workerSrc =
            "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
    }

    // =========================================================================
    // Theme Management
    // =========================================================================
    function getActiveTheme() {
        return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
    }

    function updateThemeIcons(theme) {
        const sun = document.getElementById("theme-icon-sun");
        const moon = document.getElementById("theme-icon-moon");
        if (!sun || !moon) return;
        sun.hidden = theme !== "dark";
        moon.hidden = theme === "dark";
    }

    function toggleTheme() {
        const next = getActiveTheme() === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", next);
        try {
            localStorage.setItem("spac2_theme", next);
        } catch (e) {}
        updateThemeIcons(next);
    }

    // =========================================================================
    // Utilities
    // =========================================================================
    function showToast(message, type = "info") {
        let container = document.getElementById("toast-container");
        if (!container) {
            container = document.createElement("div");
            container.id = "toast-container";
            document.body.appendChild(container);
        }

        const toast = document.createElement("div");
        toast.className = `toast toast-${type}`;

        const iconSpan = document.createElement("span");
        iconSpan.innerHTML = SVG[type] || SVG.info;

        const textSpan = document.createElement("span");
        textSpan.textContent = message;

        toast.appendChild(iconSpan.firstChild);
        toast.appendChild(textSpan);
        container.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = "0";
            toast.style.transform = "translateY(8px) scale(0.96)";
            toast.style.transition = "all 0.22s ease";
            setTimeout(() => toast.remove(), 230);
        }, 3400);
    }

    function formatBytes(bytes) {
        if (!bytes || bytes <= 0) return "0 B";
        const units = ["B", "KB", "MB", "GB"];
        const i = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
        const value = bytes / Math.pow(1024, i);
        return `${value < 10 && i > 0 ? value.toFixed(1) : Math.round(value)} ${units[i]}`;
    }

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
        }, 150);
    }

    function canvasToBlob(canvas, type, quality) {
        return new Promise((resolve, reject) => {
            canvas.toBlob(
                (blob) => {
                    if (blob) resolve(blob);
                    else reject(new Error("Canvas export failed"));
                },
                type,
                quality
            );
        });
    }

    /**
     * Strict page range parser. Returns array of 1-based page numbers or null if invalid.
     */
    function parsePageRange(rangeStr, maxPages) {
        const raw = rangeStr.trim().toLowerCase();
        if (!raw || raw === "all") {
            return Array.from({ length: maxPages }, (_, i) => i + 1);
        }

        const seen = new Set();
        const result = [];
        const parts = raw.split(",");

        for (const partRaw of parts) {
            const part = partRaw.trim();
            if (!part) return null;

            if (part.includes("-")) {
                const bounds = part.split("-");
                if (bounds.length !== 2) return null;
                const start = /^\d+$/.test(bounds[0].trim()) ? parseInt(bounds[0].trim(), 10) : NaN;
                const end = /^\d+$/.test(bounds[1].trim()) ? parseInt(bounds[1].trim(), 10) : NaN;
                if (isNaN(start) || isNaN(end) || start < 1 || end > maxPages || start > end) {
                    return null;
                }
                for (let p = start; p <= end; p++) {
                    if (!seen.has(p)) {
                        seen.add(p);
                        result.push(p);
                    }
                }
            } else {
                if (!/^\d+$/.test(part)) return null;
                const p = parseInt(part, 10);
                if (p < 1 || p > maxPages) return null;
                if (!seen.has(p)) {
                    seen.add(p);
                    result.push(p);
                }
            }
        }

        return result.length > 0 ? result : null;
    }

    // =========================================================================
    // Tool Switcher
    // =========================================================================
    function initToolSwitcher() {
        const btn = document.getElementById("tool-switcher-btn");
        const menu = document.getElementById("tool-dropdown-menu");
        if (!btn || !menu) return;

        PDF_TOOLS.forEach((tool) => {
            const item = document.createElement("a");
            item.href = tool.url;
            item.className = "tool-dropdown-item" + (tool.id === "pdf-to-image" ? " is-current" : "");
            item.setAttribute("role", "menuitem");
            item.innerHTML = `
                ${SVG.tool}
                <div class="tool-dropdown-text">
                    <span class="tool-dropdown-title"></span>
                    <span class="tool-dropdown-sub"></span>
                </div>
                <span class="tool-dropdown-badge"></span>
            `;
            item.querySelector(".tool-dropdown-title").textContent = tool.title;
            item.querySelector(".tool-dropdown-sub").textContent = tool.subtitle;
            item.querySelector(".tool-dropdown-badge").textContent = tool.badge;
            menu.appendChild(item);
        });

        function closeMenu() {
            menu.classList.remove("active");
            btn.setAttribute("aria-expanded", "false");
        }

        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const isOpen = menu.classList.toggle("active");
            btn.setAttribute("aria-expanded", String(isOpen));
        });

        document.addEventListener("click", (e) => {
            if (!menu.contains(e.target) && e.target !== btn) {
                closeMenu();
            }
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") closeMenu();
        });
    }

    // =========================================================================
    // Main Application
    // =========================================================================
    document.addEventListener("DOMContentLoaded", () => {
        updateThemeIcons(getActiveTheme());
        initToolSwitcher();

        const themeBtn = document.getElementById("theme-toggle-btn");
        if (themeBtn) themeBtn.addEventListener("click", toggleTheme);

        // Views
        const dropzone = document.getElementById("dropzone");
        const fileInput = document.getElementById("file-input");
        const btnSelectFile = document.getElementById("btn-select-file");
        const configStudio = document.getElementById("config-studio");
        const progressStudio = document.getElementById("progress-studio");
        const galleryStudio = document.getElementById("gallery-studio");

        // Config Elements
        const fileNameLabel = document.getElementById("file-name-label");
        const fileSizePill = document.getElementById("file-size-pill");
        const filePagesPill = document.getElementById("file-pages-pill");
        const btnChangeFile = document.getElementById("btn-change-file");
        const selectFormat = document.getElementById("select-format");
        const selectDpi = document.getElementById("select-dpi");
        const inpPageRange = document.getElementById("inp-page-range");
        const pageRangeHint = document.getElementById("page-range-hint");
        const qualitySettingBox = document.getElementById("quality-setting-box");
        const inpQuality = document.getElementById("inp-quality");
        const qualityValueLabel = document.getElementById("quality-value-label");
        const btnStartConvert = document.getElementById("btn-start-convert");

        // Progress Elements
        const progressStatusText = document.getElementById("progress-status-text");
        const progressBarFill = document.getElementById("progress-bar-fill");
        const progressBarRole = document.getElementById("progress-bar-role");
        const progressPercent = document.getElementById("progress-percent");
        const btnCancelConvert = document.getElementById("btn-cancel-convert");

        // Gallery Elements
        const btnConvertAnother = document.getElementById("btn-convert-another");
        const btnBackConfig = document.getElementById("btn-back-config");
        const galleryCountText = document.getElementById("gallery-count-text");
        const galleryGrid = document.getElementById("gallery-grid");
        const btnDownloadAllZip = document.getElementById("btn-download-all-zip");
        const btnDownloadAllZipMobile = document.getElementById("btn-download-all-zip-mobile");

        // Lightbox Modal Elements
        const previewModal = document.getElementById("preview-modal");
        const modalPageTitle = document.getElementById("modal-page-title");
        const modalPageMeta = document.getElementById("modal-page-meta");
        const modalPreviewImg = document.getElementById("modal-preview-img");
        const modalBtnPrev = document.getElementById("modal-btn-prev");
        const modalBtnNext = document.getElementById("modal-btn-next");
        const modalBtnDownload = document.getElementById("modal-btn-download");
        const modalBtnClose = document.getElementById("modal-btn-close");

        // State
        let loadedFile = null;
        let pdfDoc = null;
        let totalPages = 0;
        let renderedImages = [];
        let isCancelled = false;
        let activeModalIndex = -1;

        function setView(viewName) {
            dropzone.hidden = viewName !== "dropzone";
            configStudio.hidden = viewName !== "config";
            progressStudio.hidden = viewName !== "progress";
            galleryStudio.hidden = viewName !== "gallery";

            document.body.classList.toggle("in-studio-mode", viewName !== "dropzone");
            document.body.classList.toggle("has-gallery-dock", viewName === "gallery");
        }

        function revokeRenderedUrls() {
            renderedImages.forEach((item) => {
                if (item.objectUrl) URL.revokeObjectURL(item.objectUrl);
            });
            renderedImages = [];
        }

        function resetAll() {
            isCancelled = true;
            revokeRenderedUrls();
            if (pdfDoc && typeof pdfDoc.destroy === "function") {
                pdfDoc.destroy().catch(() => {});
            }
            loadedFile = null;
            pdfDoc = null;
            totalPages = 0;
            fileInput.value = "";
            inpPageRange.value = "all";
            galleryGrid.innerHTML = "";
            closeModal();
            setView("dropzone");
        }

        // Dropzone Interactions
        btnSelectFile.addEventListener("click", (e) => {
            e.stopPropagation();
            fileInput.click();
        });

        dropzone.addEventListener("click", () => fileInput.click());

        dropzone.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                fileInput.click();
            }
        });

        dropzone.addEventListener("dragover", (e) => {
            e.preventDefault();
            dropzone.classList.add("drag-over");
        });

        dropzone.addEventListener("dragleave", (e) => {
            if (!dropzone.contains(e.relatedTarget)) {
                dropzone.classList.remove("drag-over");
            }
        });

        dropzone.addEventListener("drop", (e) => {
            e.preventDefault();
            dropzone.classList.remove("drag-over");
            if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
                handleSelectedFile(e.dataTransfer.files[0]);
            }
        });

        fileInput.addEventListener("change", (e) => {
            if (e.target.files && e.target.files.length > 0) {
                handleSelectedFile(e.target.files[0]);
            }
        });

        async function handleSelectedFile(file) {
            if (!file) return;
            if (file.type !== "application/pdf" && !file.name.toLowerCase().endsWith(".pdf")) {
                showToast("Please upload a valid PDF document.", "error");
                return;
            }
            if (!window.pdfjsLib) {
                showToast("PDF engine failed to load. Please refresh the page.", "error");
                return;
            }

            try {
                showToast("Reading PDF document...", "info");
                const buffer = await file.arrayBuffer();
                const doc = await window.pdfjsLib.getDocument({ data: buffer }).promise;

                if (pdfDoc && typeof pdfDoc.destroy === "function") {
                    pdfDoc.destroy().catch(() => {});
                }

                loadedFile = file;
                pdfDoc = doc;
                totalPages = doc.numPages;

                fileNameLabel.textContent = file.name;
                fileNameLabel.title = file.name;
                fileSizePill.textContent = formatBytes(file.size);
                filePagesPill.textContent = `${totalPages} ${totalPages === 1 ? "Page" : "Pages"}`;
                inpPageRange.value = "all";
                updatePageRangeHint();

                setView("config");
                showToast(`Loaded ${file.name} (${totalPages} pages)`, "success");
            } catch (err) {
                console.error("PDF load error:", err);
                showToast("Failed to load PDF: " + (err.message || "Invalid file"), "error");
                setView("dropzone");
            }
        }

        // Settings Interactions
        function updateFormatUI() {
            const isLossless = selectFormat.value === "image/png";
            qualitySettingBox.hidden = isLossless;
        }

        function updatePageRangeHint() {
            if (!totalPages) return;
            const parsed = parsePageRange(inpPageRange.value, totalPages);
            if (!parsed) {
                pageRangeHint.textContent = `Invalid (1–${totalPages})`;
                pageRangeHint.classList.add("is-error");
            } else {
                pageRangeHint.textContent =
                    parsed.length === totalPages
                        ? `All ${totalPages} pages`
                        : `${parsed.length} of ${totalPages} pages`;
                pageRangeHint.classList.remove("is-error");
            }
        }

        selectFormat.addEventListener("change", updateFormatUI);
        inpQuality.addEventListener("input", () => {
            qualityValueLabel.textContent = `${inpQuality.value}%`;
        });
        inpPageRange.addEventListener("input", updatePageRangeHint);

        btnChangeFile.addEventListener("click", resetAll);
        btnConvertAnother.addEventListener("click", resetAll);
        btnBackConfig.addEventListener("click", () => {
            setView("config");
        });

        btnCancelConvert.addEventListener("click", () => {
            isCancelled = true;
            showToast("Conversion cancelled.", "info");
            setView("config");
        });

        // =====================================================================
        // Render Engine
        // =====================================================================
        btnStartConvert.addEventListener("click", async () => {
            if (!pdfDoc) return;

            const targetPages = parsePageRange(inpPageRange.value, totalPages);
            if (!targetPages) {
                showToast(`Enter a valid page range between 1 and ${totalPages} (e.g., 1-3, 5).`, "error");
                inpPageRange.focus();
                return;
            }

            isCancelled = false;
            revokeRenderedUrls();
            galleryGrid.innerHTML = "";

            setView("progress");
            updateProgress(0, targetPages.length, "Preparing canvas...");

            const format = selectFormat.value;
            const quality = parseInt(inpQuality.value, 10) / 100 || 0.92;
            const scale = parseFloat(selectDpi.value) || 2.083;
            const ext = format === "image/png" ? "png" : format === "image/webp" ? "webp" : "jpg";
            const baseName = loadedFile.name.replace(/\.pdf$/i, "");

            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d", { alpha: format === "image/png" });

            try {
                for (let idx = 0; idx < targetPages.length; idx++) {
                    if (isCancelled) return;

                    const pageNum = targetPages[idx];
                    updateProgress(idx, targetPages.length, `Rendering page ${pageNum} of ${totalPages}...`);

                    const page = await pdfDoc.getPage(pageNum);
                    if (isCancelled) return;

                    const viewport = page.getViewport({ scale });
                    canvas.width = Math.max(1, Math.round(viewport.width));
                    canvas.height = Math.max(1, Math.round(viewport.height));

                    if (format !== "image/png") {
                        ctx.fillStyle = "#ffffff";
                        ctx.fillRect(0, 0, canvas.width, canvas.height);
                    } else {
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                    }

                    await page.render({ canvasContext: ctx, viewport }).promise;
                    if (isCancelled) return;

                    const blob = await canvasToBlob(canvas, format, quality);
                    const objectUrl = URL.createObjectURL(blob);

                    renderedImages.push({
                        pageNum,
                        blob,
                        objectUrl,
                        width: canvas.width,
                        height: canvas.height,
                        filename: `${baseName}-page-${pageNum}.${ext}`
                    });

                    updateProgress(idx + 1, targetPages.length, `Rendered page ${pageNum} of ${totalPages}`);
                    // Yield to UI thread so progress bar & cancel button stay responsive
                    await new Promise((r) => setTimeout(r, 0));
                }

                renderGalleryGrid();
                setView("gallery");
                showToast(`Rendered ${renderedImages.length} ${renderedImages.length === 1 ? "image" : "images"}!`, "success");
            } catch (err) {
                if (isCancelled) return;
                console.error("Rendering error:", err);
                setView("config");
                showToast("Failed to render pages: " + (err.message || "Unknown error"), "error");
            }
        });

        function updateProgress(completed, total, statusText) {
            const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
            progressStatusText.textContent = statusText;
            progressBarFill.style.width = `${pct}%`;
            progressBarRole.setAttribute("aria-valuenow", String(pct));
            progressPercent.textContent = `${pct}%`;
        }

        function renderGalleryGrid() {
            galleryGrid.innerHTML = "";
            galleryCountText.textContent = `${renderedImages.length} ${renderedImages.length === 1 ? "Page" : "Pages"} Rendered`;

            const fragment = document.createDocumentFragment();

            renderedImages.forEach((imgObj, idx) => {
                const card = document.createElement("article");
                card.className = "gallery-card";

                const previewBtn = document.createElement("button");
                previewBtn.type = "button";
                previewBtn.className = "gallery-preview-box";
                previewBtn.setAttribute("aria-label", `Preview page ${imgObj.pageNum}`);
                previewBtn.innerHTML = `
                    <span class="page-badge">${SVG.layers} Page ${imgObj.pageNum}</span>
                    <img src="${imgObj.objectUrl}" class="gallery-img" alt="Page ${imgObj.pageNum}" loading="lazy">
                `;
                previewBtn.addEventListener("click", () => openModal(idx));

                const details = document.createElement("div");
                details.className = "card-details-row";
                details.innerHTML = `
                    <span class="card-dimen-tag">${imgObj.width} &times; ${imgObj.height} px</span>
                    <span class="card-size-tag">${formatBytes(imgObj.blob.size)}</span>
                `;

                const dlBtn = document.createElement("button");
                dlBtn.type = "button";
                dlBtn.className = "btn-download-single";
                dlBtn.innerHTML = `${SVG.download}<span>Download Image</span>`;
                dlBtn.addEventListener("click", () => {
                    downloadBlob(imgObj.blob, imgObj.filename);
                    showToast(`Downloaded page ${imgObj.pageNum}`, "success");
                });

                card.appendChild(previewBtn);
                card.appendChild(details);
                card.appendChild(dlBtn);
                fragment.appendChild(card);
            });

            galleryGrid.appendChild(fragment);
        }

        // =====================================================================
        // Lightbox Preview Modal
        // =====================================================================
        function openModal(index) {
            if (index < 0 || index >= renderedImages.length) return;
            activeModalIndex = index;
            const imgObj = renderedImages[index];

            modalPageTitle.textContent = `Page ${imgObj.pageNum}`;
            modalPageMeta.textContent = `${imgObj.width} × ${imgObj.height} px • ${formatBytes(imgObj.blob.size)}`;
            modalPreviewImg.src = imgObj.objectUrl;
            modalPreviewImg.alt = `Page ${imgObj.pageNum} preview`;

            modalBtnPrev.disabled = index === 0;
            modalBtnNext.disabled = index === renderedImages.length - 1;

            previewModal.hidden = false;
            document.body.style.overflow = "hidden";
        }

        function closeModal() {
            if (previewModal.hidden) return;
            previewModal.hidden = true;
            document.body.style.overflow = "";
            activeModalIndex = -1;
        }

        modalBtnPrev.addEventListener("click", () => openModal(activeModalIndex - 1));
        modalBtnNext.addEventListener("click", () => openModal(activeModalIndex + 1));
        modalBtnClose.addEventListener("click", closeModal);
        modalBtnDownload.addEventListener("click", () => {
            const imgObj = renderedImages[activeModalIndex];
            if (!imgObj) return;
            downloadBlob(imgObj.blob, imgObj.filename);
            showToast(`Downloaded page ${imgObj.pageNum}`, "success");
        });

        previewModal.addEventListener("click", (e) => {
            if (e.target === previewModal) closeModal();
        });

        document.addEventListener("keydown", (e) => {
            if (previewModal.hidden) return;
            if (e.key === "Escape") closeModal();
            else if (e.key === "ArrowLeft" && activeModalIndex > 0) openModal(activeModalIndex - 1);
            else if (e.key === "ArrowRight" && activeModalIndex < renderedImages.length - 1) openModal(activeModalIndex + 1);
        });

        // =====================================================================
        // ZIP Archive Export
        // =====================================================================
        async function executeZipDownload() {
            if (renderedImages.length === 0) return;

            if (typeof window.JSZip === "undefined") {
                showToast("ZIP library unavailable. Downloading files individually...", "info");
                renderedImages.forEach((img) => downloadBlob(img.blob, img.filename));
                return;
            }

            const zipButtons = [btnDownloadAllZip, btnDownloadAllZipMobile].filter(Boolean);
            zipButtons.forEach((b) => {
                b.disabled = true;
                const span = b.querySelector("span");
                if (span) span.textContent = "Creating ZIP...";
            });

            try {
                const zip = new window.JSZip();
                const folderName = loadedFile.name.replace(/\.pdf$/i, "") + "-images";
                const folder = zip.folder(folderName);

                renderedImages.forEach((img) => {
                    folder.file(img.filename, img.blob);
                });

                const zipBlob = await zip.generateAsync({ type: "blob" });
                downloadBlob(zipBlob, `${folderName}.zip`);
                showToast("ZIP archive downloaded successfully!", "success");
            } catch (err) {
                console.error("ZIP creation error:", err);
                showToast("Failed to create ZIP: " + (err.message || "Unknown error"), "error");
            } finally {
                zipButtons.forEach((b) => {
                    b.disabled = false;
                    const span = b.querySelector("span");
                    if (span) span.textContent = "Download All as ZIP";
                });
            }
        }

        btnDownloadAllZip.addEventListener("click", executeZipDownload);
        if (btnDownloadAllZipMobile) {
            btnDownloadAllZipMobile.addEventListener("click", executeZipDownload);
        }

        // Initial UI sync
        updateFormatUI();
    });
})();
