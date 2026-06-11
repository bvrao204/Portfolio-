# 🚀 Complete Responsive Personal Portfolio Website

A premium, interactive, and fully responsive personal portfolio website built with **HTML5**, **CSS3**, **Vanilla JavaScript**, and **Vite** as the development tool. 

The site is customized for **B Venkateswara Rao** to showcase software engineering, data science, and AI-driven solutions.

---

## ✨ Features

- **Responsive Design**: Mobile-first grid layouts supporting all display resolutions (Desktop, Tablet, Phone).
- **Glassmorphism UI**: Modern aesthetic glass overlay cards, neon glowing accents, and color-matched elements.
- **Dynamic Typewriter Title**: Built-in Typed.js typewriter effect demonstrating profile roles.
- **Interactive Navigation**:
  - Hamburger drawer menu for mobile screens.
  - Sticky nav bar background on scroll.
  - Auto scroll-spy highlighting active section links based on window position.
- **CV Download**: Automatic tab opening and immediate download trigger for the profile resume.
- **Automated Deployment**: Ready-to-go GitHub Actions configuration for automated deployment to GitHub Pages.

---

## 🛠️ Built With

- **HTML5** & **CSS3** (Variables, Grid, Flexbox, Keyframes)
- **Vanilla JavaScript** (DOM Scroll/Click Handlers)
- [Typed.js](https://github.com/mattboldt/typed.js/) (Dynamic Typewriter effect)
- [Boxicons](https://boxicons.com/) (Vector icon library)
- **Vite** (Next Generation Frontend Tooling)

---

## 🚀 Setup & Local Execution

Ensure you have [Node.js](https://nodejs.org/) installed, then follow these steps:

1. Clone or download this project.
2. Open a terminal in the project directory and install the local packages:
   ```bash
   npm install
   ```
3. Start the Vite local development server:
   ```bash
   npm run dev
   ```
4. Build the production files (outputted to `./dist/`):
   ```bash
   npm run build
   ```

---

## 🚀 Deploying to GitHub Pages

1. Push your repository to your GitHub account:
   ```bash
   git remote add origin <your-github-repo-url>
   git branch -M main
   git push -u origin main
   ```
2. The GitHub Action workflow in `.github/workflows/deploy.yml` will trigger automatically, compile your project, and deploy the assets to a `gh-pages` branch.
3. In your GitHub repository panel, go to **Settings** > **Pages**.
4. Set the Build and deployment source branch to **gh-pages** and directory to **/** (root). Click **Save** and your site is live!