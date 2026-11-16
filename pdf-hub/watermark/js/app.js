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

// === App-Specific Script (watermark) ===
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

        document.addEventListener("DOMContentLoaded", () => {
            // Dropzone & File Input
            const dropzone = document.getElementById("dropzone");
            const fileInput = document.getElementById("file-input");

            // Studio & Summary
            const watermarkStudio = document.getElementById("watermark-studio");
            const docNameLabel = document.getElementById("doc-name-label");
            const docMetaLabel = document.getElementById("doc-meta-label");
            const btnChangeFile = document.getElementById("btn-change-file");

            // Watermark Type Tabs
            const wmTabBtns = document.querySelectorAll(".wm-tab-btn");
            const controlsText = document.getElementById("controls-text");
            const controlsImage = document.getElementById("controls-image");
            const controlsNumbers = document.getElementById("controls-numbers");

            // Text Controls
            const inpWmText = document.getElementById("inp-wm-text");
            const rangeFontSize = document.getElementById("range-font-size");
            const valFontSize = document.getElementById("val-font-size");
            const rangeRotation = document.getElementById("range-rotation");
            const valRotation = document.getElementById("val-rotation");
            const rangeOpacity = document.getElementById("range-opacity");
            const valOpacity = document.getElementById("val-opacity");
            const colorRadioBtns = document.querySelectorAll(".color-radio-btn");
            const textAnchorBtns = document.querySelectorAll("#text-anchor-matrix .anchor-dot-btn");
            const chkMosaicRepeat = document.getElementById("chk-mosaic-repeat");
            const chkBehindContent = document.getElementById("chk-behind-content");
            const presetChips = document.querySelectorAll(".chip-btn");

            // Image Controls
            const logoFileInput = document.getElementById("logo-file-input");
            const rangeImgScale = document.getElementById("range-img-scale");
            const valImgScale = document.getElementById("val-img-scale");
            const rangeImgOpacity = document.getElementById("range-img-opacity");
            const valImgOpacity = document.getElementById("val-img-opacity");
            const rangeImgRotation = document.getElementById("range-img-rotation");
            const valImgRotation = document.getElementById("val-img-rotation");
            const imgAnchorBtns = document.querySelectorAll("#img-anchor-matrix .anchor-dot-btn");

            // Numbers Controls
            const selectNumFormat = document.getElementById("select-num-format");
            const selectNumPos = document.getElementById("select-num-pos");
            const rangeNumSize = document.getElementById("range-num-size");
            const valNumSize = document.getElementById("val-num-size");
            const inpNumStart = document.getElementById("inp-num-start");

            // Preview Elements
            const previewPageCanvasWrap = document.getElementById("preview-page-canvas-wrap");
            const pdfPreviewCanvas = document.getElementById("pdf-preview-canvas");
            const previewCtx = pdfPreviewCanvas.getContext("2d");
            const liveWatermarkOverlay = document.getElementById("live-watermark-overlay");
            const btnPreviewPrev = document.getElementById("btn-preview-prev");
            const btnPreviewNext = document.getElementById("btn-preview-next");
            const previewPageLabel = document.getElementById("preview-page-label");

            // Export Button
            const btnExportWatermarkedPdf = document.getElementById("btn-export-watermarked-pdf");

            // State
            let loadedFile = null;
            let loadedBuffer = null;
            let pdfJsDoc = null;
            let totalPages = 1;
            let currentPreviewPage = 1;
            let activeRenderTask = null;

            // Watermark Settings State
            let wmType = "text"; // 'text' | 'image' | 'numbers'

            let textSettings = {
                text: "CONFIDENTIAL",
                fontSize: 52,
                rotation: 45,
                opacity: 0.25,
                color: "#dc2626",
                position: "center",
                mosaic: false,
                behind: false
            };

            let imageSettings = {
                dataUrl: null,
                imgElement: null,
                scale: 30,
                opacity: 0.35,
                rotation: 0,
                position: "center"
            };

            let numberSettings = {
                format: "page_x_of_y",
                position: "bottom-center",
                size: 11,
                startPage: 1
            };

            // ==========================================
            // FILE UPLOAD
            // ==========================================
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
                    showToast("Loading document...", "info");
                    loadedFile = file;
                    loadedBuffer = await file.arrayBuffer();

                    const loadingTask = pdfjsLib.getDocument({ data: loadedBuffer.slice(0) });
                    pdfJsDoc = await loadingTask.promise;
                    totalPages = pdfJsDoc.numPages;
                    currentPreviewPage = 1;

                    docNameLabel.textContent = file.name;
                    docMetaLabel.textContent = `${formatBytes(file.size)} • ${totalPages} ${totalPages === 1 ? 'Page' : 'Pages'}`;

                    dropzone.style.display = "none";
                    watermarkStudio.style.display = "flex";

                    await renderPreviewPage();
                    showToast(`Loaded ${file.name} successfully`, "success");
                } catch (err) {
                    console.error("PDF load error:", err);
                    showToast("Failed to load PDF: " + err.message, "error");
                }
            }

            btnChangeFile.addEventListener("click", () => {
                loadedFile = null;
                loadedBuffer = null;
                pdfJsDoc = null;
                fileInput.value = "";
                watermarkStudio.style.display = "none";
                dropzone.style.display = "block";
            });

            // ==========================================
            // TABS SWITCHING
            // ==========================================
            wmTabBtns.forEach(btn => {
                btn.addEventListener("click", () => {
                    wmTabBtns.forEach(b => b.classList.remove("active"));
                    btn.classList.add("active");
                    wmType = btn.getAttribute("data-type");

                    controlsText.style.display = wmType === "text" ? "block" : "none";
                    controlsImage.style.display = wmType === "image" ? "block" : "none";
                    controlsNumbers.style.display = wmType === "numbers" ? "block" : "none";

                    updateLiveOverlay();
                });
            });

            // ==========================================
            // TEXT SETTINGS EVENTS
            // ==========================================
            inpWmText.addEventListener("input", (e) => {
                textSettings.text = e.target.value;
                updateLiveOverlay();
            });

            presetChips.forEach(chip => {
                chip.addEventListener("click", () => {
                    const text = chip.getAttribute("data-preset");
                    inpWmText.value = text;
                    textSettings.text = text;
                    updateLiveOverlay();
                });
            });

            rangeFontSize.addEventListener("input", (e) => {
                textSettings.fontSize = parseInt(e.target.value, 10);
                valFontSize.textContent = `${textSettings.fontSize} px`;
                updateLiveOverlay();
            });

            rangeRotation.addEventListener("input", (e) => {
                textSettings.rotation = parseInt(e.target.value, 10);
                valRotation.textContent = `${textSettings.rotation}°`;
                updateLiveOverlay();
            });

            rangeOpacity.addEventListener("input", (e) => {
                const pct = parseInt(e.target.value, 10);
                textSettings.opacity = pct / 100;
                valOpacity.textContent = `${pct}%`;
                updateLiveOverlay();
            });

            colorRadioBtns.forEach(btn => {
                btn.addEventListener("click", () => {
                    colorRadioBtns.forEach(b => b.classList.remove("active"));
                    btn.classList.add("active");
                    textSettings.color = btn.getAttribute("data-color");
                    updateLiveOverlay();
                });
            });

            textAnchorBtns.forEach(btn => {
                btn.addEventListener("click", () => {
                    textAnchorBtns.forEach(b => b.classList.remove("active"));
                    btn.classList.add("active");
                    textSettings.position = btn.getAttribute("data-pos");
                    updateLiveOverlay();
                });
            });

            chkMosaicRepeat.addEventListener("change", (e) => {
                textSettings.mosaic = e.target.checked;
                updateLiveOverlay();
            });

            chkBehindContent.addEventListener("change", (e) => {
                textSettings.behind = e.target.checked;
            });

            // ==========================================
            // IMAGE SETTINGS EVENTS
            // ==========================================
            logoFileInput.addEventListener("change", (e) => {
                const file = e.target.files[0];
                if (!file) return;

                const reader = new FileReader();
                reader.onload = (event) => {
                    const img = new Image();
                    img.onload = () => {
                        imageSettings.dataUrl = event.target.result;
                        imageSettings.imgElement = img;
                        updateLiveOverlay();
                        showToast("Logo image loaded successfully", "success");
                    };
                    img.src = event.target.result;
                };
                reader.readAsDataURL(file);
            });

            rangeImgScale.addEventListener("input", (e) => {
                imageSettings.scale = parseInt(e.target.value, 10);
                valImgScale.textContent = `${imageSettings.scale}%`;
                updateLiveOverlay();
            });

            rangeImgOpacity.addEventListener("input", (e) => {
                const pct = parseInt(e.target.value, 10);
                imageSettings.opacity = pct / 100;
                valImgOpacity.textContent = `${pct}%`;
                updateLiveOverlay();
            });

            rangeImgRotation.addEventListener("input", (e) => {
                imageSettings.rotation = parseInt(e.target.value, 10);
                valImgRotation.textContent = `${imageSettings.rotation}°`;
                updateLiveOverlay();
            });

            imgAnchorBtns.forEach(btn => {
                btn.addEventListener("click", () => {
                    imgAnchorBtns.forEach(b => b.classList.remove("active"));
                    btn.classList.add("active");
                    imageSettings.position = btn.getAttribute("data-pos");
                    updateLiveOverlay();
                });
            });

            // ==========================================
            // NUMBERS SETTINGS EVENTS
            // ==========================================
            selectNumFormat.addEventListener("change", (e) => {
                numberSettings.format = e.target.value;
                updateLiveOverlay();
            });

            selectNumPos.addEventListener("change", (e) => {
                numberSettings.position = e.target.value;
                updateLiveOverlay();
            });

            rangeNumSize.addEventListener("input", (e) => {
                numberSettings.size = parseInt(e.target.value, 10);
                valNumSize.textContent = `${numberSettings.size} pt`;
                updateLiveOverlay();
            });

            inpNumStart.addEventListener("input", (e) => {
                numberSettings.startPage = Math.max(1, parseInt(e.target.value, 10) || 1);
                updateLiveOverlay();
            });

            // ==========================================
            // LIVE PAGE RENDERING (PDF.JS)
            // ==========================================
            async function renderPreviewPage() {
                if (!pdfJsDoc) return;

                if (activeRenderTask) {
                    try { activeRenderTask.cancel(); } catch (e) { }
                }

                previewPageLabel.textContent = `Page ${currentPreviewPage} / ${totalPages}`;
                btnPreviewPrev.disabled = currentPreviewPage <= 1;
                btnPreviewNext.disabled = currentPreviewPage >= totalPages;

                try {
                    const page = await pdfJsDoc.getPage(currentPreviewPage);
                    const unscaledViewport = page.getViewport({ scale: 1.0 });

                    // Scale to fit viewport container cleanly (~460px width)
                    const containerWidth = 460;
                    const scale = containerWidth / unscaledViewport.width;
                    const viewport = page.getViewport({ scale: scale });

                    pdfPreviewCanvas.width = viewport.width;
                    pdfPreviewCanvas.height = viewport.height;
                    pdfPreviewCanvas.style.width = `${viewport.width}px`;
                    pdfPreviewCanvas.style.height = `${viewport.height}px`;

                    previewPageCanvasWrap.style.width = `${viewport.width}px`;
                    previewPageCanvasWrap.style.height = `${viewport.height}px`;

                    activeRenderTask = page.render({
                        canvasContext: previewCtx,
                        viewport: viewport
                    });
                    await activeRenderTask.promise;
                    activeRenderTask = null;

                    updateLiveOverlay();
                } catch (err) {
                    if (err.name !== "RenderingCancelledException") {
                        console.error("Preview render error:", err);
                    }
                }
            }

            btnPreviewPrev.addEventListener("click", () => {
                if (currentPreviewPage > 1) {
                    currentPreviewPage--;
                    renderPreviewPage();
                }
            });

            btnPreviewNext.addEventListener("click", () => {
                if (currentPreviewPage < totalPages) {
                    currentPreviewPage++;
                    renderPreviewPage();
                }
            });

            // ==========================================
            // LIVE WATERMARK OVERLAY (DOM)
            // ==========================================
            function updateLiveOverlay() {
                liveWatermarkOverlay.innerHTML = "";

                // TYPE 1: TEXT WATERMARK
                if (wmType === "text") {
                    if (!textSettings.text.trim()) return;

                    if (textSettings.mosaic) {
                        // Repeating Mosaic Grid
                        const mosaicWrap = document.createElement("div");
                        mosaicWrap.style.width = "100%";
                        mosaicWrap.style.height = "100%";
                        mosaicWrap.style.display = "grid";
                        mosaicWrap.style.gridTemplateColumns = "repeat(3, 1fr)";
                        mosaicWrap.style.gridTemplateRows = "repeat(4, 1fr)";
                        mosaicWrap.style.opacity = textSettings.opacity;

                        for (let i = 0; i < 12; i++) {
                            const item = document.createElement("div");
                            item.style.display = "flex";
                            item.style.alignItems = "center";
                            item.style.justifyContent = "center";
                            item.style.transform = `rotate(${textSettings.rotation}deg)`;
                            item.style.fontFamily = "Helvetica, Arial, sans-serif";
                            item.style.fontWeight = "800";
                            item.style.fontSize = `${Math.round(textSettings.fontSize * 0.45)}px`;
                            item.style.color = textSettings.color;
                            item.style.whiteSpace = "nowrap";
                            item.textContent = textSettings.text;
                            mosaicWrap.appendChild(item);
                        }

                        liveWatermarkOverlay.appendChild(mosaicWrap);
                    } else {
                        // Single Anchor Position
                        const stamp = document.createElement("div");
                        stamp.style.position = "absolute";
                        stamp.style.fontFamily = "Helvetica, Arial, sans-serif";
                        stamp.style.fontWeight = "800";
                        stamp.style.fontSize = `${Math.round(textSettings.fontSize * 0.55)}px`;
                        stamp.style.color = textSettings.color;
                        stamp.style.opacity = textSettings.opacity;
                        stamp.style.transform = `translate(-50%, -50%) rotate(${textSettings.rotation}deg)`;
                        stamp.style.whiteSpace = "nowrap";
                        stamp.textContent = textSettings.text;

                        const pos = getAnchorCoords(textSettings.position);
                        stamp.style.left = `${pos.xPercent}%`;
                        stamp.style.top = `${pos.yPercent}%`;

                        liveWatermarkOverlay.appendChild(stamp);
                    }
                }

                // TYPE 2: IMAGE LOGO WATERMARK
                else if (wmType === "image") {
                    if (!imageSettings.dataUrl) {
                        const hint = document.createElement("div");
                        hint.style.position = "absolute";
                        hint.style.top = "50%";
                        hint.style.left = "50%";
                        hint.style.transform = "translate(-50%, -50%)";
                        hint.style.padding = "0.5rem 1rem";
                        hint.style.background = "rgba(0,0,0,0.6)";
                        hint.style.color = "#ffffff";
                        hint.style.borderRadius = "4px";
                        hint.style.fontSize = "0.8rem";
                        hint.textContent = "Upload a logo image to preview";
                        liveWatermarkOverlay.appendChild(hint);
                        return;
                    }

                    const imgBox = document.createElement("div");
                    imgBox.style.position = "absolute";
                    const pos = getAnchorCoords(imageSettings.position);
                    imgBox.style.left = `${pos.xPercent}%`;
                    imgBox.style.top = `${pos.yPercent}%`;
                    imgBox.style.transform = `translate(-50%, -50%) rotate(${imageSettings.rotation}deg)`;
                    imgBox.style.opacity = imageSettings.opacity;

                    const img = document.createElement("img");
                    img.src = imageSettings.dataUrl;
                    const wPx = Math.round(400 * (imageSettings.scale / 100));
                    img.style.width = `${wPx}px`;
                    img.style.height = "auto";
                    img.style.display = "block";

                    imgBox.appendChild(img);
                    liveWatermarkOverlay.appendChild(imgBox);
                }

                // TYPE 3: PAGE NUMBERS
                else if (wmType === "numbers") {
                    if (currentPreviewPage < numberSettings.startPage) return;

                    const numText = formatPageNumberText(currentPreviewPage, totalPages, numberSettings.format);
                    const tag = document.createElement("div");
                    tag.style.position = "absolute";
                    tag.style.fontFamily = "Helvetica, Arial, sans-serif";
                    tag.style.fontSize = `${numberSettings.size}px`;
                    tag.style.color = "#374151";
                    tag.style.fontWeight = "600";
                    tag.textContent = numText;

                    if (numberSettings.position === "bottom-center") {
                        tag.style.bottom = "12px";
                        tag.style.left = "50%";
                        tag.style.transform = "translateX(-50%)";
                    } else if (numberSettings.position === "bottom-right") {
                        tag.style.bottom = "12px";
                        tag.style.right = "20px";
                    } else if (numberSettings.position === "bottom-left") {
                        tag.style.bottom = "12px";
                        tag.style.left = "20px";
                    } else if (numberSettings.position === "top-right") {
                        tag.style.top = "12px";
                        tag.style.right = "20px";
                    } else if (numberSettings.position === "top-center") {
                        tag.style.top = "12px";
                        tag.style.left = "50%";
                        tag.style.transform = "translateX(-50%)";
                    }

                    liveWatermarkOverlay.appendChild(tag);
                }
            }

            function getAnchorCoords(pos) {
                switch (pos) {
                    case "top-left": return { xPercent: 20, yPercent: 15 };
                    case "top-center": return { xPercent: 50, yPercent: 15 };
                    case "top-right": return { xPercent: 80, yPercent: 15 };
                    case "center-left": return { xPercent: 20, yPercent: 50 };
                    case "center": return { xPercent: 50, yPercent: 50 };
                    case "center-right": return { xPercent: 80, yPercent: 50 };
                    case "bottom-left": return { xPercent: 20, yPercent: 85 };
                    case "bottom-center": return { xPercent: 50, yPercent: 85 };
                    case "bottom-right": return { xPercent: 80, yPercent: 85 };
                    default: return { xPercent: 50, yPercent: 50 };
                }
            }

            function formatPageNumberText(n, total, format) {
                switch (format) {
                    case "page_x_of_y": return `Page ${n} of ${total}`;
                    case "x_slash_y": return `${n} / ${total}`;
                    case "page_x": return `Page ${n}`;
                    case "dash_x_dash": return `- ${n} -`;
                    case "x_only": return `${n}`;
                    default: return `Page ${n} of ${total}`;
                }
            }

            // Hex to PDF-Lib RGB Helper
            function hexToRgb(hex) {
                hex = hex.replace("#", "");
                if (hex.length === 3) {
                    hex = hex.split("").map(c => c + c).join("");
                }
                const num = parseInt(hex, 16);
                return {
                    r: ((num >> 16) & 255) / 255,
                    g: ((num >> 8) & 255) / 255,
                    b: (num & 255) / 255
                };
            }

            // ==========================================
            // EXPORT ENGINE (PDF-LIB VECTOR EMBEDDING)
            // ==========================================
            btnExportWatermarkedPdf.addEventListener("click", async () => {
                if (!loadedBuffer) return;

                if (wmType === "image" && !imageSettings.dataUrl) {
                    showToast("Please upload an image logo first.", "error");
                    return;
                }

                try {
                    btnExportWatermarkedPdf.disabled = true;
                    showToast("Embedding watermark onto PDF pages...", "info");

                    const pdfDoc = await PDFLib.PDFDocument.load(loadedBuffer);
                    const pages = pdfDoc.getPages();
                    const font = await pdfDoc.embedFont(PDFLib.StandardFonts.HelveticaBold);
                    const numFont = await pdfDoc.embedFont(PDFLib.StandardFonts.Helvetica);

                    // Pre-embed Image if Image Watermark
                    let embeddedImage = null;
                    if (wmType === "image") {
                        const byteString = atob(imageSettings.dataUrl.split(",")[1]);
                        const ab = new ArrayBuffer(byteString.length);
                        const ia = new Uint8Array(ab);
                        for (let i = 0; i < byteString.length; i++) {
                            ia[i] = byteString.charCodeAt(i);
                        }

                        if (imageSettings.dataUrl.startsWith("data:image/jpeg")) {
                            embeddedImage = await pdfDoc.embedJpg(ab);
                        } else {
                            embeddedImage = await pdfDoc.embedPng(ab);
                        }
                    }

                    // Process each page
                    for (let idx = 0; idx < pages.length; idx++) {
                        const page = pages[idx];
                        const { width: pWidth, height: pHeight } = page.getSize();
                        const pageNum = idx + 1;

                        // 1. TEXT WATERMARK
                        if (wmType === "text" && textSettings.text.trim()) {
                            const rgb = hexToRgb(textSettings.color);
                            const text = textSettings.text;
                            const textWidth = font.widthOfTextAtSize(text, textSettings.fontSize);
                            const textHeight = font.heightAtSize(textSettings.fontSize);

                            if (textSettings.mosaic) {
                                // 3x4 Mosaic Grid
                                const cols = 3;
                                const rows = 4;
                                const colStep = pWidth / cols;
                                const rowStep = pHeight / rows;

                                for (let c = 0; c < cols; c++) {
                                    for (let r = 0; r < rows; r++) {
                                        const cx = (c + 0.5) * colStep;
                                        const cy = (r + 0.5) * rowStep;

                                        page.drawText(text, {
                                            x: cx - textWidth / 2,
                                            y: cy - textHeight / 2,
                                            size: textSettings.fontSize * 0.75,
                                            font: font,
                                            color: PDFLib.rgb(rgb.r, rgb.g, rgb.b),
                                            opacity: textSettings.opacity,
                                            rotate: PDFLib.degrees(textSettings.rotation)
                                        });
                                    }
                                }
                            } else {
                                // Single Position
                                const anchor = getAnchorCoords(textSettings.position);
                                const targetX = (anchor.xPercent / 100) * pWidth;
                                const targetY = (1 - (anchor.yPercent / 100)) * pHeight;

                                page.drawText(text, {
                                    x: targetX - textWidth / 2,
                                    y: targetY - textHeight / 2,
                                    size: textSettings.fontSize,
                                    font: font,
                                    color: PDFLib.rgb(rgb.r, rgb.g, rgb.b),
                                    opacity: textSettings.opacity,
                                    rotate: PDFLib.degrees(textSettings.rotation)
                                });
                            }
                        }

                        // 2. IMAGE WATERMARK
                        else if (wmType === "image" && embeddedImage) {
                            const imgAspect = embeddedImage.width / embeddedImage.height;
                            const targetWidth = (pWidth * (imageSettings.scale / 100));
                            const targetHeight = targetWidth / imgAspect;

                            const anchor = getAnchorCoords(imageSettings.position);
                            const targetX = (anchor.xPercent / 100) * pWidth;
                            const targetY = (1 - (anchor.yPercent / 100)) * pHeight;

                            page.drawImage(embeddedImage, {
                                x: targetX - targetWidth / 2,
                                y: targetY - targetHeight / 2,
                                width: targetWidth,
                                height: targetHeight,
                                opacity: imageSettings.opacity,
                                rotate: PDFLib.degrees(imageSettings.rotation)
                            });
                        }

                        // 3. PAGE NUMBERS
                        else if (wmType === "numbers") {
                            if (pageNum >= numberSettings.startPage) {
                                const numText = formatPageNumberText(pageNum, totalPages, numberSettings.format);
                                const numWidth = numFont.widthOfTextAtSize(numText, numberSettings.size);
                                let nx = 0;
                                let ny = 25; // default bottom margin

                                if (numberSettings.position === "bottom-center") {
                                    nx = (pWidth - numWidth) / 2;
                                    ny = 25;
                                } else if (numberSettings.position === "bottom-right") {
                                    nx = pWidth - numWidth - 35;
                                    ny = 25;
                                } else if (numberSettings.position === "bottom-left") {
                                    nx = 35;
                                    ny = 25;
                                } else if (numberSettings.position === "top-right") {
                                    nx = pWidth - numWidth - 35;
                                    ny = pHeight - 35;
                                } else if (numberSettings.position === "top-center") {
                                    nx = (pWidth - numWidth) / 2;
                                    ny = pHeight - 35;
                                }

                                page.drawText(numText, {
                                    x: nx,
                                    y: ny,
                                    size: numberSettings.size,
                                    font: numFont,
                                    color: PDFLib.rgb(0.2, 0.2, 0.2),
                                    opacity: 0.85
                                });
                            }
                        }
                    }

                    const outputPdfBytes = await pdfDoc.save();
                    const baseName = loadedFile.name.replace(/\.pdf$/i, "");
                    downloadBlob(new Blob([outputPdfBytes], { type: "application/pdf" }), `${baseName}-watermarked.pdf`);

                    showToast("PDF watermarked and downloaded successfully!", "success");
                } catch (err) {
                    console.error("Watermark export error:", err);
                    showToast("Failed to watermark PDF: " + err.message, "error");
                } finally {
                    btnExportWatermarkedPdf.disabled = false;
                }
            });
        });
