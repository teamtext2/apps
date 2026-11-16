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

// === App-Specific Script (metadata) ===
document.addEventListener("DOMContentLoaded", () => {
            const dropzone = document.getElementById("dropzone");
            const fileInput = document.getElementById("file-input");
            const metadataStudio = document.getElementById("metadata-studio");

            // Form inputs
            const metaTitle = document.getElementById("meta-title");
            const metaAuthor = document.getElementById("meta-author");
            const metaSubject = document.getElementById("meta-subject");
            const metaKeywords = document.getElementById("meta-keywords");
            const metaCreator = document.getElementById("meta-creator");
            const metaProducer = document.getElementById("meta-producer");

            // Specs
            const docName = document.getElementById("doc-name");
            const docMetaInfo = document.getElementById("doc-meta-info");
            const specPages = document.getElementById("spec-pages");
            const specSize = document.getElementById("spec-size");
            const specCreated = document.getElementById("spec-created");
            const specModified = document.getElementById("spec-modified");

            // Buttons
            const btnChangeFile = document.getElementById("btn-change-file");
            const btnWipeAll = document.getElementById("btn-wipe-all");
            const btnResetOriginal = document.getElementById("btn-reset-original");
            const btnSaveMetadata = document.getElementById("btn-save-metadata");

            // State
            let loadedFile = null;
            let loadedBuffer = null;
            let originalMetadata = {};

            setupDropzone(dropzone, fileInput, (files) => {
                if (!files || files.length === 0) return;
                const file = files[0];
                if (file.type !== "application/pdf" && !file.name.toLowerCase().endsWith(".pdf")) {
                    showToast("Please select a valid PDF file.", "error");
                    return;
                }
                loadPdfMetadata(file);
            });

            btnChangeFile.addEventListener("click", () => {
                metadataStudio.style.display = "none";
                dropzone.style.display = "block";
                fileInput.value = "";
                loadedFile = null;
                loadedBuffer = null;
            });

            async function loadPdfMetadata(file) {
                try {
                    showToast("Reading metadata...", "info");
                    loadedFile = file;
                    loadedBuffer = await file.arrayBuffer();

                    // Parse document with PDF-Lib
                    const pdfDoc = await PDFLib.PDFDocument.load(loadedBuffer.slice(0));

                    const title = pdfDoc.getTitle() || "";
                    const author = pdfDoc.getAuthor() || "";
                    const subject = pdfDoc.getSubject() || "";
                    const keywords = pdfDoc.getKeywords() || "";
                    const creator = pdfDoc.getCreator() || "";
                    const producer = pdfDoc.getProducer() || "";
                    const creationDate = pdfDoc.getCreationDate();
                    const modDate = pdfDoc.getModificationDate();
                    const pageCount = pdfDoc.getPageCount();

                    // Format dates
                    const formatDate = (d) => d ? new Date(d).toLocaleDateString() + " " + new Date(d).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : "Not specified";

                    originalMetadata = {
                        title,
                        author,
                        subject,
                        keywords,
                        creator,
                        producer,
                        creationDate,
                        modDate
                    };

                    // Populate Inputs
                    metaTitle.value = title;
                    metaAuthor.value = author;
                    metaSubject.value = subject;
                    metaKeywords.value = keywords;
                    metaCreator.value = creator;
                    metaProducer.value = producer;

                    // Populate Specs
                    docName.textContent = file.name;
                    docMetaInfo.textContent = `${formatBytes(file.size)} • ${pageCount} ${pageCount === 1 ? 'Page' : 'Pages'}`;
                    specPages.textContent = pageCount;
                    specSize.textContent = formatBytes(file.size);
                    specCreated.textContent = formatDate(creationDate);
                    specModified.textContent = formatDate(modDate);

                    dropzone.style.display = "none";
                    metadataStudio.style.display = "block";
                    showToast("Metadata loaded successfully!", "success");
                } catch (err) {
                    console.error("Failed to read metadata:", err);
                    showToast("Could not read document properties: " + err.message, "error");
                }
            }

            // Wipe All Metadata
            btnWipeAll.addEventListener("click", () => {
                metaTitle.value = "";
                metaAuthor.value = "";
                metaSubject.value = "";
                metaKeywords.value = "";
                metaCreator.value = "";
                metaProducer.value = "";
                showToast("All metadata fields cleared for privacy!", "info");
            });

            // Reset to Original Values
            btnResetOriginal.addEventListener("click", () => {
                metaTitle.value = originalMetadata.title || "";
                metaAuthor.value = originalMetadata.author || "";
                metaSubject.value = originalMetadata.subject || "";
                metaKeywords.value = originalMetadata.keywords || "";
                metaCreator.value = originalMetadata.creator || "";
                metaProducer.value = originalMetadata.producer || "";
                showToast("Restored original document metadata.", "info");
            });

            // Save & Download
            btnSaveMetadata.addEventListener("click", async () => {
                if (!loadedBuffer) return;

                try {
                    showToast("Applying metadata...", "info");
                    const pdfDoc = await PDFLib.PDFDocument.load(loadedBuffer.slice(0));

                    // Set values
                    pdfDoc.setTitle(metaTitle.value.trim());
                    pdfDoc.setAuthor(metaAuthor.value.trim());
                    pdfDoc.setSubject(metaSubject.value.trim());
                    pdfDoc.setCreator(metaCreator.value.trim());
                    pdfDoc.setProducer(metaProducer.value.trim());

                    // Parse keywords
                    const kwStr = metaKeywords.value.trim();
                    if (kwStr) {
                        const kwArr = kwStr.split(",").map(k => k.trim()).filter(Boolean);
                        pdfDoc.setKeywords(kwArr);
                    } else {
                        pdfDoc.setKeywords([]);
                    }

                    // Always update modification date
                    pdfDoc.setModificationDate(new Date());

                    // Save with object streams
                    const savedBytes = await pdfDoc.save({ useObjectStreams: true });
                    const outName = loadedFile.name.replace(/\.pdf$/i, "") + "-metadata.pdf";

                    downloadBlob(new Blob([savedBytes], { type: "application/pdf" }), outName);
                    showToast("Updated PDF downloaded successfully!", "success");
                } catch (err) {
                    console.error("Failed to update metadata:", err);
                    showToast("Failed to save metadata: " + err.message, "error");
                }
            });
        });
