/**
 * Spac2 PDF Hub — OCR PDF Application Script
 */

const PDF_TOOLS = [
    {
        id: "merge",
        title: "Merge PDF",
        subtitle: "Combine multiple PDF files",
        url: "/apps/pdf-hub/merge",
        icon: "files",
        badge: "Popular"
    },
    {
        id: "split",
        title: "Split PDF",
        subtitle: "Extract or divide pages",
        url: "/apps/pdf-hub/split",
        icon: "scissors",
        badge: "Utility"
    },
    {
        id: "organize",
        title: "Organize PDF",
        subtitle: "Reorder, rotate & delete",
        url: "/apps/pdf-hub/organize",
        icon: "grid",
        badge: "Visual"
    },
    {
        id: "compress",
        title: "Compress PDF",
        subtitle: "Reduce file size",
        url: "/apps/pdf-hub/compress",
        icon: "minimize-2",
        badge: "Optimization"
    },
    {
        id: "pdf-to-image",
        title: "PDF to Image",
        subtitle: "Export high-res photos",
        url: "/apps/pdf-hub/pdf-to-image",
        icon: "file-image",
        badge: "High-DPI"
    },
    {
        id: "images-to-pdf",
        title: "Images to PDF",
        subtitle: "Convert JPG, PNG to PDF",
        url: "/apps/pdf-hub/images-to-pdf",
        icon: "image",
        badge: "Popular"
    },
    {
        id: "pdf-to-doc",
        title: "PDF to Word (DOCX)",
        subtitle: "Convert to DOCX document",
        url: "/apps/pdf-hub/pdf-to-doc",
        icon: "file-text",
        badge: "Word DOCX"
    },
    {
        id: "annotate",
        title: "Annotate PDF",
        subtitle: "Draw, highlight & notes",
        url: "/apps/pdf-hub/annotate",
        icon: "edit-3",
        badge: "Editor"
    },
    {
        id: "sign",
        title: "Sign PDF",
        subtitle: "Electronic signatures",
        url: "/apps/pdf-hub/sign",
        icon: "pen-tool",
        badge: "Fast Sign"
    },
    {
        id: "watermark",
        title: "Watermark PDF",
        subtitle: "Stamp copyright & logo",
        url: "/apps/pdf-hub/watermark",
        icon: "stamp",
        badge: "Copyright"
    },
    {
        id: "crop-resize",
        title: "Crop & Resize PDF",
        subtitle: "Trim margins & formats",
        url: "/apps/pdf-hub/crop-resize",
        icon: "crop",
        badge: "Paper Size"
    },
    {
        id: "ocr",
        title: "OCR PDF",
        subtitle: "AI optical recognition",
        url: "/apps/pdf-hub/ocr",
        icon: "scan",
        badge: "AI Vision"
    },
    {
        id: "metadata",
        title: "PDF Metadata",
        subtitle: "Edit & strip metadata",
        url: "/apps/pdf-hub/metadata",
        icon: "info",
        badge: "Privacy"
    }
];

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
    const icon = btn.querySelector("i, svg");
    if (icon) {
        icon.setAttribute("data-lucide", theme === "dark" ? "sun" : "moon");
        if (window.lucide) window.lucide.createIcons({ root: btn });
    }
}

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

    const iconEl = document.createElement("i");
    iconEl.setAttribute("data-lucide", iconName);

    const textEl = document.createElement("span");
    textEl.textContent = message;

    toast.appendChild(iconEl);
    toast.appendChild(textEl);
    container.appendChild(toast);

    if (window.lucide) window.lucide.createIcons({ root: toast });

    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(8px) scale(0.96)";
        toast.style.transition = "all 0.22s ease";
        setTimeout(() => toast.remove(), 220);
    }, 3400);
}

function formatBytes(bytes, decimals = 2) {
    if (!bytes || bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
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
    }, 100);
}

function setupDropzone(zoneElement, inputElement, onFilesSelected) {
    if (!zoneElement || !inputElement) return;

    zoneElement.addEventListener("click", (e) => {
        if (e.target === inputElement) return;
        inputElement.click();
    });

    zoneElement.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            inputElement.click();
        }
    });

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

function initToolSwitcher() {
    const switcher = document.querySelector(".tool-switcher");
    if (!switcher) return;

    const btn = switcher.querySelector(".tool-switcher-btn");
    const menu = switcher.querySelector(".tool-dropdown-menu");
    if (!btn || !menu) return;

    if (menu.children.length === 0) {
        PDF_TOOLS.forEach((tool) => {
            const item = document.createElement("a");
            item.href = tool.url;
            item.className = "tool-dropdown-item";
            item.setAttribute("role", "menuitem");
            item.innerHTML = `
                <i data-lucide="${tool.icon}" class="tool-dropdown-item-icon"></i>
                <div class="tool-dropdown-item-body">
                    <span class="tool-dropdown-item-title">${tool.title}</span>
                    <span class="tool-dropdown-item-sub">${tool.subtitle}</span>
                </div>
                <span class="tool-dropdown-item-badge">${tool.badge}</span>
            `;
            menu.appendChild(item);
        });
    }

    const setMenuOpen = (isOpen) => {
        menu.classList.toggle("active", isOpen);
        btn.setAttribute("aria-expanded", String(isOpen));
    };

    btn.addEventListener("click", (e) => {
        e.stopPropagation();
        setMenuOpen(!menu.classList.contains("active"));
    });

    document.addEventListener("click", (e) => {
        if (!switcher.contains(e.target)) {
            setMenuOpen(false);
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            setMenuOpen(false);
        }
    });
}

