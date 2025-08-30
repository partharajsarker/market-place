# Multi-Vendor Marketplace

A full-stack multi-vendor marketplace built with Next.js 15, featuring three user roles (Admin, Vendor, Customer), advanced product management, Stripe Connect payments, and real-time notifications.

## 🚀 Features

### Core Functionality
- **Three User Roles**: Admin, Vendor, and Customer with role-based access control
- **Multi-Vendor Support**: Vendors can manage their own products, orders, and earnings
- **Advanced Product Management**: Product variants, inventory tracking, image management
- **Secure Payments**: Stripe Connect integration with split payments and platform fees
- **Real-time Notifications**: Pusher integration for live updates
- **Email System**: Resend integration for transactional emails

### User Experience
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark/Light Theme**: Theme toggle with system preference detection
- **Advanced Search**: Product filtering by category, price, rating, vendor
- **Shopping Cart**: Multi-vendor cart with real-time updates
- **Order Tracking**: Complete order lifecycle management
- **Reviews & Ratings**: Customer feedback system

### Vendor Features
- **Onboarding Flow**: KYC verification and bank details setup
- **Dashboard**: Sales analytics, order management, inventory control
- **Payout System**: Automated Stripe Connect transfers
- **Product Management**: CRUD operations with bulk actions

### Admin Features
- **Vendor Management**: Approval workflow and verification
- **Commission Rules**: Configurable fee structures
- **Analytics**: Site-wide performance metrics
- **Dispute Resolution**: Customer service tools

## 🛠️ Tech Stack

### Frontend
- **Next.js 15**: App Router with TypeScript
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Modern component library
- **Framer Motion**: Smooth animations
- **React Query**: Server state management
- **Zustand**: Client state management

### Backend
- **Node.js**: Runtime environment
- **Prisma ORM**: Database toolkit
- **PostgreSQL**: Primary database
- **NextAuth.js**: Authentication system
- **Stripe**: Payment processing
- **Cloudinary**: Image storage
- **Pusher**: Real-time features
- **Resend**: Email service

## 📁 Project Structure

```
marketplace/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (auth)/            # Authentication routes
│   │   ├── (vendor)/          # Vendor dashboard routes
│   │   ├── (admin)/           # Admin panel routes
│   │   ├── api/               # API routes
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Homepage
│   ├── components/            # Reusable components
│   │   ├── ui/               # shadcn/ui components
│   │   ├── layout/           # Layout components
│   │   ├── products/         # Product-related components
│   │   ├── auth/             # Authentication components
│   │   └── home/             # Homepage components
│   ├── lib/                  # Utility functions
│   ├── types/                # TypeScript definitions
│   ├── store/                # Zustand stores
│   └── hooks/                # Custom React hooks
├── prisma/                   # Database schema and migrations
├── public/                   # Static assets
└── package.json             # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- Stripe account
- Cloudinary account
- Pusher account
- Resend account

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd marketplace
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   # Edit .env.local with your credentials
   ```

4. **Set up database**
   ```bash
   npm run db:generate
   npm run db:push
   ```

5. **Run development server**
   ```bash
   npm run dev
   ```

## 🚀 Deployment

### Vercel Deployment (Recommended)

This project is optimized for Vercel deployment with the following features:

- **Automatic builds** with Prisma client generation
- **Serverless functions** optimized for Vercel
- **Environment variables** management
- **Database integration** with Vercel Postgres
- **Performance optimizations** for production

#### Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/marketplace)

#### Manual Deployment

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy to Vercel**
   ```bash
   vercel --prod
   ```

3. **Set environment variables** in Vercel dashboard
4. **Connect your database** (Vercel Postgres recommended)
5. **Run database migrations**
   ```bash
   npx prisma migrate deploy
   ```

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

### Environment Variables

Set these in your Vercel dashboard:

```bash
# Required
NEXTAUTH_URL=https://your-domain.vercel.app
NEXTAUTH_SECRET=your-secret-key
DATABASE_URL=your-database-connection-string

# OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Services
STRIPE_PUBLISHABLE_KEY=your-stripe-key
STRIPE_SECRET_KEY=your-stripe-secret
CLOUDINARY_CLOUD_NAME=your-cloud-name
# ... and other service keys
```

## 📚 Documentation

- [Deployment Guide](./DEPLOYMENT.md) - Complete Vercel deployment instructions
- [API Documentation](./docs/API.md) - API endpoints and usage
- [Database Schema](./docs/DATABASE.md) - Database structure and relationships

## 📊 Database Schema

The application uses Prisma with PostgreSQL and includes models for:

- **Users**: Authentication and role management
- **Vendors**: Business information and verification
- **Products**: Product catalog with variants
- **Categories**: Hierarchical product organization
- **Orders**: Order management and tracking
- **Reviews**: Customer feedback system
- **Payments**: Stripe integration
- **Payouts**: Vendor earnings management

## 🔐 Authentication

- **NextAuth.js**: JWT-based authentication
- **Providers**: Credentials and Google OAuth
- **Role-based Access**: Admin, Vendor, Customer permissions
- **Protected Routes**: Middleware-based route protection

## 💳 Payment Integration

- **Stripe Connect**: Multi-party payment processing
- **Split Payments**: Automatic vendor and platform fee distribution
- **Webhooks**: Real-time payment event handling
- **Payouts**: Automated vendor transfers

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Set environment variables
3. Deploy automatically on push

### Docker
```bash
docker build -t marketplace .
docker run -p 3000:3000 marketplace
```

### Manual Deployment
```bash
npm run build
npm start
```

## 📱 API Routes

- `/api/auth/*` - Authentication endpoints
- `/api/vendors/*` - Vendor management
- `/api/products/*` - Product operations
- `/api/orders/*` - Order processing
- `/api/admin/*` - Admin actions
- `/webhooks/stripe` - Payment webhooks
- `/webhooks/cloudinary` - Image webhooks

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Run E2E tests
npm run test:e2e
```

## 📈 Performance

- **Image Optimization**: Next.js Image component with Cloudinary
- **Code Splitting**: Automatic route-based code splitting
- **Caching**: React Query for server state caching
- **SEO**: Meta tags and structured data

## 🔒 Security

- **Input Validation**: Zod schema validation
- **SQL Injection**: Prisma ORM protection
- **XSS Protection**: React built-in protection
- **CSRF Protection**: NextAuth.js built-in protection
- **Rate Limiting**: API route protection

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: [docs.marketplace.com](https://docs.marketplace.com)
- **Issues**: [GitHub Issues](https://github.com/your-repo/issues)
- **Discord**: [Join our community](https://discord.gg/marketplace)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting and deployment
- Stripe for payment processing
- All contributors and supporters

---

Built with ❤️ using Next.js 15
