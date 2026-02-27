# Manual Push Instructions

Since the automated scripts are having issues with the path containing spaces, please follow these manual steps:

## Steps to Push to GitHub

### 1. Open Terminal/Command Prompt
- Press `Win + R`
- Type `cmd` and press Enter
- Or open Git Bash if you have it installed

### 2. Navigate to the Project Folder
```bash
cd "D:\Contribution_REVA_2026\Resource Person\Research_Tool\research-navigator"
```

### 3. Check Git Status
```bash
git status
```
You should see modified and new files listed.

### 4. Add All Changes
```bash
git add .
```

### 5. Commit Changes
```bash
git commit -m "Fix: Move generateStaticParams to layout.tsx for static export"
```

### 6. Push to GitHub
```bash
git push origin main
```

### 7. Verify Push
You should see output like:
```
Enumerating objects: X, done.
Counting objects: 100% (X/X), done.
Writing objects: 100% (X/X), done.
To https://github.com/muzabasha/research-nav.git
   abc1234..def5678  main -> main
```

## What Happens Next

1. **GitHub receives your changes** (instant)
2. **Vercel detects the push** (within seconds)
3. **Vercel starts building** (takes 2-3 minutes)
4. **Build completes** (you'll see success or failure)
5. **Site deploys** (automatic if build succeeds)

## Monitor Deployment

1. Go to: https://vercel.com/dashboard
2. Find your project: research-nav
3. Click on the latest deployment
4. Watch the build logs

## Expected Build Output

```
✓ Compiled successfully in 10s
✓ Generating static pages (15/15)
  ├ /journey/1
  ├ /journey/2
  ├ /journey/3
  ├ /journey/4
  ├ /journey/5
  ├ /journey/6
  ├ /journey/7
  ├ /journey/8
  ├ /journey/9
  ├ /journey/10
  ├ /journey/11
  ├ /journey/12
  ├ /journey/13
  ├ /journey/14
  └ /journey/15
✓ Build completed successfully!
```

## Verify Deployment

After successful build:
1. Visit your Vercel URL
2. Navigate to `/journey`
3. Click on Stage 1
4. Verify it loads correctly
5. Test navigation between stages

## If Push Fails

### Authentication Error
```bash
# If you see authentication error, configure git:
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

### Permission Denied
```bash
# Make sure you're logged in to GitHub
# You may need to set up SSH keys or use HTTPS with token
```

### Merge Conflicts
```bash
# If there are conflicts, pull first:
git pull origin main
# Resolve any conflicts
# Then push again
```

## Alternative: Use GitHub Desktop

If command line is difficult:
1. Open GitHub Desktop
2. It should detect the changes automatically
3. Add a commit message: "Fix: Move generateStaticParams to layout.tsx"
4. Click "Commit to main"
5. Click "Push origin"

## Files Being Pushed

The following files have been modified or created:
- ✅ app/journey/[stageId]/layout.tsx (modified)
- ✅ app/journey/[stageId]/page.tsx (verified - no changes needed)
- ✅ Multiple documentation files (new)
- ✅ Helper scripts (new)

## Success Indicators

You'll know it worked when:
- ✅ Git push completes without errors
- ✅ GitHub shows the new commit
- ✅ Vercel starts building automatically
- ✅ Vercel build succeeds
- ✅ Site is accessible at your URL

## Need Help?

If you encounter issues:
1. Check the error message carefully
2. Google the specific error
3. Check GitHub/Vercel documentation
4. Ensure you have push permissions to the repository

---

**Good luck! The code is ready and verified. Just need to push it!** 🚀
