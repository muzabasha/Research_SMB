# 📘 Complete Guide - Research Navigator 4.1

## Table of Contents
1. [Introduction](#introduction)
2. [Architecture Overview](#architecture-overview)
3. [Installation & Setup](#installation--setup)
4. [Feature Walkthrough](#feature-walkthrough)
5. [AI Integration](#ai-integration)
6. [Database Management](#database-management)
7. [Deployment](#deployment)
8. [Customization](#customization)
9. [Maintenance](#maintenance)
10. [Troubleshooting](#troubleshooting)

---

## Introduction

### What is Research Navigator?

Research Navigator 4.1 is a comprehensive AI-powered platform designed to transform research learning and management in educational institutions, aligned with India's NEP 2020 guidelines.

### Who is it for?

- **Students**: Interactive research learning
- **Faculty**: Funding intelligence and proposal management
- **Lab Directors**: Research lab incubation and tracking
- **Administrators**: Institutional research analytics

### Key Benefits

- 🎯 AI-powered faculty-funding matching (85%+ accuracy)
- 📊 Data-driven lab ROI prediction
- 🎓 Experiential learning for students
- 🤖 Automated proposal evaluation
- 📈 Institutional research intelligence

---

## Architecture Overview

### Technology Stack

```
Frontend:
├── Next.js 14 (App Router)
├── TypeScript
├── Tailwind CSS
├── Framer Motion
└── Lucide Icons

Backend:
├── Next.js API Routes
├── Prisma ORM
└── PostgreSQL

AI Layer:
├── OpenAI GPT-4o-mini
├── OpenAI Embeddings
└── Cosine Similarity Engine

Authentication:
└── NextAuth.js (ready)

Deployment:
├── Vercel (Frontend + API)
└── Supabase/Neon (Database)
```

### System Architecture

```
┌─────────────────────────────────────────┐
│           User Interface                │
│  (Student, Faculty, Lab, Dashboard)     │
└──────────────┬──────────────────────────┘
               │
┌──────────────▼──────────────────────────┐
│         Next.js App Router              │
│  (Server Components + Client Components)│
└──────────────┬──────────────────────────┘
               │
┌──────────────▼──────────────────────────┐
│          API Routes Layer               │
│  /api/faculty, /funding, /proposal, /lab│
└──────────────┬──────────────────────────┘
               │
┌──────────────▼──────────────────────────┐
│         Business Logic Layer            │
│  (lib/similarity.ts, lib/ai.ts)         │
└──────────────┬──────────────────────────┘
               │
┌──────────────▼──────────────────────────┐
│         Data Access Layer               │
│  (Prisma Client + PostgreSQL)           │
└─────────────────────────────────────────┘
```

---

## Installation & Setup

### Prerequisites

- Node.js 18+ ([Download](https://nodejs.org))
- Git ([Download](https://git-scm.com))
- PostgreSQL 14+ or cloud database account
- OpenAI API key (optional, for AI features)

### Step-by-Step Installation

#### 1. Clone/Navigate to Project
```bash
cd research-navigator
```

#### 2. Install Dependencies
```bash
npm install
```

Expected output:
```
added 51 packages in 30s
```

#### 3. Database Setup

**Option A: Supabase (Recommended)**
1. Visit [supabase.com](https://supabase.com)
2. Sign up (free tier: 500MB)
3. Create new project
4. Wait 2-3 minutes for provisioning
5. Go to Settings → Database
6. Copy "Connection string" (URI format)
7. Replace `[YOUR-PASSWORD]` with your actual password

**Option B: Neon**
1. Visit [neon.tech](https://neon.tech)
2. Sign up (free tier: 3GB)
3. Create project
4. Copy connection string

**Option C: Local PostgreSQL**
```bash
# Install PostgreSQL
# Create database
createdb research_navigator

# Connection string:
postgresql://localhost:5432/research_navigator
```

#### 4. Environment Configuration

Create `.env.local`:
```env
# Database
DATABASE_URL="postgresql://user:password@host:5432/dbname?sslmode=require"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="generate-with-openssl-rand-base64-32"

# OpenAI (optional for now)
OPENAI_API_KEY="sk-your-key-here"
```

Generate secure secret:
```bash
openssl rand -base64 32
```

#### 5. Database Initialization
```bash
# Generate Prisma Client
npm run prisma:generate

# Push schema to database
npm run prisma:push

# Seed sample data
npm run seed
```

Expected output:
```
🌱 Seeding database...
✅ Created funding calls
✅ Created admin user
✅ Created faculty users
✅ Created student user
✅ Created sample lab
🎉 Seeding completed!
```

#### 6. Start Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Feature Walkthrough

### 1. Student Research Playground

**Purpose**: Experiential learning through interactive research simulation

**Workflow**:
1. Navigate to `/student`
2. **Step 1: Choose Domain**
   - Select from 10+ research areas
   - Examples: AI, Biotechnology, IoT
3. **Step 2: Problem Builder**
   - Define research problem (50+ characters)
   - AI suggests related problems (if OpenAI configured)
4. **Step 3: Literature Hunt**
   - AI-powered paper discovery
   - Keyword extraction
5. **Step 4: Experiment Builder**
   - Design methodology
   - Define variables
6. **Step 5: Outcome Path**
   - Expected results
   - Impact assessment

**Gamification**:
- Progress score: 0-100%
- Step unlocking based on completion
- Visual progress indicators

### 2. Faculty Research Studio

**Purpose**: AI-powered funding intelligence

**Workflow**:

#### Profile Setup
1. Navigate to `/faculty`
2. Click "Profile Setup" tab
3. Upload CV/Resume (PDF/DOC)
4. Enter metrics:
   - Publications: Number of papers
   - H-Index: Research impact metric
   - Citations: Total citations
   - Department: Your department
   - Keywords: Research areas (comma-separated)
5. Click "Analyze Profile & Find Matches"

**What happens**:
- System generates embedding vector from keywords
- Stores profile in database
- Calculates relevance scores with funding calls

#### Funding Matches
1. Click "Funding Matches" tab
2. View personalized matches sorted by relevance
3. Each match shows:
   - Relevance score (0-100)
   - Agency name
   - Deadline
   - Budget range
   - Eligibility criteria

**Relevance Score Breakdown**:
- Domain Similarity: 25%
- Publication Match: 15%
- Eligibility: 15%
- Thematic Alignment: 10%
- Past Funding: 10%
- Collaboration: 10%
- Outcome Capability: 10%
- Institutional Alignment: 5%

#### Proposal Builder
1. Click "Proposal Builder" tab
2. Enter proposal details:
   - Title
   - Methodology
   - Budget
   - Timeline (Gantt chart)
3. Click "Get AI Evaluation"

**AI Evaluation**:
- Clarity score (0-100)
- Novelty score (0-100)
- Feasibility score (0-100)
- Impact score (0-100)
- Funding alignment (0-100)
- Improvement suggestions
- Risk flags

### 3. Research Lab Incubator

**Purpose**: Lab creation with ROI prediction

**Workflow**:
1. Navigate to `/lab`
2. Fill lab details:
   - Lab Name
   - Seed Funding Amount (₹)
   - Principal Investigator
   - PG Students count
   - UG Students count
3. Click "Create Lab & Calculate ROI"

**ROI Calculation**:
```
ROI = seedAmount × (
  (publications / 100) × 0.3 +
  (hIndex / 50) × 0.25 +
  (pgCount × 2 + sugCount) × 0.15
) × 0.3 (funding probability)
```

**Output**:
- Predicted ROI (₹)
- Publication forecast
- Funding success probability
- Timeline estimates

### 4. Institutional Dashboard

**Purpose**: Strategic research management

**Features**:
1. Navigate to `/dashboard`
2. View metrics:
   - Active faculty count
   - Research labs count
   - Total funding secured
   - Proposal success rate
3. Department rankings
4. Recent activity feed
5. Trend analysis

---

## AI Integration

### OpenAI Setup

#### 1. Get API Key
1. Visit [platform.openai.com](https://platform.openai.com)
2. Sign up / Login
3. Go to API Keys section
4. Click "Create new secret key"
5. Copy key (starts with `sk-`)
6. Add to `.env.local`:
```env
OPENAI_API_KEY="sk-your-actual-key-here"
```

#### 2. Set Up Billing
1. Go to Billing section
2. Add payment method
3. Set usage limits (recommended: $10/month for testing)

#### 3. Test Integration
```bash
# Restart server
npm run dev

# Test API endpoint
curl -X POST http://localhost:3000/api/proposal/evaluate \
  -H "Content-Type: application/json" \
  -d '{
    "title": "AI for Healthcare",
    "methodology": "Deep learning approach",
    "budget": 1000000,
    "callTitle": "DST-SERB CRG"
  }'
```

### AI Features

#### 1. Semantic Matching
**File**: `lib/similarity.ts`

**How it works**:
1. Extract keywords from faculty profile
2. Extract keywords from funding call
3. Generate embeddings using OpenAI
4. Calculate cosine similarity
5. Normalize to 0-100 scale

**Code**:
```typescript
const embedding = await generateEmbedding(text)
const similarity = cosineSimilarity(vec1, vec2)
```

#### 2. Proposal Evaluation
**File**: `lib/ai.ts`

**How it works**:
1. Send proposal to GPT-4o-mini
2. Request structured evaluation
3. Parse JSON response
4. Calculate weighted score

**Prompt Template**:
```
Evaluate the following research proposal:
Title: [title]
Methodology: [methodology]
Budget: [budget]

Criteria:
- Clarity (0-100)
- Novelty (0-100)
- Feasibility (0-100)
- Impact (0-100)
- Funding Alignment (0-100)

Return JSON with scores and suggestions.
```

#### 3. Research Suggestions
**How it works**:
1. Analyze selected domain
2. Generate 5 current research problems
3. Suggest methodologies

---

## Database Management

### Prisma Commands

```bash
# Generate client
npm run prisma:generate

# Push schema changes
npm run prisma:push

# Open Prisma Studio (GUI)
npm run prisma:studio

# Create migration
npx prisma migrate dev --name migration_name

# Reset database (WARNING: deletes all data)
npx prisma db push --force-reset

# Seed database
npm run seed
```

### Database Schema

**Core Tables**:
1. **User**: Authentication and roles
2. **FacultyProfile**: Research metrics
3. **FundingCall**: Funding opportunities
4. **RelevanceScore**: AI-calculated matches
5. **Lab**: Research labs
6. **Proposal**: Proposal tracking

### Adding Funding Calls

**Method 1: Prisma Studio**
1. Run `npm run prisma:studio`
2. Navigate to FundingCall table
3. Click "Add record"
4. Fill details
5. Save

**Method 2: Programmatically**
```typescript
await prisma.fundingCall.create({
  data: {
    agency: 'DST-SERB',
    title: 'Core Research Grant',
    deadline: new Date('2026-12-31'),
    domainKeywords: ['AI', 'ML'],
    budgetMin: 500000,
    budgetMax: 5000000,
  }
})
```

---

## Deployment

### Vercel Deployment

#### Method 1: CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Set environment variables
vercel env add DATABASE_URL
vercel env add NEXTAUTH_URL
vercel env add NEXTAUTH_SECRET
vercel env add OPENAI_API_KEY

# Deploy to production
vercel --prod
```

#### Method 2: Dashboard
1. Go to [vercel.com/new](https://vercel.com/new)
2. Import GitHub repository
3. Configure:
   - Framework: Next.js
   - Build Command: `prisma generate && next build`
   - Root Directory: `./research-navigator`
4. Add environment variables
5. Deploy

### Post-Deployment

```bash
# Run migrations
npm run prisma:push

# Seed data
npm run seed
```

### Custom Domain

1. Go to Vercel project settings
2. Domains tab
3. Add domain
4. Update DNS records
5. Update NEXTAUTH_URL

---

## Customization

### Branding

**Colors** (`app/globals.css`):
```css
:root {
  --primary: #3b82f6; /* Blue */
  --secondary: #a855f7; /* Purple */
  --accent: #10b981; /* Green */
}
```

**Logo**: Replace in `public/logo.png`

### Adding Routes

```bash
# Create new route
mkdir app/new-route
touch app/new-route/page.tsx
```

```typescript
// app/new-route/page.tsx
export default function NewRoute() {
  return <div>New Route</div>
}
```

### Adding API Endpoints

```bash
mkdir -p app/api/new-endpoint
touch app/api/new-endpoint/route.ts
```

```typescript
// app/api/new-endpoint/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  return NextResponse.json({ message: 'Hello' })
}
```

---

## Maintenance

### Regular Tasks

**Daily**:
- Monitor error logs (Vercel dashboard)
- Check API usage (OpenAI dashboard)

**Weekly**:
- Review funding call deadlines
- Update expired calls
- Check database size

**Monthly**:
- Database backup
- Update dependencies: `npm update`
- Review analytics

### Monitoring

**Vercel Analytics**:
- Automatically enabled
- View in Vercel dashboard

**Database Monitoring**:
- Supabase: Built-in monitoring
- Check connection pool usage
- Monitor query performance

### Backups

**Database**:
```bash
# Export data
npx prisma db pull
pg_dump DATABASE_URL > backup.sql
```

**Code**:
- GitHub repository (automatic)
- Regular commits

---

## Troubleshooting

### Common Issues

#### 1. Build Fails
**Error**: `Prisma Client not generated`
**Solution**:
```bash
npm run prisma:generate
npm run build
```

#### 2. Database Connection
**Error**: `Can't reach database server`
**Solutions**:
- Check DATABASE_URL format
- Verify database is running
- Add `?sslmode=require` for cloud databases
- Check firewall settings

#### 3. OpenAI API
**Error**: `Invalid API key`
**Solutions**:
- Verify key in `.env.local`
- Check key is active
- Ensure billing is set up
- Check usage limits

#### 4. Port in Use
**Error**: `Port 3000 already in use`
**Solution**:
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

### Debug Mode

```bash
# Enable debug logging
DEBUG=* npm run dev

# Prisma debug
DEBUG="prisma:*" npm run dev
```

### Getting Help

- 📖 Documentation: Check all .md files
- 🐛 GitHub Issues: Report bugs
- 💬 Community: Join discussions
- 📧 Email: support@research-navigator.edu

---

## Appendix

### Useful Commands

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run start            # Start production server

# Database
npm run prisma:generate  # Generate Prisma Client
npm run prisma:push      # Push schema to DB
npm run prisma:studio    # Open Prisma Studio
npm run seed             # Seed sample data

# Deployment
vercel                   # Deploy to Vercel
vercel --prod            # Deploy to production
vercel logs              # View logs
```

### Environment Variables Reference

| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| DATABASE_URL | Yes | PostgreSQL connection | `postgresql://...` |
| NEXTAUTH_URL | Yes | App URL | `http://localhost:3000` |
| NEXTAUTH_SECRET | Yes | Auth secret | `random-32-char-string` |
| OPENAI_API_KEY | No | OpenAI API key | `sk-...` |
| GEMINI_API_KEY | No | Gemini API key | `...` |

### Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Prisma Docs](https://prisma.io/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [OpenAI API](https://platform.openai.com/docs)
- [Vercel Docs](https://vercel.com/docs)

---

**Version**: 4.1.0  
**Last Updated**: February 25, 2026  
**License**: MIT  
**Support**: support@research-navigator.edu
