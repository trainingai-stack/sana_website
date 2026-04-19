'use client'

import {
  ArrowRight,
  BadgeDollarSign,
  ChevronRight,
  ClipboardList,
  CreditCard,
  FileText,
  HandCoins,
  Hospital,
  Receipt,
  ShieldCheck,
  Wallet,
} from 'lucide-react'
import { useI18n } from '@/i18n/context'

type LocalizedText = {
  zh: string
  en: string
}

const summaryCards = [
  {
    value: {
      zh: '病例资料',
      en: 'Review first',
    },
    label: {
      zh: '预算评估以病例和检查资料为基础',
      en: 'We confirm the case and hospital direction before estimating the budget',
    },
  },
  {
    value: {
      zh: '医院科室',
      en: 'Staged budgeting',
    },
    label: {
      zh: '预算确认与医院、科室和接诊安排同步推进',
      en: 'Consultation, testing, admission, and follow-up are usually confirmed in stages',
    },
  },
  {
    value: {
      zh: '治疗安排',
      en: 'Actual-item basis',
    },
    label: {
      zh: '门诊、检查、住院和治疗费用按实际安排确认',
      en: 'The total depends on the hospital, plan, admission days, and service setup',
    },
  },
  {
    value: {
      zh: '费用清单',
      en: 'Cost breakdown',
    },
    label: {
      zh: '可协助整理分项费用、付款节点和票据资料',
      en: 'We can help organize cost items, payment timing, and receipts',
    },
  },
] as const

const pricingNotes = [
  {
    icon: ClipboardList,
    title: {
      zh: '费用评估依据',
      en: 'Budget is not a fixed table',
    },
    desc: {
      zh: '费用评估以病例资料、医院层级、科室安排、治疗方式和住院计划为基础，不按单一病种统一报价。',
      en: 'Cross-border medical budgets cannot be decided by the disease name alone. Admission, surgery, hospital level, physician scheduling, and treatment stage all affect the final cost.',
    },
  },
  {
    icon: ShieldCheck,
    title: {
      zh: '预算确认流程',
      en: 'Range first, then detail',
    },
    desc: {
      zh: '在医院和科室确认前，先提供预算范围；确认后，再按门诊、检查、住院、治疗和配套服务分别说明。',
      en: 'Before the case and hospital direction are confirmed, we usually provide a broad range first. After the hospital and specialty are confirmed, we break down consultations, tests, admission, and support services in more detail.',
    },
  },
  {
    icon: FileText,
    title: {
      zh: '费用清单说明',
      en: 'The explanation should be usable',
    },
    desc: {
      zh: '费用说明按项目构成、付款节点和后续费用整理，便于客户确认预算和付款安排。',
      en: 'What matters most is not terminology, but where the money goes, when it is paid, and whether more items may follow. That is how we organize the explanation.',
    },
  },
] as const

const costItems = [
  {
    icon: Hospital,
    title: {
      zh: '医院医疗费用',
      en: 'Hospital medical costs',
    },
    bullets: [
      {
        zh: '门诊挂号、专家门诊、会诊',
        en: 'Registration, specialist consultations, and case conferences',
      },
      {
        zh: '影像、化验、病理、功能检查',
        en: 'Imaging, labs, pathology, and functional testing',
      },
      {
        zh: '手术、治疗、住院、药品和耗材',
        en: 'Surgery, treatment, admission, medication, and medical supplies',
      },
    ],
  },
  {
    icon: HandCoins,
    title: {
      zh: '非医疗配套费用',
      en: 'Non-medical support costs',
    },
    bullets: [
      {
        zh: '接送、住宿、翻译和陪同安排',
        en: 'Pickup, lodging, interpretation, and accompaniment',
      },
      {
        zh: '签证支持、资料整理和行程衔接',
        en: 'Visa support, document preparation, and itinerary coordination',
      },
      {
        zh: '家属同行时的住宿和交通安排',
        en: 'Lodging and transport setup when family members travel together',
      },
    ],
  },
  {
    icon: BadgeDollarSign,
    title: {
      zh: '后续阶段费用',
      en: 'Later-stage costs',
    },
    bullets: [
      {
        zh: '术后复查、复诊和阶段性复评',
        en: 'Post-op rechecks, follow-up visits, and stage reviews',
      },
      {
        zh: '继续治疗、换药或延长住院',
        en: 'Continued treatment, medication changes, or longer admission',
      },
      {
        zh: '回国后的远程随访和资料回传',
        en: 'Remote follow-up and file return after the patient goes home',
      },
    ],
  },
] as const

