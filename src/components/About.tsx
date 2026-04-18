'use client'

import { useI18n } from '@/i18n/context'

export function About() {
  const { t, locale } = useI18n()

  return (
    <section id="about" className="py-24 bg-[#060606] relative overflow-hidden">
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
              {locale === 'zh' ? '关于我们' : 'About Us'}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            {t.about.title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-400 leading-relaxed mb-6 text-lg">
              {t.about.content}
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              {locale === 'zh' 
                ? '我们始终坚守以患者为中心的服务理念，整合国内JCI认证、三甲顶尖医院及权威医疗专家资源，覆盖精准重症治疗、中医特色理疗、高端健康体检、国际门诊等全品类医疗服务，全程提供病情评估、医疗签证协助、多语种翻译、专属陪诊、行程住宿安排、术后回国随访等一站式闭环服务。'
                : 'We adhere to a patient-centered service philosophy, integrating JCI-certified hospitals, top-tier medical institutions, and authoritative medical experts. We cover comprehensive medical services including precision treatment, traditional Chinese medicine, high-end health checkups, and international outpatient services.'}
            </p>
            <button 
              className="font-medium transition-colors flex items-center"
              style={{ color: '#CC0000' }}
            >
              {t.about.readMore}
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="relative">
            {/* Stats Grid with target website card style */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: '200+', label: locale === 'zh' ? '合作医院' : 'Partner Hospitals' },
                { num: '50+', label: locale === 'zh' ? '国家患者' : 'Countries' },
                { num: '1000+', label: locale === 'zh' ? '成功案例' : 'Success Cases' },
                { num: '24/7', label: locale === 'zh' ? '全天候服务' : '24/7 Service' },
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="group relative overflow-hidden transition-all duration-300 ease-out hover:-translate-y-2"
                  style={{
                    backgroundImage: 'url(/images/backgrounds/bg-card-texture.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    border: '2px solid transparent',
                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.125)',
                  }}
                >
                  {/* Hover border */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#CC0000] transition-colors duration-300" />
                  
                  {/* Background overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#111]/70 via-[#111]/85 to-[#111]/95" />
                  
                  {/* Content */}
                  <div className="relative p-6 text-center">
                    <div 
                      className="text-3xl font-bold mb-2"
                      style={{ 
                        background: 'linear-gradient(135deg, #CC0000 0%, #FF1A1A 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      {stat.num}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
