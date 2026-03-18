#!/bin/bash
# Softcorp Deployment Script for OCI Ubuntu VM (Low Memory Version)

echo "====================================="
echo " Starting Low-Memory Deployment..."
echo "====================================="

echo "1. Pulling latest code from Git..."
git pull origin main

echo "2. Verifying Sanity Environment Variables..."
if [ -z "$NEXT_PUBLIC_SANITY_PROJECT_ID" ]; then
    echo "Warning: NEXT_PUBLIC_SANITY_PROJECT_ID is not set."
fi

echo "3. Installing dependencies..."
npm install

echo "4. Generating Prisma Client..."
npx prisma generate

echo "5. Synchronizing DB Schema..."
npx prisma db push

echo "6. Building Next.js application (Memory Restricted)..."
# Disable everything that takes too much memory
export NEXT_TELEMETRY_DISABLED=1
export NODE_OPTIONS="--max_old_space_size=512"

npm run build

echo "7. Restarting application with PM2..."
pm2 reload softcorp || pm2 start ecosystem.config.js

echo "====================================="
echo " Deployment complete! Softcorp is live."
echo "====================================="
