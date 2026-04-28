# Contact Page - Code Examples & Customization

## 🔧 Common Customizations

### 1. Update Company Information

**File**: `src/components/contact/ContactFormSection.jsx`

```jsx
// Change contact details
<div className="info-item">
  <div className="info-icon">📞</div>
  <div className="info-text">
    <p className="info-label">Phone</p>
    <a href="tel:+91XXXXXXXXXX" className="info-value">
      +91 XXXXXXXXXX  {/* Update phone number */}
    </a>
  </div>
</div>
```

**File**: `src/components/contact/PremiumFooter.jsx`

```jsx
const footerData = {
  contact: {
    title: 'Hyderabad AC Services',  // Update company name
    description: 'Your description here',
    phone: '+91 XXXXXXXXXX',  // Update phone
    email: 'your-email@domain.com',  // Update email
    hours: '9 AM – 9 PM',  // Update hours
  },
  // ...
};
```

---

### 2. Add More Service Options

**File**: `src/components/contact/ContactFormSection.jsx`

```jsx
const services = [
  'AC Service',
  'AC Repair',
  'AC Installation',
  'Ducting',
  'Centralized AC',
  'Air Curtain',        // Add new
  'Copper Piping',      // Add new
  'Window AC',          // Add new
  'Split AC',           // Add new
  'Maintenance Plan',   // Add new
];
```

---

### 3. Integrate with Backend API

**File**: `src/components/contact/ContactFormSection.jsx`

Replace the `handleSubmit` function:

```jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  const newErrors = validateForm();

  if (Object.keys(newErrors).length === 0) {
    try {
      // Show loading state
      setLoading(true);
      
      // Send data to backend
      const response = await fetch('https://your-api.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer YOUR_API_KEY'  // If needed
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: 'contact-page'
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const data = await response.json();
      console.log('Success response:', data);
      
      // Clear form and show success
      setSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        serviceType: 'AC Service',
        message: '',
      });
      
      setTimeout(() => setSubmitted(false), 5000);
      
    } catch (error) {
      console.error('Error sending message:', error);
      setErrors({ submit: 'Failed to send message. Please try again.' });
    } finally {
      setLoading(false);
    }
  } else {
    setErrors(newErrors);
  }
};
```

Add loading state:

```jsx
const [loading, setLoading] = useState(false);

// In button:
<button type="submit" className="submit-btn" disabled={loading}>
  {loading ? 'Sending...' : 'Send Message'}
</button>
```

---

### 4. Add Email Sending (Backend Example - Node.js)

```javascript
// Backend: server.js (Express + Nodemailer example)
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.use(express.json());

// Configure email service
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post('/api/contact', async (req, res) => {
  const { name, phone, email, serviceType, message } = req.body;

  try {
    // Send to admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'admin@hyderabadacservices.com',
      subject: `New Contact Form: ${serviceType}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${serviceType}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    // Send confirmation to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Hyderabad AC Services',
      html: `
        <h2>Thank You!</h2>
        <p>Dear ${name},</p>
        <p>We've received your message and will get back to you soon.</p>
        <p>Best regards,<br>Hyderabad AC Services Team</p>
      `,
    });

    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(3001, () => console.log('Server running on port 3001'));
```

---

### 5. Add reCAPTCHA Verification

**Install**: `npm install react-google-recaptcha`

**File**: `src/components/contact/ContactFormSection.jsx`

```jsx
import ReCAPTCHA from "react-google-recaptcha";

function ContactFormSection() {
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const handleRecaptcha = (token) => {
    setRecaptchaToken(token);
  };

  // In JSX:
  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {/* ... existing fields ... */}
      
      <ReCAPTCHA
        sitekey="YOUR_RECAPTCHA_SITE_KEY"
        onChange={handleRecaptcha}
      />
      
      {/* ... */}
    </form>
  );
}
```

---

### 6. Add Form Field for Attachment

```jsx
const [formData, setFormData] = useState({
  // ... existing fields
  attachment: null,
});

// In form:
<div className="form-group">
  <label htmlFor="attachment" className="form-label">
    Attach File (Optional)
  </label>
  <input
    type="file"
    id="attachment"
    name="attachment"
    onChange={(e) => setFormData({...formData, attachment: e.target.files[0]})}
    accept=".pdf,.doc,.docx,.jpg,.png"
    className="form-input"
  />
  <p className="form-hint">Max 5MB. Accepted: PDF, DOC, JPG, PNG</p>
</div>
```

---

### 7. Send SMS Notification (Optional)

**Install**: `npm install twilio`

**Backend Example**:

```javascript
const twilio = require('twilio');

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

