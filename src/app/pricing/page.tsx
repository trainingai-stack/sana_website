'use client'

import { DollarSign, Percent, Shield, FileText, CheckCircle } from 'lucide-react'
import { useI18n } from '@/i18n/context'

const pricingCategories = [
  {
    category: { zh: '癌症治疗', en: 'Oncology' },
    treatments: [
      {
        name: { zh: 'CAR-T 细胞治疗', en: 'CAR-T Cell Therapy' },
        price: '$150,000 - $200,000',
        usa: '$450,000',
        saving: '55-67%'
      },
      {
        name: { zh: '质子治疗（全程）', en: 'Proton Therapy (Full Course)' },
        price: '$35,000 - $45,000',
        usa: '$120,000',
        saving: '63-71%'
      },
      {
        name: { zh: '重离子治疗', en: 'Heavy Ion Therapy' },
        price: '$40,000 - $50,000',
        usa: '$130,000',
        saving: '62-69%'
      },
      {
        name: { zh: '靶向治疗（月）', en: 'Targeted Therapy (Monthly)' },
        price: '$2,000 - $5,000',
        usa: '$10,000 - $15,000',
        saving: '67-80%'
      }
    ]
  },
  {
    category: { zh: '心血管疾病', en: 'Cardiology' },
    treatments: [
      {
        name: { zh: '心脏支架手术', en: 'Cardiac Stent Surgery' },
        price: '$8,000 - $15,000',
        usa: '$30,000 - $50,000',
        saving: '70-73%'
      },
      {
        name: { zh: '心脏搭桥手术', en: 'Heart Bypass Surgery' },
        price: '$20,000 - $30,000',
        usa: '$80,000 - $150,000',
        saving: '75-80%'
      },
      {
        name: { zh: 'TAVR 瓣膜置换', en: 'TAVR Valve Replacement' },
        price: '$25,000 - $35,000',
        usa: '$80,000 - $120,000',
        saving: '69-71%'
      },
      {
        name: { zh: '心脏移植', en: 'Heart Transplant' },
        price: '$80,000 - $120,000',
        usa: '$250,000 - $400,000',
        saving: '68-70%'
      }
    ]
  },
  {
    category: { zh: '神经系统', en: 'Neurology' },
    treatments: [
      {
        name: { zh: '脑肿瘤切除', en: 'Brain Tumor Resection' },
        price: '$15,000 - $25,000',
        usa: '$50,000 - $100,000',
        saving: '70-75%'
      },
      {
        name: { zh: 'DBS 脑起搏器', en: 'Deep Brain Stimulation' },
        price: '$20,000 - $30,000',
        usa: '$60,000 - $100,000',
        saving: '67-70%'
      },
      {
        name: { zh: '脊柱手术', en: 'Spinal Surgery' },
        price: '$10,000 - $20,000',
        usa: '$40,000 - $80,000',
        saving: '75%'
      }
    ]
  },
  {
    category: { zh: '器官移植', en: 'Organ Transplant' },
    treatments: [
      {
        name: { zh: '肾脏移植', en: 'Kidney Transplant' },
        price: '$50,000 - $70,000',
        usa: '$200,000 - $300,000',
        saving: '75-77%'
      },
      {
        name: { zh: '肝脏移植', en: 'Liver Transplant' },
        price: '$80,000 - $120,000',
        usa: '$300,000 - $500,000',
        saving: '73-76%'
      },
      {
        name: { zh: '肺移植', en: 'Lung Transplant' },
        price: '$70,000 - $100,000',
        usa: '$250,000 - $400,000',
        saving: '72-75%'
      }
    ]
  }
]

const includedServices = [
  { zh: '专家会诊费', en: 'Specialist consultation fees' },
  { zh: '检查检验费', en: 'Examination and test fees' },
  { zh: '手术/治疗费', en: 'Surgery/treatment fees' },
  { zh: '住院费（标准病房）', en: 'Hospitalization (standard ward)' },
  { zh: '药品费', en: 'Medication fees' },
  { zh: '术后随访', en: 'Post-operative follow-up' }
]

const additionalServices = [
  { zh: '国际病房升级', en: 'International ward upgrade', price: { zh: '$200-500/天', en: '$200-500/day' } },
  { zh: '医疗翻译服务', en: 'Medical translation service', price: { zh: '$100-200/次', en: '$100-200/session' } },
  { zh: '家属住宿安排', en: 'Family accommodation', price: { zh: '$50-150/天', en: '$50-150/day' } },
  { zh: '机场接送服务', en: 'Airport transfer', price: { zh: '$50-100/次', en: '$50-100/session' } }
]