const budgetFactors = [
  {
    title: {
      zh: '病例本身',
      en: 'The case itself',
    },
    desc: {
      zh: '同一种疾病，不同阶段、不同既往治疗经历，费用差别会很大。',
      en: 'Even within the same disease type, different stages and treatment histories can change the budget significantly.',
    },
  },
  {
    title: {
      zh: '医院和科室',
      en: 'Hospital and specialty',
    },
    desc: {
      zh: '综合医院、专科医院、国际医疗部和普通门诊，费用结构通常不一样。',
      en: 'General hospitals, specialist centers, international units, and standard clinics usually have different cost structures.',
    },
  },
  {
    title: {
      zh: '治疗方式',
      en: 'Treatment method',
    },
    desc: {
      zh: '门诊评估、系统检查、手术、住院和长期治疗的费用节点完全不同。',
      en: 'Outpatient assessment, systematic testing, surgery, admission, and long-term treatment each follow a different budget logic.',
    },
  },
  {
    title: {
      zh: '停留时间',
      en: 'Length of stay',
    },
    desc: {
      zh: '在华停留天数、是否需要复查、家属是否同行，都会影响总预算。',
      en: 'The stay length, need for rechecks, and whether family members travel together all affect the total budget.',
    },
  },
] as const

const stageBudgets = [
  {
    title: {
      zh: '门诊评估阶段',
      en: 'Consultation stage',
    },
    bullets: [
      {
        zh: '主要看门诊、专家会诊和初步检查安排',
        en: 'Usually focused on consultation, specialist review, and the first test plan',
      },
      {
        zh: '适合还在确认医院方向或是否需要进一步治疗的客户',
        en: 'Suitable when the hospital direction is still being confirmed',
      },
    ],
  },
  {
    title: {
      zh: '检查完善阶段',
      en: 'Testing stage',
    },
    bullets: [
      {
        zh: '主要看影像、病理、化验和专科检查项目',
        en: 'Usually focused on imaging, pathology, labs, and specialty testing',
      },
      {
        zh: '适合资料不完整或需要重新评估方案的客户',
        en: 'Suitable when files are incomplete or the case needs re-evaluation',
      },
    ],
  },
  {
    title: {
      zh: '住院治疗阶段',
      en: 'Admission and treatment stage',
    },
    bullets: [
      {
        zh: '主要看住院天数、手术或治疗方案、药品和耗材',
        en: 'Usually focused on admission days, surgery or treatment plan, medication, and supplies',
      },
      {
        zh: '这一阶段费用变化最大，需要按医院安排单独确认',
        en: 'This stage changes the most and should be confirmed with the hospital plan',
      },
    ],
  },
  {
    title: {
      zh: '复查与回国后阶段',
      en: 'Recheck and post-return stage',
    },
    bullets: [
      {
        zh: '主要看复诊、复查、资料整理和远程随访',
        en: 'Usually focused on follow-up visits, rechecks, file packaging, and remote follow-up',
      },
      {
        zh: '适合需要继续观察、阶段性回传资料的客户',
        en: 'Suitable for patients who still need observation and staged follow-up',
      },
    ],
  },
] as const

