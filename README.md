# 🎓 Research Navigator 4.1

**Experiential Research Ecosystem (NEP 2020 Aligned)**

An AI-powered platform for research learning, funding intelligence, and lab incubation.

## 🚀 Features

- **Student Research Playground**: Interactive experiential learning simulator
- **Faculty Research Studio**: AI-powered funding call matching with relevance scoring
- **Lab Incubator**: Research lab creation with ROI prediction
- **Institutional Dashboard**: Analytics and insights for research management
- **AI Proposal Evaluator**: Automated proposal review and feedback
- **Semantic Matching Engine**: Faculty-to-funding call relevance scoring

## 🛠️ Technology Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: PostgreSQL
- **AI**: OpenAI API (GPT-4, Embeddings)
- **Authentication**: NextAuth.js
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/research-navigator.git
cd research-navigator
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local .env
```

Edit `.env` with your credentials:
```
DATABASE_URL="postgresql://user:password@localhost:5432/research_navigator"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"
OPENAI_API_KEY="your-openai-api-key"
```

4. Initialize database:
```bash
npx prisma generate
npx prisma db push
```

5. Run development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🗄️ Database Schema

Core tables:
- **Users**: Authentication and role management
- **FacultyProfile**: Research metrics and domain vectors
- **FundingCall**: Funding opportunities with eligibility criteria
- **RelevanceScore**: AI-calculated faculty-call matches
- **Lab**: Research lab tracking with ROI
- **Proposal**: Proposal management with AI evaluation

## 🤖 AI Features

### Relevance Scoring Formula
```
Score = (0.25 * domainSimilarity) 
      + (0.15 * publicationMatch) 
      + (0.15 * eligibilityCompliance) 
      + (0.10 * thematicAlignment) 
      + (0.10 * pastFundingSimilarity) 
      + (0.10 * collaborationScore) 
      + (0.10 * outcomeCapability) 
      + (0.05 * institutionalAlignment)
```

### Lab ROI Prediction
```
ROI = seedAmount * (publicationWeight + hIndexWeight + teamWeight) * fundingProbability
```

## 📊 API Endpoints

- `POST /api/faculty/analyze` - Analyze faculty profile
- `GET /api/funding/matches?facultyId=xxx` - Get funding matches
- `POST /api/proposal/evaluate` - Evaluate proposal
- `POST /api/lab/create` - Create research lab

## 🚀 Deployment

### Vercel Deployment

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login and deploy:
```bash
vercel login
vercel
```

3. Set environment variables in Vercel dashboard

### Database Setup (Supabase/Neon)

1. Create PostgreSQL database on Supabase or Neon
2. Copy connection string to `DATABASE_URL`
3. Run migrations:
```bash
npx prisma db push
```

## 📁 Project Structure

```
research-navigator/
├── app/
│   ├── student/          # Student portal
│   ├── faculty/          # Faculty studio
│   ├── lab/              # Lab incubator
│   ├── dashboard/        # Analytics dashboard
│   └── api/              # API routes
├── components/           # Reusable components
├── lib/
│   ├── prisma.ts        # Database client
│   ├── similarity.ts    # AI matching engine
│   └── ai.ts            # AI utilities
├── prisma/
│   └── schema.prisma    # Database schema
└── public/              # Static assets
```

## 🎯 Roadmap

### Phase 1 (Month 1-2)
- ✅ Core UI and authentication
- ✅ Database schema
- ✅ Funding call ingestion
- ✅ Similarity engine

### Phase 2 (Month 3-4)
- 🔄 Proposal builder with AI
- 🔄 Reviewer simulation
- 🔄 Lab module enhancement

### Phase 3 (Month 5-6)
- 📋 Institutional dashboard
- 📋 Analytics and reporting
- 📋 Gamification features

## 🤝 Contributing

Contributions welcome! Please read our contributing guidelines.

## 📄 License

MIT License

## 👥 Team

Built for NEP 2020 experiential research learning.

## 📞 Support

For issues and questions, please open a GitHub issue.
