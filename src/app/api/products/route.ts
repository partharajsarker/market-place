import { NextResponse } from 'next/server'

// Mock data - in real app this would come from database
const products = [
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
    slug: 'premium-wireless-headphones',
    category: 'Electronics',
    description: 'High-quality wireless headphones with noise cancellation'
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
    slug: 'smart-fitness-watch',
    category: 'Electronics',
    description: 'Advanced fitness tracking with heart rate monitoring'
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
    slug: 'organic-cotton-tshirt',
    category: 'Fashion',
    description: 'Comfortable and sustainable cotton t-shirt'
  }
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get('category')
  const search = searchParams.get('search')
  const page = parseInt(searchParams.get('page') || '1')
  const limit = parseInt(searchParams.get('limit') || '10')

  let filteredProducts = [...products]

  // Filter by category
  if (category) {
    filteredProducts = filteredProducts.filter(p => p.category === category)
  }

  // Filter by search
  if (search) {
    filteredProducts = filteredProducts.filter(p => 
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase())
    )
  }

  // Pagination
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex)

  return NextResponse.json({
    success: true,
    data: paginatedProducts,
    pagination: {
      page,
      limit,
      total: filteredProducts.length,
      totalPages: Math.ceil(filteredProducts.length / limit)
    }
  })
}
