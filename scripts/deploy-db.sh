#!/bin/bash

# Production Database Deployment Script
# Run this script after setting up your production database

echo "🚀 Starting production database deployment..."

# Check if DATABASE_URL is set
if [ -z "$DATABASE_URL" ]; then
    echo "❌ Error: DATABASE_URL environment variable is not set"
    exit 1
fi

echo "📦 Generating Prisma client..."
npx prisma generate

echo "🔄 Running database migrations..."
npx prisma migrate deploy

echo "✅ Database deployment completed successfully!"

echo "🔍 Verifying database connection..."
npx prisma db seed --preview-feature

echo "🎉 All done! Your production database is ready."
