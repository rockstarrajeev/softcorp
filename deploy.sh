#!/bin/bash
# Softcorp Deployment Script for OCI Ubuntu VM

echo "====================================="
echo " Starting deployment for softcorp..."
echo "====================================="

echo "1. Pulling latest code from Git..."
git pull origin main

echo "2. Verifying Sanity Environment Variables..."
if [ -z "$NEXT_PUBLIC_SANITY_PROJECT_ID" ]; then
    echo "Warning: NEXT_PUBLIC_SANITY_PROJECT_ID is not set. Data fetching may fail during build."
fi

echo "3. Installing production dependencies..."
npm install

echo "2. Generating Prisma Client..."
npx prisma generate

echo "3. Synchronizing DB Schema..."
npx prisma db push

echo "4. Seeding Database (if not seeded)..."
npx prisma db seed

echo "6. Skipping build (Files pre-compiled on GitHub)"

echo "7. Restarting application with PM2..."
pm2 reload softcorp || pm2 start ecosystem.config.js

echo "====================================="
echo " Deployment complete! Softcorp is live."
echo "====================================="
