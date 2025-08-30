'use client'

import { useState, useEffect } from 'react'
import { ProductCard } from './product-card'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'

interface Product {
  id: string
  name: string
  price: number
  salePrice?: number | null
  image: string
  rating: number
  reviewCount: number
  vendor: string
  isInStock: boolean
  slug: string
  category: string
  description: string
}

export function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/products')
      const data = await response.json()
      
      if (data.success) {
        setProducts(data.data)
      } else {
        setError('Failed to fetch products')
      }
    } catch (err) {
      setError('Error loading products')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground mb-4">{error}</p>
        <Button onClick={fetchProducts}>Try Again</Button>
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground mb-4">No products found</p>
        <Button onClick={fetchProducts}>Refresh</Button>
      </div>
    )
  }

  return (
    <div>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {/* Load More Button */}
      <div className="text-center mt-8">
        <Button variant="outline" size="lg">
          Load More Products
        </Button>
      </div>
    </div>
  )
}
