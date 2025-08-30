'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, ShoppingBag } from 'lucide-react'
import Link from 'next/link'

interface CategoryCardProps {
  category: {
    id: string
    name: string
    description: string
    image: string
    productCount: number
    slug: string
  }
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-white">
              <ShoppingBag className="h-5 w-5" />
              <span className="text-sm font-medium">{category.productCount} products</span>
            </div>
          </div>
        </div>
      </div>
      
      <CardHeader className="pb-3">
        <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
          {category.name}
        </CardTitle>
        <CardDescription className="text-muted-foreground line-clamp-2">
          {category.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-0">
        <Link href={`/categories/${category.slug}`}>
          <Button 
            variant="outline" 
            className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
          >
            Explore Category
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
