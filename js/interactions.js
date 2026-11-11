/**
 * THE KANTARA RESTAURANT - INTERACTIONS & DEMO BOOKING ENGINE
 * Handles menu filtering, dish reservations, zone selection, form validation, demo booking modal, and FAQs.
 */

// ==========================================
// MENU INTERACTIONS
// ==========================================

function filterDishes(type) {
  const allBtn = document.getElementById('filter-all');
  const vegBtn = document.getElementById('filter-veg');
  const nonvegBtn = document.getElementById('filter-nonveg');

  [allBtn, vegBtn, nonvegBtn].forEach(b => {
    if (b) {
      b.classList.remove('bg-secondary-fixed', 'text-primary', 'font-semibold');
      b.classList.add('bg-surface-container-highest', 'text-on-surface');
    }
  });

  const activeBtn = document.getElementById('filter-' + type);
  if (activeBtn) {
    activeBtn.classList.remove('bg-surface-container-highest', 'text-on-surface');
    activeBtn.classList.add('bg-secondary-fixed', 'text-primary', 'font-semibold');
  }

  const items = document.querySelectorAll('.dish-item');
  items.forEach(item => {
    const itemType = item.getAttribute('data-type');
    if (type === 'all' || itemType === type) {
      item.style.display = '';
      item.classList.remove('hidden');
    } else {
      item.style.display = 'none';
      item.classList.add('hidden');
    }
  });
}

function orderQuickNote(dishName) {
  try {
    sessionStorage.setItem('kantara_dish_note', `Requested dish: ${dishName}`);
  } catch (e) {}
  window.location.href = `contact.html?dish=${encodeURIComponent(dishName)}#reservation`;
}

// ==========================================
// RESERVATIONS & BOOKING ENGINE
// ==========================================

let currentGuests = 4;
let selectedDateStr = 'Today, Nov 15';
let selectedMealStr = 'Lunch (12 – 3:30 PM)';
let selectedSlotStr = '01:15 PM';
let selectedZoneName = 'Grand Cathedral';

function selectZone(zone, el) {
  document.querySelectorAll('.zone-card').forEach(card => {
    card.classList.remove('ring-2', 'ring-primary', 'bg-surface-container');
    card.classList.add('bg-surface-container-high/60');
    const badge = card.querySelector('.zone-badge');
    if (badge) badge.className = 'zone-badge w-2.5 h-2.5 rounded-full bg-transparent';
  });

  el.classList.add('ring-2', 'ring-primary', 'bg-surface-container');
  el.classList.remove('bg-surface-container-high/60');
  const activeBadge = el.querySelector('.zone-badge');
  if (activeBadge) activeBadge.className = 'zone-badge w-2.5 h-2.5 rounded-full bg-secondary';

  const hiddenInput = document.getElementById('selected-zone');
  if (hiddenInput) hiddenInput.value = zone;

  const zoneNames = {
    cathedral: 'Grand Cathedral (Vaulted Bamboo Rafters)',
    enclave: 'Artisan Teak (Illuminated Tree of Life Alcove)',
    transit: 'Express Transit (Priority 18-min Service)'
  };
  selectedZoneName = zoneNames[zone] || zone;
}

function quickDate(type, btn) {
  document.querySelectorAll('.date-chip').forEach(b => {
    b.className = 'date-chip px-space-sm py-1.5 rounded text-caption font-label-cta uppercase bg-surface-container text-on-surface hover:bg-surface-container-high';
  });
  btn.className = 'date-chip px-space-sm py-1.5 rounded text-caption font-label-cta uppercase bg-primary text-on-primary';
  selectedDateStr = btn.textContent.trim();
}

