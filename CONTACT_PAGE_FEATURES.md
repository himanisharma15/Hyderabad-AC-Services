# Contact Page - Visual Features & Demo Guide

## 🎨 Visual Layout

```
┌─────────────────────────────────────────────────────────────┐
│                    HERO SECTION                             │
│                   Get In Touch                              │
│              Home / Contact Breadcrumb                      │
│         (Diagonal overlay, animated text)                  │
└─────────────────────────────────────────────────────────────┘

┌──────┐  ┌──────┐  ┌──────┐
│ 📞   │  │ 📧   │  │ 📍   │
│Phone │  │Email │  │Address│  (BRANCHES SECTION)
└──────┘  └──────┘  └──────┘

┌────────────────────────┬─────────────────────────┐
│    CONTACT FORM        │    INFO SECTION         │
│  ┌────────────────┐   │  ┌──────────────────┐   │
│  │ Name           │   │  │ Business Info    │   │
│  │ Phone          │   │  │ • Phone          │   │
│  │ Email          │   │  │ • Location       │   │
│  │ Service Type ▼│   │  │ • Hours: 9-9 PM  │   │
│  │ Message        │   │  └──────────────────┘   │
│  │ [Send Message] │   │  ┌──────────────────┐   │
│  └────────────────┘   │  │ Why Choose Us    │   │
│                       │  │ ✓ Fast Response  │   │
│                       │  │ ✓ Professional   │   │
│                       │  │ ✓ Flexible Support
└────────────────────────┴─────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│              MAP SECTION                                    │
│  [Google Map Embedded]                                      │
│  Service Area Info          Fast Delivery Info             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                    FOOTER (4 COLUMNS)                       │
│   Contact    │  Services   │  Quick Links │  Connect      │
│   • Phone    │  • AC Serv  │  • Home      │  • Facebook   │
│   • Email    │  • AC Rep   │  • About     │  • Instagram  │
│   • Hours    │  • Install  │  • Services  │  • WhatsApp   │
│              │  • Ducting  │  • Contact   │  • Hours      │
│              │  • Central  │  • Terms     │  • Map Preview│
└─────────────────────────────────────────────────────────────┘
```

---

## ✨ Design Features

### **Colors Used**
```
🔵 Dark Blue:    #154769
🔵 Sky Blue:     #00aedd  
🔵 Bright Blue:  #0b84dc
⚪ White:        #ffffff
⚫ Dark Gray:    #34506a
🟤 Light Gray:   #f8fbfd
```

### **Typography**
```
Headings:      Poppins Bold (24px - 48px)
Body Text:     Poppins Regular (14px - 18px)
Labels:        Poppins SemiBold (12px - 14px)
Buttons:       Poppins Bold (14px - 16px)
```

### **Effects & Animations**
```
✨ Fade In Up        - Elements slide up on load
✨ Slide In Left     - Content enters from left
✨ Slide In Right    - Content enters from right
✨ Scale In          - Cards appear with zoom
✨ Hover Lift        - Cards move up on hover
✨ Icon Rotation     - Icons scale and rotate
✨ Border Animation  - Top border slides in
✨ Color Transition  - Smooth color changes
```

---

## 🎯 Component Features

### **1. Hero Section**
```
Features:
- Diagonal overlay with gradient
- Breadcrumb navigation (Home / Contact)
- Large, bold heading
- Subtitle text
- Animated text entrance
- Responsive height (480px desktop → 240px mobile)

Animations:
- Title slides in from left
- Subtitle appears 0.2s later
- All text fades and moves up simultaneously
```

### **2. Branches Section**
```
Features:
- 3 responsive cards (Phone, Email, Address)
- Hover lift effect (8px up movement)
- Icon wrapper with background
- Top border animation on hover
- Smooth color transitions
- Clickable elements (tel: / mailto: links)

Hover Effects:
- Card lifts up
- Top border slides in
- Icon scales up 1.08x
- Text color changes to blue
```

