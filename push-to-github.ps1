# PowerShell script to push changes to GitHub
Write-Host "Starting Git push process..." -ForegroundColor Cyan
Write-Host ""

# Check git status
Write-Host "Checking git status..." -ForegroundColor Yellow
git status

Write-Host ""
Write-Host "Adding all changes..." -ForegroundColor Yellow
git add .

Write-Host ""
Write-Host "Committing changes..." -ForegroundColor Yellow
git commit -m "Fix: Move generateStaticParams to layout.tsx for static export compatibility"

Write-Host ""
Write-Host "Pushing to GitHub..." -ForegroundColor Yellow
git push origin main

Write-Host ""
Write-Host "Done! Check Vercel dashboard for deployment status." -ForegroundColor Green
Write-Host ""
Read-Host "Press Enter to exit"
