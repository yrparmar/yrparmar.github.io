import { APPS_DATA } from './modules/appData.js';
import { renderAppCards } from './modules/appRenderer.js';

// Portfolio Initialization
document.addEventListener('DOMContentLoaded', () => {
    console.log('YR APPS Portfolio - Initializing Phase 3');
    
    // Render apps from data module
    renderAppCards('app-grid-container');

    // --- ADVANCED ANIMATIONS ---

    // 1. Scroll Reveal Logic (Intersection Observer)
    const revealOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
            }
        });
    }, revealOptions);

    // Initial reveal for hero elements and sections
    document.querySelectorAll('.hero, .section-container, .footer').forEach(el => {
        el.classList.add('reveal');
        revealObserver.observe(el);
    });

    // 2. Fluid Blob Parallax (Lerp Smoothing)
    const blobs = [
        { el: document.querySelector('.blob-1'), x: 0, y: 0, targetX: 0, targetY: 0, factor: 0.05 },
        { el: document.querySelector('.blob-2'), x: 0, y: 0, targetX: 0, targetY: 0, factor: 0.03 }
    ];

    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 100;
        const y = (e.clientY / window.innerHeight - 0.5) * 100;
        
        blobs[0].targetX = x * 0.5;
        blobs[0].targetY = y * 0.5;
        blobs[1].targetX = x * -0.3;
        blobs[1].targetY = y * -0.3;
    });

    function animateBlobs() {
        blobs.forEach(blob => {
            if (!blob.el) return;
            // Linear Interpolation (Lerp)
            blob.x += (blob.targetX - blob.x) * blob.factor;
            blob.y += (blob.targetY - blob.y) * blob.factor;
            blob.el.style.transform = `translate(${blob.x}px, ${blob.y}px)`;
        });
        requestAnimationFrame(animateBlobs);
    }
    animateBlobs();

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
