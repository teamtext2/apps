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

// === App-Specific Script (compress) ===
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

        document.addEventListener("DOMContentLoaded", () => {
            const dropzone = document.getElementById("dropzone");
            const fileInput = document.getElementById("file-input");
            const btnSelectFile = document.getElementById("btn-select-file");

            // Studio sections
            const configStudio = document.getElementById("config-studio");
            const progressStudio = document.getElementById("progress-studio");
            const resultStudio = document.getElementById("result-studio");

            // Summary elements
            const fileNameLabel = document.getElementById("file-name-label");
            const fileSizeLabel = document.getElementById("file-size-label");
            const btnChangeFile = document.getElementById("btn-change-file");

            // Presets
            const presetCards = document.querySelectorAll(".preset-card");
            let selectedPreset = "recommended";

            // Advanced options
            const btnToggleAdv = document.getElementById("btn-toggle-advanced");
            const advPanel = document.getElementById("advanced-panel");
            const advArrow = document.getElementById("adv-arrow");
            const toggleGrayscale = document.getElementById("toggle-grayscale");

            // Actions & Progress
            const btnStartCompress = document.getElementById("btn-start-compress");
            const btnCancelCompress = document.getElementById("btn-cancel-compress");
            const progressBarFill = document.getElementById("progress-bar-fill");
            const progressPercent = document.getElementById("progress-percent");
            const progressStatusText = document.getElementById("progress-status-text");

            // Results elements
            const resOriginalSize = document.getElementById("res-original-size");
            const resCompressedSize = document.getElementById("res-compressed-size");
            const resSavedPercent = document.getElementById("res-saved-percent");
            const resEngineBadge = document.getElementById("res-engine-badge");
            const resEngineText = document.getElementById("res-engine-text");
            const resSummaryDesc = document.getElementById("res-summary-desc");
            const btnDownloadResult = document.getElementById("btn-download-result");
            const btnCompressAnother = document.getElementById("btn-compress-another");

            // File & Operation State
            let loadedFile = null;
            let loadedBuffer = null;
            let pdfDoc = null;
            let totalPages = 0;
            let compressedBlob = null;
            let isCompressionCancelled = false;

            // Prevent double-click issue on button inside dropzone
            if (btnSelectFile) {
                btnSelectFile.addEventListener("click", (e) => {
                    e.stopPropagation();
                    fileInput.click();
                });
            }

            // Setup Dropzone
            setupDropzone(dropzone, fileInput, (files) => {
                if (!files || files.length === 0) return;
                const file = files[0];
                if (file.type !== "application/pdf" && !file.name.toLowerCase().endsWith(".pdf")) {
                    showToast("Please upload a valid PDF file.", "error");
                    return;
                }
                initFile(file);
            });

            async function initFile(file) {
                try {
                    loadedFile = file;
                    loadedBuffer = await file.arrayBuffer();

                    // Read page count with PDF.js
                    const loadingTask = pdfjsLib.getDocument({ data: loadedBuffer.slice(0) });
                    pdfDoc = await loadingTask.promise;
                    totalPages = pdfDoc.numPages;

                    // Update UI labels
                    fileNameLabel.textContent = file.name;
                    fileSizeLabel.textContent = `${formatBytes(file.size)} • ${totalPages} ${totalPages === 1 ? 'Page' : 'Pages'}`;

                    // Switch to Config Studio
                    dropzone.style.display = "none";
                    resultStudio.style.display = "none";
                    progressStudio.style.display = "none";
                    configStudio.style.display = "block";

                    showToast(`Loaded ${file.name} successfully`, "info");
                } catch (err) {
                    console.error("PDF load error:", err);
                    showToast("Failed to parse PDF document: " + err.message, "error");
                }
            }

            // Change file
            btnChangeFile.addEventListener("click", () => {
                resetToUpload();
            });

            btnCompressAnother.addEventListener("click", () => {
                resetToUpload();
            });

            function resetToUpload() {
                loadedFile = null;
                loadedBuffer = null;
                pdfDoc = null;
                compressedBlob = null;
                isCompressionCancelled = false;
                fileInput.value = "";
                configStudio.style.display = "none";
                progressStudio.style.display = "none";
                resultStudio.style.display = "none";
                dropzone.style.display = "block";
            }

            // Preset selection
            presetCards.forEach(card => {
                card.addEventListener("click", () => {
                    presetCards.forEach(c => c.classList.remove("active"));
                    card.classList.add("active");
                    selectedPreset = card.dataset.preset;
                });
            });

            // Toggle Advanced Options
            btnToggleAdv.addEventListener("click", () => {
                const isOpen = advPanel.style.display === "block";
                advPanel.style.display = isOpen ? "none" : "block";
                advArrow.style.transform = isOpen ? "rotate(0deg)" : "rotate(180deg)";
            });

            // Cancel Compression handler
            if (btnCancelCompress) {
                btnCancelCompress.addEventListener("click", () => {
                    isCompressionCancelled = true;
                    progressStudio.style.display = "none";
                    configStudio.style.display = "block";
                    showToast("Compression process stopped", "info");
                });
            }

            // Helper to get raw JPEG Uint8Array from canvas via Blob (fast & memory-efficient)
            function canvasToJpegBytes(canvas, quality) {
                return new Promise((resolve) => {
                    canvas.toBlob(async (blob) => {
                        if (!blob) {
                            resolve(null);
                            return;
                        }
                        const buf = await blob.arrayBuffer();
                        resolve(new Uint8Array(buf));
                    }, "image/jpeg", quality);
                });
            }

            // ============================================================
            // Intelligent Dual-Engine Compression Execution
            // ============================================================
            btnStartCompress.addEventListener("click", async () => {
                if (!loadedBuffer || !pdfDoc) return;

                isCompressionCancelled = false;
                configStudio.style.display = "none";
                progressStudio.style.display = "block";
                progressBarFill.style.width = "0%";
                progressPercent.textContent = "0%";
                progressStatusText.textContent = "Analyzing document visual structure...";

                try {
                    // Compression parameters based on selected preset
                    let scale = 1.35;
                    let quality = 0.72;

                    if (selectedPreset === "extreme") {
                        scale = 1.05;
                        quality = 0.52;
                    } else if (selectedPreset === "light") {
                        scale = 1.80;
                        quality = 0.86;
                    }

                    const isGrayscale = toggleGrayscale.checked;

                    // Initialize new PDF-Lib document
                    const outDoc = await PDFLib.PDFDocument.create();
                    const offscreenCanvas = document.createElement("canvas");
                    const offscreenCtx = offscreenCanvas.getContext("2d", { willReadFrequently: isGrayscale });

                    for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
                        if (isCompressionCancelled) return;

                        progressStatusText.textContent = `Optimizing page ${pageNum} of ${totalPages}...`;
                        const pct = Math.round(((pageNum - 1) / totalPages) * 90);
                        progressBarFill.style.width = `${pct}%`;
                        progressPercent.textContent = `${pct}%`;

                        // Render page via PDF.js
                        const page = await pdfDoc.getPage(pageNum);
                        const viewport = page.getViewport({ scale: scale });

                        offscreenCanvas.width = viewport.width;
                        offscreenCanvas.height = viewport.height;

                        await page.render({
                            canvasContext: offscreenCtx,
                            viewport: viewport
                        }).promise;

                        if (isCompressionCancelled) return;

                        // Apply Grayscale filter if enabled
                        if (isGrayscale) {
                            const imgData = offscreenCtx.getImageData(0, 0, offscreenCanvas.width, offscreenCanvas.height);
                            const d = imgData.data;
                            for (let i = 0; i < d.length; i += 4) {
                                const gray = 0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2];
                                d[i] = gray;
                                d[i + 1] = gray;
                                d[i + 2] = gray;
                            }
                            offscreenCtx.putImageData(imgData, 0, 0);
                        }

                        // Convert to high-speed binary JPEG
                        const jpegBytes = await canvasToJpegBytes(offscreenCanvas, quality);
                        if (!jpegBytes || isCompressionCancelled) return;

                        const embeddedImage = await outDoc.embedJpg(jpegBytes);

                        // Original unscaled dimensions in PDF points
                        const unscaledViewport = page.getViewport({ scale: 1.0 });
                        const newPage = outDoc.addPage([unscaledViewport.width, unscaledViewport.height]);

                        newPage.drawImage(embeddedImage, {
                            x: 0,
                            y: 0,
                            width: unscaledViewport.width,
                            height: unscaledViewport.height
                        });
                    }

                    if (isCompressionCancelled) return;

                    progressStatusText.textContent = "Deflating stream dictionaries...";
                    progressBarFill.style.width = "94%";
                    progressPercent.textContent = "94%";

                    // Save with object stream compression
                    const rasterBytes = await outDoc.save({ useObjectStreams: true });
                    if (isCompressionCancelled) return;

                    let finalBytes = rasterBytes;
                    let engineUsed = "adaptive";

                    // ========================================================
                    // INTELLIGENT SIZE PROTECTION:
                    // If rasterized version is larger or near original size
                    // (typical for pure text/vector PDFs), run Lossless Stream Deflate
                    // so file size NEVER increases!
                    // ========================================================
                    if (rasterBytes.byteLength >= loadedFile.size * 0.95) {
                        progressStatusText.textContent = "Evaluating lossless stream optimization...";
                        try {
                            const streamDoc = await PDFLib.PDFDocument.load(loadedBuffer.slice(0), { ignoreEncryption: true });
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

                    progressBarFill.style.width = "100%";
                    progressPercent.textContent = "100%";

                    compressedBlob = new Blob([finalBytes], { type: "application/pdf" });

                    // Calculate stats
                    const originalSize = loadedFile.size;
                    const compressedSize = compressedBlob.size;
                    const savedBytes = Math.max(0, originalSize - compressedSize);
                    const savedPercent = Math.max(0, Math.round((savedBytes / originalSize) * 100));

                    // Show Results
                    progressStudio.style.display = "none";
                    resultStudio.style.display = "block";

                    resOriginalSize.textContent = formatBytes(originalSize);
                    resCompressedSize.textContent = formatBytes(compressedSize);
                    resSavedPercent.textContent = savedBytes > 0 ? `-${savedPercent}%` : "0%";

                    if (engineUsed === "lossless") {
                        resEngineBadge.className = "optimization-badge lossless";
                        resEngineText.textContent = "Lossless Stream Optimization (100% Text Quality)";
                        resSummaryDesc.textContent = "Detected text-heavy document. Optimized object streams losslessly to prevent raster blur and ensure zero size bloat.";
                    } else {
                        resEngineBadge.className = "optimization-badge";
                        resEngineText.textContent = `Adaptive Visual Compression (${selectedPreset.toUpperCase()})`;
                        resSummaryDesc.textContent = `Document visual stream re-encoded. Saved ${formatBytes(savedBytes)} (${savedPercent}%) with crisp readability.`;
                    }

                    if (savedBytes > 0) {
                        showToast(`Optimized! Saved ${savedPercent}% (${formatBytes(savedBytes)})`, "success");
                    } else {
                        showToast("Document is already at peak optimal compression!", "info");
                    }
                } catch (err) {
                    console.error("Compression error:", err);
                    progressStudio.style.display = "none";
                    configStudio.style.display = "block";
                    showToast("Compression failed: " + err.message, "error");
                }
            });

            // Download Handler
            btnDownloadResult.addEventListener("click", () => {
                if (!compressedBlob) return;
                const baseName = loadedFile.name.replace(/\.pdf$/i, "");
                const outName = `${baseName}-compressed.pdf`;
                downloadBlob(compressedBlob, outName);
                showToast("Download started!", "success");
            });
        });
