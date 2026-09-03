# Vidhushika Francis — Personal Brand & Portfolio

A production-grade, highly maintainable personal brand website and digital portfolio engineered for **Vidhushika Francis** (BSc Hons in Information Technology, Specializing in Data Science).

Designed to serve three connected goals:
1. **Technology Career Portfolio** for technical recruiters and hiring managers.
2. **Freelance Services Platform** for small businesses, startups, and entrepreneurs.
3. **Project Guidance & Mentoring Hub** for university students and beginner developers.

---

## 🚀 Technology Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: JavaScript (ES6+) — *Clean, beginner-friendly architecture without TypeScript*
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Form Inquiries**: [Formspree](https://formspree.io/)
- **Hosting**: GitHub Pages (via automated GitHub Actions)

---

## 📂 Project Structure

All editable content is intentionally separated from React component logic into the `src/data/` folder so you can easily update your portfolio without touching complex JSX:

```text
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automated GitHub Pages deployment
├── public/
│   ├── favicon.svg               # Monogram favicon
│   ├── profile.jpeg              # Professional portrait photograph
│   ├── robots.txt                # Search engine crawler instructions
│   └── sitemap.xml               # Search engine sitemap
├── src/
│   ├── components/               # UI components (Navbar, Hero, Projects, etc.)
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
│   ├── data/                     # ⭐ EDIT YOUR PORTFOLIO DATA HERE
│   │   ├── education.js          # Degree, certifications, and leadership
│   │   ├── experience.js         # Career timeline and work history
│   │   ├── guidance.js           # Student mentoring topics & integrity notice
│   │   ├── projects.js           # Projects, case studies, and publication links
│   │   ├── services.js           # Freelance service packages and deliverables
│   │   ├── siteConfig.js         # Master info, name, email, hero headline, CV
│   │   ├── skills.js             # 7 Skill categories and tools
│   │   └── socialLinks.js        # LinkedIn, GitHub, and email links
│   ├── hooks/
│   │   ├── useReducedMotion.js   # Accessibility hook for reduced motion
│   │   └── useScrollSpy.js       # Active section tracker for navigation
│   ├── utils/
│   │   └── cn.js                 # Tailwind class merging utility
│   ├── App.jsx                   # Main single-page application orchestrator
│   ├── index.css                 # Tailwind directives, scrollbars, and design system
│   └── main.jsx                  # React DOM root entry
├── .env.example                  # Environment configuration template
├── index.html                    # HTML metadata, OpenGraph, and JSON-LD schema
├── package.json                  # Dependencies and scripts
├── tailwind.config.js            # Custom color palette and typography
└── vite.config.js                # Vite build and base path configuration
```

---

## 🛠️ Prerequisites & Installation

### Prerequisites
- **Node.js** (v18.0.0 or later): [Download Node.js](https://nodejs.org/)
- **Git**: [Download Git](https://git-scm.com/)

### Installation
1. Clone or open this repository in your terminal / VS Code.
2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally
Start the Vite local development server:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000`.

### Building for Production
To create an optimized production build in the `dist/` directory:
```bash
npm run build
```

---

## 📖 How to Update Your Portfolio

### 1. How to Change Your Name, Title, Email, or Hero Headline
Open `src/data/siteConfig.js`. You can edit:
- `name`: Your full display name.
- `role`: Your primary positioning title.
- `email`: Your direct email address.
- `hero.headline`: The main headline displayed in the hero section.
- `hero.bio`: The introductory bio text.
- `availability.status`: The availability pill text (e.g., "Available for opportunities & selected freelance projects").

### 2. How to Add Your LinkedIn & GitHub Links
Open `src/data/socialLinks.js`:
```javascript
export const socialLinks = {
  email: {
    label: "Email",
    value: "vidhushika.francis@gmail.com",
    href: "mailto:vidhushika.francis@gmail.com",
  },
  linkedin: {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/your-profile-url", // 👈 Paste your LinkedIn profile URL here
  },
  github: {
    label: "GitHub",
    url: "https://github.com/FrancisJV", // 👈 Paste your GitHub profile URL here
  }
};
```
*Note: If the `url` string is left empty `""`, the respective button is safely hidden.*

### 3. How to Add or Update a Project
Open `src/data/projects.js` and add a new object to the `projectsData` array:
```javascript
{
  id: "my-new-project",
  title: "Project Name",
  fullTitle: "Detailed Subtitle or Research Title",
  category: "Web & Apps", // One of: "Research & AI", "Data & Cloud", "Web & Apps", "Concepts & Data"
  badge: "Full-Stack",
  shortDescription: "A concise 2-sentence summary of what this project does.",
  featured: false,
  technologies: ["React", "Python", "SQL"],
  problem: "What real-world problem or business challenge did this solve?",
  solution: "How did your technical solution address the problem?",
  contribution: "What was your specific hands-on role and contribution?",
  learnings: "What key skills or lessons did you gain from building this?",
  publication: null, // Or { label: "View Paper", url: "https://..." }
  github: "https://github.com/your-username/repo-name", // Leave as "" if private
  liveDemo: "https://your-demo-url.com", // Leave as "" if no live demo exists
  status: "Completed"
}
```
*Note: Buttons for GitHub, Live Demo, or Publication only appear if their URL is filled in!*

### 5. How to Add or Remove a Skill
Open `src/data/skills.js`. Find the relevant category (e.g. `data-analytics`, `business-analysis`, `qa-testing`, `web-digital`, `cloud-databases`, `tools`) and simply add or remove skill items in the `skills` array.

### 6. How to Update Work Experience
Open `src/data/experience.js` and add or modify items in `experienceData`.

### 7. How to Update Services
Open `src/data/services.js` and adjust service deliverables or CTA texts.

### 8. How to Configure Formspree for the Contact Form
1. Go to [Formspree.io](https://formspree.io/) and create a free account.
2. Click **New Form**, name it "Portfolio Contact", and set your email (`vidhushika.francis@gmail.com`) as the recipient.
3. Formspree will provide you with a Form Endpoint URL (e.g. `https://formspree.io/f/xbjwpkzl`).
4. Create a `.env` file in your project root:
   ```bash
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
   ```
5. When deploying on GitHub Pages, add this as a Repository Secret:
   - Go to your GitHub repository $\rightarrow$ **Settings** $\rightarrow$ **Secrets and variables** $\rightarrow$ **Actions**.
   - Click **New repository secret**.
   - Name: `VITE_FORMSPREE_ENDPOINT`
   - Value: `https://formspree.io/f/YOUR_FORM_ID`

---

## 🌐 Deploying to GitHub Pages

This repository is pre-configured with a modern **GitHub Actions** workflow (`.github/workflows/deploy.yml`).

### Step-by-Step Deployment:
1. Create a new repository on your GitHub account (e.g. `portfolio` or `vidhushikafrancis.github.io`).
2. Push this codebase to your repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of personal brand portfolio"
   git branch -M main
   git remote add origin https://github.com/FrancisJV/YOUR-REPO-NAME.git
   git push -u origin main
   ```
3. Enable GitHub Pages:
   - On GitHub, go to **Settings** $\rightarrow$ **Pages**.
   - Under **Build and deployment** $\rightarrow$ **Source**, select **GitHub Actions**.
4. The deployment workflow will automatically build and publish your site!

---

## 🔍 Quality, Accessibility & Performance Standards

- **Zero Fabricated Claims**: All placeholders are cleanly isolated in `src/data/` files.
- **Strict Privacy**: No personal phone number is published in HTML, meta tags, or schemas.
- **Mobile First**: Fluidly responsive from 320px mobile screens up to 4K ultra-wide displays.
- **WCAG Compliant**: High contrast typography, keyboard accessibility, visible focus states, and reduced motion awareness.
- **SEO Ready**: Semantic HTML5 hierarchy, OpenGraph sharing cards, and Schema.org JSON-LD Person/WebSite metadata.
