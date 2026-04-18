'use client'

import { HeartPulse, Stethoscope, Dna, Leaf, ChevronRight, FileSearch, Activity, Brain, Heart } from 'lucide-react'
import { useI18n } from '@/i18n/context'
import type { MedicalService } from '@prisma/client'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  HeartPulse,
  Stethoscope,
  Dna,
  Leaf,
  FileSearch,
  Activity,
  Brain,
  Heart,
}

interface ServiceCardProps {
  service: MedicalService
  locale: 'zh' | 'en'
}

function ServiceCard({ service, locale }: ServiceCardProps) {
  const { t } = useI18n()
  const Icon = iconMap[service.icon] || HeartPulse
  const title = locale === 'zh' ? service.titleZh : service.titleEn
  const desc = locale === 'zh' ? service.descZh : service.descEn
  const features = locale === 'zh' ? service.featuresZh : service.featuresEn
  const stats = locale === 'zh' ? service.statsZh : service.statsEn

  return (
    <div 
      className="relative rounded-xl overflow-hidden group transition-all duration-300 ease-out hover:-translate-y-3"
      style={{ 
        backgroundImage: 'url(/images/backgrounds/bg-card-texture.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
        border: '2px solid transparent',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.125)',
      }}
    >
      {/* Hover border effect - matching target website */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#CC0000] transition-colors duration-300" />
      
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111]/60 via-[#111]/80 to-[#111]/95" />
      
      {/* Red glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-[#CC0000]/10 to-transparent" />
      
      <div className="relative p-6">
        <div className="flex items-start justify-between mb-4">
          <div 
            className="w-12 h-12 rounded-lg flex items-center justify-center transition-colors"
            style={{
              background: 'rgba(204, 0, 0, 0.1)',
              border: '1px solid rgba(204, 0, 0, 0.2)'
            }}
          >
            <Icon className="w-6 h-6 text-[#CC0000]" />
          </div>
          {stats && (
            <span 
              className="text-xs font-medium px-3 py-1 rounded-full"
              style={{
                background: 'rgba(204, 0, 0, 0.1)',
                border: '1px solid rgba(204, 0, 0, 0.3)',
                color: '#CC0000'
              }}
            >
              {stats}
            </span>
          )}
        </div>

        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-shadow-red transition-all">{title}</h3>
        <p className="text-gray-400 text-sm mb-4 leading-relaxed">{desc}</p>

        <div className="space-y-2 mb-6">
          {features.split('\n').map((feature, index) => (
            <div key={index} className="flex items-start text-sm text-gray-400">
              <span className="text-[#CC0000] mr-2">▸</span>
              {feature}
            </div>
          ))}
        </div>

        <div className="flex gap-3 pt-4 border-t border-[#222]">
          <button className="flex-1 py-2 text-sm font-medium text-[#CC0000] hover:text-[#FF1A1A] transition-colors flex items-center justify-center group/btn">
            {t.services.learnMore}
            <ChevronRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
          </button>
          <button 
            className="flex-1 py-2 text-sm font-medium text-white rounded-lg transition-colors"
            style={{
              background: 'linear-gradient(135deg, #CC0000 0%, #A30000 100%)',
              boxShadow: '0 4px 15px rgba(204, 0, 0, 0.3)'
            }}
          >
            {t.services.consult}
          </button>
        </div>
      </div>
    </div>
  )
}

interface ServicesProps {
  services: MedicalService[]
}

export function Services({ services }: ServicesProps) {
  const { t, locale } = useI18n()

  return (
    <section id="services" className="py-24 bg-[#060606] relative overflow-hidden">
      {/* Background - Using target website pattern */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: 'url(/images/backgrounds/bg-pattern-2.png)' }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060606] via-transparent to-[#060606]" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#CC0000]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#CC0000]/30 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-2 h-2 bg-[#CC0000] rounded-full animate-pulse mr-2" />
            <span className="text-[#CC0000] text-sm font-medium uppercase tracking-wider">
              {locale === 'zh' ? '我们的服务' : 'Our Services'}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            {t.services.title}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  )
}