function switchMeal(meal, btn) {
  document.querySelectorAll('.meal-btn').forEach(b => {
    b.className = 'meal-btn py-2 rounded font-label-cta text-label-cta uppercase text-on-surface-variant hover:text-primary transition-all';
  });
  btn.className = 'meal-btn py-2 rounded font-label-cta text-label-cta uppercase bg-primary text-on-primary transition-all';
  selectedMealStr = btn.textContent.trim();

  const container = document.getElementById('slot-container');
  if (!container) return;

  if (meal === 'lunch') {
    container.innerHTML = `
      <button type="button" onclick="selectSlot(this)" class="slot-chip px-3 py-1.5 rounded bg-surface-container-high text-primary font-body-sm text-body-sm hover:bg-secondary-fixed">12:30 PM</button>
      <button type="button" onclick="selectSlot(this)" class="slot-chip px-3 py-1.5 rounded bg-primary text-secondary-fixed-dim font-body-sm text-body-sm shadow-sm font-medium">01:15 PM (Popular)</button>
      <button type="button" onclick="selectSlot(this)" class="slot-chip px-3 py-1.5 rounded bg-surface-container-high text-primary font-body-sm text-body-sm hover:bg-secondary-fixed">01:45 PM</button>
      <button type="button" onclick="selectSlot(this)" class="slot-chip px-3 py-1.5 rounded bg-surface-container-high text-primary font-body-sm text-body-sm hover:bg-secondary-fixed">02:15 PM</button>
      <button type="button" onclick="selectSlot(this)" class="slot-chip px-3 py-1.5 rounded bg-surface-container-high text-primary font-body-sm text-body-sm hover:bg-secondary-fixed">02:45 PM</button>
    `;
    selectedSlotStr = '01:15 PM';
  } else if (meal === 'tea') {
    container.innerHTML = `
      <button type="button" onclick="selectSlot(this)" class="slot-chip px-3 py-1.5 rounded bg-primary text-secondary-fixed-dim font-body-sm text-body-sm shadow-sm font-medium">04:30 PM (Filter Kaapi)</button>
      <button type="button" onclick="selectSlot(this)" class="slot-chip px-3 py-1.5 rounded bg-surface-container-high text-primary font-body-sm text-body-sm hover:bg-secondary-fixed">05:15 PM</button>
      <button type="button" onclick="selectSlot(this)" class="slot-chip px-3 py-1.5 rounded bg-surface-container-high text-primary font-body-sm text-body-sm hover:bg-secondary-fixed">06:00 PM (Sunset)</button>
    `;
    selectedSlotStr = '04:30 PM';
  } else {
    container.innerHTML = `
      <button type="button" onclick="selectSlot(this)" class="slot-chip px-3 py-1.5 rounded bg-surface-container-high text-primary font-body-sm text-body-sm hover:bg-secondary-fixed">07:15 PM</button>
      <button type="button" onclick="selectSlot(this)" class="slot-chip px-3 py-1.5 rounded bg-primary text-secondary-fixed-dim font-body-sm text-body-sm shadow-sm font-medium">08:00 PM (Peak Dining)</button>
      <button type="button" onclick="selectSlot(this)" class="slot-chip px-3 py-1.5 rounded bg-surface-container-high text-primary font-body-sm text-body-sm hover:bg-secondary-fixed">08:45 PM</button>
      <button type="button" onclick="selectSlot(this)" class="slot-chip px-3 py-1.5 rounded bg-surface-container-high text-primary font-body-sm text-body-sm hover:bg-secondary-fixed">09:30 PM</button>
    `;
    selectedSlotStr = '08:00 PM';
  }
}

function selectSlot(btn) {
  document.querySelectorAll('.slot-chip').forEach(s => {
    s.className = 'slot-chip px-3 py-1.5 rounded bg-surface-container-high text-primary font-body-sm text-body-sm hover:bg-secondary-fixed';
  });
  btn.className = 'slot-chip px-3 py-1.5 rounded bg-primary text-secondary-fixed-dim font-body-sm text-body-sm shadow-sm font-medium';
  selectedSlotStr = btn.textContent.replace('(Popular)', '').replace('(Filter Kaapi)', '').replace('(Sunset)', '').replace('(Peak Dining)', '').trim();
}

function changeGuestCount(delta) {
  currentGuests = Math.max(1, Math.min(24, currentGuests + delta));
  const el = document.getElementById('guest-count');
  if (el) {
    el.innerText = currentGuests + (currentGuests === 1 ? ' Guest' : ' Guests');
  }
}