### **3. Contact Form Section**
```
LEFT SIDE - Form:
- Name input (validation)
- Phone input (10-digit validation)
- Email input (email format validation)
- Service type dropdown (7 options)
- Message textarea (min 10 chars)
- Submit button with gradient
- Error messages appear below fields
- Success notification (green banner)

RIGHT SIDE - Info:
- Business card with 4 call-out items
- Why Choose Us section with checkmarks
- Sticky positioning on desktop
- Card hover effects

Validation:
- Real-time error clearing
- Visual error states (red border)
- Phone number formatting
- Email validation
- Message length check
```

### **4. Map Section**
```
Features:
- Google Maps embedded iframe (responsive)
- Two info cards below map
- Custom map preview image
- Hover effects on cards
- 450px height on desktop → 250px mobile

Info Cards:
- Service area description
- Fast delivery information
- Hover animations
```

### **5. Premium Footer**
```
COLUMN 1 - Contact Info:
- AC logo/brand
- Company description
- Phone (clickable tel: link)
- Email (clickable mailto: link)
- Location

COLUMN 2 - Services:
- AC Service
- AC Repair
- AC Installation
- Ducting
- Centralized AC
- (5 links total)

COLUMN 3 - Quick Links:
- Home
- About Us
- Services
- Contact
- Terms & Conditions
- Privacy Policy
- (6 links total)

COLUMN 4 - Connect
- Social icons (Facebook, Instagram, WhatsApp)
- Working hours section
- Map preview image
- (Hover effects on all)

Footer Bottom:
- Copyright text
- Additional legal links
- Dividers between links
```

---

## 🎬 Interactive Demo Walkthrough

### **Step 1: Hero Section**
```
User lands on page
  ↓
Hero section fades in with breadcrumb
  ↓
Title slides in with animation
  ↓
Subtitle appears 0.2s later
  ↓
Page scrolls to branches section
```

### **Step 2: Branches Section**
```
User scrolls down
  ↓
3 cards appear with staggered animation
  ↓
User hovers over a card
  ↓
Card lifts up 8px
  ↓
Top border slides in (animation)
  ↓
Icon background brightens
  ↓
Text changes to blue
  ↓
User clicks phone card
  ↓
Dialer opens with phone number
```

### **Step 3: Contact Form Section**
```
User scrolls to form
  ↓
Form card appears with box shadow
  ↓
User starts typing in name field
  ↓
As user types:
  • No error messages (field valid)
  • Input has subtle focus effect
  
User enters invalid phone (5 digits)
  ↓
User clicks elsewhere (blur)
  ↓
Error appears: "Please enter valid 10-digit..."
  ↓
Border turns red
  ↓
Background tints pink
  
User corrects phone number
  ↓
Error clears automatically
  ↓
Border returns to normal
  
User fills entire form correctly
  ↓
Clicks "Send Message" button
  ↓
Button scales up slightly (hover)
  ↓
Form validates (all fields OK)
  ↓
Success message appears (green banner)
  ↓
Form clears
  ↓
Success message auto-hides after 5s
```

### **Step 4: Side Info Cards**
```
Business Info Card:
- Always visible on desktop
- Shows 3 easy info items
- Hover lifts card up
- Phone links to dialer
- Location links to map section

Why Choose Us Card:
- Checkmarks with animations
- 4 benefits listed
- Cards slide right on hover
- Checkmarks scale up on hover
```

### **Step 5: Map Section**
```
User scrolls to map
  ↓
Google Map loads
  ↓
Below map: 2 info cards appear
  ↓
User hovers over info card
  ↓
Card moves up (transform: translateY)
  ↓
Shadow deepens
  ↓
Border color changes to blue
```

### **Step 6: Footer**
```
User scrolls to bottom
  ↓
Footer appears with dark blue background
  ↓
4 columns visible equally spaced

When hovering elements:
- Links: arrow appears and slide right
- Social icons: lift up and change gradient
- Section titles: underline appears

User clicks social icon
  ↓
Scales up and lifts
  ↓
Opens external link in new tab
```

