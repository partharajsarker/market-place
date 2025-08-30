'use client'

import Link from 'next/link'
import { ProductCard } from '@/components/products/product-card'
import { Button } from '@/components/ui/button'
import { TrendingUp, ArrowRight } from 'lucide-react'

// Mock data - in real app this would come from API
const trendingProducts = [
  {
    id: '5',
    name: 'Smart Home Hub',
    price: 199.99,
    salePrice: null,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    rating: 4.7,
    reviewCount: 89,
    vendor: 'SmartTech Solutions',
    isInStock: true,
    slug: 'smart-home-hub'
  },
  {
    id: '6',
    name: 'Wireless Earbuds',
    price: 89.99,
    salePrice: 69.99,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop',
    rating: 4.5,
    reviewCount: 156,
    vendor: 'AudioTech Pro',
    isInStock: true,
    slug: 'wireless-earbuds'
  },
  {
    id: '7',
    name: 'Portable Charger',
    price: 49.99,
    salePrice: null,
    image: 'https://images.unsplash.com/photo-1609592806599-3c33d5a7d29c?w=400&h=400&fit=crop',
    rating: 4.6,
    reviewCount: 203,
    vendor: 'PowerTech',
    isInStock: true,
    slug: 'portable-charger'
  },
  {
    id: '8',
    name: 'Bluetooth Speaker',
    price: 79.99,
    salePrice: 59.99,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop',
    rating: 4.4,
    reviewCount: 98,
    vendor: 'SoundMaster',
    isInStock: true,
    slug: 'bluetooth-speaker'
  }
]

export function TrendingProducts() {
  return (
    <section className="py-16">
      <div className="container-responsive">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <TrendingUp className="h-8 w-8 text-primary" />
            <div>
              <h2 className="text-3xl font-bold mb-2">Trending Now</h2>
              <p className="text-muted-foreground">
                Products that are flying off the shelves
              </p>
            </div>
          </div>
          <Link href="/products?sort=trending">
            <Button variant="outline">
              View Trending
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div className="product-grid">
          {trendingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