app.post('/api/contact', async (req, res) => {
  const { phone, name, message } = req.body;

  try {
    // Send SMS notification to admin
    await client.messages.create({
      from: process.env.TWILIO_PHONE,
      to: '+91XXXXXXXXXX',  // Admin phone
      body: `New Contact: ${name} (${phone}) - ${message.substring(0, 50)}...`,
    });

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

---

### 8. Add Phone Number Formatting

```jsx
// In ContactFormSection.jsx
const formatPhoneNumber = (value) => {
  const cleaned = value.replace(/\D/g, '');
  if (cleaned.length <= 3) return cleaned;
  if (cleaned.length <= 6) return `${cleaned.slice(0, 3)}-${cleaned.slice(3)}`;
  return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
};

const handlePhoneChange = (e) => {
  const formatted = formatPhoneNumber(e.target.value);
  setFormData({...formData, phone: formatted});
};

// In input:
<input
  type="tel"
  id="phone"
  value={formData.phone}
  onChange={handlePhoneChange}
  placeholder="XXX-XXX-XXXX"
  className="form-input"
/>
```

---

### 9. Add Analytics Tracking

```jsx
// In ContactFormSection.jsx
const handleSubmit = (e) => {
  e.preventDefault();
  
  // Track event
  if (window.gtag) {
    window.gtag('event', 'form_submission', {
      'form_name': 'contact_form',
      'service_type': formData.serviceType,
    });
  }
  
  // ... rest of submission logic
};
```

---

### 10. Change Map Location

**File**: `src/components/contact/MapSection.jsx`

To get new embed code:
1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your location
3. Click "Share" → "Embed a map"
4. Copy the embed code

```jsx
<iframe
  title="New Location"
  className="map-iframe"
  src="https://www.google.com/maps/embed?pb=NEW_EMBED_CODE_HERE"
  allowFullScreen=""
  loading="lazy"
></iframe>
```

---

### 11. Add Testimonials/Reviews Section

Create new file: `src/components/contact/TestimonialsSection.jsx`

```jsx
import React from 'react';
import { Star } from 'lucide-react';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      service: 'AC Service',
      rating: 5,
      text: 'Professional service, very satisfied!',
      avatar: '👨‍💼',
    },
    {
      name: 'Priya Singh',
      service: 'AC Installation',
      rating: 5,
      text: 'Best technicians in the city!',
      avatar: '👩‍💼',
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2>What Our Customers Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#FFD700" />
                ))}
              </div>
              <p>{testimonial.text}</p>
              <p className="customer-name">{testimonial.name}</p>
              <p className="service-type">{testimonial.service}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
```

---

### 12. Add Auto-Reply Email

```jsx
// Combined with API integration
const handleSubmit = async (e) => {
  // ... validation ...
  
  const mailResponse = await fetch('/api/send-auto-reply', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: formData.email, name: formData.name }),
  });
};
```

**Backend**:

```javascript
app.post('/api/send-auto-reply', async (req, res) => {
  const { email, name } = req.body;

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'We received your inquiry - Hyderabad AC Services',
      template: 'auto-reply',  // Use template
      context: { name },
    });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

---

## 🎨 Styling Customization

### Change Primary Color

**Find all files** in `src/components/contact/*.css` and update:

```css
/* Before */
color: #154769;
background: linear-gradient(120deg, #0b84dc 0%, #0a6cc8 100%);

/* After */
color: #YOUR_COLOR;
background: linear-gradient(120deg, #YOUR_COLOR_LIGHT 0%, #YOUR_COLOR_DARK 100%);
```

Or add CSS variables at top of ContactPage.css:

```css
:root {
  --primary-color: #154769;
  --secondary-color: #00aedd;
  --accent-color: #0b84dc;
  --success-color: #22d360;
  --error-color: #ef4444;
}

/* Then use in components */
color: var(--primary-color);
background: linear-gradient(120deg, var(--accent-color) 0%, var(--primary-color) 100%);
```

---

### Change Font Family

In ContactPage.css:

```css
:root {
  --font-primary: 'Poppins', sans-serif;
  --font-secondary: 'Inter', sans-serif;
}

body {
  font-family: var(--font-primary);
}
```

Add to index.html `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

---

## 📱 Mobile Customization

Adjust mobile breakpoints in CSS files:

```css
/* Current breakpoint */
@media (max-width: 768px) { }
@media (max-width: 480px) { }

/* Add tablet-specific */
@media (max-width: 1024px) { }

/* Add large screens */
@media (min-width: 1920px) { }
```

---

## 🔐 Security Best Practices

1. **Input Validation**
   ```jsx
   const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
   const validatePhone = (phone) => /^\d{10}$/.test(phone.replace(/\D/g, ''));
   ```

2. **Rate Limiting** (Backend)
   ```javascript
   const rateLimit = require('express-rate-limit');
   const limiter = rateLimit({
     windowMs: 15 * 60 * 1000,
     max: 5  // 5 requests per 15 minutes
   });
   app.post('/api/contact', limiter, (req, res) => {});
   ```

3. **CORS Configuration**
   ```javascript
   const cors = require('cors');
   app.use(cors({
     origin: 'https://yourdomain.com',
     credentials: true
   }));
   ```

4. **Sanitize Input**
   ```javascript
   const sanitizeHtml = require('sanitize-html');
   const cleanMessage = sanitizeHtml(message);
   ```

---

## 📊 Advanced Form Analytics

Track form interactions:

```jsx
useEffect(() => {
  const handleBeforeUnload = () => {
    if (formData.name || formData.email || formData.message) {
      // User started filling but didn't submit
      console.log('Form abandoned:', formData);
    }
  };

  window.addEventListener('beforeunload', handleBeforeUnload);
  return () => window.removeEventListener('beforeunload', handleBeforeUnload);
}, [formData]);
```

---

**Ready to customize! Choose any enhancement above and integrate with ease. 🚀**