export default function PricingPage() {
  const { locale, t } = useI18n()

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#CC0000]/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {locale === 'zh' ? '透明定价，安心医疗' : 'Transparent Pricing, Peace of Mind'}
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {locale === 'zh' 
                ? '比西方节省 30-70%，零隐藏费用，零等待时间。所有价格均包含完整治疗方案。'
                : 'Save 30-70% compared to Western countries, zero hidden fees, zero wait time. All prices include complete treatment plans.'}
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-[#1a1a1a] border border-gray-800 rounded-xl">
              <DollarSign className="w-12 h-12 text-[#CC0000] mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">30-70%</div>
              <div className="text-gray-400">{locale === 'zh' ? '费用节省' : 'Cost Savings'}</div>
            </div>
            <div className="text-center p-6 bg-[#1a1a1a] border border-gray-800 rounded-xl">
              <Percent className="w-12 h-12 text-[#CC0000] mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">0</div>
              <div className="text-gray-400">{locale === 'zh' ? '隐藏费用' : 'Hidden Fees'}</div>
            </div>
            <div className="text-center p-6 bg-[#1a1a1a] border border-gray-800 rounded-xl">
              <Shield className="w-12 h-12 text-[#CC0000] mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-400">{locale === 'zh' ? '价格透明' : 'Price Transparency'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {pricingCategories.map((category, idx) => (
            <div key={idx} className="mb-16 last:mb-0">
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
                <div className="w-2 h-8 bg-[#CC0000] mr-4 rounded" />
                {locale === 'zh' ? category.category.zh : category.category.en}
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-4 px-6 text-gray-400 font-medium">
                        {locale === 'zh' ? '治疗项目' : 'Treatment'}
                      </th>
                      <th className="text-left py-4 px-6 text-[#CC0000] font-bold">
                        {locale === 'zh' ? '中国费用' : 'China Cost'}
                      </th>
                      <th className="text-left py-4 px-6 text-gray-400 font-medium">
                        {locale === 'zh' ? '美国费用' : 'USA Cost'}
                      </th>
                      <th className="text-left py-4 px-6 text-green-500 font-bold">
                        {locale === 'zh' ? '节省' : 'Savings'}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.treatments.map((treatment, tIdx) => (
                      <tr 
                        key={tIdx} 
                        className="border-b border-gray-800 hover:bg-[#1a1a1a] transition-colors"
                      >
                        <td className="py-4 px-6 text-white font-medium">
                          {locale === 'zh' ? treatment.name.zh : treatment.name.en}
                        </td>
                        <td className="py-4 px-6 text-[#CC0000] font-bold">
                          {treatment.price}
                        </td>
                        <td className="py-4 px-6 text-gray-400">
                          {treatment.usa}
                        </td>
                        <td className="py-4 px-6 text-green-500 font-bold">
                          {treatment.saving}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Included Services */}
      <section className="py-20 bg-[#111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {locale === 'zh' ? '价格包含服务' : 'Included Services'}
            </h2>
            <p className="text-gray-400">
              {locale === 'zh' 
                ? '所有治疗费用均包含以下完整服务'
                : 'All treatment costs include the following complete services'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {includedServices.map((service, idx) => (
              <div 
                key={idx}
                className="flex items-center p-4 bg-[#1a1a1a] border border-gray-800 rounded-lg"
              >
                <CheckCircle className="w-5 h-5 text-[#CC0000] mr-3 flex-shrink-0" />
                <span className="text-gray-300">
                  {locale === 'zh' ? service.zh : service.en}
                </span>
              </div>
            ))}
          </div>

          {/* Additional Services */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              {locale === 'zh' ? '可选增值服务' : 'Optional Additional Services'}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {additionalServices.map((service, idx) => (
                <div 
                  key={idx}
                  className="p-6 bg-[#1a1a1a] border border-gray-800 rounded-lg text-center hover:border-[#CC0000]/50 transition-all"
                >
                  <div className="text-white font-medium mb-2">
                    {locale === 'zh' ? service.zh : service.en}
                  </div>
                  <div className="text-[#CC0000] font-bold">
                    {locale === 'zh' ? service.price.zh : service.price.en}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Payment Info */}
      <section className="py-20 bg-gradient-to-r from-[#CC0000]/20 to-[#990000]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {locale === 'zh' ? '支付方式与保险' : 'Payment Methods & Insurance'}
            </h2>
            <p className="text-gray-300">
              {locale === 'zh' 
                ? '支持多种国际支付方式，可协助保险理赔'
                : 'Support multiple international payment methods, can assist with insurance claims'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-[#1a1a1a]/50 backdrop-blur-sm border border-gray-800 rounded-xl">
              <FileText className="w-10 h-10 text-[#CC0000] mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">
                {locale === 'zh' ? '支付方式' : 'Payment Methods'}
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>• {locale === 'zh' ? '银行转账' : 'Bank Transfer'}</li>
                <li>• {locale === 'zh' ? '信用卡/借记卡' : 'Credit/Debit Card'}</li>
                <li>• {locale === 'zh' ? '支付宝/微信支付' : 'Alipay/WeChat Pay'}</li>
                <li>• {locale === 'zh' ? '现金支付' : 'Cash Payment'}</li>
              </ul>
            </div>

            <div className="p-6 bg-[#1a1a1a]/50 backdrop-blur-sm border border-gray-800 rounded-xl">
              <Shield className="w-10 h-10 text-[#CC0000] mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">
                {locale === 'zh' ? '保险支持' : 'Insurance Support'}
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>• {locale === 'zh' ? '200+ 国际保险公司直付' : '200+ International insurance direct billing'}</li>
                <li>• {locale === 'zh' ? '保险理赔文件协助' : 'Insurance claim documentation assistance'}</li>
                <li>• {locale === 'zh' ? '预先费用评估' : 'Pre-treatment cost estimation'}</li>
                <li>• {locale === 'zh' ? '分期付款方案' : 'Installment payment plans'}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
