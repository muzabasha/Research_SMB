@echo off
echo Adding files to git...
git add .

echo.
echo Committing changes...
git commit -m "Complete comprehensive audit: Added sub-stages and activities for stages 8-15 (48 sub-stages, 24 activities) - All 15 stages now complete with experiential learning content"

echo.
echo Pushing to GitHub...
git push origin main

echo.
echo Done! Check Vercel dashboard for deployment status.
pause
