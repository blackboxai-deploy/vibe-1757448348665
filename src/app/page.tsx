'use client'

import { Hero } from '@/components/sections/hero'
import { TrendingProducts } from '@/components/sections/trending-products'
import { Features } from '@/components/sections/features'
import { Stats } from '@/components/sections/stats'
import { Testimonials } from '@/components/sections/testimonials'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <TrendingProducts />
      <Features />
      <Stats />
      <Testimonials />
    </div>
  )
}