// Configure PDF.js worker
if (window.pdfjsLib) {
    pdfjsLib.GlobalWorkerOptions.workerSrc =
        "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
}

document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initToolSwitcher();

    const themeBtn = document.getElementById("theme-toggle-btn");
    if (themeBtn) {
        themeBtn.addEventListener("click", toggleTheme);
    }

    if (window.lucide) {
        window.lucide.createIcons();
    }

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

    const progressBarWrap = progressCard?.querySelector(".progress-bar-wrap");
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
            const buffer = await file.arrayBuffer();

            const loadingTask = pdfjsLib.getDocument({ data: buffer.slice(0) });
            pdfDoc = await loadingTask.promise;
            totalPages = pdfDoc.numPages;

            docNameLabel.textContent = file.name;
            docMetaLabel.textContent = `${formatBytes(file.size)} • ${totalPages} ${totalPages === 1 ? "Page" : "Pages"}`;

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

    function resetOcr() {
        loadedFile = null;
        pdfDoc = null;
        totalPages = 0;
        fileInput.value = "";
        ocrTextArea.value = "";
        ocrStudio.style.display = "none";
        dropzone.style.display = "flex";
    }

    btnChangeFile.addEventListener("click", resetOcr);
    btnOcrAnother.addEventListener("click", resetOcr);

    function parseScope(scopeStr, maxPages) {
        const s = scopeStr.trim().toLowerCase();
        if (!s || s === "all") {
            return Array.from({ length: maxPages }, (_, i) => i + 1);
        }

        const pages = [];
        const parts = s.split(",");
        for (const rawPart of parts) {
            const part = rawPart.trim();
            if (!part) continue;
            if (part.includes("-")) {
                const [startS, endS] = part.split("-");
                let start = Math.max(1, parseInt(startS, 10) || 1);
                let end = Math.min(maxPages, parseInt(endS, 10) || maxPages);
                if (start > end) [start, end] = [end, start];
                for (let p = start; p <= end; p++) {
                    if (!pages.includes(p)) pages.push(p);
                }
            } else {
                const p = parseInt(part, 10);
                if (p >= 1 && p <= maxPages && !pages.includes(p)) {
                    pages.push(p);
                }
            }
        }
        return pages.length > 0 ? pages : Array.from({ length: maxPages }, (_, i) => i + 1);
    }

    function updateProgress(pct, statusText) {
        progressBarFill.style.width = `${pct}%`;
        progressPctLabel.textContent = `${pct}%`;
        if (progressBarWrap) {
            progressBarWrap.setAttribute("aria-valuenow", String(pct));
        }
        if (statusText) {
            progressStatusText.textContent = statusText;
        }
    }

    btnStartOcr.addEventListener("click", async () => {
        if (!pdfDoc) return;

        const targetPages = parseScope(inpPageScope.value, totalPages);
        const lang = selectOcrLang.value || "eng";

        configCard.style.display = "none";
        progressCard.style.display = "block";
        updateProgress(0, `Initializing Tesseract.js engine (${lang})...`);

        let recognizedFullText = "";
        let confidenceSum = 0;
        let recognizedCount = 0;

        try {
            const worker = await Tesseract.createWorker(lang);
            const offscreenCanvas = document.createElement("canvas");
            const offCtx = offscreenCanvas.getContext("2d");

            for (let idx = 0; idx < targetPages.length; idx++) {
                const pageNum = targetPages[idx];
                updateProgress(
                    Math.round((idx / targetPages.length) * 100),
                    `Rendering and recognizing Page ${pageNum} (${idx + 1} of ${targetPages.length})...`
                );

                const page = await pdfDoc.getPage(pageNum);
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
                updateProgress(overallPct);
            }

            await worker.terminate();

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

    btnCopyOcr.addEventListener("click", async () => {
        const text = ocrTextArea.value;
        if (!text) return;
        try {
            await navigator.clipboard.writeText(text);
        } catch {
            ocrTextArea.select();
            document.execCommand("copy");
        }
        copyBtnText.textContent = "Copied!";
        showToast("Copied OCR text to clipboard!", "success");
        setTimeout(() => {
            copyBtnText.textContent = "Copy All";
        }, 2000);
    });

    btnDownloadOcrTxt.addEventListener("click", () => {
        const text = ocrTextArea.value;
        if (!text) return;
        const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
        const baseName = loadedFile ? loadedFile.name.replace(/\.pdf$/i, "") : "ocr-text";
        downloadBlob(blob, `${baseName}-ocr.txt`);
        showToast("Downloaded OCR text file!", "success");
    });
});
