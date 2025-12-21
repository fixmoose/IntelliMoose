# IntelliMoose - AI-Powered Smart Glasses

A stunning, futuristic React landing page for IntelliMoose, an innovative AI-powered wearable safety glasses system designed for electricians, contractors, mechanics, and other skilled professionals.

## Features

- Modern, futuristic design with glassmorphism effects
- Smooth animations using Framer Motion
- Fully responsive design
- Interactive components
- Animated background with grid overlay
- Professional contact form
- Market statistics showcase

## Tech Stack

- React 18
- Vite
- Framer Motion (animations)
- React Icons
- Custom CSS with CSS variables

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
npm run build
```

## Deployment

### Netlify
Simply connect your GitHub repository or drag and drop the `dist` folder after building.

### Vercel
```bash
npm i -g vercel
vercel
```

### GitHub Pages
```bash
npm run build
# Then deploy the dist folder
```

## Project Structure

```
src/
├── assets/              # Images and SVG files
│   └── glasses-hero.svg
├── components/          # React components
│   ├── Hero.jsx
│   ├── Hero.css
│   ├── Features.jsx
│   ├── Features.css
│   ├── HowItWorks.jsx
│   ├── HowItWorks.css
│   ├── UseCases.jsx
│   ├── UseCases.css
│   ├── Contact.jsx
│   └── Contact.css
├── App.jsx             # Main app component
├── App.css             # Global styles
├── index.css           # Reset and base styles
└── main.jsx            # Entry point
```

## Customization

### Colors
Edit CSS variables in `src/App.css`:

```css
:root {
  --bg-dark: #0a0a0f;
  --primary: #00f5ff;
  --secondary: #8b5cf6;
  --accent: #f59e0b;
}
```

### Content
- Hero section: `src/components/Hero.jsx`
- Features: `src/components/Features.jsx`
- How It Works: `src/components/HowItWorks.jsx`
- Use Cases: `src/components/UseCases.jsx`
- Contact Form: `src/components/Contact.jsx`

## Next Steps

1. Register domain: intellimoose.com
2. Set up email: info@intellimoose.com, invest@intellimoose.com
3. Connect contact form to backend (Formspree, EmailJS, or custom API)
4. Add Google Analytics
5. Create social media accounts
6. File provisional patent
7. Develop pitch deck
8. Create demo video

## License

Copyright © 2025 IntelliMoose. All rights reserved.
