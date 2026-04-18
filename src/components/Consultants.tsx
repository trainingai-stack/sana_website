'use client'

import { useI18n } from '@/i18n/context'
import type { Consultant } from '@prisma/client'
import { Mail } from 'lucide-react'
import Image from 'next/image'

interface ConsultantsProps {
  consultants: Consultant[]
}

export function Consultants({ consultants }: ConsultantsProps) {
  const { t, locale } = useI18n()

  return (
    <section className="py-24 bg-[#060606] relative overflow-hidden">
      {/* Background - Using target website pattern */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: 'url(/images/backgrounds/bg-pattern-1.png)' }}
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
              {locale === 'zh' ? '专业团队' : 'Professional Team'}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            {t.consultants.title}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {t.consultants.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {consultants.map((consultant) => (
            <div
              key={consultant.id}
              className="group relative cursor-pointer"
            >
              {/* Card Container - Matching target website style */}
              <div 
                className="relative overflow-hidden rounded-2xl transition-all duration-500 ease-out"
                style={{
                  backgroundColor: 'rgba(17, 17, 17, 0.8)',
                }}
              >
                {/* Hover background overlay - red tint */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    backgroundColor: 'rgba(189, 36, 36, 0.15)',
                    backgroundImage: 'url(/images/backgrounds/bg-card-dark.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                
                {/* Hover border effect */}
                <div 
                  className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#CC0000] transition-colors duration-500"
                />
                
                {/* Content */}
                <div className="relative p-4">
                  {/* Photo Container */}
                  <div className="relative mb-4 overflow-hidden rounded-xl">
                    {/* Email Icon - appears on hover */}
                    <div 
                      className="absolute top-3 left-3 z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-2 group-hover:translate-y-0"
                      style={{
                        background: 'linear-gradient(135deg, #CC0000 0%, #A30000 100%)',
                        borderRadius: '50%',
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    
                    {/* Photo - Using real image or fallback to initials */}
                    <div className="aspect-[3/4] w-full relative overflow-hidden rounded-xl bg-[#1a1a1a]">
                      {consultant.image ? (
                        <Image
                          src={consultant.image}
                          alt={consultant.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 50vw, 25vw"
                        />
                      ) : (
                        <div 
                          className="w-full h-full flex items-center justify-center text-white text-4xl font-bold"
                          style={{
                            background: 'linear-gradient(135deg, #CC0000 0%, #A30000 100%)',
                          }}
                        >
                          {consultant.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                        </div>
                      )}
                      {/* Gradient overlay on photo */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#060606]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="px-2 pb-2">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#FF1A1A] transition-colors duration-300">
                      {consultant.name}
                    </h3>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {consultant.languages} {locale === 'zh' ? '顾问' : 'Consultant'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
