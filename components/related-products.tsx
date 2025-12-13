import { products } from '@/lib/data'
import { ProductCard } from '@/components/product-card'

interface RelatedProductsProps {
  currentProductId: string
  category: string
}

export function RelatedProducts({ currentProductId, category }: RelatedProductsProps) {
  const relatedProducts = products
    .filter((p) => p.category === category && p.id !== currentProductId)
    .slice(0, 4)

  if (relatedProducts.length === 0) return null

  return (
    <section className="mt-24 border-t border-border pt-12">
      <h2 className="mb-8 font-serif text-2xl font-bold tracking-tight">You May Also Like</h2>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
