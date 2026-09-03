# Vidhushika Francis — Personal Brand & Digital Portfolio

[![Live Site](https://img.shields.io/badge/Live%20Site-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://francisjv.github.io/Portfolio/)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A modern, high-performance personal brand and digital portfolio website engineered for **Vidhushika Francis** (BSc Hons in Information Technology – Specializing in Data Science).

🌐 **Live Website**: [https://francisjv.github.io/Portfolio/](https://francisjv.github.io/Portfolio/)

---

## 🎯 Purpose & Focus Areas

1. **Technology Career Portfolio**: Showcases hands-on expertise in Data Analytics, Power BI, SQL, Python, Business Analysis, and AI Automation for technical recruiters and hiring managers.
2. **Freelance Services Platform**: Clear service offerings and deliverables for small businesses, startups, and data-driven initiatives.
3. **Project Guidance & Mentoring**: Guidance topics and structured support for university students and early-career technologists.

---

## 🚀 Technology Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with a curated dark violet/slate palette
- **Icons**: [Lucide React](https://lucide.dev/)
- **Contact Form**: [Formspree](https://formspree.io/)
- **Deployment**: [GitHub Pages](https://pages.github.com/) via automated GitHub Actions

---

## 📂 Project Structure

All data and content are isolated in the `src/data/` directory, allowing seamless updates without modifying component logic:

```text
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── favicon.svg               # Monogram favicon
│   ├── profile.jpeg              # Professional portrait photo
│   ├── robots.txt                # Search engine crawler directives
│   └── sitemap.xml               # Search engine sitemap
├── src/
│   ├── components/               # Modular UI components
│   │   ├── About.jsx
│   │   ├── Button.jsx
│   │   ├── CapabilityStrip.jsx
│   │   ├── Contact.jsx
│   │   ├── Container.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Expertise.jsx
│   │   ├── Footer.jsx
│   │   ├── FreelanceCTA.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectGuidance.jsx
│   │   ├── ProjectModal.jsx
│   │   ├── Projects.jsx
│   │   ├── SectionHeading.jsx
│   │   ├── Services.jsx
│   │   └── Tag.jsx
│   ├── data/                     # ⭐ EDIT YOUR CONTENT HERE
│   │   ├── education.js          # Degree, certifications, and achievements
│   │   ├── experience.js         # Career timeline and work history
│   │   ├── guidance.js           # Student mentoring topics & integrity notice
│   │   ├── projects.js           # Projects, case studies, and research links
│   │   ├── services.js           # Freelance service packages & deliverables
│   │   ├── siteConfig.js         # Master info, name, email, hero headline
│   │   ├── skills.js             # Technical skill categories & tools
│   │   └── socialLinks.js        # LinkedIn, GitHub, and email links
│   ├── hooks/
│   │   ├── useReducedMotion.js   # Accessibility hook for motion preferences
│   │   └── useScrollSpy.js       # Active navigation scroll spy
│   ├── utils/
│   │   └── cn.js                 # Tailwind class merging utility
│   ├── App.jsx                   # Main single-page application layout
│   ├── index.css                 # Tailwind directives and custom utilities
│   └── main.jsx                  # React DOM root entry
├── index.html                    # SEO metadata, OpenGraph, and Schema.org markup
├── tailwind.config.js            # Custom design tokens, colors & shadows
└── vite.config.js                # Vite build and base path configuration
```

---

## 🛠️ Getting Started

### Prerequisites
- **Node.js** (v18.0.0 or later): [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/FrancisJV/Portfolio.git
   cd Portfolio
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally
Start the development server with Hot Module Reloading (HMR):
```bash
npm run dev
```
Open [http://127.0.0.1:5173/](http://127.0.0.1:5173/) in your browser.

### Building for Production
To create an optimized production build in the `dist/` directory:
```bash
npm run build
```

### Previewing the Production Build
To test the production build locally:
```bash
npm run preview
```

### Running Automated Verification
Run the built-in integrity and privacy check script:
```bash
node test-verify.js
```

---

## 📖 Customization Guide

### 1. Master Personal Info & Hero Section
Open `src/data/siteConfig.js` to update:
- `name`: Display name.
- `role`: Professional title / specialization.
- `email`: Primary contact email address.
- `availability.status`: Availability badge text.
- `hero.headline`: Dominant hero headline.
- `hero.bio`: Hero supporting value proposition paragraph.
- `capabilityStrip`: List of key skills shown in the horizontal strip below the hero.

### 2. Social Links & Profiles
Open `src/data/socialLinks.js` to update your contact channels:
```javascript
export const socialLinks = {
  email: {
    label: "Email",
    value: "vidhushika.remote@gmail.com",
    href: "mailto:vidhushika.remote@gmail.com",
  },
  linkedin: {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/vidhushika-francis-91b560227/",
  },
  github: {
    label: "GitHub",
    url: "https://github.com/FrancisJV",
  }
};
```

### 3. Adding or Updating Projects
Open `src/data/projects.js` and edit the `projectsData` array:
```javascript
{
  id: "my-project-slug",
  title: "Project Title",
  fullTitle: "Detailed Descriptive Title",
  category: "Web & Apps", // "Research & AI" | "Data & Cloud" | "Web & Apps" | "Concepts & Data"
  badge: "Full-Stack",
  shortDescription: "A concise summary of what this project accomplishes.",
  featured: true,
  technologies: ["React", "Python", "SQL", "Power BI"],
  problem: "What real-world business challenge did this solve?",
  solution: "How did your technical solution address the problem?",
  contribution: "What was your specific hands-on role?",
  learnings: "Key skills, insights, or architectural lessons gained.",
  github: "https://github.com/FrancisJV/your-repo",
  liveDemo: "https://your-demo.com",
  status: "Completed"
}
```

### 4. Technical Skills
Open `src/data/skills.js` to add, edit, or reorganize technical skill chips under categories like Data Analytics, Business Analysis, Cloud & Databases, QA & Testing, Web Development, and Core Competencies.

### 5. Work Experience & Career Timeline
Open `src/data/experience.js` to modify roles, organizations, dates, responsibilities, and achievements.

### 6. Freelance Services & Offerings
Open `src/data/services.js` to update service packages, badges, descriptions, and deliverable bullet points.

### 7. Configuring the Contact Form
1. Create a free form at [Formspree.io](https://formspree.io/).
2. Copy your Formspree endpoint (e.g. `https://formspree.io/f/xbjwpkzl`).
3. Create a `.env` file in the project root:
   ```bash
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
   ```
4. When deploying via GitHub Actions, add it as a repository secret under **Settings** $\rightarrow$ **Secrets and variables** $\rightarrow$ **Actions** with the name `VITE_FORMSPREE_ENDPOINT`.

---

## 🌐 Deployment (GitHub Actions)

This repository includes continuous deployment to GitHub Pages via `.github/workflows/deploy.yml`.

Every push to the `main` branch automatically:
1. Checks out the repository.
2. Installs dependencies (`npm ci`).
3. Builds the optimized Vite production bundle with the `/Portfolio/` base path.
4. Deploys the static assets directly to GitHub Pages.

**Repository Settings Requirement:**
- Go to repository **Settings** $\rightarrow$ **Pages**.
- Under **Build and deployment** $\rightarrow$ **Source**, ensure **`GitHub Actions`** is selected.

---

## 🔒 Privacy & Quality Standards

- **Strict Privacy**: Personal phone numbers and sensitive documents are omitted from public HTML, source code, and bundles.
- **Responsive Layout**: Designed for seamless viewing on mobile (320px+) through standard desktop (1440px) and wide displays.
- **WCAG Accessibility**: High-contrast text ratios, visible focus outlines, keyboard navigability, and smooth reduced-motion awareness.
- **SEO Optimized**: OpenGraph meta tags, Twitter card support, and Schema.org JSON-LD structured data.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
