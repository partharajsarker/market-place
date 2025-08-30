import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ProductCard } from '@/components/products/product-card'
import { CategoryCard } from '@/components/categories/category-card'
import { HeroSection } from '@/components/home/hero-section'
import { FeaturedProducts } from '@/components/home/featured-products'
import { CategoryShowcase } from '@/components/home/category-showcase'
import { TrendingProducts } from '@/components/home/trending-products'
import { VendorShowcase } from '@/components/home/vendor-showcase'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Featured Categories */}
      <CategoryShowcase />
      
      {/* Featured Products */}
      <FeaturedProducts />
      
      {/* Trending Products */}
      <TrendingProducts />
      
      {/* Top Vendors */}
      <VendorShowcase />
      
      {/* CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="container-responsive text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Selling?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of vendors who are already selling their products on our marketplace. 
            Start your journey today and reach millions of customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/vendor/onboarding">
              <Button size="lg" className="w-full sm:w-auto">
                Become a Vendor
              </Button>
            </Link>
            <Link href="/vendor/benefits">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
