# Contact Page - Quick Setup Reference

## 📦 Files Created

```
src/
├── pages/
│   ├── ContactPage.jsx ...................... Main Page Component
│   └── ContactPage.css ....................... Page Styles
└── components/contact/
    ├── HeroSection.jsx ....................... Hero Banner
    ├── HeroSection.css
    ├── BranchesSection.jsx .................. Contact Options
    ├── BranchesSection.css
    ├── ContactFormSection.jsx ............... Main Form + Info
    ├── ContactFormSection.css
    ├── MapSection.jsx ........................ Maps & Location
    ├── MapSection.css
    ├── PremiumFooter.jsx ..................... Professional Footer
    └── PremiumFooter.css
```

---

## 🚀 Setup Instructions

### Step 1: Install Dependencies
```bash
npm install lucide-react
```

### Step 2: Update Your Router

In your main routing file (App.jsx or router.jsx):

```jsx
import ContactPage from './pages/ContactPage';

// Add to Routes
<Route path="/contact" element={<ContactPage />} />
```

### Step 3: Update Navbar Links (Optional)

In your Navbar.jsx, add the contact link:
```jsx
<a href="/contact" className="navbar__menu-link">
  Contact
</a>
```

---

## 📋 Component Imports

```jsx
// Individual imports
import HeroSection from '../components/contact/HeroSection';
import BranchesSection from '../components/contact/BranchesSection';
import ContactFormSection from '../components/contact/ContactFormSection';
import MapSection from '../components/contact/MapSection';
import PremiumFooter from '../components/contact/PremiumFooter';

// Or use the combined ContactPage
import ContactPage from './pages/ContactPage';
```

---

## 🎨 Design Specifications

### Color Palette
```
Primary:      #154769  (Dark Blue)
Secondary:    #00aedd  (Sky Blue)
Accent:       #0b84dc  (Bright Blue)
Background:   #ffffff  (White)
Text:         #56687b  (Gray)
Success:      #22d360  (Green)
Error:        #ef4444  (Red)
```

### Typography
```
Font Family:  Poppins, Inter (fallback: sans-serif)
Heading:      800 weight (Bold)
Body:         500-600 weight
Button:       700 weight (Bold)
```

### Spacing
```
Section Gap:     80px (desktop) / 60px (tablet) / 40px (mobile)
Card Padding:    2.5rem (desktop) / 2rem (tablet) / 1.5rem (mobile)
Border Radius:   16px (cards) / 10-12px (inputs/buttons)
Box Shadow:      0 8px 24px rgba(21, 71, 105, 0.1)
```

---

## 🔧 Customization Quick Links

### Change Phone Number
**File**: `ContactFormSection.jsx` (line ~20)
**File**: `PremiumFooter.jsx` (line ~35)
```jsx
phone: '+91 XXXXXXXXXX'
```

### Change Email
**File**: `ContactFormSection.jsx` (line ~50)
**File**: `PremiumFooter.jsx` (line ~36)
```jsx
email: 'your-email@domain.com'
```

### Change Google Map
**File**: `MapSection.jsx` (line ~35)
```jsx
src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL"
```

### Update Service List
**File**: `ContactFormSection.jsx` (line ~30)
```jsx
const services = [
  'AC Service',
  'AC Repair',
  // Add/remove services
];
```

### Change Colors
**File**: `*.css` files
Update CSS variables or color values throughout

---

## 📱 Responsive Breakpoints

| Device | Width | Behavior |
|--------|-------|----------|
| Mobile | < 480px | Single column, adjusted fonts |
| Tablet | 480-768px | Responsive grid, reduced spacing |
| Desktop | 768-1024px | 2-column layout, standard spacing |
| Wide | > 1024px | Full layout with max-width |

---

## ✅ What's Included

### Features
✓ Hero Section with diagonal overlay  
✓ 3-card branches section  
✓ 2-column contact form with validation  
✓ Business information card  
✓ "Why choose us" section  
✓ Google Maps embedded  
✓ 4-column premium footer  
✓ Form validation (name, phone, email, message)  
✓ Success notification  
✓ Dark mode support  
✓ Fully responsive design  
✓ Smooth animations  
✓ Hover effects  
✓ Accessibility features  
✓ Mobile optimizations  

### Not Included (Add as needed)
- Backend API integration (placeholder only)
- reCAPTCHA verification
- Email notifications
- File uploads
- Live chat
- Calendar booking

---

## 📊 Component Tree

```
ContactPage
├── HeroSection
├── BranchesSection
│   ├── Branch Card (Phone)
│   ├── Branch Card (Email)
│   └── Branch Card (Address)
├── ContactFormSection
│   ├── Contact Form Wrapper
│   │   ├── Form Header
│   │   ├── Form Field (Name)
│   │   ├── Form Field (Phone)
│   │   ├── Form Field (Email)
│   │   ├── Form Field (Service Dropdown)
│   │   ├── Form Field (Message)
│   │   └── Submit Button
│   └── Contact Info Wrapper
│       ├── Business Info Card
│       └── Why Choose Us Card
├── MapSection
│   ├── Map Container
│   ├── Embedded Google Map
│   └── Map Info Cards
└── PremiumFooter
    ├── Footer Main (4 columns)
    │   ├── Contact Column
    │   ├── Services Column
    │   ├── Quick Links Column
    │   └── Social/Hours Column
    └── Footer Bottom (Copyright)
```

---

## 🎯 Key Props & State

### ContactFormSection
```jsx
// State
formData: { name, phone, email, serviceType, message }
submitted: boolean
errors: { name, phone, email, message }

// No external props required
```

### Other Components
All other components are stateless and require no props.

---

## 🔗 Links & Routes

Update these internal links to match your routing:

```jsx
// Navbar links
'/contact'
'/services/ac-service'
'/about'
'/services'

// Footer links
'/'
'/services'
'/about'
'/terms'
'/privacy'
'/sitemap'

// External links
'https://facebook.com'
'https://instagram.com'
'https://wa.me/918712322475'
```

---

## 🎉 You're All Set!

Your modern, professional contact page is ready to use. Here's what to do next:

1. ✅ Install `npm install lucide-react`
2. ✅ Add route to your router
3. ✅ Update phone/email numbers
4. ✅ Customize Google Maps embed
5. ✅ Test on mobile devices
6. ✅ Connect form to backend

---

## 📞 Form Submission Flow

Current Implementation (Console Only):
```
User fills form → Validation check → 
If valid: Log to console, show success message, clear form
If invalid: Show error messages, highlight fields
```

To Add Backend Integration:
```jsx
// In handleSubmit:
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

---

## 🌙 Dark Mode

Automatically supported! Styles are included for:
```html
<body data-theme="dark">
```

All colors adjust automatically based on theme attribute.

---

## 🎨 CSS Architecture

- **Global Animations**: Defined in ContactPage.css
- **Component Styles**: Each component has its own .css file
- **Responsive Design**: CSS Grid with auto-fit for flexibility
- **Dark Mode**: CSS variables and media queries
- **Print Styles**: Included in ContactPage.css

---

**Ready to go! 🚀**
