# The Kantara Restaurant • Integrated Web Experience

A unified, responsive, and fully interconnected multi-page demonstration website for **The Kantara Restaurant**, situated along the Bangalore-Mysore expressway in Channapatna, Karnataka.

Transformed from individual Google Stitch export screens into an interconnected, production-ready frontend architecture that honors the organic bamboo and sustainable timber design identity.

---

## 1. Project Directory Architecture

```
Kantara_resturant/
│
├── index.html                   # Home Page (Bamboo Sanctuary, Bento Architecture, Signatures, Highway Map)
├── about.html                   # About Us Page (Architectural Chapters, Folklore Craft, Kitchen Manifesto)
├── menu.html                    # Culinary Menu Page (Dietary Filters, Starters, Biryani, Curries, Feasts)
├── gallery.html                 # Visual Showcase (20 Curated Plates, Category Filters, Lightbox Modal)
├── contact.html                 # Contact & Table Reservation Page (4-Step Booking Engine, Transit Concierge, FAQs)
│
├── assets/
│   └── images/
│       ├── logo.svg                         # Vector Brand Emblem (Bamboo arch & golden sun)
│       ├── logo.png                         # High-res Brand Emblem raster
│       ├── exterior_bamboo_facade.png       # Highway portico & 40ft towering bamboo arch
│       ├── cathedral_dining_hall.png        # Central nave dining hall with soaring bamboo rafters
│       ├── tree_of_life_seating.png         # Sanctuary booth enclaves beneath illuminated brass mural
│       ├── tree_of_life_mural.png           # Intricate beaten brass Tree of Life sculpture
│       ├── handi_dum_biryani.png            # Claypot Handi Dum Biryani with saffron rice
│       ├── seeraga_samba_pot_biryani.png    # Traditional Seeraga Samba short-grain biryani
│       ├── claypot_biryani_feast.png        # Ancestral claypot biryani table feast
│       ├── cumin_jeera_rice.png             # Ghee-tempered Jeera Basmati rice
│       ├── charred_seekh_kebabs.png         # Coal-fired Sigri kebabs with mint chutney
│       ├── spiced_chicken_lollipops.png     # Byadgi chili-dusted crispy golden wings
│       ├── golden_cutlets_pepper_fry.png    # Golden tawa cutlets with curry leaf tempura
│       ├── highway_pepper_curry.png         # Malnad black pepper chicken curry
│       ├── palak_paneer_gravy.png           # Stone-ground artisanal Palak Paneer
│       ├── tandoori_rotis_naan_basket.png   # Tandoori rotis, naan & roomali bread basket
│       ├── tandoori_roti_kadai_gravy.png    # Kadai gravy with blistering clay-oven rotis
│       ├── lanterns_greenery_dining.png     # Lush indoor tropical palms & hanging cane lanterns
│       ├── nocturnal_canopy_palms.png       # Exterior night view with ambient garden illumination
│       ├── kannada_neon_script.png          # Illuminated 'ದಿ ಕಾಂತಾರ' neon script with foliage
│       └── kathakali_wood_relief.png        # Hand-carved folklore timber sculptural relief
│
├── css/
│   ├── global.css               # Design tokens, CSS variables, typography, accessibility resets
│   ├── components.css           # Glassmorphic header, mobile drawer, modal, badges, accordion
│   └── responsive.css           # Breakpoints (360px to 1920px+), safe area insets, bottom nav offset
│
├── js/
│   ├── main.js                  # App bootstrap, console greetings, image error fallback handler
│   ├── navigation.js            # Mobile drawer toggle, header scroll shadow, active nav sync, smooth scroll
│   ├── gallery.js               # Category filter tabs, layout switcher (masonry/grid), full-screen lightbox
│   └── interactions.js          # Menu filter, "Reserve with Dish", 4-step booking engine, demo modal, FAQ
│
├── design.md                    # Stitch visual design system specification
├── the_kantara_restaurant_design.md # Master architectural and culinary content reference
└── README.md                    # Integration documentation, verification checklist, run instructions
```

---

## 2. Completed Pages & Feature Scope

