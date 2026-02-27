@echo off
echo Fixing TypeScript error and pushing...
git add .
git commit -m "Fix: Complete phase-assessments.ts with interpretation property"
git push origin main
echo Done!
pause