---

## 🔄 Responsive Behavior

### **Desktop (1024px+)**
```
Layout:
- Contact section: 2 columns (form left, info right)
- Form sticky positioning
- Full spacing (80px section gaps)
- All elements visible

Grid Layout:
- Branches: 3 columns (auto-fit)
- Footer: 4 columns (auto-fit)
```

### **Tablet (768px - 1023px)**
```
Layout:
- Contact section: 1 column (info moves to top)
- Form loses sticky positioning
- Reduced spacing (60px)
- Touch-friendly buttons

Grid Layout:
- Branches: 1 column (full width)
- Footer: 2 columns
```

### **Mobile (< 768px)**
```
Layout:
- Everything single column
- Reduced padding/spacing
- Larger touch targets (44px minimum)
- Simplified typography

Grid Layout:
- Branches: Full width cards
- Footer: Single narrow column
- Social icons center-aligned
```

---

## 🌙 Dark Mode Support

All components automatically style for dark mode:

```
Light Mode (Default):
- White backgrounds
- Dark text on light
- Blue accents

Dark Mode:
- Dark navy backgrounds (#0d1b2a)
- Light text on dark
- Brighter blue accents (#7bc9ff)
- Darker shadows
- Reduced opacity backgrounds
```

---

## 🎮 Interactive Elements

### **Hover States**
```
Cards:
- Background color change
- Border color change
- Box shadow deepening
- Transform: translateY(-8px)
- Transition: 0.3s ease

Links:
- Color transition
- Arrow animation (slide in)
- Transform: translateX(4px)

Buttons:
- Scale: 1.02x
- Shadow increase
- Color brighten

Icons:
- Scale: 1.08x - 1.15x
- Color change
- Rotation: 5deg
```

### **Focus States** (For accessibility)
```
Inputs:
- Blue outline
- Shadow: 0 0 0 3px rgba(0, 174, 221, 0.1)
- Border color brightens

Buttons:
- Outline: 2px solid
- Outline-offset: 2px
- Color: #0a84cc
```

### **Loading/Validation States**
```
Form Fields:
- Valid input: Green border
- Invalid input: Red border + pink background
- Error message: Red text appears below

Success:
- Green banner appears
- Icon and text animation
- Auto-dismisses after 5s
```

---

## 🎨 CSS Features Used

### **Flexbox**
```
- Navigation alignment
- Card centering
- Form field wrapping
- Footer column layout
```

### **CSS Grid**
```
- Branches section (auto-fit)
- Form layout (2 columns)
- Map info cards (auto-fit)
- Footer (4 columns, responsive)
```

### **Advanced CSS**
```
- CSS variables for colors
- clip-path for diagonal overlay
- backdrop-filter for blur effects
- box-shadow layering
- Linear gradients (120deg, 135deg, 180deg)
- CSS animations (keyframes)
- Calc() for responsive sizing
- Clamp() for fluid typography
```

### **Transitions & Transforms**
```
- All transitions: 0.2s - 0.3s ease
- Transform: translateX, translateY, scale
- Element staggering with animation-delay
- Cubic-bezier for custom easing
```

---

## 📊 Performance Optimizations

```
✓ CSS animations instead of JS
✓ GPU-accelerated transforms
✓ Minimal repaints/reflows
✓ Lazy load images where possible
✓ Optimized box-shadow (hardware accelerated)
✓ CSS containment for paint optimization
✓ Responsive images with srcset ready
```

---

## ♿ Accessibility Features

```
✓ Semantic HTML (form, section, nav, footer)
✓ ARIA labels on buttons/links
✓ Proper heading hierarchy (h1-h3)
✓ Color contrast > 4.5:1
✓ Focus indicators visible
✓ Keyboard navigation support
✓ Form validation messages
✓ Image alt text ready
✓ Reduced motion support
```

---

**Your modern, feature-rich contact page is ready! 🎉**
