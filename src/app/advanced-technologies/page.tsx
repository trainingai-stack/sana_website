'use client'

import { Dna, Target, Zap, Activity, CheckCircle, TrendingUp } from 'lucide-react'
import { useI18n } from '@/i18n/context'

const technologies = [
  {
    icon: Dna,
    slug: 'car-t',
    title: { zh: 'CAR-T 细胞免疫疗法', en: 'CAR-T Cell Immunotherapy' },
    subtitle: { zh: '嵌合抗原受体 T 细胞疗法', en: 'Chimeric Antigen Receptor T-Cell Therapy' },
    description: {
      zh: '通过基因工程改造患者自身免疫细胞，精准识别并消灭癌细胞。在血液肿瘤治疗中取得突破性进展，完全缓解率高达 90%。',
      en: 'Genetically engineer patient immune cells to precisely identify and destroy cancer cells. Breakthrough progress in blood tumor treatment with up to 90% complete remission rate.'
    },
    features: [
      { zh: '个体化定制治疗', en: 'Personalized custom treatment' },
      { zh: '精准识别癌细胞', en: 'Precise cancer cell recognition' },
      { zh: '持久免疫记忆', en: 'Long-lasting immune memory' },
      { zh: '90% 早期癌症治愈率', en: '90% early cancer cure rate' }
    ],
    applications: [
      { zh: 'B 细胞淋巴瘤', en: 'B-cell Lymphoma' },
      { zh: '急性淋巴细胞白血病', en: 'Acute Lymphoblastic Leukemia' },
      { zh: '多发性骨髓瘤', en: 'Multiple Myeloma' },
      { zh: '慢性淋巴细胞白血病', en: 'Chronic Lymphocytic Leukemia' }
    ],
    stats: {
      successRate: '90%',
      recoveryTime: { zh: '2-3 周', en: '2-3 weeks' },
      hospitals: '50+'
    }
  },
  {
    icon: Target,
    slug: 'proton-therapy',
    title: { zh: '质子/重离子治疗', en: 'Proton/Heavy Ion Therapy' },
    subtitle: { zh: '精准放射治疗技术', en: 'Precision Radiotherapy Technology' },
    description: {
      zh: '利用质子或碳离子束精准照射肿瘤，保护周围健康组织。副作用更低，疗效更好，特别适用于儿童肿瘤和靠近重要器官的肿瘤。',
      en: 'Use proton or carbon ion beams to precisely irradiate tumors while protecting surrounding healthy tissue. Lower side effects, better efficacy, especially suitable for pediatric tumors and tumors near vital organs.'
    },
    features: [
      { zh: '精准靶向治疗', en: 'Precise targeted therapy' },
      { zh: '保护健康组织', en: 'Protect healthy tissue' },
      { zh: '副作用显著降低', en: 'Significantly reduced side effects' },
      { zh: '门诊治疗无需住院', en: 'Outpatient treatment, no hospitalization' }
    ],
    applications: [
      { zh: '脑部肿瘤', en: 'Brain Tumors' },
      { zh: '头颈部肿瘤', en: 'Head and Neck Tumors' },
      { zh: '前列腺癌', en: 'Prostate Cancer' },
      { zh: '儿童肿瘤', en: 'Pediatric Tumors' }
    ],
    stats: {
      successRate: '95%',
      recoveryTime: { zh: '当天回家', en: 'Same day' },
      sessions: '5-30 次'
    }
  },
  {
    icon: Zap,
    slug: 'robotic-surgery',
    title: { zh: '达芬奇机器人手术', en: 'Da Vinci Robotic Surgery' },
    subtitle: { zh: '微创手术系统', en: 'Minimally Invasive Surgical System' },
    description: {
      zh: '全球最先进的微创手术系统，提供 3D 高清视野和超越人手的灵活度。创伤小、出血少、恢复快，已成为多种手术的金标准。',
      en: 'World most advanced minimally invasive surgical system, providing 3D HD vision and flexibility beyond human hands. Small trauma, less bleeding, fast recovery, has become gold standard for many surgeries.'
    },
    features: [
      { zh: '3D 高清放大视野', en: '3D HD magnified vision' },
      { zh: '超灵活机械手臂', en: 'Ultra-flexible robotic arms' },
      { zh: '微创切口恢复快', en: 'Minimally invasive, fast recovery' },
      { zh: '减少术后并发症', en: 'Reduce postoperative complications' }
    ],
    applications: [
      { zh: '泌尿外科手术', en: 'Urologic Surgery' },
      { zh: '妇科手术', en: 'Gynecologic Surgery' },
      { zh: '普外科手术', en: 'General Surgery' },
      { zh: '心胸外科手术', en: 'Cardiothoracic Surgery' }
    ],
    stats: {
      successRate: '99%',
      recoveryTime: { zh: '1-2 周', en: '1-2 weeks' },
      procedures: '500+'
    }
  },
  {
    icon: Activity,
    slug: 'organ-transplant',
    title: { zh: '器官移植', en: 'Organ Transplantation' },
    subtitle: { zh: '终末期疾病治疗方案', en: 'End-Stage Disease Treatment' },
    description: {
      zh: '心脏、肝脏、肾脏、肺脏等多器官移植，国际领先的存活率。完善的器官分配系统和术后抗排斥治疗管理。',
      en: 'Multi-organ transplantation including heart, liver, kidney, lung. International leading survival rates. Complete organ allocation system and post-operative anti-rejection management.'
    },
    features: [
      { zh: '国际领先存活率', en: 'International leading survival rate' },
      { zh: '完善器官分配系统', en: 'Complete organ allocation system' },
      { zh: '终身随访管理', en: 'Lifetime follow-up management' },
      { zh: '多学科协作团队', en: 'Multidisciplinary team' }
    ],
    applications: [
      { zh: '终末期心脏病', en: 'End-Stage Heart Disease' },
      { zh: '终末期肝病', en: 'End-Stage Liver Disease' },
      { zh: '终末期肾病', en: 'End-Stage Kidney Disease' },
      { zh: '终末期肺病', en: 'End-Stage Lung Disease' }
    ],
    stats: {
      successRate: '95%',
      recoveryTime: { zh: '3-6 个月', en: '3-6 months' },
      transplants: '1000+'
    }
  }
]

