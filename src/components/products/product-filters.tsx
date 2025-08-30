'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Filter, X } from 'lucide-react'

const categories = [
  { id: 'electronics', name: 'Electronics', count: 1250 },
  { id: 'fashion', name: 'Fashion', count: 890 },
  { id: 'home-garden', name: 'Home & Garden', count: 567 },
  { id: 'sports-outdoors', name: 'Sports & Outdoors', count: 423 },
  { id: 'books', name: 'Books', count: 234 },
  { id: 'toys', name: 'Toys & Games', count: 189 }
]

const priceRanges = [
  { id: '0-25', name: 'Under $25', min: 0, max: 25 },
  { id: '25-50', name: '$25 - $50', min: 25, max: 50 },
  { id: '50-100', name: '$50 - $100', min: 50, max: 100 },
  { id: '100-200', name: '$100 - $200', min: 100, max: 200 },
  { id: '200+', name: 'Over $200', min: 200, max: null }
]

const ratings = [
  { id: '4', name: '4★ & above', value: 4 },
  { id: '3', name: '3★ & above', value: 3 },
  { id: '2', name: '2★ & above', value: 2 }
]

export function ProductFilters() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([])
  const [selectedRatings, setSelectedRatings] = useState<string[]>([])
  const [inStockOnly, setInStockOnly] = useState(false)
  const [featuredOnly, setFeaturedOnly] = useState(false)
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    )
  }

  const handlePriceRangeChange = (rangeId: string) => {
    setSelectedPriceRanges(prev => 
      prev.includes(rangeId)
        ? prev.filter(id => id !== rangeId)
        : [...prev, rangeId]
    )
  }

  const handleRatingChange = (ratingId: string) => {
    setSelectedRatings(prev => 
      prev.includes(ratingId)
        ? prev.filter(id => id !== ratingId)
        : [...prev, ratingId]
    )
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedPriceRanges([])
    setSelectedRatings([])
    setInStockOnly(false)
    setFeaturedOnly(false)
    setMinPrice('')
    setMaxPrice('')
  }

  const hasActiveFilters = selectedCategories.length > 0 || 
    selectedPriceRanges.length > 0 || 
    selectedRatings.length > 0 || 
    inStockOnly || 
    featuredOnly || 
    minPrice || 
    maxPrice

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Filter className="h-5 w-5" />
          Filters
        </h3>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4 mr-1" />
            Clear
          </Button>
        )}
      </div>

      {/* Categories */}
      <div>
        <h4 className="font-medium mb-3">Categories</h4>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox
                id={category.id}
                checked={selectedCategories.includes(category.id)}
                onCheckedChange={() => handleCategoryChange(category.id)}
              />
              <Label htmlFor={category.id} className="text-sm cursor-pointer">
                {category.name}
                <span className="text-muted-foreground ml-1">
                  ({category.count})
                </span>
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Price Range */}
      <div>
        <h4 className="font-medium mb-3">Price Range</h4>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <div key={range.id} className="flex items-center space-x-2">
              <Checkbox
                id={range.id}
                checked={selectedPriceRanges.includes(range.id)}
                onCheckedChange={() => handlePriceRangeChange(range.id)}
              />
              <Label htmlFor={range.id} className="text-sm cursor-pointer">
                {range.name}
              </Label>
            </div>
          ))}
        </div>
        
        {/* Custom Price Range */}
        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2">
            <Input
              type="number"
              placeholder="Min"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="text-sm"
            />
            <span className="text-muted-foreground">-</span>
            <Input
              type="number"
              placeholder="Max"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="text-sm"
            />
          </div>
        </div>
      </div>

      <Separator />

      {/* Rating */}
      <div>
        <h4 className="font-medium mb-3">Rating</h4>
        <div className="space-y-2">
          {ratings.map((rating) => (
            <div key={rating.id} className="flex items-center space-x-2">
              <Checkbox
                id={rating.id}
                checked={selectedRatings.includes(rating.id)}
                onCheckedChange={() => handleRatingChange(rating.id)}
              />
              <Label htmlFor={rating.id} className="text-sm cursor-pointer">
                {rating.name}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Other Filters */}
      <div>
        <h4 className="font-medium mb-3">Other</h4>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="inStock"
              checked={inStockOnly}
              onCheckedChange={(checked) => setInStockOnly(checked as boolean)}
            />
            <Label htmlFor="inStock" className="text-sm cursor-pointer">
              In Stock Only
            </Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox
              id="featured"
              checked={featuredOnly}
              onCheckedChange={(checked) => setFeaturedOnly(checked as boolean)}
            />
            <Label htmlFor="featured" className="text-sm cursor-pointer">
              Featured Products
            </Label>
          </div>
        </div>
      </div>

      {/* Apply Filters Button */}
      <Button className="w-full" size="lg">
        Apply Filters
      </Button>
    </div>
  )
}
