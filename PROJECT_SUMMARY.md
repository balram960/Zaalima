# CareerForge Pro - AI Resume Builder

## Project Overview
CareerForge Pro is a full-stack AI-powered resume builder that helps job seekers create ATS-optimized resumes, generate cover letters, and build professional portfolios.

## Tech Stack

### Frontend
- React 18 + TypeScript + Vite
- Tailwind CSS + shadcn/ui
- Redux Toolkit for state management
- Framer Motion for animations

### Backend
- Node.js + Express
- MongoDB + Mongoose
- JWT Authentication + bcrypt
- Stripe for payments

### AI Integration
- Google Gemini 1.5 Flash via LangChain
- Ollama (Llama 3.2) for local AI

## Features by Week

### Week 1: Resume Builder Core ✅
- Complete resume schema (personal, experience, education, skills, projects)
- Split-screen form + live preview
- Redux state management
- MongoDB CRUD operations
- Auto-save every 30 seconds

### Week 2: AI Writer & Optimization ✅
- JD keyword extraction API
- Magic Button AI bullet rewriting
- ATS scoring algorithm
- Prompt engineering templates
- AI latency tracking

### Week 3: PDF & Payments ✅
- PDF generation with Puppeteer (A4 format)
- Stripe subscription integration (Free/Pro tiers)
- Webhook handling for payments

### Week 4: UI & Premium Features ✅
- Modern Lovable frontend integration
- Glassmorphism design system
- 35+ JSON Resume templates
- Style customization (colors, fonts)
- Profile image upload (Base64)
- Text formatting toolbar
- Animated particle background
- Premium dashboard cards

## API Endpoints

| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | /api/users/register | User registration |
| POST | /api/users/login | User login |
| POST | /api/ai/analyze-jd | Extract JD keywords |
| POST | /api/ai/rewrite | AI bullet rewriting |
| POST | /api/ai/ats-score | Calculate ATS score |
| POST | /api/pdf/generate | Export PDF |
| POST | /api/cover-letter/generate | Generate cover letter |
| POST | /api/resume/save | Save resume |
| GET | /api/resume/user/:userId | Get user's resumes |

## Deployment

- Frontend: http://localhost:8080
- Backend: http://localhost:5000

## Team Contributions

- **Swati Gupta**: Backend + AI Integration + Lovable Frontend Integration
- **NVL Balram**: Frontend UI + Redux State
- **Asheesh**: Dynamic Forms + Data Handling
- **Paramanandham**: Storage + Export Features

## Project Status: ✅ COMPLETE

All 4 weeks features implemented, tested, and working.
