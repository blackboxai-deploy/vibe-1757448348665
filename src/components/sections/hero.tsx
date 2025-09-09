'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, ArrowRight, Star, Users, DollarSign } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-purple-950 dark:via-pink-950 dark:to-orange-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container relative px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <Badge className="mb-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 px-4 py-2">
            <TrendingUp className="mr-2 h-4 w-4" />
            #1 Fashion Affiliate Platform
          </Badge>

          {/* Main Heading */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
              Turn Your Style
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">
              Into Earnings
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mb-8 text-lg text-gray-600 dark:text-gray-300 sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
            Join thousands of fashion enthusiasts earning money by sharing trendy styles. 
            Discover, promote, and profit from the latest fashion trends.
          </p>

          {/* CTA Buttons */}
          <div className="mb-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold rounded-full">
              <Link href="/auth/register" className="flex items-center">
                Start Earning Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg font-semibold rounded-full border-2 hover:bg-gray-50 dark:hover:bg-gray-800">
              <Link href="/products">
                Browse Products
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="flex flex-col items-center space-y-2 p-6 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-2">
                <Users className="h-6 w-6" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">50K+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Active Affiliates</div>
            </div>
            <div className="flex flex-col items-center space-y-2 p-6 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-2">
                <DollarSign className="h-6 w-6" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">$2M+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Paid Out</div>
            </div>
            <div className="flex flex-col items-center space-y-2 p-6 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-2">
                <Star className="h-6 w-6" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">4.9/5</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">User Rating</div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative mx-auto max-w-5xl">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://placehold.co/1200x700?text=Modern+fashion+affiliate+dashboard+with+colorful+product+grid+and+earnings+analytics"
                alt="Sunstart Fashion platform dashboard showing trending products, earnings analytics, and affiliate tools"
                className="h-auto w-full object-cover"
                loading="eager"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 animate-bounce">
              <div className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-3 text-white shadow-lg">
                <TrendingUp className="h-6 w-6" />
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 animate-pulse">
              <div className="rounded-full bg-gradient-to-r from-orange-500 to-pink-500 p-3 text-white shadow-lg">
                <DollarSign className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="h-20 w-full fill-white dark:fill-gray-900"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  )
}