'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Product } from '@/lib/data'
import { Minus, Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AddToCartProps {
  product: Product
}

export function AddToCart({ product }: AddToCartProps) {
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState<string | null>(
    product.sizes ? product.sizes[0] : null
  )
  const [selectedColor, setSelectedColor] = useState<string | null>(
    product.colors ? product.colors[0] : null
  )

  const handleQuantityChange = (delta: number) => {
    const newQuantity = quantity + delta
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity)
    }
  }

  const handleAddToCart = () => {
    // In a real app, this would add to a cart context or store
    console.log('Added to cart:', {
      product,
      quantity,
      size: selectedSize,
      color: selectedColor
    })
    
    // Show feedback (could be a toast)
    alert(`Added ${quantity} ${product.name} to cart`)
  }

  return (
    <div className="space-y-6">
      {/* Colors */}
      {product.colors && (
        <div>
          <h3 className="mb-3 text-sm font-medium">Color</h3>
          <div className="flex flex-wrap gap-3">
            {product.colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={cn(
                  "relative flex items-center justify-center rounded-full border px-4 py-2 text-sm transition-all",
                  selectedColor === color
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-input hover:border-primary"
                )}
              >
                {color}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Sizes */}
      {product.sizes && (
        <div>
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm font-medium">Size</h3>
            <button className="text-sm text-muted-foreground underline hover:text-foreground">
              Size Guide
            </button>
          </div>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={cn(
                  "flex items-center justify-center border py-2 text-sm transition-all",
                  selectedSize === size
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-input hover:border-primary"
                )}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity & Add Button */}
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="flex items-center border border-input">
          <button
            onClick={() => handleQuantityChange(-1)}
            className="flex h-12 w-12 items-center justify-center hover:bg-secondary"
            disabled={quantity <= 1}
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="flex h-12 w-12 items-center justify-center text-center font-medium">
            {quantity}
          </span>
          <button
            onClick={() => handleQuantityChange(1)}
            className="flex h-12 w-12 items-center justify-center hover:bg-secondary"
            disabled={quantity >= 10}
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
        <Button 
          size="lg" 
          className="h-12 flex-1 text-base"
          onClick={handleAddToCart}
        >
          Add to Cart - ${(product.price * quantity).toFixed(2)}
        </Button>
      </div>
    </div>
  )
}
