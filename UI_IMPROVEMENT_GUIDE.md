# UI/UX Improvement Guide for KairosCV
## Black & White Neobrutalist Design System

**Document Version:** 1.0
**Last Updated:** November 23, 2025
**Design Philosophy:** Minimalist Neobrutalism with Maximum Impact

---

## 📱 Table of Contents

1. [Design Principles](#design-principles)
2. [Desktop Layout Improvements](#desktop-layout-improvements)
3. [Mobile Layout Improvements](#mobile-layout-improvements)
4. [Color System Optimization](#color-system-optimization)
5. [Typography Enhancements](#typography-enhancements)
6. [Component-Specific Improvements](#component-specific-improvements)
7. [Accessibility Guidelines](#accessibility-guidelines)
8. [Performance Optimizations](#performance-optimizations)

---

## 🎯 Design Principles

### Core Philosophy: Bold, Simple, Functional

Our neobrutalist design system embraces:
- **Maximum Contrast:** Pure black (#000000) on pure white (#FFFFFF)
- **Bold Borders:** Thick 2-4px borders define all interactive elements
- **Hard Shadows:** Box shadows with no blur for depth perception
- **Zero Gradients:** Flat colors only, no gradients or soft transitions
- **Geometric Shapes:** Squares, rectangles, and sharp angles
- **Minimal Ornamentation:** Every element serves a purpose

### The Three Laws of Neobrutalism

1. **If it's interactive, it should look clickable** (thick borders + shadows)
2. **If it's important, make it bigger and bolder** (hierarchy through scale)
3. **If it's not needed, remove it** (ruthless minimalism)

---

## 💻 Desktop Layout Improvements

### 1. Header & Navigation

#### Current Issues
- Navigation takes up too much vertical space
- Beta badge competes with primary content
- Logo could be more prominent

#### Recommended Changes

**✅ IMPLEMENTED:**
```
┌─────────────────────────────────────────────────────────┐
│  [Menu] [Home] [Intent] [Optimize] [Contact] KairosCV BETA │
└─────────────────────────────────────────────────────────┘
```

**Future Enhancement:**
```css
/* Add hamburger menu icon for cleaner look */
.menu-icon {
  width: 40px;
  height: 40px;
  border: 3px solid black;
  box-shadow: 3px 3px 0px black;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  background: white;
  transition: all 200ms ease;
}

.menu-icon:hover {
  transform: translate(-2px, -2px);
  box-shadow: 5px 5px 0px black;
}

.menu-icon span {
  width: 20px;
  height: 3px;
  background: black;
}
```

### 2. Hero Section Enhancements

#### Desktop Grid Layout
```
┌────────────────────────────────────────────────────┐
│                                                    │
│            LAND YOUR DREAM JOB.                    │
│         LET AI HANDLE THE REST.                    │
│                                                    │
│     Transform any resume into an ATS-optimized     │
│          PDF in under 60 seconds.                  │
│                                                    │
│   ┌───────────────────┐  ┌─────────────────┐      │
│   │ OPTIMIZE NOW >>>  │  │ See How It Works│      │
│   └───────────────────┘  └─────────────────┘      │
│                                                    │
└────────────────────────────────────────────────────┘
```

**Recommended Spacing:**
- Maximum content width: 1200px
- Horizontal padding: 80px
- Vertical section spacing: 120px
- Headline margin bottom: 48px
- CTA button spacing: 24px

### 3. Feature Cards Grid

#### Desktop (3-Column Layout)
```
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│   [ICON 1]   │  │   [ICON 2]   │  │   [ICON 3]   │
│              │  │              │  │              │
│   UPLOAD     │  │  AI ENHANCE  │  │   DOWNLOAD   │
│              │  │              │  │              │
│  Description │  │  Description │  │  Description │
└──────────────┘  └──────────────┘  └──────────────┘
```

**Card Specifications:**
```css
.feature-card {
  width: 100%;
  max-width: 380px;
  min-height: 320px;
  padding: 48px 32px;
  border: 3px solid black;
  background: white;
  box-shadow: 6px 6px 0px black;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 8px 12px 0px black;
}

.feature-card-icon {
  width: 80px;
  height: 80px;
  margin-bottom: 32px;
  stroke-width: 3px;
}
```

### 4. Upload Zone Enhancement

**Desktop Optimized Upload Area:**
```
┌─────────────────────────────────────────────────┐
│                                                 │
│               ↑                                 │
│           [UPLOAD ICON]                         │
│                                                 │
│      DRAG & DROP YOUR RESUME HERE               │
│         or click to browse files                │
│                                                 │
│     ┌─────┐  ┌──────┐  ┌─────┐                 │
│     │ PDF │  │ DOCX │  │ TXT │                 │
│     └─────┘  └──────┘  └─────┘                 │
│                                                 │
│         Maximum file size: 5MB                  │
│                                                 │
└─────────────────────────────────────────────────┘
```

**Recommended Dimensions:**
- Min-width: 600px
- Min-height: 400px
- Padding: 64px
- Border: 3px dashed
- Hover: Transform to solid border with scale(1.01)

### 5. Progress Tracker Visualization

**Desktop Timeline Layout:**
```
[1]═══════[2]═══════[3]═══════[4]═══════[5]
 ↓         ↓         ↓         ↓         ↓
UPLOAD   PARSE  AI ENHANCE GENERATE COMPILE
 ✓      ACTIVE    PENDING   PENDING  PENDING

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                65% COMPLETE
```

**Enhanced Step Indicators:**
```css
.progress-step {
  width: 48px;
  height: 48px;
  border: 3px solid black;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 18px;
  transition: all 300ms ease;
}

.progress-step.active {
  background: black;
  color: white;
  animation: pulse-step 1.5s ease-in-out infinite;
}

.progress-step.completed {
  background: black;
  color: white;
  transform: rotate(12deg) scale(1.1);
  box-shadow: 3px 3px 0px black;
}

@keyframes pulse-step {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.08); }
}
```

### 6. Results Panel Layout

**Desktop Side-by-Side Layout:**
```
┌─────────────────────────────────────────────────┐
│  🎉  YOUR RESUME IS READY!                      │
│      Optimized and ATS-approved                 │
└─────────────────────────────────────────────────┘

┌──────────────────────┐  ┌────────────────────┐
│                      │  │                    │
│   PDF PREVIEW        │  │  IMPROVEMENTS:     │
│   [Document Image]   │  │  ✓ ATS Format      │
│                      │  │  ✓ Keywords        │
│                      │  │  ✓ Action Verbs    │
│                      │  │  ✓ Layout          │
│                      │  │                    │
└──────────────────────┘  └────────────────────┘

         ┌─────────────────────────┐
         │  ⬇ DOWNLOAD PDF         │
         └─────────────────────────┘
```

**Recommended Grid:**
```css
.results-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 32px;
  max-width: 1200px;
}

@media (max-width: 968px) {
  .results-container {
    grid-template-columns: 1fr;
  }
}
```

---

## 📱 Mobile Layout Improvements

### 1. Mobile Header (Under 768px)

**Optimized Mobile Header:**
```
┌────────────────────────────────────┐
│ [☰] KAIROSCV           [BETA]     │
└────────────────────────────────────┘
```

**Specifications:**
- Header height: 56px (touch-friendly)
- Menu icon: 40x40px minimum
- Logo: Center-aligned, 18px font
- Beta badge: Top-right corner, 10px font

**Mobile Menu (Expanded):**
```
┌────────────────────────────────────┐
│ [×] KAIROSCV           [BETA]     │
├────────────────────────────────────┤
│  HOME                              │
├────────────────────────────────────┤
│  INTENT                            │
├────────────────────────────────────┤
│  OPTIMIZE        ← Active          │
├────────────────────────────────────┤
│  CONTACT                           │
└────────────────────────────────────┘
```

```css
.mobile-menu-item {
  min-height: 56px;
  padding: 16px 24px;
  border-bottom: 2px solid black;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: background 200ms ease;
}

.mobile-menu-item:active {
  background: #f5f5f5;
  transform: scale(0.98);
}

.mobile-menu-item.active {
  background: black;
  color: white;
}
```

### 2. Mobile Hero Section

**Stacked Vertical Layout:**
```
┌─────────────────────────────┐
│                             │
│   LAND YOUR                 │
│   DREAM JOB.                │
│                             │
│   Let AI Handle             │
│   the Rest.                 │
│                             │
│   Transform any resume      │
│   into an ATS-optimized     │
│   PDF in under 60 seconds.  │
│                             │
│ ┌─────────────────────────┐ │
│ │  OPTIMIZE NOW >>>       │ │
│ └─────────────────────────┘ │
│                             │
│   See how it works →        │
│                             │
└─────────────────────────────┘
```

**Mobile Typography:**
```css
.mobile-headline {
  font-size: 32px;
  line-height: 1.1;
  margin-bottom: 24px;
  letter-spacing: -0.02em;
}

.mobile-subheadline {
  font-size: 28px;
  line-height: 1.2;
  color: #666;
  margin-bottom: 24px;
}

.mobile-description {
  font-size: 16px;
  line-height: 1.5;
  color: #4a4a4a;
  margin-bottom: 32px;
}
```

### 3. Mobile Feature Cards

**Single Column Stack:**
```
┌──────────────────────┐
│    [ICON]            │
│                      │
│    UPLOAD            │
│                      │
│    Drop your resume  │
│    in any format...  │
└──────────────────────┘
        ↓
┌──────────────────────┐
│    [ICON]            │
│                      │
│    AI ENHANCE        │
│                      │
│    Our AI analyzes   │
│    and enhances...   │
└──────────────────────┘
        ↓
┌──────────────────────┐
│    [ICON]            │
│                      │
│    DOWNLOAD          │
│                      │
│    Get your          │
│    professionally... │
└──────────────────────┘
```

**Mobile Card Spacing:**
```css
@media (max-width: 768px) {
  .feature-cards {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 0 16px;
  }

  .feature-card {
    width: 100%;
    padding: 32px 24px;
    min-height: 280px;
    box-shadow: 4px 4px 0px black;
  }

  .feature-card:hover {
    /* Disable hover effects on mobile */
    transform: none;
    box-shadow: 4px 4px 0px black;
  }

  .feature-card:active {
    /* Add press effect instead */
    transform: scale(0.98);
    box-shadow: 2px 2px 0px black;
  }
}
```

### 4. Mobile Upload Zone

**Touch-Optimized Upload:**
```
┌────────────────────────┐
│                        │
│     ↑                  │
│  [UPLOAD]              │
│                        │
│  TAP TO UPLOAD         │
│  YOUR RESUME           │
│                        │
│  ┌───┐ ┌────┐ ┌───┐   │
│  │PDF│ │DOCX│ │TXT│   │
│  └───┘ └────┘ └───┘   │
│                        │
│  Max: 5MB              │
│                        │
└────────────────────────┘
```

**Mobile Upload Specs:**
```css
@media (max-width: 768px) {
  .upload-zone {
    min-height: 300px;
    padding: 40px 24px;
    margin: 0 16px;
  }

  .upload-icon {
    width: 64px;
    height: 64px;
    margin-bottom: 24px;
  }

  .upload-heading {
    font-size: 18px;
    margin-bottom: 12px;
  }

  .upload-description {
    font-size: 14px;
    margin-bottom: 20px;
  }

  /* Remove drag-and-drop text on mobile */
  .drag-text {
    display: none;
  }
}
```

### 5. Mobile Progress Tracker

**Vertical Step Layout:**
```
┌────────────────────────┐
│ [1]─ UPLOAD       ✓    │
│  │                     │
│ [2]─ PARSE        ✓    │
│  │                     │
│ [3]─ AI ENHANCE   ⟳    │
│  │   Enhancing...      │
│ [4]─ GENERATE     ○    │
│  │                     │
│ [5]─ COMPILE      ○    │
│                        │
│ ━━━━━━━━━━━━━━━━━━━   │
│      65% COMPLETE      │
└────────────────────────┘
```

**Mobile Progress CSS:**
```css
@media (max-width: 768px) {
  .progress-steps {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .progress-step-row {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 12px 0;
  }

  .progress-step-indicator {
    width: 40px;
    height: 40px;
    border: 2px solid black;
    flex-shrink: 0;
  }

  .progress-step-label {
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    flex: 1;
  }

  .progress-step-status {
    font-size: 18px;
    flex-shrink: 0;
  }

  .progress-connecting-line {
    width: 2px;
    height: 16px;
    background: black;
    margin-left: 19px;
  }
}
```

### 6. Mobile Bottom Navigation (Optional Enhancement)

**Sticky Bottom Nav for Quick Actions:**
```
                    ↑ Content scrolls
─────────────────────────────────────────
┌───────────────────────────────────────┐
│ [Home] [Intent] [Optimize] [Contact] │
└───────────────────────────────────────┘
```

```css
.mobile-bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: white;
  border-top: 3px solid black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 100;
  box-shadow: 0 -4px 0px black;
}

.mobile-bottom-nav-item {
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  border-right: 2px solid black;
  transition: background 200ms ease;
}

.mobile-bottom-nav-item:last-child {
  border-right: none;
}

.mobile-bottom-nav-item.active {
  background: black;
  color: white;
}

.mobile-bottom-nav-item:active {
  background: #f5f5f5;
}
```

---

## 🎨 Color System Optimization

### Primary Palette (Black & White Only)

```css
:root {
  /* Absolute Values */
  --black-pure: #000000;
  --white-pure: #ffffff;

  /* Grayscale for Hierarchy (10% increments) */
  --gray-100: #000000;  /* Pure black */
  --gray-90: #1a1a1a;   /* Almost black */
  --gray-80: #333333;   /* Dark gray */
  --gray-70: #4a4a4a;   /* Medium-dark gray */
  --gray-60: #666666;   /* Medium gray */
  --gray-50: #808080;   /* True middle gray */
  --gray-40: #999999;   /* Medium-light gray */
  --gray-30: #b3b3b3;   /* Light gray */
  --gray-20: #cccccc;   /* Very light gray */
  --gray-10: #e6e6e6;   /* Almost white */
  --gray-05: #f5f5f5;   /* Off-white */
  --white-100: #ffffff; /* Pure white */

  /* Semantic Colors */
  --color-foreground: var(--black-pure);
  --color-background: var(--white-pure);
  --color-border: var(--black-pure);
  --color-shadow: var(--black-pure);

  /* Interactive States */
  --color-hover-bg: var(--gray-05);
  --color-active-bg: var(--gray-10);
  --color-disabled-bg: var(--gray-20);
  --color-disabled-text: var(--gray-50);

  /* Success/Error (Keep minimal) */
  --color-success: #059669;  /* Green for success only */
  --color-error: #dc2626;    /* Red for errors only */
}
```

### Color Usage Rules

1. **Primary Elements:** Always pure black on pure white
2. **Secondary Elements:** Use gray-90 to gray-70 for secondary text
3. **Disabled States:** Use gray-40 to gray-60
4. **Backgrounds:** Only use gray-05 or gray-10 for subtle backgrounds
5. **Borders:** Always pure black (never gray)
6. **Shadows:** Always pure black, no transparency

### Contrast Ratios (WCAG AAA)

```
Black text on White background: 21:1 ✓
Gray-70 on White: 7.48:1 ✓
Gray-60 on White: 5.74:1 ✓
Gray-50 on White: 3.95:1 ✗ (Use only for non-essential text)
```

---

## ✍️ Typography Enhancements

### Font Stack

```css
:root {
  /* Display Font (Headings, Logo) */
  --font-display: "Space Mono", "Courier New", monospace;

  /* Body Font (Text, UI) */
  --font-body: "JetBrains Mono", "Monaco", monospace;

  /* Alternative: System Fonts for Better Performance */
  --font-display-system: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, monospace;
  --font-body-system: "SF Mono", "Consolas", "Liberation Mono", monospace;
}
```

### Type Scale (8px Base)

**Desktop:**
```css
.text-xs    { font-size: 12px; line-height: 16px; } /* 1.5rem */
.text-sm    { font-size: 14px; line-height: 20px; } /* 1.75rem */
.text-base  { font-size: 16px; line-height: 24px; } /* 2rem */
.text-lg    { font-size: 18px; line-height: 28px; } /* 2.25rem */
.text-xl    { font-size: 20px; line-height: 28px; } /* 2.5rem */
.text-2xl   { font-size: 24px; line-height: 32px; } /* 3rem */
.text-3xl   { font-size: 30px; line-height: 36px; } /* 3.75rem */
.text-4xl   { font-size: 36px; line-height: 40px; } /* 4.5rem */
.text-5xl   { font-size: 48px; line-height: 52px; } /* 6rem */
.text-6xl   { font-size: 60px; line-height: 64px; } /* 7.5rem */
.text-7xl   { font-size: 72px; line-height: 76px; } /* 9rem */
```

**Mobile:**
```css
@media (max-width: 768px) {
  .text-4xl { font-size: 28px; line-height: 32px; }
  .text-5xl { font-size: 36px; line-height: 40px; }
  .text-6xl { font-size: 44px; line-height: 48px; }
  .text-7xl { font-size: 52px; line-height: 56px; }
}
```

### Font Weights

```css
.font-normal   { font-weight: 400; } /* Regular text */
.font-medium   { font-weight: 500; } /* Avoid - use 600 instead */
.font-semibold { font-weight: 600; } /* Slightly emphasized */
.font-bold     { font-weight: 700; } /* Strong emphasis */
.font-black    { font-weight: 900; } /* Maximum emphasis */
```

**Neobrutalist Rule:** Only use 400, 700, or 900. Skip 500 and 600.

### Text Hierarchy Examples

```css
/* Page Title */
h1 {
  font-size: 60px;
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin-bottom: 24px;
}

/* Section Title */
h2 {
  font-size: 36px;
  font-weight: 900;
  line-height: 1.2;
  letter-spacing: -0.01em;
  margin-bottom: 16px;
}

/* Card Title */
h3 {
  font-size: 24px;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 12px;
}

/* Body Text */
p {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  color: var(--gray-70);
}

/* Small Text */
.text-small {
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: var(--gray-60);
}

/* Uppercase Labels */
.label {
  font-size: 12px;
  font-weight: 700;
  line-height: 1.4;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

---

## 🧩 Component-Specific Improvements

### 1. Button System

**Primary Button:**
```css
.btn-primary {
  padding: 16px 32px;
  background: black;
  color: white;
  border: 3px solid black;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  box-shadow: 4px 4px 0px black;
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
  min-height: 48px;
}

.btn-primary:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0px black;
}

.btn-primary:active {
  transform: translate(1px, 1px);
  box-shadow: 2px 2px 0px black;
}

/* Mobile */
@media (max-width: 768px) {
  .btn-primary {
    width: 100%;
    padding: 14px 24px;
    font-size: 13px;
  }
}
```

**Secondary Button:**
```css
.btn-secondary {
  padding: 16px 32px;
  background: white;
  color: black;
  border: 3px solid black;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  box-shadow: 4px 4px 0px black;
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
  min-height: 48px;
}

.btn-secondary:hover {
  background: var(--gray-05);
  transform: translate(-1px, -1px);
  box-shadow: 5px 5px 0px black;
}

.btn-secondary:active {
  transform: translate(1px, 1px);
  box-shadow: 2px 2px 0px black;
}
```

**Ghost Button:**
```css
.btn-ghost {
  padding: 12px 24px;
  background: transparent;
  color: black;
  border: 2px solid transparent;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 200ms ease;
  min-height: 44px;
}

.btn-ghost:hover {
  border-color: black;
  box-shadow: 2px 2px 0px black;
  transform: translate(-1px, -1px);
}
```

### 2. Input Fields

**Text Input:**
```css
.input-text {
  width: 100%;
  padding: 14px 16px;
  border: 3px solid black;
  background: white;
  font-size: 16px;
  font-weight: 400;
  font-family: var(--font-body);
  color: black;
  transition: all 200ms ease;
  min-height: 48px;
}

.input-text:focus {
  outline: none;
  box-shadow: 4px 4px 0px black;
  transform: translate(-2px, -2px);
}

.input-text::placeholder {
  color: var(--gray-50);
  font-weight: 400;
}

.input-text:disabled {
  background: var(--gray-10);
  color: var(--gray-50);
  cursor: not-allowed;
}

/* Error State */
.input-text.error {
  border-color: var(--color-error);
  box-shadow: 4px 4px 0px var(--color-error);
}
```

**Label:**
```css
.input-label {
  display: block;
  margin-bottom: 8px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: black;
}

.input-label.required::after {
  content: " *";
  color: var(--color-error);
}
```

### 3. Cards

**Standard Card:**
```css
.card {
  padding: 32px;
  background: white;
  border: 3px solid black;
  box-shadow: 4px 4px 0px black;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 5px 6px 0px black;
}

/* Mobile */
@media (max-width: 768px) {
  .card {
    padding: 24px;
    box-shadow: 3px 3px 0px black;
  }

  .card:hover {
    transform: none;
  }
}
```

**Elevated Card (Important Content):**
```css
.card-elevated {
  padding: 48px;
  background: white;
  border: 4px solid black;
  box-shadow: 8px 8px 0px black;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

/* Mobile */
@media (max-width: 768px) {
  .card-elevated {
    padding: 32px 24px;
    border: 3px solid black;
    box-shadow: 5px 5px 0px black;
  }
}
```

**Interactive Card:**
```css
.card-interactive {
  padding: 32px;
  background: white;
  border: 3px solid black;
  box-shadow: 4px 4px 0px black;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

.card-interactive:hover {
  transform: translate(-2px, -4px);
  box-shadow: 6px 8px 0px black;
}

.card-interactive:active {
  transform: translate(1px, 1px);
  box-shadow: 2px 2px 0px black;
}

/* Mobile - Touch Feedback */
@media (max-width: 768px) {
  .card-interactive:hover {
    transform: none;
    box-shadow: 4px 4px 0px black;
  }

  .card-interactive:active {
    transform: scale(0.98);
    box-shadow: 2px 2px 0px black;
  }
}
```

### 4. Badges

**Standard Badge:**
```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border: 2px solid black;
  background: white;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: 2px 2px 0px black;
}

.badge-filled {
  background: black;
  color: white;
}

.badge-success {
  background: var(--color-success);
  border-color: var(--color-success);
  color: white;
}

.badge-error {
  background: var(--color-error);
  border-color: var(--color-error);
  color: white;
}
```

### 5. Modal/Dialog

**Full-Screen Overlay:**
```css
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 16px;
}

.modal-content {
  width: 100%;
  max-width: 600px;
  max-height: 90vh;
  background: white;
  border: 4px solid black;
  box-shadow: 12px 12px 0px black;
  padding: 48px;
  overflow-y: auto;
  animation: modal-appear 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes modal-appear {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.modal-close {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 40px;
  height: 40px;
  border: 3px solid black;
  background: white;
  cursor: pointer;
  font-size: 24px;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 200ms ease;
}

.modal-close:hover {
  background: black;
  color: white;
}

/* Mobile */
@media (max-width: 768px) {
  .modal-content {
    max-width: 100%;
    padding: 32px 24px;
    border: 3px solid black;
    box-shadow: 8px 8px 0px black;
  }
}
```

### 6. Tooltips

**Simple Black Tooltip:**
```css
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip-content {
  position: absolute;
  bottom: calc(100% + 12px);
  left: 50%;
  transform: translateX(-50%);
  padding: 8px 12px;
  background: black;
  color: white;
  border: 2px solid black;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 200ms ease;
  z-index: 100;
}

.tooltip-content::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid black;
}

.tooltip:hover .tooltip-content {
  opacity: 1;
}
```

### 7. Loading States

**Skeleton Loader:**
```css
.skeleton {
  background: linear-gradient(
    90deg,
    var(--gray-10) 0%,
    var(--gray-20) 50%,
    var(--gray-10) 100%
  );
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s ease-in-out infinite;
  border: 2px solid var(--gray-30);
}

@keyframes skeleton-loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

.skeleton-text {
  height: 16px;
  margin-bottom: 8px;
  border-radius: 0;
}

.skeleton-heading {
  height: 32px;
  width: 60%;
  margin-bottom: 16px;
}

.skeleton-card {
  height: 200px;
  width: 100%;
}
```

**Spinner:**
```css
.spinner {
  width: 48px;
  height: 48px;
  border: 4px solid black;
  border-top-color: transparent;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.spinner-small {
  width: 24px;
  height: 24px;
  border-width: 3px;
}
```

---

## ♿ Accessibility Guidelines

### 1. Keyboard Navigation

**Focus States:**
```css
*:focus-visible {
  outline: 3px solid black;
  outline-offset: 4px;
}

button:focus-visible,
a:focus-visible,
input:focus-visible {
  outline: 3px solid black;
  outline-offset: 2px;
}

/* Skip to main content link */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: black;
  color: white;
  padding: 8px 16px;
  border: 3px solid black;
  font-weight: 700;
  z-index: 10000;
  transition: top 200ms ease;
}

.skip-link:focus {
  top: 0;
}
```

**Tab Order:**
- Ensure logical tab order (header → nav → main → footer)
- All interactive elements must be keyboard accessible
- Custom components need `tabindex="0"` if not natively focusable

### 2. ARIA Labels

**Required ARIA Attributes:**
```html
<!-- Navigation -->
<nav aria-label="Main navigation">
  <ul>
    <li><a href="/" aria-current="page">Home</a></li>
  </ul>
</nav>

<!-- Buttons -->
<button aria-label="Upload resume">
  <svg aria-hidden="true">...</svg>
</button>

<!-- Forms -->
<input
  type="text"
  id="email"
  aria-required="true"
  aria-invalid="false"
  aria-describedby="email-error"
/>
<span id="email-error" role="alert">Invalid email</span>

<!-- Modal -->
<div
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-title"
  aria-describedby="modal-description"
>
  <h2 id="modal-title">Dialog Title</h2>
  <p id="modal-description">Dialog content</p>
</div>

<!-- Loading State -->
<div role="status" aria-live="polite" aria-busy="true">
  <span class="sr-only">Loading...</span>
</div>
```

### 3. Screen Reader Support

**SR-Only Class:**
```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:focus {
  position: static;
  width: auto;
  height: auto;
  padding: inherit;
  margin: inherit;
  overflow: visible;
  clip: auto;
  white-space: normal;
}
```

**Usage:**
```html
<button>
  <svg>...</svg>
  <span class="sr-only">Upload resume</span>
</button>

<div class="progress-bar">
  <div class="progress-fill" style="width: 65%">
    <span class="sr-only">65% complete</span>
  </div>
</div>
```

### 4. Color Contrast

**WCAG AAA Compliance (7:1 ratio):**
- Pure black (#000000) on white: 21:1 ✓
- Gray-70 (#4a4a4a) on white: 7.48:1 ✓
- Gray-60 (#666666) on white: 5.74:1 (Use for large text only)

**Testing Tools:**
- Chrome DevTools Lighthouse
- WAVE Browser Extension
- axe DevTools

### 5. Touch Targets

**Minimum Size:**
- All interactive elements: 44x44px minimum
- Spacing between touch targets: 8px minimum

```css
/* Ensure touch-friendly buttons on mobile */
@media (max-width: 768px) {
  button,
  a,
  input,
  select {
    min-height: 44px;
    min-width: 44px;
  }

  /* Spacing between interactive elements */
  .button-group {
    display: flex;
    gap: 12px;
  }
}
```

---

## ⚡ Performance Optimizations

### 1. CSS Performance

**Use CSS Containment:**
```css
.card,
.feature-card,
.upload-zone {
  contain: layout style paint;
}

.modal-content {
  contain: layout style;
}

/* For frequently animated elements */
.progress-fill,
.spinner,
.loading-animation {
  will-change: transform;
}
```

**Optimize Animations:**
```css
/* Use transform and opacity only */
.btn:hover {
  /* ✓ Good - GPU accelerated */
  transform: translate(-2px, -2px);
  opacity: 0.9;
}

.btn:hover {
  /* ✗ Bad - triggers layout */
  margin-top: -2px;
  width: 102%;
}

/* Prefer transforms over position changes */
@keyframes slide-in {
  from {
    transform: translateY(20px);  /* ✓ */
    /* top: 20px; ✗ */
  }
  to {
    transform: translateY(0);
  }
}
```

### 2. Image Optimization

**Use Modern Formats:**
```html
<picture>
  <source srcset="hero.avif" type="image/avif" />
  <source srcset="hero.webp" type="image/webp" />
  <img src="hero.jpg" alt="Hero image" loading="lazy" />
</picture>
```

**Responsive Images:**
```html
<img
  srcset="
    icon-64.png 64w,
    icon-128.png 128w,
    icon-256.png 256w
  "
  sizes="(max-width: 768px) 64px, 128px"
  src="icon-128.png"
  alt="Icon"
  loading="lazy"
/>
```

### 3. Font Loading

**Optimize Google Fonts:**
```html
<!-- Preconnect to Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

<!-- Load only required weights -->
<link
  href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700;900&display=swap"
  rel="stylesheet"
/>
```

**Font Display Strategy:**
```css
@font-face {
  font-family: 'Space Mono';
  src: url('/fonts/space-mono.woff2') format('woff2');
  font-weight: 400 900;
  font-display: swap; /* Show fallback immediately */
}
```

### 4. Lazy Loading

**Images:**
```html
<img src="image.jpg" loading="lazy" alt="Description" />
```

**Intersection Observer for Custom Elements:**
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
});

document.querySelectorAll('.lazy').forEach(el => {
  observer.observe(el);
});
```

### 5. Code Splitting

**Next.js Dynamic Imports:**
```typescript
import dynamic from 'next/dynamic';

// Lazy load heavy components
const FileUploader = dynamic(() => import('@/components/file-uploader'), {
  loading: () => <div className="skeleton skeleton-card" />,
});

const ProgressTracker = dynamic(() => import('@/components/progress-tracker'), {
  ssr: false, // Don't render on server
});
```

### 6. Reduce Layout Shift (CLS)

**Reserve Space for Dynamic Content:**
```css
/* Set explicit dimensions */
.upload-zone {
  min-height: 400px;
  width: 100%;
}

.feature-card {
  min-height: 320px;
}

/* Use aspect ratio */
.video-container {
  aspect-ratio: 16 / 9;
  width: 100%;
}

/* Skeleton loaders with same dimensions */
.skeleton-card {
  height: 320px;
  width: 100%;
}
```

---

## 📏 Spacing System

### 8px Grid System

```css
:root {
  --space-1: 8px;    /* 0.5rem */
  --space-2: 16px;   /* 1rem */
  --space-3: 24px;   /* 1.5rem */
  --space-4: 32px;   /* 2rem */
  --space-5: 40px;   /* 2.5rem */
  --space-6: 48px;   /* 3rem */
  --space-8: 64px;   /* 4rem */
  --space-10: 80px;  /* 5rem */
  --space-12: 96px;  /* 6rem */
  --space-16: 128px; /* 8rem */
}
```

**Usage Guidelines:**
- Component padding: 24-48px (space-3 to space-6)
- Section spacing: 64-96px (space-8 to space-12)
- Element margins: 8-24px (space-1 to space-3)
- Grid gaps: 16-32px (space-2 to space-4)

**Mobile Adjustments:**
```css
@media (max-width: 768px) {
  :root {
    --space-mobile-multiplier: 0.75;
  }

  /* Reduce spacing on mobile */
  .section {
    padding: calc(var(--space-8) * var(--space-mobile-multiplier));
    /* 64px becomes 48px */
  }
}
```

---

## 🔄 Responsive Breakpoints

```css
/* Mobile First Approach */

/* Mobile: 0-767px (default, no media query needed) */
.container {
  padding: 16px;
  max-width: 100%;
}

/* Tablet: 768px-1023px */
@media (min-width: 768px) {
  .container {
    padding: 32px;
    max-width: 768px;
    margin: 0 auto;
  }
}

/* Desktop: 1024px-1439px */
@media (min-width: 1024px) {
  .container {
    padding: 48px;
    max-width: 1024px;
  }
}

/* Large Desktop: 1440px+ */
@media (min-width: 1440px) {
  .container {
    padding: 64px;
    max-width: 1200px;
  }
}

/* Ultra-wide: 1920px+ */
@media (min-width: 1920px) {
  .container {
    max-width: 1400px;
  }
}
```

**Common Breakpoint Variables:**
```css
:root {
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
}
```

---

## 📋 Quick Reference Checklist

### Before Launching

**Desktop:**
- [ ] Navigation is clear and accessible from top-left
- [ ] All interactive elements have 3-4px borders
- [ ] Box shadows use hard edges (no blur)
- [ ] Hover states show transform + shadow change
- [ ] Focus states have 3px outline
- [ ] Content max-width is 1200px
- [ ] Spacing follows 8px grid
- [ ] Font sizes use type scale
- [ ] Only black/white/gray colors used
- [ ] All cards have consistent padding (32-48px)

**Mobile:**
- [ ] Menu button is top-left, 40x40px minimum
- [ ] Touch targets are 44x44px minimum
- [ ] Logo is centered on mobile
- [ ] Beta badge is repositioned
- [ ] All buttons are full-width
- [ ] Cards stack vertically with 24px gap
- [ ] Typography scales down appropriately
- [ ] Upload zone is 300px minimum height
- [ ] Progress tracker uses vertical layout
- [ ] Modal covers 90% viewport height maximum
- [ ] Bottom navigation (if used) is sticky
- [ ] No hover effects (use :active instead)

**Accessibility:**
- [ ] All images have alt text
- [ ] All buttons have aria-labels
- [ ] Focus visible on all interactive elements
- [ ] Skip to main content link present
- [ ] Color contrast meets WCAG AAA (7:1)
- [ ] Keyboard navigation works everywhere
- [ ] Screen reader tested
- [ ] ARIA landmarks used (nav, main, footer)
- [ ] Form inputs have labels
- [ ] Error messages are descriptive

**Performance:**
- [ ] Images use loading="lazy"
- [ ] Fonts use font-display: swap
- [ ] CSS uses transform/opacity for animations
- [ ] Heavy components code-split
- [ ] Lighthouse score > 90
- [ ] First Contentful Paint < 1.5s
- [ ] Cumulative Layout Shift < 0.1
- [ ] Time to Interactive < 3s
- [ ] No layout shifts during page load
- [ ] Skeleton loaders match content dimensions

---

## 🎯 Priority Actions for Next Sprint

### High Priority (Do First)

1. **Mobile Menu Refinement**
   - Ensure hamburger icon is exactly 40x40px
   - Add smooth slide-in animation
   - Test on iOS Safari and Chrome Android

2. **Upload Zone Enhancement**
   - Increase size on desktop (600x400px)
   - Add drag state animation
   - Show file preview after upload

3. **Progress Tracker Polish**
   - Animate transitions between steps
   - Add completion celebratory animation
   - Show estimated time remaining

4. **Typography Consistency**
   - Audit all font sizes
   - Ensure only 400/700/900 weights used
   - Standardize line-heights

5. **Accessibility Audit**
   - Run axe DevTools scan
   - Fix all critical issues
   - Add missing ARIA labels

### Medium Priority (Do Next)

6. **Card Hover Refinement**
   - Ensure consistent shadow depths
   - Add subtle scale on interactive cards
   - Test performance on low-end devices

7. **Form Validation**
   - Add real-time validation
   - Show error states clearly
   - Use consistent error messaging

8. **Loading States**
   - Add skeleton loaders
   - Show upload progress
   - Provide feedback during AI processing

9. **Responsive Image Optimization**
   - Convert to AVIF/WebP
   - Use responsive srcset
   - Implement lazy loading

10. **Dark Mode Preparation** (Optional)
    - Invert colors (white text on black)
    - Adjust gray scale
    - Test readability

### Low Priority (Nice to Have)

11. **Micro-interactions**
    - Button ripple effects
    - Card flip animations
    - Success confetti

12. **Easter Eggs**
    - Konami code activation
    - Hidden neobrutalist art
    - Dev console messages

---

## 📚 Additional Resources

### Design Inspiration
- [Brutalist Websites](https://brutalistwebsites.com/)
- [Neobrutalism.io](https://neobrutalism.io/)
- [Godly](https://godly.website/) - Black & white filter

### Tools
- **Figma:** Design mockups
- **Coolors.co:** Grayscale palette generator
- **Contrast Ratio:** Check WCAG compliance
- **PageSpeed Insights:** Performance testing

### Code Examples
- See `/components/` directory for implementation examples
- Check `/app/globals.css` for base styles
- Review Next.js documentation for best practices

---

## 🚀 Conclusion

This guide provides a comprehensive roadmap for creating a world-class black-and-white neobrutalist interface for KairosCV. Remember:

1. **Keep it simple** - Fewer elements, more impact
2. **Make it bold** - Thick borders, strong shadows
3. **Stay monochrome** - Black, white, and grays only
4. **Prioritize function** - Every element serves a purpose
5. **Test on real devices** - Don't just rely on browser DevTools

By following these guidelines, KairosCV will have a distinctive, accessible, and high-performance interface that stands out in the crowded resume optimization space.

**Next Steps:**
1. Review this guide with the team
2. Prioritize improvements based on user feedback
3. Implement high-priority changes first
4. Test on multiple devices
5. Iterate based on analytics and user testing

Good luck building! 🎉