// Form validation & Confirmation Modal
function handleBookingSubmit(event) {
  if (event) event.preventDefault();

  const nameInput = document.getElementById('guest-name') || document.querySelector('input[placeholder*="Gowda"]') || document.querySelector('input[type="text"][required]');
  const phoneInput = document.getElementById('guest-phone') || document.querySelector('input[type="tel"][required]');
  const emailInput = document.getElementById('guest-email') || document.querySelector('input[type="email"]');
  const notesInput = document.getElementById('guest-notes') || document.querySelector('textarea') || document.querySelector('input[placeholder*="dietary" i]');
  const occasionSelect = document.getElementById('dining-occasion') || document.querySelector('select');

  const name = nameInput ? nameInput.value.trim() : 'Honored Guest';
  const phone = phoneInput ? phoneInput.value.trim() : '';
  const email = emailInput ? emailInput.value.trim() : 'Not provided';
  const notes = notesInput ? notesInput.value.trim() : 'Standard Table Setup';
  const occasion = occasionSelect ? occasionSelect.options[occasionSelect.selectedIndex]?.text : 'Family Dining';

  // Basic Validation
  if (!name || name.length < 2) {
    alert('Please enter a valid guest name.');
    if (nameInput) nameInput.focus();
    return false;
  }

  // Validate phone: at least 8 digits
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  if (!cleanPhone || cleanPhone.length < 8) {
    alert('Please enter a valid phone number for table confirmation.');
    if (phoneInput) phoneInput.focus();
    return false;
  }

  // Generate Reference ID
  const refCode = 'KT-' + Math.floor(1000 + Math.random() * 9000);

  // Show Confirmation Modal
  showConfirmationModal({
    refCode,
    name,
    phone: phone.startsWith('+91') ? phone : '+91 ' + phone,
    email: email || 'Not provided',
    zone: selectedZoneName,
    date: selectedDateStr,
    meal: selectedMealStr,
    slot: selectedSlotStr,
    guests: currentGuests + (currentGuests === 1 ? ' Guest' : ' Guests'),
    occasion,
    notes: notes || 'None specified'
  });

  return false;
}

function showConfirmationModal(data) {
  let modalBackdrop = document.getElementById('reservation-modal-backdrop');
  if (!modalBackdrop) {
    modalBackdrop = document.createElement('div');
    modalBackdrop.id = 'reservation-modal-backdrop';
    modalBackdrop.className = 'reservation-modal-backdrop';
    document.body.appendChild(modalBackdrop);
  }

  modalBackdrop.innerHTML = `
    <div class="reservation-modal p-6 md:p-8" onclick="event.stopPropagation()">
      <div class="flex items-center justify-between pb-4 border-b border-sand-beige/40">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 rounded-full bg-forest-900 text-gold-400 flex items-center justify-center shrink-0">
            <span class="material-symbols-outlined text-[28px]" style="font-variation-settings: 'FILL' 1;">check_circle</span>
          </div>
          <div>
            <span class="font-label-eyebrow text-[11px] uppercase tracking-widest text-secondary block">Table Request Received</span>
            <h3 class="font-headline-md text-headline-md text-primary font-semibold">Demo Reservation Confirmed</h3>
          </div>
        </div>
        <button onclick="closeConfirmationModal()" class="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors" aria-label="Close dialog">
          <span class="material-symbols-outlined text-[20px]">close</span>
        </button>
      </div>

      <!-- Demo Disclaimer Alert -->
      <div class="mt-4 p-3 bg-secondary-container/30 border border-secondary/30 rounded-lg flex items-start gap-2.5 text-on-surface">
        <span class="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">info</span>
        <div class="text-caption font-caption leading-relaxed">
          <strong class="font-semibold text-primary">Demonstration Website:</strong> This reservation summary is an interactive frontend demo. No actual booking has been processed or recorded in a production database.
        </div>
      </div>

      <!-- Summary Card Details -->
      <div class="mt-5 space-y-3 bg-surface-container-lowest p-4 rounded-xl border border-sand-beige/30">
        <div class="flex justify-between items-center py-1 border-b border-surface-container">
          <span class="font-caption uppercase text-on-surface-variant tracking-wider">Reference Code</span>
          <span class="font-headline-sm text-sm font-bold text-primary px-2.5 py-0.5 bg-secondary-fixed/50 rounded">${data.refCode}</span>
        </div>
        <div class="flex justify-between items-center py-1 border-b border-surface-container">
          <span class="font-caption uppercase text-on-surface-variant tracking-wider">Guest Name</span>
          <span class="font-body-md text-sm font-medium text-primary">${data.name}</span>
        </div>
        <div class="flex justify-between items-center py-1 border-b border-surface-container">
          <span class="font-caption uppercase text-on-surface-variant tracking-wider">Contact Phone</span>
          <span class="font-body-md text-sm text-on-surface">${data.phone}</span>
        </div>
        <div class="flex justify-between items-center py-1 border-b border-surface-container">
          <span class="font-caption uppercase text-on-surface-variant tracking-wider">Seating Zone</span>
          <span class="font-body-md text-sm text-on-surface text-right max-w-[240px] truncate">${data.zone}</span>
        </div>
        <div class="flex justify-between items-center py-1 border-b border-surface-container">
          <span class="font-caption uppercase text-on-surface-variant tracking-wider">Date & Time</span>
          <span class="font-body-md text-sm font-semibold text-secondary">${data.date} • ${data.slot}</span>
        </div>
        <div class="flex justify-between items-center py-1 border-b border-surface-container">
          <span class="font-caption uppercase text-on-surface-variant tracking-wider">Party Size</span>
          <span class="font-body-md text-sm font-semibold text-primary">${data.guests}</span>
        </div>
        <div class="flex justify-between items-start py-1">
          <span class="font-caption uppercase text-on-surface-variant tracking-wider">Special Request</span>
          <span class="font-body-sm text-xs text-on-surface-variant text-right max-w-[240px]">${data.notes}</span>
        </div>
      </div>

      <!-- Action buttons -->
      <div class="mt-6 flex flex-col sm:flex-row items-center gap-3">
        <button onclick="closeConfirmationModal()" class="w-full sm:w-1/2 h-11 bg-surface-container hover:bg-surface-container-high text-primary font-label-cta text-label-cta uppercase tracking-wider rounded transition-colors">
          Book Another
        </button>
        <a href="index.html" class="w-full sm:w-1/2 h-11 bg-secondary-fixed hover:bg-secondary-fixed-dim text-primary font-label-cta text-label-cta uppercase tracking-wider rounded transition-colors flex items-center justify-center font-semibold">
          Return to Home
        </a>
      </div>
    </div>
  `;

  modalBackdrop.classList.add('active');
  modalBackdrop.addEventListener('click', closeConfirmationModal);
  document.body.style.overflow = 'hidden';
}

