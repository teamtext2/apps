/**
 * Spac2 PDF to Word (DOCX) — Dedicated Standalone Script
 * 100% Client-Side In-Browser Conversion
 */

// Tool Directory for the Tool Switcher Dropdown
const PDF_TOOLS_LIST = [
    { title: "PDF to Word (DOCX)", url: "/apps/pdf-hub/pdf-to-doc", icon: "file-text", badge: "DOCX", current: true },
    { title: "Merge PDF", url: "/apps/pdf-hub/merge", icon: "files", badge: "Popular" },
    { title: "Split PDF", url: "/apps/pdf-hub/split", icon: "scissors", badge: "Utility" },
    { title: "Organize PDF", url: "/apps/pdf-hub/organize", icon: "grid", badge: "Visual" },
    { title: "Compress PDF", url: "/apps/pdf-hub/compress", icon: "minimize-2", badge: "Opt" },
    { title: "PDF to Image", url: "/apps/pdf-hub/pdf-to-image", icon: "file-image", badge: "High-DPI" },
    { title: "OCR PDF", url: "/apps/pdf-hub/ocr", icon: "scan", badge: "AI Vision" },
    { title: "Sign PDF", url: "/apps/pdf-hub/sign", icon: "pen-tool", badge: "E-Sign" },
    { title: "Annotate PDF", url: "/apps/pdf-hub/annotate", icon: "edit-3", badge: "Editor" },
    { title: "Watermark PDF", url: "/apps/pdf-hub/watermark", icon: "stamp", badge: "Stamp" },
    { title: "Crop & Resize", url: "/apps/pdf-hub/crop-resize", icon: "crop", badge: "Paper" },
    { title: "PDF Metadata", url: "/apps/pdf-hub/metadata", icon: "info", badge: "Privacy" }
];

// Configure PDF.js Worker
if (typeof pdfjsLib !== "undefined") {
    if (window.location.protocol === 'file:') {
        pdfjsLib.GlobalWorkerOptions.workerSrc = '';
    } else {
        pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
    }
}

