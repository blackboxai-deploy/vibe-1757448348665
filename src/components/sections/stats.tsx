'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, DollarSign, Users, ShoppingBag, Star, Globe, Award, Zap } from 'lucide-react'

const stats = [
  {
    icon: Users,
    value: '50,000+',
    label: 'Active Affiliates',
    description: 'Growing community worldwide',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: DollarSign,
    value: '$2.5M+',
    label: 'Total Payouts',
    description: 'Paid to our partners',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: ShoppingBag,
    value: '10,000+',
    label: 'Fashion Products',
    description: 'Trending items available',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: TrendingUp,
    value: '85%',
    label: 'Avg Conversion',
    description: 'Industry-leading rates',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Star,
    value: '4.9/5',
    label: 'Platform Rating',
    description: 'From satisfied users',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Globe,
    value: '25+',
    label: 'Countries',
    description: 'Global presence',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Award,
    value: '2024',
    label: 'Best Platform',
    description: 'Fashion Affiliate Awards',
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: Zap,
    value: '<2s',
    label: 'Link Generation',
    description: 'Lightning fast creation',
    color: 'from-cyan-500 to-blue-500'
  }
]

export function Stats() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container px-6 relative">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
            Platform Statistics
          </Badge>
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Numbers That Speak Success
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
            Join a thriving ecosystem of fashion affiliates who are already earning substantial income 
            through our innovative platform.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-gray-50 dark:bg-gray-800 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.value}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-1">
                    {stat.label}
                  </h3>
                  
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Achievement Highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              99.9%
            </div>
            <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Uptime Guarantee
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              Reliable platform you can count on
            </div>
          </div>

          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
            <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
              24h
            </div>
            <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Payout Processing
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              Fastest payments in the industry
            </div>
          </div>

          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              25%
            </div>
            <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Max Commission
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              Industry-leading earning potential
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-60">
          <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
            <Shield className="h-5 w-5" />
            <span className="text-sm font-medium">SSL Secured</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
            <Award className="h-5 w-5" />
            <span className="text-sm font-medium">Award Winning</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
            <Users className="h-5 w-5" />
            <span className="text-sm font-medium">Trusted by 50K+</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
            <Globe className="h-5 w-5" />
            <span className="text-sm font-medium">Global Platform</span>
          </div>
        </div>
      </div>
    </section>
  )
}

// Import Shield at the top with other icons
import { Shield } from 'lucide-react'