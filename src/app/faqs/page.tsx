'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react'
import { useI18n } from '@/i18n/context'

const faqCategories = [
  {
    category: { zh: '医疗服务', en: 'Medical Services' },
    faqs: [
      {
        question: {
          zh: '如何预约中国医院的专家门诊？',
          en: 'How do I make an appointment with a Chinese hospital specialist?'
        },
        answer: {
          zh: '您可以通过我们的在线预约系统或拨打 24 小时服务热线进行预约。我们的医疗顾问会了解您的病情，为您匹配最合适的专家和医院，并安排就诊时间。通常在提交资料后 24-48 小时内即可安排就诊。',
          en: 'You can make an appointment through our online booking system or by calling our 24-hour hotline. Our medical consultants will understand your condition, match you with the most suitable specialist and hospital, and arrange an appointment time. Appointments can usually be arranged within 24-48 hours after submitting your information.'
        }
      },
      {
        question: {
          zh: '可以提供中文以外的语言服务吗？',
          en: 'Can you provide services in languages other than Chinese?'
        },
        answer: {
          zh: '是的，我们提供英语、俄语、阿拉伯语、法语、西班牙语等多种语言的医疗翻译服务。所有主要医院都配备专业医疗翻译，确保您与医生的沟通无障碍。',
          en: 'Yes, we provide medical translation services in multiple languages including English, Russian, Arabic, French, Spanish, and more. All major hospitals are equipped with professional medical translators to ensure barrier-free communication between you and your doctor.'
        }
      },
      {
        question: {
          zh: '中国的医疗技术水平和西方相比如何？',
          en: 'How does China medical technology compare to Western countries?'
        },
        answer: {
          zh: '中国在多个医疗领域已达到或超过国际先进水平，特别是在肿瘤治疗、心血管介入、器官移植、微创手术等领域。中国顶尖医院配备最先进的设备（如质子治疗系统、达芬奇机器人、PET-CT 等），专家经验丰富，手术量大，技术水平国际领先。',
          en: 'China has reached or exceeded international advanced levels in multiple medical fields, especially in oncology, cardiovascular intervention, organ transplantation, and minimally invasive surgery. Top Chinese hospitals are equipped with the most advanced equipment (proton therapy systems, Da Vinci robots, PET-CT, etc.), with experienced experts, high surgical volumes, and internationally leading technical standards.'
        }
      },
      {
        question: {
          zh: '是否需要亲自到中国进行初诊？',
          en: 'Do I need to come to China for initial consultation?'
        },
        answer: {
          zh: '不一定。您可以先通过我们的远程第二诊疗意见服务，提交病历资料后获得中国专家的书面诊疗建议。如需进一步治疗，专家会根据您的情况制定详细的治疗方案，您再决定是否来华就诊。',
          en: 'Not necessarily. You can first use our remote second opinion service to get written treatment recommendations from Chinese experts after submitting your medical records. If further treatment is needed, the expert will develop a detailed treatment plan based on your condition, and you can then decide whether to come to China for treatment.'
        }
      }
    ]
  },
  {
    category: { zh: '费用与保险', en: 'Cost & Insurance' },
    faqs: [
      {
        question: {
          zh: '中国医疗费用比西方便宜多少？',
          en: 'How much cheaper is Chinese medical care compared to Western countries?'
        },
        answer: {
          zh: '总体而言，中国医疗费用比西方私立医疗便宜 30-70%。例如：CAR-T 治疗中国约$15-20 万（美国$45 万），心脏搭桥手术中国约$2-3 万（美国$8-15 万），器官移植中国约$5-12 万（美国$25-50 万）。具体费用因病情和治疗方案而异。',
          en: 'Overall, Chinese medical costs are 30-70% cheaper than Western private healthcare. For example: CAR-T therapy costs about $150-200K in China ($450K in USA), heart bypass surgery $20-30K in China ($80-150K in USA), organ transplantation $50-120K in China ($250-500K in USA). Specific costs vary depending on condition and treatment plan.'
        }
      },
      {
        question: {
          zh: '费用包含哪些项目？是否有隐藏收费？',
          en: 'What does the cost include? Are there hidden charges?'
        },
        answer: {
          zh: '我们的治疗费用透明，包含：专家会诊费、检查检验费、手术/治疗费、住院费（标准病房）、药品费、术后随访。无隐藏收费。可选服务如国际病房升级、医疗翻译、家属住宿等需额外付费，我们会提前告知价格。',
          en: 'Our treatment costs are transparent and include: specialist consultation fees, examination and test fees, surgery/treatment fees, hospitalization (standard ward), medication fees, and post-operative follow-up. No hidden charges. Optional services such as international ward upgrades, medical translation, and family accommodation require additional payment, and we will inform you of prices in advance.'
        }
      },
      {
        question: {
          zh: '支持国际医疗保险吗？',
          en: 'Do you accept international health insurance?'
        },
        answer: {
          zh: '我们与全球 200+ 家国际保险公司合作，支持直接结算（Direct Billing）。如果您持有国际医疗保险，请在预约时告知，我们会协助您办理保险直付手续。如不支持直付，我们也可提供完整的理赔文件协助您报销。',
          en: 'We partner with over 200 international insurance companies and support direct billing. If you have international health insurance, please inform us when making an appointment, and we will assist you with direct billing procedures. If direct billing is not available, we can provide complete claim documentation to assist with reimbursement.'
        }
      },
      {
        question: {
          zh: '可以分期付款吗？',
          en: 'Can I pay in installments?'
        },
        answer: {
          zh: '对于大额治疗费用（如器官移植、肿瘤治疗等），我们提供灵活的分期付款方案。具体分期期数和利率会根据治疗金额和个人情况定制，详情请咨询我们的医疗顾问。',
          en: 'For large treatment costs (such as organ transplantation, cancer treatment, etc.), we offer flexible installment payment plans. Specific installment periods and interest rates will be customized based on treatment amount and individual circumstances. Please consult our medical consultants for details.'
        }
      }
    ]
  },
  {
    category: { zh: '签证与旅行', en: 'Visa & Travel' },
    faqs: [
      {
        question: {
          zh: '如何办理医疗签证？',
          en: 'How do I apply for a medical visa?'
        },
        answer: {
          zh: '我们会为您提供医院出具的正式邀请函和医疗预约确认函，用于申请中国医疗签证（S1/S2 签证）。通常签证审批时间为 5-10 个工作日。如需加急服务，可咨询当地中国使领馆。',
          en: 'We will provide you with an official invitation letter from the hospital and medical appointment confirmation for applying for a Chinese medical visa (S1/S2 visa). Visa processing time is typically 5-10 business days. For expedited service, please consult your local Chinese embassy or consulate.'
        }
      },
      {
        question: {
          zh: '你们提供接机和住宿安排吗？',
          en: 'Do you provide airport pickup and accommodation arrangements?'
        },
        answer: {
          zh: '是的，我们提供全套旅行支持服务，包括：机场接送、医院附近住宿预订（合作酒店享受优惠价格）、就医陪同翻译、日常生活协助等。您也可以在医院国际医疗部住宿，环境舒适且便于就医。',
          en: 'Yes, we provide comprehensive travel support services including: airport transfer, accommodation booking near hospitals (partner hotels enjoy discounted rates), medical accompaniment translation, and daily life assistance. You can also stay at the hospital international medical department, which offers comfortable environment and convenient access to medical care.'
        }
      },
      {
        question: {
          zh: '治疗期间家属可以陪同吗？',
          en: 'Can family members accompany me during treatment?'
        },
        answer: {
          zh: '完全可以。我们鼓励家属陪同患者前来。医院提供家属住宿安排，部分医院还设有家属休息区、厨房等设施。如需为家属办理签证，我们也可提供邀请函。',
          en: 'Absolutely. We encourage family members to accompany patients. Hospitals provide accommodation arrangements for families, and some hospitals have family lounges, kitchens, and other facilities. If visas are needed for family members, we can also provide invitation letters.'
        }
      }
    ]
  },
  {
    category: { zh: '治疗与康复', en: 'Treatment & Recovery' },
    faqs: [
      {
        question: {
          zh: '治疗后需要在中国停留多久？',
          en: 'How long do I need to stay in China after treatment?'
        },
        answer: {
          zh: '停留时间取决于治疗类型。微创手术通常术后 1-2 周即可出院，大手术如器官移植需要 1-3 个月观察期。出院后专家会根据恢复情况建议您是否适合返程，并提供详细的康复指导。',
          en: 'Length of stay depends on treatment type. Minimally invasive surgery typically allows discharge within 1-2 weeks, while major surgeries like organ transplantation require 1-3 months observation period. After discharge, experts will advise whether you are fit to return based on recovery status and provide detailed rehabilitation guidance.'
        }
      },
      {
        question: {
          zh: '回国后如何随访？',
          en: 'How do I follow up after returning home?'
        },
        answer: {
          zh: '我们提供终身随访服务。您可以通过电话、视频、在线平台与主治医生保持联系。医院会定期复查您的恢复情况，并根据需要调整用药方案。如需再次来华复查，我们也会协助安排。',
          en: 'We provide lifetime follow-up services. You can maintain contact with your attending physician via phone, video, or online platforms. The hospital will regularly check your recovery status and adjust medication plans as needed. If you need to return to China for re-examination, we will assist with arrangements.'
        }
      },
      {
        question: {
          zh: '治疗效果有保障吗？',
          en: 'Is treatment effectiveness guaranteed?'
        },
        answer: {
          zh: '医疗存在个体差异，无法保证 100% 治愈。但中国顶尖医院在各自优势领域的成功率均达到国际领先水平（如心脏手术 99% 成功率、器官移植 95% 存活率等）。我们会在治疗前详细评估您的病情，告知预期效果和风险。',
          en: 'Medical treatment has individual variations, and 100% cure cannot be guaranteed. However, top Chinese hospitals achieve international leading success rates in their specialized fields (such as 99% cardiac surgery success rate, 95% organ transplant survival rate, etc.). We will thoroughly evaluate your condition before treatment and inform you of expected outcomes and risks.'
        }
      }
    ]
  }
]

