import { APPS_DATA } from './modules/appData.js';
import { renderAppCards } from './modules/appRenderer.js';

// Portfolio Initialization
document.addEventListener('DOMContentLoaded', () => {
    console.log('YR APPS Portfolio - Initializing Gallery');
    
    // Render apps from data module
    renderAppCards(APPS_DATA, 'app-grid-container');

    // Dynamic blob interaction (subtle parallax)
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        const blob1 = document.querySelector('.blob-1');
        const blob2 = document.querySelector('.blob-2');
        
        if (blob1) blob1.style.transform = `translate(${x * 30}px, ${y * 30}px)`;
        if (blob2) blob2.style.transform = `translate(${x * -20}px, ${y * -20}px)`;
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