const referencePricing = [
  {
    category: {
      zh: '肿瘤治疗',
      en: 'Oncology',
    },
    items: [
      {
        name: {
          zh: 'CAR-T 细胞治疗',
          en: 'CAR-T Cell Therapy',
        },
        china: '$150,000 - $200,000',
        overseas: '$450,000',
        difference: '55-67%',
      },
      {
        name: {
          zh: '质子治疗（全程）',
          en: 'Proton Therapy (Full Course)',
        },
        china: '$35,000 - $45,000',
        overseas: '$120,000',
        difference: '63-71%',
      },
      {
        name: {
          zh: '重离子治疗',
          en: 'Heavy Ion Therapy',
        },
        china: '$40,000 - $50,000',
        overseas: '$130,000',
        difference: '62-69%',
      },
      {
        name: {
          zh: '靶向治疗（月）',
          en: 'Targeted Therapy (Monthly)',
        },
        china: '$2,000 - $5,000',
        overseas: '$10,000 - $15,000',
        difference: '67-80%',
      },
    ],
  },
  {
    category: {
      zh: '心血管',
      en: 'Cardiology',
    },
    items: [
      {
        name: {
          zh: '心脏支架手术',
          en: 'Cardiac Stent Surgery',
        },
        china: '$8,000 - $15,000',
        overseas: '$30,000 - $50,000',
        difference: '70-73%',
      },
      {
        name: {
          zh: '心脏搭桥手术',
          en: 'Heart Bypass Surgery',
        },
        china: '$20,000 - $30,000',
        overseas: '$80,000 - $150,000',
        difference: '75-80%',
      },
      {
        name: {
          zh: 'TAVR 瓣膜置换',
          en: 'TAVR Valve Replacement',
        },
        china: '$25,000 - $35,000',
        overseas: '$80,000 - $120,000',
        difference: '69-71%',
      },
      {
        name: {
          zh: '心脏移植',
          en: 'Heart Transplant',
        },
        china: '$80,000 - $120,000',
        overseas: '$250,000 - $400,000',
        difference: '68-70%',
      },
    ],
  },
  {
    category: {
      zh: '神经系统',
      en: 'Neurology',
    },
    items: [
      {
        name: {
          zh: '脑肿瘤切除',
          en: 'Brain Tumor Resection',
        },
        china: '$15,000 - $25,000',
        overseas: '$50,000 - $100,000',
        difference: '70-75%',
      },
      {
        name: {
          zh: 'DBS 脑起搏器',
          en: 'Deep Brain Stimulation',
        },
        china: '$20,000 - $30,000',
        overseas: '$60,000 - $100,000',
        difference: '67-70%',
      },
      {
        name: {
          zh: '脊柱手术',
          en: 'Spinal Surgery',
        },
        china: '$10,000 - $20,000',
        overseas: '$40,000 - $80,000',
        difference: '75%',
      },
    ],
  },
  {
    category: {
      zh: '器官移植',
      en: 'Organ Transplant',
    },
    items: [
      {
        name: {
          zh: '肾脏移植',
          en: 'Kidney Transplant',
        },
        china: '$50,000 - $70,000',
        overseas: '$200,000 - $300,000',
        difference: '75-77%',
      },
      {
        name: {
          zh: '肝脏移植',
          en: 'Liver Transplant',
        },
        china: '$80,000 - $120,000',
        overseas: '$300,000 - $500,000',
        difference: '73-76%',
      },
      {
        name: {
          zh: '肺移植',
          en: 'Lung Transplant',
        },
        china: '$70,000 - $100,000',
        overseas: '$250,000 - $400,000',
        difference: '72-75%',
      },
    ],
  },
] as const

const optionalServices = [
  {
    title: {
      zh: '翻译与陪同',
      en: 'Interpretation and accompaniment',
    },
    desc: {
      zh: '根据语言、到院次数和就诊强度单独安排。',
      en: 'Arranged separately according to language, visit frequency, and intensity of support.',
    },
  },
  {
    title: {
      zh: '住宿与接送',
      en: 'Lodging and pickup',
    },
    desc: {
      zh: '根据医院位置、停留天数和同行人数来安排。',
      en: 'Arranged based on hospital location, stay length, and number of travelers.',
    },
  },
  {
    title: {
      zh: '国际病房或单间需求',
      en: 'International ward or single-room requests',
    },
    desc: {
      zh: '不同医院病房资源不同，需要单独确认。',
      en: 'Room resources vary by hospital and need separate confirmation.',
    },
  },
  {
    title: {
      zh: '签证与资料支持',
      en: 'Visa and document support',
    },
    desc: {
      zh: '根据国家、到院时间和材料完整度来安排。',
      en: 'Arranged based on country, arrival timing, and file completeness.',
    },
  },
] as const

