/**
 * appRenderer.js: Logic for generating HTML cards from APPS_DATA
 */
import { APPS_DATA } from './appData.js';

export function renderAppCards(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = APPS_DATA.map(app => `
        <article class="app-card" data-id="${app.id}">
            <div class="app-card-inner">
                <div class="app-icon-container">
                    <img src="${app.iconPath}" alt="${app.title} Icon" class="app-icon" onerror="this.src='https://placehold.co/100x100?text=${app.title.charAt(0)}'">
                </div>
                <div class="app-info">
                    <h3 class="app-title">${app.title}</h3>
                    <p class="app-description">${app.description}</p>
                </div>
                <div class="app-card-footer">
                    <a href="${app.playStoreUrl}" target="_blank" class="btn-view-store">
                        View on Play Store
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                    </a>
                </div>
            </div>
        </article>
    `).join('');
}