// Theme Handlers
function initTheme() {
    const savedTheme = localStorage.getItem("spac2_theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme") || "dark";
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

// Tool Switcher Dropdown
function initToolSwitcher() {
    const switcher = document.querySelector(".tool-switcher");
    if (!switcher) return;

    const btn = switcher.querySelector(".tool-switcher-btn");
    const menu = switcher.querySelector(".tool-dropdown-menu");
    if (!btn || !menu) return;

    if (menu.children.length === 0) {
        PDF_TOOLS_LIST.forEach(tool => {
            const item = document.createElement("a");
            item.href = tool.url;
            item.className = "tool-dropdown-item";
            item.innerHTML = `
                <i data-lucide="${tool.icon}" style="width: 16px; height: 16px; flex-shrink: 0; color: var(--accent-red);"></i>
                <div style="flex-grow: 1; min-width: 0;">
                    <span style="font-weight: 600; font-size: 0.85rem; color: var(--text-primary); display: block;">${tool.title}</span>
                </div>
                <span style="font-size: 0.68rem; color: var(--text-muted); padding: 0.15rem 0.45rem; background: rgba(255, 255, 255, 0.05); border-radius: 999px;">${tool.badge}</span>
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

// Toast Notifications
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
        <i data-lucide="${iconName}" style="width: 18px; height: 18px; flex-shrink: 0;"></i>
        <span>${message}</span>
    `;

    container.appendChild(toast);
    if (window.lucide) window.lucide.createIcons({ root: toast });

    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(12px) scale(0.96)";
        toast.style.transition = "all 0.25s ease";
        setTimeout(() => toast.remove(), 250);
    }, 3500);
}

// Utility: Format File Size
function formatBytes(bytes, decimals = 2) {
    if (!bytes || bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}

// Utility: Trigger Download
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

// Dropzone Wiring
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

    // Paste PDF support
    window.addEventListener("paste", (e) => {
        if (e.clipboardData && e.clipboardData.files && e.clipboardData.files.length > 0) {
            onFilesSelected(e.clipboardData.files);
        }
    });
}

// Main Application Logic
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initToolSwitcher();
    if (window.lucide) window.lucide.createIcons();

    // Elements
    const dropzone = document.getElementById("dropzone");
    const fileInput = document.getElementById("file-input");

    const configStudio = document.getElementById("config-studio");
    const progressStudio = document.getElementById("progress-studio");
    const resultStudio = document.getElementById("result-studio");

    const fileNameLabel = document.getElementById("file-name-label");
    const fileSizePill = document.getElementById("file-size-pill");
    const filePagesPill = document.getElementById("file-pages-pill");
    const btnChangeFile = document.getElementById("btn-change-file");

    // Mode Selection
    const modeCardVisual = document.getElementById("mode-card-visual");
    const modeCardEditable = document.getElementById("mode-card-editable");
    const disclaimerEditable = document.getElementById("disclaimer-editable");
    const optionsVisual = document.getElementById("options-visual");
    const optionsEditable = document.getElementById("options-editable");

    // Inputs
    const selectVisualDpi = document.getElementById("select-visual-dpi");
    const selectVisualFormat = document.getElementById("select-visual-format");
    const inpPageScope = document.getElementById("inp-page-scope");
    const selectEditFont = document.getElementById("select-edit-font");
    const chkSmartParagraphs = document.getElementById("chk-smart-paragraphs");
    const chkDetectHeadings = document.getElementById("chk-detect-headings");
    const inpPageScopeEditable = document.getElementById("inp-page-scope-editable");

    // OCR Elements
    const chkEnableOcr = document.getElementById("chk-enable-ocr");
    const selectOcrLang = document.getElementById("select-ocr-lang");
    const chkFallbackImage = document.getElementById("chk-fallback-image");

    let ocrWorker = null;
    let currentWorkerLang = null;

    function detectScriptFromText(text) {
        if (!text || typeof text !== "string") return null;
        const clean = text.trim();
        if (!clean) return null;
        if (/[àáảãạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵđ]/i.test(clean)) return "vie+eng";
        if (/[\u3040-\u30ff]/.test(clean)) return "jpn+eng";
        if (/[\uac00-\ud7af]/.test(clean)) return "kor+eng";
        if (/[\u4e00-\u9fff]/.test(clean)) return "chi_sim+eng";
        if (/[\u0400-\u04ff]/.test(clean)) return "rus+eng";
        if (/[\u0600-\u06ff]/.test(clean)) return "ara+eng";
        if (/[\u0e00-\u0e7f]/.test(clean)) return "tha+eng";
        if (/[\u0900-\u097f]/.test(clean)) return "hin+eng";
        if (/[äöüß]/i.test(clean)) return "deu+eng";
        if (/[éèêëàâôûùçœæ]/i.test(clean)) return "fra+eng";
        if (/[ñ¿¡áéíóú]/i.test(clean)) return "spa+eng";
        return null;
    }

    async function resolveOcrLanguage(requestedLang, doc) {
        if (requestedLang && requestedLang !== "auto") {
            return requestedLang;
        }

        // Auto-detect mode:
        try {
            // 1. Check PDF Metadata
            if (doc && doc.getMetadata) {
                const meta = await doc.getMetadata().catch(() => null);
                if (meta && meta.info) {
                    const textCorpus = `${meta.info.Title || ''} ${meta.info.Subject || ''} ${meta.info.Author || ''} ${meta.info.Keywords || ''}`;
                    const detected = detectScriptFromText(textCorpus);
                    if (detected) return detected;
                }
            }

            // 2. Sample any existing digital text in PDF
            if (doc && doc.numPages) {
                const sampleLimit = Math.min(3, doc.numPages);
                for (let p = 1; p <= sampleLimit; p++) {
                    try {
                        const page = await doc.getPage(p);
                        const tc = await page.getTextContent({ normalizeWhitespace: true });
                        const str = tc.items.map(it => it.str || "").join(" ");
                        const detected = detectScriptFromText(str);
                        if (detected) return detected;
                    } catch (e) {}
                }
            }

            // 3. Fallback to Browser Locale
            const navLang = (navigator.language || (navigator.languages && navigator.languages[0]) || "vi").toLowerCase();
            if (navLang.startsWith("vi")) return "vie+eng";
            if (navLang.startsWith("zh")) return "chi_sim+eng";
            if (navLang.startsWith("ja")) return "jpn+eng";
            if (navLang.startsWith("ko")) return "kor+eng";
            if (navLang.startsWith("fr")) return "fra+eng";
            if (navLang.startsWith("de")) return "deu+eng";
            if (navLang.startsWith("es")) return "spa+eng";
            if (navLang.startsWith("ru")) return "rus+eng";
            if (navLang.startsWith("pt")) return "por+eng";
            if (navLang.startsWith("it")) return "ita+eng";
            if (navLang.startsWith("th")) return "tha+eng";
            if (navLang.startsWith("id")) return "ind+eng";
            if (navLang.startsWith("ar")) return "ara+eng";
            if (navLang.startsWith("hi")) return "hin+eng";

            return "vie+eng";
        } catch (err) {
            console.warn("Language auto-detection fallback error:", err);
            return "vie+eng";
        }
    }

    async function getOcrWorkerInstance(lang) {
        if (!window.Tesseract) return null;
        if (ocrWorker && currentWorkerLang === lang) {
            return ocrWorker;
        }
        if (ocrWorker) {
            try {
                await ocrWorker.terminate();
            } catch (e) {
                console.warn("Worker termination error:", e);
            }
            ocrWorker = null;
        }
        progressStatusText.textContent = `Initializing AI OCR engine (${lang})...`;
        ocrWorker = await Tesseract.createWorker(lang);
        currentWorkerLang = lang;
        return ocrWorker;
    }

    // Action buttons
    const btnStartConvert = document.getElementById("btn-start-convert");
    const btnDownloadDocx = document.getElementById("btn-download-docx");
    const btnReconfig = document.getElementById("btn-reconfig");
    const btnConvertAnother = document.getElementById("btn-convert-another");

    // Progress elements
    const progressTitleText = document.getElementById("progress-title-text");
    const progressStatusText = document.getElementById("progress-status-text");
    const progressBarFill = document.getElementById("progress-bar-fill");
    const progressPercent = document.getElementById("progress-percent");

    // Result elements
    const resModeVal = document.getElementById("res-mode-val");
    const resPagesVal = document.getElementById("res-pages-val");
    const resSizeVal = document.getElementById("res-size-val");
    const tabBtnVisual = document.getElementById("tab-btn-visual");
    const tabBtnText = document.getElementById("tab-btn-text");
    const previewTabVisualContent = document.getElementById("preview-tab-visual-content");
    const previewTabTextContent = document.getElementById("preview-tab-text-content");
    const editableTextStreamBox = document.getElementById("editable-text-stream-box");
    const btnCopyExtractedText = document.getElementById("btn-copy-extracted-text");

    // State
    let loadedFile = null;
    let loadedBuffer = null;
    let pdfDoc = null;
    let totalPages = 0;
    let selectedMode = "visual"; // "visual" or "editable"
    let generatedDocxBlob = null;
    let generatedDocxFilename = "";
    let generatedPageImages = [];
    let extractedPageTexts = [];

    // Dropzone Initializer
    setupDropzone(dropzone, fileInput, (files) => {
        if (!files || files.length === 0) return;
        const file = files[0];
        if (file.type !== "application/pdf" && !file.name.toLowerCase().endsWith(".pdf")) {
            showToast("Please select a valid PDF file.", "error");
            return;
        }
        loadFile(file);
    });

    // Load PDF
    async function loadFile(file) {
        try {
            showToast("Loading PDF document...", "info");
            loadedFile = file;
            loadedBuffer = await file.arrayBuffer();

            const loadingTask = pdfjsLib.getDocument({
                data: loadedBuffer.slice(0),
                cMapUrl: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/cmaps/',
                cMapPacked: true,
                standardFontDataUrl: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/standard_fonts/'
            });
            pdfDoc = await loadingTask.promise;
            totalPages = pdfDoc.numPages;

            fileNameLabel.textContent = file.name;
            fileNameLabel.title = file.name;
            if (fileSizePill) fileSizePill.textContent = formatBytes(file.size);
            if (filePagesPill) filePagesPill.textContent = `${totalPages} ${totalPages === 1 ? 'Page' : 'Pages'}`;

            document.body.classList.add("in-studio-mode");
            dropzone.style.display = "none";
            resultStudio.style.display = "none";
            progressStudio.style.display = "none";
            configStudio.style.display = "block";

            showToast(`Loaded ${file.name} (${totalPages} ${totalPages === 1 ? 'page' : 'pages'})`, "success");
        } catch (err) {
            console.error("PDF load error:", err);
            document.body.classList.remove("in-studio-mode");
            showToast("Failed to open PDF: " + err.message, "error");
        }
    }

    // Mode Switching
    modeCardVisual.addEventListener("click", () => setMode("visual"));
    modeCardEditable.addEventListener("click", () => setMode("editable"));

    function setMode(mode) {
        selectedMode = mode;
        if (mode === "visual") {
            modeCardVisual.classList.add("active");
            modeCardEditable.classList.remove("active");
            disclaimerEditable.style.display = "none";
            optionsVisual.style.display = "grid";
            optionsEditable.style.display = "none";
        } else {
            modeCardEditable.classList.add("active");
            modeCardVisual.classList.remove("active");
            disclaimerEditable.style.display = "flex";
            optionsVisual.style.display = "none";
            optionsEditable.style.display = "grid";
        }
    }

    // Reset workflow
    async function resetToDropzone() {
        if (ocrWorker) {
            try { await ocrWorker.terminate(); } catch (e) {}
            ocrWorker = null;
        }
        loadedFile = null;
        loadedBuffer = null;
        pdfDoc = null;
        totalPages = 0;
        generatedDocxBlob = null;
        generatedPageImages = [];
        extractedPageTexts = [];
        fileInput.value = "";
        document.body.classList.remove("in-studio-mode");
        configStudio.style.display = "none";
        progressStudio.style.display = "none";
        resultStudio.style.display = "none";
        dropzone.style.display = "block";
    }

    btnChangeFile.addEventListener("click", resetToDropzone);
    btnConvertAnother.addEventListener("click", resetToDropzone);

    btnReconfig.addEventListener("click", () => {
        resultStudio.style.display = "none";
        configStudio.style.display = "block";
    });

    // Parse Page Range
    function parsePageRange(rangeStr, maxPages) {
        const clean = (rangeStr || "all").trim().toLowerCase();
        if (clean === "all" || clean === "") {
            return Array.from({ length: maxPages }, (_, i) => i + 1);
        }
        const pages = new Set();
        const parts = clean.split(",");
        for (const part of parts) {
            const token = part.trim();
            if (!token) continue;
            if (token.includes("-")) {
                const [start, end] = token.split("-").map(n => parseInt(n.trim(), 10));
                if (!isNaN(start) && !isNaN(end)) {
                    const min = Math.max(1, Math.min(start, end));
                    const max = Math.min(maxPages, Math.max(start, end));
                    for (let p = min; p <= max; p++) pages.add(p);
                }
            } else {
                const p = parseInt(token, 10);
                if (!isNaN(p) && p >= 1 && p <= maxPages) {
                    pages.add(p);
                }
            }
        }
        return Array.from(pages).sort((a, b) => a - b);
    }

    // Conversion Trigger
    btnStartConvert.addEventListener("click", async () => {
        if (!pdfDoc) {
            showToast("No PDF document loaded.", "error");
            return;
        }

        if (typeof window.docx === "undefined") {
            showToast("Loading DOCX compiler, please try again in a moment...", "info");
            return;
        }

        const scopeStr = selectedMode === "visual" ? inpPageScope.value : inpPageScopeEditable.value;
        const targetPages = parsePageRange(scopeStr, totalPages);

        if (targetPages.length === 0) {
            showToast("Invalid page range. Please enter 'all' or e.g. '1-3'.", "error");
            return;
        }

        configStudio.style.display = "none";
        resultStudio.style.display = "none";
        progressStudio.style.display = "block";
        progressBarFill.style.width = "0%";
        progressPercent.textContent = "0%";

        try {
            if (selectedMode === "visual") {
                await executeVisualDocxConversion(targetPages);
            } else {
                await executeEditableDocxConversion(targetPages);
            }
        } catch (err) {
            console.error("Conversion failure:", err);
            progressStudio.style.display = "none";
            configStudio.style.display = "block";
            showToast("Conversion failed: " + err.message, "error");
        }
    });

    // Mode 1: Visual Exact DOCX
    async function executeVisualDocxConversion(targetPages) {
        progressTitleText.textContent = "Rendering pages to Visual DOCX...";
        const scale = parseFloat(selectVisualDpi.value) || 2.083;
        const format = selectVisualFormat.value || "image/jpeg";
        const baseName = loadedFile.name.replace(/\.pdf$/i, "");

        const { Document, Packer, Paragraph, ImageRun, AlignmentType } = window.docx;

        const sections = [];
        generatedPageImages = [];
        extractedPageTexts = [];

        const offscreenCanvas = document.createElement("canvas");
        const offCtx = offscreenCanvas.getContext("2d");

        for (let i = 0; i < targetPages.length; i++) {
            const pageNum = targetPages[i];
            const pct = Math.round(((i + 1) / (targetPages.length + 1)) * 100);
            progressBarFill.style.width = `${pct}%`;
            progressPercent.textContent = `${pct}%`;
            progressStatusText.textContent = `Rendering page ${pageNum} (${i + 1}/${targetPages.length})...`;

            const page = await pdfDoc.getPage(pageNum);
            const viewport = page.getViewport({ scale: scale });

            offscreenCanvas.width = viewport.width;
            offscreenCanvas.height = viewport.height;

            offCtx.fillStyle = "#ffffff";
            offCtx.fillRect(0, 0, viewport.width, viewport.height);

            await page.render({
                canvasContext: offCtx,
                viewport: viewport
            }).promise;

            const dataUrl = offscreenCanvas.toDataURL(format, 0.92);
            generatedPageImages.push({
                pageNum: pageNum,
                dataUrl: dataUrl
            });

            const byteString = atob(dataUrl.split(",")[1]);
            const ab = new ArrayBuffer(byteString.length);
            const ia = new Uint8Array(ab);
            for (let b = 0; b < byteString.length; b++) {
                ia[b] = byteString.charCodeAt(b);
            }

            const origWidthPt = viewport.width / scale;
            const origHeightPt = viewport.height / scale;

            const widthTwips = Math.round(origWidthPt * 20);
            const heightTwips = Math.round(origHeightPt * 20);

            const imageWidthPx = Math.round(origWidthPt * (96 / 72));
            const imageHeightPx = Math.round(origHeightPt * (96 / 72));

            sections.push({
                properties: {
                    page: {
                        size: {
                            width: widthTwips,
                            height: heightTwips
                        },
                        margin: {
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0
                        }
                    }
                },
                children: [
                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        spacing: { before: 0, after: 0, line: 240 },
                        children: [
                            new ImageRun({
                                data: ia,
                                transformation: {
                                    width: imageWidthPx,
                                    height: imageHeightPx
                                }
                            })
                        ]
                    })
                ]
            });
        }

        progressStatusText.textContent = "Compiling Microsoft Word (.docx) document...";
        progressBarFill.style.width = "95%";
        progressPercent.textContent = "95%";

        const doc = new Document({
            sections: sections
        });

        generatedDocxBlob = await Packer.toBlob(doc);
        generatedDocxFilename = `${baseName}-visual.docx`;

        progressBarFill.style.width = "100%";
        progressPercent.textContent = "100%";

        displayResults({
            mode: "Visual Exact (Image DOCX)",
            pagesCount: targetPages.length,
            blobSize: generatedDocxBlob.size
        });
    }

    // Mode 2: Editable Flow DOCX
    async function executeEditableDocxConversion(targetPages) {
        progressTitleText.textContent = "Reconstructing text to DOCX...";
        const baseName = loadedFile.name.replace(/\.pdf$/i, "");
        const chosenFont = selectEditFont.value || "Calibri";
        const isSmartParagraph = chkSmartParagraphs.checked;
        const isDetectHeadings = chkDetectHeadings.checked;

        const { Document, Packer, Paragraph, TextRun, ImageRun, HeadingLevel, AlignmentType, PageBreak } = window.docx;

        const documentChildren = [];
        generatedPageImages = [];
        extractedPageTexts = [];

        const offscreenCanvas = document.createElement("canvas");
        const offCtx = offscreenCanvas.getContext("2d");

        for (let i = 0; i < targetPages.length; i++) {
            const pageNum = targetPages[i];
            const pct = Math.round(((i + 1) / (targetPages.length + 1)) * 100);
            progressBarFill.style.width = `${pct}%`;
            progressPercent.textContent = `${pct}%`;
            progressStatusText.textContent = `Analyzing page ${pageNum} structure (${i + 1}/${targetPages.length})...`;

            const page = await pdfDoc.getPage(pageNum);
            const viewport = page.getViewport({ scale: 1.0 });
            const pageWidth = viewport.width;
            const pageHeight = viewport.height;

            // Thumbnail for preview
            const thumbViewport = page.getViewport({ scale: 1.2 });
            offscreenCanvas.width = thumbViewport.width;
            offscreenCanvas.height = thumbViewport.height;
            offCtx.fillStyle = "#ffffff";
            offCtx.fillRect(0, 0, thumbViewport.width, thumbViewport.height);
            await page.render({ canvasContext: offCtx, viewport: thumbViewport }).promise;
            generatedPageImages.push({
                pageNum: pageNum,
                dataUrl: offscreenCanvas.toDataURL("image/jpeg", 0.85)
            });

            // Extract text items
            const textContent = await page.getTextContent({ normalizeWhitespace: true });
            const items = textContent.items
                .filter(it => it.str && it.str.trim().length > 0)
                .map(it => {
                    const x = it.transform[4];
                    const y = it.transform[5];
                    const top = pageHeight - y;
                    const fontHeight = Math.abs(it.transform[0]) || Math.abs(it.transform[3]) || it.height || 12;
                    return {
                        str: it.str,
                        x: x,
                        y: y,
                        top: top,
                        width: it.width,
                        height: fontHeight,
                        fontName: (it.fontName || "").toLowerCase()
                    };
                });

            if (items.length === 0) {
                let ocrSucceeded = false;

                // 1. Automatic OCR Recognition for Scanned/Image Pages
                if (chkEnableOcr && chkEnableOcr.checked && window.Tesseract) {
                    try {
                        const targetSetting = selectOcrLang ? selectOcrLang.value : "auto";
                        const activeLang = await resolveOcrLanguage(targetSetting, pdfDoc);
                        progressStatusText.textContent = `Page ${pageNum}: Extracting text via AI OCR (${activeLang})...`;
                        const ocrScale = 2.0;
                        const ocrViewport = page.getViewport({ scale: ocrScale });
                        offscreenCanvas.width = ocrViewport.width;
                        offscreenCanvas.height = ocrViewport.height;
                        offCtx.fillStyle = "#ffffff";
                        offCtx.fillRect(0, 0, ocrViewport.width, ocrViewport.height);
                        await page.render({ canvasContext: offCtx, viewport: ocrViewport }).promise;

                        const worker = await getOcrWorkerInstance(activeLang);
                        if (worker) {
                            const ocrResult = await worker.recognize(offscreenCanvas);
                            const text = (ocrResult && ocrResult.data && ocrResult.data.text) ? ocrResult.data.text.trim() : "";
                            if (text.length > 0) {
                                ocrSucceeded = true;
                                const ocrParagraphs = text.split(/\n\s*\n/).map(p => p.trim()).filter(p => p.length > 0);
                                ocrParagraphs.forEach(paraText => {
                                    documentChildren.push(new Paragraph({
                                        spacing: { before: 100, after: 120, line: 276 },
                                        children: [
                                            new TextRun({
                                                text: paraText,
                                                font: chosenFont,
                                                size: 24
                                            })
                                        ]
                                    }));
                                });
                                extractedPageTexts.push({
                                    pageNum: pageNum,
                                    fullText: text,
                                    paragraphs: ocrParagraphs
                                });
                            }
                        }
                    } catch (ocrErr) {
                        console.warn("OCR recognition error on page", pageNum, ocrErr);
                    }
                }

                // 2. High-Resolution Visual Image Fallback (Never leaves empty placeholder)
                if (!ocrSucceeded) {
                    if (chkFallbackImage && chkFallbackImage.checked) {
                        try {
                            const renderScale = 1.8;
                            const renderViewport = page.getViewport({ scale: renderScale });
                            offscreenCanvas.width = renderViewport.width;
                            offscreenCanvas.height = renderViewport.height;
                            offCtx.fillStyle = "#ffffff";
                            offCtx.fillRect(0, 0, renderViewport.width, renderViewport.height);
                            await page.render({ canvasContext: offCtx, viewport: renderViewport }).promise;

                            const dataUrl = offscreenCanvas.toDataURL("image/jpeg", 0.90);
                            const byteString = atob(dataUrl.split(",")[1]);
                            const ia = new Uint8Array(byteString.length);
                            for (let b = 0; b < byteString.length; b++) ia[b] = byteString.charCodeAt(b);

                            // Fit within standard Word page margins (~520px width)
                            const displayW = Math.round(Math.min(520, pageWidth));
                            const displayH = Math.round(pageHeight * (displayW / pageWidth));

                            documentChildren.push(new Paragraph({
                                alignment: AlignmentType.CENTER,
                                spacing: { before: 120, after: 120 },
                                children: [
                                    new ImageRun({
                                        data: ia,
                                        transformation: {
                                            width: displayW,
                                            height: displayH
                                        }
                                    })
                                ]
                            }));

                            extractedPageTexts.push({
                                pageNum: pageNum,
                                fullText: `[Page ${pageNum}: Original page image (Embedded into Word document)]`,
                                paragraphs: [`[Page ${pageNum}: Original page image (Embedded into Word document)]`]
                            });
                        } catch (imgErr) {
                            console.error("Fallback image embedding failed:", imgErr);
                        }
                    } else {
                        extractedPageTexts.push({
                            pageNum: pageNum,
                            fullText: `[Page ${pageNum}]`,
                            paragraphs: [`[Page ${pageNum}]`]
                        });
                    }
                }

                if (i < targetPages.length - 1) {
                    documentChildren.push(new Paragraph({
                        children: [new PageBreak()]
                    }));
                }
                continue;
            }

            const fontSizes = items.map(it => it.height).sort((a, b) => a - b);
            const medianFontSize = fontSizes[Math.floor(fontSizes.length / 2)] || 12;

            items.sort((a, b) => {
                if (Math.abs(a.top - b.top) <= 3.5) {
                    return a.x - b.x;
                }
                return a.top - b.top;
            });

            const rawLines = [];
            let currentLine = null;

            for (const item of items) {
                if (!currentLine) {
                    currentLine = {
                        top: item.top,
                        items: [item],
                        minX: item.x,
                        maxX: item.x + item.width,
                        maxHeight: item.height
                    };
                    rawLines.push(currentLine);
                } else {
                    if (Math.abs(item.top - currentLine.top) <= Math.max(3.5, currentLine.maxHeight * 0.4)) {
                        currentLine.items.push(item);
                        currentLine.minX = Math.min(currentLine.minX, item.x);
                        currentLine.maxX = Math.max(currentLine.maxX, item.x + item.width);
                        currentLine.maxHeight = Math.max(currentLine.maxHeight, item.height);
                    } else {
                        currentLine = {
                            top: item.top,
                            items: [item],
                            minX: item.x,
                            maxX: item.x + item.width,
                            maxHeight: item.height
                        };
                        rawLines.push(currentLine);
                    }
                }
            }

            const assembledLines = rawLines.map(line => {
                line.items.sort((a, b) => a.x - b.x);
                let lineStr = "";
                let prevItem = null;
                let isBold = false;

                for (const it of line.items) {
                    if (prevItem) {
                        const gap = it.x - (prevItem.x + prevItem.width);
                        if (gap > 2 && !lineStr.endsWith(" ") && !it.str.startsWith(" ")) {
                            lineStr += " ";
                        }
                    }
                    lineStr += it.str;
                    if (it.fontName.includes("bold") || it.fontName.includes("black") || it.fontName.includes("heavy") || it.height >= medianFontSize * 1.3) {
                        isBold = true;
                    }
                    prevItem = it;
                }

                const trimmed = lineStr.trim();
                const isHeading = isDetectHeadings && (line.maxHeight >= medianFontSize * 1.35) && (trimmed.length < 120);

                let alignment = AlignmentType.LEFT;
                const centerDiff = Math.abs((pageWidth - line.maxX) - line.minX);
                if (centerDiff < 45 && line.minX > 40) {
                    alignment = AlignmentType.CENTER;
                } else if ((pageWidth - line.maxX) < 50 && line.minX > 140) {
                    alignment = AlignmentType.RIGHT;
                }

                return {
                    text: trimmed,
                    top: line.top,
                    height: line.maxHeight,
                    isBold: isBold,
                    isHeading: isHeading,
                    alignment: alignment,
                    fontSizePt: Math.round(line.maxHeight)
                };
            }).filter(l => l.text.length > 0);

            const pageParas = [];
            let activePara = null;

            for (let lIdx = 0; lIdx < assembledLines.length; lIdx++) {
                const line = assembledLines[lIdx];
                const prevLine = lIdx > 0 ? assembledLines[lIdx - 1] : null;

                let startNew = false;
                if (!prevLine || !isSmartParagraph) {
                    startNew = true;
                } else if (line.isHeading || prevLine.isHeading) {
                    startNew = true;
                } else if (line.alignment !== prevLine.alignment) {
                    startNew = true;
                } else {
                    const verticalGap = line.top - prevLine.top;
                    const expectedGap = prevLine.height * 1.6;
                    if (verticalGap > expectedGap + 5) {
                        startNew = true;
                    }
                }

                if (startNew || !activePara) {
                    activePara = {
                        lines: [line],
                        isHeading: line.isHeading,
                        alignment: line.alignment,
                        fontSizePt: line.fontSizePt,
                        isBold: line.isBold
                    };
                    pageParas.push(activePara);
                } else {
                    activePara.lines.push(line);
                }
            }

            const pageStrings = [];
            pageParas.forEach(p => {
                const joinedText = p.lines.map(l => l.text).join(" ");
                pageStrings.push(joinedText);

                let heading = undefined;
                let fontPt = Math.max(10, Math.min(28, p.fontSizePt));
                if (p.isHeading) {
                    if (p.fontSizePt >= medianFontSize * 1.6) {
                        heading = HeadingLevel.HEADING_1;
                        fontPt = Math.max(fontPt, 16);
                    } else {
                        heading = HeadingLevel.HEADING_2;
                        fontPt = Math.max(fontPt, 14);
                    }
                }

                documentChildren.push(new Paragraph({
                    heading: heading,
                    alignment: p.alignment,
                    spacing: {
                        before: p.isHeading ? 240 : 100,
                        after: p.isHeading ? 140 : 120,
                        line: 276
                    },
                    children: [
                        new TextRun({
                            text: joinedText,
                            font: chosenFont,
                            size: Math.round(fontPt * 2),
                            bold: p.isBold || p.isHeading
                        })
                    ]
                }));
            });

            extractedPageTexts.push({
                pageNum: pageNum,
                fullText: pageStrings.join("\n\n"),
                paragraphs: pageStrings
            });

            if (i < targetPages.length - 1) {
                documentChildren.push(new Paragraph({
                    children: [new PageBreak()]
                }));
            }
        }

        if (ocrWorker) {
            try { await ocrWorker.terminate(); } catch (e) {}
            ocrWorker = null;
        }

        progressStatusText.textContent = "Compiling Microsoft Word (.docx) document...";
        progressBarFill.style.width = "95%";
        progressPercent.textContent = "95%";

        const doc = new Document({
            sections: [
                {
                    properties: {
                        page: {
                            margin: {
                                top: 1440,
                                bottom: 1440,
                                left: 1440,
                                right: 1440
                            }
                        }
                    },
                    children: documentChildren
                }
            ]
        });

        generatedDocxBlob = await Packer.toBlob(doc);
        generatedDocxFilename = `${baseName}-editable.docx`;

        progressBarFill.style.width = "100%";
        progressPercent.textContent = "100%";

        displayResults({
            mode: "Editable Flow (Text Reconstruction)",
            pagesCount: targetPages.length,
            blobSize: generatedDocxBlob.size
        });
    }

    // Display Results
    function displayResults(stats) {
        progressStudio.style.display = "none";
        resultStudio.style.display = "block";

        resModeVal.textContent = stats.mode;
        resPagesVal.textContent = `${stats.pagesCount} ${stats.pagesCount === 1 ? 'Page' : 'Pages'}`;
        resSizeVal.textContent = formatBytes(stats.blobSize);

        // Populate Visual Preview
        previewTabVisualContent.innerHTML = "";
        generatedPageImages.forEach(img => {
            const card = document.createElement("div");
            card.className = "visual-preview-card";
            card.innerHTML = `
                <img src="${img.dataUrl}" class="visual-preview-img" alt="Page ${img.pageNum}" loading="lazy">
                <div class="visual-preview-footer">Page ${img.pageNum}</div>
            `;
            previewTabVisualContent.appendChild(card);
        });

        // Populate Text Stream Preview
        editableTextStreamBox.innerHTML = "";
        if (extractedPageTexts.length > 0) {
            extractedPageTexts.forEach((pText, idx) => {
                const pageHeader = document.createElement("div");
                pageHeader.style.cssText = "font-size: 0.8rem; font-weight: 700; color: #6b7280; text-transform: uppercase; margin-bottom: 0.5rem;";
                pageHeader.textContent = `— Page ${pText.pageNum} —`;
                editableTextStreamBox.appendChild(pageHeader);

                pText.paragraphs.forEach(para => {
                    const pEl = document.createElement("p");
                    pEl.className = "stream-paragraph";
                    pEl.textContent = para;
                    editableTextStreamBox.appendChild(pEl);
                });

                if (idx < extractedPageTexts.length - 1) {
                    const hr = document.createElement("div");
                    hr.className = "stream-page-break";
                    editableTextStreamBox.appendChild(hr);
                }
            });
        } else {
            editableTextStreamBox.innerHTML = `<p style="color: #6b7280; font-style: italic;">Visual Exact mode exports the document as original high-resolution imagery. Switch to the "Visual Pages Preview" tab to view the embedded pages.</p>`;
        }

        tabBtnVisual.click();
        showToast("Created Word (.docx) file successfully!", "success");
    }

    // Download DOCX
    btnDownloadDocx.addEventListener("click", () => {
        if (!generatedDocxBlob) return;
        downloadBlob(generatedDocxBlob, generatedDocxFilename);
        showToast(`Downloaded: ${generatedDocxFilename}`, "success");
    });

    // Preview Tabs
    tabBtnVisual.addEventListener("click", () => {
        tabBtnVisual.classList.add("active");
        tabBtnText.classList.remove("active");
        previewTabVisualContent.style.display = "grid";
        previewTabTextContent.style.display = "none";
    });

    tabBtnText.addEventListener("click", () => {
        tabBtnText.classList.add("active");
        tabBtnVisual.classList.remove("active");
        previewTabVisualContent.style.display = "none";
        previewTabTextContent.style.display = "block";
    });

    // Copy Extracted Text
    btnCopyExtractedText.addEventListener("click", async () => {
        if (extractedPageTexts.length === 0) {
            showToast("No text content to copy.", "info");
            return;
        }
        const fullCombined = extractedPageTexts.map(p => `--- Page ${p.pageNum} ---\n` + p.fullText).join("\n\n");
        try {
            await navigator.clipboard.writeText(fullCombined);
            showToast("Copied all extracted text to clipboard!", "success");
        } catch (err) {
            showToast("Failed to copy automatically: " + err.message, "error");
        }
    });
});
