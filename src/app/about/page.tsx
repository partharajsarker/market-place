export default function AboutPage() {
  return (
    <div className="py-8">
      <div className="container-responsive">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">About Our Marketplace</h1>
          <p className="text-muted-foreground">
            Connecting customers with amazing vendors from around the world
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Mission Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              We're building the world's most trusted multi-vendor marketplace, 
              where quality meets convenience. Our platform empowers independent 
              vendors to reach global customers while providing shoppers with 
              an unparalleled selection of products and services.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From handmade crafts to cutting-edge technology, we believe every 
              vendor has a unique story to tell and every customer deserves 
              exceptional service.
            </p>
          </div>

          {/* Vision Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              To become the leading platform that democratizes e-commerce, 
              making it possible for anyone with a great product to build 
              a successful online business.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We envision a future where geographical boundaries don't limit 
              business opportunities, and where customers can discover unique 
              products from anywhere in the world.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Our Values</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center p-6 border rounded-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Trust & Quality</h3>
              <p className="text-sm text-muted-foreground">
                We maintain the highest standards for vendor verification and product quality.
              </p>
            </div>

            <div className="text-center p-6 border rounded-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Community First</h3>
              <p className="text-sm text-muted-foreground">
                Building a supportive ecosystem where vendors and customers thrive together.
              </p>
            </div>

            <div className="text-center p-6 border rounded-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Innovation</h3>
              <p className="text-sm text-muted-foreground">
                Continuously improving our platform with cutting-edge technology and features.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-12 p-8 bg-muted rounded-lg">
          <h2 className="text-2xl font-semibold mb-6 text-center">Platform Statistics</h2>
          <div className="grid gap-6 md:grid-cols-4 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">15K+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">800+</div>
              <div className="text-sm text-muted-foreground">Verified Vendors</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">25K+</div>
              <div className="text-sm text-muted-foreground">Products Listed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">99%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground mb-6">
            Have questions about our marketplace? We'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:contact@marketplace.com" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </a>
            <a 
              href="/vendor/onboarding" 
              className="inline-flex items-center justify-center px-6 py-3 border border-primary text-base font-medium rounded-md text-primary bg-transparent hover:bg-primary hover:text-white transition-colors"
            >
              Become a Vendor
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
