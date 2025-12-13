import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <Image
        src="/fashion-model-minimalist.jpg"
        alt="Fashion Model"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div className="container px-4">
          <h1 className="mb-6 font-serif text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Haile Fashion
          </h1>
          <p className="mx-auto mb-8 max-w-lg text-lg text-white/90 sm:text-xl">
            Discover our new collection of timeless pieces crafted for the modern individual.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-white/90" asChild>
              <Link href="/shop/women">Shfon Dress</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black" asChild>
              <Link href="/shop/men">Throusers</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
