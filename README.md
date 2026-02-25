# 🎓 Research Navigator 4.1

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/muzabasha/research-nav)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-16.1-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)

**Experiential Research Ecosystem (NEP 2020 Aligned)**

An AI-powered platform for research learning, funding intelligence, and lab incubation.

🔗 **Live Demo**: [Coming Soon]  
📦 **Repository**: https://github.com/muzabasha/research-nav  
📚 **Documentation**: [Complete Guide](COMPLETE_GUIDE.md)

## 🚀 Quick Deploy to Vercel

**Ready to deploy in 15 minutes!**

### Option 1: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/muzabasha/research-nav)

### Option 2: Manual Deploy

1. **Database**: Create free PostgreSQL on [Supabase](https://supabase.com)
2. **Deploy**: Import to [Vercel](https://vercel.com)
3. **Configure**: Add environment variables
4. **Initialize**: Run `npx prisma db push`

📖 **Detailed Guide**: [VERCEL_DEPLOY.md](VERCEL_DEPLOY.md)  
✅ **Checklist**: [DEPLOY_CHECKLIST.md](DEPLOY_CHECKLIST.md)

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

### Quick Start (5 minutes)

```bash
# Clone repository
git clone https://github.com/muzabasha/research-nav.git
cd research-nav

# Install dependencies
npm install

# Setup environment
cp .env.example .env.local
# Edit .env.local with your DATABASE_URL

# Initialize database
npm run prisma:generate
npm run prisma:push
npm run seed

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

📖 **Full Setup Guide**: [SETUP.md](SETUP.md)  
⚡ **Quick Start**: [QUICKSTART.md](QUICKSTART.md)

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

### Vercel (Recommended)

**Status**: ✅ Ready to Deploy

1. **Fork/Clone**: Repository already on GitHub
2. **Import**: Go to [vercel.com/new](https://vercel.com/new)
3. **Configure**: Add environment variables
4. **Deploy**: Click deploy button

**Time**: ~10 minutes  
**Cost**: Free tier available

📖 **Complete Guide**: [VERCEL_DEPLOY.md](VERCEL_DEPLOY.md)  
✅ **Checklist**: [DEPLOY_CHECKLIST.md](DEPLOY_CHECKLIST.md)

### Database Setup (Supabase/Neon)

1. Create PostgreSQL database on [Supabase](https://supabase.com) or [Neon](https://neon.tech)
2. Copy connection string
3. Add to Vercel environment variables
4. Run migrations:
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

### Phase 1 (Month 1-2) ✅ COMPLETE
- ✅ Core UI and authentication
- ✅ Database schema
- ✅ Funding call ingestion
- ✅ Similarity engine
- ✅ GitHub repository
- ✅ Vercel deployment ready

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

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## � License

MIT License - see [LICENSE](LICENSE) file for details

## �👥 Team

Built for NEP 2020 experiential research learning.

**Repository**: https://github.com/muzabasha/research-nav  
**Maintainer**: [@muzabasha](https://github.com/muzabasha)

## 📞 Support

For issues and questions:
- 📖 Check [Documentation](COMPLETE_GUIDE.md)
- 🐛 Open [GitHub Issue](https://github.com/muzabasha/research-nav/issues)
- 💬 Start [Discussion](https://github.com/muzabasha/research-nav/discussions)

## 🌟 Star History

If you find this project useful, please consider giving it a star ⭐

---

**Built with ❤️ for NEP 2020 Experiential Research Learning**

**Version**: 4.1.0  
**Status**: ✅ Production Ready  
**Last Updated**: February 25, 2026
