'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div className="relative pt-14">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Markanızı Sosyal Medyada Büyütün
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Profesyonel sosyal medya yönetimi ile markanızı bir üst seviyeye taşıyın. 
            İçerik üretimi, strateji geliştirme ve reklam yönetimi hizmetlerimizle 
            hedef kitlenize ulaşın.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <a
              href="#contact"
              className="rounded-full bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
               İletişime Geç
            </a>
            <a href="#services" className="text-lg font-semibold leading-6 text-gray-900">
              Hizmetlerimiz <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
} 