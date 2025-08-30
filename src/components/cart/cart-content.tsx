'use client'

import { useCartStore } from '@/store/cart'
import { Button } from '@/components/ui/button'
import { ShoppingCart, Trash2, Plus, Minus } from 'lucide-react'
import Link from 'next/link'

export function CartContent() {
  const { items, removeItem, updateQuantity, clearCart, getCartTotal } = useCartStore()

  if (items.length === 0) {
    return (
      <div className="text-center py-16">
        <ShoppingCart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
        <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
        <p className="text-muted-foreground mb-6">
          Looks like you haven't added any products to your cart yet.
        </p>
        <Link href="/products">
          <Button size="lg">
            Start Shopping
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Cart Items */}
      <div className="lg:col-span-2">
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg">
              {/* Product Image Placeholder */}
              <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground text-xs">Image</span>
              </div>
              
              {/* Product Info */}
              <div className="flex-1">
                <h3 className="font-medium">Product Name</h3>
                <p className="text-sm text-muted-foreground">Vendor Name</p>
                <p className="text-sm font-medium">$0.00</p>
              </div>
              
              {/* Quantity Controls */}
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center">{item.quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              
              {/* Remove Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeItem(item.id)}
                className="text-destructive hover:text-destructive"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
        
        {/* Cart Actions */}
        <div className="flex justify-between items-center mt-6 pt-6 border-t">
          <Button
            variant="outline"
            onClick={clearCart}
            className="text-destructive hover:text-destructive"
          >
            Clear Cart
          </Button>
          
          <Link href="/products">
            <Button variant="outline">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Order Summary */}
      <div className="lg:col-span-1">
        <div className="bg-muted/30 rounded-lg p-6 sticky top-24">
          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
          
          <div className="space-y-3 mb-6">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${getCartTotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>$0.00</span>
            </div>
            <div className="border-t pt-3">
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>${getCartTotal().toFixed(2)}</span>
              </div>
            </div>
          </div>
          
          <Link href="/checkout" className="w-full">
            <Button className="w-full" size="lg">
              Proceed to Checkout
            </Button>
          </Link>
          
          <p className="text-xs text-muted-foreground text-center mt-3">
            Secure checkout powered by Stripe
          </p>
        </div>
      </div>
    </div>
  )
}
