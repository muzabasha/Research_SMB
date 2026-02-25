# ⚡ Quick Start - Research Navigator 4.1

Get up and running in 5 minutes!

## 🚀 Option 1: Local Development (Fastest)

### Step 1: Install Dependencies (1 min)
```bash
cd research-navigator
npm install
```

### Step 2: Setup Database (2 min)

**Using Supabase (Recommended)**:
1. Go to [supabase.com](https://supabase.com) → Sign up (free)
2. Create new project → Wait 2 minutes
3. Settings → Database → Copy connection string
4. Create `.env.local`:
```env
DATABASE_URL="your-connection-string-here"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="any-random-string-here"
OPENAI_API_KEY="sk-your-key-or-leave-empty-for-now"
```

### Step 3: Initialize Database (1 min)
```bash
npm run prisma:generate
npm run prisma:push
npm run seed
```

### Step 4: Run (1 min)
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

---

## 🌐 Option 2: Deploy to Vercel (Production)

### Prerequisites
- GitHub account
- Vercel account (free)
- Supabase account (free)

### Step 1: Push to GitHub (2 min)
```bash
cd research-navigator
git init
git add .
git commit -m "Initial commit"
gh repo create research-navigator --public --source=. --push
```

### Step 2: Deploy to Vercel (3 min)
1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Add environment variables:
   - `DATABASE_URL`: Your Supabase connection string
   - `NEXTAUTH_URL`: Your Vercel URL (e.g., https://research-navigator.vercel.app)
   - `NEXTAUTH_SECRET`: Generate with `openssl rand -base64 32`
   - `OPENAI_API_KEY`: Your OpenAI key (optional for now)
4. Click Deploy

### Step 3: Initialize Database (1 min)
After deployment, run locally:
```bash
npm run prisma:push
npm run seed
```

Done! Visit your Vercel URL 🚀

---

## 🎯 What You Get

After setup, you'll have:
- ✅ 4 interactive portals (Student, Faculty, Lab, Dashboard)
- ✅ 5 sample funding calls
- ✅ 2 faculty profiles with metrics
- ✅ 1 research lab
- ✅ AI-powered features (if OpenAI key provided)

---

## 🧪 Test the Features

### Student Portal
1. Go to `/student`
2. Select a domain (e.g., "Artificial Intelligence")
3. Define a research problem
4. Watch your progress score increase!

### Faculty Studio
1. Go to `/faculty`
2. Enter research metrics (publications, h-index)
3. View funding matches (sample data)
4. Build a proposal

### Lab Incubator
1. Go to `/lab`
2. Create a new lab
3. Enter seed funding amount
4. See ROI prediction

### Dashboard
1. Go to `/dashboard`
2. View institutional metrics
3. Check department rankings

---

## 🔑 Getting OpenAI API Key (Optional)

For full AI features:
1. Visit [platform.openai.com](https://platform.openai.com)
2. Sign up / Login
3. Go to API Keys
4. Create new key
5. Add to `.env.local`:
```env
OPENAI_API_KEY="sk-your-actual-key-here"
```
6. Restart server: `npm run dev`

**Cost**: ~$0.01-0.10 per request (very affordable for testing)

---

## 🐛 Troubleshooting

### "Cannot find module '@prisma/client'"
```bash
npm run prisma:generate
```

### "Database connection failed"
- Check DATABASE_URL in `.env.local`
- Ensure database is running
- For Supabase, add `?sslmode=require` to URL

### "Port 3000 already in use"
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

### "OpenAI API error"
- Verify API key is correct
- Check you have credits
- AI features are optional - app works without them

---

## 📚 Next Steps

1. ✅ Complete quick start
2. 📖 Read [FEATURES.md](FEATURES.md) for full capabilities
3. 🎨 Customize UI colors and branding
4. 📊 Add your own funding call data
5. 👥 Invite team members
6. 🚀 Deploy to production

---

## 💡 Pro Tips

- Use Prisma Studio to view/edit data: `npm run prisma:studio`
- Check logs in Vercel dashboard for debugging
- Start with sample data, then add real data gradually
- Test AI features with small datasets first
- Monitor OpenAI usage in their dashboard

---

## 🆘 Need Help?

- 📖 Full docs: [README.md](README.md)
- 🔧 Setup guide: [SETUP.md](SETUP.md)
- 🚀 Deployment: [DEPLOYMENT.md](DEPLOYMENT.md)
- 🎯 Features: [FEATURES.md](FEATURES.md)

---

**Time to First Run**: 5 minutes ⚡  
**Time to Production**: 10 minutes 🚀  
**Cost**: Free tier available 💰
