/**
 * THE KANTARA RESTAURANT - MAIN ENTRY POINT
 * Coordinates page modules, smooth scrolling, and dynamic interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
  console.log('The Kantara Restaurant - Architectural Dining Experience Initialized.');

  // Image load error fallback handler
  document.querySelectorAll('img').forEach((img) => {
    img.addEventListener('error', function () {
      if (this.src.includes('logo')) {
        this.src = 'assets/images/logo.svg';
      }
    });
  });

  // Ensure all external links open securely
  document.querySelectorAll('a[target="_blank"]').forEach((link) => {
    link.setAttribute('rel', 'noopener noreferrer');
  });
});
