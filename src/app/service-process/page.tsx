'use client'

import { useState } from 'react'
import { 
  MessageCircle, 
  FileText, 
  Calendar, 
  Plane, 
  Hospital, 
  Heart, 
  Home,
  CheckCircle,
  Clock,
  Users,
  Phone,
  ChevronRight,
  Check,
  Mail
} from 'lucide-react'
import { useI18n } from '@/i18n/context'

const serviceSteps = [
  {
    step: '01',
    title: { zh: '免费评估', en: 'Free Assessment' },
    details: [
      { zh: '提交既往病历、病情简述', en: 'Submit medical history and condition summary' },
      { zh: '免费病历审查、跨境就医适配性，规划专属诊疗路径', en: 'Free medical record review, cross-border medical suitability assessment' },
      { zh: '全程保密、零费用评估，24小时极速反馈', en: 'Confidential, zero-cost assessment, 24-hour rapid feedback' }
    ]
  },
  {
    step: '02',
    title: { zh: '专家匹配', en: 'Expert Matching' },
    details: [
      { zh: '根据病情匹配顶级医院和专家', en: 'Match top hospitals and experts based on condition' },
      { zh: '提供第二诊疗意见和治疗方案', en: 'Provide second opinion and treatment plan' },
      { zh: '确认就医时间和费用预估', en: 'Confirm medical schedule and cost estimate' }
    ]
  },
  {
    step: '03',
    title: { zh: '签证协助', en: 'Visa Assistance' },
    details: [
      { zh: '提供医疗签证邀请函', en: 'Provide medical visa invitation letter' },
      { zh: '协助准备签证申请材料', en: 'Assist in preparing visa application materials' },
      { zh: '签证进度跟踪和加急服务', en: 'Visa progress tracking and expedited service' }
    ]
  },
  {
    step: '04',
    title: { zh: '行程安排', en: 'Travel Arrangement' },
    details: [
      { zh: '机票、酒店预订服务', en: 'Flight and hotel booking service' },
      { zh: '机场接送和当地交通安排', en: 'Airport transfer and local transportation' },
      { zh: '翻译陪同全程服务', en: 'Translator accompaniment throughout' }
    ]
  },
  {
    step: '05',
    title: { zh: '就医服务', en: 'Medical Service' },
    details: [
      { zh: '绿色通道，优先就诊', en: 'Green channel, priority treatment' },
      { zh: '专家门诊和检查安排', en: 'Expert consultation and examination arrangement' },
      { zh: '实时病情沟通与翻译', en: 'Real-time condition communication and translation' }
    ]
  },
  {
    step: '06',
    title: { zh: '术后康复', en: 'Post-operative Care' },
    details: [
      { zh: '专业护理和康复指导', en: 'Professional care and rehabilitation guidance' },
      { zh: '用药管理和随访安排', en: 'Medication management and follow-up arrangement' },
      { zh: '营养膳食建议', en: 'Nutritional dietary advice' }
    ]
  },
  {
    step: '07',
    title: { zh: '出院回国', en: 'Discharge & Return' },
    details: [
      { zh: '出院手续办理协助', en: 'Assist with discharge procedures' },
      { zh: '病历资料翻译和整理', en: 'Medical record translation and organization' },
      { zh: '送机服务和行程确认', en: 'Airport drop-off and itinerary confirmation' }
    ]
  },
  {
    step: '08',
    title: { zh: '后续随访', en: 'Follow-up Care' },
    details: [
      { zh: '回国后远程随访服务', en: 'Remote follow-up service after returning home' },
      { zh: '复查提醒和报告解读', en: 'Check-up reminders and report interpretation' },
      { zh: '长期健康管理支持', en: 'Long-term health management support' }
    ]
  }
]

