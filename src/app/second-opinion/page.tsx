'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronRight, FileText, Clock, Users, Mail, CheckCircle } from 'lucide-react'
import { useI18n } from '@/i18n/context'

const features = [
  {
    icon: Clock,
    title: { zh: '72 小时极速响应', en: '72-Hour Rapid Response' },
    desc: { zh: '提交资料后 72 小时内获得专家书面第二诊疗意见', en: 'Get expert written second opinion within 72 hours after submitting materials' }
  },
  {
    icon: Users,
    title: { zh: '顶尖专家复核', en: 'Top Expert Review' },
    desc: { zh: '三甲医院主任级别专家亲自复核诊断', en: 'Chief physician level experts from top-tier hospitals personally review diagnosis' }
  },
  {
    icon: FileText,
    title: { zh: '书面诊疗方案', en: 'Written Treatment Plan' },
    desc: { zh: '详细的书面诊疗建议和治疗方案', en: 'Detailed written treatment recommendations and therapy plans' }
  },
  {
    icon: Mail,
    title: { zh: '国际远程会诊', en: 'International Remote Consultation' },
    desc: { zh: '无需来华，即可获得中国顶尖专家意见', en: 'Get opinions from top Chinese experts without traveling to China' }
  }
]

const steps = [
  {
    step: 1,
    title: { zh: '提交病历资料', en: 'Submit Medical Records' },
    desc: { zh: '上传既往病历、检查报告、影像资料等', en: 'Upload medical records, test reports, imaging data, etc.' }
  },
  {
    step: 2,
    title: { zh: '专家复核诊断', en: 'Expert Review' },
    desc: { zh: '三甲医院专家详细审核病历资料', en: 'Top-tier hospital experts thoroughly review medical records' }
  },
  {
    step: 3,
    title: { zh: '出具书面意见', en: 'Written Opinion' },
    desc: { zh: '72 小时内出具详细书面第二诊疗意见', en: 'Detailed written second opinion issued within 72 hours' }
  },
  {
    step: 4,
    title: { zh: '后续治疗建议', en: 'Follow-up Treatment Advice' },
    desc: { zh: '根据专家意见决定后续治疗方案', en: 'Decide follow-up treatment plan based on expert opinion' }
  }
]

const conditions = [
  { zh: '肿瘤疾病', en: 'Oncology' },
  { zh: '神经系统疾病', en: 'Neurology' },
  { zh: '心血管疾病', en: 'Cardiology' },
  { zh: '骨科疾病', en: 'Orthopedics' },
  { zh: '消化系统疾病', en: 'Gastroenterology' },
  { zh: '内分泌疾病', en: 'Endocrinology' },
  { zh: '呼吸系统疾病', en: 'Respiratory Medicine' },
  { zh: '泌尿系统疾病', en: 'Urology' },
  { zh: '妇科疾病', en: 'Gynecology' },
  { zh: '儿科疾病', en: 'Pediatrics' },
  { zh: '皮肤科疾病', en: 'Dermatology' },
  { zh: '其他疑难杂症', en: 'Other Complex Conditions' }
]

export default function SecondOpinionPage() {
  const { locale, t } = useI18n()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    condition: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(locale === 'zh' ? '提交成功！我们会尽快联系您。' : 'Submitted successfully! We will contact you soon.')
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#CC0000]/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {locale === 'zh' ? '远程第二诊疗意见' : 'Remote Second Opinion'}
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {locale === 'zh' 
                ? '无需来华，72 小时内获得中国顶尖专家的书面第二诊疗意见。为您的健康决策提供权威依据。'
                : 'Get written second opinion from top Chinese experts within 72 hours without traveling to China. Provide authoritative basis for your health decisions.'}
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div key={idx} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#CC0000]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                  <div className="relative p-6 bg-[#1a1a1a]/50 backdrop-blur-sm border border-gray-800 rounded-xl hover:border-[#CC0000]/50 transition-all">
                    <Icon className="w-12 h-12 text-[#CC0000] mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {locale === 'zh' ? feature.title.zh : feature.title.en}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {locale === 'zh' ? feature.desc.zh : feature.desc.en}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {locale === 'zh' ? '服务流程' : 'Service Process'}
            </h2>
            <p className="text-gray-400">
              {locale === 'zh' ? '简单四步，获得权威第二诊疗意见' : 'Four simple steps to get authoritative second opinion'}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.step} className="relative">
                {step.step < steps.length && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-[#CC0000]/50 to-transparent" />
                )}
                <div className="relative text-center">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-[#CC0000] to-[#990000] rounded-full flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {locale === 'zh' ? step.title.zh : step.title.en}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {locale === 'zh' ? step.desc.zh : step.desc.en}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {locale === 'zh' ? '适用疾病类型' : 'Applicable Conditions'}
            </h2>
            <p className="text-gray-400">
              {locale === 'zh' ? '涵盖 12 大科室，100+ 种疾病' : 'Covering 12 departments, 100+ conditions'}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {conditions.map((condition, idx) => (
              <div 
                key={idx}
                className="p-4 bg-[#1a1a1a] border border-gray-800 rounded-lg text-center hover:border-[#CC0000]/50 transition-all cursor-default"
              >
                <p className="text-white text-sm">
                  {locale === 'zh' ? condition.zh : condition.en}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#CC0000]/20 to-[#990000]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {locale === 'zh' ? '立即获取第二诊疗意见' : 'Get Second Opinion Now'}
          </h2>
          <p className="text-gray-300 mb-8">
            {locale === 'zh' 
              ? '填写下方表单，我们的医疗顾问将在 24 小时内与您联系'
              : 'Fill out the form below, our medical consultant will contact you within 24 hours'}
          </p>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <input
              type="text"
              placeholder={locale === 'zh' ? '姓名' : 'Name'}
              className="px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#CC0000]"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#CC0000]"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <input
              type="tel"
              placeholder={locale === 'zh' ? '电话' : 'Phone'}
              className="px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#CC0000]"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder={locale === 'zh' ? '国家' : 'Country'}
              className="px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#CC0000]"
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              required
            />
            <textarea
              placeholder={locale === 'zh' ? '病情简述' : 'Condition Description'}
              rows={4}
              className="md:col-span-2 px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#CC0000]"
              value={formData.condition}
              onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
              required
            />
            <button
              type="submit"
              className="md:col-span-2 py-4 bg-[#CC0000] hover:bg-[#A30000] text-white font-semibold rounded-lg transition-colors flex items-center justify-center"
            >
              {locale === 'zh' ? '提交申请' : 'Submit Application'}
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </form>
        </div>
      </section>

    </>
  )
}
