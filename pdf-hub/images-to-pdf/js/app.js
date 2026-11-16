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

// === App-Specific Script (images-to-pdf) ===
document.addEventListener("DOMContentLoaded", () => {
            // State
            let imageItems = []; // Array of { id, file, name, size, type, dataUrl, width, height, rotation }
            let generatedPdfBlob = null;
            let generatedPdfUrl = null;

            // DOM Elements
            const dropzone = document.getElementById("dropzone");
            const fileInput = document.getElementById("file-input");
            const configStudio = document.getElementById("config-studio");
            const progressStudio = document.getElementById("progress-studio");
            const resultStudio = document.getElementById("result-studio");
            const imagesGrid = document.getElementById("images-grid");
            const statImageCount = document.getElementById("stat-image-count");
            const statTotalSize = document.getElementById("stat-total-size");

            // Buttons
            const btnAddMore = document.getElementById("btn-add-more");
            const btnSortName = document.getElementById("btn-sort-name");
            const btnRotateAll = document.getElementById("btn-rotate-all");
            const btnClearAll = document.getElementById("btn-clear-all");
            const btnConvertPdf = document.getElementById("btn-convert-pdf");
            const btnConvertPdfMobile = document.getElementById("btn-convert-pdf-mobile");
            const btnDownloadPdf = document.getElementById("btn-download-pdf");
            const btnPreviewPdf = document.getElementById("btn-preview-pdf");
            const btnStartOver = document.getElementById("btn-start-over");
            const mobileDock = document.getElementById("mobile-dock");

            // Settings Elements
            const segOrientation = document.getElementById("seg-orientation");
            const selectPageSize = document.getElementById("select-page-size");
            const segMargin = document.getElementById("seg-margin");
            const selectImageFit = document.getElementById("select-image-fit");
            const selectQuality = document.getElementById("select-quality");
            const inpFilename = document.getElementById("inp-filename");

            // Modal
            const previewModal = document.getElementById("preview-modal");
            const modalImage = document.getElementById("modal-image");
            const btnCloseModal = document.getElementById("btn-close-modal");

            // Setting Values
            let settingOrientation = "auto";
            let settingMargin = 0;

            // Initialize Lucide Icons if available
            if (typeof lucide !== "undefined") {
                lucide.createIcons();
            }

            // Segmented Controls Handlers
            segOrientation.querySelectorAll(".segmented-btn").forEach(btn => {
                btn.addEventListener("click", () => {
                    segOrientation.querySelectorAll(".segmented-btn").forEach(b => b.classList.remove("active"));
                    btn.classList.add("active");
                    settingOrientation = btn.getAttribute("data-val");
                    updateMobileSettingsSummary();
                });
            });

            segMargin.querySelectorAll(".segmented-btn").forEach(btn => {
                btn.addEventListener("click", () => {
                    segMargin.querySelectorAll(".segmented-btn").forEach(b => b.classList.remove("active"));
                    btn.classList.add("active");
                    settingMargin = parseInt(btn.getAttribute("data-val"), 10);
                    updateMobileSettingsSummary();
                });
            });

            selectPageSize.addEventListener("change", () => {
                updateMobileSettingsSummary();
            });

            // Mobile Quick Settings Banner Jump
            const btnJumpSettings = document.getElementById("btn-jump-settings");
            if (btnJumpSettings) {
                btnJumpSettings.addEventListener("click", () => {
                    const sidebar = document.querySelector(".settings-sidebar");
                    if (sidebar) {
                        sidebar.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                });
            }

            // Update Mobile Summary Info
            function updateMobileSettingsSummary() {
                const bannerText = document.getElementById("mobile-settings-text");
                if (bannerText) {
                    const sizeName = selectPageSize.options[selectPageSize.selectedIndex]?.text.split("(")[0].trim() || "Fit";
                    const orientName = settingOrientation.charAt(0).toUpperCase() + settingOrientation.slice(1);
                    const marginName = settingMargin === 0 ? "0 Margin" : `${settingMargin === 18 ? '5mm' : '12mm'} Margin`;
                    bannerText.textContent = `${sizeName} • ${orientName} • ${marginName}`;
                }

                const dockLabel = document.getElementById("mobile-dock-btn-label");
                if (dockLabel) {
                    dockLabel.textContent = `Convert ${imageItems.length} ${imageItems.length === 1 ? 'Image' : 'Images'} to PDF`;
                }
            }

            // File selection & Dropzone
            dropzone.addEventListener("click", () => fileInput.click());
            btnAddMore.addEventListener("click", () => fileInput.click());

            dropzone.addEventListener("dragover", (e) => {
                e.preventDefault();
                dropzone.classList.add("dragover");
            });

            dropzone.addEventListener("dragleave", () => {
                dropzone.classList.remove("dragover");
            });

            dropzone.addEventListener("drop", (e) => {
                e.preventDefault();
                dropzone.classList.remove("dragover");
                if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
                    handleFiles(Array.from(e.dataTransfer.files));
                }
            });

            fileInput.addEventListener("change", () => {
                if (fileInput.files && fileInput.files.length > 0) {
                    handleFiles(Array.from(fileInput.files));
                    fileInput.value = "";
                }
            });

            // Clipboard Paste support (Ctrl + V)
            window.addEventListener("paste", (e) => {
                const items = e.clipboardData?.items;
                if (!items) return;

                const pastedFiles = [];
                for (let i = 0; i < items.length; i++) {
                    if (items[i].type.indexOf("image") !== -1) {
                        const file = items[i].getAsFile();
                        if (file) {
                            const ext = file.type.split("/")[1] || "png";
                            const namedFile = new File([file], `pasted-image-${Date.now()}-${i + 1}.${ext}`, { type: file.type });
                            pastedFiles.push(namedFile);
                        }
                    }
                }

                if (pastedFiles.length > 0) {
                    handleFiles(pastedFiles);
                    showToast(`Pasted ${pastedFiles.length} image${pastedFiles.length > 1 ? 's' : ''} from clipboard!`, "success");
                }
            });

            // Process uploaded files
            async function handleFiles(files) {
                const validImages = files.filter(f => f.type.startsWith("image/") || /\.(jpg|jpeg|png|webp|gif|bmp|svg|avif)$/i.test(f.name));

                if (validImages.length === 0) {
                    showToast("Please select valid image files (JPG, PNG, WebP, GIF, SVG).", "error");
                    return;
                }

                showToast(`Loading ${validImages.length} image${validImages.length > 1 ? 's' : ''}...`, "info");

                for (const file of validImages) {
                    try {
                        const item = await readFileAsImage(file);
                        imageItems.push(item);
                    } catch (err) {
                        console.error("Failed to read image:", file.name, err);
                    }
                }

                updateStudioView();
            }

            // Read file into image metadata & dataURL
            function readFileAsImage(file) {
                return new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        const dataUrl = e.target.result;
                        const img = new Image();
                        img.onload = () => {
                            resolve({
                                id: 'img_' + Math.random().toString(36).substr(2, 9),
                                file: file,
                                name: file.name,
                                size: file.size,
                                type: file.type,
                                dataUrl: dataUrl,
                                width: img.naturalWidth || 800,
                                height: img.naturalHeight || 600,
                                rotation: 0
                            });
                        };
                        img.onerror = () => reject(new Error("Image decode failed"));
                        img.src = dataUrl;
                    };
                    reader.onerror = reject;
                    reader.readAsDataURL(file);
                });
            }

            // Update Studio View
            function updateStudioView() {
                if (imageItems.length === 0) {
                    document.body.classList.remove("in-studio-mode");
                    dropzone.style.display = "block";
                    configStudio.style.display = "none";
                    mobileDock.style.display = "none";
                    return;
                }

                document.body.classList.add("in-studio-mode");
                dropzone.style.display = "none";
                configStudio.style.display = "block";
                resultStudio.style.display = "none";
                mobileDock.style.display = "";

                // Update Stats
                const totalBytes = imageItems.reduce((acc, curr) => acc + curr.size, 0);
                statImageCount.textContent = `${imageItems.length} ${imageItems.length === 1 ? 'Image' : 'Images'}`;
                statTotalSize.textContent = formatBytes(totalBytes);
                updateMobileSettingsSummary();

                renderGrid();
            }

            // Render Images Grid
            function renderGrid() {
                imagesGrid.innerHTML = "";

                imageItems.forEach((item, index) => {
                    const card = document.createElement("div");
                    card.className = "image-card";
                    card.draggable = true;
                    card.dataset.id = item.id;
                    card.dataset.index = index;

                    card.innerHTML = `
                        <div class="card-thumb-wrap">
                            <span class="card-page-badge">
                                <svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 12px; height: 12px;"><rect x="4" y="3" width="16" height="18" rx="2"/></svg>
                                <span>#${index + 1}</span>
                            </span>
                            <div class="card-actions-bar">
                                <button type="button" class="card-action-btn btn-view" title="Preview full image" data-action="view">
                                    <svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                                </button>
                                <button type="button" class="card-action-btn btn-rotate" title="Rotate 90° clockwise" data-action="rotate">
                                    <svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
                                </button>
                                <button type="button" class="card-action-btn btn-delete" title="Remove image" data-action="delete">
                                    <svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                                </button>
                            </div>
                            <img src="${item.dataUrl}" class="card-thumb" style="transform: rotate(${item.rotation}deg);" alt="${item.name}">
                        </div>
                        <div class="card-footer-info">
                            <div class="card-name-label" title="${item.name}">${item.name}</div>
                            <div class="card-meta-row">
                                <span>${item.rotation % 180 === 0 ? item.width : item.height} × ${item.rotation % 180 === 0 ? item.height : item.width} px</span>
                                <span>${formatBytes(item.size)}</span>
                            </div>
                            <div class="card-order-controls">
                                <button type="button" class="card-order-btn" data-action="move-left" ${index === 0 ? 'disabled' : ''} title="Move left">
                                    <svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width: 14px; height: 14px;"><polyline points="15 18 9 12 15 6"/></svg>
                                </button>
                                <span class="card-order-label">Page ${index + 1}</span>
                                <button type="button" class="card-order-btn" data-action="move-right" ${index === imageItems.length - 1 ? 'disabled' : ''} title="Move right">
                                    <svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width: 14px; height: 14px;"><polyline points="9 18 15 12 9 6"/></svg>
                                </button>
                            </div>
                        </div>
                    `;

                    // Actions
                    card.querySelector('[data-action="view"]').addEventListener("click", (e) => {
                        e.stopPropagation();
                        modalImage.src = item.dataUrl;
                        modalImage.style.transform = `rotate(${item.rotation}deg)`;
                        previewModal.style.display = "flex";
                    });

                    card.querySelector('[data-action="rotate"]').addEventListener("click", (e) => {
                        e.stopPropagation();
                        item.rotation = (item.rotation + 90) % 360;
                        renderGrid();
                    });

                    card.querySelector('[data-action="delete"]').addEventListener("click", (e) => {
                        e.stopPropagation();
                        imageItems.splice(index, 1);
                        updateStudioView();
                    });

                    const btnMoveLeft = card.querySelector('[data-action="move-left"]');
                    if (btnMoveLeft && index > 0) {
                        btnMoveLeft.addEventListener("click", (e) => {
                            e.stopPropagation();
                            const tmp = imageItems[index - 1];
                            imageItems[index - 1] = imageItems[index];
                            imageItems[index] = tmp;
                            renderGrid();
                        });
                    }

                    const btnMoveRight = card.querySelector('[data-action="move-right"]');
                    if (btnMoveRight && index < imageItems.length - 1) {
                        btnMoveRight.addEventListener("click", (e) => {
                            e.stopPropagation();
                            const tmp = imageItems[index + 1];
                            imageItems[index + 1] = imageItems[index];
                            imageItems[index] = tmp;
                            renderGrid();
                        });
                    }

                    // Drag and Drop reordering
                    setupDragAndDrop(card, index);

                    imagesGrid.appendChild(card);
                });
            }

            // HTML5 Drag & Drop Reordering
            let draggedIndex = null;

            function setupDragAndDrop(card, index) {
                card.addEventListener("dragstart", (e) => {
                    draggedIndex = index;
                    card.classList.add("is-dragging");
                    e.dataTransfer.effectAllowed = "move";
                    e.dataTransfer.setData("text/plain", index);
                });

                card.addEventListener("dragend", () => {
                    card.classList.remove("is-dragging");
                    document.querySelectorAll(".image-card").forEach(c => c.classList.remove("drag-over"));
                });

                card.addEventListener("dragover", (e) => {
                    e.preventDefault();
                    e.dataTransfer.dropEffect = "move";
                    card.classList.add("drag-over");
                });

                card.addEventListener("dragleave", () => {
                    card.classList.remove("drag-over");
                });

                card.addEventListener("drop", (e) => {
                    e.preventDefault();
                    card.classList.remove("drag-over");
                    const targetIndex = index;
                    if (draggedIndex !== null && draggedIndex !== targetIndex) {
                        const movedItem = imageItems.splice(draggedIndex, 1)[0];
                        imageItems.splice(targetIndex, 0, movedItem);
                        renderGrid();
                    }
                });
            }

            // Toolbar Operations
            btnSortName.addEventListener("click", () => {
                imageItems.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' }));
                renderGrid();
                showToast("Sorted images A-Z by filename", "info");
            });

            btnRotateAll.addEventListener("click", () => {
                imageItems.forEach(item => {
                    item.rotation = (item.rotation + 90) % 360;
                });
                renderGrid();
                showToast("Rotated all images 90°", "info");
            });

            btnClearAll.addEventListener("click", () => {
                if (confirm("Are you sure you want to remove all loaded images?")) {
                    imageItems = [];
                    updateStudioView();
                }
            });

            // Lightbox Modal
            btnCloseModal.addEventListener("click", () => {
                previewModal.style.display = "none";
            });
            previewModal.addEventListener("click", (e) => {
                if (e.target === previewModal) {
                    previewModal.style.display = "none";
                }
            });

            // Convert to PDF Engine
            async function executeConversion() {
                if (imageItems.length === 0) return;

                if (typeof PDFLib === "undefined") {
                    showToast("PDF generation library is still loading, please wait...", "error");
                    return;
                }

                // Show progress modal
                configStudio.style.display = "none";
                progressStudio.style.display = "block";
                resultStudio.style.display = "none";
                mobileDock.style.display = "none";

                const progressBarFill = document.getElementById("progress-bar-fill");
                const progressPercent = document.getElementById("progress-percent");
                const progressStatusText = document.getElementById("progress-status-text");

                progressBarFill.style.width = "0%";
                progressPercent.textContent = "0%";

                try {
                    const { PDFDocument } = PDFLib;
                    const pdfDoc = await PDFDocument.create();

                    const pageSizeSetting = selectPageSize.value;
                    const fitSetting = selectImageFit.value;
                    const quality = parseFloat(selectQuality.value) || 0.85;
                    const margin = settingMargin;

                    // Standard Dimensions in Points (72 dpi)
                    const SIZES = {
                        a4: [595.28, 841.89],
                        letter: [612.00, 792.00],
                        a3: [841.89, 1190.55],
                        legal: [612.00, 1008.00]
                    };

                    const total = imageItems.length;

                    for (let i = 0; i < total; i++) {
                        const item = imageItems[i];
                        const progress = Math.round(((i + 0.5) / total) * 100);
                        progressBarFill.style.width = `${progress}%`;
                        progressPercent.textContent = `${progress}%`;
                        progressStatusText.textContent = `Processing image ${i + 1} of ${total}: ${item.name}...`;

                        // Render image onto offscreen canvas with rotation and quality compression
                        const processedImageData = await processImageToCanvas(item, quality);

                        // Embed into PDF
                        let embeddedImage;
                        if (processedImageData.isPng) {
                            embeddedImage = await pdfDoc.embedPng(processedImageData.dataUrl);
                        } else {
                            embeddedImage = await pdfDoc.embedJpg(processedImageData.dataUrl);
                        }

                        const imgW = processedImageData.width;
                        const imgH = processedImageData.height;

                        // Calculate Page Dimensions
                        let pWidth, pHeight;

                        if (pageSizeSetting === "fit") {
                            // Exact image dimensions
                            pWidth = imgW;
                            pHeight = imgH;
                        } else {
                            // Standard preset format
                            const baseSize = SIZES[pageSizeSetting] || SIZES.a4;
                            let isLandscape = false;

                            if (settingOrientation === "auto") {
                                isLandscape = imgW > imgH;
                            } else if (settingOrientation === "landscape") {
                                isLandscape = true;
                            } else {
                                isLandscape = false;
                            }

                            pWidth = isLandscape ? Math.max(baseSize[0], baseSize[1]) : Math.min(baseSize[0], baseSize[1]);
                            pHeight = isLandscape ? Math.min(baseSize[0], baseSize[1]) : Math.max(baseSize[0], baseSize[1]);
                        }

                        // Add Page
                        const page = pdfDoc.addPage([pWidth, pHeight]);

                        // Placement Calculation
                        if (pageSizeSetting === "fit") {
                            page.drawImage(embeddedImage, {
                                x: 0,
                                y: 0,
                                width: pWidth,
                                height: pHeight
                            });
                        } else {
                            const availW = Math.max(10, pWidth - (margin * 2));
                            const availH = Math.max(10, pHeight - (margin * 2));

                            let drawW, drawH;

                            if (fitSetting === "fill") {
                                drawW = availW;
                                drawH = availH;
                            } else {
                                // Contain / Fit ratio
                                const scale = Math.min(availW / imgW, availH / imgH);
                                drawW = imgW * scale;
                                drawH = imgH * scale;
                            }

                            const drawX = margin + (availW - drawW) / 2;
                            const drawY = margin + (availH - drawH) / 2;

                            page.drawImage(embeddedImage, {
                                x: drawX,
                                y: drawY,
                                width: drawW,
                                height: drawH
                            });
                        }

                        // Micro delay for responsive UI
                        await new Promise(r => setTimeout(r, 10));
                    }

                    progressStatusText.textContent = "Writing final PDF file...";
                    progressBarFill.style.width = "100%";
                    progressPercent.textContent = "100%";

                    const pdfBytes = await pdfDoc.save();
                    generatedPdfBlob = new Blob([pdfBytes], { type: "application/pdf" });

                    if (generatedPdfUrl) {
                        URL.revokeObjectURL(generatedPdfUrl);
                    }
                    generatedPdfUrl = URL.createObjectURL(generatedPdfBlob);

                    // Show Result Studio
                    setTimeout(() => {
                        progressStudio.style.display = "none";
                        resultStudio.style.display = "block";

                        let outFilename = inpFilename.value.trim();
                        if (!outFilename.toLowerCase().endsWith(".pdf")) {
                            outFilename += ".pdf";
                        }

                        document.getElementById("result-filename").textContent = outFilename;
                        document.getElementById("result-meta").textContent = `${imageItems.length} Pages • ${formatBytes(generatedPdfBlob.size)}`;

                        showToast("PDF document created successfully!", "success");
                    }, 400);

                } catch (err) {
                    console.error("PDF generation error:", err);
                    progressStudio.style.display = "none";
                    configStudio.style.display = "block";
                    showToast("Failed to compile PDF: " + err.message, "error");
                }
            }

            // Process Image with Canvas (handles rotation, formats, quality)
            function processImageToCanvas(item, quality) {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.onload = () => {
                        const rot = item.rotation % 360;
                        const isRotated90 = (rot === 90 || rot === 270);

                        const canvas = document.createElement("canvas");
                        const ctx = canvas.getContext("2d");

                        const width = isRotated90 ? img.naturalHeight : img.naturalWidth;
                        const height = isRotated90 ? img.naturalWidth : img.naturalHeight;

                        canvas.width = width;
                        canvas.height = height;

                        ctx.translate(canvas.width / 2, canvas.height / 2);
                        ctx.rotate((rot * Math.PI) / 180);
                        ctx.drawImage(img, -img.naturalWidth / 2, -img.naturalHeight / 2);

                        // If PNG with transparency or SVG, we can keep PNG format or JPG
                        const isPng = item.type === "image/png" && rot === 0 && quality > 0.9;
                        const format = isPng ? "image/png" : "image/jpeg";
                        const dataUrl = canvas.toDataURL(format, isPng ? undefined : quality);

                        resolve({
                            dataUrl,
                            width,
                            height,
                            isPng
                        });
                    };
                    img.onerror = () => reject(new Error("Image render failed for " + item.name));
                    img.src = item.dataUrl;
                });
            }

            btnConvertPdf.addEventListener("click", executeConversion);
            btnConvertPdfMobile.addEventListener("click", executeConversion);

            // Download PDF
            btnDownloadPdf.addEventListener("click", () => {
                if (!generatedPdfBlob) return;
                let outFilename = inpFilename.value.trim();
                if (!outFilename.toLowerCase().endsWith(".pdf")) {
                    outFilename += ".pdf";
                }
                downloadBlob(generatedPdfBlob, outFilename);
                showToast("Downloading " + outFilename, "success");
            });

            // Preview in New Tab
            btnPreviewPdf.addEventListener("click", () => {
                if (!generatedPdfUrl) return;
                window.open(generatedPdfUrl, "_blank");
            });

            // Start Over
            btnStartOver.addEventListener("click", () => {
                resultStudio.style.display = "none";
                configStudio.style.display = "block";
                updateStudioView();
            });

            // Utility byte formatter
            function formatBytes(bytes) {
                if (bytes === 0) return '0 Bytes';
                const k = 1024;
                const sizes = ['Bytes', 'KB', 'MB', 'GB'];
                const i = Math.floor(Math.log(bytes) / Math.log(k));
                return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
            }
        });
