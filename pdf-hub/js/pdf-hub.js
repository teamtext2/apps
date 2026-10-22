/**
 * Spac2 PDF Hub — Main Dashboard Logic (English)
 * Reactive Instant Search & Category Filter
 */

document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("tools-grid");
    const searchInput = document.getElementById("tool-search-input");
    const clearSearchBtn = document.getElementById("clear-search-btn");
    const countBadge = document.getElementById("tools-count");
    const emptyState = document.getElementById("empty-state");

    let searchQuery = "";

    function removeDiacritics(str) {
        if (!str) return "";
        return str
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[đĐ]/g, "d")
            .trim();
    }

    function createToolCard(tool) {
        const card = document.createElement("a");
        card.href = tool.url;
        card.className = "tool-card";

        let badgeHtml = "";
        if (tool.hot) {
            badgeHtml += `<span class="tool-card-badge badge-hot">Popular</span>`;
        }
        if (tool.ai) {
            badgeHtml += `<span class="tool-card-badge badge-ai">AI Vision</span>`;
        }
        badgeHtml += `<span class="tool-card-badge">${tool.badge}</span>`;

        card.innerHTML = `
            <div class="tool-card-top">
                <div class="tool-card-icon">
                    <i data-lucide="${tool.icon}" style="width: 22px; height: 22px;"></i>
                </div>
                <div class="tool-card-badges">
                    ${badgeHtml}
                </div>
            </div>
            <div class="tool-card-title-group">
                <div class="tool-card-title">
                    <span>${tool.title}</span>
                </div>
                <div class="tool-card-vi-title">${tool.subtitle || ""}</div>
            </div>
            <p class="tool-card-desc">${tool.desc}</p>
            <div class="tool-card-footer">
                <span class="tool-card-tag">
                    <i data-lucide="check-circle" style="width: 13px; height: 13px; color: #4ade80;"></i>
                    <span>${tool.tag || "Client-Side"}</span>
                </span>
                <span class="tool-card-action">
                    <span>Open tool</span>
                    <i data-lucide="arrow-right" style="width: 14px; height: 14px;"></i>
                </span>
            </div>
        `;
        return card;
    }

    function renderTools() {
        if (!grid) return;

        const rawQuery = searchQuery.trim().toLowerCase();
        const normQuery = removeDiacritics(searchQuery);

        const filtered = PDF_TOOLS.filter(tool => {
            if (!rawQuery) return true;

            const toolRaw = `${tool.title} ${tool.subtitle || ""} ${tool.desc} ${tool.badge} ${tool.keywords || ""}`.toLowerCase();
            const toolNorm = removeDiacritics(toolRaw);

            return toolRaw.includes(rawQuery) || toolNorm.includes(normQuery);
        });

        grid.innerHTML = "";

        if (filtered.length === 0) {
            if (emptyState) emptyState.style.display = "block";
        } else {
            if (emptyState) emptyState.style.display = "none";

            const flatGrid = document.createElement("div");
            flatGrid.className = "tool-grid";
            filtered.forEach(tool => {
                flatGrid.appendChild(createToolCard(tool));
            });
            grid.appendChild(flatGrid);
        }

        if (countBadge) {
            countBadge.textContent = `${filtered.length} ${filtered.length === 1 ? 'tool' : 'tools'}`;
        }

        if (clearSearchBtn) {
            clearSearchBtn.style.display = searchQuery ? "flex" : "none";
        }

        if (window.lucide) {
            window.lucide.createIcons();
        }
    }

    // Search events
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            searchQuery = e.target.value;
            renderTools();
        });

        // Shortcut '/' to focus search
        document.addEventListener("keydown", (e) => {
            if (e.key === "/" && document.activeElement !== searchInput) {
                e.preventDefault();
                searchInput.focus();
            } else if (e.key === "Escape" && document.activeElement === searchInput) {
                searchInput.blur();
                searchInput.value = "";
                searchQuery = "";
                renderTools();
            }
        });
    }

    // Clear search button
    if (clearSearchBtn) {
        clearSearchBtn.addEventListener("click", () => {
            if (searchInput) {
                searchInput.value = "";
                searchQuery = "";
                searchInput.focus();
                renderTools();
            }
        });
    }



    // Initial render
    renderTools();
});
