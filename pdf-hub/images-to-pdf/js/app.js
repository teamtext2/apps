/**
 * Spac2 Images to PDF — Client-Side PDF Builder
 */
(function () {
    "use strict";

    const PDF_TOOLS = [
        { id: "merge", title: "Merge PDF", subtitle: "Combine multiple PDF files", url: "/apps/pdf-hub/merge", badge: "Popular" },
        { id: "split", title: "Split PDF", subtitle: "Extract or divide pages", url: "/apps/pdf-hub/split", badge: "Utility" },
        { id: "organize", title: "Organize PDF", subtitle: "Reorder, rotate & delete", url: "/apps/pdf-hub/organize", badge: "Visual" },
        { id: "compress", title: "Compress PDF", subtitle: "Reduce file size", url: "/apps/pdf-hub/compress", badge: "Optimization" },
        { id: "pdf-to-image", title: "PDF to Images", subtitle: "Export high-res photos", url: "/apps/pdf-hub/pdf-to-image", badge: "High-DPI" },
        { id: "images-to-pdf", title: "Images to PDF", subtitle: "Convert JPG, PNG to PDF", url: "/apps/pdf-hub/images-to-pdf", badge: "Popular" },
        { id: "pdf-to-doc", title: "PDF to Word (DOCX)", subtitle: "Convert to DOCX document", url: "/apps/pdf-hub/pdf-to-doc", badge: "Word DOCX" },
        { id: "annotate", title: "Annotate PDF", subtitle: "Draw, highlight & notes", url: "/apps/pdf-hub/annotate", badge: "Editor" },
        { id: "sign", title: "Sign PDF", subtitle: "Electronic signatures", url: "/apps/pdf-hub/sign", badge: "Fast Sign" },
        { id: "watermark", title: "Watermark PDF", subtitle: "Stamp copyright & logo", url: "/apps/pdf-hub/watermark", badge: "Copyright" },
        { id: "crop-resize", title: "Crop & Resize PDF", subtitle: "Trim margins & formats", url: "/apps/pdf-hub/crop-resize", badge: "Paper Size" },
        { id: "ocr", title: "OCR PDF", subtitle: "AI optical recognition", url: "/apps/pdf-hub/ocr", badge: "AI Vision" },
        { id: "metadata", title: "PDF Metadata", subtitle: "Edit & strip metadata", url: "/apps/pdf-hub/metadata", badge: "Privacy" }
    ];

    const SVG = {
        tool: '<svg class="tool-dropdown-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>',
        view: '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
        rotate: '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>',
        close: '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
        prev: '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>',
        next: '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>',
        success: '<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
        error: '<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>',
        info: '<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>'
    };

    // =========================================================================
    // Theme Management
    // =========================================================================
    function getActiveTheme() {
        return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
    }

    function updateThemeIcons(theme) {
        const sun = document.getElementById("theme-icon-sun");
        const moon = document.getElementById("theme-icon-moon");
        if (!sun || !moon) return;
        sun.hidden = theme !== "dark";
        moon.hidden = theme === "dark";
    }

    function toggleTheme() {
        const next = getActiveTheme() === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", next);
        try {
            localStorage.setItem("spac2_theme", next);
        } catch (e) {}
        updateThemeIcons(next);
    }

    // =========================================================================
    // Utilities
    // =========================================================================
    function showToast(message, type = "info") {
        let container = document.getElementById("toast-container");
        if (!container) {
            container = document.createElement("div");
            container.id = "toast-container";
            document.body.appendChild(container);
        }

        const toast = document.createElement("div");
        toast.className = `toast toast-${type}`;

        const iconWrap = document.createElement("span");
        iconWrap.innerHTML = SVG[type] || SVG.info;

        const textSpan = document.createElement("span");
        textSpan.textContent = message;

        toast.appendChild(iconWrap.firstChild);
        toast.appendChild(textSpan);
        container.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = "0";
            toast.style.transform = "translateY(8px) scale(0.96)";
            toast.style.transition = "all 0.22s ease";
            setTimeout(() => toast.remove(), 230);
        }, 3400);
    }

    function formatBytes(bytes) {
        if (!bytes || bytes <= 0) return "0 B";
        const units = ["B", "KB", "MB", "GB"];
        const i = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
        const value = bytes / Math.pow(1024, i);
        return `${value < 10 && i > 0 ? value.toFixed(1) : Math.round(value)} ${units[i]}`;
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
        }, 150);
    }

    // =========================================================================
    // Tool Switcher
    // =========================================================================
    function initToolSwitcher() {
        const btn = document.getElementById("tool-switcher-btn");
        const menu = document.getElementById("tool-dropdown-menu");
        if (!btn || !menu) return;

        PDF_TOOLS.forEach((tool) => {
            const item = document.createElement("a");
            item.href = tool.url;
            item.className = "tool-dropdown-item" + (tool.id === "images-to-pdf" ? " is-current" : "");
            item.setAttribute("role", "menuitem");
            item.innerHTML = `
                ${SVG.tool}
                <div class="tool-dropdown-text">
                    <span class="tool-dropdown-title"></span>
                    <span class="tool-dropdown-sub"></span>
                </div>
                <span class="tool-dropdown-badge"></span>
            `;
            item.querySelector(".tool-dropdown-title").textContent = tool.title;
            item.querySelector(".tool-dropdown-sub").textContent = tool.subtitle;
            item.querySelector(".tool-dropdown-badge").textContent = tool.badge;
            menu.appendChild(item);
        });

        function closeMenu() {
            menu.classList.remove("active");
            btn.setAttribute("aria-expanded", "false");
        }

        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const isOpen = menu.classList.toggle("active");
            btn.setAttribute("aria-expanded", String(isOpen));
        });

        document.addEventListener("click", (e) => {
            if (!menu.contains(e.target) && e.target !== btn) closeMenu();
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") closeMenu();
        });
    }

    // =========================================================================
    // Main Application
    // =========================================================================
    document.addEventListener("DOMContentLoaded", () => {
        updateThemeIcons(getActiveTheme());
        initToolSwitcher();

        const themeBtn = document.getElementById("theme-toggle-btn");
        if (themeBtn) themeBtn.addEventListener("click", toggleTheme);

        // Views & Containers
        const dropzone = document.getElementById("dropzone");
        const fileInput = document.getElementById("file-input");
        const btnSelectFiles = document.getElementById("btn-select-files");
        const configStudio = document.getElementById("config-studio");
        const progressStudio = document.getElementById("progress-studio");
        const resultStudio = document.getElementById("result-studio");
        const mobileDock = document.getElementById("mobile-dock");
        const imagesGrid = document.getElementById("images-grid");

        // Stats & Toolbar
        const statImageCount = document.getElementById("stat-image-count");
        const statTotalSize = document.getElementById("stat-total-size");
        const btnAddMore = document.getElementById("btn-add-more");
        const btnSortName = document.getElementById("btn-sort-name");
        const btnRotateAll = document.getElementById("btn-rotate-all");
        const btnClearAll = document.getElementById("btn-clear-all");
        const btnJumpSettings = document.getElementById("btn-jump-settings");
        const settingsSidebar = document.getElementById("settings-sidebar");
        const mobileSettingsText = document.getElementById("mobile-settings-text");

        // Settings
        const segOrientation = document.getElementById("seg-orientation");
        const selectPageSize = document.getElementById("select-page-size");
        const segMargin = document.getElementById("seg-margin");
        const groupOrientation = document.getElementById("group-orientation");
        const groupMargin = document.getElementById("group-margin");
        const groupImageFit = document.getElementById("group-image-fit");
        const selectImageFit = document.getElementById("select-image-fit");
        const selectQuality = document.getElementById("select-quality");
        const inpFilename = document.getElementById("inp-filename");

        // Actions
        const btnConvertPdf = document.getElementById("btn-convert-pdf");
        const btnConvertPdfMobile = document.getElementById("btn-convert-pdf-mobile");
        const btnDownloadPdf = document.getElementById("btn-download-pdf");
        const btnPreviewPdf = document.getElementById("btn-preview-pdf");
        const btnStartOver = document.getElementById("btn-start-over");

        // Progress & Result
        const progressBarFill = document.getElementById("progress-bar-fill");
        const progressBarRole = document.getElementById("progress-bar-role");
        const progressPercent = document.getElementById("progress-percent");
        const progressStatusText = document.getElementById("progress-status-text");
        const resultFilename = document.getElementById("result-filename");
        const resultMeta = document.getElementById("result-meta");

        // Lightbox Modal
        const previewModal = document.getElementById("preview-modal");
        const modalImage = document.getElementById("modal-image");
        const btnCloseModal = document.getElementById("btn-close-modal");

        // State
        let imageItems = [];
        let generatedPdfBlob = null;
        let generatedPdfUrl = null;
        let settingOrientation = "auto";
        let settingMargin = 0;
        let draggedIndex = null;

        function setView(viewName) {
            dropzone.hidden = viewName !== "dropzone";
            configStudio.hidden = viewName !== "config";
            progressStudio.hidden = viewName !== "progress";
            resultStudio.hidden = viewName !== "result";
            mobileDock.hidden = viewName !== "config";

            document.body.classList.toggle("in-studio-mode", viewName !== "dropzone");
            document.body.classList.toggle("has-mobile-dock", viewName === "config");
        }

        function syncSettingsVisibility() {
            const isFit = selectPageSize.value === "fit";
            groupOrientation.hidden = isFit;
            groupMargin.hidden = isFit;
            groupImageFit.hidden = isFit;
            updateSummaryUI();
        }

        function updateSummaryUI() {
            const isFit = selectPageSize.value === "fit";
            if (mobileSettingsText) {
                if (isFit) {
                    mobileSettingsText.textContent = "Fit to image • 0 Margin";
                } else {
                    const sizeName = selectPageSize.options[selectPageSize.selectedIndex]?.text.split("(")[0].trim() || "A4";
                    const orientName = settingOrientation.charAt(0).toUpperCase() + settingOrientation.slice(1);
                    const marginName = settingMargin === 0 ? "0 Margin" : settingMargin === 18 ? "5mm Margin" : "12mm Margin";
                    mobileSettingsText.textContent = `${sizeName} • ${orientName} • ${marginName}`;
                }
            }

            const labelText = `Convert ${imageItems.length} ${imageItems.length === 1 ? "Image" : "Images"} to PDF`;
            document.querySelectorAll(".convert-btn-label").forEach((el) => {
                el.textContent = labelText;
            });
        }

        // Segmented Controls
        segOrientation.querySelectorAll(".segmented-btn").forEach((btn) => {
            btn.addEventListener("click", () => {
                segOrientation.querySelectorAll(".segmented-btn").forEach((b) => b.classList.remove("active"));
                btn.classList.add("active");
                settingOrientation = btn.getAttribute("data-val");
                updateSummaryUI();
            });
        });

        segMargin.querySelectorAll(".segmented-btn").forEach((btn) => {
            btn.addEventListener("click", () => {
                segMargin.querySelectorAll(".segmented-btn").forEach((b) => b.classList.remove("active"));
                btn.classList.add("active");
                settingMargin = parseInt(btn.getAttribute("data-val"), 10);
                updateSummaryUI();
            });
        });

        selectPageSize.addEventListener("change", syncSettingsVisibility);

        if (btnJumpSettings && settingsSidebar) {
            btnJumpSettings.addEventListener("click", () => {
                settingsSidebar.scrollIntoView({ behavior: "smooth", block: "start" });
            });
        }

        // Dropzone & File Selection
        btnSelectFiles.addEventListener("click", (e) => {
            e.stopPropagation();
            fileInput.click();
        });

        dropzone.addEventListener("click", () => fileInput.click());
        btnAddMore.addEventListener("click", () => fileInput.click());

        dropzone.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                fileInput.click();
            }
        });

        dropzone.addEventListener("dragover", (e) => {
            e.preventDefault();
            dropzone.classList.add("drag-over");
        });

        dropzone.addEventListener("dragleave", (e) => {
            if (!dropzone.contains(e.relatedTarget)) {
                dropzone.classList.remove("drag-over");
            }
        });

        dropzone.addEventListener("drop", (e) => {
            e.preventDefault();
            dropzone.classList.remove("drag-over");
            if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
                handleFiles(Array.from(e.dataTransfer.files));
            }
        });

        fileInput.addEventListener("change", () => {
            if (fileInput.files && fileInput.files.length > 0) {
                handleFiles(Array.from(fileInput.files));
                fileInput.value = "";
            }
        });

        // Clipboard Paste (Ctrl+V)
        window.addEventListener("paste", (e) => {
            const items = e.clipboardData?.items;
            if (!items) return;

            const pastedFiles = [];
            for (let i = 0; i < items.length; i++) {
                if (items[i].type.indexOf("image") !== -1) {
                    const file = items[i].getAsFile();
                    if (file) {
                        const ext = file.type.split("/")[1] || "png";
                        pastedFiles.push(new File([file], `pasted-image-${Date.now()}-${i + 1}.${ext}`, { type: file.type }));
                    }
                }
            }

            if (pastedFiles.length > 0) {
                handleFiles(pastedFiles);
                showToast(`Pasted ${pastedFiles.length} ${pastedFiles.length === 1 ? "image" : "images"} from clipboard!`, "success");
            }
        });

        async function handleFiles(files) {
            const validImages = files.filter(
                (f) => f.type.startsWith("image/") || /\.(jpg|jpeg|png|webp|gif|bmp|svg|avif)$/i.test(f.name)
            );

            if (validImages.length === 0) {
                showToast("Please select valid image files (JPG, PNG, WebP, GIF, SVG).", "error");
                return;
            }

            showToast(`Loading ${validImages.length} ${validImages.length === 1 ? "image" : "images"}...`, "info");

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

        function readFileAsImage(file) {
            return new Promise((resolve, reject) => {
                const objectUrl = URL.createObjectURL(file);
                const img = new Image();
                img.onload = () => {
                    resolve({
                        id: "img_" + Math.random().toString(36).slice(2, 11),
                        file,
                        name: file.name,
                        size: file.size,
                        type: file.type,
                        objectUrl,
                        width: img.naturalWidth || 800,
                        height: img.naturalHeight || 600,
                        rotation: 0
                    });
                };
                img.onerror = () => {
                    URL.revokeObjectURL(objectUrl);
                    reject(new Error("Image decode failed"));
                };
                img.src = objectUrl;
            });
        }

        function updateStudioView() {
            if (imageItems.length === 0) {
                setView("dropzone");
                imagesGrid.innerHTML = "";
                return;
            }

            setView("config");
            const totalBytes = imageItems.reduce((acc, curr) => acc + curr.size, 0);
            statImageCount.textContent = `${imageItems.length} ${imageItems.length === 1 ? "Image" : "Images"}`;
            statTotalSize.textContent = formatBytes(totalBytes);
            syncSettingsVisibility();
            renderGrid();
        }

        function renderGrid() {
            imagesGrid.innerHTML = "";
            const fragment = document.createDocumentFragment();

            imageItems.forEach((item, index) => {
                const card = document.createElement("div");
                card.className = "image-card";
                card.draggable = true;

                const w = item.rotation % 180 === 0 ? item.width : item.height;
                const h = item.rotation % 180 === 0 ? item.height : item.width;

                card.innerHTML = `
                    <div class="card-thumb-wrap">
                        <span class="card-page-badge">#${index + 1}</span>
                        <div class="card-actions-bar">
                            <button type="button" class="card-action-btn" data-action="view" title="Preview image" aria-label="Preview image">${SVG.view}</button>
                            <button type="button" class="card-action-btn" data-action="rotate" title="Rotate 90°" aria-label="Rotate 90 degrees">${SVG.rotate}</button>
                            <button type="button" class="card-action-btn btn-delete" data-action="delete" title="Remove" aria-label="Remove image">${SVG.close}</button>
                        </div>
                        <img src="${item.objectUrl}" class="card-thumb" style="transform: rotate(${item.rotation}deg);" alt="" loading="lazy">
                    </div>
                    <div class="card-footer-info">
                        <div class="card-name-label"></div>
                        <div class="card-meta-row">
                            <span>${w} &times; ${h} px</span>
                            <span>${formatBytes(item.size)}</span>
                        </div>
                        <div class="card-order-controls">
                            <button type="button" class="card-order-btn" data-action="move-left" ${index === 0 ? "disabled" : ""} aria-label="Move left">${SVG.prev}</button>
                            <span class="card-order-label">Page ${index + 1}</span>
                            <button type="button" class="card-order-btn" data-action="move-right" ${index === imageItems.length - 1 ? "disabled" : ""} aria-label="Move right">${SVG.next}</button>
                        </div>
                    </div>
                `;

                const nameEl = card.querySelector(".card-name-label");
                nameEl.textContent = item.name;
                nameEl.title = item.name;
                card.querySelector(".card-thumb").alt = item.name;

                card.querySelector('[data-action="view"]').addEventListener("click", (e) => {
                    e.stopPropagation();
                    openModal(item);
                });

                card.querySelector('[data-action="rotate"]').addEventListener("click", (e) => {
                    e.stopPropagation();
                    item.rotation = (item.rotation + 90) % 360;
                    renderGrid();
                });

                card.querySelector('[data-action="delete"]').addEventListener("click", (e) => {
                    e.stopPropagation();
                    URL.revokeObjectURL(item.objectUrl);
                    imageItems.splice(index, 1);
                    updateStudioView();
                });

                const btnLeft = card.querySelector('[data-action="move-left"]');
                if (btnLeft && index > 0) {
                    btnLeft.addEventListener("click", (e) => {
                        e.stopPropagation();
                        [imageItems[index - 1], imageItems[index]] = [imageItems[index], imageItems[index - 1]];
                        renderGrid();
                    });
                }

                const btnRight = card.querySelector('[data-action="move-right"]');
                if (btnRight && index < imageItems.length - 1) {
                    btnRight.addEventListener("click", (e) => {
                        e.stopPropagation();
                        [imageItems[index + 1], imageItems[index]] = [imageItems[index], imageItems[index + 1]];
                        renderGrid();
                    });
                }

                setupDragAndDrop(card, index);
                fragment.appendChild(card);
            });

            imagesGrid.appendChild(fragment);
        }

        function setupDragAndDrop(card, index) {
            card.addEventListener("dragstart", (e) => {
                draggedIndex = index;
                card.classList.add("is-dragging");
                e.dataTransfer.effectAllowed = "move";
                e.dataTransfer.setData("text/plain", String(index));
            });

            card.addEventListener("dragend", () => {
                card.classList.remove("is-dragging");
                imagesGrid.querySelectorAll(".image-card").forEach((c) => c.classList.remove("drag-over"));
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
                if (draggedIndex !== null && draggedIndex !== index) {
                    const [moved] = imageItems.splice(draggedIndex, 1);
                    imageItems.splice(index, 0, moved);
                    renderGrid();
                }
                draggedIndex = null;
            });
        }

        // Toolbar Operations
        btnSortName.addEventListener("click", () => {
            imageItems.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: "base" }));
            renderGrid();
            showToast("Sorted images A-Z by filename", "info");
        });

        btnRotateAll.addEventListener("click", () => {
            imageItems.forEach((item) => {
                item.rotation = (item.rotation + 90) % 360;
            });
            renderGrid();
            showToast("Rotated all images 90°", "info");
        });

        btnClearAll.addEventListener("click", () => {
            imageItems.forEach((item) => URL.revokeObjectURL(item.objectUrl));
            imageItems = [];
            updateStudioView();
            showToast("Cleared all images", "info");
        });

        // Lightbox Modal
        function openModal(item) {
            modalImage.src = item.objectUrl;
            modalImage.alt = item.name;
            modalImage.style.transform = `rotate(${item.rotation}deg)`;
            previewModal.hidden = false;
            document.body.style.overflow = "hidden";
        }

        function closeModal() {
            if (previewModal.hidden) return;
            previewModal.hidden = true;
            document.body.style.overflow = "";
        }

        btnCloseModal.addEventListener("click", closeModal);
        previewModal.addEventListener("click", (e) => {
            if (e.target === previewModal) closeModal();
        });
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && !previewModal.hidden) closeModal();
        });

        // =====================================================================
        // Convert to PDF Engine
        // =====================================================================
        async function executeConversion() {
            if (imageItems.length === 0) return;

            if (typeof window.PDFLib === "undefined") {
                showToast("PDF library is still loading, please wait...", "error");
                return;
            }

            setView("progress");
            updateProgress(0, "Preparing PDF document...");

            try {
                const { PDFDocument } = window.PDFLib;
                const pdfDoc = await PDFDocument.create();

                const pageSizeSetting = selectPageSize.value;
                const fitSetting = selectImageFit.value;
                const quality = parseFloat(selectQuality.value) || 0.8;
                const margin = settingMargin;

                const SIZES = {
                    a4: [595.28, 841.89],
                    letter: [612.0, 792.0],
                    a3: [841.89, 1190.55],
                    legal: [612.0, 1008.0]
                };

                const total = imageItems.length;

                for (let i = 0; i < total; i++) {
                    const item = imageItems[i];
                    const pct = Math.round(((i + 0.5) / total) * 100);
                    updateProgress(pct, `Processing image ${i + 1} of ${total}: ${item.name}...`);

                    const processed = await processImageToCanvas(item, quality);
                    const embeddedImage = processed.isPng
                        ? await pdfDoc.embedPng(processed.bytes)
                        : await pdfDoc.embedJpg(processed.bytes);

                    const imgW = processed.width;
                    const imgH = processed.height;

                    let pWidth, pHeight;
                    if (pageSizeSetting === "fit") {
                        pWidth = imgW;
                        pHeight = imgH;
                    } else {
                        const baseSize = SIZES[pageSizeSetting] || SIZES.a4;
                        const isLandscape =
                            settingOrientation === "auto"
                                ? imgW > imgH
                                : settingOrientation === "landscape";

                        pWidth = isLandscape ? Math.max(baseSize[0], baseSize[1]) : Math.min(baseSize[0], baseSize[1]);
                        pHeight = isLandscape ? Math.min(baseSize[0], baseSize[1]) : Math.max(baseSize[0], baseSize[1]);
                    }

                    const page = pdfDoc.addPage([pWidth, pHeight]);

                    if (pageSizeSetting === "fit") {
                        page.drawImage(embeddedImage, { x: 0, y: 0, width: pWidth, height: pHeight });
                    } else {
                        const availW = Math.max(10, pWidth - margin * 2);
                        const availH = Math.max(10, pHeight - margin * 2);
                        let drawW, drawH;

                        if (fitSetting === "fill") {
                            drawW = availW;
                            drawH = availH;
                        } else {
                            const scale = Math.min(availW / imgW, availH / imgH);
                            drawW = imgW * scale;
                            drawH = imgH * scale;
                        }

                        const drawX = margin + (availW - drawW) / 2;
                        const drawY = margin + (availH - drawH) / 2;
                        page.drawImage(embeddedImage, { x: drawX, y: drawY, width: drawW, height: drawH });
                    }

                    await new Promise((r) => setTimeout(r, 0));
                }

                updateProgress(100, "Finalizing PDF file...");
                const pdfBytes = await pdfDoc.save();
                generatedPdfBlob = new Blob([pdfBytes], { type: "application/pdf" });

                if (generatedPdfUrl) URL.revokeObjectURL(generatedPdfUrl);
                generatedPdfUrl = URL.createObjectURL(generatedPdfBlob);

                let outFilename = inpFilename.value.trim() || "images-combined.pdf";
                if (!outFilename.toLowerCase().endsWith(".pdf")) outFilename += ".pdf";

                resultFilename.textContent = outFilename;
                resultMeta.textContent = `${imageItems.length} ${imageItems.length === 1 ? "Page" : "Pages"} • ${formatBytes(generatedPdfBlob.size)}`;

                setView("result");
                showToast("PDF document created successfully!", "success");
            } catch (err) {
                console.error("PDF generation error:", err);
                setView("config");
                showToast("Failed to compile PDF: " + (err.message || "Unknown error"), "error");
            }
        }

        function updateProgress(pct, text) {
            progressBarFill.style.width = `${pct}%`;
            progressBarRole.setAttribute("aria-valuenow", String(pct));
            progressPercent.textContent = `${pct}%`;
            progressStatusText.textContent = text;
        }

        function processImageToCanvas(item, quality) {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = () => {
                    const rot = item.rotation % 360;
                    const isRotated90 = rot === 90 || rot === 270;
                    const width = isRotated90 ? img.naturalHeight : img.naturalWidth;
                    const height = isRotated90 ? img.naturalWidth : img.naturalHeight;

                    const canvas = document.createElement("canvas");
                    canvas.width = width;
                    canvas.height = height;
                    const ctx = canvas.getContext("2d");

                    const isPng = item.type === "image/png" && quality > 0.9;
                    const format = isPng ? "image/png" : "image/jpeg";

                    // Fill white background for JPEG so transparent PNG/SVG areas don't turn black
                    if (!isPng) {
                        ctx.fillStyle = "#ffffff";
                        ctx.fillRect(0, 0, width, height);
                    }

                    ctx.save();
                    ctx.translate(width / 2, height / 2);
                    ctx.rotate((rot * Math.PI) / 180);
                    ctx.drawImage(img, -img.naturalWidth / 2, -img.naturalHeight / 2);
                    ctx.restore();

                    canvas.toBlob(
                        async (blob) => {
                            if (!blob) return reject(new Error("Canvas export failed for " + item.name));
                            const bytes = await blob.arrayBuffer();
                            resolve({ bytes, width, height, isPng });
                        },
                        format,
                        isPng ? undefined : quality
                    );
                };
                img.onerror = () => reject(new Error("Image render failed for " + item.name));
                img.src = item.objectUrl;
            });
        }

        btnConvertPdf.addEventListener("click", executeConversion);
        btnConvertPdfMobile.addEventListener("click", executeConversion);

        btnDownloadPdf.addEventListener("click", () => {
            if (!generatedPdfBlob) return;
            let outFilename = inpFilename.value.trim() || "images-combined.pdf";
            if (!outFilename.toLowerCase().endsWith(".pdf")) outFilename += ".pdf";
            downloadBlob(generatedPdfBlob, outFilename);
            showToast("Downloading " + outFilename, "success");
        });

        btnPreviewPdf.addEventListener("click", () => {
            if (generatedPdfUrl) window.open(generatedPdfUrl, "_blank", "noopener");
        });

        btnStartOver.addEventListener("click", () => {
            updateStudioView();
        });
    });
})();
