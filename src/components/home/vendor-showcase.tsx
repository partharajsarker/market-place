'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Star, Users, ShoppingBag, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Mock data - in real app this would come from API
const topVendors = [
  {
    id: '1',
    name: 'AudioTech Pro',
    slug: 'audiotech-pro',
    logo: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop&crop=face',
    banner: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=200&fit=crop',
    rating: 4.8,
    reviewCount: 1240,
    productCount: 156,
    totalSales: 12500,
    description: 'Premium audio equipment and accessories'
  },
  {
    id: '2',
    name: 'FitTech Solutions',
    slug: 'fittech-solutions',
    logo: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop&crop=face',
    banner: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop',
    rating: 4.7,
    reviewCount: 890,
    productCount: 89,
    totalSales: 8900,
    description: 'Innovative fitness technology and wearables'
  },
  {
    id: '3',
    name: 'EcoFashion',
    slug: 'ecofashion',
    logo: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100&h=100&fit=crop&crop=face',
    banner: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=200&fit=crop',
    rating: 4.6,
    reviewCount: 567,
    productCount: 234,
    totalSales: 6700,
    description: 'Sustainable and ethical fashion choices'
  }
]

export function VendorShowcase() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container-responsive">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Top Vendors</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover amazing products from our most trusted and successful vendors
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {topVendors.map((vendor) => (
            <Link key={vendor.id} href={`/vendor/${vendor.slug}`}>
              <div className="group bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                {/* Vendor Banner */}
                <div className="relative h-32 overflow-hidden">
                  <Image
                    src={vendor.banner}
                    alt={vendor.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                </div>
                
                {/* Vendor Info */}
                <div className="p-6">
                  {/* Logo and Name */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-background">
                      <Image
                        src={vendor.logo}
                        alt={vendor.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        {vendor.name}
                      </h3>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${
                              i < Math.floor(vendor.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                        <span className="text-xs text-muted-foreground ml-1">
                          ({vendor.reviewCount})
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4">
                    {vendor.description}
                  </p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <ShoppingBag className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">
                        {vendor.productCount} products
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">
                        {vendor.totalSales.toLocaleString()} sales
                      </span>
                    </div>
                  </div>
                  
                  {/* View Store Button */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      View Store
                    </span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/vendors">
            <Button variant="outline" size="lg">
              Browse All Vendors
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
