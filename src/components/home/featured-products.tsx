'use client'

import Link from 'next/link'
import { ProductCard } from '@/components/products/product-card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

// Mock data - in real app this would come from API
const featuredProducts = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 199.99,
    salePrice: 149.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    rating: 4.8,
    reviewCount: 124,
    vendor: 'AudioTech Pro',
    isInStock: true,
    slug: 'premium-wireless-headphones'
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    price: 299.99,
    salePrice: null,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
    rating: 4.6,
    reviewCount: 89,
    vendor: 'FitTech Solutions',
    isInStock: true,
    slug: 'smart-fitness-watch'
  },
  {
    id: '3',
    name: 'Organic Cotton T-Shirt',
    price: 29.99,
    salePrice: 19.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    rating: 4.7,
    reviewCount: 56,
    vendor: 'EcoFashion',
    isInStock: true,
    slug: 'organic-cotton-tshirt'
  },
  {
    id: '4',
    name: 'Professional Camera Lens',
    price: 899.99,
    salePrice: 799.99,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop',
    rating: 4.9,
    reviewCount: 203,
    vendor: 'PhotoPro Gear',
    isInStock: true,
    slug: 'professional-camera-lens'
  }
]

export function FeaturedProducts() {
  return (
    <section className="py-16">
      <div className="container-responsive">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
            <p className="text-muted-foreground">
              Discover our handpicked selection of premium products
            </p>
          </div>
          <Link href="/products">
            <Button variant="outline">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div className="product-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
