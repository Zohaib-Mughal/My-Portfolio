Zohaib Munir — Developer Portfolio

A responsive, production-ready personal portfolio built with React and Tailwind CSS, showcasing my work as a full-stack MERN developer.

Live Demo: will be added when portfolio is live...

✨ Features
Fully responsive — mobile-first design tested across phone, tablet, and desktop breakpoints
Scroll-aware navbar — transparent over the hero, solid on scroll, with an accessible mobile menu
Animated hero section — rotating role titles with fade transitions, respects prefers-reduced-motion
Filterable project grid — hover-reveal project details with tech tags and live demo links
Tiered skills showcase — grouped by proficiency (Using Now / Learning / Other)
Working contact form — powered by EmailJS, no backend required
Reusable design-system components — shared SectionLabel, Divider, and BracketLink components keep styling consistent across every section
Accessible markup — semantic HTML, aria-labels on icon buttons, keyboard-operable navigation
🛠 Tech Stack
Category	Technology
Framework	React (Vite)
Styling	Tailwind CSS
Forms	EmailJS (@emailjs/browser)
Icons	Custom SVGs (skills), inline glyphs (social)
Deployment	Vercel / Netlify (recommended)
📁 Project Structure
src/
├── assets/
│   ├── icons/
│   │   └── skills/          # Tech stack logos (SVG)
│   └── images/
│       └── hero.png         # Profile photo
├── components/
│   ├── ui/
│   │   ├── SectionLabel.jsx # Reusable boxed section heading
│   │   ├── Divider.jsx      # Decorative section divider
│   │   └── BracketLink.jsx  # Reusable bracket-style link/button
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Banner.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Portfolio.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── data/
│   ├── about.js              # Bio copy + feature list
│   ├── skills.js              # Skills grouped by tier
│   ├── projects.js            # Project details
│   └── social.js              # Social links
├── App.jsx
└── main.jsx

Content (data/) is separated from layout (components/) throughout the project — updating text, links, or projects never requires touching component code.

🚀 Getting Started
Prerequisites
Node.js 18+
npm or yarn
Installation
bash
git clone https://github.com/Zohaib-Mughal/portfolio.git
cd portfolio
npm install
Environment Variables

This project uses EmailJS to handle contact form submissions without a backend. Create a .env file in the project root:

env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

To get these values:

Create a free account at emailjs.com
Set up an Email Service (e.g. Gmail) and note the Service ID
Create an Email Template with name, email, phone, and message variables, note the Template ID
Find your Public Key under Account → API Keys

.env is gitignored by default — never commit real keys.

Run locally
bash
npm run dev

The app will be available at http://localhost:5173.

Build for production
bash
npm run build

Output is generated in the dist/ folder, ready to deploy to any static host.

📦 Deployment

This project deploys cleanly to Vercel or Netlify:

Push your code to GitHub
Import the repo into Vercel/Netlify
Add the same VITE_EMAILJS_* environment variables in your host's dashboard (Project Settings → Environment Variables)
Deploy
🧩 Customization
Colors: the site uses a black / light-gray (
#e5e5e5) base with minimal accent color — update Tailwind classes directly in each component, or extend tailwind.config.js with custom theme tokens if you want centralized control.
Sections: each section is a standalone component rendered in App.jsx — reorder, remove, or add new ones independently.
Content: all text, links, and project data live in src/data/ — edit those files directly, no JSX changes needed for content updates.
📄 License

This project is open for personal reference. Feel free to fork it for learning purposes — please don't republish it as your own portfolio content.

📬 Contact
Email: zohaibmughal0122@gmail.com
LinkedIn: linkedin.com/in/zohaib-munirr
GitHub: github.com/Zohaib-Mughal
