# Portfolio Website - Angular Edition

A modern, animated portfolio website built with Angular 17, TypeScript, Tailwind CSS, and Angular Animations API.

## Features

- 🎨 Beautiful, modern design inspired by brittanychiang.com
- ✨ Smooth animations and transitions using Angular Animations API
- 📱 Fully responsive design
- 🚀 Built with Angular 17 (Standalone Components)
- 💻 TypeScript for type safety
- 🎯 Animation showcase section with interactive components leveraging Angular's animation system
- ♿ Accessible and SEO-friendly
- ⚡ Optimized performance with Angular's change detection

## Angular Animations Features

This portfolio leverages Angular's powerful animation system:

- **State-based animations** for hover effects and interactions
- **Stagger animations** for list items and grid layouts
- **Keyframe animations** for complex motion sequences
- **Query animations** for animating child elements
- **Transition animations** for smooth state changes
- **Performance-optimized** animations using Angular's animation engine

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm start
# or
ng serve
```

Open [http://localhost:4200](http://localhost:4200) with your browser to see the result.

## Build

To create a production build:

```bash
npm run build
# or
ng build
```

The build artifacts will be stored in the `dist/` directory.

## Customization

1. **Update Personal Information**: Edit the components in `/src/components` directory:
   - `hero/hero.component.ts` - Update name and tagline
   - `about/about.component.ts` - Update about section content
   - `experience/experience.component.ts` - Update work experience
   - `projects/projects.component.ts` - Update project details
   - `contact/contact.component.ts` - Update email and contact information

2. **Update Social Links**: Edit `social-links/social-links.component.ts` and `email-sidebar/email-sidebar.component.ts`

3. **Add Resume**: Place your resume PDF in `/src/assets/resume.pdf` and update the link in `nav/nav.component.ts`

4. **Customize Colors**: Edit `tailwind.config.js` to match your brand

## Animation Showcase

The portfolio includes an animations showcase section featuring Angular animations:

- **Product Card**: Hover effects, scale animations, and heart like animation with keyframes
- **Post Card**: Smooth transitions and arrow animations
- **Button Animations**: Hover, ripple, gradient, and border fill animations
- **Loading Animations**: Spinner rotation, bouncing dots, pulse, and progress bar animations

All animations use Angular's `@angular/animations` API for optimal performance and smooth transitions.

## Tech Stack

- **Framework**: Angular 17
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Angular Animations API (@angular/animations)
- **Architecture**: Standalone Components
- **Build Tool**: Angular CLI

## Angular Animations Advantages

- **Performance**: Leverages Web Animations API for hardware-accelerated animations
- **Type Safety**: Full TypeScript support for animation definitions
- **Declarative**: Define animations declaratively in component metadata
- **Reusable**: Create reusable animation triggers
- **Testable**: Easy to test animations in Angular's testing framework

## License

MIT
