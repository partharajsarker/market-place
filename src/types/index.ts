import { UserRole, OrderStatus, PaymentStatus, PayoutStatus, CommissionType } from '@prisma/client'
import 'next-auth'

// NextAuth session augmentation
declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      name?: string | null
      email?: string | null
      image?: string | null
      role: UserRole
    }
  }

  interface User {
    id: string
    name?: string | null
    email?: string | null
    image?: string | null
    role: UserRole
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string
    role: UserRole
  }
}

// User types
export interface User {
  id: string
  email: string
  name: string | null
  image: string | null
  role: UserRole
  phone: string | null
  dateOfBirth: Date | null
  createdAt: Date
  updatedAt: Date
}

export interface Vendor {
  id: string
  userId: string
  businessName: string
  businessType: string
  description: string | null
  logo: string | null
  banner: string | null
  isVerified: boolean
  isApproved: boolean
  rating: number
  totalSales: number
  totalOrders: number
  createdAt: Date
  updatedAt: Date
}

// Product types
export interface Product {
  id: string
  vendorId: string
  categoryId: string
  name: string
  slug: string
  description: string
  shortDescription: string | null
  basePrice: number
  salePrice: number | null
  costPrice: number | null
  sku: string | null
  stock: number
  lowStockThreshold: number
  isInStock: boolean
  images: string[]
  thumbnail: string | null
  isActive: boolean
  isFeatured: boolean
  isApproved: boolean
  rating: number
  reviewCount: number
  viewCount: number
  soldCount: number
  createdAt: Date
  updatedAt: Date
}

export interface ProductVariant {
  id: string
  productId: string
  name: string
  sku: string | null
  price: number | null
  costPrice: number | null
  stock: number
  isInStock: boolean
  attributes: Record<string, any>
  createdAt: Date
  updatedAt: Date
}

export interface Category {
  id: string
  name: string
  slug: string
  description: string | null
  image: string | null
  parentId: string | null
  isActive: boolean
  sortOrder: number
  createdAt: Date
  updatedAt: Date
}

// Order types
export interface Order {
  id: string
  orderNumber: string
  customerId: string
  vendorId: string
  status: OrderStatus
  subtotal: number
  tax: number
  shipping: number
  discount: number
  total: number
  commissionAmount: number
  vendorAmount: number
  paymentStatus: PaymentStatus
  paymentMethod: string | null
  stripePaymentIntentId: string | null
  shippingAddressId: string
  billingAddressId: string
  trackingNumber: string | null
  estimatedDelivery: Date | null
  deliveredAt: Date | null
  customerNotes: string | null
  vendorNotes: string | null
  createdAt: Date
  updatedAt: Date
}

export interface OrderItem {
  id: string
  orderId: string
  productId: string
  variantId: string | null
  quantity: number
  unitPrice: number
  totalPrice: number
  attributes: Record<string, any> | null
  createdAt: Date
  updatedAt: Date
}

// Review types
export interface Review {
  id: string
  productId: string
  customerId: string
  orderId: string | null
  rating: number
  title: string | null
  comment: string | null
  images: string[]
  isApproved: boolean
  isHelpful: number
  createdAt: Date
  updatedAt: Date
}

// Cart types
export interface CartItem {
  id: string
  customerId: string
  productId: string
  variantId: string | null
  quantity: number
  attributes: Record<string, any> | null
  createdAt: Date
  updatedAt: Date
}

// Cart store item (simplified version without timestamps)
export interface CartStoreItem {
  id: string
  customerId: string
  productId: string
  variantId: string | null
  quantity: number
  attributes: Record<string, any> | null
}

// Address types
export interface Address {
  id: string
  customerId: string
  type: 'SHIPPING' | 'BILLING' | 'BOTH'
  firstName: string
  lastName: string
  company: string | null
  address1: string
  address2: string | null
  city: string
  state: string
  country: string
  zipCode: string
  phone: string | null
  isDefaultShipping: boolean
  isDefaultBilling: boolean
  createdAt: Date
  updatedAt: Date
}

// Payout types
export interface Payout {
  id: string
  vendorId: string
  orderId: string | null
  amount: number
  fee: number
  netAmount: number
  status: PayoutStatus
  method: 'BANK_TRANSFER' | 'STRIPE_CONNECT' | 'PAYPAL'
  accountDetails: Record<string, any> | null
  stripeTransferId: string | null
  requestedAt: Date
  processedAt: Date | null
  notes: string | null
}

// Commission types
export interface CommissionRule {
  id: string
  vendorId: string | null
  name: string
  type: CommissionType
  value: number
  minAmount: number | null
  maxAmount: number | null
  categories: string[]
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

// Search and Filter types
export interface ProductFilters {
  category?: string
  vendor?: string
  minPrice?: number
  maxPrice?: number
  minRating?: number
  inStock?: boolean
  isFeatured?: boolean
  sortBy?: 'price' | 'rating' | 'createdAt' | 'soldCount'
  sortOrder?: 'asc' | 'desc'
}

// Form types
export interface SignUpForm {
  name: string
  email: string
  password: string
  confirmPassword: string
  role: UserRole
}

export interface SignInForm {
  email: string
  password: string
}

export interface VendorOnboardingForm {
  businessName: string
  businessType: string
  description: string
  phone: string
  address: string
  city: string
  state: string
  country: string
  zipCode: string
  bankName: string
  accountNumber: string
  routingNumber: string
}

export interface ProductForm {
  name: string
  description: string
  shortDescription: string
  categoryId: string
  basePrice: number
  salePrice?: number
  costPrice?: number
  sku?: string
  stock: number
  lowStockThreshold: number
  images: string[]
  thumbnail?: string
  isActive: boolean
  isFeatured: boolean
}

// Stripe types
export interface StripePaymentIntent {
  id: string
  amount: number
  currency: string
  status: string
  client_secret: string
}

// Pusher types
export interface PusherNotification {
  type: 'order_update' | 'payment_received' | 'payout_processed' | 'review_received'
  title: string
  message: string
  data?: Record<string, any>
}
