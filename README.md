# Table of Contents

- [Table of Contents](#table-of-contents)
  - [1. Front-End](#1-front-end)
    - [1.1 Front-End stack](#11-front-end-stack)
    - [1.2 Libraries used](#12-libraries-used)
  - [2. Pages](#2-pages)
    - [2.1 Home](#21-home)
    - [2.2 About](#22-about)
    - [2.3 Skills](#23-skills)
    - [2.4 Services](#24-services)
    - [2.5 Portfolio](#25-portfolio)
    - [2.6 Contact](#26-contact)
  - [Trivial information](#trivial-information)
    - [3.1 Folder structure](#31-folder-structure)
    - [3.2 Naming conventions](#32-naming-conventions)
    - [3.3 Trivial information](#33-trivial-information)

## 1. Front-End

### 1.1 Front-End stack

- HTML
- SASS
- TypeScript
- React
- Next.js

<a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer" title="HTML5"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" width="36" height="36" alt="HTML5" /></a>
<a href="https://sass-lang.com/" target="_blank" rel="noreferrer" title="SASS"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg" width="36" height="36" alt="Sass" /></a>
<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer" title="TypeScript"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg" width="36" height="36" alt="TypeScript" /></a>
<a href="https://reactjs.org/" target="_blank" rel="noreferrer" title="React"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" /></a>
<a href="https://nextjs.org/docs" target="_blank" rel="noreferrer" title="Next.js"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg" width="36" height="36" alt="NextJs" /></a>

### 1.2 Libraries used

- Framer motion
- EmailJS
- TanStack Query

<a  href="https://www.framer.com/motion/"  target="_blank"  rel="noreferrer" title="Framer Motion">
<img src="https://seeklogo.com/images/F/framer-motion-logo-DA1E33CAA1-seeklogo.com.png" width="36" height="36" alt="Framer motion"/>
</a>
<a  href="https://www.emailjs.com/"  target="_blank"  rel="noreferrer" title="EmailJS">
<img src="https://www.emailjs.com/favicon/favicon-32x32.png" width="36" height="36" alt="EmailJS"/>
</a>
<a  href="https://tanstack.com/"  target="_blank"  rel="noreferrer" title="TanStackQuery a.k.a React Query v4">
<img src="https://raw.githubusercontent.com/TanStack/query/main/media/logo-light.png" width="180" height="36" alt="TanStack Query(React Query)" style="-webkit-clip-path: polygon(0 0, 26% 0, 26% 100%, 0% 100%);
clip-path: polygon(0 0, 26% 0, 26% 100%, 0% 100%);"/>
</a>

---

## 2. Pages

### 2.1 Home

The home page features a section with a brief introduction and a call-to-action button.

### 2.2 About

The about page includes a brief biography, a list of skills, and a timeline of work experience.

### 2.3 Skills

The skills page provides an overview of the skills I have developed throughout my career, including technical skills and soft skills.

### 2.4 Services

The services page outlines the services I offer, including web design, web development, and consulting.

### 2.5 Portfolio

The portfolio page showcases some of my recent projects, with links to view each project in more detail.

### 2.6 Contact

The contact page includes a form to get in touch with me, as well as links to my social media profiles.

---

## Trivial information

### 3.1 Folder structure

```bash
Portfolio/
┣ public/
┃ ┣ jpg/
┃ ┣ mockups/
┃ ┣ pdf/
┃ ┣ png/
┃ ┣ svg/
┃ ┗ favicon.ico
┣ src/
┃ ┣ assets/
┃ ┃ ┣ icons/
┃ ┃ ┣ images/
┃ ┃ ┣ urls/
┃ ┃ ┗ index.assets.ts
┃ ┣ components/
┃ ┃ ┣ common/
┃ ┃ ┗ shared/
┃ ┣ pages/
┃ ┃ ┣ about/
┃ ┃ ┣ contact/
┃ ┃ ┣ portfolio/
┃ ┃ ┣ services/
┃ ┃ ┣ skills/
┃ ┃ ┣ 404.tsx
┃ ┃ ┣ 500.tsx
┃ ┃ ┣ index.tsx
┃ ┃ ┣ _app.tsx
┃ ┃ ┗ _document.tsx
┃ ┣ sass/
┃ ┃ ┣ base/
┃ ┃ ┣ components/
┃ ┃ ┣ layout/
┃ ┃ ┣ pages/
┃ ┃ ┣ themes/
┃ ┃ ┣ utils/
┃ ┃ ┗ main.scss
┃ ┗ utilities/
┃   ┣ classes/
┃   ┣ helpers/
┃   ┣ hooks/
┃   ┣ types/
┃   ┗ variables/
┣ .czrc
┣ .eslintrc.json
┣ .gitignore
┣ commitlint.config.js
┣ next-env.d.ts
┣ next-jsREADME.md
┣ next.config.js
┣ package-lock.json
┣ package.json
┣ README.md
┗ tsconfig.json
```

### 3.2 Naming conventions

- File and folder names: `kebab-case`

   example: `helper-functions.tsx`

- CSS: `kebab-case`

 examples:

  ```css
  .main-page{...};
  --bg-primary: red;
  ```

- JS: `camelCase`, ⁣`PascalCase` and `SNAKE_CASE`

 1. For variable names: `camelCase`
 2. For class and component names: `PascalCase`
 3. For contextualized constants names: `SNAKE_CASE`

 examples:

 ```js
 let dataValues = [{value: 5}, {value: 2}];

 class Service{...}

 function Header(){...}

 const MAX_32_BIT_UNSIGNED_INTEGER = 2_147_483_647;
 ```

### 3.3 Trivial information

This project:

- Has a responsive design
- Has a dark/light theme
- Uses SSR (Server-side rendering)
- Uses the 7-1 pattern for SASS
