/**
 * THE KANTARA RESTAURANT - NAVIGATION CONTROLLER
 * Handles mobile drawer, bottom app bar, active link states, and header scroll effects.
 */

function toggleDrawer(open) {
  const drawer = document.getElementById('slide-drawer');
  const backdrop = document.getElementById('drawer-backdrop');
  if (!drawer || !backdrop) return;

  if (open) {
    drawer.classList.remove('-translate-x-full');
    drawer.classList.add('open');
    backdrop.classList.remove('opacity-0', 'pointer-events-none');
    backdrop.classList.add('opacity-100', 'active');
    document.body.style.overflow = 'hidden';
  } else {
    drawer.classList.add('-translate-x-full');
    drawer.classList.remove('open');
    backdrop.classList.add('opacity-0', 'pointer-events-none');
    backdrop.classList.remove('opacity-100', 'active');
    document.body.style.overflow = '';
  }
}

function initNavigation() {
  // Mobile drawer buttons
  const openBtn = document.getElementById('menu-open-btn');
  const closeBtn = document.getElementById('menu-close-btn');
  const backdrop = document.getElementById('drawer-backdrop');

  if (openBtn) {
    openBtn.addEventListener('click', () => toggleDrawer(true));
  }
  if (closeBtn) {
    closeBtn.addEventListener('click', () => toggleDrawer(false));
  }
  if (backdrop) {
    backdrop.addEventListener('click', () => toggleDrawer(false));
  }

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') toggleDrawer(false);
  });

  // Header scroll appearance
  const header = document.querySelector('header');
  function onScroll() {
    if (!header) return;
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Active page state highlighting
  setActiveNav();

  // Smooth scroll for internal anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        toggleDrawer(false);
        const headerHeight = header ? header.offsetHeight : 80;
        const targetPos = targetEl.getBoundingClientRect().top + window.pageYOffset - headerHeight - 16;
        window.scrollTo({
          top: targetPos,
          behavior: 'smooth'
        });
      }
    });
  });
}

function setActiveNav() {
  // Determine current page filename
  let path = window.location.pathname.split('/').pop() || 'index.html';
  if (path === '' || path === '/') path = 'index.html';

  const pageMap = {
    'index.html': 'home',
    'about.html': 'about',
    'menu.html': 'menu',
    'gallery.html': 'gallery',
    'contact.html': 'contact'
  };

  const currentPage = pageMap[path] || 'home';

  // Desktop links
  document.querySelectorAll('nav a[data-page]').forEach((link) => {
    if (link.getAttribute('data-page') === currentPage) {
      link.classList.add('active', 'text-secondary-fixed');
      link.classList.remove('text-inverse-on-surface/80');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('active', 'text-secondary-fixed');
      link.removeAttribute('aria-current');
    }
  });

  // Drawer links
  document.querySelectorAll('#slide-drawer a[data-page]').forEach((link) => {
    if (link.getAttribute('data-page') === currentPage) {
      link.classList.add('text-secondary-fixed', 'font-bold');
      link.setAttribute('aria-current', 'page');
    }
  });

  // Bottom nav links
  document.querySelectorAll('.bottom-nav-item[data-page]').forEach((item) => {
    if (item.getAttribute('data-page') === currentPage) {
      item.classList.add('active', 'text-primary', 'font-bold');
      item.classList.remove('text-on-surface-variant');
      item.setAttribute('aria-current', 'page');
    } else {
      item.classList.remove('active', 'text-primary', 'font-bold');
      item.classList.add('text-on-surface-variant');
      item.removeAttribute('aria-current');
    }
  });
}

document.addEventListener('DOMContentLoaded', initNavigation);
