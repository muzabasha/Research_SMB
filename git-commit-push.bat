@echo off
echo Checking git status...
git status

echo.
echo Adding all changes...
git add .

echo.
echo Committing changes...
git commit -m "Fix: Remove generateStaticParams from client component page.tsx"

echo.
echo Pushing to GitHub...
git push origin main

echo.
echo Done!
pause
