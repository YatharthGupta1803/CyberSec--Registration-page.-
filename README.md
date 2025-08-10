# Cybersecurity Club Landing Page

A fully responsive, production-ready landing page for college cybersecurity club launch with dark hacker aesthetic and animated matrix rain background.

## Features
- Dark terminal/hacker theme with neon accents
- Animated matrix rain background
- Responsive registration form with validation
- Full accessibility support
- SEO optimized
- Netlify Forms integration ready

## Deployment Instructions

### Netlify Deployment
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. The form is pre-configured for Netlify Forms - no additional setup needed
4. Enable form notifications in Netlify dashboard if desired

### Vercel Deployment
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Vercel
3. For form handling on Vercel, you'll need to:
   - Switch to Google Forms (instructions in FormSection.tsx comments)
   - Or implement a serverless function for form processing

### Local Development
1. `npm install`
2. `npm run dev`
3. Open http://localhost:5173

## Form Configuration
- Currently configured for Netlify Forms
- To switch to Google Forms, update the form action URL in `src/components/FormSection.tsx`
- All validation is client-side with friendly error messages

## Browser Support
- Modern browsers with ES6+ support
- Responsive design for mobile, tablet, and desktop
- Tested on Chrome, Firefox, Safari, and Edge