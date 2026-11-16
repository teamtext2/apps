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

// === App-Specific Script (sign) ===
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

        const SVG_COPY = `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 14px; height: 14px;"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`;
        const SVG_TRASH = `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 14px; height: 14px;"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>`;

        document.addEventListener("DOMContentLoaded", () => {
            // DOM Elements
            const dropzone = document.getElementById("dropzone");
            const fileInput = document.getElementById("file-input");
            const signStudio = document.getElementById("sign-studio");
            const docNameLabel = document.getElementById("doc-name-label");
            const btnChangeFile = document.getElementById("btn-change-file");

            // Navigation & Zoom
            const btnPrevPage = document.getElementById("btn-prev-page");
            const btnNextPage = document.getElementById("btn-next-page");
            const pageIndicator = document.getElementById("page-indicator");
            const btnZoomOut = document.getElementById("btn-zoom-out");
            const btnZoomIn = document.getElementById("btn-zoom-in");
            const btnFitWidth = document.getElementById("btn-fit-width");
            const zoomLabel = document.getElementById("zoom-label");

            // Viewport & Overlays
            const canvasViewportWrap = document.getElementById("canvas-viewport-wrap");
            const pdfPageContainer = document.getElementById("pdf-page-container");
            const pdfCanvas = document.getElementById("pdf-canvas");
            const pdfCtx = pdfCanvas.getContext("2d");
            const sigOverlayLayer = document.getElementById("sig-overlay-layer");

            // Desktop Actions
            const btnOpenSigModal = document.getElementById("btn-open-sig-modal");
            const btnAddDateStamp = document.getElementById("btn-add-date-stamp");
            const btnExportSignedPdf = document.getElementById("btn-export-signed-pdf");

            // Mobile Dock & Drawer Actions
            const btnMobileOpenSig = document.getElementById("btn-mobile-open-sig");
            const btnMobileAddDate = document.getElementById("btn-mobile-add-date");
            const btnMobileToggleDrawer = document.getElementById("btn-mobile-toggle-drawer");
            const btnMobileExport = document.getElementById("btn-mobile-export");
            const mobileSigDrawer = document.getElementById("mobile-sig-drawer");
            const btnCloseMobileDrawer = document.getElementById("btn-close-mobile-drawer");
            const mobileSigLibraryList = document.getElementById("mobile-sig-library-list");
            const mobilePlacedElementsList = document.getElementById("mobile-placed-elements-list");
            const mobileSigCount = document.getElementById("mobile-sig-count");
            const mobilePlacedCount = document.getElementById("mobile-placed-count");

            // Desktop Sidebar Elements
            const sigLibraryList = document.getElementById("sig-library-list");
            const sigCountBadge = document.getElementById("sig-count-badge");
            const placedElementsList = document.getElementById("placed-elements-list");
            const placedCountBadge = document.getElementById("placed-count-badge");

            // Modal Elements
            const sigModalOverlay = document.getElementById("sig-modal-overlay");
            const btnCloseSigModal = document.getElementById("btn-close-sig-modal");
            const btnCancelModal = document.getElementById("btn-cancel-modal");
            const btnApplySigModal = document.getElementById("btn-apply-sig-modal");
            const modalTabBtns = document.querySelectorAll(".modal-tab-btn");
            const modalTabContents = document.querySelectorAll(".modal-tab-content");

            // Pad Elements
            const drawCanvasContainer = document.getElementById("draw-canvas-container");
            const signaturePadCanvas = document.getElementById("signature-pad-canvas");
            const padCtx = signaturePadCanvas.getContext("2d");
            const canvasWatermark = document.getElementById("canvas-watermark");
            const btnClearPad = document.getElementById("btn-clear-pad");
            const penWidthSelect = document.getElementById("pen-width-select");
            const colorDotBtns = document.querySelectorAll(".color-dot-btn:not(.type-color-dot)");

            // Type Tab Elements
            const typeNameInput = document.getElementById("type-name-input");
            const fontSampleCards = document.querySelectorAll(".font-sample-card");
            const typeColorDots = document.querySelectorAll(".type-color-dot");

            // Upload Tab Elements
            const sigFileUploadInput = document.getElementById("sig-file-upload-input");
            const uploadDropArea = document.getElementById("upload-drop-area");
            const uploadPreviewBox = document.getElementById("upload-preview-box");
            const uploadPreviewImg = document.getElementById("upload-preview-img");
            const chkRemoveBg = document.getElementById("chk-remove-bg");

            // ==========================================
            // STATE VARIABLES
            // ==========================================
            let loadedFile = null;
            let loadedBuffer = null;
            let pdfDoc = null;
            let totalPages = 1;
            let currentPageNum = 1;
            let currentScale = 1.25;
            let activeRenderTask = null;

            // Saved signature templates: [ { id, dataUrl, title } ]
            let savedSignatures = [];

            // Placed signatures on the document:
            let placedItems = [];
            let activePlacedId = null;

            // Pad Drawing State
            let isDrawing = false;
            let hasDrawnOnPad = false;
            let padColor = "#000000";
            let padLineWidth = 3.5;
            let lastX = 0;
            let lastY = 0;

            // Type Signature State
            let selectedTypeFont = "'Great Vibes', cursive";
            let selectedTypeColor = "#000000";

            // Uploaded Image State
            let uploadedDataUrl = null;

            // Active Tab State
            let activeTabId = "tab-draw";

            // ==========================================
            // INITIALIZE PAD CANVAS
            // ==========================================
            function resizePadCanvas() {
                const rect = drawCanvasContainer.getBoundingClientRect();
                const dpr = window.devicePixelRatio || 1;
                signaturePadCanvas.width = rect.width * dpr;
                signaturePadCanvas.height = rect.height * dpr;
                padCtx.scale(dpr, dpr);
                padCtx.lineCap = "round";
                padCtx.lineJoin = "round";
                padCtx.strokeStyle = padColor;
                padCtx.lineWidth = padLineWidth;
            }

            window.addEventListener("resize", () => {
                if (sigModalOverlay.style.display === "flex" && activeTabId === "tab-draw" && !hasDrawnOnPad) {
                    resizePadCanvas();
                }
            });

            // ==========================================
            // FILE UPLOAD & DROPZONE
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
                    pdfDoc = await loadingTask.promise;
                    totalPages = pdfDoc.numPages;
                    currentPageNum = 1;
                    placedItems = [];

                    docNameLabel.textContent = file.name;
                    docNameLabel.parentElement.title = file.name;

                    document.body.classList.add("in-studio-mode");
                    dropzone.style.display = "none";
                    signStudio.style.display = "flex";

                    updatePlacedCounters();

                    // If on mobile, calculate best fit zoom on initial render
                    if (window.innerWidth <= 768) {
                        const page = await pdfDoc.getPage(1);
                        const unscaled = page.getViewport({ scale: 1.0 });
                        const availableWidth = Math.max(300, window.innerWidth - 30);
                        currentScale = Math.max(0.4, Math.min(1.5, availableWidth / unscaled.width));
                    }

                    await renderCurrentPage();
                    showToast(`Loaded ${file.name} (${totalPages} pages)`, "success");
                } catch (err) {
                    console.error("PDF load error:", err);
                    showToast("Failed to load PDF: " + err.message, "error");
                }
            }

            btnChangeFile.addEventListener("click", () => {
                loadedFile = null;
                loadedBuffer = null;
                pdfDoc = null;
                placedItems = [];
                activePlacedId = null;
                fileInput.value = "";
                document.body.classList.remove("in-studio-mode");
                signStudio.style.display = "none";
                dropzone.style.display = "block";
                closeMobileDrawer();
            });

            // ==========================================
            // PDF PAGE RENDERING
            // ==========================================
            async function renderCurrentPage() {
                if (!pdfDoc) return;

                if (activeRenderTask) {
                    try {
                        activeRenderTask.cancel();
                    } catch (e) { }
                }

                pageIndicator.textContent = `Page ${currentPageNum} / ${totalPages}`;
                btnPrevPage.disabled = currentPageNum <= 1;
                btnNextPage.disabled = currentPageNum >= totalPages;
                zoomLabel.textContent = `${Math.round(currentScale * 100)}%`;

                try {
                    const page = await pdfDoc.getPage(currentPageNum);
                    const dpr = window.devicePixelRatio || 1;
                    const viewport = page.getViewport({ scale: currentScale * dpr });

                    pdfCanvas.width = viewport.width;
                    pdfCanvas.height = viewport.height;
                    pdfCanvas.style.width = `${viewport.width / dpr}px`;
                    pdfCanvas.style.height = `${viewport.height / dpr}px`;

                    pdfPageContainer.style.width = `${viewport.width / dpr}px`;
                    pdfPageContainer.style.height = `${viewport.height / dpr}px`;

                    const renderContext = {
                        canvasContext: pdfCtx,
                        viewport: viewport
                    };

                    activeRenderTask = page.render(renderContext);
                    await activeRenderTask.promise;
                    activeRenderTask = null;

                    // Re-render placed items on this active page
                    renderPlacedOverlayItems();
                } catch (err) {
                    if (err.name !== "RenderingCancelledException") {
                        console.error("Page render error:", err);
                    }
                }
            }

            // Navigation
            btnPrevPage.addEventListener("click", () => {
                if (currentPageNum > 1) {
                    currentPageNum--;
                    renderCurrentPage();
                }
            });

            btnNextPage.addEventListener("click", () => {
                if (currentPageNum < totalPages) {
                    currentPageNum++;
                    renderCurrentPage();
                }
            });

            // Zoom Controls
            btnZoomOut.addEventListener("click", () => {
                if (currentScale > 0.4) {
                    currentScale = Math.max(0.35, currentScale - 0.2);
                    renderCurrentPage();
                }
            });

            btnZoomIn.addEventListener("click", () => {
                if (currentScale < 3.0) {
                    currentScale = Math.min(3.0, currentScale + 0.2);
                    renderCurrentPage();
                }
            });

            btnFitWidth.addEventListener("click", async () => {
                if (!pdfDoc) return;
                const page = await pdfDoc.getPage(currentPageNum);
                const unscaledViewport = page.getViewport({ scale: 1.0 });
                const paddingSpace = window.innerWidth <= 768 ? 20 : 60;
                const wrapWidth = canvasViewportWrap.clientWidth - paddingSpace;
                currentScale = Math.max(0.35, Math.min(2.5, wrapWidth / unscaledViewport.width));
                renderCurrentPage();
            });

            // ==========================================
            // MODAL & TABS MANAGEMENT
            // ==========================================
            function openSignatureModal() {
                closeMobileDrawer();
                sigModalOverlay.style.display = "flex";
                if (activeTabId === "tab-draw") {
                    setTimeout(resizePadCanvas, 60);
                }
            }

            btnOpenSigModal.addEventListener("click", openSignatureModal);
            btnMobileOpenSig.addEventListener("click", openSignatureModal);

            function closeModal() {
                sigModalOverlay.style.display = "none";
            }

            btnCloseSigModal.addEventListener("click", closeModal);
            btnCancelModal.addEventListener("click", closeModal);

            sigModalOverlay.addEventListener("click", (e) => {
                if (e.target === sigModalOverlay) closeModal();
            });

            modalTabBtns.forEach(btn => {
                btn.addEventListener("click", () => {
                    modalTabBtns.forEach(b => b.classList.remove("active"));
                    modalTabContents.forEach(c => c.style.display = "none");

                    btn.classList.add("active");
                    activeTabId = btn.getAttribute("data-tab");
                    const targetContent = document.getElementById(activeTabId);
                    if (targetContent) targetContent.style.display = "flex";

                    if (activeTabId === "tab-draw") {
                        setTimeout(resizePadCanvas, 60);
                    }
                });
            });

            // ==========================================
            // MOBILE DRAWER MANAGEMENT
            // ==========================================
            function toggleMobileDrawer() {
                mobileSigDrawer.classList.toggle("is-open");
            }

            function closeMobileDrawer() {
                mobileSigDrawer.classList.remove("is-open");
            }

            btnMobileToggleDrawer.addEventListener("click", toggleMobileDrawer);
            btnCloseMobileDrawer.addEventListener("click", closeMobileDrawer);

            // ==========================================
            // TAB 1: DRAW SIGNATURE
            // ==========================================
            function getPadCoords(e) {
                const rect = signaturePadCanvas.getBoundingClientRect();
                const clientX = e.touches ? e.touches[0].clientX : e.clientX;
                const clientY = e.touches ? e.touches[0].clientY : e.clientY;
                return {
                    x: clientX - rect.left,
                    y: clientY - rect.top
                };
            }

            function startDraw(e) {
                isDrawing = true;
                hasDrawnOnPad = true;
                canvasWatermark.style.display = "none";
                const pos = getPadCoords(e);
                lastX = pos.x;
                lastY = pos.y;

                padCtx.beginPath();
                padCtx.arc(lastX, lastY, padLineWidth / 2, 0, Math.PI * 2);
                padCtx.fillStyle = padColor;
                padCtx.fill();
            }

            function moveDraw(e) {
                if (!isDrawing) return;
                e.preventDefault();
                const pos = getPadCoords(e);

                padCtx.beginPath();
                padCtx.moveTo(lastX, lastY);
                padCtx.lineTo(pos.x, pos.y);
                padCtx.strokeStyle = padColor;
                padCtx.lineWidth = padLineWidth;
                padCtx.stroke();

                lastX = pos.x;
                lastY = pos.y;
            }

            function stopDraw() {
                isDrawing = false;
            }

            signaturePadCanvas.addEventListener("mousedown", startDraw);
            signaturePadCanvas.addEventListener("mousemove", moveDraw);
            window.addEventListener("mouseup", stopDraw);

            signaturePadCanvas.addEventListener("touchstart", startDraw, { passive: false });
            signaturePadCanvas.addEventListener("touchmove", moveDraw, { passive: false });
            window.addEventListener("touchend", stopDraw);

            btnClearPad.addEventListener("click", () => {
                padCtx.clearRect(0, 0, signaturePadCanvas.width, signaturePadCanvas.height);
                hasDrawnOnPad = false;
                canvasWatermark.style.display = "block";
            });

            colorDotBtns.forEach(dot => {
                dot.addEventListener("click", () => {
                    colorDotBtns.forEach(d => d.classList.remove("active"));
                    dot.classList.add("active");
                    padColor = dot.getAttribute("data-color");
                    padCtx.strokeStyle = padColor;
                });
            });

            penWidthSelect.addEventListener("change", () => {
                padLineWidth = parseFloat(penWidthSelect.value) || 3.5;
                padCtx.lineWidth = padLineWidth;
            });

            // Trim whitespace from canvas helper
            function cropCanvasWhitespace(canvas) {
                const ctx = canvas.getContext("2d");
                const w = canvas.width;
                const h = canvas.height;
                const imgData = ctx.getImageData(0, 0, w, h);
                const data = imgData.data;

                let minX = w, minY = h, maxX = 0, maxY = 0;
                let foundPixel = false;

                for (let y = 0; y < h; y++) {
                    for (let x = 0; x < w; x++) {
                        const alpha = data[(y * w + x) * 4 + 3];
                        if (alpha > 10) {
                            foundPixel = true;
                            if (x < minX) minX = x;
                            if (x > maxX) maxX = x;
                            if (y < minY) minY = y;
                            if (y > maxY) maxY = y;
                        }
                    }
                }

                if (!foundPixel) return null;

                const pad = 15;
                minX = Math.max(0, minX - pad);
                minY = Math.max(0, minY - pad);
                maxX = Math.min(w, maxX + pad);
                maxY = Math.min(h, maxY + pad);

                const cropW = maxX - minX;
                const cropH = maxY - minY;

                const cropCanvas = document.createElement("canvas");
                cropCanvas.width = cropW;
                cropCanvas.height = cropH;
                const cropCtx = cropCanvas.getContext("2d");
                cropCtx.drawImage(canvas, minX, minY, cropW, cropH, 0, 0, cropW, cropH);
                return cropCanvas.toDataURL("image/png");
            }

            // ==========================================
            // TAB 2: TYPE SIGNATURE
            // ==========================================
            typeNameInput.addEventListener("input", () => {
                const text = typeNameInput.value.trim() || "Alex Morgan";
                fontSampleCards.forEach(card => card.textContent = text);
            });

            fontSampleCards.forEach(card => {
                card.addEventListener("click", () => {
                    fontSampleCards.forEach(c => c.classList.remove("active"));
                    card.classList.add("active");
                    selectedTypeFont = card.getAttribute("data-font");
                });
            });

            typeColorDots.forEach(dot => {
                dot.addEventListener("click", () => {
                    typeColorDots.forEach(d => d.classList.remove("active"));
                    dot.classList.add("active");
                    selectedTypeColor = dot.getAttribute("data-color");
                    fontSampleCards.forEach(card => card.style.color = selectedTypeColor);
                });
            });

            function renderTypeSignatureToDataUrl() {
                const text = typeNameInput.value.trim() || "Signature";
                const canvas = document.createElement("canvas");
                canvas.width = 700;
                canvas.height = 200;
                const ctx = canvas.getContext("2d");

                ctx.font = `64px ${selectedTypeFont}`;
                ctx.fillStyle = selectedTypeColor;
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText(text, 350, 100);

                return cropCanvasWhitespace(canvas) || canvas.toDataURL("image/png");
            }

            // ==========================================
            // TAB 3: UPLOAD SIGNATURE IMAGE
            // ==========================================
            sigFileUploadInput.addEventListener("change", (e) => {
                const file = e.target.files[0];
                if (!file) return;

                const reader = new FileReader();
                reader.onload = (event) => {
                    const img = new Image();
                    img.onload = () => {
                        processUploadedImage(img);
                    };
                    img.src = event.target.result;
                };
                reader.readAsDataURL(file);
            });

            function processUploadedImage(img) {
                const canvas = document.createElement("canvas");
                canvas.width = img.naturalWidth || img.width;
                canvas.height = img.naturalHeight || img.height;
                const ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0);

                if (chkRemoveBg.checked) {
                    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                    const data = imgData.data;
                    for (let i = 0; i < data.length; i += 4) {
                        const r = data[i];
                        const g = data[i + 1];
                        const b = data[i + 2];
                        if (r > 210 && g > 210 && b > 210) {
                            data[i + 3] = 0;
                        }
                    }
                    ctx.putImageData(imgData, 0, 0);
                }

                uploadedDataUrl = cropCanvasWhitespace(canvas) || canvas.toDataURL("image/png");
                uploadPreviewImg.src = uploadedDataUrl;
                uploadPreviewBox.style.display = "block";
            }

            chkRemoveBg.addEventListener("change", () => {
                if (uploadPreviewImg.src) {
                    const img = new Image();
                    img.onload = () => processUploadedImage(img);
                    img.src = uploadPreviewImg.src;
                }
            });

            // ==========================================
            // ADD SIGNATURE TO LIBRARY & DOCUMENT
            // ==========================================
            btnApplySigModal.addEventListener("click", () => {
                let dataUrl = null;
                let title = "Signature";

                if (activeTabId === "tab-draw") {
                    if (!hasDrawnOnPad) {
                        showToast("Please draw your signature before applying.", "error");
                        return;
                    }
                    dataUrl = cropCanvasWhitespace(signaturePadCanvas);
                    title = "Handwritten";
                } else if (activeTabId === "tab-type") {
                    dataUrl = renderTypeSignatureToDataUrl();
                    title = typeNameInput.value.trim() || "Calligraphic";
                } else if (activeTabId === "tab-upload") {
                    if (!uploadedDataUrl) {
                        showToast("Please upload an image first.", "error");
                        return;
                    }
                    dataUrl = uploadedDataUrl;
                    title = "Stamp Seal";
                }

                if (!dataUrl) {
                    showToast("Failed to generate signature.", "error");
                    return;
                }

                const sigId = "sig-" + Date.now();
                savedSignatures.push({
                    id: sigId,
                    dataUrl: dataUrl,
                    title: title
                });

                updateSidebarLibrary();
                closeModal();

                placeSignatureOnPage(dataUrl, title);
                showToast("Signature placed on current page!", "success");
            });

            // Quick Date Stamp
            function triggerDateStamp() {
                const today = new Date();
                const dateStr = today.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });

                const canvas = document.createElement("canvas");
                canvas.width = 380;
                canvas.height = 80;
                const ctx = canvas.getContext("2d");
                ctx.font = "bold 28px Inter, system-ui, sans-serif";
                ctx.fillStyle = "#1e293b";
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText(`Date: ${dateStr}`, 190, 40);

                const dataUrl = cropCanvasWhitespace(canvas) || canvas.toDataURL("image/png");
                placeSignatureOnPage(dataUrl, `Date: ${dateStr}`);
                showToast("Date stamp placed on page!", "success");
            }

            btnAddDateStamp.addEventListener("click", triggerDateStamp);
            btnMobileAddDate.addEventListener("click", triggerDateStamp);

            function updateSidebarLibrary() {
                sigCountBadge.textContent = savedSignatures.length;
                mobileSigCount.textContent = savedSignatures.length;

                const emptyHtml = `
                    <div style="font-size: 0.82rem; color: var(--text-muted); text-align: center; padding: 1.25rem 0.5rem; background: var(--bg-main); border-radius: var(--radius-sm); border: 1px dashed var(--border-color);">
                        No signatures saved yet. Tap "+ Signature" to create one.
                    </div>
                `;

                if (savedSignatures.length === 0) {
                    sigLibraryList.innerHTML = emptyHtml;
                    mobileSigLibraryList.innerHTML = emptyHtml;
                    return;
                }

                sigLibraryList.innerHTML = "";
                mobileSigLibraryList.innerHTML = "";

                savedSignatures.forEach(sig => {
                    const makeItem = () => {
                        const item = document.createElement("div");
                        item.className = "sig-item-card";
                        item.innerHTML = `
                            <img src="${sig.dataUrl}" class="sig-preview-thumb" alt="${sig.title}">
                            <button type="button" class="btn-use-sig">Place</button>
                        `;
                        item.addEventListener("click", () => {
                            placeSignatureOnPage(sig.dataUrl, sig.title);
                            showToast(`Placed ${sig.title} on Page ${currentPageNum}`, "success");
                            closeMobileDrawer();
                        });
                        return item;
                    };

                    sigLibraryList.appendChild(makeItem());
                    mobileSigLibraryList.appendChild(makeItem());
                });
            }

            // ==========================================
            // PLACEMENT ENGINE (DRAG, RESIZE, INTERACT)
            // ==========================================
            function placeSignatureOnPage(dataUrl, title) {
                const img = new Image();
                img.onload = () => {
                    const aspect = img.naturalWidth / img.naturalHeight;
                    // Default width is 26% of page width
                    const widthPercent = 26;
                    const containerRect = pdfPageContainer.getBoundingClientRect();
                    const desiredPxWidth = (containerRect.width * widthPercent) / 100;
                    const desiredPxHeight = desiredPxWidth / aspect;
                    const heightPercent = (desiredPxHeight / containerRect.height) * 100;

                    const xPercent = Math.min(70, Math.max(10, 50 - widthPercent / 2));
                    const yPercent = Math.min(80, Math.max(10, 65 - heightPercent / 2));

                    const item = {
                        id: "placed-" + Date.now() + Math.random().toString(36).substr(2, 4),
                        pageNum: currentPageNum,
                        dataUrl: dataUrl,
                        title: title,
                        xPercent: xPercent,
                        yPercent: yPercent,
                        widthPercent: widthPercent,
                        heightPercent: heightPercent,
                        origAspect: aspect
                    };

                    placedItems.push(item);
                    activePlacedId = item.id;
                    updatePlacedCounters();
                    renderPlacedOverlayItems();
                };
                img.src = dataUrl;
            }

            function updatePlacedCounters() {
                placedCountBadge.textContent = placedItems.length;
                mobilePlacedCount.textContent = placedItems.length;

                const emptyHtml = `
                    <div style="font-size: 0.8rem; color: var(--text-muted); text-align: center; padding: 0.75rem 0;">
                        No elements placed yet.
                    </div>
                `;

                if (placedItems.length === 0) {
                    placedElementsList.innerHTML = emptyHtml;
                    mobilePlacedElementsList.innerHTML = emptyHtml;
                    return;
                }

                placedElementsList.innerHTML = "";
                mobilePlacedElementsList.innerHTML = "";

                placedItems.forEach((item, idx) => {
                    const makeRow = () => {
                        const row = document.createElement("div");
                        row.className = "placed-element-row";
                        row.innerHTML = `
                            <div style="min-width: 0; display: flex; align-items: center; gap: 4px;">
                                <strong>#${idx + 1}</strong>
                                <span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 140px;">${item.title}</span>
                                <span style="font-size: 0.72rem; color: var(--accent-red); font-weight: 700;">(P.${item.pageNum})</span>
                            </div>
                            <button type="button" class="btn-del-placed" title="Delete">
                                ${SVG_TRASH}
                            </button>
                        `;

                        row.addEventListener("click", (e) => {
                            if (e.target.closest(".btn-del-placed")) return;
                            if (currentPageNum !== item.pageNum) {
                                currentPageNum = item.pageNum;
                                renderCurrentPage();
                            }
                            activePlacedId = item.id;
                            renderPlacedOverlayItems();
                            closeMobileDrawer();
                        });

                        row.querySelector(".btn-del-placed").addEventListener("click", (e) => {
                            e.stopPropagation();
                            deletePlacedItem(item.id);
                        });

                        return row;
                    };

                    placedElementsList.appendChild(makeRow());
                    mobilePlacedElementsList.appendChild(makeRow());
                });
            }

            function deletePlacedItem(id) {
                placedItems = placedItems.filter(it => it.id !== id);
                if (activePlacedId === id) activePlacedId = null;
                updatePlacedCounters();
                renderPlacedOverlayItems();
            }

            function duplicatePlacedItem(id) {
                const target = placedItems.find(it => it.id === id);
                if (!target) return;

                const clone = {
                    ...target,
                    id: "placed-" + Date.now() + Math.random().toString(36).substr(2, 4),
                    xPercent: Math.min(80, target.xPercent + 3),
                    yPercent: Math.min(80, target.yPercent + 3)
                };

                placedItems.push(clone);
                activePlacedId = clone.id;
                updatePlacedCounters();
                renderPlacedOverlayItems();
                showToast("Signature duplicated", "info");
            }

            function renderPlacedOverlayItems() {
                sigOverlayLayer.innerHTML = "";

                const currentItems = placedItems.filter(it => it.pageNum === currentPageNum);

                currentItems.forEach(item => {
                    const box = document.createElement("div");
                    box.className = `placed-sig-box ${item.id === activePlacedId ? 'active-selected' : ''}`;
                    box.style.left = `${item.xPercent}%`;
                    box.style.top = `${item.yPercent}%`;
                    box.style.width = `${item.widthPercent}%`;
                    box.style.height = `${item.heightPercent}%`;

                    box.innerHTML = `
                        <img src="${item.dataUrl}" class="placed-sig-img" alt="${item.title}">
                        <div class="sig-box-controls">
                            <button type="button" class="ctrl-btn ctrl-duplicate" title="Duplicate">${SVG_COPY}</button>
                            <button type="button" class="ctrl-btn ctrl-delete" title="Delete">${SVG_TRASH}</button>
                        </div>
                        <div class="sig-resize-handle"></div>
                    `;

                    // Select on touch / pointer
                    box.addEventListener("pointerdown", (e) => {
                        if (e.target.closest(".ctrl-btn") || e.target.closest(".sig-resize-handle")) return;
                        activePlacedId = item.id;
                        document.querySelectorAll(".placed-sig-box").forEach(b => b.classList.remove("active-selected"));
                        box.classList.add("active-selected");
                        initDrag(e, item, box);
                    });

                    // Controls
                    box.querySelector(".ctrl-duplicate").addEventListener("click", (e) => {
                        e.stopPropagation();
                        duplicatePlacedItem(item.id);
                    });

                    box.querySelector(".ctrl-delete").addEventListener("click", (e) => {
                        e.stopPropagation();
                        deletePlacedItem(item.id);
                    });

                    // Resize handle
                    const handle = box.querySelector(".sig-resize-handle");
                    handle.addEventListener("pointerdown", (e) => {
                        e.stopPropagation();
                        initResize(e, item, box);
                    });

                    sigOverlayLayer.appendChild(box);
                });
            }

            // Drag Handler
            function initDrag(e, item, box) {
                const parentRect = pdfPageContainer.getBoundingClientRect();
                const startPointerX = e.clientX;
                const startPointerY = e.clientY;
                const startX = (item.xPercent / 100) * parentRect.width;
                const startY = (item.yPercent / 100) * parentRect.height;
                const boxW = (item.widthPercent / 100) * parentRect.width;
                const boxH = (item.heightPercent / 100) * parentRect.height;

                function onPointerMove(moveEvent) {
                    moveEvent.preventDefault();
                    const dx = moveEvent.clientX - startPointerX;
                    const dy = moveEvent.clientY - startPointerY;

                    let newX = startX + dx;
                    let newY = startY + dy;

                    newX = Math.max(0, Math.min(parentRect.width - boxW, newX));
                    newY = Math.max(0, Math.min(parentRect.height - boxH, newY));

                    item.xPercent = (newX / parentRect.width) * 100;
                    item.yPercent = (newY / parentRect.height) * 100;

                    box.style.left = `${item.xPercent}%`;
                    box.style.top = `${item.yPercent}%`;
                }

                function onPointerUp() {
                    window.removeEventListener("pointermove", onPointerMove);
                    window.removeEventListener("pointerup", onPointerUp);
                }

                window.addEventListener("pointermove", onPointerMove);
                window.addEventListener("pointerup", onPointerUp);
            }

            // Resize Handler
            function initResize(e, item, box) {
                const parentRect = pdfPageContainer.getBoundingClientRect();
                const startPointerX = e.clientX;
                const startW = (item.widthPercent / 100) * parentRect.width;
                const startH = (item.heightPercent / 100) * parentRect.height;
                const aspect = item.origAspect || (startW / startH);

                function onPointerMove(moveEvent) {
                    moveEvent.preventDefault();
                    const dx = moveEvent.clientX - startPointerX;

                    let newW = startW + dx;
                    newW = Math.max(35, Math.min(parentRect.width * 0.95, newW));
                    let newH = newW / aspect;

                    item.widthPercent = (newW / parentRect.width) * 100;
                    item.heightPercent = (newH / parentRect.height) * 100;

                    box.style.width = `${item.widthPercent}%`;
                    box.style.height = `${item.heightPercent}%`;
                }

                function onPointerUp() {
                    window.removeEventListener("pointermove", onPointerMove);
                    window.removeEventListener("pointerup", onPointerUp);
                }

                window.addEventListener("pointermove", onPointerMove);
                window.addEventListener("pointerup", onPointerUp);
            }

            // Deselect when clicking empty space
            canvasViewportWrap.addEventListener("pointerdown", (e) => {
                if (!e.target.closest(".placed-sig-box") && !e.target.closest(".studio-sidebar") && !e.target.closest(".mobile-sig-drawer") && !e.target.closest(".sign-mobile-dock")) {
                    activePlacedId = null;
                    document.querySelectorAll(".placed-sig-box").forEach(b => b.classList.remove("active-selected"));
                }
            });

            // ==========================================
            // EXPORT & BURN SIGNATURES (PDF-LIB)
            // ==========================================
            async function exportSignedPdf() {
                if (!loadedBuffer) return;

                if (placedItems.length === 0) {
                    showToast("Please place at least one signature before downloading.", "error");
                    return;
                }

                try {
                    showToast("Embedding signatures into PDF...", "info");
                    btnExportSignedPdf.disabled = true;
                    btnMobileExport.disabled = true;

                    const pdfDocLib = await PDFLib.PDFDocument.load(loadedBuffer);
                    const pages = pdfDocLib.getPages();

                    for (let item of placedItems) {
                        const pageIndex = item.pageNum - 1;
                        if (pageIndex < 0 || pageIndex >= pages.length) continue;

                        const page = pages[pageIndex];
                        const { width: pageWidth, height: pageHeight } = page.getSize();

                        const byteString = atob(item.dataUrl.split(",")[1]);
                        const ab = new ArrayBuffer(byteString.length);
                        const ia = new Uint8Array(ab);
                        for (let i = 0; i < byteString.length; i++) {
                            ia[i] = byteString.charCodeAt(i);
                        }

                        const embeddedImage = await pdfDocLib.embedPng(ab);

                        const pdfW = (item.widthPercent / 100) * pageWidth;
                        const pdfH = (item.heightPercent / 100) * pageHeight;
                        const pdfX = (item.xPercent / 100) * pageWidth;
                        const pdfY = pageHeight - ((item.yPercent / 100) * pageHeight) - pdfH;

                        page.drawImage(embeddedImage, {
                            x: pdfX,
                            y: pdfY,
                            width: pdfW,
                            height: pdfH
                        });
                    }

                    const signedPdfBytes = await pdfDocLib.save();
                    const baseName = loadedFile.name.replace(/\.pdf$/i, "");
                    downloadBlob(new Blob([signedPdfBytes], { type: "application/pdf" }), `${baseName}-signed.pdf`);

                    showToast("PDF successfully signed and downloaded!", "success");
                } catch (err) {
                    console.error("PDF export error:", err);
                    showToast("Failed to sign PDF: " + err.message, "error");
                } finally {
                    btnExportSignedPdf.disabled = false;
                    btnMobileExport.disabled = false;
                }
            }

            btnExportSignedPdf.addEventListener("click", exportSignedPdf);
            btnMobileExport.addEventListener("click", exportSignedPdf);
        });
