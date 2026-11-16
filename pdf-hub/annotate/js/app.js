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

// === App-Specific Script (annotate) ===
// Configure PDF.js Worker
        pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

        document.addEventListener("DOMContentLoaded", () => {
            // Check if page was reloaded (F5 on mobile): return to project hub (/apps/pdf-hub/)
            try {
                const navEntries = performance.getEntriesByType && performance.getEntriesByType('navigation');
                const isReload = (navEntries && navEntries.length > 0) ? navEntries[0].type === 'reload' : (window.performance && window.performance.navigation && window.performance.navigation.type === 1);
                if (isReload && window.innerWidth <= 992) {
                    window.location.href = "/apps/pdf-hub/";
                    return;
                }
            } catch (e) {
                console.warn(e);
            }

            // Screen elements
            const uploadScreen = document.getElementById("upload-screen");
            const editorStudio = document.getElementById("editor-studio");
            const mainFooter = document.getElementById("main-footer");
            const dropzone = document.getElementById("dropzone");
            const fileInput = document.getElementById("file-input");
            const studioLoader = document.getElementById("studio-loader");
            const loaderStatus = document.getElementById("loader-status");
            const docFilename = document.getElementById("doc-filename");

            // Canvas & Wrapper
            const pageWrapper = document.getElementById("page-wrapper");
            const baseCanvas = document.getElementById("pdf-base-canvas");
            const drawCanvas = document.getElementById("pdf-draw-canvas");
            const canvasContainer = document.getElementById("canvas-container");
            const inlineTextEditor = document.getElementById("inline-text-editor");
            const baseCtx = baseCanvas.getContext("2d");
            const drawCtx = drawCanvas.getContext("2d");

            // Nav & Controls
            const btnPrev = document.getElementById("btn-prev-page");
            const btnNext = document.getElementById("btn-next-page");
            const pageIndicator = document.getElementById("page-indicator");
            const btnZoomIn = document.getElementById("btn-zoom-in");
            const btnZoomOut = document.getElementById("btn-zoom-out");
            const btnFitWidth = document.getElementById("btn-fit-width");
            const zoomLevelText = document.getElementById("zoom-level-text");
            const btnUndo = document.getElementById("btn-undo");
            const btnRedo = document.getElementById("btn-redo");
            const btnClearPage = document.getElementById("btn-clear-page");
            const btnExportPdf = document.getElementById("btn-export-pdf");
            const btnCloseFile = document.getElementById("btn-close-file");

            // Toolbars
            const toolButtons = document.querySelectorAll(".tool-select-btn");
            const colorSwatches = document.querySelectorAll(".color-swatch");
            const customColorInput = document.getElementById("custom-color");
            const widthOptions = document.querySelectorAll(".width-option[data-width]");
            const fontSizeOptions = document.querySelectorAll(".width-option[data-fontsize]");
            const fontSizeGroup = document.getElementById("font-size-control-group");

            // State variables
            let originalFileBuffer = null;
            let originalFileName = "document.pdf";
            let pdfDoc = null;
            let totalPages = 0;
            let currentPageNum = 1;
            let currentScale = 1.25;

            // Annotation Settings
            let activeTool = "pen"; // pen, highlighter, text, rect, circle, arrow, line, eraser
            let activeColor = "#ef4444";
            let activeWidth = 4;
            let activeFontSize = 18;

            // Annotation Storage: pageNum -> array of annotation actions
            // Each action coordinates normalized 0..1 relative to page width and height!
            const annotationsByPage = {};
            const redoStackByPage = {};

            // Drawing interaction state
            let isDrawing = false;
            let startPoint = { x: 0, y: 0 };
            let currentPath = [];

            function showLoader(msg) {
                if (loaderStatus) loaderStatus.textContent = msg;
                if (studioLoader) studioLoader.style.display = "flex";
            }

            function hideLoader() {
                if (studioLoader) studioLoader.style.display = "none";
            }

            // ============================================================
            // File Upload & PDF Initialization
            // ============================================================
            setupDropzone(dropzone, fileInput, (files) => {
                if (!files || files.length === 0) return;
                const file = files[0];
                if (file.type !== "application/pdf" && !file.name.toLowerCase().endsWith(".pdf")) {
                    showToast("Please upload a valid PDF document.", "error");
                    return;
                }
                loadPdfFile(file);
            });

            async function loadPdfFile(file) {
                try {
                    showLoader("Reading PDF file...");
                    originalFileName = file.name;
                    originalFileBuffer = await file.arrayBuffer();

                    // Load with PDF.js
                    const loadingTask = pdfjsLib.getDocument({ data: originalFileBuffer.slice(0) });
                    pdfDoc = await loadingTask.promise;
                    totalPages = pdfDoc.numPages;
                    currentPageNum = 1;

                    // Switch screens
                    document.body.classList.add("in-studio-mode");
                    uploadScreen.style.display = "none";
                    mainFooter.style.display = "none";
                    editorStudio.style.display = "flex";
                    docFilename.textContent = originalFileName;

                    // Reset annotations store
                    for (let p = 1; p <= totalPages; p++) {
                        annotationsByPage[p] = [];
                        redoStackByPage[p] = [];
                    }

                    // Auto-fit document width (optimal for mobile & desktop)
                    await autoFitWidth();

                    // Render initial page
                    await renderPage(currentPageNum);
                    showToast(`Opened ${originalFileName} (${totalPages} pages)`, "success");
                } catch (err) {
                    console.error("Failed to load PDF:", err);
                    showToast("Failed to load PDF: " + err.message, "error");
                    hideLoader();
                }
            }

            // ============================================================
            // IndexedDB Cache Layer (Preserves document & markup on back/close)
            // ============================================================
            // Close & Return to Dropzone / Project Hub
            btnCloseFile.addEventListener("click", () => {
                if (window.innerWidth <= 992) {
                    window.location.href = "/apps/pdf-hub/";
                } else {
                    document.body.classList.remove("in-studio-mode");
                    pdfDoc = null;
                    originalFileBuffer = null;
                    editorStudio.style.display = "none";
                    uploadScreen.style.display = "block";
                    mainFooter.style.display = "block";
                    fileInput.value = "";
                }
            });

            // Auto-fit Width calculation helper (optimized for mobile preview)
            async function autoFitWidth() {
                if (!pdfDoc) return;
                try {
                    const page = await pdfDoc.getPage(currentPageNum);
                    const unscaled = page.getViewport({ scale: 1.0 });
                    const isMobile = window.innerWidth <= 992;
                    const pad = isMobile ? 12 : 70;
                    const availWidth = Math.max(180, (canvasContainer.clientWidth || window.innerWidth) - pad);
                    currentScale = Math.max(0.35, Math.min(2.5, Math.round((availWidth / unscaled.width) * 20) / 20));
                } catch (e) {
                    currentScale = 1.0;
                }
            }

            // ============================================================
            // PDF Page Rendering & Canvas Synchronization
            // ============================================================
            async function renderPage(pageNum) {
                if (!pdfDoc) return;
                showLoader(`Rendering page ${pageNum} of ${totalPages}...`);
                inlineTextEditor.style.display = "none";

                try {
                    const page = await pdfDoc.getPage(pageNum);
                    const viewport = page.getViewport({ scale: currentScale });

                    // Set matching canvas pixel dimensions
                    baseCanvas.width = viewport.width;
                    baseCanvas.height = viewport.height;
                    drawCanvas.width = viewport.width;
                    drawCanvas.height = viewport.height;

                    pageWrapper.style.width = `${viewport.width}px`;
                    pageWrapper.style.height = `${viewport.height}px`;

                    // Render original PDF page onto base canvas
                    const renderContext = {
                        canvasContext: baseCtx,
                        viewport: viewport
                    };
                    await page.render(renderContext).promise;

                    // Update UI page buttons
                    pageIndicator.textContent = `Page ${pageNum} of ${totalPages}`;
                    btnPrev.disabled = pageNum <= 1;
                    btnNext.disabled = pageNum >= totalPages;
                    zoomLevelText.textContent = `${Math.round(currentScale * 100)}%`;

                    // Redraw annotations for current page
                    redrawAnnotations();
                    updateUndoRedoButtons();
                } catch (err) {
                    console.error("Page render error:", err);
                    showToast("Error rendering page: " + err.message, "error");
                } finally {
                    hideLoader();
                }
            }

            // Navigation handlers
            btnPrev.addEventListener("click", async () => {
                if (currentPageNum > 1) {
                    currentPageNum--;
                    await renderPage(currentPageNum);
                }
            });

            btnNext.addEventListener("click", async () => {
                if (currentPageNum < totalPages) {
                    currentPageNum++;
                    await renderPage(currentPageNum);
                }
            });

            // Zoom handlers
            btnZoomIn.addEventListener("click", () => {
                if (currentScale < 3.0) {
                    currentScale = Math.round((currentScale + 0.2) * 20) / 20;
                    renderPage(currentPageNum);
                }
            });

            btnZoomOut.addEventListener("click", () => {
                if (currentScale > 0.4) {
                    currentScale = Math.round((currentScale - 0.2) * 20) / 20;
                    renderPage(currentPageNum);
                }
            });

            btnFitWidth.addEventListener("click", async () => {
                await autoFitWidth();
                renderPage(currentPageNum);
            });

            // Auto re-fit on orientation change / mobile resize
            let resizeTimer;
            window.addEventListener("resize", () => {
                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(async () => {
                    if (editorStudio.style.display === "flex" && window.innerWidth <= 992) {
                        await autoFitWidth();
                        renderPage(currentPageNum);
                    }
                }, 200);
            });

            // ============================================================
            // Drawing & Annotation Engine
            // ============================================================
            function getCanvasCoordinates(e) {
                const rect = drawCanvas.getBoundingClientRect();
                const clientX = e.touches ? e.touches[0].clientX : e.clientX;
                const clientY = e.touches ? e.touches[0].clientY : e.clientY;

                const xPx = clientX - rect.left;
                const yPx = clientY - rect.top;

                // Normalize to [0..1] range
                return {
                    x: Math.max(0, Math.min(1, xPx / drawCanvas.width)),
                    y: Math.max(0, Math.min(1, yPx / drawCanvas.height)),
                    pxX: xPx,
                    pxY: yPx
                };
            }

            // Mouse / Touch Event Listeners on Draw Canvas
            drawCanvas.addEventListener("pointerdown", handlePointerDown);
            drawCanvas.addEventListener("pointermove", handlePointerMove);
            window.addEventListener("pointerup", handlePointerUp);

            function handlePointerDown(e) {
                if (e.button !== 0) return; // Primary click only
                const coords = getCanvasCoordinates(e);

                if (activeTool === "text") {
                    placeTextNote(coords);
                    return;
                }

                if (activeTool === "eraser") {
                    eraseAnnotationAt(coords);
                    return;
                }

                isDrawing = true;
                startPoint = { x: coords.x, y: coords.y };

                if (activeTool === "pen" || activeTool === "highlighter") {
                    currentPath = [{ x: coords.x, y: coords.y }];
                }
            }

            function handlePointerMove(e) {
                const coords = getCanvasCoordinates(e);

                if (activeTool === "eraser" && isDrawing) {
                    eraseAnnotationAt(coords);
                    return;
                }

                if (!isDrawing) return;

                if (activeTool === "pen" || activeTool === "highlighter") {
                    currentPath.push({ x: coords.x, y: coords.y });
                    // Draw live continuous stroke
                    redrawAnnotations();
                    renderSingleStroke(currentPath, activeTool, activeColor, activeWidth, true);
                } else if (["rect", "circle", "line", "arrow"].includes(activeTool)) {
                    // Preview shape dynamically
                    redrawAnnotations();
                    renderShapePreview(startPoint, coords, activeTool, activeColor, activeWidth);
                }
            }

            function handlePointerUp(e) {
                if (!isDrawing) return;
                isDrawing = false;
                const coords = getCanvasCoordinates(e);

                const pageList = annotationsByPage[currentPageNum] || [];

                if (activeTool === "pen" || activeTool === "highlighter") {
                    if (currentPath.length > 1) {
                        pageList.push({
                            type: activeTool,
                            color: activeColor,
                            width: activeWidth,
                            points: currentPath
                        });
                        recordStateChange();
                    }
                } else if (["rect", "circle", "line", "arrow"].includes(activeTool)) {
                    const dist = Math.hypot(coords.x - startPoint.x, coords.y - startPoint.y);
                    if (dist > 0.005) { // Minimum threshold to prevent accidental dots
                        pageList.push({
                            type: activeTool,
                            color: activeColor,
                            width: activeWidth,
                            x1: startPoint.x,
                            y1: startPoint.y,
                            x2: coords.x,
                            y2: coords.y
                        });
                        recordStateChange();
                    }
                }

                currentPath = [];
                redrawAnnotations();
            }

            // Inline Text Placement
            function placeTextNote(coords) {
                inlineTextEditor.style.left = `${coords.pxX}px`;
                inlineTextEditor.style.top = `${coords.pxY}px`;
                inlineTextEditor.style.color = activeColor;
                inlineTextEditor.style.fontSize = `${activeFontSize}px`;
                inlineTextEditor.style.display = "block";
                inlineTextEditor.value = "";
                inlineTextEditor.focus();

                function commitText(e) {
                    if (e.key === "Enter" || e.type === "blur") {
                        const val = inlineTextEditor.value.trim();
                        if (val) {
                            annotationsByPage[currentPageNum].push({
                                type: "text",
                                text: val,
                                color: activeColor,
                                size: activeFontSize,
                                x: coords.x,
                                y: coords.y
                            });
                            recordStateChange();
                            redrawAnnotations();
                        }
                        inlineTextEditor.style.display = "none";
                        inlineTextEditor.removeEventListener("keydown", commitText);
                        inlineTextEditor.removeEventListener("blur", commitText);
                    } else if (e.key === "Escape") {
                        inlineTextEditor.style.display = "none";
                        inlineTextEditor.removeEventListener("keydown", commitText);
                        inlineTextEditor.removeEventListener("blur", commitText);
                    }
                }

                inlineTextEditor.addEventListener("keydown", commitText);
                inlineTextEditor.addEventListener("blur", commitText);
            }

            // Eraser logic
            function eraseAnnotationAt(coords) {
                const list = annotationsByPage[currentPageNum];
                if (!list || list.length === 0) return;

                const threshold = 0.03; // Radius in normalized space
                let hitIndex = -1;

                for (let i = list.length - 1; i >= 0; i--) {
                    const item = list[i];
                    if (item.type === "pen" || item.type === "highlighter") {
                        const isClose = item.points.some(pt => Math.hypot(pt.x - coords.x, pt.y - coords.y) < threshold);
                        if (isClose) { hitIndex = i; break; }
                    } else if (item.type === "text") {
                        if (Math.hypot(item.x - coords.x, item.y - coords.y) < threshold * 2) {
                            hitIndex = i; break;
                        }
                    } else {
                        // Shapes: check midpoint or endpoints
                        const midX = (item.x1 + item.x2) / 2;
                        const midY = (item.y1 + item.y2) / 2;
                        if (Math.hypot(midX - coords.x, midY - coords.y) < threshold * 2) {
                            hitIndex = i; break;
                        }
                    }
                }

                if (hitIndex !== -1) {
                    list.splice(hitIndex, 1);
                    recordStateChange();
                    redrawAnnotations();
                }
            }

            // ============================================================
            // Redraw & Render Helper Functions
            // ============================================================
            function redrawAnnotations() {
                drawCtx.clearRect(0, 0, drawCanvas.width, drawCanvas.height);
                const list = annotationsByPage[currentPageNum] || [];

                list.forEach(item => {
                    if (item.type === "pen" || item.type === "highlighter") {
                        renderSingleStroke(item.points, item.type, item.color, item.width, false);
                    } else if (item.type === "text") {
                        renderTextItem(item);
                    } else {
                        renderShapeItem(item);
                    }
                });
            }

            function renderSingleStroke(points, toolType, color, width, isLive) {
                if (!points || points.length < 2) return;
                const W = drawCanvas.width;
                const H = drawCanvas.height;

                drawCtx.save();
                drawCtx.beginPath();
                drawCtx.moveTo(points[0].x * W, points[0].y * H);

                for (let i = 1; i < points.length; i++) {
                    drawCtx.lineTo(points[i].x * W, points[i].y * H);
                }

                drawCtx.lineCap = "round";
                drawCtx.lineJoin = "round";
                drawCtx.strokeStyle = color;

                if (toolType === "highlighter") {
                    drawCtx.globalAlpha = 0.38;
                    drawCtx.lineWidth = width * 3.5;
                } else {
                    drawCtx.globalAlpha = 1.0;
                    drawCtx.lineWidth = width;
                }

                drawCtx.stroke();
                drawCtx.restore();
            }

            function renderShapePreview(start, current, toolType, color, width) {
                const W = drawCanvas.width;
                const H = drawCanvas.height;

                const item = {
                    type: toolType,
                    color: color,
                    width: width,
                    x1: start.x,
                    y1: start.y,
                    x2: current.x,
                    y2: current.y
                };
                renderShapeItem(item);
            }

            function renderShapeItem(item) {
                const W = drawCanvas.width;
                const H = drawCanvas.height;

                const x1 = item.x1 * W;
                const y1 = item.y1 * H;
                const x2 = item.x2 * W;
                const y2 = item.y2 * H;

                drawCtx.save();
                drawCtx.strokeStyle = item.color;
                drawCtx.lineWidth = item.width;
                drawCtx.lineCap = "round";
                drawCtx.lineJoin = "round";

                if (item.type === "rect") {
                    drawCtx.strokeRect(Math.min(x1, x2), Math.min(y1, y2), Math.abs(x2 - x1), Math.abs(y2 - y1));
                } else if (item.type === "circle") {
                    const cx = (x1 + x2) / 2;
                    const cy = (y1 + y2) / 2;
                    const rx = Math.abs(x2 - x1) / 2;
                    const ry = Math.abs(y2 - y1) / 2;
                    drawCtx.beginPath();
                    drawCtx.ellipse(cx, cy, Math.max(1, rx), Math.max(1, ry), 0, 0, Math.PI * 2);
                    drawCtx.stroke();
                } else if (item.type === "line") {
                    drawCtx.beginPath();
                    drawCtx.moveTo(x1, y1);
                    drawCtx.lineTo(x2, y2);
                    drawCtx.stroke();
                } else if (item.type === "arrow") {
                    drawArrow(drawCtx, x1, y1, x2, y2, item.width);
                }

                drawCtx.restore();
            }

            function drawArrow(ctx, fromX, fromY, toX, toY, width) {
                const headLen = Math.max(14, width * 3);
                const angle = Math.atan2(toY - fromY, toX - fromX);

                ctx.beginPath();
                ctx.moveTo(fromX, fromY);
                ctx.lineTo(toX, toY);
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(toX, toY);
                ctx.lineTo(toX - headLen * Math.cos(angle - Math.PI / 6), toY - headLen * Math.sin(angle - Math.PI / 6));
                ctx.lineTo(toX - headLen * Math.cos(angle + Math.PI / 6), toY - headLen * Math.sin(angle + Math.PI / 6));
                ctx.lineTo(toX, toY);
                ctx.fillStyle = ctx.strokeStyle;
                ctx.fill();
            }

            function renderTextItem(item) {
                const W = drawCanvas.width;
                const H = drawCanvas.height;

                drawCtx.save();
                drawCtx.fillStyle = item.color;
                drawCtx.font = `bold ${item.size}px 'Plus Jakarta Sans', sans-serif`;
                drawCtx.textBaseline = "top";
                drawCtx.fillText(item.text, item.x * W, item.y * H);
                drawCtx.restore();
            }

            // ============================================================
            // Undo / Redo / Clear Actions
            // ============================================================
            function recordStateChange() {
                redoStackByPage[currentPageNum] = []; // Clear redo stack on new action
                updateUndoRedoButtons();
            }

            function updateUndoRedoButtons() {
                const history = annotationsByPage[currentPageNum] || [];
                const redo = redoStackByPage[currentPageNum] || [];

                btnUndo.disabled = history.length === 0;
                btnRedo.disabled = redo.length === 0;
            }

            btnUndo.addEventListener("click", () => {
                const history = annotationsByPage[currentPageNum];
                if (history && history.length > 0) {
                    const popped = history.pop();
                    if (!redoStackByPage[currentPageNum]) redoStackByPage[currentPageNum] = [];
                    redoStackByPage[currentPageNum].push(popped);
                    redrawAnnotations();
                    updateUndoRedoButtons();
                }
            });

            btnRedo.addEventListener("click", () => {
                const redo = redoStackByPage[currentPageNum];
                if (redo && redo.length > 0) {
                    const popped = redo.pop();
                    annotationsByPage[currentPageNum].push(popped);
                    redrawAnnotations();
                    updateUndoRedoButtons();
                }
            });

            btnClearPage.addEventListener("click", () => {
                const history = annotationsByPage[currentPageNum];
                if (history && history.length > 0) {
                    if (confirm("Clear all annotations on this page?")) {
                        annotationsByPage[currentPageNum] = [];
                        redoStackByPage[currentPageNum] = [];
                        redrawAnnotations();
                        updateUndoRedoButtons();
                        showToast("Page annotations cleared", "info");
                    }
                }
            });

            // Keyboard shortcut Ctrl+Z & Ctrl+Y
            document.addEventListener("keydown", (e) => {
                if (editorStudio.style.display !== "flex") return;
                if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "z") {
                    e.preventDefault();
                    if (e.shiftKey) {
                        btnRedo.click();
                    } else {
                        btnUndo.click();
                    }
                } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "y") {
                    e.preventDefault();
                    btnRedo.click();
                }
            });

            // ============================================================
            // Toolbar UI Handlers
            // ============================================================
            toolButtons.forEach(btn => {
                btn.addEventListener("click", () => {
                    toolButtons.forEach(b => b.classList.remove("active"));
                    btn.classList.add("active");
                    activeTool = btn.dataset.tool;
                    fontSizeGroup.style.display = activeTool === "text" ? (window.innerWidth <= 992 ? "inline-flex" : "flex") : "none";

                    if (activeTool === "eraser") {
                        drawCanvas.style.cursor = "not-allowed";
                    } else if (activeTool === "text") {
                        drawCanvas.style.cursor = "text";
                    } else {
                        drawCanvas.style.cursor = "crosshair";
                    }
                });
            });

            colorSwatches.forEach(swatch => {
                swatch.addEventListener("click", () => {
                    colorSwatches.forEach(s => s.classList.remove("active"));
                    swatch.classList.add("active");
                    activeColor = swatch.dataset.color;
                    customColorInput.value = activeColor;
                });
            });

            customColorInput.addEventListener("input", (e) => {
                activeColor = e.target.value;
                colorSwatches.forEach(s => s.classList.remove("active"));
            });

            widthOptions.forEach(opt => {
                opt.addEventListener("click", () => {
                    widthOptions.forEach(o => o.classList.remove("active"));
                    opt.classList.add("active");
                    activeWidth = parseInt(opt.dataset.width, 10);
                });
            });

            fontSizeOptions.forEach(opt => {
                opt.addEventListener("click", () => {
                    fontSizeOptions.forEach(o => o.classList.remove("active"));
                    opt.classList.add("active");
                    activeFontSize = parseInt(opt.dataset.fontsize, 10);
                });
            });

            // ============================================================
            // EXPORT ANNOTATED PDF WITH PDF-LIB
            // ============================================================
            btnExportPdf.addEventListener("click", async () => {
                if (!originalFileBuffer) return;

                showLoader("Generating annotated PDF...");
                try {
                    // Load original document with PDF-Lib
                    const pdfDocLib = await PDFLib.PDFDocument.load(originalFileBuffer.slice(0));
                    const pages = pdfDocLib.getPages();

                    let hasAnyAnnotations = false;

                    // Offscreen canvas for rendering annotations at exact original resolution
                    const exportCanvas = document.createElement("canvas");
                    const exportCtx = exportCanvas.getContext("2d");

                    for (let i = 0; i < pages.length; i++) {
                        const pageNum = i + 1;
                        const pageList = annotationsByPage[pageNum] || [];
                        if (pageList.length === 0) continue;

                        hasAnyAnnotations = true;
                        const pdfPage = pages[i];
                        const pageWidth = pdfPage.getWidth();
                        const pageHeight = pdfPage.getHeight();

                        // Render at 2x resolution for ultra-crisp print quality
                        const dpr = 2;
                        exportCanvas.width = pageWidth * dpr;
                        exportCanvas.height = pageHeight * dpr;
                        exportCtx.clearRect(0, 0, exportCanvas.width, exportCanvas.height);

                        const W = exportCanvas.width;
                        const H = exportCanvas.height;

                        // Draw annotations on high-res export canvas
                        pageList.forEach(item => {
                            if (item.type === "pen" || item.type === "highlighter") {
                                exportCtx.save();
                                exportCtx.beginPath();
                                exportCtx.moveTo(item.points[0].x * W, item.points[0].y * H);
                                for (let p = 1; p < item.points.length; p++) {
                                    exportCtx.lineTo(item.points[p].x * W, item.points[p].y * H);
                                }
                                exportCtx.lineCap = "round";
                                exportCtx.lineJoin = "round";
                                exportCtx.strokeStyle = item.color;
                                if (item.type === "highlighter") {
                                    exportCtx.globalAlpha = 0.38;
                                    exportCtx.lineWidth = item.width * 3.5 * dpr;
                                } else {
                                    exportCtx.globalAlpha = 1.0;
                                    exportCtx.lineWidth = item.width * dpr;
                                }
                                exportCtx.stroke();
                                exportCtx.restore();
                            } else if (item.type === "text") {
                                exportCtx.save();
                                exportCtx.fillStyle = item.color;
                                exportCtx.font = `bold ${item.size * dpr}px 'Plus Jakarta Sans', sans-serif`;
                                exportCtx.textBaseline = "top";
                                exportCtx.fillText(item.text, item.x * W, item.y * H);
                                exportCtx.restore();
                            } else {
                                const x1 = item.x1 * W;
                                const y1 = item.y1 * H;
                                const x2 = item.x2 * W;
                                const y2 = item.y2 * H;

                                exportCtx.save();
                                exportCtx.strokeStyle = item.color;
                                exportCtx.lineWidth = item.width * dpr;
                                exportCtx.lineCap = "round";
                                exportCtx.lineJoin = "round";

                                if (item.type === "rect") {
                                    exportCtx.strokeRect(Math.min(x1, x2), Math.min(y1, y2), Math.abs(x2 - x1), Math.abs(y2 - y1));
                                } else if (item.type === "circle") {
                                    const cx = (x1 + x2) / 2;
                                    const cy = (y1 + y2) / 2;
                                    const rx = Math.abs(x2 - x1) / 2;
                                    const ry = Math.abs(y2 - y1) / 2;
                                    exportCtx.beginPath();
                                    exportCtx.ellipse(cx, cy, Math.max(1, rx), Math.max(1, ry), 0, 0, Math.PI * 2);
                                    exportCtx.stroke();
                                } else if (item.type === "line") {
                                    exportCtx.beginPath();
                                    exportCtx.moveTo(x1, y1);
                                    exportCtx.lineTo(x2, y2);
                                    exportCtx.stroke();
                                } else if (item.type === "arrow") {
                                    drawArrow(exportCtx, x1, y1, x2, y2, item.width * dpr);
                                }
                                exportCtx.restore();
                            }
                        });

                        // Embed overlay PNG onto PDF page
                        const pngDataUrl = exportCanvas.toDataURL("image/png");
                        const embeddedPng = await pdfDocLib.embedPng(pngDataUrl);
                        pdfPage.drawImage(embeddedPng, {
                            x: 0,
                            y: 0,
                            width: pageWidth,
                            height: pageHeight
                        });
                    }

                    // Save and download
                    const modifiedBytes = await pdfDocLib.save();
                    const outName = originalFileName.replace(/\.pdf$/i, "") + "-annotated.pdf";
                    downloadBlob(new Blob([modifiedBytes], { type: "application/pdf" }), outName);

                    showToast(hasAnyAnnotations ? "Annotated PDF downloaded successfully!" : "Downloaded original PDF (no annotations added).", "success");
                } catch (err) {
                    console.error("Export error:", err);
                    showToast("Failed to export annotated PDF: " + err.message, "error");
                } finally {
                    hideLoader();
                }
            });
        });
