@echo off
echo ========================================
echo Research Navigator - Deployment Script
echo ========================================
echo.

echo Step 1: Building the application...
call npm run build
if %errorlevel% neq 0 (
    echo ERROR: Build failed!
    pause
    exit /b %errorlevel%
)
echo Build successful!
echo.

echo Step 2: Adding files to git...
git add .
if %errorlevel% neq 0 (
    echo ERROR: Git add failed!
    pause
    exit /b %errorlevel%
)
echo Files added successfully!
echo.

echo Step 3: Committing changes...
git commit -m "Deploy Q&A system with Student and Faculty roadmaps complete"
if %errorlevel% neq 0 (
    echo WARNING: Nothing to commit or commit failed
    echo This might be okay if there are no changes
)
echo.

echo Step 4: Pushing to GitHub...
git push origin main
if %errorlevel% neq 0 (
    echo ERROR: Git push failed!
    echo Please check your git credentials and try again
    pause
    exit /b %errorlevel%
)
echo.

echo ========================================
echo SUCCESS! Deployment complete!
echo ========================================
echo.
echo Vercel will automatically deploy your changes.
echo Check your Vercel dashboard for deployment status.
echo.
echo Your presentation is ready at:
echo https://your-app-name.vercel.app
echo.
pause
