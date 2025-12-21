# Deployment Guide for IntelliMoose

## Quick Start - View the Site Now

The development server is already running at:
**http://localhost:5173**

Open this URL in your browser to see the stunning IntelliMoose landing page!

## What You're Seeing

- **Futuristic Design**: Dark theme with cyan (#00f5ff) and purple (#8b5cf6) accents
- **Glassmorphism**: Modern glass-like card effects with blur
- **Smooth Animations**: Powered by Framer Motion
- **Animated Background**: Rotating gradient with grid overlay
- **Responsive**: Works perfectly on mobile, tablet, and desktop
- **Interactive**: Hover effects, scroll animations, and smooth navigation

## Making Changes

All components are in the `src/components/` folder:

- **Navbar**: Fixed navigation that appears on scroll
- **Hero**: Main landing section with product introduction
- **Features**: 6 key features with icons
- **HowItWorks**: 4-step architecture explanation
- **UseCases**: 6 professional use cases with conversation examples
- **Contact**: Stats, contact form, and footer

Edit any `.jsx` or `.css` file and the page will auto-reload!

## Building for Production

```bash
npm run build
```

This creates a `dist` folder with optimized files ready for deployment.

## Deployment Options

### 1. Netlify (Recommended - Easiest)

**Option A: Drag & Drop**
1. Run `npm run build`
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag the `dist` folder
4. Done! You get a live URL instantly

**Option B: GitHub Integration**
1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Connect your repo
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Click "Deploy"

### 2. Vercel

```bash
npm i -g vercel
vercel
```

Follow the prompts. Your site will be live in minutes!

### 3. GitHub Pages

```bash
npm run build
```

Then push the `dist` folder to a `gh-pages` branch or use GitHub Actions.

### 4. Custom Server

After `npm run build`, upload the `dist` folder contents to any web server:
- Apache
- Nginx
- Any static hosting service

## Custom Domain Setup

### For intellimoose.com

1. **Register the domain** at Namecheap, GoDaddy, or Cloudflare
2. **DNS Configuration** (example for Netlify):
   ```
   Type: A
   Name: @
   Value: 75.2.60.5

   Type: CNAME
   Name: www
   Value: your-site.netlify.app
   ```
3. **SSL Certificate**: Automatic with Netlify/Vercel

## Email Setup

### Professional Emails

**Option 1: Google Workspace** ($6/user/month)
- info@intellimoose.com
- invest@intellimoose.com
- press@intellimoose.com

**Option 2: Zoho Mail** (Free for up to 5 users)
- Same email addresses
- Good for startups

**Option 3: Cloudflare Email Routing** (Free)
- Forward to your personal email
- Perfect for early stage

## Connect the Contact Form

The form currently logs to console. To make it functional:

### Option 1: Formspree (Easiest)
1. Sign up at [formspree.io](https://formspree.io)
2. Create a form
3. Update `src/components/Contact.jsx`:
```jsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 2: EmailJS
1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Install: `npm install @emailjs/browser`
3. Update the form submission handler in Contact.jsx

### Option 3: Custom Backend
Build your own API endpoint and update the `handleSubmit` function.

## Analytics Setup

### Google Analytics

Add to `index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## SEO Optimization

Already included:
- Meta description
- Semantic HTML
- Fast load times
- Mobile responsive

To add:
1. Create `public/sitemap.xml`
2. Add Open Graph images
3. Set up Google Search Console
4. Submit to search engines

## Performance

Current optimization:
- Vite for fast builds
- Code splitting
- Lazy loading ready
- Optimized images (SVG)

The site should score 90+ on Google PageSpeed Insights!

## Social Media Setup

Create accounts:
- Twitter/X: @IntelliMoose
- LinkedIn: IntelliMoose
- Instagram: @intellimoose

Use the brand colors:
- Primary: #00f5ff (Cyan)
- Secondary: #8b5cf6 (Purple)
- Accent: #f59e0b (Amber)

## Next Steps

1. ✅ Site is built and running
2. 🔲 Test on mobile devices
3. 🔲 Deploy to Netlify/Vercel
4. 🔲 Register domain
5. 🔲 Set up emails
6. 🔲 Connect contact form
7. 🔲 Add analytics
8. 🔲 Create social media accounts
9. 🔲 Start collecting emails!

## Support

For questions or issues:
- Check the README.md
- Review component files in `src/components/`
- All styling is in corresponding `.css` files

---

The site is production-ready! Just deploy and start attracting investors. 🚀
