'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const brands = [
  { name: 'Brand 1', logo: '/logos/logo1.png' },
  { name: 'Brand 2', logo: '/logos/logo2.png' },
  { name: 'Brand 3', logo: '/logos/logo3.png' },
  { name: 'Brand 4', logo: '/logos/logo1.png' },
  { name: 'Brand 5', logo: '/logos/logo2.png' },
  { name: 'Brand 6', logo: '/logos/logo3.png' },
]

export default function Brands() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="bg-white py-4"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative">
          <div className="overflow-hidden w-full">
            <div className="flex logos-slide">
              {[...brands, ...brands].map((brand, index) => (
                <div
                  key={index}
                  className="min-w-[160px] flex items-center justify-center mx-8"
                >
                  <div className="relative w-32 h-12">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      fill
                      className="object-contain filter grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-white to-transparent" />
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-white to-transparent" />
        </div>
      </div>
    </motion.div>
  )
} 