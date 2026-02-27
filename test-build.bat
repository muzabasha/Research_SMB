@echo off
echo Testing Next.js build...
echo.

npm run build

echo.
if %ERRORLEVEL% EQU 0 (
    echo ✓ Build succeeded! Ready to deploy.
) else (
    echo ✗ Build failed. Check errors above.
)

echo.
pause
