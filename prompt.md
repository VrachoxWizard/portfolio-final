# Danny's Prompt Engineering Report

## 1. Analysis: Why the original prompt is weak

The original prompt, while detailed, suffers from several common "prompt rot" issues:
- **Instruction Bloat**: It repeats many "Do NOT" constraints that can be summarized as a unified "Design DNA" policy.
- **Vague Directives**: Phrases like "modern, production-quality" or "extremely close" are subjective and lack technical anchors.
- **Incomplete Tech Stack**: It lists Next.js 16 (beta/future) and React 19 without specifying *how* to use them (e.g., Server Components first, etc.).
- **Missing Skill Context**: It doesn't leverage the powerful local skill bundles (`essentials`, `web-wizard`, `web-designer`) which would provide the actual implementation "wisdom."
- **Flat Structure**: It reads like a list of requirements rather than a structured workflow for an agent.

---

## 2. Optimized Prompt: The Thorough Version

### Goal
Recreate the reference portfolio [nextjs-tailwindcss-portfolio.vercel.app](https://nextjs-tailwindcss-portfolio.vercel.app/) with "Quiet Luxury" aesthetics, pixel-perfect responsiveness, and a modern TypeScript/Next.js stack. The objective is a production-ready, portfolio-worthy web app that improves upon the original's logic and accessibility.

### Product Context
This is a professional developer portfolio. It needs to balance technical performance with high-end visual design. The reference site provides the layout foundations, but the implementation must follow "Rebel Coder" levels of craftsmanship: clean architecture, zero lint errors, and stable build/validation checks.

### Skills to Use
You MUST use these skill bundles to guide your implementation:
- **Essentials Starter Pack** (`.agent/skills/bundles/essentials.md`): For planning, debugging, and git hygiene.
- **Web Wizard Pack** (`.agent/skills/bundles/web-wizard.md`): For React, Next.js App Router, and SEO best practices.
- **Web Designer Pack** (`.agent/skills/bundles/web-designer.md`): For premium UI/UX, Framer Motion, and visual polish.

### Constraints
- **Core Tech**: Next.js 16+ App Router, React 19, TypeScript, Tailwind CSS v4, Framer Motion, Lucide Icons.
- **Architecture**: Separated UI components (`components/ui`), feature components (`components/projects`, etc.), and typed data stores (`data/projects.ts`).
- **Aesthetics**: No glassmorphism, no loud gradients, no neon. Use indigo accents, soft shadows, and desaturated navy for dark mode.
- **Performance**: Use `next/image`, optimize for Core Web Vitals, and ensure accessibility (WCAG AA).
- **Functionality**: Fully working search and category filtering for projects. Mobile-first responsive header with theme toggle.

### Files to Read First
- Reference site URL: [https://nextjs-tailwindcss-portfolio.vercel.app/](https://nextjs-tailwindcss-portfolio.vercel.app/)
- `.agent/skills/frontend-design/SKILL.md` (for visual rules)
- `.agent/skills/nextjs-best-practices/SKILL.md` (for routing rules)

### Expected Output
1. A detailed `implementation_plan.md` using the Danny persona.
2. A clean, modular folder structure.
3. Fully functional Routes: Home, Projects (Archive + Single), About, Contact.
4. Interactive Header/Nav with working Search, Filter, Theme Toggle, and "Hire Me" Modal.
5. Typed mock data seeded with 6 relevant projects.

### Steps
1. **Initialize**: Scaffold the project using Next.js App Router and Tailwind CSS v4.
2. **Design Tokens**: Set up `tailwind.config` or CSS variables for the indigo/navy "Design DNA."
3. **Core Layout**: Implement the `Layout.tsx` with responsive Header and Footer.
4. **Data Layer**: Create `src/data` with typed project and experience files.
5. **Hero Component**: Build the animated entrance hero with split desktop layout.
6. **Project Feed**: Implement the `ProjectGrid` with search/category logic.
7. **Detail Pages**: Build the dynamic `[slug]` routes for deep project case studies.
8. **Polish**: Add Framer Motion entrance animations and hover states across all components.

---

# Audit and Optimization Prompt - Enhanced (by Danny)

## Assessment by Danny
The original prompt "Analyze our website looks and design and make plan for improvements" was **critically weak** due to:
1. **Ambiguity**: "Looks and design" is subjective. Without specific reference to UI/UX patterns (e.g., Quiet Luxury, Accessibility), the output would be generic.
2. **Missing Technical Context**: It ignored the specific implementation details (Next.js 16, Tailwind v4, Framer Motion) which are crucial for performance-based improvements.
3. **Lack of Skills Integration**: It didn't leverage the specialized `web-wizard` (performance/SEO) or `web-designer` (3D/animations/spatial UI) skill bundles.
4. **Vague Action Plan**: "Make plan" doesn't define if the plan should be a markdown document, a set of tickets, or a direct refactor.

---

## 🔥 Thorough Version: Deep Architectural & Visual Audit

### Goal
Perform a comprehensive audit of the current portfolio's visual identity, technical performance, and UX architecture, then generate an actionable implementation plan for improvements.

### Product Context
- **Tech Stack**: Next.js 16 (App Router), Tailwind CSS v4 (@theme engine), Framer Motion.
- **Aesthetic**: "Quiet Luxury" (Indigo/Navy), high-end typography (Inter), and smooth micro-interactions.

### Skills to Use
- **Web Wizard (`web-wizard.md`)**: Use `seo-audit`, `react-best-practices`, and `tailwind-patterns` to evaluate technical health.
- **Web Designer (`web-designer.md`)**: Use `ui-ux-pro-max`, `antigravity-design-expert`, and `scroll-experience` to evaluate visual fidelity and "magic" interactions.

### Constraints
- Do not suggest removing Tailwind v4 logic; optimize it.
- Prioritize accessibility (WCAG AA).
- Maintain the "Indigo" accent identity.

### Files to Read First
- [layout.tsx](file:///c:/Users/mvuku/Desktop/ozbiljan-repo/portfolio-final/src/app/layout.tsx)
- [globals.css](file:///c:/Users/mvuku/Desktop/ozbiljan-repo/portfolio-final/src/app/globals.css)
- [ProjectGrid.tsx](file:///c:/Users/mvuku/Desktop/ozbiljan-repo/portfolio-final/src/components/projects/ProjectGrid.tsx)

### Expected Output
A detailed `audit_report.md` containing:
1. **Visual Audit**: Score current layouts against "Quiet Luxury" principles.
2. **Technical Audit**: Performance and SEO gaps using `web-wizard`.
3. **UX Audit**: Navigation and interaction flow analysis.
4. **Implementation Plan**: A phased checklist for immediate improvements.

### Steps
1. **Scan UI**: Review all pages (`/`, `/about`, `/contact`, `/projects`) via browser subagent.
2. **Analyze Styles**: Evaluate `globals.css` @theme usage and container utilities.
3. **Verify Motion**: Check Framer Motion entrance animations for consistency.
4. **Report & Plan**: Generate the `audit_report.md` and update `task.md`.

---

## ⚡ Fast Version: Quick Design Polish

### Goal
Quickly identify and fix 3-5 high-impact visual or UX "low-hanging fruits" to elevate the site's premium feel.

### Skills to Use
- `frontend-design` + `antigravity-design-expert`.

### Expected Output
Direct application of fixes to CSS/Components followed by a brief summary in `walkthrough.md`.

### Steps
1. **Browser Audit**: Find 3 visual inconsistencies (spacing, hover effects, type scale).
2. **Direct Refactor**: Apply `glassmorphism` or `micro-animations` using `tailwind-patterns`.
3. **Verify**: Use browser tool to confirm the "wow factor" is improved.
9. **Verification**: Run `lint-and-validate` and audit for responsive and dark mode issues.

---

## 3. Fast Version (MVP Prompt)

"Recreate the design and UX of [nextjs-tailwindcss-portfolio.vercel.app](https://nextjs-tailwindcss-portfolio.vercel.app/) using Next.js 16, Tailwind v4, and Framer Motion. Use the `@Web Wizard Pack` and `@Web Designer Pack` skills. Follow an indigo-accented 'Quiet Luxury' style. Deliver Home, Projects, and About pages with working filtering and dark mode. Focus on clean architecture and smooth entrance animations. Start with a `concise-planning` phase."