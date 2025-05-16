'use client'

import { motion } from 'framer-motion'
import { 
  PencilSquareIcon, 
  ChartBarIcon, 
  MegaphoneIcon, 
  DocumentChartBarIcon 
} from '@heroicons/react/24/outline'

const services = [
  {
    name: 'İçerik Üretimi',
    description: 'Markanıza özel, etkileyici ve özgün içerikler üreterek sosyal medya varlığınızı güçlendiriyoruz.',
    icon: PencilSquareIcon,
  },
  {
    name: 'Sosyal Medya Stratejisi',
    description: 'Hedef kitlenize uygun, veriye dayalı sosyal medya stratejileri geliştirerek etkili sonuçlar elde ediyoruz.',
    icon: ChartBarIcon,
  },
  {
    name: 'Reklam Yönetimi',
    description: 'Sosyal medya reklamlarınızı optimize ederek, bütçenizi en verimli şekilde kullanmanızı sağlıyoruz.',
    icon: MegaphoneIcon,
  },
  {
    name: 'Performans Raporlama',
    description: 'Detaylı analizler ve raporlar ile sosyal medya performansınızı sürekli takip ediyoruz.',
    icon: DocumentChartBarIcon,
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Services() {
  return (
    <div id="services" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Hizmetlerimiz
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Markanızı sosyal medyada büyütmek için ihtiyacınız olan tüm hizmetleri sunuyoruz.
          </p>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {services.map((service) => (
              <motion.div
                key={service.name}
                variants={item}
                className="flex flex-col bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-8 hover:shadow-lg transition-shadow"
              >
                <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-gray-900">
                  <service.icon className="h-6 w-6 flex-none text-blue-600" aria-hidden="true" />
                  {service.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{service.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </div>
  )
} 