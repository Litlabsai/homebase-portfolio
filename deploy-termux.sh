#!/bin/bash
# One-command deploy script for Termux

echo "🚀 Deploying HomeBase Pro..."

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if in right directory
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ Error: package.json not found${NC}"
    echo "Run this script from the homebase-portfolio directory"
    exit 1
fi

# Pull latest
echo -e "${YELLOW}📥 Pulling latest changes...${NC}"
git pull origin main || git pull origin gh-pages

# Install dependencies
echo -e "${YELLOW}📦 Installing dependencies...${NC}"
npm install

# Build
echo -e "${YELLOW}🔨 Building...${NC}"
npm run build

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Build successful!${NC}"
    echo ""
    echo "Build output in 'dist/' folder"
    echo ""
    echo "Deploy options:"
    echo "  1. Firebase: firebase deploy"
    echo "  2. GitHub Pages: git add dist && git commit -m 'deploy' && git push"
    echo "  3. Manual: Upload dist/ folder to your host"
else
    echo -e "${RED}❌ Build failed${NC}"
    exit 1
fi
