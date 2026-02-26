@echo off
echo Adding files to git...
git add .

echo.
echo Committing changes...
git commit -m "Deploy Q&A system with Student and Faculty roadmaps complete - 71%% implementation"

echo.
echo Pushing to GitHub...
git push origin main

echo.
echo Done! Check Vercel dashboard for deployment status.
pause
