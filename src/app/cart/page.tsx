import { CartContent } from '@/components/cart/cart-content'

export default function CartPage() {
  return (
    <div className="py-8">
      <div className="container-responsive">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Shopping Cart</h1>
          <p className="text-muted-foreground">
            Review your items and proceed to checkout
          </p>
        </div>
        
        <CartContent />
      </div>
    </div>
  )
}
