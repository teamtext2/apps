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

// === App-Specific Script (split) ===
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

        const SVG_TRASH = `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 16px; height: 16px;"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>`;
        const SVG_CHECK = `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width: 13px; height: 13px;"><polyline points="20 6 9 17 4 12"/></svg>`;
        const SVG_DOC = `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 20px; height: 20px;"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>`;
        const SVG_DOWNLOAD = `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 14px; height: 14px;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`;

        document.addEventListener("DOMContentLoaded", () => {
            // Dropzone & File Input
            const dropzone = document.getElementById("dropzone");
            const fileInput = document.getElementById("file-input");

            // Studios
            const splitStudio = document.getElementById("split-studio");
            const resultsStudio = document.getElementById("results-studio");

            // Summary Card
            const summaryFileName = document.getElementById("summary-file-name");
            const summaryFileMeta = document.getElementById("summary-file-meta");
            const btnChangeFile = document.getElementById("btn-change-file");

            // Mode Tabs & Panels
            const modeTabBtns = document.querySelectorAll(".mode-tab-btn");
            const panelRange = document.getElementById("panel-range");
            const panelExtract = document.getElementById("panel-extract");
            const panelBurst = document.getElementById("panel-burst");

            // Mode 1: Range Split Elements
            const rangesListWrap = document.getElementById("ranges-list-wrap");
            const btnAddRange = document.getElementById("btn-add-range");
            const chkMergeRanges = document.getElementById("chk-merge-ranges");

            // Mode 2: Extract Elements
            const pagesThumbnailGrid = document.getElementById("pages-thumbnail-grid");
            const selectedCountLabel = document.getElementById("selected-count-label");
            const btnSelectAll = document.getElementById("btn-select-all");
            const btnDeselectAll = document.getElementById("btn-deselect-all");
            const btnSelectOdd = document.getElementById("btn-select-odd");
            const btnSelectEven = document.getElementById("btn-select-even");
            const chkExtractSeparate = document.getElementById("chk-extract-separate");

            // Mode 3: Burst Elements
            const burstTotalPagesLabel = document.getElementById("burst-total-pages-label");

            // Action Bar
            const btnExecuteSplit = document.getElementById("btn-execute-split");
            const btnExecuteText = document.getElementById("btn-execute-text");

            // Results Elements
            const resultsDescText = document.getElementById("results-desc-text");
            const resultsListGrid = document.getElementById("results-list-grid");
            const btnSplitAnother = document.getElementById("btn-split-another");
            const btnDownloadAllResultsZip = document.getElementById("btn-download-all-results-zip");

            // State
            let loadedFile = null;
            let loadedBuffer = null;
            let pdfJsDoc = null;
            let totalPages = 0;
            let currentMode = "range"; // 'range' | 'extract' | 'burst'

            // Range items: [ { id, from, to } ]
            let rangesList = [];

            // Visual extracted page selections: Set of 1-based page numbers
            let selectedPagesSet = new Set();

            // Generated output files: [ { name, blob, size, pageCount } ]
            let outputFilesList = [];

            // ==========================================
            // DROPZONE & LOAD FILE
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
                    showToast("Analyzing PDF structure...", "info");
                    loadedFile = file;
                    loadedBuffer = await file.arrayBuffer();

                    const loadingTask = pdfjsLib.getDocument({ data: loadedBuffer.slice(0) });
                    pdfJsDoc = await loadingTask.promise;
                    totalPages = pdfJsDoc.numPages;

                    summaryFileName.textContent = file.name;
                    summaryFileMeta.textContent = `${formatBytes(file.size)} • ${totalPages} ${totalPages === 1 ? 'Page' : 'Pages'}`;
                    burstTotalPagesLabel.textContent = `${totalPages} ${totalPages === 1 ? 'page' : 'pages'}`;

                    // Initialize Default Ranges
                    initDefaultRanges();

                    // Render Visual Grid Thumbnails
                    selectedPagesSet.clear();
                    renderVisualPagesGrid();

                    dropzone.style.display = "none";
                    resultsStudio.style.display = "none";
                    splitStudio.style.display = "flex";

                    showToast(`Loaded ${file.name} successfully`, "success");
                } catch (err) {
                    console.error("PDF load error:", err);
                    showToast("Failed to load PDF: " + err.message, "error");
                }
            }

            btnChangeFile.addEventListener("click", resetToUpload);
            btnSplitAnother.addEventListener("click", resetToUpload);

            function resetToUpload() {
                loadedFile = null;
                loadedBuffer = null;
                pdfJsDoc = null;
                totalPages = 0;
                rangesList = [];
                selectedPagesSet.clear();
                outputFilesList = [];
                fileInput.value = "";

                splitStudio.style.display = "none";
                resultsStudio.style.display = "none";
                dropzone.style.display = "block";
            }

            // ==========================================
            // MODE TABS SWITCHER
            // ==========================================
            modeTabBtns.forEach(btn => {
                btn.addEventListener("click", () => {
                    modeTabBtns.forEach(b => b.classList.remove("active"));
                    btn.classList.add("active");
                    currentMode = btn.getAttribute("data-mode");

                    panelRange.style.display = currentMode === "range" ? "block" : "none";
                    panelExtract.style.display = currentMode === "extract" ? "block" : "none";
                    panelBurst.style.display = currentMode === "burst" ? "block" : "none";

                    updateExecuteButtonText();
                });
            });

            function updateExecuteButtonText() {
                if (currentMode === "range") {
                    btnExecuteText.textContent = chkMergeRanges.checked ? "Merge & Export Ranges" : "Split Ranges Now";
                } else if (currentMode === "extract") {
                    btnExecuteText.textContent = `Extract ${selectedPagesSet.size} Selected Pages`;
                } else if (currentMode === "burst") {
                    btnExecuteText.textContent = `Burst All ${totalPages} Pages (ZIP)`;
                }
            }

            chkMergeRanges.addEventListener("change", updateExecuteButtonText);

            // ==========================================
            // MODE 1: RANGE SPLIT LOGIC
            // ==========================================
            function initDefaultRanges() {
                rangesList = [];
                if (totalPages <= 2) {
                    rangesList.push({ id: 1, from: 1, to: totalPages });
                } else {
                    const mid = Math.ceil(totalPages / 2);
                    rangesList.push({ id: 1, from: 1, to: mid });
                    rangesList.push({ id: 2, from: mid + 1, to: totalPages });
                }
                renderRangesList();
            }

            function renderRangesList() {
                rangesListWrap.innerHTML = "";

                rangesList.forEach((range, index) => {
                    const row = document.createElement("div");
                    row.className = "range-row-card";
                    row.innerHTML = `
                        <div class="range-row-info">
                            <span class="range-tag-badge">Part ${index + 1}</span>
                            <div class="range-inputs-group">
                                <span style="font-size: 0.85rem; color: var(--text-secondary);">From page</span>
                                <input type="number" class="range-input inp-range-from" min="1" max="${totalPages}" value="${range.from}" data-id="${range.id}">
                                <span style="font-size: 0.85rem; color: var(--text-secondary);">to</span>
                                <input type="number" class="range-input inp-range-to" min="1" max="${totalPages}" value="${range.to}" data-id="${range.id}">
                            </div>
                        </div>

                        ${rangesList.length > 1 ? `
                            <button type="button" class="btn-remove-range" data-id="${range.id}" title="Remove range">
                                ${SVG_TRASH}
                            </button>
                        ` : ''}
                    `;

                    row.querySelector(".inp-range-from").addEventListener("change", (e) => {
                        let val = parseInt(e.target.value, 10) || 1;
                        val = Math.max(1, Math.min(totalPages, val));
                        e.target.value = val;
                        range.from = val;
                    });

                    row.querySelector(".inp-range-to").addEventListener("change", (e) => {
                        let val = parseInt(e.target.value, 10) || totalPages;
                        val = Math.max(1, Math.min(totalPages, val));
                        e.target.value = val;
                        range.to = val;
                    });

                    const delBtn = row.querySelector(".btn-remove-range");
                    if (delBtn) {
                        delBtn.addEventListener("click", () => {
                            rangesList = rangesList.filter(r => r.id !== range.id);
                            renderRangesList();
                        });
                    }

                    rangesListWrap.appendChild(row);
                });
            }

            btnAddRange.addEventListener("click", () => {
                const nextId = Date.now();
                const lastRange = rangesList[rangesList.length - 1];
                let nextFrom = lastRange ? Math.min(totalPages, lastRange.to + 1) : 1;
                let nextTo = totalPages;

                rangesList.push({
                    id: nextId,
                    from: nextFrom,
                    to: nextTo
                });
                renderRangesList();
            });

            // ==========================================
            // MODE 2: VISUAL PAGE SELECTION LOGIC
            // ==========================================
            async function renderVisualPagesGrid() {
                pagesThumbnailGrid.innerHTML = "";
                updateSelectedCountUI();

                for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
                    const card = document.createElement("div");
                    card.className = "page-thumb-card";
                    card.setAttribute("data-page", pageNum);
                    card.innerHTML = `
                        <div class="thumb-canvas-box">
                            <canvas id="thumb-canvas-${pageNum}"></canvas>
                            <div class="thumb-check-badge">
                                ${SVG_CHECK}
                            </div>
                        </div>
                        <div class="thumb-footer-row">Page ${pageNum}</div>
                    `;

                    card.addEventListener("click", () => {
                        togglePageSelection(pageNum, card);
                    });

                    pagesThumbnailGrid.appendChild(card);
                    renderPageThumbnail(pageNum);
                }
            }

            async function renderPageThumbnail(pageNum) {
                try {
                    const page = await pdfJsDoc.getPage(pageNum);
                    const canvas = document.getElementById(`thumb-canvas-${pageNum}`);
                    if (!canvas) return;

                    const ctx = canvas.getContext("2d");
                    const viewport = page.getViewport({ scale: 0.35 });

                    canvas.width = viewport.width;
                    canvas.height = viewport.height;

                    await page.render({
                        canvasContext: ctx,
                        viewport: viewport
                    }).promise;
                } catch (e) { }
            }

            function togglePageSelection(pageNum, cardElement) {
                if (selectedPagesSet.has(pageNum)) {
                    selectedPagesSet.delete(pageNum);
                    cardElement.classList.remove("selected");
                } else {
                    selectedPagesSet.add(pageNum);
                    cardElement.classList.add("selected");
                }
                updateSelectedCountUI();
                updateExecuteButtonText();
            }

            function updateSelectedCountUI() {
                selectedCountLabel.textContent = `${selectedPagesSet.size} selected`;
            }

            btnSelectAll.addEventListener("click", () => {
                for (let i = 1; i <= totalPages; i++) selectedPagesSet.add(i);
                document.querySelectorAll(".page-thumb-card").forEach(c => c.classList.add("selected"));
                updateSelectedCountUI();
                updateExecuteButtonText();
            });

            btnDeselectAll.addEventListener("click", () => {
                selectedPagesSet.clear();
                document.querySelectorAll(".page-thumb-card").forEach(c => c.classList.remove("selected"));
                updateSelectedCountUI();
                updateExecuteButtonText();
            });

            btnSelectOdd.addEventListener("click", () => {
                selectedPagesSet.clear();
                document.querySelectorAll(".page-thumb-card").forEach((c, idx) => {
                    const p = idx + 1;
                    if (p % 2 !== 0) {
                        selectedPagesSet.add(p);
                        c.classList.add("selected");
                    } else {
                        c.classList.remove("selected");
                    }
                });
                updateSelectedCountUI();
                updateExecuteButtonText();
            });

            btnSelectEven.addEventListener("click", () => {
                selectedPagesSet.clear();
                document.querySelectorAll(".page-thumb-card").forEach((c, idx) => {
                    const p = idx + 1;
                    if (p % 2 === 0) {
                        selectedPagesSet.add(p);
                        c.classList.add("selected");
                    } else {
                        c.classList.remove("selected");
                    }
                });
                updateSelectedCountUI();
                updateExecuteButtonText();
            });

            // ==========================================
            // EXECUTE SPLIT (PDF-LIB VECTOR ENGINE)
            // ==========================================
            btnExecuteSplit.addEventListener("click", async () => {
                if (!loadedBuffer) return;

                try {
                    btnExecuteSplit.disabled = true;
                    showToast("Processing document with PDF-Lib...", "info");
                    outputFilesList = [];

                    const srcDoc = await PDFLib.PDFDocument.load(loadedBuffer);
                    const baseName = loadedFile.name.replace(/\.pdf$/i, "");

                    // MODE 1: RANGE SPLIT
                    if (currentMode === "range") {
                        if (rangesList.length === 0) {
                            showToast("Please add at least one page range.", "error");
                            return;
                        }

                        // Check if merging into a single PDF
                        if (chkMergeRanges.checked) {
                            const mergedDoc = await PDFLib.PDFDocument.create();
                            let totalExtractedPages = 0;

                            for (let r of rangesList) {
                                const start = Math.min(r.from, r.to);
                                const end = Math.max(r.from, r.to);
                                const pageIndices = [];
                                for (let p = start; p <= end; p++) {
                                    if (p >= 1 && p <= totalPages) pageIndices.push(p - 1);
                                }
                                const copiedPages = await mergedDoc.copyPages(srcDoc, pageIndices);
                                copiedPages.forEach(cp => mergedDoc.addPage(cp));
                                totalExtractedPages += copiedPages.length;
                            }

                            const pdfBytes = await mergedDoc.save();
                            const fileName = `${baseName}-ranges-merged.pdf`;
                            outputFilesList.push({
                                name: fileName,
                                blob: new Blob([pdfBytes], { type: "application/pdf" }),
                                size: pdfBytes.byteLength,
                                pageCount: totalExtractedPages
                            });
                        } else {
                            // Separate file for each range
                            for (let i = 0; i < rangesList.length; i++) {
                                const r = rangesList[i];
                                const start = Math.min(r.from, r.to);
                                const end = Math.max(r.from, r.to);
                                const pageIndices = [];
                                for (let p = start; p <= end; p++) {
                                    if (p >= 1 && p <= totalPages) pageIndices.push(p - 1);
                                }

                                const partDoc = await PDFLib.PDFDocument.create();
                                const copiedPages = await partDoc.copyPages(srcDoc, pageIndices);
                                copiedPages.forEach(cp => partDoc.addPage(cp));

                                const pdfBytes = await partDoc.save();
                                const fileName = `${baseName}-part-${i + 1}-pages-${start}-to-${end}.pdf`;
                                outputFilesList.push({
                                    name: fileName,
                                    blob: new Blob([pdfBytes], { type: "application/pdf" }),
                                    size: pdfBytes.byteLength,
                                    pageCount: copiedPages.length
                                });
                            }
                        }
                    }

                    // MODE 2: VISUAL EXTRACTION
                    else if (currentMode === "extract") {
                        if (selectedPagesSet.size === 0) {
                            showToast("Please select at least one page to extract.", "error");
                            return;
                        }

                        const sortedPages = Array.from(selectedPagesSet).sort((a, b) => a - b);

                        if (chkExtractSeparate.checked) {
                            // Extract each selected page as individual file
                            for (let pageNum of sortedPages) {
                                const singleDoc = await PDFLib.PDFDocument.create();
                                const copiedPages = await singleDoc.copyPages(srcDoc, [pageNum - 1]);
                                singleDoc.addPage(copiedPages[0]);

                                const pdfBytes = await singleDoc.save();
                                const fileName = `${baseName}-page-${pageNum}.pdf`;
                                outputFilesList.push({
                                    name: fileName,
                                    blob: new Blob([pdfBytes], { type: "application/pdf" }),
                                    size: pdfBytes.byteLength,
                                    pageCount: 1
                                });
                            }
                        } else {
                            // Combine all selected pages into single document
                            const combinedDoc = await PDFLib.PDFDocument.create();
                            const pageIndices = sortedPages.map(p => p - 1);
                            const copiedPages = await combinedDoc.copyPages(srcDoc, pageIndices);
                            copiedPages.forEach(cp => combinedDoc.addPage(cp));

                            const pdfBytes = await combinedDoc.save();
                            const fileName = `${baseName}-extracted-${sortedPages.length}pages.pdf`;
                            outputFilesList.push({
                                name: fileName,
                                blob: new Blob([pdfBytes], { type: "application/pdf" }),
                                size: pdfBytes.byteLength,
                                pageCount: copiedPages.length
                            });
                        }
                    }

                    // MODE 3: BURST ALL PAGES
                    else if (currentMode === "burst") {
                        for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
                            const singleDoc = await PDFLib.PDFDocument.create();
                            const copiedPages = await singleDoc.copyPages(srcDoc, [pageNum - 1]);
                            singleDoc.addPage(copiedPages[0]);

                            const pdfBytes = await singleDoc.save();
                            const fileName = `${baseName}-page-${pageNum}.pdf`;
                            outputFilesList.push({
                                name: fileName,
                                blob: new Blob([pdfBytes], { type: "application/pdf" }),
                                size: pdfBytes.byteLength,
                                pageCount: 1
                            });
                        }
                    }

                    // If exactly 1 file was generated, trigger immediate download
                    if (outputFilesList.length === 1) {
                        downloadBlob(outputFilesList[0].blob, outputFilesList[0].name);
                    }

                    // Show Results Studio
                    displayResultsScreen();
                    showToast(`Successfully created ${outputFilesList.length} PDF ${outputFilesList.length === 1 ? 'file' : 'files'}!`, "success");
                } catch (err) {
                    console.error("Split execution error:", err);
                    showToast("Failed to split PDF: " + err.message, "error");
                } finally {
                    btnExecuteSplit.disabled = false;
                }
            });

            // ==========================================
            // RESULTS DISPLAY & ZIP PACKAGING
            // ==========================================
            function displayResultsScreen() {
                splitStudio.style.display = "none";
                resultsStudio.style.display = "block";

                resultsDescText.textContent = `Generated ${outputFilesList.length} ${outputFilesList.length === 1 ? 'document' : 'documents'}. Download individually or package all in a ZIP archive.`;
                resultsListGrid.innerHTML = "";

                outputFilesList.forEach((fileObj, idx) => {
                    const card = document.createElement("div");
                    card.className = "result-file-card";
                    card.innerHTML = `
                        <div style="display: flex; align-items: center; gap: 0.65rem; min-width: 0;">
                            <div style="color: var(--accent-red); flex-shrink: 0;">
                                ${SVG_DOC}
                            </div>
                            <div style="min-width: 0;">
                                <div style="font-size: 0.88rem; font-weight: 700; color: var(--text-primary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 170px;" title="${fileObj.name}">
                                    ${fileObj.name}
                                </div>
                                <div style="font-size: 0.78rem; color: var(--text-muted);">
                                    ${fileObj.pageCount} ${fileObj.pageCount === 1 ? 'page' : 'pages'} • ${formatBytes(fileObj.size)}
                                </div>
                            </div>
                        </div>

                        <button type="button" class="btn-secondary btn-dl-single" data-idx="${idx}" style="padding: 0.35rem 0.65rem; font-size: 0.8rem;" title="Download this file">
                            ${SVG_DOWNLOAD}
                        </button>
                    `;

                    card.querySelector(".btn-dl-single").addEventListener("click", () => {
                        downloadBlob(fileObj.blob, fileObj.name);
                        showToast(`Downloaded ${fileObj.name}`, "success");
                    });

                    resultsListGrid.appendChild(card);
                });

                // Hide ZIP button if only 1 file
                btnDownloadAllResultsZip.style.display = outputFilesList.length > 1 ? "inline-flex" : "none";
            }

            btnDownloadAllResultsZip.addEventListener("click", async () => {
                if (outputFilesList.length === 0) return;

                if (typeof JSZip === "undefined") {
                    showToast("ZIP library not loaded. Downloading individually...", "info");
                    outputFilesList.forEach(f => downloadBlob(f.blob, f.name));
                    return;
                }

                showToast("Packaging ZIP archive...", "info");
                try {
                    const zip = new JSZip();
                    const folderName = loadedFile.name.replace(/\.pdf$/i, "") + "-split";
                    const folder = zip.folder(folderName);

                    outputFilesList.forEach(f => {
                        folder.file(f.name, f.blob);
                    });

                    const zipBlob = await zip.generateAsync({ type: "blob" });
                    downloadBlob(zipBlob, `${folderName}.zip`);
                    showToast("ZIP archive downloaded successfully!", "success");
                } catch (err) {
                    console.error("ZIP creation error:", err);
                    showToast("Failed to create ZIP: " + err.message, "error");
                }
            });
        });
