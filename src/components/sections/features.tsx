'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  TrendingUp, 
  Link2, 
  BarChart3, 
  Users, 
  Shield, 
  Smartphone,
  Zap,
  Heart,
  Gift
} from 'lucide-react'

const features = [
  {
    icon: Link2,
    title: 'Instant Link Generation',
    description: 'Generate personalized affiliate links in seconds with built-in tracking and analytics.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Track your earnings, clicks, and conversions with live dashboard updates.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: TrendingUp,
    title: 'Trending Products',
    description: 'Access the hottest fashion items with high conversion rates and generous commissions.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Users,
    title: 'Community Hub',
    description: 'Share outfits, reviews, and connect with fellow fashion enthusiasts.',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Shield,
    title: 'Secure Payments',
    description: 'Fast, secure payouts with multiple withdrawal options and transparent tracking.',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Smartphone,
    title: 'Mobile Optimized',
    description: 'Perfect experience across all devices with responsive, touch-friendly interface.',
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance ensures quick loading times and smooth user experience.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Heart,
    title: 'Wishlist & Favorites',
    description: 'Save your favorite products and brands for quick access and promotion.',
    color: 'from-red-500 to-pink-500'
  },
  {
    icon: Gift,
    title: 'Bonus Programs',
    description: 'Earn extra through flash sales, promotional campaigns, and seasonal bonuses.',
    color: 'from-cyan-500 to-blue-500'
  }
]

export function Features() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
            Why Choose Sunstart
          </Badge>
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Powerful Features for Fashion Affiliates
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
            Everything you need to build a successful fashion affiliate business. 
            From instant link generation to community engagement tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Additional Feature Highlights */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 overflow-hidden relative">
            <CardContent className="p-8 relative z-10">
              <div className="flex items-center mb-4">
                <TrendingUp className="h-8 w-8 mr-3" />
                <h3 className="text-2xl font-bold">High-Converting Products</h3>
              </div>
              <p className="text-purple-100 text-lg mb-6">
                Access curated fashion items with proven conversion rates and attractive commission structures.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">15-25%</div>
                  <div className="text-purple-200 text-sm">Commission Range</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">85%</div>
                  <div className="text-purple-200 text-sm">Avg. Conversion</div>
                </div>
              </div>
            </CardContent>
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full"></div>
          </Card>

          <Card className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 overflow-hidden relative">
            <CardContent className="p-8 relative z-10">
              <div className="flex items-center mb-4">
                <BarChart3 className="h-8 w-8 mr-3" />
                <h3 className="text-2xl font-bold">Advanced Analytics</h3>
              </div>
              <p className="text-blue-100 text-lg mb-6">
                Deep insights into your performance with real-time tracking and comprehensive reporting tools.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">Real-time</div>
                  <div className="text-blue-200 text-sm">Data Updates</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-blue-200 text-sm">Monitoring</div>
                </div>
              </div>
            </CardContent>
            {/* Decorative Background */}
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-white/10 rounded-full"></div>
          </Card>
        </div>
      </div>
    </section>
  )
}