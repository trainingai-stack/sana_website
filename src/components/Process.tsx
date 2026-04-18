'use client'

import { FileSearch, Target, Video, ClipboardList, Plane, Users, Activity, Home } from 'lucide-react'
import { useI18n } from '@/i18n/context'
import type { ProcessStep } from '@prisma/client'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FileSearch,
  Target,
  Video,
  ClipboardList,
  Plane,
  Users,
  Activity,
  Home,
}

interface ProcessProps {
  steps: ProcessStep[]
}

export function Process({ steps }: ProcessProps) {
  const { t, locale } = useI18n()

  return (
    <section className="py-20 bg-[#060606] relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: 'url(/images/backgrounds/bg-pattern.png)' }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t.process.title}
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            从中国领先的专家那里获得全面的诊断和治疗方案评估。我们以灵活的选项优先考虑您的便利性，从经济实惠的医疗记录和影像审核开始，让您在无出差或时间冲突的情况下获得专家的清晰信息。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = iconMap[step.icon] || FileSearch
            const title = locale === 'zh' ? step.titleZh : step.titleEn
            const desc = locale === 'zh' ? step.descZh : step.descEn

            return (
              <div
                key={step.id}
                className="relative backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group border border-gray-700 hover:border-[#CC0000]/50"
                style={{ 
                  backgroundImage: 'url(/images/backgrounds/bg-card-1.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/70 to-[#1a1a1a]/90 rounded-xl group-hover:from-[#2a1a1a]/70 group-hover:to-[#2a1a1a]/90 transition-all" />
                <div className="absolute -top-3 left-6">
                  <div className="bg-[#CC0000] text-white text-xs font-bold px-3 py-1 rounded-full">
                    STEP {String(step.step).padStart(2, '0')}
                  </div>
                </div>
                <div className="relative pt-4">
                  <div className="w-12 h-12 bg-[#CC0000]/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#CC0000]/30 transition-colors">
                    <Icon className="w-6 h-6 text-[#CC0000]" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
