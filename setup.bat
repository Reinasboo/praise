@echo off
REM Quick Start Script for Portfolio Deployment

echo.
echo ===============================================
echo   Portfolio Setup & Deployment Script
echo ===============================================
echo.

REM Check if Node.js is installed
node --version > nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed!
    echo Please download and install Node.js from: https://nodejs.org
    pause
    exit /b 1
)

echo [1/5] Checking Node.js version...
node --version
npm --version
echo.

echo [2/5] Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ERROR: Failed to install dependencies
    pause
    exit /b 1
)
echo.

echo [3/5] Building project...
call npm run build
if %errorlevel% neq 0 (
    echo ERROR: Build failed
    pause
    exit /b 1
)
echo.

echo [4/5] Running tests...
echo (Skipped - no tests configured)
echo.

echo [5/5] Setup Complete!
echo.
echo ===============================================
echo   NEXT STEPS
echo ===============================================
echo.
echo Option A - Run locally:
echo   npm run dev
echo   Then visit: http://localhost:3000
echo.
echo Option B - Deploy to Vercel:
echo   1. Install Vercel CLI: npm install -g vercel
echo   2. Deploy: vercel
echo   3. Follow the prompts
echo.
echo Option C - Deploy via GitHub:
echo   1. Push code to GitHub
echo   2. Visit: https://vercel.com
echo   3. Import your GitHub repository
echo.
echo ===============================================
echo.

pause
