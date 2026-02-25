# 🚀 Deployment Guide

## Prerequisites

- GitHub account
- Vercel account (free tier works)
- PostgreSQL database (Supabase/Neon free tier)
- OpenAI API key

## Step 1: Database Setup

### Option A: Supabase (Recommended)

1. Go to [supabase.com](https://supabase.com)
2. Create new project
3. Wait for database to provision
4. Go to Settings → Database
5. Copy connection string (URI format)
6. Replace `[YOUR-PASSWORD]` with your actual password

### Option B: Neon

1. Go to [neon.tech](https://neon.tech)
2. Create new project
3. Copy connection string

## Step 2: GitHub Setup

1. Initialize Git repository:
```bash
git init
git add .
git commit -m "Initial commit: Research Navigator 4.1"
```

2. Create GitHub repository:
```bash
gh repo create research-navigator --public --source=. --remote=origin
```

Or manually:
- Go to github.com/new
- Create repository named `research-navigator`
- Push code:
```bash
git remote add origin https://github.com/yourusername/research-navigator.git
git branch -M main
git push -u origin main
```

## Step 3: Vercel Deployment

### Method 1: Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Follow prompts:
- Link to existing project? **N**
- Project name: **research-navigator**
- Directory: **./research-navigator**
- Override settings? **N**

5. Set environment variables:
```bash
vercel env add DATABASE_URL
vercel env add NEXTAUTH_URL
vercel env add NEXTAUTH_SECRET
vercel env add OPENAI_API_KEY
```

6. Deploy to production:
```bash
vercel --prod
```

### Method 2: Vercel Dashboard

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import Git repository
3. Select `research-navigator`
4. Configure project:
   - Framework Preset: **Next.js**
   - Root Directory: **./research-navigator**
   - Build Command: `prisma generate && next build`
   - Output Directory: `.next`

5. Add environment variables:
   ```
   DATABASE_URL=postgresql://...
   NEXTAUTH_URL=https://your-app.vercel.app
   NEXTAUTH_SECRET=generate-random-string
   OPENAI_API_KEY=sk-...
   ```

6. Click **Deploy**

## Step 4: Post-Deployment

1. Run database migrations:
```bash
npx prisma db push
```

2. Verify deployment:
- Visit your Vercel URL
- Test all routes: `/student`, `/faculty`, `/lab`, `/dashboard`

3. Seed initial data (optional):
```bash
npm run seed
```

## Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://user:pass@host:5432/db` |
| `NEXTAUTH_URL` | Your app URL | `https://research-navigator.vercel.app` |
| `NEXTAUTH_SECRET` | Random secret (32+ chars) | Generate with `openssl rand -base64 32` |
| `OPENAI_API_KEY` | OpenAI API key | `sk-...` |

## Troubleshooting

### Build Fails

**Error**: `Prisma Client not generated`
**Solution**: Add `prisma generate` to build command

**Error**: `DATABASE_URL not found`
**Solution**: Verify environment variables in Vercel dashboard

### Database Connection Issues

**Error**: `Can't reach database server`
**Solution**: 
- Check DATABASE_URL format
- Ensure database allows external connections
- Verify SSL settings (add `?sslmode=require` to URL)

### API Routes Fail

**Error**: `OPENAI_API_KEY not found`
**Solution**: Add API key in Vercel environment variables

## Custom Domain (Optional)

1. Go to Vercel project settings
2. Navigate to Domains
3. Add your custom domain
4. Update DNS records as instructed
5. Update `NEXTAUTH_URL` to your custom domain

## Monitoring

- **Vercel Analytics**: Automatically enabled
- **Error Tracking**: Check Vercel logs
- **Database**: Monitor in Supabase/Neon dashboard

## Scaling

Free tier limits:
- Vercel: 100GB bandwidth/month
- Supabase: 500MB database, 2GB bandwidth
- OpenAI: Pay-as-you-go

For production:
- Upgrade Vercel to Pro ($20/month)
- Upgrade database to paid tier
- Implement API rate limiting
- Add caching layer (Redis)

## Security Checklist

- ✅ Environment variables set
- ✅ Database uses SSL
- ✅ NEXTAUTH_SECRET is random and secure
- ✅ API routes have authentication
- ✅ CORS configured properly
- ✅ Rate limiting enabled

## Continuous Deployment

Vercel automatically deploys on:
- Push to `main` branch → Production
- Pull requests → Preview deployments

To disable auto-deploy:
1. Go to Vercel project settings
2. Git → Deployment Protection
3. Configure as needed

## Backup Strategy

1. **Database**: Enable automated backups in Supabase/Neon
2. **Code**: GitHub repository
3. **Environment Variables**: Store securely (1Password, etc.)

## Support

- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Prisma Docs: [prisma.io/docs](https://prisma.io/docs)
- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)
