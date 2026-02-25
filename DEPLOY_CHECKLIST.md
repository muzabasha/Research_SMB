# ✅ Deployment Checklist - Research Navigator 4.1

## Pre-Deployment Status

### Code Repository
- [x] GitHub repository created: `muzabasha/research-nav`
- [x] Code pushed successfully
- [x] All files committed (40 files, 6291 lines)
- [x] Type errors fixed
- [x] Build configuration ready

### Project Structure
- [x] Next.js 14 application
- [x] TypeScript configured
- [x] Prisma schema defined
- [x] API routes created
- [x] UI components built
- [x] Documentation complete

## Deployment Steps

### 1. Database Setup (5 min)
- [ ] Create Supabase account
- [ ] Create new project
- [ ] Copy connection string
- [ ] Save DATABASE_URL

**Supabase URL Format**:
```
postgresql://postgres.xxxxx:[PASSWORD]@aws-0-us-east-1.pooler.supabase.com:6543/postgres?pgbouncer=true&connection_limit=1
```

### 2. OpenAI API (Optional - 2 min)
- [ ] Create OpenAI account
- [ ] Generate API key
- [ ] Save OPENAI_API_KEY

**Note**: Skip if you want to deploy without AI features first

### 3. Vercel Deployment (5 min)
- [ ] Go to [vercel.com](https://vercel.com)
- [ ] Sign in with GitHub
- [ ] Import `muzabasha/research-nav`
- [ ] Add environment variables:
  - [ ] DATABASE_URL
  - [ ] NEXTAUTH_URL (use Vercel URL)
  - [ ] NEXTAUTH_SECRET (generate random string)
  - [ ] OPENAI_API_KEY (optional)
- [ ] Click Deploy
- [ ] Wait for build to complete

### 4. Database Initialization (3 min)
- [ ] Run `npx prisma db push` (locally with DATABASE_URL)
- [ ] Run `npm run seed` (optional - adds sample data)
- [ ] Verify tables created in Supabase dashboard

### 5. Post-Deployment (2 min)
- [ ] Visit Vercel URL
- [ ] Test all routes:
  - [ ] `/` - Landing page
  - [ ] `/student` - Student portal
  - [ ] `/faculty` - Faculty studio
  - [ ] `/lab` - Lab incubator
  - [ ] `/dashboard` - Dashboard
- [ ] Update NEXTAUTH_URL with actual Vercel URL
- [ ] Redeploy

## Environment Variables Reference

```env
# Required
DATABASE_URL="postgresql://..."
NEXTAUTH_URL="https://your-app.vercel.app"
NEXTAUTH_SECRET="random-32-char-string"

# Optional (for AI features)
OPENAI_API_KEY="sk-..."
```

## Generate NEXTAUTH_SECRET

```bash
# Mac/Linux
openssl rand -base64 32

# Or use any random string generator
# Example: "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6"
```

## Quick Commands

```bash
# Push database schema
npx prisma db push

# Seed sample data
npm run seed

# Check build locally
npm run build

# Test locally
npm run dev
```

## Verification Tests

### After Deployment
1. **Landing Page**: Should show 4 portal cards
2. **Student Portal**: Should show domain selection
3. **Faculty Studio**: Should show 4 tabs
4. **Lab Incubator**: Should show lab creation form
5. **Dashboard**: Should show metric cards

### API Endpoints
```bash
# Test (replace with your URL)
curl https://your-app.vercel.app/api/funding/matches?facultyId=test
```

## Common Issues & Solutions

### Build Fails
- **Issue**: Prisma Client not generated
- **Fix**: Check `postinstall` script in package.json
- **Fix**: Redeploy with "Clear Cache"

### Database Connection
- **Issue**: Can't connect to database
- **Fix**: Verify DATABASE_URL format
- **Fix**: Check Supabase project is running
- **Fix**: Add connection pooling parameters

### Runtime Errors
- **Issue**: NEXTAUTH_URL not defined
- **Fix**: Add in Vercel environment variables
- **Fix**: Must match actual Vercel URL

### OpenAI Errors
- **Issue**: Invalid API key
- **Fix**: Verify key is correct
- **Fix**: Check billing is set up
- **Note**: App works without OpenAI (AI features disabled)

## Success Criteria

- [x] Code on GitHub
- [ ] Deployed on Vercel
- [ ] Database connected
- [ ] All routes accessible
- [ ] No console errors
- [ ] Sample data loaded (optional)

## Time Estimate

- Database Setup: 5 minutes
- Vercel Deployment: 5 minutes
- Database Init: 3 minutes
- Testing: 2 minutes
- **Total: ~15 minutes**

## Next Steps After Deployment

1. **Test Features**: Try all portals and features
2. **Add Data**: Import real funding calls
3. **Customize**: Update branding and colors
4. **Monitor**: Check Vercel analytics
5. **Scale**: Upgrade plans as needed

## Support Resources

- **Vercel Docs**: https://vercel.com/docs
- **Supabase Docs**: https://supabase.com/docs
- **Prisma Docs**: https://prisma.io/docs
- **Project Docs**: Check all .md files in repo

## Repository

**GitHub**: https://github.com/muzabasha/research-nav  
**Status**: ✅ Ready to Deploy  
**Version**: 4.1.0

---

**Last Updated**: February 25, 2026  
**Deployment Ready**: ✅ YES
