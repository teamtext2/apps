/**
 * Spac2 x Photopea — Live API Integration & Minimalist Studio
 */
(function () {
    "use strict";

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
    // Toast Notification
    // =========================================================================
    function showToast(message) {
        let container = document.getElementById("toast-container");
        if (!container) {
            container = document.createElement("div");
            container.id = "toast-container";
            document.body.appendChild(container);
        }

        const toast = document.createElement("div");
        toast.className = "toast";
        toast.textContent = message;
        container.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = "0";
            toast.style.transform = "translateY(8px) scale(0.96)";
            toast.style.transition = "all 0.22s ease";
            setTimeout(() => toast.remove(), 230);
        }, 3200);
    }

    function downloadBuffer(buffer, filename, mimeType) {
        const blob = new Blob([buffer], { type: mimeType });
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
    // Main Application
    // =========================================================================
    document.addEventListener("DOMContentLoaded", () => {
        updateThemeIcons(getActiveTheme());

        const themeBtn = document.getElementById("theme-toggle-btn");
        if (themeBtn) themeBtn.addEventListener("click", toggleTheme);

        // Views & Elements
        const landingView = document.getElementById("landing-view");
        const editorView = document.getElementById("editor-view");
        const dropzone = document.getElementById("dropzone");
        const fileInput = document.getElementById("file-input");
        const btnSelectFile = document.getElementById("btn-select-file");
        const btnOpenBlank = document.getElementById("btn-open-blank");
        const btnBackUpload = document.getElementById("btn-back-upload");
        const btnPushFile = document.getElementById("btn-push-file");
        const editorFileLabel = document.getElementById("editor-file-label");
        const iframeLoader = document.getElementById("iframe-loader");
        const loaderStatusText = document.getElementById("loader-status-text");
        const photopeaFrame = document.getElementById("photopea-frame");
        const exportButtons = document.querySelectorAll(".export-btn");

        // Photopea API State
        let isPhotopeaLoaded = false;
        let isPhotopeaReady = false;
        let pendingBuffer = null;
        let pendingFileName = "spac2-project";
        let pendingExportFormat = null;
        let currentBaseName = "spac2-project";

        function setView(mode) {
            const isEditor = mode === "editor";
            landingView.hidden = isEditor;
            editorView.hidden = !isEditor;
            document.body.classList.toggle("in-editor-mode", isEditor);
        }

        function buildPhotopeaUrl() {
            const themeIndex = getActiveTheme() === "light" ? 1 : 0;
            const config = {
                environment: {
                    theme: themeIndex
                }
            };
            return "https://www.photopea.com/#" + encodeURIComponent(JSON.stringify(config));
        }

        function ensurePhotopeaBooted() {
            if (isPhotopeaLoaded) return;
            isPhotopeaLoaded = true;
            isPhotopeaReady = false;
            iframeLoader.hidden = false;
            loaderStatusText.textContent = "Connecting to Photopea API...";
            photopeaFrame.src = buildPhotopeaUrl();
        }

        function pushBufferToPhotopea(buffer, fileName) {
            if (!photopeaFrame.contentWindow) return;
            currentBaseName = (fileName || "spac2-project").replace(/\.[^.]+$/, "");
            editorFileLabel.textContent = fileName || "Untitled";
            editorFileLabel.title = fileName || "Untitled";
            photopeaFrame.contentWindow.postMessage(buffer, "*");
            showToast(`Opened ${fileName} in Photopea`);
        }

        async function handleSelectedFile(file) {
            if (!file) return;
            try {
                const buffer = await file.arrayBuffer();
                setView("editor");
                editorFileLabel.textContent = file.name;
                editorFileLabel.title = file.name;

                if (isPhotopeaReady) {
                    pushBufferToPhotopea(buffer, file.name);
                } else {
                    pendingBuffer = buffer;
                    pendingFileName = file.name;
                    ensurePhotopeaBooted();
                }
            } catch (err) {
                console.error("File read error:", err);
                showToast("Failed to read file.");
            }
        }

        // Listen for Photopea postMessage API events
        window.addEventListener("message", (e) => {
            if (!photopeaFrame.contentWindow || e.source !== photopeaFrame.contentWindow) return;

            // Photopea sends ArrayBuffer when saveToOE() completes
            if (e.data instanceof ArrayBuffer) {
                if (pendingExportFormat) {
                    const fmt = pendingExportFormat;
                    pendingExportFormat = null;
                    const mimeMap = {
                        png: "image/png",
                        jpg: "image/jpeg",
                        psd: "application/octet-stream"
                    };
                    downloadBuffer(e.data, `${currentBaseName}.${fmt}`, mimeMap[fmt] || "application/octet-stream");
                    showToast(`Exported ${currentBaseName}.${fmt}`);
                }
                return;
            }

            if (e.data === "done") {
                if (!isPhotopeaReady) {
                    isPhotopeaReady = true;
                    iframeLoader.hidden = true;

                    if (pendingBuffer) {
                        const buf = pendingBuffer;
                        const name = pendingFileName;
                        pendingBuffer = null;
                        pushBufferToPhotopea(buf, name);
                    } else {
                        editorFileLabel.textContent = "Blank Canvas";
                    }
                }
            }
        });

        // Dropzone & File Picker
        btnSelectFile.addEventListener("click", (e) => {
            e.stopPropagation();
            fileInput.click();
        });

        dropzone.addEventListener("click", () => fileInput.click());

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
                handleSelectedFile(e.dataTransfer.files[0]);
            }
        });

        fileInput.addEventListener("change", () => {
            if (fileInput.files && fileInput.files.length > 0) {
                handleSelectedFile(fileInput.files[0]);
                fileInput.value = "";
            }
        });

        // Clipboard Paste (Ctrl+V) on landing screen
        window.addEventListener("paste", (e) => {
            if (!editorView.hidden) return;
            const items = e.clipboardData?.items;
            if (!items) return;

            for (let i = 0; i < items.length; i++) {
                if (items[i].type.indexOf("image") !== -1) {
                    const file = items[i].getAsFile();
                    if (file) {
                        const ext = file.type.split("/")[1] || "png";
                        const named = new File([file], `pasted-image.${ext}`, { type: file.type });
                        handleSelectedFile(named);
                        break;
                    }
                }
            }
        });

        // Blank Editor Button
        btnOpenBlank.addEventListener("click", (e) => {
            e.stopPropagation();
            pendingBuffer = null;
            currentBaseName = "spac2-project";
            setView("editor");
            editorFileLabel.textContent = "Blank Studio";
            ensurePhotopeaBooted();
        });

        // Editor Toolbar Controls
        btnBackUpload.addEventListener("click", () => {
            setView("landing");
        });

        btnPushFile.addEventListener("click", () => {
            fileInput.click();
        });

        exportButtons.forEach((btn) => {
            btn.addEventListener("click", () => {
                if (!isPhotopeaReady || !photopeaFrame.contentWindow) {
                    showToast("Photopea is still loading...");
                    return;
                }
                const fmt = btn.getAttribute("data-format") || "png";
                pendingExportFormat = fmt;
                photopeaFrame.contentWindow.postMessage(`app.activeDocument.saveToOE("${fmt}");`, "*");
            });
        });
    });
})();
