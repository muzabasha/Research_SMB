# 🚀 Vercel Deployment Guide - Research Navigator 4.1

## ✅ GitHub Repository
**Repository**: https://github.com/muzabasha/research-nav
**Status**: ✅ Pushed successfully

## 📋 Pre-Deployment Checklist

- [x] Code pushed to GitHub
- [x] Type errors fixed
- [x] Build script configured
- [x] Environment variables documented
- [ ] Database setup (Supabase/Neon)
- [ ] OpenAI API key (optional)

## 🗄️ Step 1: Database Setup (5 minutes)

### Option A: Supabase (Recommended - Free Tier)

1. Go to [supabase.com](https://supabase.com)
2. Sign up / Login
3. Click "New Project"
4. Fill details:
   - Name: `research-navigator`
   - Database Password: (create strong password)
   - Region: Choose closest to you
5. Wait 2-3 minutes for provisioning
6. Go to **Settings** → **Database**
7. Scroll to **Connection String** → **URI**
8. Copy the connection string
9. Replace `[YOUR-PASSWORD]` with your actual password
10. Add `?pgbouncer=true&connection_limit=1` at the end

**Final format**:
```
postgresql://postgres.xxxxx:[YOUR-PASSWORD]@aws-0-us-east-1.pooler.supabase.com:6543/postgres?pgbouncer=true&connection_limit=1
```

### Option B: Neon (Alternative - Free Tier)

1. Go to [neon.tech](https://neon.tech)
2. Sign up / Login
3. Create new project
4. Copy connection string
5. Use as DATABASE_URL

## 🔑 Step 2: Get OpenAI API Key (Optional - for AI features)

1. Go to [platform.openai.com](https://platform.openai.com)
2. Sign up / Login
3. Go to **API Keys**
4. Click **Create new secret key**
5. Copy the key (starts with `sk-`)
6. Save it securely

**Note**: AI features are optional. App works without OpenAI key, but you won't have:
- Semantic matching
- Proposal evaluation
- Research suggestions

## 🚀 Step 3: Deploy to Vercel

### Method 1: Vercel Dashboard (Easiest)

1. Go to [vercel.com](https://vercel.com)
2. Sign up / Login with GitHub
3. Click **Add New** → **Project**
4. Import `muzabasha/research-nav` repository
5. Configure project:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (leave as is)
   - **Build Command**: `prisma generate && next build` (auto-configured)
   - **Output Directory**: `.next` (auto-configured)
   - **Install Command**: `npm install` (auto-configured)

6. **Add Environment Variables**:
   Click **Environment Variables** and add:

   ```
   DATABASE_URL
   postgresql://your-connection-string-here
   
   NEXTAUTH_URL
   https://your-app-name.vercel.app
   
   NEXTAUTH_SECRET
   (generate with: openssl rand -base64 32)
   
   OPENAI_API_KEY
   sk-your-key-here (optional)
   ```

   **Important**: 
   - For `NEXTAUTH_URL`, use your Vercel URL (you'll get this after first deploy)
   - For `NEXTAUTH_SECRET`, generate a random string:
     ```bash
     openssl rand -base64 32
     ```
     Or use any random 32+ character string

7. Click **Deploy**

8. Wait 2-3 minutes for deployment

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
cd research-navigator
vercel

# Follow prompts:
# - Set up and deploy? Y
# - Which scope? (your account)
# - Link to existing project? N
# - Project name? research-navigator
# - Directory? ./
# - Override settings? N

# Add environment variables
vercel env add DATABASE_URL
vercel env add NEXTAUTH_URL
vercel env add NEXTAUTH_SECRET
vercel env add OPENAI_API_KEY

# Deploy to production
vercel --prod
```

## 🗃️ Step 4: Initialize Database

After deployment, you need to push the database schema:

### Option A: Local Machine

```bash
# Set DATABASE_URL in .env.local
DATABASE_URL="your-supabase-connection-string"

# Push schema
npm run prisma:push

# Seed sample data (optional)
npm run seed
```

### Option B: Vercel CLI

```bash
# Set environment variable locally
export DATABASE_URL="your-connection-string"

# Or on Windows
set DATABASE_URL=your-connection-string

# Push schema
npx prisma db push

# Seed data
npx tsx prisma/seed.ts
```

## ✅ Step 5: Verify Deployment

1. Visit your Vercel URL: `https://your-app-name.vercel.app`
2. Check all routes:
   - `/` - Landing page
   - `/student` - Student portal
   - `/faculty` - Faculty studio
   - `/lab` - Lab incubator
   - `/dashboard` - Dashboard

3. Test API endpoints:
   ```bash
   # Test funding matches (will return empty if no data)
   curl https://your-app.vercel.app/api/funding/matches?facultyId=test
   ```

## 🔧 Step 6: Update NEXTAUTH_URL (Important!)

After first deployment:

1. Copy your Vercel URL (e.g., `https://research-nav.vercel.app`)
2. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
3. Edit `NEXTAUTH_URL` to your actual Vercel URL
4. Redeploy: Go to Deployments → Click "..." → Redeploy

## 🎯 Post-Deployment Tasks

### Add Sample Data

If you seeded the database, you'll have:
- 5 funding calls from various agencies
- 2 faculty profiles
- 1 research lab
- Sample users

### Test AI Features (if OpenAI key added)

1. Go to `/faculty`
2. Enter research metrics
3. Check funding matches
4. Build a proposal and get AI evaluation

### Monitor Application

- **Vercel Dashboard**: Check logs and analytics
- **Supabase Dashboard**: Monitor database usage
- **OpenAI Dashboard**: Track API usage

## 🐛 Troubleshooting

### Build Fails

**Error**: `Prisma Client not generated`
**Solution**: 
- Ensure `postinstall` script is in package.json
- Check build command includes `prisma generate`

**Error**: `Module not found`
**Solution**:
- Redeploy with "Clear Cache and Redeploy"
- Check all dependencies are in package.json

### Database Connection Issues

**Error**: `Can't reach database server`
**Solution**:
- Verify DATABASE_URL is correct
- Check database is running
- For Supabase, ensure connection pooling is enabled
- Add `?pgbouncer=true&connection_limit=1` to URL

### Runtime Errors

**Error**: `NEXTAUTH_URL not defined`
**Solution**:
- Add NEXTAUTH_URL in Vercel environment variables
- Must match your actual Vercel URL

**Error**: `OpenAI API error`
**Solution**:
- Verify API key is correct
- Check you have credits
- AI features are optional - app works without them

### Deployment Timeout

**Solution**:
- Increase build timeout in Vercel settings
- Check for large dependencies
- Optimize build process

## 🔄 Continuous Deployment

Vercel automatically deploys when you push to GitHub:

```bash
# Make changes
git add .
git commit -m "Update feature"
git push origin main

# Vercel automatically deploys
```

## 🌐 Custom Domain (Optional)

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. Update `NEXTAUTH_URL` to your custom domain
5. Redeploy

## 📊 Monitoring & Analytics

### Vercel Analytics
- Automatically enabled
- View in Vercel Dashboard → Analytics

### Database Monitoring
- Supabase: Built-in monitoring dashboard
- Check connection pool usage
- Monitor query performance

### Error Tracking
- View logs in Vercel Dashboard → Logs
- Set up error alerts in Vercel settings

## 💰 Cost Estimate

### Free Tier (Development/Testing)
- Vercel: Free (100GB bandwidth, unlimited deployments)
- Supabase: Free (500MB database, 2GB bandwidth)
- OpenAI: Pay-as-you-go (~$5-10/month for testing)
- **Total: ~$5-10/month**

### Production (100-500 users)
- Vercel Pro: $20/month
- Supabase Pro: $25/month
- OpenAI API: ~$50-100/month
- **Total: ~$95-145/month**

## 🎉 Success!

Your Research Navigator 4.1 is now live at:
**https://your-app-name.vercel.app**

### Next Steps:
1. ✅ Test all features
2. 📊 Add real funding call data
3. 👥 Invite team members
4. 📈 Monitor usage
5. 🚀 Scale as needed

## 🆘 Need Help?

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Supabase Docs**: [supabase.com/docs](https://supabase.com/docs)
- **GitHub Issues**: [github.com/muzabasha/research-nav/issues](https://github.com/muzabasha/research-nav/issues)
- **Documentation**: Check all .md files in repository

---

**Deployment Time**: 10-15 minutes  
**Status**: ✅ Ready to Deploy  
**Repository**: https://github.com/muzabasha/research-nav