| Page | File | Primary Features & Sections |
| :--- | :--- | :--- |
| **Home** | [`index.html`](file:///home/jagabandhu-prusty/Desktop/Kantara_resturant/index.html) | • Hero Section with architectural imagery & call-to-actions<br>• "A Place Beyond Dining" heritage story with 3 key pillars<br>• Curated Signature Dishes showcase with dietary badges<br>• Architectural Experience Bento Grid (Cathedral, Timber, Folklore)<br>• Guest Testimonials & Highway Transit Reviews<br>• Quick Table Reservation Module<br>• Location & Highway Transit Map summary |
| **About Us** | [`about.html`](file:///home/jagabandhu-prusty/Desktop/Kantara_resturant/about.html) | • Hero story: "Where Heritage Meets Modern Rest" on the Bangalore-Mysore corridor<br>• Chapter 01: The Bamboo Cathedral (Harvesting & natural aerodynamics)<br>• Chapter 02: Artistry & Folklore (Brass Tree of Life, Channapatna lacquer craft)<br>• Chapter 03: The Kitchen Manifesto (Slow coal cookery, heritage cold-pressed oils)<br>• Chapter 04: The Channapatna Sanctuary (120-car shaded courtyard, 60kW EV charging)<br>• Fivefold Purity Commitment Banner & Table Reservation CTA strip |
| **Our Menu** | [`menu.html`](file:///home/jagabandhu-prusty/Desktop/Kantara_resturant/menu.html) | • Category Filter Tabs: Starters & Kebabs, Biryani & Rice, Tandoor & Curries, Highway Feasts<br>• Dietary Toggle: All Dishes, Pure Vegetarian, Non-Vegetarian<br>• Detailed Dish Cards: authentic pricing in ₹, spice meters, dietary icons<br>• "Reserve with Dish" Quick Button on every dish card (prefills reservation form)<br>• Highway Feast prix-fixe family banquet showcase<br>• Dedicated table booking banner |
| **Gallery** | [`gallery.html`](file:///home/jagabandhu-prusty/Desktop/Kantara_resturant/gallery.html) | • Chapter I Spotlight: 3 Featured Showcase Plates (Soaring Bamboo Facade, Golden Brass Mural, Claypot Dum Biryani)<br>• Chapter II Register: 17 Curated Photographic Plates across 4 categories<br>• Category Filters: All (20), Architecture (5), Culinary (7), Folklore & Craft (4), Atmosphere (4)<br>• Layout View Switcher: Dynamic Masonry Grid vs. Uniform Exhibition Grid<br>• Full-Screen Lightbox Modal with Next/Previous navigation, keyboard shortcuts, and plate metadata |
| **Contact & Reservations** | [`contact.html`](file:///home/jagabandhu-prusty/Desktop/Kantara_resturant/contact.html) | • Architectural Triptych preview (Entrance Facade, Bamboo Cathedral Dining Hall, Tree of Life Booths)<br>• **4-Step Booking Engine**:<br>&nbsp;&nbsp;1. Seating Zone Selector (Grand Cathedral, Artisan Teak, Express Transit)<br>&nbsp;&nbsp;2. Date Chips (Today, Tomorrow, Sunday) & Meal Window (Lunch, High Tea, Dinner) with dynamic slots<br>&nbsp;&nbsp;3. Guest Counter Stepper (`- 4 +`) & Gathering Occasion selector<br>&nbsp;&nbsp;4. Contact fields (Name, Phone, Email, Special Requests)<br>• Highway Transit Concierge: Milestone 54 km waypoint, EV charging, shaded parking<br>• Interactive FAQ Accordion (4 common highway traveler questions)<br>• Private banquet inquiry panel (15+ guests) |

---

## 3. Implemented Functional Interactions

1. **Unified Navigation System**:
   - Header with active page highlighting across desktop (`data-page="..."`).
   - Sticky header glassmorphism effect that deepens shadow on scroll.
   - Mobile hamburger drawer (`#slide-drawer`) with backdrop blur, smooth slide-out transition, and Escape key / backdrop click dismissal.
   - Mobile persistent 5-tab bottom bar (`< 1024px`) with safe-area bottom inset padding.
   - Logo in header, drawer, and footer reliably redirects to `index.html`.
   - "Reserve a Table" buttons consistently route to `contact.html#reservation` with smooth scroll.

2. **Menu Category & Dietary Filtering**:
   - Quick dietary filters for `All`, `Pure Veg`, and `Non-Veg` with instant DOM visibility toggling.
   - Category anchor tabs for smooth transition between menu courses.
   - `orderQuickNote(dishName)` stores the selected dish into session storage and URL query, redirecting to `contact.html#reservation` and pre-filling the special accommodation textarea.

3. **4-Step Demonstration Booking Engine**:
   - **Zone Selection**: Visual cards toggle active borders and badges, updating the hidden input and reservation summary.
   - **Date & Meal Selection**: Quick chips update active state; meal window buttons dynamically swap out available table time slots.
   - **Guest Stepper**: Ergonomic `+` and `-` controls adjust guest count (clamped between 1 and 20 guests) and update contextual table descriptions.
   - **Form Validation**: Checks for valid name (minimum 2 characters) and valid phone number (minimum 8 digits).
   - **Confirmation Modal**: Displays a formatted reservation pass featuring a unique reference code (`KT-XXXX`), chosen zone, date, time slot, party size, and special requests, with an explicit demo disclaimer banner.

4. **Gallery Lightbox & Layout Switcher**:
   - Clicking any photographic card opens the full-screen modal with dark blurred backdrop.
   - Previous and Next controls allow cycling through images.
   - Keyboard navigation supports `ArrowLeft`, `ArrowRight`, and `Escape` to close.
   - Layout toggle switches between CSS Column Masonry and CSS Uniform Grid.

5. **Interactive FAQ Accordion**:
   - Accordion panels expand and contract smoothly with animated chevron rotation.
   - Automatically closes other open panels to maintain a clean reading experience.

---

## 4. Responsive Verification Matrix

Tested across all standard device viewports without horizontal overflow:

| Viewport Width | Device Category | Verification Result |
| :--- | :--- | :--- |
| **1920px** | Ultra-wide Desktop | Max-width containment (1380px), centered typography, high-res visual assets |
| **1440px** | Standard Desktop / Laptop | Full desktop navigation bar, 12-column grid layout, spacious margins |
| **1366px** | Typical Laptop Display | Balanced padding, crisp font rendering, no horizontal scrollbars |
| **1024px** | iPad Pro / Small Laptop | Responsive breakpoint transition, menu tabs scroll horizontally if needed |
| **768px** | iPad / Tablet Portrait | Collapses to single-column reservation form; mobile slide drawer and bottom bar active |
| **430px** | iPhone 14/15/16 Pro Max | Touch-friendly tap targets (minimum 44px), full-width cards, edge-to-edge images |
| **390px** | iPhone 12/13/14 Standard | Fluid typography, ergonomic guest counter stepper, bottom app bar with safe area inset |
| **360px** | Android Compact | Zero horizontal overflow, compact chips, comfortable touch interactions |

---

## 5. Technology Stack & Design System Fidelity

- **HTML5**: Semantic, accessible markup (`<header>`, `<main>`, `<section>`, `<aside>`, `<footer>`, `<nav>`, `<address>`).
- **Tailwind CSS (CDN)**: Exact color palette and typography configuration from Google Stitch:
  - Deep Evergreen Canopy: `#00251d` / `#173b32`
  - Warm Sand & Cream: `#fef9ef` / `#f2ede3` / `#ede8de`
  - Golden Ochre / Brass: `#c6a15b` / `#ffddb8` / `#fecb90`
  - Veg Green: `#2E7D32`
  - Non-Veg Amber/Red: `#C62828`
  - Headings: `Playfair Display` (serif)
  - Body & UI: `DM Sans` (sans-serif)
  - Icons: Google Material Symbols Outlined
- **Modular JavaScript**: Vanilla ES6+ without heavy external framework dependencies (`navigation.js`, `gallery.js`, `interactions.js`, `main.js`).
- **Asset Integrity**: 100% authentic images from the Google Stitch export, mapped to their semantic names in `assets/images/`, with SVG fallback handlers.

---

## 6. How to Run Locally

You can run the website locally using any standard static file server:

### Option A: Python 3 Built-in Server (Recommended)
```bash
# In the project directory:
python3 -m http.server 8080
```
Then open your browser and navigate to:
`http://localhost:8080`

### Option B: Node.js (npx serve)
```bash
npx serve .
```

### Option C: Direct Browser Opening
You can also open `index.html` directly in any modern web browser (Google Chrome, Mozilla Firefox, Safari, Microsoft Edge).

---

## 7. Demonstration Scope & Limitations

- **Demo Nature**: This is a frontend presentation and interactive prototype. No payment gateway, user authentication database, or live table booking API is connected.
- **Form Submissions**: Reservation form submissions validate guest input and display a demo reservation pass with QR code placeholder, without dispatching real SMS/WhatsApp messages.
- **Preserved Originals**: The original Google Stitch export directory (`stitch_the_kantara_design_system/`) remains intact in the workspace as the immutable design authority.
