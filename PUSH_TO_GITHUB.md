# How to Push Changes to GitHub

## Quick Method (Using Batch File)
1. Double-click `git-commit-push.bat` in the research-navigator folder
2. Wait for it to complete
3. Check Vercel dashboard for deployment

## Manual Method (Using Terminal)
Open a terminal in the `research-navigator` folder and run:

```bash
# Check status
git status

# Add all changes
git add .

# Commit with message
git commit -m "Fix: Move generateStaticParams to layout.tsx for static export"

# Push to GitHub
git push origin main
```

## What Will Happen
1. Changes pushed to GitHub repository
2. Vercel detects the push automatically
3. Vercel starts a new build
4. Build should succeed this time
5. Site deploys successfully

## Files Being Pushed
- ✅ `app/journey/[stageId]/layout.tsx` - Contains generateStaticParams
- ✅ `app/journey/[stageId]/page.tsx` - Client component without generateStaticParams
- ✅ `DEPLOYMENT_FIX.md` - Documentation of the fix
- ✅ `git-commit-push.bat` - Helper script
- ✅ `PUSH_TO_GITHUB.md` - This file

## Verify Deployment
After pushing, check:
1. GitHub repository: https://github.com/muzabasha/research-nav
2. Vercel dashboard: https://vercel.com/dashboard
3. Live site: Your Vercel URL

## Expected Build Output
```
✓ Compiled successfully
✓ Collecting page data
✓ Generating static pages (15/15)
✓ Finalizing page optimization
```

## If Build Still Fails
1. Check Vercel build logs for specific error
2. Verify the correct branch is deployed (main)
3. Clear Vercel build cache if needed
4. Contact support with error details

## Success Indicators
- ✅ Build completes without errors
- ✅ All 15 stage pages generated
- ✅ Site accessible at Vercel URL
- ✅ Navigation works between stages
- ✅ Assessments load correctly
