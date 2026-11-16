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

// === App-Specific Script (crop-resize) ===
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

        // Paper dimensions in points (1 pt = 1/72 inch)
        const PAPER_SIZES = {
            A4: { width: 595.28, height: 841.89 },
            LETTER: { width: 612.00, height: 792.00 },
            A3: { width: 841.89, height: 1190.55 },
            LEGAL: { width: 612.00, height: 1008.00 },
            A5: { width: 419.53, height: 595.28 }
        };

        document.addEventListener("DOMContentLoaded", () => {
            // Screens
            const uploadScreen = document.getElementById("upload-screen");
            const cropStudio = document.getElementById("crop-studio");
            const mainFooter = document.getElementById("main-footer");
            const dropzone = document.getElementById("dropzone");
            const fileInput = document.getElementById("file-input");
            const studioLoader = document.getElementById("studio-loader");
            const loaderStatus = document.getElementById("loader-status");
            const studioDocName = document.getElementById("studio-doc-name");
            const btnCloseStudio = document.getElementById("btn-close-studio");

            // Canvas & Elements
            const pageContainer = document.getElementById("page-container");
            const baseCanvas = document.getElementById("pdf-base-canvas");
            const baseCtx = baseCanvas.getContext("2d");
            const cropOverlayLayer = document.getElementById("crop-overlay-layer");
            const cropBox = document.getElementById("crop-box");
            const cropInfoPill = document.getElementById("crop-info-pill");

            // Masks
            const maskTop = document.getElementById("mask-top");
            const maskBottom = document.getElementById("mask-bottom");
            const maskLeft = document.getElementById("mask-left");
            const maskRight = document.getElementById("mask-right");

            // Navigation & Zoom
            const btnPrevPage = document.getElementById("btn-prev-page");
            const btnNextPage = document.getElementById("btn-next-page");
            const pageIndicator = document.getElementById("page-indicator");
            const btnZoomIn = document.getElementById("btn-zoom-in");
            const btnZoomOut = document.getElementById("btn-zoom-out");
            const btnFitScreen = document.getElementById("btn-fit-screen");
            const zoomText = document.getElementById("zoom-text");

            // Modes & Panels
            const tabAutoCrop = document.getElementById("tab-auto-crop");
            const tabManualCrop = document.getElementById("tab-manual-crop");
            const tabResizeMode = document.getElementById("tab-resize-mode");
            const autoCropControlsPanel = document.getElementById("auto-crop-controls-panel");
            const manualCropControlsPanel = document.getElementById("manual-crop-controls-panel");
            const resizeControlsPanel = document.getElementById("resize-controls-panel");
            const studioSidebar = document.getElementById("studio-sidebar");
            const btnToggleSidebar = document.getElementById("btn-toggle-sidebar");

            // Auto Crop Controls
            const btnAutoTrim = document.getElementById("btn-auto-trim");
            const btnResetAutoCrop = document.getElementById("btn-reset-auto-crop");
            const autoPadChips = document.querySelectorAll(".auto-pad-chip");
            const selectAutoSensitivity = document.getElementById("select-auto-sensitivity");
            let autoPaddingPt = 12;

            // Manual Crop Controls
            const selectCropAspect = document.getElementById("select-crop-aspect");
            const aspectChips = document.querySelectorAll("#manual-crop-controls-panel .preset-chip");
            const btnResetCrop = document.getElementById("btn-reset-crop");
            const inpMarginTop = document.getElementById("inp-margin-top");
            const inpMarginBottom = document.getElementById("inp-margin-bottom");
            const inpMarginLeft = document.getElementById("inp-margin-left");
            const inpMarginRight = document.getElementById("inp-margin-right");
            const quickTrimChips = document.querySelectorAll(".quick-trim-chip");

            // Resize Controls
            const selectTargetPaper = document.getElementById("select-target-paper");
            const selectOrientation = document.getElementById("select-orientation");
            const btnOrientPortrait = document.getElementById("btn-orient-portrait");
            const btnOrientLandscape = document.getElementById("btn-orient-landscape");
            const selectContentScale = document.getElementById("select-content-scale");

            // Common Controls
            const selectApplyScope = document.getElementById("select-apply-scope");
            const scopeBtns = document.querySelectorAll(".scope-btn");
            const btnApplyExport = document.getElementById("btn-apply-export");
            const cropInfoText = document.getElementById("crop-info-text");

            // Document State
            let originalBuffer = null;
            let originalFileName = "document.pdf";
            let pdfDoc = null;
            let totalPages = 0;
            let currentPageNum = 1;
            let currentScale = 1.0;
            let currentMode = "auto-crop"; // 'auto-crop' | 'manual-crop' | 'resize'

            // Crop box state in normalized coordinates [0..1]
            let cropCoords = { l: 0.05, t: 0.05, r: 0.95, b: 0.95 };
            let activeHandle = null;
            let isDraggingBox = false;
            let dragStart = { x: 0, y: 0 };
            let cropStart = { ...cropCoords };

            function showLoader(msg) {
                if (loaderStatus) loaderStatus.textContent = msg;
                if (studioLoader) studioLoader.style.display = "flex";
            }

            function hideLoader() {
                if (studioLoader) studioLoader.style.display = "none";
            }

            // ============================================================
            // IndexedDB Local Draft Project Persistence (Auto-expire in 24h)
            // ============================================================
            const DRAFT_DB_NAME = "Spac2_CropResize_DB";
            const DRAFT_DB_VERSION = 1;
            const DRAFT_STORE_NAME = "crop_drafts";
            const DRAFT_KEY = "active_crop_project";
            const DRAFT_MAX_AGE_MS = 24 * 60 * 60 * 1000; // 24 hours

            const recentDraftContainer = document.getElementById("recent-draft-container");
            const draftFileName = document.getElementById("draft-file-name");
            const draftMetaInfo = document.getElementById("draft-meta-info");
            const btnResumeDraft = document.getElementById("btn-resume-draft");
            const btnDiscardDraft = document.getElementById("btn-discard-draft");

            function openDraftDB() {
                return new Promise((resolve, reject) => {
                    const req = indexedDB.open(DRAFT_DB_NAME, DRAFT_DB_VERSION);
                    req.onupgradeneeded = (e) => {
                        const db = e.target.result;
                        if (!db.objectStoreNames.contains(DRAFT_STORE_NAME)) {
                            db.createObjectStore(DRAFT_STORE_NAME, { keyPath: "id" });
                        }
                    };
                    req.onsuccess = () => resolve(req.result);
                    req.onerror = () => reject(req.error);
                });
            }

            async function saveDraftLocally() {
                if (!originalBuffer || !pdfDoc) return;
                try {
                    const db = await openDraftDB();
                    const tx = db.transaction(DRAFT_STORE_NAME, "readwrite");
                    const store = tx.objectStore(DRAFT_STORE_NAME);

                    const draftData = {
                        id: DRAFT_KEY,
                        fileName: originalFileName || "document.pdf",
                        buffer: originalBuffer.slice(0),
                        timestamp: Date.now(),
                        cropCoords: { ...cropCoords },
                        currentMode: currentMode || "auto-crop",
                        currentPageNum: currentPageNum || 1,
                        totalPages: totalPages || 1,
                        autoPaddingPt: autoPaddingPt || 12,
                        targetPaper: selectTargetPaper ? selectTargetPaper.value : "a4"
                    };

                    await new Promise((resolve, reject) => {
                        const putReq = store.put(draftData);
                        putReq.onsuccess = resolve;
                        putReq.onerror = () => reject(putReq.error);
                    });
                } catch (err) {
                    console.warn("Could not save project draft locally:", err);
                }
            }

            async function getDraftLocally() {
                try {
                    const db = await openDraftDB();
                    return new Promise((resolve, reject) => {
                        const tx = db.transaction(DRAFT_STORE_NAME, "readonly");
                        const store = tx.objectStore(DRAFT_STORE_NAME);
                        const getReq = store.get(DRAFT_KEY);
                        getReq.onsuccess = () => {
                            const draft = getReq.result;
                            if (!draft) return resolve(null);
                            // 24h expiration check
                            if (Date.now() - draft.timestamp > DRAFT_MAX_AGE_MS) {
                                deleteDraftLocally();
                                return resolve(null);
                            }
                            resolve(draft);
                        };
                        getReq.onerror = () => reject(getReq.error);
                    });
                } catch (err) {
                    console.warn("Could not retrieve local project draft:", err);
                    return null;
                }
            }

            async function deleteDraftLocally() {
                try {
                    const db = await openDraftDB();
                    return new Promise((resolve, reject) => {
                        const tx = db.transaction(DRAFT_STORE_NAME, "readwrite");
                        const store = tx.objectStore(DRAFT_STORE_NAME);
                        const delReq = store.delete(DRAFT_KEY);
                        delReq.onsuccess = resolve;
                        delReq.onerror = () => reject(delReq.error);
                    });
                } catch (err) {
                    console.warn("Could not delete draft:", err);
                }
            }

            function formatDraftTimeAgo(timestamp) {
                const elapsedMin = Math.floor((Date.now() - timestamp) / 60000);
                if (elapsedMin < 1) return "Just now";
                if (elapsedMin < 60) return `${elapsedMin}m ago`;
                const hours = Math.floor(elapsedMin / 60);
                return `${hours}h ago`;
            }

            async function checkAndRenderRecentDraft() {
                if (!recentDraftContainer) return;
                const draft = await getDraftLocally();
                if (draft && draft.buffer) {
                    if (draftFileName) draftFileName.textContent = draft.fileName;
                    const timeAgo = formatDraftTimeAgo(draft.timestamp);
                    const remainingHours = Math.max(1, Math.round((DRAFT_MAX_AGE_MS - (Date.now() - draft.timestamp)) / 3600000));
                    if (draftMetaInfo) {
                        draftMetaInfo.textContent = `Saved ${timeAgo} • ${draft.totalPages || 1} pages • Auto-expires in ${remainingHours}h`;
                    }
                    recentDraftContainer.style.display = "block";
                } else {
                    recentDraftContainer.style.display = "none";
                }
            }

            if (btnResumeDraft) {
                btnResumeDraft.addEventListener("click", async () => {
                    const draft = await getDraftLocally();
                    if (!draft || !draft.buffer) {
                        showToast("Draft expired or no longer available.", "warning");
                        if (recentDraftContainer) recentDraftContainer.style.display = "none";
                        return;
                    }
                    try {
                        await loadFile(draft.buffer, draft.fileName, true);
                        if (draft.cropCoords) {
                            cropCoords = { ...draft.cropCoords };
                        }
                        if (draft.autoPaddingPt !== undefined) {
                            autoPaddingPt = draft.autoPaddingPt;
                        }
                        if (draft.currentMode) {
                            setMode(draft.currentMode);
                        }
                        if (draft.currentPageNum && draft.currentPageNum <= totalPages) {
                            currentPageNum = draft.currentPageNum;
                            await renderPage(currentPageNum);
                        }
                        updateCropBoxVisuals();
                        showToast(`Project resumed: ${draft.fileName}`, "success");
                    } catch (e) {
                        console.error("Resume error:", e);
                        showToast("Failed to restore project: " + e.message, "error");
                    }
                });
            }

            if (btnDiscardDraft) {
                btnDiscardDraft.addEventListener("click", async () => {
                    await deleteDraftLocally();
                    if (recentDraftContainer) recentDraftContainer.style.display = "none";
                    showToast("Draft removed from local storage.", "info");
                });
            }

            // Check for existing saved draft on initialization
            checkAndRenderRecentDraft();

            // ============================================================
            // File Initialization & Studio Mode
            // ============================================================
            setupDropzone(dropzone, fileInput, (files) => {
                if (!files || files.length === 0) return;
                const file = files[0];
                if (file.type !== "application/pdf" && !file.name.toLowerCase().endsWith(".pdf")) {
                    showToast("Please upload a valid PDF document.", "error");
                    return;
                }
                loadFile(file);
            });

            async function loadFile(source, customName, isResumeDraft = false) {
                try {
                    showLoader("Reading PDF file...");
                    if (source instanceof ArrayBuffer) {
                        originalBuffer = source;
                        originalFileName = customName || "document.pdf";
                    } else {
                        originalFileName = source.name;
                        originalBuffer = await source.arrayBuffer();
                    }

                    const task = pdfjsLib.getDocument({ data: originalBuffer.slice(0) });
                    pdfDoc = await task.promise;
                    totalPages = pdfDoc.numPages;
                    if (!isResumeDraft) {
                        currentPageNum = 1;
                        resetCropToDefault();
                    }

                    // Activate Studio Mode
                    document.body.classList.add("in-studio-mode");
                    uploadScreen.style.display = "none";
                    mainFooter.style.display = "none";
                    cropStudio.style.display = "flex";
                    studioDocName.textContent = originalFileName;

                    await autoFitPageScale();
                    await renderPage(currentPageNum);

                    // If in auto-crop mode and fresh upload, automatically run auto trim detection
                    if (!isResumeDraft && currentMode === "auto-crop") {
                        setTimeout(() => performAutoTrim(false), 120);
                    }

                    showToast(isResumeDraft ? `Resumed ${originalFileName}` : `Loaded ${originalFileName} (${totalPages} pages)`, "success");
                } catch (err) {
                    console.error("Load error:", err);
                    showToast("Failed to load PDF: " + err.message, "error");
                    hideLoader();
                }
            }

            btnCloseStudio.addEventListener("click", async () => {
                // Save draft locally before exiting studio
                if (originalBuffer && pdfDoc) {
                    await saveDraftLocally();
                    showToast("Project saved locally (auto-expires in 24h)", "info");
                }

                document.body.classList.remove("in-studio-mode");
                pdfDoc = null;
                originalBuffer = null;
                cropStudio.style.display = "none";
                uploadScreen.style.display = "block";
                mainFooter.style.display = "block";
                fileInput.value = "";

                // Show saved draft card on the upload screen
                await checkAndRenderRecentDraft();
            });

            // Mobile Sidebar Drawer & Backdrop Handlers
            const sidebarBackdrop = document.getElementById("sidebar-backdrop");
            const btnCloseSidebarMobile = document.getElementById("btn-close-sidebar-mobile");

            function toggleSidebar(open) {
                const isOpen = open !== undefined ? open : !studioSidebar.classList.contains("open");
                if (isOpen) {
                    studioSidebar.classList.add("open");
                    if (sidebarBackdrop) sidebarBackdrop.classList.add("active");
                } else {
                    studioSidebar.classList.remove("open");
                    if (sidebarBackdrop) sidebarBackdrop.classList.remove("active");
                }
            }

            if (btnToggleSidebar) {
                btnToggleSidebar.addEventListener("click", () => toggleSidebar());
            }
            if (btnCloseSidebarMobile) {
                btnCloseSidebarMobile.addEventListener("click", () => toggleSidebar(false));
            }
            if (sidebarBackdrop) {
                sidebarBackdrop.addEventListener("click", () => toggleSidebar(false));
            }

            // Quick Tool Ribbon Elements
            const ribbonAutoTools = document.getElementById("ribbon-auto-tools");
            const ribbonManualTools = document.getElementById("ribbon-manual-tools");
            const ribbonResizeTools = document.getElementById("ribbon-resize-tools");

            const btnRibbonAutoTrim = document.getElementById("btn-ribbon-autotrim");
            const autoPadChipsRibbon = document.querySelectorAll(".auto-pad-chip-ribbon");
            const btnRibbonResetAuto = document.getElementById("btn-ribbon-reset-auto");

            const ribbonAspectChips = document.querySelectorAll(".ribbon-aspect-chip");
            const ribbonTrimChips = document.querySelectorAll(".ribbon-trim-chip");
            const btnRibbonResetManual = document.getElementById("btn-ribbon-reset-manual");

            const ribbonPaperChips = document.querySelectorAll(".ribbon-paper-chip");
            const ribbonOrientChips = document.querySelectorAll(".ribbon-orient-chip");

            // Optimized Auto-fit Scale calculation for Mobile & Desktop
            async function autoFitPageScale() {
                if (!pdfDoc) return;
                try {
                    const page = await pdfDoc.getPage(currentPageNum);
                    const unscaled = page.getViewport({ scale: 1.0 });
                    const container = document.getElementById("canvas-container");
                    
                    const isMobile = window.innerWidth <= 992;
                    const padX = isMobile ? 16 : 48;
                    const padY = isMobile ? 16 : 48;
                    
                    const availW = Math.max(120, (container.clientWidth || window.innerWidth) - padX);
                    const availH = Math.max(120, (container.clientHeight || (window.innerHeight - 88)) - padY);

                    const scaleW = availW / unscaled.width;
                    const scaleH = availH / unscaled.height;
                    const idealScale = Math.min(scaleW, scaleH);

                    // Clamp to comfortable reading range [0.35, 2.5]
                    currentScale = Math.max(0.35, Math.min(2.5, Math.round(idealScale * 100) / 100));
                } catch (e) {
                    currentScale = 1.0;
                }
            }

            window.addEventListener("resize", () => {
                if (pdfDoc && document.body.classList.contains("in-studio-mode")) {
                    autoFitPageScale().then(() => renderPage(currentPageNum));
                }
            });

            // ============================================================
            // Page Rendering
            // ============================================================
            async function renderPage(pageNum) {
                if (!pdfDoc) return;
                showLoader(`Rendering page ${pageNum} of ${totalPages}...`);

                try {
                    const page = await pdfDoc.getPage(pageNum);
                    const viewport = page.getViewport({ scale: currentScale });

                    baseCanvas.width = viewport.width;
                    baseCanvas.height = viewport.height;
                    pageContainer.style.width = `${viewport.width}px`;
                    pageContainer.style.height = `${viewport.height}px`;

                    await page.render({
                        canvasContext: baseCtx,
                        viewport: viewport
                    }).promise;

                    // Update UI readouts
                    pageIndicator.textContent = `${pageNum} / ${totalPages}`;
                    btnPrevPage.disabled = pageNum <= 1;
                    btnNextPage.disabled = pageNum >= totalPages;
                    zoomText.textContent = `${Math.round(currentScale * 100)}%`;

                    updateCropBoxVisuals();
                } catch (err) {
                    console.error("Render error:", err);
                    showToast("Page render error: " + err.message, "error");
                } finally {
                    hideLoader();
                }
            }

            // Navigation
            btnPrevPage.addEventListener("click", async () => {
                if (currentPageNum > 1) {
                    currentPageNum--;
                    await renderPage(currentPageNum);
                    if (currentMode === "auto-crop") {
                        performAutoTrim(false);
                    }
                }
            });

            btnNextPage.addEventListener("click", async () => {
                if (currentPageNum < totalPages) {
                    currentPageNum++;
                    await renderPage(currentPageNum);
                    if (currentMode === "auto-crop") {
                        performAutoTrim(false);
                    }
                }
            });

            // Zoom Controls
            btnZoomIn.addEventListener("click", () => {
                if (currentScale < 2.5) {
                    currentScale = Math.round((currentScale + 0.15) * 20) / 20;
                    renderPage(currentPageNum);
                }
            });

            btnZoomOut.addEventListener("click", () => {
                if (currentScale > 0.35) {
                    currentScale = Math.round((currentScale - 0.15) * 20) / 20;
                    renderPage(currentPageNum);
                }
            });

            if (btnFitScreen) {
                btnFitScreen.addEventListener("click", async () => {
                    await autoFitPageScale();
                    renderPage(currentPageNum);
                });
            }

            zoomText.addEventListener("click", () => {
                currentScale = 1.0;
                renderPage(currentPageNum);
            });

            // ============================================================
            // Mode Switching (Auto Crop vs Manual Crop vs Resize Format)
            // ============================================================
            function setMode(mode) {
                currentMode = mode;
                [tabAutoCrop, tabManualCrop, tabResizeMode].forEach(btn => {
                    if (btn) btn.classList.remove("active");
                });

                if (autoCropControlsPanel) autoCropControlsPanel.style.display = "none";
                if (manualCropControlsPanel) manualCropControlsPanel.style.display = "none";
                if (resizeControlsPanel) resizeControlsPanel.style.display = "none";

                if (ribbonAutoTools) ribbonAutoTools.style.display = "none";
                if (ribbonManualTools) ribbonManualTools.style.display = "none";
                if (ribbonResizeTools) ribbonResizeTools.style.display = "none";

                if (mode === "auto-crop") {
                    if (tabAutoCrop) tabAutoCrop.classList.add("active");
                    if (autoCropControlsPanel) autoCropControlsPanel.style.display = "flex";
                    if (ribbonAutoTools) ribbonAutoTools.style.display = "inline-flex";
                    cropOverlayLayer.style.display = "block";
                    performAutoTrim(false);
                } else if (mode === "manual-crop") {
                    if (tabManualCrop) tabManualCrop.classList.add("active");
                    if (manualCropControlsPanel) manualCropControlsPanel.style.display = "flex";
                    if (ribbonManualTools) ribbonManualTools.style.display = "inline-flex";
                    cropOverlayLayer.style.display = "block";
                    updateCropBoxVisuals();
                } else if (mode === "resize") {
                    if (tabResizeMode) tabResizeMode.classList.add("active");
                    if (resizeControlsPanel) resizeControlsPanel.style.display = "flex";
                    if (ribbonResizeTools) ribbonResizeTools.style.display = "inline-flex";
                    cropOverlayLayer.style.display = "none";
                }
            }

            if (tabAutoCrop) tabAutoCrop.addEventListener("click", () => setMode("auto-crop"));
            if (tabManualCrop) tabManualCrop.addEventListener("click", () => setMode("manual-crop"));
            if (tabResizeMode) tabResizeMode.addEventListener("click", () => setMode("resize"));

            // Wire up Ribbon Quick Action listeners
            if (btnRibbonAutoTrim) {
                btnRibbonAutoTrim.addEventListener("click", () => {
                    showLoader("Scanning white margins...");
                    setTimeout(() => {
                        performAutoTrim(true);
                        hideLoader();
                    }, 80);
                });
            }

            autoPadChipsRibbon.forEach(chip => {
                chip.addEventListener("click", () => {
                    autoPadChipsRibbon.forEach(c => c.classList.remove("active"));
                    chip.classList.add("active");
                    autoPaddingPt = parseFloat(chip.dataset.pad) || 0;

                    // Sync with sidebar chips
                    autoPadChips.forEach(sc => {
                        if (sc.dataset.pad === chip.dataset.pad) sc.classList.add("active");
                        else sc.classList.remove("active");
                    });

                    performAutoTrim(false);
                });
            });

            if (btnRibbonResetAuto) {
                btnRibbonResetAuto.addEventListener("click", () => {
                    resetCropToDefault();
                    showToast("Crop box reset to full page", "info");
                });
            }

            ribbonAspectChips.forEach(chip => {
                chip.addEventListener("click", () => {
                    const aspect = chip.dataset.aspect;
                    if (!aspect) return;

                    ribbonAspectChips.forEach(c => c.classList.remove("active"));
                    chip.classList.add("active");

                    aspectChips.forEach(c => {
                        if (c.dataset.aspect === aspect) c.classList.add("active");
                        else c.classList.remove("active");
                    });

                    applyAspectConstraint(aspect);
                });
            });

            ribbonTrimChips.forEach(chip => {
                chip.addEventListener("click", () => {
                    const pts = parseFloat(chip.dataset.trim) || 0;
                    const W = baseCanvas.width / currentScale;
                    const H = baseCanvas.height / currentScale;

                    cropCoords.l = Math.min(0.4, pts / W);
                    cropCoords.r = Math.max(0.6, 1 - (pts / W));
                    cropCoords.t = Math.min(0.4, pts / H);
                    cropCoords.b = Math.max(0.6, 1 - (pts / H));

                    updateCropBoxVisuals();
                    showToast(`Trimmed margins by ${pts} pt`, "info");
                });
            });

            if (btnRibbonResetManual) {
                btnRibbonResetManual.addEventListener("click", () => {
                    resetCropToDefault();
                    showToast("Crop box reset to full page", "info");
                });
            }

            ribbonPaperChips.forEach(chip => {
                chip.addEventListener("click", () => {
                    ribbonPaperChips.forEach(c => c.classList.remove("active"));
                    chip.classList.add("active");
                    if (selectTargetPaper) selectTargetPaper.value = chip.dataset.paper;
                    showToast(`Paper size: ${chip.dataset.paper}`, "info");
                });
            });

            ribbonOrientChips.forEach(chip => {
                chip.addEventListener("click", () => {
                    ribbonOrientChips.forEach(c => c.classList.remove("active"));
                    chip.classList.add("active");
                    if (selectOrientation) selectOrientation.value = chip.dataset.orient;
                    if (btnOrientPortrait && btnOrientLandscape) {
                        if (chip.dataset.orient === "portrait") {
                            btnOrientPortrait.classList.add("active");
                            btnOrientLandscape.classList.remove("active");
                        } else {
                            btnOrientLandscape.classList.add("active");
                            btnOrientPortrait.classList.remove("active");
                        }
                    }
                    showToast(`Orientation: ${chip.dataset.orient}`, "info");
                });
            });

            // ============================================================
            // Visual Crop Box & Drag Mechanics
            // ============================================================
            function resetCropToDefault() {
                cropCoords = { l: 0.05, t: 0.05, r: 0.95, b: 0.95 };
                updateCropBoxVisuals();
            }

            if (btnResetCrop) {
                btnResetCrop.addEventListener("click", () => {
                    resetCropToDefault();
                    showToast("Crop box reset to full page", "info");
                });
            }

            if (btnResetAutoCrop) {
                btnResetAutoCrop.addEventListener("click", () => {
                    resetCropToDefault();
                    showToast("Crop box reset to full page", "info");
                });
            }

            function updateCropBoxVisuals() {
                const W = baseCanvas.width;
                const H = baseCanvas.height;
                if (!W || !H) return;

                const leftPx = cropCoords.l * W;
                const topPx = cropCoords.t * H;
                const widthPx = (cropCoords.r - cropCoords.l) * W;
                const heightPx = (cropCoords.b - cropCoords.t) * H;

                // Position crop box
                cropBox.style.left = `${leftPx}px`;
                cropBox.style.top = `${topPx}px`;
                cropBox.style.width = `${widthPx}px`;
                cropBox.style.height = `${heightPx}px`;

                // Update surrounding dark masks
                maskTop.style.top = "0";
                maskTop.style.left = "0";
                maskTop.style.width = "100%";
                maskTop.style.height = `${topPx}px`;

                maskBottom.style.top = `${topPx + heightPx}px`;
                maskBottom.style.left = "0";
                maskBottom.style.width = "100%";
                maskBottom.style.height = `${H - (topPx + heightPx)}px`;

                maskLeft.style.top = `${topPx}px`;
                maskLeft.style.left = "0";
                maskLeft.style.width = `${leftPx}px`;
                maskLeft.style.height = `${heightPx}px`;

                maskRight.style.top = `${topPx}px`;
                maskRight.style.left = `${leftPx + widthPx}px`;
                maskRight.style.width = `${W - (leftPx + widthPx)}px`;
                maskRight.style.height = `${heightPx}px`;

                // Calculate dimensions in PDF points (unscaled)
                const ptWidth = Math.round(widthPx / currentScale);
                const ptHeight = Math.round(heightPx / currentScale);
                const mmWidth = Math.round(ptWidth * 0.3528);
                const mmHeight = Math.round(ptHeight * 0.3528);

                const label = `${ptWidth} × ${ptHeight} pt (${mmWidth} × ${mmHeight} mm)`;
                if (cropInfoText) {
                    cropInfoText.textContent = label;
                } else if (cropInfoPill) {
                    cropInfoPill.textContent = label;
                }

                // Update input values
                if (inpMarginTop) inpMarginTop.value = Math.round((cropCoords.t * H) / currentScale);
                if (inpMarginBottom) inpMarginBottom.value = Math.round(((1 - cropCoords.b) * H) / currentScale);
                if (inpMarginLeft) inpMarginLeft.value = Math.round((cropCoords.l * W) / currentScale);
                if (inpMarginRight) inpMarginRight.value = Math.round(((1 - cropCoords.r) * W) / currentScale);
            }

            // Sync margin inputs back to cropCoords
            [inpMarginTop, inpMarginBottom, inpMarginLeft, inpMarginRight].forEach(inp => {
                if (!inp) return;
                inp.addEventListener("change", () => {
                    const W = baseCanvas.width / currentScale;
                    const H = baseCanvas.height / currentScale;
                    const t = parseFloat(inpMarginTop.value) || 0;
                    const b = parseFloat(inpMarginBottom.value) || 0;
                    const l = parseFloat(inpMarginLeft.value) || 0;
                    const r = parseFloat(inpMarginRight.value) || 0;

                    cropCoords.t = Math.max(0, Math.min(0.9, t / H));
                    cropCoords.b = Math.max(cropCoords.t + 0.05, Math.min(1.0, 1 - (b / H)));
                    cropCoords.l = Math.max(0, Math.min(0.9, l / W));
                    cropCoords.r = Math.max(cropCoords.l + 0.05, Math.min(1.0, 1 - (r / W)));

                    updateCropBoxVisuals();
                });
            });

            // Quick Trim Chips
            quickTrimChips.forEach(chip => {
                chip.addEventListener("click", () => {
                    const pts = parseFloat(chip.dataset.trim) || 0;
                    const W = baseCanvas.width / currentScale;
                    const H = baseCanvas.height / currentScale;

                    cropCoords.l = Math.min(0.4, pts / W);
                    cropCoords.r = Math.max(0.6, 1 - (pts / W));
                    cropCoords.t = Math.min(0.4, pts / H);
                    cropCoords.b = Math.max(0.6, 1 - (pts / H));

                    updateCropBoxVisuals();
                    showToast(`Trimmed margins by ${pts} pt`, "info");
                });
            });

            // Crop Handles Pointer Events
            document.querySelectorAll(".crop-handle").forEach(handle => {
                handle.addEventListener("pointerdown", (e) => {
                    e.stopPropagation();
                    activeHandle = handle.dataset.handle;
                    dragStart = { x: e.clientX, y: e.clientY };
                    cropStart = { ...cropCoords };
                    cropBox.classList.add("is-dragging");
                    window.addEventListener("pointermove", handlePointerMove);
                    window.addEventListener("pointerup", handlePointerUp);
                });
            });

            // Drag whole box
            cropBox.addEventListener("pointerdown", (e) => {
                if (e.target.classList.contains("crop-handle")) return;
                isDraggingBox = true;
                dragStart = { x: e.clientX, y: e.clientY };
                cropStart = { ...cropCoords };
                cropBox.classList.add("is-dragging");
                window.addEventListener("pointermove", handlePointerMove);
                window.addEventListener("pointerup", handlePointerUp);
            });

            function handlePointerMove(e) {
                const W = baseCanvas.width;
                const H = baseCanvas.height;
                if (!W || !H) return;

                const dx = (e.clientX - dragStart.x) / W;
                const dy = (e.clientY - dragStart.y) / H;

                if (isDraggingBox) {
                    const boxW = cropStart.r - cropStart.l;
                    const boxH = cropStart.b - cropStart.t;

                    let newL = Math.max(0, Math.min(1 - boxW, cropStart.l + dx));
                    let newT = Math.max(0, Math.min(1 - boxH, cropStart.t + dy));

                    cropCoords.l = newL;
                    cropCoords.t = newT;
                    cropCoords.r = newL + boxW;
                    cropCoords.b = newT + boxH;
                } else if (activeHandle) {
                    const minSize = 0.05;

                    if (activeHandle.includes("w")) {
                        cropCoords.l = Math.min(cropStart.r - minSize, Math.max(0, cropStart.l + dx));
                    }
                    if (activeHandle.includes("e")) {
                        cropCoords.r = Math.max(cropStart.l + minSize, Math.min(1, cropStart.r + dx));
                    }
                    if (activeHandle.includes("n")) {
                        cropCoords.t = Math.min(cropStart.b - minSize, Math.max(0, cropStart.t + dy));
                    }
                    if (activeHandle.includes("s")) {
                        cropCoords.b = Math.max(cropStart.t + minSize, Math.min(1, cropStart.b + dy));
                    }
                }

                updateCropBoxVisuals();
            }

            function handlePointerUp() {
                isDraggingBox = false;
                activeHandle = null;
                cropBox.classList.remove("is-dragging");
                window.removeEventListener("pointermove", handlePointerMove);
                window.removeEventListener("pointerup", handlePointerUp);
            }

            // Aspect Ratio Chips Controller
            aspectChips.forEach(chip => {
                chip.addEventListener("click", () => {
                    const aspect = chip.dataset.aspect;
                    if (!aspect) return;

                    aspectChips.forEach(c => c.classList.remove("active"));
                    chip.classList.add("active");

                    if (aspect === "custom") {
                        selectCropAspect.style.display = "block";
                        return;
                    } else {
                        selectCropAspect.style.display = "none";
                    }

                    selectCropAspect.value = aspect;
                    applyAspectConstraint(aspect);
                });
            });

            if (selectCropAspect) {
                selectCropAspect.addEventListener("change", () => {
                    applyAspectConstraint(selectCropAspect.value);
                });
            }

            function applyAspectConstraint(val) {
                if (val === "free") return;

                let ratio = 1.0;
                if (val === "1:1") ratio = 1.0;
                if (val === "4:3") ratio = 4 / 3;
                if (val === "16:9") ratio = 16 / 9;
                if (val === "a4") ratio = 1 / 1.414;

                const W = baseCanvas.width;
                const H = baseCanvas.height;
                const boxW = cropCoords.r - cropCoords.l;
                const newHeight = (boxW * W / ratio) / H;

                if (cropCoords.t + newHeight <= 1.0) {
                    cropCoords.b = cropCoords.t + newHeight;
                } else {
                    cropCoords.b = 1.0;
                    cropCoords.r = Math.min(1.0, cropCoords.l + (cropCoords.b - cropCoords.t) * H * ratio / W);
                }
                updateCropBoxVisuals();
            }

            // Orientation Visual Buttons
            if (btnOrientPortrait && btnOrientLandscape) {
                btnOrientPortrait.addEventListener("click", () => {
                    btnOrientPortrait.classList.add("active");
                    btnOrientLandscape.classList.remove("active");
                    selectOrientation.value = "portrait";
                });

                btnOrientLandscape.addEventListener("click", () => {
                    btnOrientLandscape.classList.add("active");
                    btnOrientPortrait.classList.remove("active");
                    selectOrientation.value = "landscape";
                });
            }

            // Scope Buttons
            scopeBtns.forEach(btn => {
                btn.addEventListener("click", () => {
                    scopeBtns.forEach(b => b.classList.remove("active"));
                    btn.classList.add("active");
                    selectApplyScope.value = btn.dataset.scope;
                });
            });

            // ============================================================
            // Auto Margin Detection Engine
            // ============================================================
            function performAutoTrim(showFeedback = true) {
                const W = baseCanvas.width;
                const H = baseCanvas.height;
                if (!W || !H) return;

                try {
                    const imgData = baseCtx.getImageData(0, 0, W, H);
                    const d = imgData.data;
                    const threshold = parseInt(selectAutoSensitivity ? selectAutoSensitivity.value : "240") || 240;

                    let top = H, bottom = 0, left = W, right = 0;

                    for (let y = 0; y < H; y += 4) {
                        for (let x = 0; x < W; x += 4) {
                            const idx = (y * W + x) * 4;
                            const r = d[idx];
                            const g = d[idx + 1];
                            const b = d[idx + 2];

                            if (r < threshold || g < threshold || b < threshold) {
                                if (x < left) left = x;
                                if (x > right) right = x;
                                if (y < top) top = y;
                                if (y > bottom) bottom = y;
                            }
                        }
                    }

                    if (right > left && bottom > top) {
                        const padPx = autoPaddingPt * currentScale;
                        cropCoords.l = Math.max(0, (left - padPx) / W);
                        cropCoords.r = Math.min(1, (right + padPx) / W);
                        cropCoords.t = Math.max(0, (top - padPx) / H);
                        cropCoords.b = Math.min(1, (bottom + padPx) / H);
                        updateCropBoxVisuals();
                        if (showFeedback) showToast("Auto-trimmed margins successfully!", "success");
                    } else {
                        if (showFeedback) showToast("No distinct content boundaries detected.", "info");
                    }
                } catch (e) {
                    console.error("Auto trim error:", e);
                    if (showFeedback) showToast("Auto-trim failed: " + e.message, "error");
                }
            }

            if (btnAutoTrim) {
                btnAutoTrim.addEventListener("click", () => {
                    showLoader("Scanning white margins...");
                    setTimeout(() => {
                        performAutoTrim(true);
                        hideLoader();
                    }, 80);
                });
            }

            // Auto-crop padding chips
            autoPadChips.forEach(chip => {
                chip.addEventListener("click", () => {
                    autoPadChips.forEach(c => c.classList.remove("active"));
                    chip.classList.add("active");
                    autoPaddingPt = parseFloat(chip.dataset.pad) || 0;
                    performAutoTrim(false);
                });
            });

            if (selectAutoSensitivity) {
                selectAutoSensitivity.addEventListener("change", () => {
                    performAutoTrim(false);
                });
            }

            // ============================================================
            // EXPORT VIA PDF-LIB (Native Vector Preservation)
            // ============================================================
            btnApplyExport.addEventListener("click", async () => {
                if (!originalBuffer) return;

                showLoader("Applying modifications & saving PDF...");
                try {
                    const pdfDocLib = await PDFLib.PDFDocument.load(originalBuffer.slice(0));
                    const pages = pdfDocLib.getPages();
                    const applyScope = selectApplyScope.value; // 'all' | 'current'

                    const targetPages = applyScope === "all"
                        ? pages
                        : [pages[currentPageNum - 1]];

                    if (currentMode === "auto-crop" || currentMode === "manual-crop") {
                        // NATIVE VECTOR CROPBOX MODIFICATION
                        if (currentMode === "auto-crop" && applyScope === "all") {
                            // Smart per-page auto-detection
                            showLoader("Auto-detecting margins across pages...");
                            for (let i = 0; i < pages.length; i++) {
                                const pageLib = pages[i];
                                const { width: pW, height: pH } = pageLib.getSize();

                                let pCoords = { ...cropCoords };
                                try {
                                    const jsPage = await pdfDoc.getPage(i + 1);
                                    const offViewport = jsPage.getViewport({ scale: 0.5 });
                                    const offCanvas = document.createElement("canvas");
                                    offCanvas.width = offViewport.width;
                                    offCanvas.height = offViewport.height;
                                    const offCtx = offCanvas.getContext("2d");

                                    await jsPage.render({ canvasContext: offCtx, viewport: offViewport }).promise;

                                    const imgData = offCtx.getImageData(0, 0, offCanvas.width, offCanvas.height);
                                    const d = imgData.data;
                                    const threshold = parseInt(selectAutoSensitivity ? selectAutoSensitivity.value : "240") || 240;
                                    let top = offCanvas.height, bottom = 0, left = offCanvas.width, right = 0;

                                    for (let y = 0; y < offCanvas.height; y += 4) {
                                        for (let x = 0; x < offCanvas.width; x += 4) {
                                            const idx = (y * offCanvas.width + x) * 4;
                                            if (d[idx] < threshold || d[idx + 1] < threshold || d[idx + 2] < threshold) {
                                                if (x < left) left = x;
                                                if (x > right) right = x;
                                                if (y < top) top = y;
                                                if (y > bottom) bottom = y;
                                            }
                                        }
                                    }

                                    if (right > left && bottom > top) {
                                        const padPx = autoPaddingPt * 0.5;
                                        pCoords = {
                                            l: Math.max(0, (left - padPx) / offCanvas.width),
                                            r: Math.min(1, (right + padPx) / offCanvas.width),
                                            t: Math.max(0, (top - padPx) / offCanvas.height),
                                            b: Math.min(1, (bottom + padPx) / offCanvas.height)
                                        };
                                    }
                                } catch (scanErr) {
                                    pCoords = { ...cropCoords };
                                }

                                const pdfLeft = pCoords.l * pW;
                                const pdfBottom = (1 - pCoords.b) * pH;
                                const pdfWidth = (pCoords.r - pCoords.l) * pW;
                                const pdfHeight = (pCoords.b - pCoords.t) * pH;

                                pageLib.setCropBox(pdfLeft, pdfBottom, pdfWidth, pdfHeight);
                                pageLib.setMediaBox(pdfLeft, pdfBottom, pdfWidth, pdfHeight);
                            }
                        } else {
                            targetPages.forEach(p => {
                                const { width: pW, height: pH } = p.getSize();

                                const pdfLeft = cropCoords.l * pW;
                                const pdfBottom = (1 - cropCoords.b) * pH;
                                const pdfWidth = (cropCoords.r - cropCoords.l) * pW;
                                const pdfHeight = (cropCoords.b - cropCoords.t) * pH;

                                p.setCropBox(pdfLeft, pdfBottom, pdfWidth, pdfHeight);
                                p.setMediaBox(pdfLeft, pdfBottom, pdfWidth, pdfHeight);
                            });
                        }
                    } else if (currentMode === "resize") {
                        // RESIZE PAGE FORMAT
                        const paperKey = selectTargetPaper.value;
                        const orientation = selectOrientation.value;
                        const scaleType = selectContentScale.value;

                        let std = PAPER_SIZES[paperKey] || PAPER_SIZES.A4;
                        let targetW = orientation === "landscape" ? std.height : std.width;
                        let targetH = orientation === "landscape" ? std.width : std.height;

                        const newDoc = await PDFLib.PDFDocument.create();

                        for (let i = 0; i < pages.length; i++) {
                            const shouldResize = (applyScope === "all") || (i === currentPageNum - 1);
                            const origPage = pages[i];
                            const { width: origW, height: origH } = origPage.getSize();

                            if (shouldResize) {
                                const embedded = await newDoc.embedPage(origPage);
                                const newP = newDoc.addPage([targetW, targetH]);

                                if (scaleType === "fit") {
                                    const scale = Math.min(targetW / origW, targetH / origH);
                                    const drawW = origW * scale;
                                    const drawH = origH * scale;
                                    const offsetX = (targetW - drawW) / 2;
                                    const offsetY = (targetH - drawH) / 2;

                                    newP.drawPage(embedded, {
                                        x: offsetX,
                                        y: offsetY,
                                        width: drawW,
                                        height: drawH
                                    });
                                } else if (scaleType === "stretch") {
                                    newP.drawPage(embedded, {
                                        x: 0,
                                        y: 0,
                                        width: targetW,
                                        height: targetH
                                    });
                                } else {
                                    const offsetX = (targetW - origW) / 2;
                                    const offsetY = (targetH - origH) / 2;
                                    newP.drawPage(embedded, {
                                        x: offsetX,
                                        y: offsetY,
                                        width: origW,
                                        height: origH
                                    });
                                }
                            } else {
                                const [copied] = await newDoc.copyPages(pdfDocLib, [i]);
                                newDoc.addPage(copied);
                            }
                        }

                        const outBytes = await newDoc.save();
                        const outName = originalFileName.replace(/\.pdf$/i, "") + `-${paperKey.toLowerCase()}.pdf`;
                        downloadBlob(new Blob([outBytes], { type: "application/pdf" }), outName);
                        showToast("Resized PDF downloaded successfully!", "success");
                        hideLoader();
                        return;
                    }

                    // Save cropped PDF
                    const modifiedBytes = await pdfDocLib.save();
                    const outName = originalFileName.replace(/\.pdf$/i, "") + "-cropped.pdf";
                    downloadBlob(new Blob([modifiedBytes], { type: "application/pdf" }), outName);

                    showToast("Cropped PDF exported successfully with 100% vector clarity!", "success");
                } catch (err) {
                    console.error("Export error:", err);
                    showToast("Failed to process document: " + err.message, "error");
                } finally {
                    hideLoader();
                }
            });
        });
