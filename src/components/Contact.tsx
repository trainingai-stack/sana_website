'use client'

import { useState } from 'react'
import { Send, Mail, Phone, MessageCircle, MapPin } from 'lucide-react'
import { useI18n } from '@/i18n/context'

export function Contact() {
  const { t, locale } = useI18n()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert(locale === 'zh' ? '感谢您的咨询！我们会尽快与您联系。' : 'Thank you for your inquiry! We will contact you soon.')
  }

  return (
    <section id="contact" className="py-24 bg-[#060606] relative overflow-hidden">
      {/* Background - Using target website pattern */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: 'url(/images/backgrounds/bg-pattern-1.png)' }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060606] via-transparent to-[#060606]" />
      
      {/* Red gradient section at top */}
      <div 
        className="absolute top-0 left-0 right-0 h-1/2"
        style={{
          background: 'linear-gradient(180deg, #CC0000 0%, #A30000 50%, transparent 100%)'
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {t.contact.title}
          </h2>
          <p className="text-red-100 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form Card with target website style */}
          <div 
            className="relative overflow-hidden rounded-2xl p-8"
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
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {t.contact.name}
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-[#333] text-white focus:border-[#CC0000] focus:ring-2 focus:ring-[#CC0000]/30 outline-none transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {t.contact.email}
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-[#333] text-white focus:border-[#CC0000] focus:ring-2 focus:ring-[#CC0000]/30 outline-none transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {t.contact.phone}
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-[#333] text-white focus:border-[#CC0000] focus:ring-2 focus:ring-[#CC0000]/30 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {t.contact.country}
                    </label>
                    <input
                      type="text"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-[#333] text-white focus:border-[#CC0000] focus:ring-2 focus:ring-[#CC0000]/30 outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t.contact.message}
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-[#333] text-white focus:border-[#CC0000] focus:ring-2 focus:ring-[#CC0000]/30 outline-none transition-all resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="mt-6 w-full flex items-center justify-center px-8 py-3 text-white rounded-lg font-medium transition-all hover:shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, #CC0000 0%, #A30000 100%)',
                    boxShadow: '0 4px 15px rgba(204, 0, 0, 0.3)'
                  }}
                >
                  <Send className="w-4 h-4 mr-2" />
                  {t.contact.submit}
                </button>
              </form>
            </div>
          </div>

          <div className="text-white">
            <h3 className="text-xl font-semibold mb-6">
              {locale === 'zh' ? '以专业护航跨国就医' : 'Professional Medical Escort Services'}
            </h3>
            <p className="text-red-100 mb-8 leading-relaxed">
              {locale === 'zh' 
                ? '以暖心陪伴诊疗全程，整合中国优质医疗资源，为全球患者搭建安心、便捷、高性价比的来华就医桥梁，守护每一份健康期许。'
                : 'With warm companionship throughout the diagnosis and treatment process, we integrate high-quality medical resources in China to build a safe, convenient, and cost-effective bridge for global patients seeking medical treatment in China.'}
            </p>

            <div className="space-y-4">
              {[
                { icon: Mail, label: locale === 'zh' ? '邮箱' : 'Email', value: 'support@sanain.com' },
                { icon: Phone, label: locale === 'zh' ? '电话' : 'Phone', value: '+86 133 00000000' },
                { icon: MessageCircle, label: locale === 'zh' ? '微信' : 'WeChat', value: '+86 133 00000000' },
                { icon: MapPin, label: locale === 'zh' ? '地址' : 'Address', value: locale === 'zh' ? '中国 · 北京，海淀区XX街道XX大厦XXX号' : 'Beijing, China' },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{
                      background: 'rgba(204, 0, 0, 0.2)',
                      border: '1px solid rgba(204, 0, 0, 0.3)'
                    }}
                  >
                    <item.icon className="w-5 h-5 text-[#CC0000]" />
                  </div>
                  <div>
                    <div className="text-sm text-red-200">{item.label}</div>
                    <div className="font-medium">{item.value}</div>
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
