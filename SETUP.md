# 🚀 Quick Setup Guide

## Local Development Setup

### 1. Prerequisites

Ensure you have installed:
- Node.js 18+ ([nodejs.org](https://nodejs.org))
- Git ([git-scm.com](https://git-scm.com))
- PostgreSQL 14+ (or use cloud database)

### 2. Clone & Install

```bash
# Navigate to project
cd research-navigator

# Install dependencies
npm install
```

### 3. Database Setup

#### Option A: Local PostgreSQL

```bash
# Create database
createdb research_navigator

# Update .env.local
DATABASE_URL="postgresql://localhost:5432/research_navigator"
```

#### Option B: Cloud Database (Recommended)

**Supabase** (Free tier: 500MB)
1. Visit [supabase.com](https://supabase.com)
2. Create project
3. Copy connection string from Settings → Database
4. Add to `.env.local`

**Neon** (Free tier: 3GB)
1. Visit [neon.tech](https://neon.tech)
2. Create project
3. Copy connection string
4. Add to `.env.local`

### 4. Environment Variables

Create `.env.local` file:

```env
# Database
DATABASE_URL="postgresql://user:password@host:5432/dbname"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="run: openssl rand -base64 32"

# OpenAI (Required for AI features)
OPENAI_API_KEY="sk-your-key-here"

# Optional: Gemini
GEMINI_API_KEY="your-gemini-key"
```

**Get OpenAI API Key:**
1. Visit [platform.openai.com](https://platform.openai.com)
2. Create account / Login
3. Go to API Keys
4. Create new secret key
5. Copy and paste into `.env.local`

### 5. Initialize Database

```bash
# Generate Prisma Client
npm run prisma:generate

# Push schema to database
npm run prisma:push

# Seed sample data (optional)
npm run seed
```

### 6. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🎯 Testing the Application

### Sample Routes

- **Home**: `http://localhost:3000`
- **Student Portal**: `http://localhost:3000/student`
- **Faculty Studio**: `http://localhost:3000/faculty`
- **Lab Incubator**: `http://localhost:3000/lab`
- **Dashboard**: `http://localhost:3000/dashboard`

### Sample Data (if seeded)

After running `npm run seed`, you'll have:
- 5 funding calls from various agencies
- 2 faculty profiles with research metrics
- 1 sample research lab
- 1 admin user

### API Testing

Test API endpoints using curl or Postman:

```bash
# Get funding matches (replace facultyId)
curl http://localhost:3000/api/funding/matches?facultyId=xxx

# Evaluate proposal
curl -X POST http://localhost:3000/api/proposal/evaluate \
  -H "Content-Type: application/json" \
  -d '{
    "title": "AI for Healthcare",
    "methodology": "Deep learning approach",
    "budget": 1000000,
    "callTitle": "DST-SERB CRG"
  }'
```

## 🛠️ Development Tools

### Prisma Studio (Database GUI)

```bash
npm run prisma:studio
```

Opens at [http://localhost:5555](http://localhost:5555)

### Database Commands

```bash
# View current schema
npx prisma db pull

# Reset database (WARNING: deletes all data)
npx prisma db push --force-reset

# Create migration
npx prisma migrate dev --name init
```

## 🐛 Troubleshooting

### Port Already in Use

```bash
# Kill process on port 3000
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

### Database Connection Failed

**Error**: `Can't reach database server`

**Solutions**:
1. Check DATABASE_URL format
2. Ensure PostgreSQL is running
3. Verify credentials
4. For cloud DB, check SSL: add `?sslmode=require`

### Prisma Client Not Generated

**Error**: `Cannot find module '@prisma/client'`

**Solution**:
```bash
npm run prisma:generate
```

### OpenAI API Errors

**Error**: `Invalid API key`

**Solutions**:
1. Verify OPENAI_API_KEY in `.env.local`
2. Check API key is active on OpenAI dashboard
3. Ensure you have credits/billing set up

### Build Errors

**Error**: `Module not found`

**Solution**:
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📦 Project Structure

```
research-navigator/
├── app/                    # Next.js 14 App Router
│   ├── page.tsx           # Home page
│   ├── student/           # Student portal
│   ├── faculty/           # Faculty studio
│   ├── lab/               # Lab incubator
│   ├── dashboard/         # Analytics
│   └── api/               # API routes
│       ├── faculty/
│       ├── funding/
│       ├── proposal/
│       └── lab/
├── components/            # Reusable components
├── lib/                   # Utilities
│   ├── prisma.ts         # DB client
│   ├── similarity.ts     # AI matching
│   └── ai.ts             # AI utilities
├── prisma/
│   ├── schema.prisma     # Database schema
│   └── seed.ts           # Sample data
├── public/               # Static files
├── .env.local            # Environment variables
└── package.json          # Dependencies
```

## 🎨 Customization

### Adding New Funding Calls

1. Use Prisma Studio: `npm run prisma:studio`
2. Navigate to FundingCall table
3. Add new record

Or programmatically:

```typescript
await prisma.fundingCall.create({
  data: {
    agency: 'Your Agency',
    title: 'Grant Title',
    deadline: new Date('2026-12-31'),
    domainKeywords: ['AI', 'ML'],
    budgetMin: 100000,
    budgetMax: 1000000,
  }
})
```

### Modifying UI Colors

Edit `app/globals.css` or component Tailwind classes:
- Blue: `bg-blue-600`, `text-blue-600`
- Purple: `bg-purple-600`, `text-purple-600`
- Green: `bg-green-600`, `text-green-600`

### Adding New Routes

Create new folder in `app/`:
```bash
mkdir app/new-route
touch app/new-route/page.tsx
```

## 📚 Next Steps

1. ✅ Complete local setup
2. 📝 Review database schema in Prisma Studio
3. 🎨 Customize UI components
4. 🤖 Test AI features with real data
5. 🚀 Deploy to Vercel (see DEPLOYMENT.md)

## 🆘 Getting Help

- **Documentation**: Check README.md and DEPLOYMENT.md
- **Prisma Docs**: [prisma.io/docs](https://prisma.io/docs)
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **OpenAI API**: [platform.openai.com/docs](https://platform.openai.com/docs)

## 🎓 Learning Resources

- Next.js 14 App Router: [nextjs.org/learn](https://nextjs.org/learn)
- Prisma Tutorial: [prisma.io/docs/getting-started](https://prisma.io/docs/getting-started)
- Tailwind CSS: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- OpenAI Embeddings: [platform.openai.com/docs/guides/embeddings](https://platform.openai.com/docs/guides/embeddings)
