# Vercel Deployment Guide

## Pre-Deployment Checklist

### 1. Environment Variables Setup
- [ ] Create a Vercel account and project
- [ ] Set all environment variables in Vercel dashboard
- [ ] Use production API keys (not test keys)
- [ ] Update `NEXTAUTH_URL` to your production domain

### 2. Database Setup
- [ ] Set up production database (Vercel Postgres recommended)
- [ ] Update `DATABASE_URL` in Vercel environment variables
- [ ] Run database migrations: `npx prisma migrate deploy`

### 3. OAuth Configuration
- [ ] Update Google OAuth redirect URIs to include your production domain
- [ ] Add `https://your-domain.vercel.app/api/auth/callback/google` to Google Cloud Console

### 4. External Services
- [ ] Update Stripe webhook endpoints to production URLs
- [ ] Configure Cloudinary for production
- [ ] Update Pusher configuration
- [ ] Configure Resend for production emails

## Deployment Steps

### Step 1: Connect to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

### Step 2: Set Environment Variables
In Vercel dashboard, go to Settings > Environment Variables and add:
- `NEXTAUTH_URL`
- `NEXTAUTH_SECRET`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `DATABASE_URL`
- All other service API keys

### Step 3: Database Migration
```bash
# Generate Prisma client
npx prisma generate

# Push schema to production database
npx prisma db push
```

### Step 4: Verify Deployment
- [ ] Check all pages load correctly
- [ ] Test authentication flows
- [ ] Verify API endpoints work
- [ ] Test database operations
- [ ] Check image uploads work

## Post-Deployment

### Monitoring
- [ ] Set up Vercel Analytics
- [ ] Configure error monitoring
- [ ] Set up performance monitoring

### Security
- [ ] Enable HTTPS (automatic with Vercel)
- [ ] Set up security headers (already configured)
- [ ] Review environment variable access

### Performance
- [ ] Enable Vercel Edge Functions
- [ ] Configure CDN settings
- [ ] Monitor Core Web Vitals

## Troubleshooting

### Common Issues
1. **Build Failures**: Check environment variables are set
2. **Database Connection**: Verify `DATABASE_URL` is correct
3. **OAuth Errors**: Check redirect URIs in Google Console
4. **Image Uploads**: Verify Cloudinary credentials

### Support
- Vercel Documentation: https://vercel.com/docs
- Prisma Documentation: https://www.prisma.io/docs
- Next.js Documentation: https://nextjs.org/docs