const paymentNotes = [
  {
    icon: CreditCard,
    title: {
      zh: '常见付款方式',
      en: 'Common payment methods',
    },
    bullets: [
      {
        zh: '医院收费窗口或官方付款渠道',
        en: 'Hospital cashier or official payment channels',
      },
      {
        zh: '银行卡、国际信用卡或电子支付',
        en: 'Bank cards, international credit cards, or digital payment',
      },
      {
        zh: '部分服务支持按阶段付款',
        en: 'Some service items can be paid stage by stage',
      },
    ],
  },
  {
    icon: Receipt,
    title: {
      zh: '票据与清单',
      en: 'Invoices and item lists',
    },
    bullets: [
      {
        zh: '医院费用和服务费用会分开整理',
        en: 'Hospital costs and service costs are organized separately',
      },
      {
        zh: '可以协助整理发票、收费清单和付款记录',
        en: 'We can help package invoices, item lists, and payment records',
      },
      {
        zh: '如需保险报销，会提前看需要哪些材料',
        en: 'If insurance reimbursement is needed, we review the required paperwork in advance',
      },
    ],
  },
] as const

const estimateChecklist = [
  {
    zh: '病例资料和最近的检查结果',
    en: 'Medical files and the latest test results',
  },
  {
    zh: '现在最想解决的问题，是确诊、手术、治疗还是复查',
    en: 'The main current goal: diagnosis, surgery, treatment, or recheck',
  },
  {
    zh: '预计来华时间和大概停留天数',
    en: 'Expected arrival date and approximate length of stay',
  },
  {
    zh: '是否有家属同行，是否需要住宿和翻译安排',
    en: 'Whether family will travel together and whether lodging or interpretation is needed',
  },
  {
    zh: '预算边界和对城市、医院方向的基本要求',
    en: 'Budget boundaries and any preference around city or hospital direction',
  },
] as const

const faqs = [
  {
    q: {
      zh: '没有完整资料，可以先做费用预估吗？',
      en: 'Can we get a budget estimate before all files are complete?',
    },
    a: {
      zh: '可以先做大致范围，但不会很细。资料越完整，预算越接近实际安排。',
      en: 'Yes, we can provide a broad range first, but not a precise breakdown. The more complete the files are, the closer the budget will be to the real setup.',
    },
  },
  {
    q: {
      zh: '是不是一定比本地便宜？',
      en: 'Will it always be cheaper than local treatment?',
    },
    a: {
      zh: '不一定。要看医院、治疗方案、停留时间和服务需求。我们会按实际病例来算，不会用固定比例去讲。',
      en: 'Not always. It depends on the hospital, treatment plan, stay length, and support needs. We calculate based on the actual case instead of using a fixed ratio.',
    },
  },
  {
    q: {
      zh: '费用是一次付清，还是分阶段付？',
      en: 'Is payment made all at once or in stages?',
    },
    a: {
      zh: '大多数情况下会按门诊、检查、住院和后续安排分阶段走，不同医院和项目会有差别。',
      en: 'In most cases, payment is made stage by stage across consultation, testing, admission, and later arrangements. The exact setup depends on the hospital and service items.',
    },
  },
  {
    q: {
      zh: '如果医院临时增加检查或治疗怎么办？',
      en: 'What if the hospital adds tests or treatment during the process?',
    },
    a: {
      zh: '这在实际就医中很常见。我们会把新增项目和原因同步给客户，方便你判断是否继续推进。',
      en: 'This is common in real treatment. We will sync the added items and the reason for them so the patient can decide whether to continue.',
    },
  },
] as const

function pick(locale: 'zh' | 'en', text: LocalizedText) {
  return text[locale]
}

