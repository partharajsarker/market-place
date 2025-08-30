'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Star, MapPin, ShoppingBag, TrendingUp } from 'lucide-react'
import Link from 'next/link'

// Mock vendor data
const mockVendors = [
  {
    id: 1,
    name: 'TechGear Pro',
    description: 'Premium technology and electronics for the modern lifestyle',
    logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150&h=150&fit=crop',
    banner: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=200&fit=crop',
    rating: 4.8,
    reviewCount: 1247,
    productCount: 89,
    totalSales: 15420,
    location: 'San Francisco, CA',
    isVerified: true,
    isApproved: true,
    categories: ['Electronics', 'Technology', 'Gadgets'],
    slug: 'techgear-pro'
  },
  {
    id: 2,
    name: 'Fashion Forward',
    description: 'Trendsetting fashion and accessories for every occasion',
    logo: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=150&h=150&fit=crop',
    banner: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=400&h=200&fit=crop',
    rating: 4.6,
    reviewCount: 892,
    productCount: 156,
    totalSales: 23400,
    location: 'New York, NY',
    isVerified: true,
    isApproved: true,
    categories: ['Fashion', 'Accessories', 'Lifestyle'],
    slug: 'fashion-forward'
  },
  {
    id: 3,
    name: 'Home Essentials',
    description: 'Quality home and living products for modern homes',
    logo: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=150&h=150&fit=crop',
    banner: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=200&fit=crop',
    rating: 4.7,
    reviewCount: 634,
    productCount: 234,
    totalSales: 18750,
    location: 'Chicago, IL',
    isVerified: true,
    isApproved: true,
    categories: ['Home & Garden', 'Kitchen', 'Decor'],
    slug: 'home-essentials'
  },
  {
    id: 4,
    name: 'Artisan Crafts',
    description: 'Handmade artisan products with unique craftsmanship',
    logo: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=150&fit=crop',
    banner: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop',
    rating: 4.9,
    reviewCount: 445,
    productCount: 67,
    totalSales: 8900,
    location: 'Portland, OR',
    isVerified: true,
    isApproved: true,
    categories: ['Handmade', 'Art', 'Crafts'],
    slug: 'artisan-crafts'
  },
  {
    id: 5,
    name: 'Sports & Fitness',
    description: 'Premium sports equipment and fitness gear for athletes',
    logo: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=150&h=150&fit=crop',
    banner: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop',
    rating: 4.5,
    reviewCount: 789,
    productCount: 123,
    totalSales: 15600,
    location: 'Miami, FL',
    isVerified: true,
    isApproved: true,
    categories: ['Sports', 'Fitness', 'Outdoor'],
    slug: 'sports-fitness'
  }
]

export default function VendorsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredVendors = mockVendors.filter(vendor => {
    const matchesSearch = vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         vendor.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || vendor.categories.includes(selectedCategory)
    return matchesSearch && matchesCategory
  })

  const allCategories = ['all', ...Array.from(new Set(mockVendors.flatMap(v => v.categories)))]

  return (
    <div className="py-8">
      <div className="container-responsive">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Our Vendors</h1>
          <p className="text-muted-foreground">
            Discover amazing vendors and their unique products
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search vendors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-input rounded-md bg-background"
            >
              {allCategories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Vendors Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredVendors.map((vendor) => (
            <Card key={vendor.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={vendor.banner}
                  alt={vendor.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute top-4 right-4">
                  {vendor.isVerified && (
                    <Badge className="bg-green-100 text-green-800">
                      Verified
                    </Badge>
                  )}
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <img
                    src={vendor.logo}
                    alt={vendor.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <CardTitle className="text-lg">{vendor.name}</CardTitle>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{vendor.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <CardDescription className="mb-4">
                  {vendor.description}
                </CardDescription>
                
                <div className="space-y-3">
                  {/* Rating */}
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{vendor.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({vendor.reviewCount} reviews)
                    </span>
                  </div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <ShoppingBag className="w-4 h-4 text-muted-foreground" />
                      <span>{vendor.productCount} products</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-muted-foreground" />
                      <span>{vendor.totalSales.toLocaleString()} sales</span>
                    </div>
                  </div>
                  
                  {/* Categories */}
                  <div className="flex flex-wrap gap-2">
                    {vendor.categories.slice(0, 3).map((category) => (
                      <Badge key={category} variant="secondary" className="text-xs">
                        {category}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* View Store Button */}
                  <Link href={`/vendor/${vendor.slug}`} className="block">
                    <Button className="w-full" variant="outline">
                      View Store
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredVendors.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No vendors found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search or filter criteria
            </p>
            <Button 
              onClick={() => {
                setSearchQuery('')
                setSelectedCategory('all')
              }}
              variant="outline"
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Become a Vendor CTA */}
        <div className="mt-12 p-8 bg-muted rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Want to become a vendor?</h2>
          <p className="text-muted-foreground mb-6">
            Join our marketplace and start selling your products to customers worldwide.
          </p>
          <Link href="/vendor/onboarding">
            <Button size="lg">
              Start Selling Today
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
