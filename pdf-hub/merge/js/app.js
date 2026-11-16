// PDF.js worker setup
        if (typeof pdfjsLib !== "undefined") {
            pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
        }

        // Tool List for Dropdown
        const PDF_TOOLS_LIST = [
            { title: "Merge PDF", url: "/apps/pdf-hub/merge", icon: "files", badge: "Popular" },
            { title: "PDF to Word (DOCX)", url: "/apps/pdf-hub/pdf-to-doc", icon: "file-text", badge: "DOCX" },
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

        // Theme handlers
        function initTheme() {
            const saved = localStorage.getItem("spac2_theme") || "dark";
            document.documentElement.setAttribute("data-theme", saved);
            updateThemeIcon(saved);
        }

        function toggleTheme() {
            const cur = document.documentElement.getAttribute("data-theme") || "dark";
            const next = cur === "dark" ? "light" : "dark";
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

        // Tool Switcher Menu
        function initToolSwitcher() {
            const switcher = document.querySelector(".tool-switcher");
            if (!switcher) return;
            const btn = switcher.querySelector(".tool-switcher-btn");
            const menu = switcher.querySelector(".tool-dropdown-menu");
            if (!btn || !menu) return;

            if (menu.children.length === 0) {
                PDF_TOOLS_LIST.forEach(t => {
                    const item = document.createElement("a");
                    item.href = t.url;
                    item.className = "tool-dropdown-item";
                    item.innerHTML = `
                        <i data-lucide="${t.icon}" style="width: 16px; height: 16px; color: var(--accent-red); flex-shrink: 0;"></i>
                        <span style="font-weight: 600; font-size: 0.85rem; color: var(--text-primary); flex-grow: 1;">${t.title}</span>
                        <span style="font-size: 0.68rem; color: var(--text-muted); padding: 0.15rem 0.45rem; background: rgba(255, 255, 255, 0.05); border-radius: 999px;">${t.badge}</span>
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

        // Toast Messages
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

        function formatBytes(bytes) {
            if (!bytes || bytes === 0) return "0 Bytes";
            const k = 1024;
            const sizes = ["Bytes", "KB", "MB", "GB"];
            const i = Math.floor(Math.log(bytes) / Math.log(k));
            return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
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

        // ============================================================
        // Core Merge Application State & Visual Card Logic
        // ============================================================
        document.addEventListener("DOMContentLoaded", () => {
            initTheme();
            initToolSwitcher();
            if (window.lucide) window.lucide.createIcons();

            const dropzone = document.getElementById("dropzone");
            const fileInput = document.getElementById("file-input");
            const addMoreInput = document.getElementById("add-more-input");

            const mergeStudio = document.getElementById("merge-studio");
            const visualCardsGrid = document.getElementById("visual-cards-grid");
            const progressCard = document.getElementById("progress-card");
            const resultStudio = document.getElementById("result-studio");

            const filesCountText = document.getElementById("files-count-text");
            const totalPagesSummary = document.getElementById("total-pages-summary");
            const btnAddMore = document.getElementById("btn-add-more");
            const btnSortName = document.getElementById("btn-sort-name");
            const btnReverseOrder = document.getElementById("btn-reverse-order");
            const btnClearAll = document.getElementById("btn-clear-all");
            const btnBackUpload = document.getElementById("btn-back-upload");
            const btnExecuteMerge = document.getElementById("btn-execute-merge");
            const btnMergeLabel = document.getElementById("btn-merge-label");
            const outputNameInput = document.getElementById("output-name");

            const progressBarFill = document.getElementById("progress-bar-fill");
            const progressPercent = document.getElementById("progress-percent");
            const progressStatus = document.getElementById("progress-status");

            // Result elements
            const resFilesVal = document.getElementById("res-files-val");
            const resPagesVal = document.getElementById("res-pages-val");
            const resSizeVal = document.getElementById("res-size-val");
            const btnDownloadResult = document.getElementById("btn-download-result");
            const btnContinueEdit = document.getElementById("btn-continue-edit");
            const btnMergeNew = document.getElementById("btn-merge-new");

            // Array of file objects:
            // { id, file, buffer, pageCount, rangeText, rotation, thumbDataUrl }
            let fileEntries = [];
            let mergedResultBlob = null;
            let mergedResultFilename = "";

            // Dropzone setup
            dropzone.addEventListener("click", () => fileInput.click());
            dropzone.addEventListener("dragover", (e) => { e.preventDefault(); dropzone.classList.add("drag-over"); });
            dropzone.addEventListener("dragleave", () => dropzone.classList.remove("drag-over"));
            dropzone.addEventListener("drop", (e) => {
                e.preventDefault();
                dropzone.classList.remove("drag-over");
                if (e.dataTransfer && e.dataTransfer.files) handleSelectedFiles(e.dataTransfer.files);
            });
            fileInput.addEventListener("change", (e) => {
                if (e.target.files) handleSelectedFiles(e.target.files);
            });

            // Add more files
            btnAddMore.addEventListener("click", () => addMoreInput.click());
            addMoreInput.addEventListener("change", (e) => {
                if (e.target.files) {
                    handleSelectedFiles(e.target.files);
                    addMoreInput.value = "";
                }
            });

            // Handle incoming files
            async function handleSelectedFiles(fileList) {
                const pdfs = Array.from(fileList).filter(f => f.type === "application/pdf" || f.name.toLowerCase().endsWith(".pdf"));
                if (pdfs.length === 0) {
                    showToast("Please select valid PDF files.", "error");
                    return;
                }

                showToast(`Loading and generating thumbnails for ${pdfs.length} file${pdfs.length === 1 ? '' : 's'}...`, "info");

                for (const file of pdfs) {
                    try {
                        const buffer = await file.arrayBuffer();
                        const pdfLibDoc = await PDFLib.PDFDocument.load(buffer.slice(0));
                        const pageCount = pdfLibDoc.getPageCount();

                        // Render Cover Thumbnail via PDF.js
                        let thumbDataUrl = "";
                        try {
                            const pdfJsDoc = await pdfjsLib.getDocument({ data: buffer.slice(0) }).promise;
                            const page1 = await pdfJsDoc.getPage(1);
                            const viewport = page1.getViewport({ scale: 0.65 });
                            const canvas = document.createElement("canvas");
                            canvas.width = viewport.width;
                            canvas.height = viewport.height;
                            const ctx = canvas.getContext("2d");
                            ctx.fillStyle = "#ffffff";
                            ctx.fillRect(0, 0, canvas.width, canvas.height);
                            await page1.render({ canvasContext: ctx, viewport: viewport }).promise;
                            thumbDataUrl = canvas.toDataURL("image/jpeg", 0.85);
                        } catch (thumbErr) {
                            console.warn("Thumbnail render fallback:", thumbErr);
                        }

                        fileEntries.push({
                            id: "pdf_" + Math.random().toString(36).substr(2, 9),
                            file: file,
                            buffer: buffer,
                            pageCount: pageCount,
                            rangeText: `1-${pageCount}`,
                            rotation: 0,
                            thumbDataUrl: thumbDataUrl
                        });
                    } catch (err) {
                        console.error("Error loading PDF:", file.name, err);
                        showToast(`Failed to read file ${file.name}: ` + err.message, "error");
                    }
                }

                if (fileEntries.length > 0) {
                    document.body.classList.add("in-studio-mode");
                    dropzone.style.display = "none";
                    resultStudio.style.display = "none";
                    progressCard.style.display = "none";
                    mergeStudio.style.display = "block";
                    renderVisualCards();
                    showToast(`Successfully added ${pdfs.length} file${pdfs.length === 1 ? '' : 's'}!`, "success");
                }
            }

            // Render Visual Cards Grid with Drag & Drop
            function renderVisualCards() {
                visualCardsGrid.innerHTML = "";

                let totalPages = 0;
                fileEntries.forEach((entry, idx) => {
                    totalPages += entry.pageCount;

                    const card = document.createElement("div");
                    card.className = "pdf-visual-card";
                    card.draggable = true;
                    card.dataset.index = idx;

                    const safeName = entry.file.name;
                    const rotationBadge = entry.rotation ? `<div class="card-rotation-badge">↻ ${entry.rotation}°</div>` : "";

                    // Thumbnail image or fallback icon
                    const thumbHtml = entry.thumbDataUrl
                        ? `<div class="card-canvas-wrap"><img src="${entry.thumbDataUrl}" class="card-thumb-canvas" alt="Cover page"></div>`
                        : `<div style="color: var(--accent-red);"><svg class="svg-icon" style="width: 48px; height: 48px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div>`;

                    card.innerHTML = `
                        <!-- Sequence Badge #1, #2... -->
                        <div class="card-order-badge">
                            <span>Order</span>
                            <span class="num">#${idx + 1}</span>
                        </div>

                        <!-- Quick Delete Button -->
                        <button type="button" class="card-delete-btn" data-index="${idx}" title="Remove file">
                            <svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width: 14px; height: 14px;"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                        </button>

                        <!-- Thumbnail Area -->
                        <div class="card-thumb-area">
                            ${thumbHtml}
                            ${rotationBadge}
                        </div>

                        <!-- Card Info Area -->
                        <div class="card-info-area">
                            <div class="card-file-name" title="${safeName}">${safeName}</div>
                            <div class="card-meta-row">
                                <span class="card-page-pill">${entry.pageCount} ${entry.pageCount === 1 ? 'Page' : 'Pages'}</span>
                                <span>${formatBytes(entry.file.size)}</span>
                            </div>

                            <!-- Page Range Input -->
                            <div class="card-range-row">
                                <span>Page Range:</span>
                                <input type="text" class="card-range-input" data-index="${idx}" value="${entry.rangeText}" title="e.g. 1-5, 8">
                            </div>
                        </div>

                        <!-- Bottom Control Toolbar on Card -->
                        <div class="card-actions-bar">
                            <button type="button" class="btn-card-ctrl btn-move-left" data-index="${idx}" title="Move left" ${idx === 0 ? 'disabled' : ''}>
                                <svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="15 18 9 12 15 6"/></svg>
                            </button>
                            <button type="button" class="btn-card-ctrl btn-rotate" data-index="${idx}" title="Rotate pages +90°">
                                <svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.9 1 6.7 2.4L21 8"/><polyline points="21 3 21 8 16 8"/></svg>
                            </button>
                            <button type="button" class="btn-card-ctrl btn-move-right" data-index="${idx}" title="Move right" ${idx === fileEntries.length - 1 ? 'disabled' : ''}>
                                <svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="9 18 15 12 9 6"/></svg>
                            </button>
                        </div>
                    `;

                    // Drag & drop handlers
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
                            const [moved] = fileEntries.splice(fromIdx, 1);
                            fileEntries.splice(toIdx, 0, moved);
                            renderVisualCards();
                        }
                    });

                    visualCardsGrid.appendChild(card);
                });

                // Add File Placeholder Card
                const addCard = document.createElement("div");
                addCard.className = "add-placeholder-card";
                addCard.innerHTML = `
                    <div class="add-placeholder-icon">
                        <svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width: 24px; height: 24px;"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                    </div>
                    <span style="font-weight: 700; font-size: 0.9rem;">Add PDF Files</span>
                    <span style="font-size: 0.75rem;">Click to add more documents to the list</span>
                `;
                addCard.addEventListener("click", () => addMoreInput.click());
                visualCardsGrid.appendChild(addCard);

                // Update summary badges
                filesCountText.textContent = `${fileEntries.length} ${fileEntries.length === 1 ? 'File' : 'Files'} Selected`;
                totalPagesSummary.textContent = `(${totalPages} ${totalPages === 1 ? 'page' : 'pages'})`;
                btnMergeLabel.textContent = `Merge ${fileEntries.length} PDF ${fileEntries.length === 1 ? 'File' : 'Files'} Now (${totalPages} ${totalPages === 1 ? 'page' : 'pages'})`;

                // Bind Card Buttons
                visualCardsGrid.querySelectorAll(".btn-move-left").forEach(btn => {
                    btn.addEventListener("click", (e) => {
                        e.stopPropagation();
                        const i = parseInt(btn.dataset.index, 10);
                        if (i > 0) {
                            const tmp = fileEntries[i];
                            fileEntries[i] = fileEntries[i - 1];
                            fileEntries[i - 1] = tmp;
                            renderVisualCards();
                        }
                    });
                });

                visualCardsGrid.querySelectorAll(".btn-move-right").forEach(btn => {
                    btn.addEventListener("click", (e) => {
                        e.stopPropagation();
                        const i = parseInt(btn.dataset.index, 10);
                        if (i < fileEntries.length - 1) {
                            const tmp = fileEntries[i];
                            fileEntries[i] = fileEntries[i + 1];
                            fileEntries[i + 1] = tmp;
                            renderVisualCards();
                        }
                    });
                });

                visualCardsGrid.querySelectorAll(".btn-rotate").forEach(btn => {
                    btn.addEventListener("click", (e) => {
                        e.stopPropagation();
                        const i = parseInt(btn.dataset.index, 10);
                        fileEntries[i].rotation = (fileEntries[i].rotation + 90) % 360;
                        renderVisualCards();
                        showToast(`Rotated file #${i + 1} by 90° (Total: ${fileEntries[i].rotation}°)`, "info");
                    });
                });

                visualCardsGrid.querySelectorAll(".card-delete-btn").forEach(btn => {
                    btn.addEventListener("click", (e) => {
                        e.stopPropagation();
                        const i = parseInt(btn.dataset.index, 10);
                        fileEntries.splice(i, 1);
                        if (fileEntries.length === 0) {
                            resetAll();
                        } else {
                            renderVisualCards();
                        }
                    });
                });

                visualCardsGrid.querySelectorAll(".card-range-input").forEach(inp => {
                    inp.addEventListener("change", (e) => {
                        const i = parseInt(inp.dataset.index, 10);
                        fileEntries[i].rangeText = e.target.value.trim() || `1-${fileEntries[i].pageCount}`;
                    });
                });
            }

            // Quick Sort A-Z
            btnSortName.addEventListener("click", () => {
                fileEntries.sort((a, b) => a.file.name.localeCompare(b.file.name));
                renderVisualCards();
                showToast("Sorted files alphabetically (A-Z)", "info");
            });

            // Quick Reverse
            btnReverseOrder.addEventListener("click", () => {
                fileEntries.reverse();
                renderVisualCards();
                showToast("Reversed file list order", "info");
            });

            // Clear All
            function resetAll() {
                fileEntries = [];
                fileInput.value = "";
                document.body.classList.remove("in-studio-mode");
                mergeStudio.style.display = "none";
                progressCard.style.display = "none";
                resultStudio.style.display = "none";
                dropzone.style.display = "block";
            }

            btnClearAll.addEventListener("click", () => {
                if (confirm("Are you sure you want to remove all selected files?")) {
                    resetAll();
                    showToast("Cleared all files", "info");
                }
            });

            btnBackUpload.addEventListener("click", resetAll);
            btnMergeNew.addEventListener("click", resetAll);

            btnContinueEdit.addEventListener("click", () => {
                resultStudio.style.display = "none";
                mergeStudio.style.display = "block";
            });

            // Parse Page Ranges (e.g. "1-5, 8") -> returns 0-based index array
            function parseRangeIndices(str, maxCount) {
                if (!str || str.trim().toLowerCase() === "all") {
                    return Array.from({ length: maxCount }, (_, i) => i);
                }
                const indices = [];
                const parts = str.split(",");

                for (let part of parts) {
                    part = part.trim();
                    if (!part) continue;

                    if (part.includes("-")) {
                        const [s, e] = part.split("-").map(n => parseInt(n.trim(), 10));
                        if (!isNaN(s) && !isNaN(e)) {
                            const min = Math.max(1, Math.min(s, e));
                            const max = Math.min(maxCount, Math.max(s, e));
                            for (let p = min; p <= max; p++) {
                                if (!indices.includes(p - 1)) indices.push(p - 1);
                            }
                        }
                    } else {
                        const p = parseInt(part, 10);
                        if (!isNaN(p) && p >= 1 && p <= maxCount && !indices.includes(p - 1)) {
                            indices.push(p - 1);
                        }
                    }
                }

                return indices.length > 0 ? indices : Array.from({ length: maxCount }, (_, i) => i);
            }

            // ============================================================
            // Execute Merge via PDF-Lib
            // ============================================================
            btnExecuteMerge.addEventListener("click", async () => {
                if (fileEntries.length === 0) return;

                mergeStudio.style.display = "none";
                resultStudio.style.display = "none";
                progressCard.style.display = "block";
                progressBarFill.style.width = "0%";
                progressPercent.textContent = "0%";
                progressStatus.textContent = "Initializing unified PDF document...";

                try {
                    const mergedDoc = await PDFLib.PDFDocument.create();
                    const totalFiles = fileEntries.length;
                    let totalCopiedPages = 0;

                    for (let fIdx = 0; fIdx < totalFiles; fIdx++) {
                        const entry = fileEntries[fIdx];
                        progressStatus.textContent = `Merging file ${fIdx + 1}/${totalFiles}: ${entry.file.name}...`;

                        const pct = Math.round(((fIdx + 1) / (totalFiles + 1)) * 90);
                        progressBarFill.style.width = `${pct}%`;
                        progressPercent.textContent = `${pct}%`;

                        const srcDoc = await PDFLib.PDFDocument.load(entry.buffer.slice(0));
                        const pageIndices = parseRangeIndices(entry.rangeText, entry.pageCount);

                        const copiedPages = await mergedDoc.copyPages(srcDoc, pageIndices);
                        totalCopiedPages += copiedPages.length;

                        copiedPages.forEach(p => {
                            if (entry.rotation) {
                                const curRot = p.getRotation().angle;
                                p.setRotation(PDFLib.degrees((curRot + entry.rotation) % 360));
                            }
                            mergedDoc.addPage(p);
                        });
                    }

                    progressStatus.textContent = "Optimizing and saving PDF document...";
                    progressBarFill.style.width = "96%";
                    progressPercent.textContent = "96%";

                    const mergedBytes = await mergedDoc.save({ useObjectStreams: true });
                    mergedResultBlob = new Blob([mergedBytes], { type: "application/pdf" });

                    let outName = outputNameInput.value.trim() || "merged-document.pdf";
                    if (!outName.toLowerCase().endsWith(".pdf")) outName += ".pdf";
                    mergedResultFilename = outName;

                    progressBarFill.style.width = "100%";
                    progressPercent.textContent = "100%";

                    // Show celebration result screen
                    progressCard.style.display = "none";
                    resultStudio.style.display = "block";

                    resFilesVal.textContent = `${totalFiles} ${totalFiles === 1 ? 'File' : 'Files'}`;
                    resPagesVal.textContent = `${totalCopiedPages} ${totalCopiedPages === 1 ? 'Page' : 'Pages'}`;
                    resSizeVal.textContent = formatBytes(mergedResultBlob.size);

                    showToast(`Successfully merged ${totalFiles} PDF files!`, "success");
                } catch (err) {
                    console.error("Merge error:", err);
                    progressCard.style.display = "none";
                    mergeStudio.style.display = "block";
                    showToast("Error merging files: " + err.message, "error");
                }
            });

            // Download Trigger
            btnDownloadResult.addEventListener("click", () => {
                if (!mergedResultBlob) return;
                downloadBlob(mergedResultBlob, mergedResultFilename);
                showToast(`Downloaded: ${mergedResultFilename}`, "success");
            });
        });