export default function PricingPage() {
  const { locale } = useI18n()

  return (
    <main className="min-h-screen bg-[#060606] text-white">
      <section className="relative overflow-hidden pb-20 pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(204,0,0,0.24),transparent_34%),radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_26%),linear-gradient(180deg,#080808_0%,#060606_100%)]" />

        <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
            <div>
              <div className="mb-5 inline-flex items-center rounded-full border border-[#cc0000]/30 bg-[#cc0000]/10 px-4 py-2 text-sm text-[#ffb4b4]">
                {locale === 'zh' ? 'Pricing' : 'Pricing'}
              </div>

              <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-5xl">
                {locale === 'zh' ? '费用说明与预算安排' : 'Cost Notes and Budget Planning'}
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
                {locale === 'zh'
                  ? '费用评估以病例资料、医院科室安排和治疗计划为基础。医院方向确认前，先提供预算范围；医院和科室确认后，再按门诊、检查、住院、治疗及配套服务提供分项说明。'
                  : 'Cross-border medical care does not follow one fixed price list. We usually review the case, hospital direction, and treatment goal first, then return a budget range. This page explains how the budget is built, what changes the total, and how payment is usually handled.'}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="mailto:support@sanain.com"
                  className="inline-flex items-center justify-center rounded-full bg-[#cc0000] px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#a30000]"
                >
                  <Wallet className="mr-2 h-4 w-4" />
                  {locale === 'zh' ? '提交病例做预算评估' : 'Submit a Case for Budget Review'}
                </a>
                <a
                  href="/service-process"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:border-[#cc0000]/40 hover:text-[#ffd0d0]"
                >
                  {locale === 'zh' ? '查看服务流程' : 'View Service Process'}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-md">
              <p className="mb-3 text-sm uppercase tracking-[0.24em] text-[#cc0000]">
                {locale === 'zh' ? '费用说明' : 'Pricing Notes'}
              </p>
              <h2 className="mb-5 text-2xl font-semibold leading-tight">
                {locale === 'zh' ? '费用评估说明' : 'These three points come first'}
              </h2>
              <div className="space-y-4">
                {pricingNotes.map((item) => {
                  const Icon = item.icon

                  return (
                    <div
                      key={item.title.en}
                      className="rounded-2xl border border-white/8 bg-black/20 p-4"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#cc0000]/12 text-[#cc0000]">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-base font-semibold text-white">
                            {pick(locale, item.title)}
                          </h3>
                          <p className="mt-1 text-sm leading-7 text-white/68">
                            {pick(locale, item.desc)}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {summaryCards.map((item) => (
              <div
                key={`${item.value.en}-${item.label.en}`}
                className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md"
              >
                <div className="mb-2 text-xl font-bold text-[#cc0000]">
                  {pick(locale, item.value)}
                </div>
                <div className="text-sm leading-7 text-white/70">
                  {pick(locale, item.label)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-[#0d0d0d] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.24em] text-[#cc0000]">
              {locale === 'zh' ? '费用构成' : 'Cost Structure'}
            </p>
            <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
              {locale === 'zh' ? '总费用通常由这几部分组成' : 'The total budget usually comes from these parts'}
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {costItems.map((item) => {
              const Icon = item.icon

              return (
                <article
                  key={item.title.en}
                  className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_14px_40px_rgba(0,0,0,0.2)]"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#cc0000]/12 text-[#cc0000]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-4 text-lg font-semibold text-white">
                    {pick(locale, item.title)}
                  </h3>
                  <div className="grid gap-3">
                    {item.bullets.map((bullet) => (
                      <div
                        key={bullet.en}
                        className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4 text-sm leading-7 text-white/68"
                      >
                        {pick(locale, bullet)}
                      </div>
                    ))}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.24em] text-[#cc0000]">
              {locale === 'zh' ? '参考费用' : 'Reference Pricing'}
            </p>
            <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
              {locale === 'zh' ? '常见项目参考费用' : 'Reference pricing for common treatments'}
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/65">
              {locale === 'zh'
                ? '以下价格为常见项目参考区间，便于客户先建立预算概念。实际费用仍需结合病例、医院、治疗方案和住院安排确认。'
                : 'The figures below are reference ranges for common treatments. Final pricing still depends on the case, hospital, treatment plan, and admission arrangement.'}
            </p>
          </div>

          <div className="space-y-10">
            {referencePricing.map((group) => (
              <section key={group.category.en}>
                <h3 className="mb-5 text-2xl font-semibold text-white">
                  {pick(locale, group.category)}
                </h3>
                <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#101010] shadow-[0_18px_55px_rgba(0,0,0,0.22)]">
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead>
                        <tr className="border-b border-white/10 bg-white/[0.03]">
                          <th className="px-6 py-4 text-left text-sm font-medium text-white/60">
                            {locale === 'zh' ? '项目' : 'Treatment'}
                          </th>
                          <th className="px-6 py-4 text-left text-sm font-medium text-[#cc0000]">
                            {locale === 'zh' ? '中国参考费用' : 'China Reference'}
                          </th>
                          <th className="px-6 py-4 text-left text-sm font-medium text-white/60">
                            {locale === 'zh' ? '海外参考费用' : 'Overseas Reference'}
                          </th>
                          <th className="px-6 py-4 text-left text-sm font-medium text-emerald-400">
                            {locale === 'zh' ? '差异参考' : 'Difference'}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {group.items.map((item) => (
                          <tr
                            key={item.name.en}
                            className="border-b border-white/8 last:border-b-0"
                          >
                            <td className="px-6 py-4 text-sm font-medium text-white">
                              {pick(locale, item.name)}
                            </td>
                            <td className="px-6 py-4 text-sm font-semibold text-[#cc0000]">
                              {item.china}
                            </td>
                            <td className="px-6 py-4 text-sm text-white/68">
                              {item.overseas}
                            </td>
                            <td className="px-6 py-4 text-sm font-semibold text-emerald-400">
                              {item.difference}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
            <div className="rounded-[32px] border border-white/10 bg-[#101010] p-8 shadow-[0_18px_55px_rgba(0,0,0,0.22)]">
              <p className="mb-3 text-sm uppercase tracking-[0.24em] text-[#cc0000]">
                {locale === 'zh' ? '影响预算的因素' : 'Budget Factors'}
              </p>
              <h2 className="mb-6 text-3xl font-semibold leading-tight">
                {locale === 'zh' ? '这些因素会直接影响预算' : 'These factors directly change the budget'}
              </h2>

              <div className="space-y-4">
                {budgetFactors.map((item) => (
                  <article
                    key={item.title.en}
                    className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5"
                  >
                    <h3 className="mb-3 text-xl font-semibold text-white">
                      {pick(locale, item.title)}
                    </h3>
                    <p className="text-sm leading-7 text-white/68">{pick(locale, item.desc)}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-[#101010] p-8 shadow-[0_18px_55px_rgba(0,0,0,0.22)]">
              <p className="mb-3 text-sm uppercase tracking-[0.24em] text-[#cc0000]">
                {locale === 'zh' ? '分阶段预算' : 'Stage-Based Budget'}
              </p>
              <h2 className="mb-6 text-3xl font-semibold leading-tight">
                {locale === 'zh' ? '我们通常按阶段给预算' : 'We usually explain the budget by stage'}
              </h2>

              <div className="space-y-4">
                {stageBudgets.map((item) => (
                  <article
                    key={item.title.en}
                    className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5"
                  >
                    <h3 className="mb-4 text-xl font-semibold text-white">
                      {pick(locale, item.title)}
                    </h3>
                    <div className="grid gap-3">
                      {item.bullets.map((bullet) => (
                        <div
                          key={bullet.en}
                          className="rounded-2xl border border-white/8 bg-black/15 px-4 py-4 text-sm leading-7 text-white/72"
                        >
                          {pick(locale, bullet)}
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-[#0d0d0d] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <div className="rounded-[32px] border border-white/10 bg-[#101010] p-8 shadow-[0_18px_55px_rgba(0,0,0,0.22)]">
              <p className="mb-3 text-sm uppercase tracking-[0.24em] text-[#cc0000]">
                {locale === 'zh' ? '可选服务' : 'Optional Services'}
              </p>
              <h2 className="mb-6 text-3xl font-semibold leading-tight">
                {locale === 'zh' ? '这些项目通常会单独安排' : 'These items are usually arranged separately'}
              </h2>

              <div className="grid gap-4">
                {optionalServices.map((item) => (
                  <article
                    key={item.title.en}
                    className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5"
                  >
                    <h3 className="mb-2 text-lg font-semibold text-white">
                      {pick(locale, item.title)}
                    </h3>
                    <p className="text-sm leading-7 text-white/68">{pick(locale, item.desc)}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-[#101010] p-8 shadow-[0_18px_55px_rgba(0,0,0,0.22)]">
              <p className="mb-3 text-sm uppercase tracking-[0.24em] text-[#cc0000]">
                {locale === 'zh' ? '付款与票据' : 'Payment and Receipts'}
              </p>
              <h2 className="mb-6 text-3xl font-semibold leading-tight">
                {locale === 'zh' ? '付款相关' : 'Payment Information'}
              </h2>

              <div className="space-y-5">
                {paymentNotes.map((item, index) => {
                  const Icon = item.icon

                  return (
                    <article
                      key={item.title.en}
                      className={`rounded-[28px] border p-6 ${
                        index === 0
                          ? 'border-[#cc0000]/20 bg-[#cc0000]/8'
                          : 'border-white/8 bg-white/[0.03]'
                      }`}
                    >
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#cc0000]/12 text-[#cc0000]">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="text-xl font-semibold text-white">
                          {pick(locale, item.title)}
                        </h3>
                      </div>
                      <div className="grid gap-3">
                        {item.bullets.map((bullet) => (
                          <div
                            key={bullet.en}
                            className="rounded-2xl border border-white/8 bg-black/15 px-4 py-4 text-sm leading-7 text-white/72"
                          >
                            {pick(locale, bullet)}
                          </div>
                        ))}
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(340px,0.95fr)]">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.24em] text-[#cc0000]">
                {locale === 'zh' ? '常见问题' : 'FAQ'}
              </p>
              <h2 className="mb-6 text-3xl font-semibold leading-tight md:text-4xl">
                {locale === 'zh' ? '费用相关常见问题' : 'Common questions about pricing'}
              </h2>

              <div className="space-y-4">
                {faqs.map((item) => (
                  <article
                    key={item.q.en}
                    className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6"
                  >
                    <h3 className="mb-3 text-lg font-semibold text-white">
                      {pick(locale, item.q)}
                    </h3>
                    <p className="text-sm leading-7 text-white/70">{pick(locale, item.a)}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-[#cc0000]/20 bg-[linear-gradient(180deg,rgba(204,0,0,0.14),rgba(255,255,255,0.03))] p-8 shadow-[0_18px_55px_rgba(0,0,0,0.22)]">
              <p className="mb-3 text-sm uppercase tracking-[0.24em] text-white/60">Sana</p>
              <h2 className="mb-4 text-3xl font-semibold leading-tight">
                {locale === 'zh' ? '先把这些信息发给我们' : 'Send these details first'}
              </h2>
              <p className="mb-6 text-sm leading-7 text-white/72">
                {locale === 'zh'
                  ? '如果你现在想先看预算范围，不需要一次把所有事都定下来。先把病例、目标、时间和预算边界发来，我们会先帮你把费用结构理清楚。'
                  : 'If you want a first budget range, you do not need to lock every detail immediately. Start by sending the case, goal, timing, and budget boundary, and we will first clarify the likely cost structure.'}
              </p>

              <div className="space-y-3">
                {estimateChecklist.map((item) => (
                  <div
                    key={item.en}
                    className="flex items-start gap-3 rounded-2xl border border-white/8 bg-black/20 px-4 py-4"
                  >
                    <ClipboardList className="mt-1 h-4 w-4 shrink-0 text-white" />
                    <p className="text-sm leading-7 text-white/78">{pick(locale, item)}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-4">
                <a
                  href="mailto:support@sanain.com"
                  className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#111111] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <ArrowRight className="mr-2 h-4 w-4" />
                  {locale === 'zh' ? '发送病例资料' : 'Send Medical Files'}
                </a>

                <a
                  href="/hospitals"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/12 bg-black/20 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:border-[#cc0000]/35 hover:text-[#ffd0d0]"
                >
                  {locale === 'zh' ? '查看合作医院' : 'View Partner Hospitals'}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
