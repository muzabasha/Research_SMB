# 🎓 Research Navigator 4.1 - Static Demo

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/muzabasha/research-nav)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-16.1-black)](https://nextjs.org/)

**Experiential Research Ecosystem (NEP 2020 Aligned) - Static Demo Version**

A demonstration platform showcasing research learning, funding intelligence, and lab incubation interfaces.

🔗 **Live Demo**: [Deploy Now](https://vercel.com/new/clone?repository-url=https://github.com/muzabasha/research-nav)  
📦 **Repository**: https://github.com/muzabasha/research-nav

---

## ⚡ Quick Deploy (1 Click)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/muzabasha/research-nav)

**No database or API keys required!** This is a static demo showcasing the UI/UX.

---

## 🚀 Features

### 🎤 Interactive Presentation System (NEW!)
- **Comprehensive Q&A System**: Dual-question format for all roadmaps
- **Student Roadmap**: 7 complete stages with funny analogies and transformation themes
- **Faculty Roadmap**: 7 complete stages with actionable insights
- **Institute Roadmap**: Culture development stage (more coming soon)
- **Fullscreen Mode**: Perfect for projector presentations
- **Auto-Advance**: 5-second timing with pause on questions
- **Speaker Profile**: Dr. Syed Muzamil Basha, REVA University

### Student Research Playground
- Interactive 5-step research journey
- Domain selection interface
- Problem builder with progress tracking
- Gamified learning experience
- Psychology assessments with personalized interpretations

### Faculty Research Studio
- Profile management interface
- Funding call matching UI
- Proposal builder mockup
- Analytics dashboard
- Educational content and guidance

### Research Roadmap
- 3 interconnected pathways (Student, Faculty, Institute)
- Detailed sub-stages and planning phases
- Interactive Q&A with funny analogies
- Slideshow presentation mode

### Lab Incubator
- Lab creation form
- ROI prediction display
- Team management interface

### Institutional Dashboard
- Key metrics overview
- Department rankings
- Activity feed

---

## 📦 Local Development

```bash
# Clone repository
git clone https://github.com/muzabasha/research-nav.git
cd research-nav

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🚀 Deploy to Vercel

### Quick Deploy (Automated)

**Windows Users**: Run the deployment script
```bash
cd research-navigator
deploy.bat
```

This will:
- Build the application
- Commit changes to git
- Push to GitHub
- Trigger automatic Vercel deployment

### Manual Deploy

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Commit and push to GitHub**
   ```bash
   git add .
   git commit -m "Deploy with Q&A system"
   git push origin main
   ```

3. **Vercel auto-deploys** from GitHub
   - Check your Vercel dashboard
   - Wait for "Ready" status
   - Visit your production URL

### First-Time Setup

If this is your first deployment:

1. **Connect to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - Click "Deploy"

2. **No environment variables needed!** This is a static site.

### Deployment Checklist

See `DEPLOYMENT_CHECKLIST.md` for complete pre-deployment verification steps.

---

## 🎨 Customization

### Update Branding
Edit colors in `app/globals.css`:
```css
:root {
  --primary: #3b82f6;
  --secondary: #a855f7;
}
```

### Modify Content
- Landing page: `app/page.tsx`
- Student portal: `app/student/page.tsx`
- Faculty studio: `app/faculty/page.tsx`
- Lab incubator: `app/lab/page.tsx`
- Dashboard: `app/dashboard/page.tsx`

---

## 📁 Project Structure

```
research-navigator/
├── app/
│   ├── page.tsx              # Interactive Presentation (NEW!)
│   ├── student/page.tsx      # Student portal
│   ├── faculty/page.tsx      # Faculty studio
│   ├── lab/page.tsx          # Lab incubator
│   ├── roadmap/page.tsx      # Research roadmap
│   └── dashboard/page.tsx    # Dashboard
├── lib/
│   ├── comprehensive-qa-data.ts      # Q&A content (NEW!)
│   ├── roadmap-detailed-data.ts      # Roadmap data
│   └── topic-specific-orientations.ts # Orientation content
├── public/                   # Static assets
├── DEPLOYMENT_CHECKLIST.md   # Pre-deployment verification
├── QA_COMPLETION_STATUS.md   # Q&A implementation status
├── NEXT_STEPS.md            # How to complete and deploy
├── package.json             # Dependencies
└── next.config.ts           # Next.js config (static export)
```

---

## 🎯 Technology Stack

- **Framework**: Next.js 16 (Static Export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion

---

## 📝 Note

This version includes:
- ✅ **Interactive Presentation System** with comprehensive Q&A
- ✅ **Student Roadmap**: 7 complete stages with dual questions
- ✅ **Faculty Roadmap**: 7 complete stages with dual questions
- ✅ **Institute Roadmap**: 1 stage complete (6 more can be added)
- ✅ **Funny Analogies**: Memorable and engaging content
- ✅ **Transformation Themes**: Reactive→Proactive, Rigid→Open, Blaming→Owning
- ✅ **Speaker Insights**: Personal stories from Dr. Syed Muzamil Basha
- ✅ **Fullscreen Presentation Mode**: Ready for large audiences

### Current Status: 71% Complete
- Student and Faculty roadmaps are production-ready
- Institute roadmap can be extended (see `QA_COMPLETION_STATUS.md`)

For a full-featured version with:
- Database integration
- AI-powered matching
- Authentication
- API endpoints
- Complete Institute roadmap (7 stages)

Please contact the development team or check the documentation files.

---

## 🤝 Contributing

Contributions welcome! Please:
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

## 📄 License

MIT License - see LICENSE file for details

---

## 👥 About

Built for NEP 2020 experiential research learning.

**Repository**: https://github.com/muzabasha/research-nav  
**Version**: 4.1.1 (Interactive Presentation System)  
**Status**: ✅ Production Ready (71% Q&A Complete)  
**Speaker**: Dr. Syed Muzamil Basha, Professor, REVA University

---

## 📚 Documentation

- **DEPLOYMENT_CHECKLIST.md** - Pre-deployment verification steps
- **QA_COMPLETION_STATUS.md** - Q&A implementation status and templates
- **IMPLEMENTATION_NOTES.md** - Technical implementation guide
- **SESSION_SUMMARY.md** - Development session summary
- **NEXT_STEPS.md** - How to complete remaining stages

---

**Built with ❤️ for NEP 2020 Experiential Research Learning**
