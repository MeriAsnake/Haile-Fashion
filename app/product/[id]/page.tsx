import { notFound } from 'next/navigation'
import Image from 'next/image'
import { products } from '@/lib/data'
import { Button } from '@/components/ui/button'
import { ProductGallery } from '@/components/product-gallery'
import { AddToCart } from '@/components/add-to-cart'
import { RelatedProducts } from '@/components/related-products'

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id
  const product = products.find((p) => p.id === id)

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Product Gallery */}
        <ProductGallery images={product.images} name={product.name} />

        {/* Product Info */}
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">{product.name}</h1>
            <p className="mt-4 text-2xl font-medium">${product.price.toFixed(2)}</p>
          </div>

          <div className="prose prose-stone text-muted-foreground">
            <p>{product.description}</p>
          </div>

          <AddToCart product={product} />

          <div className="border-t border-border pt-8">
            <div className="grid grid-cols-1 gap-4 text-sm text-muted-foreground sm:grid-cols-2">
              <div>
                <h4 className="font-medium text-foreground">Details</h4>
                <ul className="mt-2 list-inside list-disc space-y-1">
                  <li>Premium quality materials</li>
                  <li>Ethically sourced</li>
                  <li>Designed in Milan</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-foreground">Shipping & Returns</h4>
                <ul className="mt-2 list-inside list-disc space-y-1">
                  <li>Free shipping on orders over $200</li>
                  <li>30-day return policy</li>
                  <li>Secure packaging</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <RelatedProducts currentProductId={product.id} category={product.category} />
    </div>
  )
}