function closeConfirmationModal() {
  const modalBackdrop = document.getElementById('reservation-modal-backdrop');
  if (modalBackdrop) modalBackdrop.classList.remove('active');
  document.body.style.overflow = '';
}

// ==========================================
// FAQ ACCORDION
// ==========================================

function toggleFaq(btn) {
  const answer = btn.nextElementSibling;
  const icon = btn.querySelector('.faq-icon');
  const parent = btn.closest('.rounded-lg') || btn.parentElement;
  const isOpen = answer && answer.style.maxHeight && answer.style.maxHeight !== '0px';

  // Close all
  document.querySelectorAll('.faq-answer').forEach(el => el.style.maxHeight = null);
  document.querySelectorAll('.faq-icon').forEach(ic => ic.style.transform = 'rotate(0deg)');
  document.querySelectorAll('.faq-item').forEach(it => it.classList.remove('active'));

  if (!isOpen && answer) {
    answer.style.maxHeight = answer.scrollHeight + 'px';
    if (icon) icon.style.transform = 'rotate(180deg)';
    if (parent) parent.classList.add('active');
  }
}

// Prefill dish note if stored
document.addEventListener('DOMContentLoaded', () => {
  // Check url params, hash params or session storage
  try {
    const urlParams = new URLSearchParams(window.location.search);
    let dishParam = urlParams.get('dish') || sessionStorage.getItem('kantara_dish_note');
    
    // Also check hash for dish parameter like #reservation?dish=...
    if (!dishParam && window.location.hash.includes('dish=')) {
      const hashQuery = window.location.hash.split('?')[1];
      if (hashQuery) {
        const hashParams = new URLSearchParams(hashQuery);
        dishParam = hashParams.get('dish');
      }
    }

    if (dishParam) {
      const notesEl = document.getElementById('guest-notes') || document.querySelector('textarea') || document.querySelector('input[placeholder*="dietary" i]');
      if (notesEl) {
        notesEl.value = dishParam.startsWith('Requested dish:') ? dishParam : `Requested dish: ${dishParam}`;
      }
      sessionStorage.removeItem('kantara_dish_note');
    }
  } catch (e) {}
});
