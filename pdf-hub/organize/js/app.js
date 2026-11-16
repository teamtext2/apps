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

// === App-Specific Script (organize) ===
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

        document.addEventListener("DOMContentLoaded", () => {
            const dropzone = document.getElementById("dropzone");
            const fileInput = document.getElementById("file-input");
            const loadingBanner = document.getElementById("loading-banner");
            const loadingText = document.getElementById("loading-text");
            const organizeStudio = document.getElementById("organize-studio");
            const pagesGrid = document.getElementById("pages-grid");

            // Controls
            const btnChangeDoc = document.getElementById("btn-change-doc");
            const studioFilename = document.getElementById("studio-filename");
            const pageStatusText = document.getElementById("page-status-text");
            const btnRotateAllRight = document.getElementById("btn-rotate-all-right");
            const btnReverseAll = document.getElementById("btn-reverse-all");
            const btnResetPages = document.getElementById("btn-reset-pages");
            const btnSaveOrganized = document.getElementById("btn-save-organized");
            const btnSaveOrganizedMobile = document.getElementById("btn-save-organized-mobile");

            // State
            let originalBuffer = null;
            let originalFileName = "document.pdf";
            let pdfDoc = null;
            let totalPages = 0;

            // Array of page model items:
            // { id, origPageIndex (0-based), rotation: 0, isDeleted: false, thumbDataUrl: null }
            let pageItems = [];

            // Native Crisp SVG Icons
            const SVG_ICONS = {
                grip: `<svg class="svg-icon" viewBox="0 0 24 24" fill="currentColor" style="width: 14px; height: 14px;"><circle cx="9" cy="5" r="1.5"/><circle cx="15" cy="5" r="1.5"/><circle cx="9" cy="12" r="1.5"/><circle cx="15" cy="12" r="1.5"/><circle cx="9" cy="19" r="1.5"/><circle cx="15" cy="19" r="1.5"/></svg>`,
                rotateCcw: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" style="width: 15px; height: 15px;"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.7 2.4L3 8"/><polyline points="3 3 3 8 8 8"/></svg>`,
                rotateCw: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" style="width: 15px; height: 15px;"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.9 1 6.7 2.4L21 8"/><polyline points="21 3 21 8 16 8"/></svg>`,
                duplicate: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 14px; height: 14px;"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`,
                trash: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 15px; height: 15px;"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>`,
                restore: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" style="width: 15px; height: 15px;"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>`
            };

            setupDropzone(dropzone, fileInput, (files) => {
                if (!files || files.length === 0) return;
                const file = files[0];
                if (file.type !== "application/pdf" && !file.name.toLowerCase().endsWith(".pdf")) {
                    showToast("Please upload a valid PDF file.", "error");
                    return;
                }
                loadPdfForOrganizing(file);
            });

            btnChangeDoc.addEventListener("click", () => {
                if (confirm("Close document and choose another file?")) {
                    document.body.classList.remove("in-studio-mode");
                    organizeStudio.style.display = "none";
                    dropzone.style.display = "block";
                    fileInput.value = "";
                    originalBuffer = null;
                    pageItems = [];
                }
            });

            async function loadPdfForOrganizing(file) {
                try {
                    dropzone.style.display = "none";
                    loadingBanner.style.display = "flex";
                    loadingText.textContent = `Reading ${file.name}...`;

                    originalFileName = file.name;
                    originalBuffer = await file.arrayBuffer();

                    const loadingTask = pdfjsLib.getDocument({ data: originalBuffer.slice(0) });
                    pdfDoc = await loadingTask.promise;
                    totalPages = pdfDoc.numPages;

                    studioFilename.textContent = file.name;
                    studioFilename.title = file.name;
                    pageItems = [];

                    // Render thumbnails for each page
                    const offscreenCanvas = document.createElement("canvas");
                    const offCtx = offscreenCanvas.getContext("2d");

                    for (let p = 1; p <= totalPages; p++) {
                        loadingText.textContent = `Rendering page ${p} of ${totalPages}...`;
                        const page = await pdfDoc.getPage(p);

                        // Scale to ~220px width for sharp crisp thumbnail
                        const unscaled = page.getViewport({ scale: 1.0 });
                        const scale = 220 / unscaled.width;
                        const viewport = page.getViewport({ scale: scale });

                        offscreenCanvas.width = viewport.width;
                        offscreenCanvas.height = viewport.height;

                        await page.render({
                            canvasContext: offCtx,
                            viewport: viewport
                        }).promise;

                        const thumbDataUrl = offscreenCanvas.toDataURL("image/jpeg", 0.85);

                        pageItems.push({
                            id: "page_" + p + "_" + Math.random().toString(36).substr(2, 6),
                            origPageIndex: p - 1,
                            rotation: 0,
                            isDeleted: false,
                            thumbDataUrl: thumbDataUrl
                        });
                    }

                    loadingBanner.style.display = "none";
                    document.body.classList.add("in-studio-mode");
                    organizeStudio.style.display = "flex";

                    renderPagesGrid();
                    showToast(`Ready! Loaded ${totalPages} pages.`, "success");
                } catch (err) {
                    console.error("Load error:", err);
                    loadingBanner.style.display = "none";
                    dropzone.style.display = "block";
                    document.body.classList.remove("in-studio-mode");
                    showToast("Failed to load PDF: " + err.message, "error");
                }
            }

            // Render Thumbnails Grid
            function renderPagesGrid() {
                pagesGrid.innerHTML = "";

                let activeCount = 0;

                pageItems.forEach((item, idx) => {
                    if (!item.isDeleted) activeCount++;

                    const card = document.createElement("div");
                    card.className = "page-card" + (item.isDeleted ? " deleted" : "");
                    card.draggable = !item.isDeleted;
                    card.dataset.index = idx;

                    card.innerHTML = `
                        <div class="card-top-header">
                            <div class="card-drag-handle" title="Drag to rearrange sequence">
                                ${SVG_ICONS.grip}
                            </div>
                            <span class="page-num-badge">Page ${idx + 1}</span>
                        </div>

                        <div class="thumb-wrapper">
                            <img src="${item.thumbDataUrl}" class="thumb-canvas" style="transform: rotate(${item.rotation}deg);" alt="Page ${idx + 1}">
                            <div class="deleted-stamp">Removed</div>
                        </div>

                        <div class="card-bottom-bar">
                            <div class="page-actions-group">
                                <button type="button" class="card-action-btn btn-rot-left" data-index="${idx}" title="Rotate -90°">
                                    ${SVG_ICONS.rotateCcw}
                                </button>
                                <button type="button" class="card-action-btn btn-rot-right" data-index="${idx}" title="Rotate +90°">
                                    ${SVG_ICONS.rotateCw}
                                </button>
                                <button type="button" class="card-action-btn btn-duplicate" data-index="${idx}" title="Duplicate page">
                                    ${SVG_ICONS.duplicate}
                                </button>
                                <button type="button" class="card-action-btn btn-delete ${item.isDeleted ? 'is-restore' : ''}" data-index="${idx}" title="${item.isDeleted ? 'Restore page' : 'Delete page'}">
                                    ${item.isDeleted ? SVG_ICONS.restore : SVG_ICONS.trash}
                                </button>
                            </div>
                        </div>
                    `;

                    // Drag & drop mechanics
                    card.addEventListener("dragstart", (e) => {
                        e.dataTransfer.setData("text/plain", idx);
                        card.classList.add("dragging");
                    });

                    card.addEventListener("dragend", () => {
                        card.classList.remove("dragging");
                    });

                    card.addEventListener("dragover", (e) => {
                        e.preventDefault();
                        card.classList.add("drag-over");
                    });

                    card.addEventListener("dragleave", () => {
                        card.classList.remove("drag-over");
                    });

                    card.addEventListener("drop", (e) => {
                        e.preventDefault();
                        card.classList.remove("drag-over");
                        const fromIdx = parseInt(e.dataTransfer.getData("text/plain"), 10);
                        const toIdx = idx;

                        if (fromIdx !== toIdx && !isNaN(fromIdx)) {
                            const [moved] = pageItems.splice(fromIdx, 1);
                            pageItems.splice(toIdx, 0, moved);
                            renderPagesGrid();
                        }
                    });

                    pagesGrid.appendChild(card);
                });

                if (pageStatusText) {
                    pageStatusText.textContent = `${activeCount} of ${pageItems.length} pages kept`;
                }

                // Attach Card Events
                pagesGrid.querySelectorAll(".btn-rot-left").forEach(btn => {
                    btn.addEventListener("click", (e) => {
                        e.stopPropagation();
                        const i = parseInt(btn.dataset.index, 10);
                        pageItems[i].rotation = (pageItems[i].rotation - 90) % 360;
                        renderPagesGrid();
                    });
                });

                pagesGrid.querySelectorAll(".btn-rot-right").forEach(btn => {
                    btn.addEventListener("click", (e) => {
                        e.stopPropagation();
                        const i = parseInt(btn.dataset.index, 10);
                        pageItems[i].rotation = (pageItems[i].rotation + 90) % 360;
                        renderPagesGrid();
                    });
                });

                pagesGrid.querySelectorAll(".btn-duplicate").forEach(btn => {
                    btn.addEventListener("click", (e) => {
                        e.stopPropagation();
                        const i = parseInt(btn.dataset.index, 10);
                        const clone = {
                            ...pageItems[i],
                            id: "page_clone_" + Math.random().toString(36).substr(2, 6)
                        };
                        pageItems.splice(i + 1, 0, clone);
                        renderPagesGrid();
                        showToast(`Duplicated page #${i + 1}`, "info");
                    });
                });

                pagesGrid.querySelectorAll(".btn-delete").forEach(btn => {
                    btn.addEventListener("click", (e) => {
                        e.stopPropagation();
                        const i = parseInt(btn.dataset.index, 10);
                        pageItems[i].isDeleted = !pageItems[i].isDeleted;
                        renderPagesGrid();
                    });
                });
            }

            // Global Actions
            btnRotateAllRight.addEventListener("click", () => {
                pageItems.forEach(item => {
                    item.rotation = (item.rotation + 90) % 360;
                });
                renderPagesGrid();
                showToast("Rotated all pages +90°", "info");
            });

            btnReverseAll.addEventListener("click", () => {
                pageItems.reverse();
                renderPagesGrid();
                showToast("Reversed page sequence", "info");
            });

            btnResetPages.addEventListener("click", () => {
                if (confirm("Reset all page orders, rotations, and deletions?")) {
                    pageItems.sort((a, b) => a.origPageIndex - b.origPageIndex);
                    pageItems.forEach(item => {
                        item.rotation = 0;
                        item.isDeleted = false;
                    });
                    renderPagesGrid();
                    showToast("Restored original document structure", "info");
                }
            });

            // ============================================================
            // SAVE & DOWNLOAD WITH PDF-LIB
            // ============================================================
            async function executeSaveOrganizedPdf() {
                const activePages = pageItems.filter(p => !p.isDeleted);
                if (activePages.length === 0) {
                    showToast("Cannot export: all pages have been marked as removed.", "error");
                    return;
                }

                showToast("Generating organized PDF...", "info");
                try {
                    const srcDoc = await PDFLib.PDFDocument.load(originalBuffer.slice(0));
                    const outDoc = await PDFLib.PDFDocument.create();

                    for (const item of activePages) {
                        const [copiedPage] = await outDoc.copyPages(srcDoc, [item.origPageIndex]);

                        // Apply rotation
                        if (item.rotation !== 0) {
                            const curAngle = copiedPage.getRotation().angle;
                            copiedPage.setRotation(PDFLib.degrees((curAngle + item.rotation) % 360));
                        }

                        outDoc.addPage(copiedPage);
                    }

                    const outBytes = await outDoc.save({ useObjectStreams: true });
                    const outName = originalFileName.replace(/\.pdf$/i, "") + "-organized.pdf";
                    downloadBlob(new Blob([outBytes], { type: "application/pdf" }), outName);

                    showToast(`Exported ${activePages.length} pages successfully!`, "success");
                } catch (err) {
                    console.error("Export error:", err);
                    showToast("Failed to save PDF: " + err.message, "error");
                }
            }

            btnSaveOrganized.addEventListener("click", executeSaveOrganizedPdf);
            if (btnSaveOrganizedMobile) {
                btnSaveOrganizedMobile.addEventListener("click", executeSaveOrganizedPdf);
            }
        });