export default function ServiceProcessPage() {
  const { locale } = useI18n()
  const [hoveredStep, setHoveredStep] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-[#060606]">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: 'url(/images/backgrounds/bg-pattern-1.png)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060606] via-transparent to-[#060606]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="w-2 h-2 bg-[#CC0000] rounded-full animate-pulse mr-2" />
              <span className="text-[#CC0000] text-sm font-medium uppercase tracking-wider">
                {locale === 'zh' ? '服务流程' : 'Service Process'}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {locale === 'zh' ? '一站式跨国就医全流程' : 'One-Stop Cross-Border Medical Process'}
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {locale === 'zh' 
                ? '从咨询到康复，8 个步骤让您清晰了解我们的服务流程。专业、透明、高效，全程无忧。'
                : 'From consultation to recovery, 8 steps to clearly understand our service process. Professional, transparent, efficient, worry-free throughout.'}
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps - Matching target website style */}
      <section className="py-12 bg-[#060606] relative">
        {/* Decorative top border */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#CC0000]/30 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceSteps.map((step) => (
              <div
                key={step.step}
                className="group relative cursor-pointer"
                onMouseEnter={() => setHoveredStep(step.step)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                {/* Card Container */}
                <div 
                  className="relative overflow-hidden rounded-2xl transition-all duration-500"
                  style={{
                    backgroundColor: '#111',
                    boxShadow: hoveredStep === step.step 
                      ? '0px 0px 30px rgba(255, 0, 0, 1)' 
                      : '0 5px 15px rgba(0, 0, 0, 0.3)',
                    border: hoveredStep === step.step 
                      ? '2px solid #CC0000' 
                      : '2px solid transparent',
                  }}
                >
                  {/* Top Section - Black background with STEP */}
                  <div className="relative bg-black p-6 pb-8">
                    {/* STEP label */}
                    <div className="text-center mb-2">
                      <span className="text-white/60 text-sm font-medium tracking-wider">
                        STEP {step.step}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white text-center">
                      {locale === 'zh' ? step.title.zh : step.title.en}
                    </h3>
                    
                    {/* Curved bottom edge effect */}
                    <div 
                      className="absolute bottom-0 left-0 right-0 h-8 transition-all duration-500"
                      style={{
                        background: hoveredStep === step.step 
                          ? 'linear-gradient(to bottom, transparent, rgba(204, 0, 0, 0.3))'
                          : 'linear-gradient(to bottom, transparent, rgba(204, 0, 0, 0.1))',
                        borderRadius: '50% 50% 0 0 / 100% 100% 0 0',
                        transform: 'translateY(50%)',
                      }}
                    />
                  </div>
                  
                  {/* Bottom Section - Red gradient background */}
                  <div 
                    className="relative p-6 pt-10 transition-all duration-500"
                    style={{
                      background: hoveredStep === step.step 
                        ? 'linear-gradient(180deg, rgba(204, 0, 0, 0.25) 0%, rgba(189, 36, 36, 0.15) 100%)'
                        : 'linear-gradient(180deg, rgba(204, 0, 0, 0.15) 0%, rgba(189, 36, 36, 0.05) 100%)',
                    }}
                  >
                    {/* Details list */}
                    <div className="space-y-4">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start">
                          <div 
                            className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5"
                            style={{
                              background: 'rgba(204, 0, 0, 0.2)',
                              border: '1px solid rgba(204, 0, 0, 0.5)'
                            }}
                          >
                            <Check className="w-3 h-3 text-[#CC0000]" />
                          </div>
                          <p className="text-sm text-gray-300 leading-relaxed">
                            {locale === 'zh' ? detail.zh : detail.en}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-[#060606] relative overflow-hidden">
        {/* Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
          style={{ backgroundImage: 'url(/images/backgrounds/bg-pattern-2.png)' }}
        />
        
        {/* Red gradient at top */}
        <div 
          className="absolute top-0 left-0 right-0 h-1/2"
          style={{
            background: 'linear-gradient(180deg, rgba(204, 0, 0, 0.2) 0%, transparent 100%)'
          }}
        />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div 
            className="relative overflow-hidden rounded-2xl p-8 md:p-12 text-center"
            style={{
              backgroundImage: 'url(/images/backgrounds/bg-card-dark.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '2px solid rgba(204, 0, 0, 0.3)',
              boxShadow: '0 5px 15px rgba(0, 0, 0, 0.125)',
            }}
          >
            {/* Background overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#111]/80 via-[#111]/90 to-[#111]/95" />
            
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {locale === 'zh' ? '准备开始您的医疗之旅？' : 'Ready to Start Your Medical Journey?'}
              </h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                {locale === 'zh' 
                  ? '立即咨询，我们的医疗顾问将在 24 小时内与您联系'
                  : 'Contact us now, our medical consultants will reach you within 24 hours'}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="mailto:support@sanain.com"
                  className="group inline-flex items-center px-8 py-4 text-white font-semibold rounded-lg transition-all hover:shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, #CC0000 0%, #A30000 100%)',
                    boxShadow: '0 4px 15px rgba(204, 0, 0, 0.3)'
                  }}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  {locale === 'zh' ? '邮件咨询' : 'Email Us'}
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a 
                  href="https://wa.me/8613300000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
