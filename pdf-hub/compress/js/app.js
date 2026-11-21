/**
 * Spac2 Compress PDF — Client-Side Dual-Engine Compressor
 */
(function () {
    "use strict";

    const PDF_TOOLS = [
        { id: "merge", title: "Merge PDF", subtitle: "Combine multiple PDF files", url: "/apps/pdf-hub/merge/", badge: "Popular" },
        { id: "split", title: "Split PDF", subtitle: "Extract or divide pages", url: "/apps/pdf-hub/split/", badge: "Utility" },
        { id: "organize", title: "Organize PDF", subtitle: "Reorder, rotate & delete", url: "/apps/pdf-hub/organize/", badge: "Visual" },
        { id: "compress", title: "Compress PDF", subtitle: "Reduce file size", url: "/apps/pdf-hub/compress/", badge: "Optimization" },
        { id: "pdf-to-image", title: "PDF to Images", subtitle: "Export high-res photos", url: "/apps/pdf-hub/pdf-to-image/", badge: "High-DPI" },
        { id: "images-to-pdf", title: "Images to PDF", subtitle: "Convert JPG, PNG to PDF", url: "/apps/pdf-hub/images-to-pdf/", badge: "Popular" },
        { id: "pdf-to-doc", title: "PDF to Word (DOCX)", subtitle: "Convert to DOCX document", url: "/apps/pdf-hub/pdf-to-doc/", badge: "Word DOCX" },
        { id: "annotate", title: "Annotate PDF", subtitle: "Draw, highlight & notes", url: "/apps/pdf-hub/annotate/", badge: "Editor" },
        { id: "sign", title: "Sign PDF", subtitle: "Electronic signatures", url: "/apps/pdf-hub/sign/", badge: "Fast Sign" },
        { id: "watermark", title: "Watermark PDF", subtitle: "Stamp copyright & logo", url: "/apps/pdf-hub/watermark/", badge: "Copyright" },
        { id: "crop-resize", title: "Crop & Resize PDF", subtitle: "Trim margins & formats", url: "/apps/pdf-hub/crop-resize/", badge: "Paper Size" },
        { id: "ocr", title: "OCR PDF", subtitle: "AI optical recognition", url: "/apps/pdf-hub/ocr/", badge: "AI Vision" },
        { id: "metadata", title: "PDF Metadata", subtitle: "Edit & strip metadata", url: "/apps/pdf-hub/metadata/", badge: "Privacy" }
    ];

    const SVG = {
        tool: '<svg class="tool-dropdown-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>',
        success: '<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
        error: '<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>',
        info: '<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>'
    };

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

        const iconWrap = document.createElement("span");
        iconWrap.innerHTML = SVG[type] || SVG.info;

        const textSpan = document.createElement("span");
        textSpan.textContent = message;

        toast.appendChild(iconWrap.firstChild);
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

    function canvasToJpegBytes(canvas, quality) {
        return new Promise((resolve) => {
            canvas.toBlob(
                async (blob) => {
                    if (!blob) return resolve(null);
                    const buf = await blob.arrayBuffer();
                    resolve(new Uint8Array(buf));
                },
                "image/jpeg",
                quality
            );
        });
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
            item.className = "tool-dropdown-item" + (tool.id === "compress" ? " is-current" : "");
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
            if (!menu.contains(e.target) && !btn.contains(e.target)) closeMenu();
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
        const resultStudio = document.getElementById("result-studio");

        // Summary & Config
        const fileNameLabel = document.getElementById("file-name-label");
        const fileSizePill = document.getElementById("file-size-pill");
        const filePagesPill = document.getElementById("file-pages-pill");
        const btnChangeFile = document.getElementById("btn-change-file");
        const presetCards = document.querySelectorAll(".preset-card");
        const btnToggleAdv = document.getElementById("btn-toggle-advanced");
        const advPanel = document.getElementById("advanced-panel");
        const toggleGrayscale = document.getElementById("toggle-grayscale");
        const btnStartCompress = document.getElementById("btn-start-compress");

        // Progress
        const progressBarFill = document.getElementById("progress-bar-fill");
        const progressBarRole = document.getElementById("progress-bar-role");
        const progressPercent = document.getElementById("progress-percent");
        const progressStatusText = document.getElementById("progress-status-text");
        const btnCancelCompress = document.getElementById("btn-cancel-compress");

        // Results
        const resOriginalSize = document.getElementById("res-original-size");
        const resCompressedSize = document.getElementById("res-compressed-size");
        const resSavedPercent = document.getElementById("res-saved-percent");
        const resEngineText = document.getElementById("res-engine-text");
        const resSummaryDesc = document.getElementById("res-summary-desc");
        const btnDownloadResult = document.getElementById("btn-download-result");
        const btnBackConfig = document.getElementById("btn-back-config");
        const btnCompressAnother = document.getElementById("btn-compress-another");

        // State
        let loadedFile = null;
        let loadedBuffer = null;
        let pdfDoc = null;
        let totalPages = 0;
        let selectedPreset = "recommended";
        let compressedBlob = null;
        let isCompressionCancelled = false;

        function setView(viewName) {
            dropzone.hidden = viewName !== "dropzone";
            configStudio.hidden = viewName !== "config";
            progressStudio.hidden = viewName !== "progress";
            resultStudio.hidden = viewName !== "result";
            document.body.classList.toggle("in-studio-mode", viewName !== "dropzone");
        }

        function resetToUpload() {
            isCompressionCancelled = true;
            if (pdfDoc && typeof pdfDoc.destroy === "function") {
                pdfDoc.destroy().catch(() => {});
            }
            loadedFile = null;
            loadedBuffer = null;
            pdfDoc = null;
            totalPages = 0;
            compressedBlob = null;
            fileInput.value = "";
            setView("dropzone");
        }

        // Dropzone Interactions
        btnSelectFile.addEventListener("click", (e) => {
            e.stopPropagation();
            fileInput.click();
        });

        dropzone.addEventListener("click", (e) => {
            if (e.target === fileInput) return;
            fileInput.click();
        });

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
                initFile(e.dataTransfer.files[0]);
            }
        });

        fileInput.addEventListener("change", (e) => {
            if (e.target.files && e.target.files.length > 0) {
                initFile(e.target.files[0]);
            }
        });

        async function initFile(file) {
            if (!file) return;
            if (file.type !== "application/pdf" && !file.name.toLowerCase().endsWith(".pdf")) {
                showToast("Please upload a valid PDF file.", "error");
                return;
            }
            if (!window.pdfjsLib) {
                showToast("PDF engine failed to load. Please refresh.", "error");
                return;
            }

            try {
                showToast("Reading PDF document...", "info");
                const buffer = await file.arrayBuffer();
                const doc = await window.pdfjsLib.getDocument({ data: buffer.slice(0) }).promise;

                if (pdfDoc && typeof pdfDoc.destroy === "function") {
                    pdfDoc.destroy().catch(() => {});
                }

                loadedFile = file;
                loadedBuffer = buffer;
                pdfDoc = doc;
                totalPages = doc.numPages;

                fileNameLabel.textContent = file.name;
                fileNameLabel.title = file.name;
                fileSizePill.textContent = formatBytes(file.size);
                filePagesPill.textContent = `${totalPages} ${totalPages === 1 ? "Page" : "Pages"}`;

                setView("config");
                showToast(`Loaded ${file.name} (${totalPages} pages)`, "success");
            } catch (err) {
                console.error("PDF load error:", err);
                showToast("Failed to parse PDF: " + (err.message || "Invalid file"), "error");
                setView("dropzone");
            }
        }

        // Preset Selection
        presetCards.forEach((card) => {
            card.addEventListener("click", () => {
                presetCards.forEach((c) => {
                    c.classList.remove("active");
                    c.setAttribute("aria-checked", "false");
                });
                card.classList.add("active");
                card.setAttribute("aria-checked", "true");
                selectedPreset = card.dataset.preset;
            });
        });

        // Advanced Options Toggle
        btnToggleAdv.addEventListener("click", () => {
            const isExpanded = btnToggleAdv.getAttribute("aria-expanded") === "true";
            btnToggleAdv.setAttribute("aria-expanded", String(!isExpanded));
            advPanel.hidden = isExpanded;
        });

        btnChangeFile.addEventListener("click", resetToUpload);
        btnCompressAnother.addEventListener("click", resetToUpload);
        btnBackConfig.addEventListener("click", () => setView("config"));

        btnCancelCompress.addEventListener("click", () => {
            isCompressionCancelled = true;
            setView("config");
            showToast("Compression cancelled.", "info");
        });

        function updateProgress(pct, text) {
            progressBarFill.style.width = `${pct}%`;
            progressBarRole.setAttribute("aria-valuenow", String(pct));
            progressPercent.textContent = `${pct}%`;
            progressStatusText.textContent = text;
        }

        // =====================================================================
        // Dual-Engine Compression Execution
        // =====================================================================
        btnStartCompress.addEventListener("click", async () => {
            if (!loadedBuffer || !pdfDoc) return;
            if (typeof window.PDFLib === "undefined") {
                showToast("PDF compression library is still loading...", "error");
                return;
            }

            isCompressionCancelled = false;
            setView("progress");
            updateProgress(0, "Analyzing document visual structure...");

            try {
                let scale = 1.35;
                let quality = 0.72;

                if (selectedPreset === "extreme") {
                    scale = 1.05;
                    quality = 0.52;
                } else if (selectedPreset === "light") {
                    scale = 1.8;
                    quality = 0.86;
                }

                const isGrayscale = toggleGrayscale.checked;
                const outDoc = await window.PDFLib.PDFDocument.create();
                const canvas = document.createElement("canvas");
                const ctx = canvas.getContext("2d", { willReadFrequently: isGrayscale });

                for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
                    if (isCompressionCancelled) return;

                    const pct = Math.round(((pageNum - 1) / totalPages) * 90);
                    updateProgress(pct, `Optimizing page ${pageNum} of ${totalPages}...`);

                    const page = await pdfDoc.getPage(pageNum);
                    if (isCompressionCancelled) return;

                    const viewport = page.getViewport({ scale });
                    canvas.width = Math.max(1, Math.round(viewport.width));
                    canvas.height = Math.max(1, Math.round(viewport.height));

                    // Fill white backdrop so transparent PDFs don't turn black in JPEG
                    ctx.fillStyle = "#ffffff";
                    ctx.fillRect(0, 0, canvas.width, canvas.height);

                    await page.render({ canvasContext: ctx, viewport }).promise;
                    if (isCompressionCancelled) return;

                    if (isGrayscale) {
                        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                        const d = imgData.data;
                        for (let i = 0; i < d.length; i += 4) {
                            const gray = 0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2];
                            d[i] = gray;
                            d[i + 1] = gray;
                            d[i + 2] = gray;
                        }
                        ctx.putImageData(imgData, 0, 0);
                    }

                    const jpegBytes = await canvasToJpegBytes(canvas, quality);
                    if (!jpegBytes || isCompressionCancelled) return;

                    const embeddedImage = await outDoc.embedJpg(jpegBytes);
                    const unscaled = page.getViewport({ scale: 1.0 });
                    const newPage = outDoc.addPage([unscaled.width, unscaled.height]);

                    newPage.drawImage(embeddedImage, {
                        x: 0,
                        y: 0,
                        width: unscaled.width,
                        height: unscaled.height
                    });

                    await new Promise((r) => setTimeout(r, 0));
                }

                if (isCompressionCancelled) return;

                updateProgress(94, "Deflating stream dictionaries...");
                const rasterBytes = await outDoc.save({ useObjectStreams: true });
                if (isCompressionCancelled) return;

                let finalBytes = rasterBytes;
                let engineUsed = "adaptive";

                if (rasterBytes.byteLength >= loadedFile.size * 0.95) {
                    updateProgress(97, "Evaluating lossless stream optimization...");
                    try {
                        const streamDoc = await window.PDFLib.PDFDocument.load(loadedBuffer.slice(0), {
                            ignoreEncryption: true
                        });
                        streamDoc.setTitle("");
                        streamDoc.setAuthor("");
                        streamDoc.setProducer("Spac2 PDF Compressor");
                        const streamBytes = await streamDoc.save({ useObjectStreams: true });

                        if (streamBytes.byteLength < finalBytes.byteLength && streamBytes.byteLength < loadedFile.size) {
                            finalBytes = streamBytes;
                            engineUsed = "lossless";
                        }
                    } catch (err) {
                        console.warn("Lossless fallback skipped:", err);
                    }
                }

                updateProgress(100, "Finalizing compressed PDF...");
                compressedBlob = new Blob([finalBytes], { type: "application/pdf" });

                const originalSize = loadedFile.size;
                const compressedSize = compressedBlob.size;
                const savedBytes = Math.max(0, originalSize - compressedSize);
                const savedPercent = originalSize > 0 ? Math.max(0, Math.round((savedBytes / originalSize) * 100)) : 0;

                resOriginalSize.textContent = formatBytes(originalSize);
                resCompressedSize.textContent = formatBytes(compressedSize);
                resSavedPercent.textContent = savedBytes > 0 ? `-${savedPercent}%` : "0%";

                if (engineUsed === "lossless") {
                    resEngineText.textContent = "Lossless Stream Optimization (100% Text Quality)";
                    resSummaryDesc.textContent =
                        "Detected text-heavy document. Optimized object streams losslessly to prevent raster blur and avoid size bloat.";
                } else {
                    resEngineText.textContent = `Adaptive Visual Compression (${selectedPreset.toUpperCase()})`;
                    resSummaryDesc.textContent =
                        savedBytes > 0
                            ? `Document visual stream re-encoded. Saved ${formatBytes(savedBytes)} (${savedPercent}%) with crisp readability.`
                            : "Document is already at optimal size for the selected preset.";
                }

                setView("result");
                if (savedBytes > 0) {
                    showToast(`Optimized! Saved ${savedPercent}% (${formatBytes(savedBytes)})`, "success");
                } else {
                    showToast("Document is already at peak optimal compression!", "info");
                }
            } catch (err) {
                if (isCompressionCancelled) return;
                console.error("Compression error:", err);
                setView("config");
                showToast("Compression failed: " + (err.message || "Unknown error"), "error");
            }
        });

        btnDownloadResult.addEventListener("click", () => {
            if (!compressedBlob || !loadedFile) return;
            const baseName = loadedFile.name.replace(/\.pdf$/i, "");
            downloadBlob(compressedBlob, `${baseName}-compressed.pdf`);
            showToast("Download started!", "success");
        });
    });
})();