const comparisonData = [
  {
    treatment: { zh: 'CAR-T 治疗', en: 'CAR-T Therapy' },
    china: '$150,000',
    usa: '$450,000',
    saving: '67%'
  },
  {
    treatment: { zh: '质子治疗（全程）', en: 'Proton Therapy (Full Course)' },
    china: '$39,000',
    usa: '$120,000',
    saving: '68%'
  },
  {
    treatment: { zh: '达芬奇手术', en: 'Da Vinci Surgery' },
    china: '$20,000',
    usa: '$60,000',
    saving: '67%'
  },
  {
    treatment: { zh: '心脏移植', en: 'Heart Transplant' },
    china: '$80,000',
    usa: '$250,000',
    saving: '68%'
  }
]

export default function AdvancedTechnologiesPage() {
  const { locale, t } = useI18n()

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#CC0000]/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {locale === 'zh' ? '先进治疗技术' : 'Advanced Treatment Technologies'}
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {locale === 'zh' 
                ? '汇聚全球尖端医疗技术，为中国医疗树立新标杆。比西方节省 30-70% 费用，零等待时间。'
                : 'Gathering global cutting-edge medical technologies, setting new standards for Chinese healthcare. Save 30-70% compared to Western countries, zero wait time.'}
            </p>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {technologies.map((tech, idx) => {
            const Icon = tech.icon
            return (
              <div 
                key={tech.slug}
                className={`mb-20 last:mb-0 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center mb-6">
                      <Icon className="w-12 h-12 text-[#CC0000] mr-4" />
                      <div>
                        <h2 className="text-3xl font-bold text-white mb-1">
                          {locale === 'zh' ? tech.title.zh : tech.title.en}
                        </h2>
                        <p className="text-gray-400">
                          {locale === 'zh' ? tech.subtitle.zh : tech.subtitle.en}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-8 leading-relaxed">
                      {locale === 'zh' ? tech.description.zh : tech.description.en}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {tech.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-[#CC0000] mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">
                            {locale === 'zh' ? feature.zh : feature.en}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-8">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#CC0000]">{tech.stats.successRate}</div>
                        <div className="text-xs text-gray-500">{locale === 'zh' ? '成功率' : 'Success Rate'}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#CC0000]">{locale === 'zh' ? tech.stats.recoveryTime.zh : tech.stats.recoveryTime.en}</div>
                        <div className="text-xs text-gray-500">{locale === 'zh' ? '恢复时间' : 'Recovery'}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#CC0000]">{tech.stats.hospitals || tech.stats.sessions || tech.stats.procedures || tech.stats.transplants}</div>
                        <div className="text-xs text-gray-500">{locale === 'zh' ? '开展医院' : 'Hospitals'}</div>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#CC0000]/20 to-transparent rounded-2xl" />
                    <div className="relative bg-[#1a1a1a] border border-gray-800 rounded-2xl p-8">
                      <h3 className="text-xl font-semibold text-white mb-6">
                        {locale === 'zh' ? '适应症' : 'Applications'}
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        {tech.applications.map((app, aIdx) => (
                          <div 
                            key={aIdx}
                            className="p-4 bg-[#2a2a2a] rounded-lg hover:bg-[#333] transition-colors"
                          >
                            <p className="text-white text-sm">
                              {locale === 'zh' ? app.zh : app.en}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Cost Comparison Section */}
      <section className="py-20 bg-[#111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {locale === 'zh' ? '费用对比' : 'Cost Comparison'}
            </h2>
            <p className="text-gray-400">
              {locale === 'zh' 
                ? '比西方私立医疗节省 30-70%，零等待时间'
                : 'Save 30-70% compared to Western private healthcare, zero wait time'}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-4 px-6 text-gray-400 font-medium">
                    {locale === 'zh' ? '治疗项目' : 'Treatment'}
                  </th>
                  <th className="text-left py-4 px-6 text-gray-400 font-medium">
                    {locale === 'zh' ? '中国费用' : 'China Cost'}
                  </th>
                  <th className="text-left py-4 px-6 text-gray-400 font-medium">
                    {locale === 'zh' ? '美国费用' : 'USA Cost'}
                  </th>
                  <th className="text-left py-4 px-6 text-[#CC0000] font-bold">
                    {locale === 'zh' ? '节省比例' : 'Savings'}
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, idx) => (
                  <tr key={idx} className="border-b border-gray-800 hover:bg-[#1a1a1a] transition-colors">
                    <td className="py-4 px-6 text-white font-medium">
                      {locale === 'zh' ? item.treatment.zh : item.treatment.en}
                    </td>
                    <td className="py-4 px-6 text-white">
                      {item.china}
                    </td>
                    <td className="py-4 px-6 text-gray-400">
                      {item.usa}
                    </td>
                    <td className="py-4 px-6 text-[#CC0000] font-bold">
                      {item.saving}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#CC0000]/20 to-[#990000]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {locale === 'zh' ? '获取治疗方案咨询' : 'Get Treatment Consultation'}
          </h2>
          <p className="text-gray-300 mb-8">
            {locale === 'zh' 
              ? '72 小时内获得专家治疗方案确认，专业医疗团队为您定制最佳方案'
              : 'Get expert treatment plan confirmation within 72 hours, professional medical team customizes best plan for you'}
          </p>
          <button className="px-8 py-4 bg-[#CC0000] hover:bg-[#A30000] text-white font-semibold rounded-lg transition-colors inline-flex items-center">
            {locale === 'zh' ? '免费咨询' : 'Free Consultation'}
            <TrendingUp className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>

    </>
  )
}
