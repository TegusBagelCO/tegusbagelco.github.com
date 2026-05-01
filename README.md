# Tegus Bagel Co. Website

A modern, interactive website for Tegus Bagel Company built with React, TypeScript, and Vite.

## 🚀 Features

- **Hot Module Replacement (HMR)**: Instant updates when you edit files - no page refresh needed!
- **Modern React**: Built with React 18 and TypeScript for type safety
- **Responsive Design**: Mobile-first approach with hamburger menu
- **Parallax Scrolling**: Smooth parallax effects on all sections
- **Interactive Floating Characters**: Characters that move away from your cursor
- **Optimized Performance**: Fast builds and optimized production bundle

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Vite** - Next-generation build tool with lightning-fast HMR
- **CSS Modules** - Component-scoped styling

## 📦 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/tegusbagelco/tegusbagelco.github.io.git
cd tegusbagelco.github.io
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server with hot reload:

```bash
npm run dev
```

The site will open automatically at `http://localhost:3000`. Any changes you make to the code will instantly reflect in the browser!

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist` folder.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx       # Navigation header
│   ├── ParallaxSection.tsx
│   ├── FloatingCharacter.tsx
│   ├── Footer.tsx
│   ├── OrderButton.tsx
│   └── BackToTopButton.tsx
├── styles/             # Global styles
│   └── index.css
├── types/              # TypeScript type definitions
│   └── index.ts
├── data/               # Content data
│   └── content.ts
├── App.tsx             # Main App component
└── main.tsx            # Entry point
```

## 🎨 Making Changes

1. **Edit Content**: Modify `src/data/content.ts` to change section titles, descriptions, and images
2. **Update Styles**: Edit the component-specific CSS files or `src/styles/index.css`
3. **Add New Sections**: Add new section data in `content.ts` and the component will auto-generate
4. **Modify Components**: Edit any `.tsx` file in `src/components/`

Thanks to **hot reload**, all changes appear instantly in your browser!

## 🌐 Deployment

This site is configured for GitHub Pages. The build output goes to the `dist` folder.

To deploy:
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting service

## 📄 License

© Grupo Saubar - Tegucigalpa, Honduras 2025

---

**Built with ♥ by Grupo Saubar**