export default function FAQsPage() {
  const { locale } = useI18n()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-[#060606]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <HelpCircle className="w-16 h-16 text-[#CC0000] mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {locale === 'zh' ? '常见问题' : 'Frequently Asked Questions'}
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {locale === 'zh' 
                ? '解答您关于中国医疗的所有疑问'
                : 'Answers to all your questions about Chinese healthcare'}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, catIdx) => (
            <div key={catIdx} className="mb-16 last:mb-0">
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
                <div className="w-2 h-8 bg-[#CC0000] mr-4 rounded" />
                {locale === 'zh' ? category.category.zh : category.category.en}
              </h2>
              <div className="space-y-4">
                {category.faqs.map((faq, faqIdx) => {
                  const isOpen = openIndex === catIdx * 100 + faqIdx
                  return (
                    <div 
                      key={faqIdx}
                      className="bg-[#1a1a1a] border border-gray-800 rounded-xl overflow-hidden hover:border-[#CC0000]/50 transition-all"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : catIdx * 100 + faqIdx)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left"
                      >
                        <span className="text-white font-medium pr-8">
                          {locale === 'zh' ? faq.question.zh : faq.question.en}
                        </span>
                        <ChevronDown 
                          className={`w-5 h-5 text-[#CC0000] transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-5">
                          <div className="pt-2 border-t border-gray-800">
                            <p className="text-gray-400 leading-relaxed">
                              {locale === 'zh' ? faq.answer.zh : faq.answer.en}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-[#CC0000]/20 to-[#990000]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageCircle className="w-16 h-16 text-[#CC0000] mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {locale === 'zh' ? '还有其他问题吗？' : 'Still Have Questions?'}
          </h2>
          <p className="text-gray-300 mb-8">
            {locale === 'zh' 
              ? '我们的医疗顾问 24 小时在线，随时为您解答'
              : 'Our medical consultants are online 24/7 to answer your questions'}
          </p>
          <button className="px-8 py-4 bg-[#CC0000] hover:bg-[#A30000] text-white font-semibold rounded-lg transition-colors inline-flex items-center">
            {locale === 'zh' ? '立即咨询' : 'Consult Now'}
            <MessageCircle className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>

    </div>
  )
}
