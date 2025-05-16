'use client'

import { motion } from 'framer-motion'
import { IconBrandWhatsapp, IconBrandInstagram, IconMail } from '@tabler/icons-react'

const contactLinks = [
  {
    name: 'WhatsApp',
    href: 'https://wa.me/905555555555',
    icon: IconBrandWhatsapp,
    hoverColor: '#22c55e', // green-500
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/username',
    icon: IconBrandInstagram,
    hoverColor: '#a855f7', // purple-500
  },
  {
    name: 'E-posta',
    href: 'mailto:info@example.com',
    icon: IconMail,
    hoverColor: '#3b82f6', // blue-500
  },
]

export default function Contact() {
  return (
    <div id="contact" className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          İletişime Geçin
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Size en uygun iletişim kanalını seçin ve hemen bağlantı kurun.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mx-auto mt-16 max-w-lg"
      >
        <div className="flex justify-center items-center space-x-12">
          {contactLinks.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-colors duration-300"
              style={{ color: 'rgb(75, 85, 99)' }}
              whileHover={{ 
                scale: 1.2,
                color: item.hoverColor,
              }}
              whileTap={{ scale: 0.95 }}
              title={item.name}
            >
              <item.icon className="h-8 w-8" stroke={1.5} />
              <span className="sr-only">{item.name}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  )
} 