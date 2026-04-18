'use client'

import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'
import { useI18n } from '@/i18n/context'

export function Hero() {
  const { t, locale } = useI18n()

  return (
    <>
      {/* Top Banner */}
      <section className="bg-[#CC0000] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-center space-x-4 text-sm">
            <span className="font-medium">{t.hero.slogan}</span>
            <span className="text-red-200">|</span>
            <span className="text-red-100 hidden sm:inline">
              {locale === 'zh' 
                ? 'Sana专注为国际患者提供一站式来华就医服务，从签证协助、医院预约到多语言陪诊，让您享受中国顶尖医疗资源，全程无忧。'
                : 'Sana focuses on providing one-stop medical services in China for international patients, from visa assistance to multilingual accompaniment.'}
            </span>
            <Link href="#about" className="text-white hover:text-red-200 flex items-center font-medium transition-colors">
              {locale === 'zh' ? '了解更多' : 'Learn More'}
              <ArrowRight className="w-3 h-3 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Hero */}
      <section 
        className="relative min-h-[90vh] flex items-center overflow-hidden"
        style={{
          backgroundColor: 'rgba(6, 6, 6, 1)',
          backgroundImage: 'url(/images/backgrounds/bg-pattern-2.png)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060606]/60 via-[#060606]/40 to-[#060606]/20" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#CC0000]/10 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#CC0000]/5 rounded-full blur-[80px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-[#CC0000]/10 border border-[#CC0000]/30 rounded-lg">
                <span className="w-2 h-2 bg-[#CC0000] rounded-full mr-2 animate-pulse" />
                <span className="text-[#CC0000] text-sm font-medium">Sana - Med in China</span>
              </div>

              {/* Title */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                {locale === 'zh' ? (
                  <>
                    连接全球患者与
                    <span className="text-[#CC0000] text-shadow-red">中国顶尖医疗</span>
                  </>
                ) : (
                  <>
                    Connecting Global Patients to
                    <span className="text-[#CC0000] text-shadow-red"> Top Chinese Healthcare</span>
                  </>
                )}
              </h1>

              {/* Subtitle */}
              <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
                {locale === 'zh' 
                  ? '一站式国际医疗服务平台，为您提供签证协助、医院预约、多语言陪诊等全程服务，让来华就医变得简单、安心。'
                  : 'One-stop international medical service platform providing visa assistance, hospital appointments, multilingual accompaniment, making medical travel to China simple and reassuring.'}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link
                  href="#contact"
                  className="group inline-flex items-center px-8 py-4 bg-[#CC0000] text-white rounded-lg font-semibold hover:bg-[#A30000] transition-all duration-300 shadow-lg shadow-[#CC0000]/25 hover:shadow-[#CC0000]/40"
                >
                  {locale === 'zh' ? '免费咨询' : 'Free Consultation'}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center px-8 py-4 border-2 border-[#CC0000]/50 text-white rounded-lg font-semibold hover:bg-[#CC0000]/10 hover:border-[#CC0000] transition-all duration-300"
                >
                  {locale === 'zh' ? '了解服务' : 'Our Services'}
                </Link>
              </div>

              {/* Stats */}
              <div className="flex items-center space-x-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-white">1000+</div>
                  <div className="text-sm text-gray-500">{locale === 'zh' ? '成功案例' : 'Success Cases'}</div>
                </div>
                <div className="h-12 w-px bg-[#333]" />
                <div>
                  <div className="text-3xl font-bold text-white">50+</div>
                  <div className="text-sm text-gray-500">{locale === 'zh' ? '合作医院' : 'Partner Hospitals'}</div>
                </div>
                <div className="h-12 w-px bg-[#333]" />
                <div>
                  <div className="text-3xl font-bold text-white">20+</div>
                  <div className="text-sm text-gray-500">{locale === 'zh' ? '服务国家' : 'Countries Served'}</div>
                </div>
              </div>
            </div>

            {/* Right Content - Video Thumbnail */}
            <div className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden border border-[#222] shadow-2xl shadow-black/50 group">
                {/* Video thumbnail with target website background pattern */}
                <div 
                  className="aspect-video bg-cover bg-center relative"
                  style={{ backgroundImage: 'url(/images/backgrounds/bg-pattern-1.png)' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-transparent to-transparent" />
                  
                  {/* Play Button */}
                  <button className="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <div className="w-20 h-20 bg-[#CC0000] rounded-full flex items-center justify-center shadow-lg shadow-[#CC0000]/50 group-hover:bg-[#FF1A1A] transition-colors">
                      <Play className="w-8 h-8 text-white ml-1" fill="white" />
                    </div>
                  </button>
                  
                  {/* Caption */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm font-medium">
                      {locale === 'zh' ? '观看 Sana 服务介绍' : 'Watch Sana Service Introduction'}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-[#CC0000]/30 rounded-lg" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-[#CC0000]/20 rounded-lg" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
