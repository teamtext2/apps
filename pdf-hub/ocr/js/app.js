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

// === App-Specific Script (ocr) ===
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

        document.addEventListener("DOMContentLoaded", () => {
            const dropzone = document.getElementById("dropzone");
            const fileInput = document.getElementById("file-input");
            const ocrStudio = document.getElementById("ocr-studio");

            const configCard = document.getElementById("config-card");
            const progressCard = document.getElementById("progress-card");
            const resultsCard = document.getElementById("results-card");

            const docNameLabel = document.getElementById("doc-name-label");
            const docMetaLabel = document.getElementById("doc-meta-label");
            const selectOcrLang = document.getElementById("select-ocr-lang");
            const inpPageScope = document.getElementById("inp-page-scope");
            const btnStartOcr = document.getElementById("btn-start-ocr");
            const btnChangeFile = document.getElementById("btn-change-file");
            const btnOcrAnother = document.getElementById("btn-ocr-another");

            const progressBarFill = document.getElementById("progress-bar-fill");
            const progressPctLabel = document.getElementById("progress-pct-label");
            const progressStatusText = document.getElementById("progress-status-text");

            const ocrTextArea = document.getElementById("ocr-textarea");
            const confidenceBadge = document.getElementById("confidence-badge");
            const statsLabel = document.getElementById("stats-label");
            const btnCopyOcr = document.getElementById("btn-copy-ocr");
            const copyBtnText = document.getElementById("copy-btn-text");
            const btnDownloadOcrTxt = document.getElementById("btn-download-ocr-txt");

            let loadedFile = null;
            let loadedBuffer = null;
            let pdfDoc = null;
            let totalPages = 0;

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

                    docNameLabel.textContent = file.name;
                    docMetaLabel.textContent = `${formatBytes(file.size)} • ${totalPages} ${totalPages === 1 ? 'Page' : 'Pages'}`;

                    dropzone.style.display = "none";
                    resultsCard.style.display = "none";
                    progressCard.style.display = "none";
                    configCard.style.display = "flex";
                    ocrStudio.style.display = "flex";

                    showToast(`Loaded ${file.name} successfully`, "success");
                } catch (err) {
                    console.error("PDF load error:", err);
                    showToast("Failed to load PDF: " + err.message, "error");
                }
            }

            btnChangeFile.addEventListener("click", resetOcr);
            btnOcrAnother.addEventListener("click", resetOcr);

            function resetOcr() {
                loadedFile = null;
                loadedBuffer = null;
                pdfDoc = null;
                totalPages = 0;
                fileInput.value = "";
                ocrStudio.style.display = "none";
                dropzone.style.display = "block";
            }

            function parseScope(scopeStr, maxPages) {
                const s = scopeStr.trim().toLowerCase();
                if (!s || s === "all") return Array.from({ length: maxPages }, (_, i) => i + 1);

                const pages = [];
                const parts = s.split(",");
                for (let part of parts) {
                    part = part.trim();
                    if (!part) continue;
                    if (part.includes("-")) {
                        const [startS, endS] = part.split("-");
                        const start = Math.max(1, parseInt(startS, 10) || 1);
                        const end = Math.min(maxPages, parseInt(endS, 10) || maxPages);
                        for (let p = start; p <= end; p++) {
                            if (!pages.includes(p)) pages.push(p);
                        }
                    } else {
                        const p = parseInt(part, 10);
                        if (p >= 1 && p <= maxPages && !pages.includes(p)) pages.push(p);
                    }
                }
                return pages.length > 0 ? pages : Array.from({ length: maxPages }, (_, i) => i + 1);
            }

            // Start OCR Process
            btnStartOcr.addEventListener("click", async () => {
                if (!pdfDoc) return;

                const targetPages = parseScope(inpPageScope.value, totalPages);
                const lang = selectOcrLang.value || "eng";

                configCard.style.display = "none";
                progressCard.style.display = "block";
                progressBarFill.style.width = "0%";
                progressPctLabel.textContent = "0%";
                progressStatusText.textContent = `Initializing Tesseract.js engine (${lang})...`;

                let recognizedFullText = "";
                let confidenceSum = 0;
                let recognizedCount = 0;

                try {
                    const worker = await Tesseract.createWorker(lang);

                    const offscreenCanvas = document.createElement("canvas");
                    const offCtx = offscreenCanvas.getContext("2d");

                    for (let idx = 0; idx < targetPages.length; idx++) {
                        const pageNum = targetPages[idx];
                        progressStatusText.textContent = `Rendering and recognizing Page ${pageNum} (${idx + 1} of ${targetPages.length})...`;

                        const page = await pdfDoc.getPage(pageNum);
                        // Render at 2x resolution for optimal OCR accuracy
                        const viewport = page.getViewport({ scale: 2.0 });

                        offscreenCanvas.width = viewport.width;
                        offscreenCanvas.height = viewport.height;
                        offCtx.fillStyle = "#ffffff";
                        offCtx.fillRect(0, 0, viewport.width, viewport.height);

                        await page.render({
                            canvasContext: offCtx,
                            viewport: viewport
                        }).promise;

                        const ret = await worker.recognize(offscreenCanvas);
                        recognizedFullText += `--- Page ${pageNum} ---\n\n${ret.data.text.trim()}\n\n`;

                        if (ret.data.confidence) {
                            confidenceSum += ret.data.confidence;
                            recognizedCount++;
                        }

                        const overallPct = Math.round(((idx + 1) / targetPages.length) * 100);
                        progressBarFill.style.width = `${overallPct}%`;
                        progressPctLabel.textContent = `${overallPct}%`;
                    }

                    await worker.terminate();

                    // Display Results
                    progressCard.style.display = "none";
                    resultsCard.style.display = "flex";

                    ocrTextArea.value = recognizedFullText.trim();
                    const words = ocrTextArea.value.trim() ? ocrTextArea.value.trim().split(/\s+/).length : 0;
                    statsLabel.textContent = `${words.toLocaleString()} words`;

                    const avgConfidence = recognizedCount > 0 ? Math.round(confidenceSum / recognizedCount) : 95;
                    confidenceBadge.textContent = `${avgConfidence}% Confidence`;

                    showToast("OCR recognition completed successfully!", "success");
                } catch (err) {
                    console.error("OCR error:", err);
                    progressCard.style.display = "none";
                    configCard.style.display = "flex";
                    showToast("OCR processing failed: " + err.message, "error");
                }
            });

            // Copy
            btnCopyOcr.addEventListener("click", async () => {
                const text = ocrTextArea.value;
                if (!text) return;
                try {
                    await navigator.clipboard.writeText(text);
                    copyBtnText.textContent = "Copied!";
                    showToast("Copied OCR text to clipboard!", "success");
                    setTimeout(() => copyBtnText.textContent = "Copy All", 2000);
                } catch (e) {
                    ocrTextArea.select();
                    document.execCommand("copy");
                    showToast("Copied OCR text to clipboard!", "success");
                }
            });

            // Download .TXT
            btnDownloadOcrTxt.addEventListener("click", () => {
                const text = ocrTextArea.value;
                if (!text) return;
                const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
                const baseName = loadedFile ? loadedFile.name.replace(/\.pdf$/i, "") : "ocr-text";
                downloadBlob(blob, `${baseName}-ocr.txt`);
                showToast("Downloaded OCR text file!", "success");
            });
        });
