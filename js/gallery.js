/**
 * THE KANTARA RESTAURANT - GALLERY CONTROLLER & LIGHTBOX
 * Handles category filtering, layout switching, and full-screen lightbox modal.
 */

let galleryItems = [];
let currentIndex = 0;
let visibleGalleryItems = [];

function initGallery() {
  galleryItems = Array.from(document.querySelectorAll('.gallery-trigger'));
  visibleGalleryItems = [...galleryItems];

  // Build Lightbox Modal DOM if not present
  if (!document.getElementById('lightbox-overlay')) {
    buildLightboxDOM();
  }

  // Category Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', function () {
      const category = this.getAttribute('data-category');

      // Update button active states
      filterBtns.forEach((b) => {
        b.classList.remove('active-filter', 'bg-primary-container', 'text-inverse-on-surface');
        b.classList.add('text-on-surface-variant');
      });
      this.classList.add('active-filter', 'bg-primary-container', 'text-inverse-on-surface');
      this.classList.remove('text-on-surface-variant');

      // Filter gallery cards
      filterGallery(category);
    });
  });

  // Layout View Switcher (Masonry vs Grid)
  const viewMasonryBtn = document.getElementById('viewMasonry');
  const viewGridBtn = document.getElementById('viewGrid');
  const galleryGrid = document.getElementById('galleryGrid');

  if (viewMasonryBtn && viewGridBtn && galleryGrid) {
    viewMasonryBtn.addEventListener('click', () => {
      viewMasonryBtn.classList.add('bg-surface', 'text-primary');
      viewGridBtn.classList.remove('bg-surface', 'text-primary');
      galleryGrid.classList.remove('grid-uniform');
      galleryGrid.classList.add('grid-masonry');
    });

    viewGridBtn.addEventListener('click', () => {
      viewGridBtn.classList.add('bg-surface', 'text-primary');
      viewMasonryBtn.classList.remove('bg-surface', 'text-primary');
      galleryGrid.classList.remove('grid-masonry');
      galleryGrid.classList.add('grid-uniform');
    });
  }

  // Attach Lightbox trigger listeners
  attachLightboxTriggers();
}

function filterGallery(category) {
  visibleGalleryItems = [];

  galleryItems.forEach((item) => {
    const itemCat = item.getAttribute('data-category');
    if (category === 'all' || itemCat === category) {
      item.style.display = '';
      item.classList.remove('hidden');
      visibleGalleryItems.push(item);
    } else {
      item.style.display = 'none';
      item.classList.add('hidden');
    }
  });
}

function attachLightboxTriggers() {
  galleryItems.forEach((item, index) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      // Find index within visible items
      const visibleIdx = visibleGalleryItems.indexOf(item);
      if (visibleIdx !== -1) {
        openLightbox(visibleIdx);
      } else {
        openLightbox(0);
      }
    });
  });
}

function buildLightboxDOM() {
  const overlay = document.createElement('div');
  overlay.id = 'lightbox-overlay';
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML = `
    <button class="lightbox-close" id="lightbox-close-btn" aria-label="Close Lightbox">
      <span class="material-symbols-outlined text-[24px]">close</span>
    </button>
    <button class="lightbox-btn lightbox-prev" id="lightbox-prev-btn" aria-label="Previous Image">
      <span class="material-symbols-outlined text-[28px]">chevron_left</span>
    </button>
    <button class="lightbox-btn lightbox-next" id="lightbox-next-btn" aria-label="Next Image">
      <span class="material-symbols-outlined text-[28px]">chevron_right</span>
    </button>
    <div class="lightbox-container" id="lightbox-container">
      <div class="lightbox-image-wrapper">
        <img id="lightbox-img" src="" alt="The Kantara Gallery Showcase" />
      </div>
      <div class="lightbox-info">
        <div class="flex items-center justify-center gap-2 mb-1.5">
          <span id="lightbox-subtitle" class="font-label-eyebrow text-[11px] uppercase tracking-widest text-secondary-fixed"></span>
          <span class="text-sand-beige/60">•</span>
          <span id="lightbox-counter" class="font-caption text-caption text-cream-200"></span>
        </div>
        <h3 id="lightbox-title" class="font-headline-md text-headline-md text-pure-white mb-2"></h3>
        <p id="lightbox-desc" class="font-body-sm text-body-sm text-sand-beige/90 max-w-xl mx-auto"></p>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  // Close triggers
  document.getElementById('lightbox-close-btn').addEventListener('click', closeLightbox);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeLightbox();
  });

  // Next / Prev triggers
  document.getElementById('lightbox-prev-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    navigateLightbox(-1);
  });
  document.getElementById('lightbox-next-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    navigateLightbox(1);
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    const isLBOpen = overlay.classList.contains('active');
    if (!isLBOpen) return;

    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
  });
}

function openLightbox(index) {
  if (visibleGalleryItems.length === 0) return;
  currentIndex = (index + visibleGalleryItems.length) % visibleGalleryItems.length;

  const item = visibleGalleryItems[currentIndex];
  const fullImg = item.getAttribute('data-full') || item.querySelector('img')?.src;
  const title = item.getAttribute('data-title') || item.querySelector('h3, h4')?.textContent || 'The Kantara Showcase';
  const subtitle = item.getAttribute('data-subtitle') || 'Architectural & Culinary Heritage';
  const desc = item.getAttribute('data-desc') || item.querySelector('p')?.textContent || '';

  const imgEl = document.getElementById('lightbox-img');
  imgEl.src = fullImg;
  imgEl.alt = title;

  document.getElementById('lightbox-title').textContent = title;
  document.getElementById('lightbox-subtitle').textContent = subtitle;
  document.getElementById('lightbox-desc').textContent = desc;
  document.getElementById('lightbox-counter').textContent = `Plate ${currentIndex + 1} of ${visibleGalleryItems.length}`;

  const overlay = document.getElementById('lightbox-overlay');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const overlay = document.getElementById('lightbox-overlay');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = '';
}

function navigateLightbox(direction) {
  openLightbox(currentIndex + direction);
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.gallery-trigger')) {
    initGallery();
  }
});
