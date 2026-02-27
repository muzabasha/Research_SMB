# PowerShell script to push changes to GitHub
Write-Host "Adding files to git..." -ForegroundColor Cyan
git add .

Write-Host "`nCommitting changes..." -ForegroundColor Cyan
git commit -m "Complete comprehensive audit: Added sub-stages and activities for stages 8-15 (48 sub-stages, 24 activities) - All 15 stages now complete with experiential learning content"

Write-Host "`nPushing to GitHub..." -ForegroundColor Cyan
git push origin main

Write-Host "`nDone! Check Vercel dashboard for deployment status." -ForegroundColor Green
Write-Host "Press any key to continue..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
