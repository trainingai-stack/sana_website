'use client'

import Link from 'next/link'
import { useI18n } from '@/i18n/context'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  const { locale } = useI18n()

  const footerLinks = {
    about: {
      title: { zh: '关于我们', en: 'About Us' },
      links: [
        { zh: '品牌使命与承诺', en: 'Mission & Commitment', href: '#' },
        { zh: '全球服务足迹', en: 'Global Services', href: '#' },
        { zh: '资质与合规保障', en: 'Compliance', href: '#' },
        { zh: '我们的合作伙伴', en: 'Partners', href: '#' },
        { zh: '成长大事记', en: 'Milestones', href: '#' },
      ]
    },
    services: {
      title: { zh: '医疗服务', en: 'Medical Services' },
      links: [
        { zh: '体检服务', en: 'Health Checkups', href: '#services' },
        { zh: '国际门诊', en: 'International Clinic', href: '#services' },
        { zh: '精准医疗', en: 'Precision Medicine', href: '#services' },
      ]
    },
    guide: {
      title: { zh: '就医指南', en: 'Medical Guide' },
      links: [
        { zh: '常见问题', en: 'FAQ', href: '/faqs' },
        { zh: '就医动态', en: 'Medical News', href: '#' },
        { zh: '患者故事', en: 'Patient Stories', href: '/patient-stories' },
        { zh: '患者生活', en: 'Patient Life', href: '#' },
        { zh: '医疗+旅游', en: 'Medical Tourism', href: '#' },
        { zh: '医疗小知识', en: 'Medical Tips', href: '#' },
        { zh: '中医食疗', en: 'TCM Diet', href: '#' },
      ]
    }
  }

  return (
    <footer className="relative bg-[#060606] text-gray-300 overflow-hidden">
      {/* Background - Using target website pattern */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: 'url(/images/backgrounds/bg-footer.jpg)' }}
      />
      
      {/* Top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#CC0000]/30 to-transparent" />
      
      {/* Main Content */}
      <div className="relative max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section - Logo and Slogan */}
        <div className="mb-12 pb-12 border-b border-[#222]">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Left Column - Logo and Slogan */}
            <div className="w-full md:w-[360px]">
              {/* Logo */}
              <div 
                className="h-[70px] w-full bg-contain bg-left-center bg-no-repeat mb-5"
                style={{ 
                  backgroundImage: 'url(/images/logo.svg)',
                }}
              />
              {/* Spacer */}
              <div className="h-[20px]" />
              {/* Brand Slogan */}
              <p className="text-base text-gray-400 leading-relaxed mb-6">
                {locale === 'zh' 
                  ? '以专业护航跨国就医，以暖心陪伴诊疗全程，整合中国优质医疗资源，为全球患者搭建安心、便捷、高性价比的来华就医桥梁，守护每一份健康期许。'
                  : 'Providing professional guidance for cross-border medical care, with warm companionship throughout the treatment journey.'}
              </p>
              {/* Social Media Icons */}
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 bg-gray-700 hover:bg-[#CC0000] rounded-full flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-700 hover:bg-[#CC0000] rounded-full flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-700 hover:bg-[#CC0000] rounded-full flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-700 hover:bg-[#CC0000] rounded-full flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.419-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-700 hover:bg-[#CC0000] rounded-full flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Right Column - Links Grid */}
            <div className="flex-1 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* About Us */}
              <div>
                <h4 className="text-white font-semibold mb-4 text-lg">
                  {locale === 'zh' ? footerLinks.about.title.zh : footerLinks.about.title.en}
                </h4>
                <ul className="space-y-3 text-sm">
                  {footerLinks.about.links.map((link, index) => (
                    <li key={index}>
                      <Link 
                        href={link.href} 
                        className="text-gray-400 hover:text-[#CC0000] transition-colors duration-300"
                      >
                        {locale === 'zh' ? link.zh : link.en}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Medical Services */}
              <div>
                <h4 className="text-white font-semibold mb-4 text-lg">
                  {locale === 'zh' ? footerLinks.services.title.zh : footerLinks.services.title.en}
                </h4>
                <ul className="space-y-3 text-sm">
                  {footerLinks.services.links.map((link, index) => (
                    <li key={index}>
                      <Link 
                        href={link.href} 
                        className="text-gray-400 hover:text-[#CC0000] transition-colors duration-300"
                      >
                        {locale === 'zh' ? link.zh : link.en}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Medical Guide */}
              <div>
                <h4 className="text-white font-semibold mb-4 text-lg">
                  {locale === 'zh' ? footerLinks.guide.title.zh : footerLinks.guide.title.en}
                </h4>
                <ul className="space-y-3 text-sm">
                  {footerLinks.guide.links.map((link, index) => (
                    <li key={index}>
                      <Link 
                        href={link.href} 
                        className="text-gray-400 hover:text-[#CC0000] transition-colors duration-300"
                      >
                        {locale === 'zh' ? link.zh : link.en}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Us */}
              <div>
                <h4 className="text-white font-semibold mb-4 text-lg">
                  {locale === 'zh' ? '联系我们' : 'Contact Us'}
                </h4>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start">
                    <Mail className="w-5 h-5 text-[#CC0000] mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-500 block text-xs mb-1">
                        {locale === 'zh' ? '邮箱' : 'Email'}
                      </span>
                      <a 
                        href="mailto:support@sanain.com" 
                        className="text-gray-300 hover:text-[#CC0000] transition-colors"
                      >
                        support@sanain.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Phone className="w-5 h-5 text-[#CC0000] mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-500 block text-xs mb-1">
                        {locale === 'zh' ? '电话' : 'Phone'}
                      </span>
                      <a 
                        href="tel:+8613300000000" 
                        className="text-gray-300 hover:text-[#CC0000] transition-colors"
                      >
                        +86 133 00000000
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#CC0000] mr-3 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.269-.03-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z"/>
                    </svg>
                    <div>
                      <span className="text-gray-500 block text-xs mb-1">
                        {locale === 'zh' ? '微信' : 'WeChat'}
                      </span>
                      <span className="text-gray-300">+86 133 00000000</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="w-5 h-5 text-[#CC0000] mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-500 block text-xs mb-1">
                        {locale === 'zh' ? '地址' : 'Address'}
                      </span>
                      <span className="text-gray-300">
                        {locale === 'zh' 
                          ? '中国 · 北京，海淀区 XX 街道 XX 大厦 XXX 号'
                          : 'Beijing, China, Haidian District'}
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="relative border-t border-[#222]">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>© 2026 Sana All right reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-[#CC0000] transition-colors">
                {locale === 'zh' ? '隐私政策' : 'Privacy Policy'}
              </Link>
              <Link href="#" className="hover:text-[#CC0000] transition-colors">
                {locale === 'zh' ? '服务条款' : 'Terms of Service'}
              </Link>
              <Link href="#" className="hover:text-[#CC0000] transition-colors">
                {locale === 'zh' ? '法律声明' : 'Legal Notice'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
