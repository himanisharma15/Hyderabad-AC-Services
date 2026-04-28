# Contact Page - Modern React UI Implementation Guide

## 📋 Overview

A premium, fully-responsive Contact Page UI built with React and modern CSS. Features a professional design with smooth animations, glassmorphism effects, and comprehensive form validation.

---

## 📁 File Structure

```
src/
├── pages/
│   ├── ContactPage.jsx           # Main contact page component
│   └── ContactPage.css           # Page-level styling
├── components/
│   └── contact/
│       ├── HeroSection.jsx        # Top banner with breadcrumbs
│       ├── HeroSection.css
│       ├── BranchesSection.jsx    # 3-card contact info section
│       ├── BranchesSection.css
│       ├── ContactFormSection.jsx # Main 2-column contact form
│       ├── ContactFormSection.css
│       ├── MapSection.jsx         # Google Maps embed section
│       ├── MapSection.css
│       ├── PremiumFooter.jsx      # 4-column premium footer
│       └── PremiumFooter.css
```

---

## 🚀 Quick Start

### 1. **Import ContactPage in your App.jsx or Router**

```jsx
import ContactPage from './pages/ContactPage';

// In your router configuration:
<Route path="/contact" element={<ContactPage />} />
```

### 2. **Ensure Dependencies are Installed**

Make sure you have `lucide-react` installed for icons:

```bash
npm install lucide-react
```

Or if using React Icons:

```bash
npm install react-icons
```

### 3. **Update Your App.jsx**

```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/contact" element={<ContactPage />} />
        {/* other routes */}
      </Routes>
    </Router>
  );
}

export default App;
```

---

## 🎨 Component Breakdown

### **1. HeroSection**
- **Purpose**: Eye-catching top banner with breadcrumbs
- **Features**:
  - Diagonal overlay with gradient
  - Animated breadcrumb navigation
  - Responsive typography
  - Staggered animations for text

**Props**: None (static content)

---

### **2. BranchesSection**
- **Purpose**: Display contact options (Phone, Email, Address)
- **Features**:
  - 3-column responsive grid
  - Hover lift effect with top border animation
  - Interactive icons
  - Clickable links to tel:/email:/etc

**Props**: None (static content)

---

### **3. ContactFormSection**
- **Purpose**: Main contact form with business info
- **Features**:
  - Real-time form validation
  - Error message display
  - Success notification
  - 2-column layout (form + info)
  - Business info card with icons
  - "Why Choose Us" section

**State Management**:
```jsx
const [formData, setFormData] = useState({
  name: '',
  phone: '',
  email: '',
  serviceType: 'AC Service',
  message: '',
});
const [submitted, setSubmitted] = useState(false);
const [errors, setErrors] = useState({});
```

**Validation Rules**:
- Name: Required, non-empty
- Phone: Required, 10-digit format
- Email: Required, valid email format
- Message: Required, minimum 10 characters

---

### **4. MapSection**
- **Purpose**: Embedded Google Map and service area info
- **Features**:
  - Responsive iframe
  - Service area information cards
  - Hover effects
  - Custom map preview with SVG

**Props**: None (static content)

**Note**: Update the src URL of the iframe to your specific location

---

### **5. PremiumFooter**
- **Purpose**: Professional 4-column footer
- **Columns**:
  1. Contact Info (Logo, description, phone, email)
  2. Services (5 service links)
  3. Quick Links (6 navigation links)
  4. Connect (Social icons, working hours, map preview)

**Features**:
- Social media links with hover effects
- Working hours section
- Map preview
- Bottom copyright section
- Responsive grid layout
- Animated links with arrow icons

---

## 🎯 Customization Guide

### **Change Contact Information**

In `ContactFormSection.jsx`:
```jsx
const phone = '+91 XXXXXXXXXX'; // Update phone
const email = 'your-email@domain.com'; // Update email
```

In `PremiumFooter.jsx`:
```jsx
const footerData = {
  contact: {
    title: 'Your Company Name',
    phone: '+91 XXXXXXXXXX',
    email: 'your-email@domain.com',
    // ...
  },
  // ...
};
```

### **Update Google Map**

In `MapSection.jsx`, replace the iframe src:
```jsx
src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL"
```

