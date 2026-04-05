/**
 * appRenderer.js: Logic for generating HTML cards from APPS_DATA
 */
import { APPS_DATA } from './appData.js';

export function renderAppCards(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = APPS_DATA.map(app => `
        <article class="app-card" data-id="${app.id}">
            <a href="${app.playStoreUrl}" target="_blank" class="app-card-link">
                <div class="app-card-inner">
                    <div class="app-icon-container">
                        <img src="${app.iconPath}" alt="${app.title} Icon" class="app-icon" onerror="this.src='https://placehold.co/100x100?text=${app.title.charAt(0)}'">
                    </div>
                    <div class="app-info">
                        <h3 class="app-title">${app.title}</h3>
                        <p class="app-description">${app.description}</p>
                    </div>
                    <div class="app-card-footer">
                        <div class="btn-view-store">
                            <img src="/icons/play_store.png" alt="Google Play" class="play-store-icon-img">
                            View on Play Store
                        </div>
                    </div>
                </div>
            </a>
        </article>
    `).join('');
}
