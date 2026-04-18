'use client'

import { Quote } from 'lucide-react'
import { useI18n } from '@/i18n/context'
import type { PatientStory } from '@prisma/client'

interface StoriesProps {
  stories: PatientStory[]
}

export function Stories({ stories }: StoriesProps) {
  const { t, locale } = useI18n()

  return (
    <section id="stories" className="py-20 bg-[#2a2a2a] relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: 'url(/images/backgrounds/bg-section.jpg)' }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t.stories.title}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t.stories.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story) => {
            const treatment = locale === 'zh' ? story.treatmentZh : story.treatmentEn
            const content = locale === 'zh' ? story.contentZh : story.contentEn

            return (
              <div
                key={story.id}
                className="bg-[#1a1a1a] rounded-xl p-6 relative group hover:bg-[#252525] transition-colors border border-gray-700"
              >
                <Quote className="absolute top-4 right-4 w-8 h-8 text-[#CC0000]/30" />
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#CC0000] to-[#A30000] rounded-full flex items-center justify-center text-white font-bold">
                    {story.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold text-white">{story.name}</h4>
                    <p className="text-xs text-gray-500">{story.country}</p>
                  </div>
                </div>
                <span className="inline-block text-xs font-medium text-[#CC0000] bg-[#CC0000]/10 px-3 py-1 rounded-full mb-4 border border-[#CC0000]/30">
                  {treatment}
                </span>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-4">{content}</p>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <button className="text-[#CC0000] font-medium hover:text-[#FF1A1A] transition-colors flex items-center mx-auto">
            查看更多患者故事
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