Get your embed URL from: [Google Maps](https://www.google.com/maps)
1. Search for your location
2. Click Share → Embed a map
3. Copy the embed code

### **Change Color Scheme**

All colors use CSS variables in components. Update in CSS files:

```css
--primary-color: #154769;      /* Dark Blue */
--secondary-color: #00aedd;    /* Sky Blue */
--accent-color: #0b84dc;       /* Bright Blue */
```

### **Modify Service Options**

In `ContactFormSection.jsx`:
```jsx
const services = [
  'AC Service',
  'AC Repair',
  'AC Installation',
  'Ducting',
  'Centralized AC',
  'Air Curtain',      // Add new services
  'Copper Piping',
];
```

### **Add/Remove Form Fields**

In `ContactFormSection.jsx`:
1. Add to initial state:
```jsx
const [formData, setFormData] = useState({
  // ... existing fields
  newField: '', // Add here
});
```

2. Add validation
3. Add form group in JSX

---

## 🔧 Advanced Features

### **Form Validation**

The form includes built-in validation:
- Real-time error clearing
- Visual error states (red borders)
- Error message display
- Form submission prevention if errors exist

### **Success Message**

After successful submission:
- Green success notification appears
- Form clears automatically
- Message auto-dismisses after 5 seconds

All data logged to console (update to send to backend):
```jsx
console.log('Form submitted:', formData);
// Replace with: await fetch('/api/contact', { method: 'POST', body: formData })
```

### **Responsive Breakpoints**

- **Desktop**: 1200px+
- **Tablet**: 768px - 1023px
- **Mobile**: < 768px

Grid layout automatically adjusts using `auto-fit`:
```css
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
```

### **Dark Mode Support**

All components include dark mode styling:
```css
body[data-theme="dark"] .class-name {
  /* dark mode styles */
}
```

Ensure your HTML has:
```html
<body data-theme="light"> <!-- or "dark" -->
```

---

## 🎭 Animation & Effects

### **Available Animations**
- `fadeInUp`: Fade in with upward motion
- `slideInLeft`: Slide in from left
- `slideInRight`: Slide in from right
- `scaleIn`: Scale from 0.95 to 1

### **Hover Effects**
- Card lift effect (transform translateY)
- Icon scale and color change
- Border color transitions
- Shadow depth increase
- Text color transitions

---

## 📱 Mobile Optimizations

- Sticky form positioning removed on mobile
- Single column layout for contact section
- Touch-friendly button sizes (44px minimum)
- Optimized font sizes with clamp()
- Simplified grid layouts
- Adjusted padding and spacing

---

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and attributes
- Focus-visible states
- Color contrast compliance
- Keyboard navigation support
- Form validation messages
- Skip to main content links (recommended)
- Reduced motion support

---

## 🔗 Integration with Existing Code

### **With Existing Footer**

If you already have a Footer component:
1. Keep your existing Footer
2. Remove PremiumFooter from ContactPage
3. Or replace your Footer with PremiumFooter

### **With Existing Navbar**

The contact page works independently. Just import and use:
```jsx
import Navbar from './components/Navbar';
import ContactPage from './pages/ContactPage';

<Navbar />
<ContactPage />
```

### **With Theme System**

If you have a theme switcher:
```jsx
const [theme, setTheme] = useState('light');

// Update HTML
useEffect(() => {
  document.body.setAttribute('data-theme', theme);
}, [theme]);
```

---

## 🐛 Troubleshooting

### **Icons Not Showing**
- Install lucide-react: `npm install lucide-react`
- Check component imports are correct

### **Form Not Submitting**
- Check console for validation errors
- Ensure all required fields are filled
- Verify phone number is 10 digits
- Check email format

### **Styling Issues**
- Verify CSS files are imported
- Check for CSS conflicts
- Clear browser cache
- Ensure font family (Poppins/Inter) is available

### **Map Not Displaying**
- Verify embed URL is correct
- Check for CORS issues
- Ensure iframe src protocol is https://

---

## 📊 Performance Tips

1. **Optimize Images**: Replace SVG data URLs with actual images if needed
2. **Code Splitting**: Lazy load footer if not needed immediately
3. **CSS Optimization**: Remove unused styles
4. **Form Debouncing**: Add debounce for validation on large forms
5. **Map Lazy Loading**: Load map only when section is visible

---

## 🌐 Browser Support

- Chrome/Edge: Latest versions
- Firefox: Latest versions
- Safari: Latest versions
- Mobile browsers: iOS Safari 12+, Chrome Android 80+

---

## 📝 Form Backend Integration

Replace the submit handler with your backend call:

```jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  const newErrors = validateForm();

  if (Object.keys(newErrors).length === 0) {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitted(true);
        setFormData({ /* reset */ });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
};
```

---

## 🎁 Bonus Features

### **Smooth Scroll**
Already included in CSS:
```css
html {
  scroll-behavior: smooth;
}
```

### **Print Friendly**
Print styles included in ContactPage.css

### **Form Auto-clear**
Form clears 5 seconds after successful submission

### **Icon Animations**
Icons scale and rotate on hover

### **Semantic HTML**
All elements use proper semantic HTML tags

---

## 📞 Support & Questions

For issues or customization requests:
1. Check component documentation above
2. Review CSS for styling
3. Inspect browser console for errors
4. Verify all dependencies are installed

---

## ✨ Future Enhancements

- [ ] Add reCAPTCHA verification
- [ ] Implement email notifications
- [ ] Add file upload for attachments
- [ ] Implement live chat widget
- [ ] Add calendar booking system
- [ ] SMS notifications integration
- [ ] Multi-language support
- [ ] A/B testing variants

---

**Version**: 1.0.0  
**Last Updated**: April 2026  
**License**: MIT
