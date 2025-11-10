# Portfolio Website

A modern, animated portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Beautiful, modern design inspired by brittanychiang.com
- ✨ Smooth animations and transitions using Framer Motion
- 📱 Fully responsive design
- 🚀 Built with Next.js 14 (App Router)
- 💻 TypeScript for type safety
- 🎯 Animation showcase section with interactive components
- ♿ Accessible and SEO-friendly

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

1. **Update Personal Information**: Edit the components in `/components` directory:
   - `Hero.tsx` - Update name and tagline
   - `About.tsx` - Update about section content
   - `Experience.tsx` - Update work experience
   - `Projects.tsx` - Update project details
   - `Contact.tsx` - Update email and contact information

2. **Update Social Links**: Edit `SocialLinks.tsx` and `EmailSidebar.tsx`

3. **Add Resume**: Place your resume PDF in `/public/resume.pdf`

4. **Customize Colors**: Edit `tailwind.config.js` to match your brand

## Animation Showcase

The portfolio includes an animations showcase section featuring:
- Product Card with hover effects and like animation
- Post Card with smooth transitions
- Button animations (hover, ripple, gradient, border)
- Loading animations (spinner, dots, pulse, progress bar)

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Date Formatting**: date-fns

## Build

To create a production build:

```bash
npm run build
npm start
```

## License

MIT
