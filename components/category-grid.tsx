import Link from 'next/link'
import Image from 'next/image'

export function CategoryGrid() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center font-serif text-3xl font-bold tracking-tight sm:text-4xl">Shop by Category</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Link href="/shop/women" className="group relative aspect-[3/4] overflow-hidden md:aspect-[4/5]">
            <Image
              src="/fashion-woman-portrait.jpg"
              alt="Women's Fashion"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-white px-6 py-3 text-lg font-medium uppercase tracking-widest text-black shadow-sm">
                Women
              </span>
            </div>
          </Link>
          <Link href="/shop/men" className="group relative aspect-[3/4] overflow-hidden md:aspect-[4/5]">
            <Image
              src="/fashion-man-portrait.jpg"
              alt="Men's Fashion"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-white px-6 py-3 text-lg font-medium uppercase tracking-widest text-black shadow-sm">
                Men
              </span>
            </div>
          </Link>
          <Link href="/shop/accessories" className="group relative aspect-[3/4] overflow-hidden md:aspect-[4/5]">
            <Image
              src="/fashion-accessories-luxury.jpg"
              alt="Accessories"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-white px-6 py-3 text-lg font-medium uppercase tracking-widest text-black shadow-sm">
                Accessories
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
