❄️ Hyderabad AC Services – Premium React Overhaul
This repository contains the source code for the modern, high-conversion redesign of the Hyderabad AC Services platform. Built with a focus on speed, mobile-first responsiveness, and a "premium-cool" aesthetic.

🛠 Tech Stack
Core: React.js (Functional Components + Hooks)

Routing: React Router 6 (Clean, nested service routes)

Styling: Tailwind CSS (Utility-first for rapid UI development)

Animations: Framer Motion (For premium page transitions and scroll reveals)

Icons: Lucide React (Elegant, lightweight stroke icons)

Form Handling: React Hook Form + Zod (For the instant booking engine)

State Management: Zustand (Lightweight booking state management)

✨ Premium UI/UX Features
1. The "Bento" Service Grid
Replacing cluttered lists with a modern, responsive grid. Each service (Split AC, Window AC, Central Cooling) is housed in a high-contrast card with subtle hover scales.

2. Glassmorphic Booking Engine
A floating "Instant Quote" component using backdrop-blur effects. It guides the user through a 3-step process:

Selection: (Repair, Service, or Gas Charging)

Scheduling: (Date/Time picker)

Confirmation: (WhatsApp-integrated lead generation)

3. Hyper-Local Context
The UI dynamically highlights service areas in Hyderabad (Kukatpally, Madhapur, Secunderabad, etc.) based on user selection to build immediate geographical trust.

📁 Project Structure
Plaintext
src/
├── assets/          # Compressed WebP images & Brand SVGs
├── components/
│   ├── ui/          # Reusable "Atomic" components (Buttons, Inputs, Cards)
│   ├── layout/      # Navbar, Footer, Section wrappers
│   └── booking/     # Multi-step booking form logic
├── hooks/           # useScroll, useWindowSize, useBooking
├── pages/           # Home, Services, About, Contact
├── theme/           # Tailwind extend (Colors: #0EA5E9, #1E293B)
└── App.js           # Route definitions
🚀 Getting Started
Clone the repo:

Bash
git clone https://github.com/your-username/hyd-ac-react.git
Install Dependencies:

Bash
npm install
Run Development Server:

Bash
npm run dev
📈 Performance & UX Goals
LCP (Largest Contentful Paint): < 1.5s

Conversion Rate Goal: Increase lead generation by 40% via "One-Tap Call" optimization.

Accessibility: Full ARIA compliance for inclusive service booking.
