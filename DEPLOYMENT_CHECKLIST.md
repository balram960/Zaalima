# Deployment Checklist - May 6, 2026

## Pre-Deployment Checks:

### Backend (Render/Railway)
- [ ] MongoDB Atlas connection string ready
- [ ] Gemini API key in environment variables
- [ ] Stripe keys configured
- [ ] JWT secret set
- [ ] CORS configured for frontend URL

### Frontend (Vercel/Netlify)
- [ ] Build command: `npm run build`
- [ ] Output directory: `dist`
- [ ] Environment variable: `VITE_API_URL` (production backend URL)
- [ ] Routes configured for SPA (fallback to index.html)

## Deployment Commands:

### Frontend:
```bash
cd frontend
npm run build
vercel --prod
