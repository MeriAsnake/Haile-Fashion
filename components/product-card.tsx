import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/lib/data'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`} className="group block">
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
        <Image
          src={product.images[0] || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.newArrival && (
          <div className="absolute left-2 top-2 bg-white px-2 py-1 text-xs font-medium uppercase tracking-wider text-black">
            New Arrival
          </div>
        )}
      </div>
      <div className="mt-4 space-y-1">
        <h3 className="text-sm font-medium text-foreground">{product.name}</h3>
        <p className="text-sm text-muted-foreground">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  )
}
