'use client'

import { useMemo, useState } from 'react'
import {
  ArrowRight,
  Calendar,
  ChevronRight,
  ClipboardList,
  Filter,
  Globe2,
  Hospital,
  MapPin,
  ShieldCheck,
  Stethoscope,
  Users,
  X,
} from 'lucide-react'
import { useI18n } from '@/i18n/context'

type LocalizedText = {
  zh: string
  en: string
}

type Story = {
  id: number
  category: 'oncology' | 'transplant' | 'neurology' | 'reproductive' | 'orthopedics'
  featured: boolean
  name: LocalizedText
  country: LocalizedText
  age: number
  condition: LocalizedText
  hospital: LocalizedText
  treatment: LocalizedText
  city: LocalizedText
  date: string
  result: LocalizedText
  summary: LocalizedText
  serviceFocus: readonly LocalizedText[]
  timeline: readonly LocalizedText[]
  note: LocalizedText
  mediaClass: string
}

const overviewCards = [
  {
    value: {
      zh: '多病种',
      en: 'Multi-specialty',
    },
    label: {
      zh: '覆盖肿瘤、神经、移植、生殖、骨科等方向',
      en: 'Covering oncology, neurology, transplant, reproductive care, orthopedics, and more',
    },
  },
  {
    value: {
      zh: '多城市',
      en: 'Multi-city',
    },
    label: {
      zh: '案例涉及北京、上海、广州、成都等常见合作城市',
      en: 'Cases include Beijing, Shanghai, Guangzhou, Chengdu, and other common partner cities',
    },
  },
  {
    value: {
      zh: '全流程',
      en: 'Full pathway',
    },
    label: {
      zh: '从病例评估、医院安排到到院衔接和回国后随访',
      en: 'From case review and hospital arrangement to on-site coordination and post-return follow-up',
    },
  },
  {
    value: {
      zh: '已整理',
      en: 'Organized',
    },
    label: {
      zh: '案例已做匿名处理，仅展示服务过程和安排重点',
      en: 'All cases are anonymized and shown for service-process reference only',
    },
  },
] as const

const serviceNotes = [
  {
    icon: ClipboardList,
    title: {
      zh: '案例展示内容',
      en: 'What the case page shows',
    },
    desc: {
      zh: '这一页主要展示病例背景、医院安排、服务动作和阶段结果，方便客户看清楚类似病例通常怎么推进。',
      en: 'This page focuses on case background, hospital arrangement, service actions, and stage outcomes so patients can see how similar cases are usually handled.',
    },
  },
  {
    icon: ShieldCheck,
    title: {
      zh: '案例使用说明',
      en: 'How to read these cases',
    },
    desc: {
      zh: '案例为经整理后的服务案例，不作为统一治疗承诺。不同病例、不同阶段、不同医院，安排和结果都会不同。',
      en: 'These are organized service cases, not uniform treatment promises. Different cases, stages, and hospitals will lead to different arrangements and outcomes.',
    },
  },
  {
    icon: Users,
    title: {
      zh: '适合谁看',
      en: 'Who this page is for',
    },
    desc: {
      zh: '如果你正在判断病例怎么推进、医院怎么选、来华之后会怎么衔接，这一页可以先给你一个实际参考。',
      en: 'If you are evaluating how to move a case forward, how hospitals are chosen, and what happens after arrival, these examples provide a practical reference.',
    },
  },
] as const

const categories = [
  { zh: '全部', en: 'All', value: 'all' },
  { zh: '肿瘤', en: 'Oncology', value: 'oncology' },
  { zh: '移植', en: 'Transplant', value: 'transplant' },
  { zh: '神经系统', en: 'Neurology', value: 'neurology' },
  { zh: '生殖医学', en: 'Reproductive', value: 'reproductive' },
  { zh: '骨科', en: 'Orthopedics', value: 'orthopedics' },
] as const

const patientStories: readonly Story[] = [
  {
    id: 1,
    category: 'oncology',
    featured: true,
    name: { zh: 'Z 先生', en: 'Mr. Z' },
    country: { zh: '马来西亚', en: 'Malaysia' },
    age: 58,
    condition: { zh: '肺部肿瘤治疗评估', en: 'Lung tumor treatment assessment' },
    hospital: {
      zh: '中国医学科学院肿瘤医院',
      en: 'Cancer Hospital, Chinese Academy of Medical Sciences',
    },
    treatment: { zh: '肿瘤专病门诊 + 系统治疗安排', en: 'Oncology clinic + systemic treatment arrangement' },
    city: { zh: '北京', en: 'Beijing' },
    date: '2024-03',
    result: {
      zh: '完成阶段治疗，并进入后续复查管理',
      en: 'Completed stage treatment and moved into follow-up management',
    },
    summary: {
      zh: '客户在当地已经完成多轮检查，希望尽快确认下一步治疗方向。我们先整理病历和影像，再安排肿瘤专病门诊及后续治疗衔接。',
      en: 'The patient had already completed multiple rounds of testing locally and needed a clear next treatment direction. We organized the files first, then arranged oncology consultation and treatment coordination.',
    },
    serviceFocus: [
      { zh: '整理病历、病理和既往治疗时间线', en: 'Organized records, pathology, and prior treatment timeline' },
      { zh: '安排肿瘤医院专病门诊和检查节点', en: 'Arranged oncology specialist consultation and testing sequence' },
      { zh: '同步翻译、住宿和复查计划', en: 'Coordinated interpretation, lodging, and recheck planning' },
    ],
    timeline: [
      { zh: '提交病例资料并完成初步评估', en: 'Submitted files and completed initial review' },
      { zh: '确认医院方向并预约专病门诊', en: 'Confirmed the hospital direction and booked the specialist clinic' },
      { zh: '到院完成门诊、检查和阶段治疗安排', en: 'Completed consultation, testing, and stage treatment setup after arrival' },
    ],
    note: {
      zh: '该案例重点在于尽快衔接肿瘤专病路径和后续复查管理。',
      en: 'This case mainly shows how we connect an oncology pathway and the later follow-up plan.',
    },
    mediaClass:
      'bg-[linear-gradient(135deg,rgba(204,0,0,0.62),rgba(18,18,18,0.88)),radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_40%)]',
  },
  {
    id: 2,
    category: 'oncology',
    featured: true,
    name: { zh: 'S 女士', en: 'Ms. S' },
    country: { zh: '美国', en: 'United States' },
    age: 45,
    condition: { zh: '乳腺肿瘤手术与放疗安排', en: 'Breast tumor surgery and radiotherapy arrangement' },
    hospital: { zh: '北京协和医院', en: 'Peking Union Medical College Hospital' },
    treatment: { zh: '保乳手术评估 + 放疗衔接', en: 'Breast-conserving surgery review + radiotherapy coordination' },
    city: { zh: '北京', en: 'Beijing' },
    date: '2024-01',
    result: {
      zh: '完成手术及阶段治疗，按计划复查',
      en: 'Completed surgery and stage treatment, followed by scheduled rechecks',
    },
    summary: {
      zh: '客户希望保留原有治疗节奏，同时尽量减少来华停留时间。我们重点安排手术前评估、住院衔接和出院后的复查节奏。',
      en: 'The patient wanted to keep the original treatment pace while limiting time in China. We focused on pre-op review, admission handoff, and post-discharge follow-up timing.',
    },
    serviceFocus: [
      { zh: '确认手术时间与住院排期', en: 'Confirmed surgery timing and admission schedule' },
      { zh: '衔接治疗前检查和术后复查', en: 'Coordinated pre-treatment tests and post-op rechecks' },
      { zh: '安排陪同家属住宿与出行', en: 'Arranged family lodging and travel logistics' },
    ],
    timeline: [
      { zh: '病例评估并确认乳腺专科方向', en: 'Reviewed the case and confirmed the breast specialty pathway' },
      { zh: '完成到院前资料准备与排期确认', en: 'Completed pre-arrival documentation and schedule confirmation' },
      { zh: '到院后完成手术、住院与出院安排', en: 'Completed surgery, admission, and discharge setup after arrival' },
    ],
    note: {
      zh: '该案例重点在于缩短就医衔接时间，保证手术和后续治疗节奏。',
      en: 'This case mainly shows how we shorten the coordination window while keeping surgery and later treatment on track.',
    },
    mediaClass:
      'bg-[linear-gradient(135deg,rgba(116,0,0,0.8),rgba(12,12,12,0.9)),radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_38%)]',
  },
  {
    id: 3,
    category: 'transplant',
    featured: true,
    name: { zh: 'A 先生', en: 'Mr. A' },
    country: { zh: '沙特阿拉伯', en: 'Saudi Arabia' },
    age: 62,
    condition: { zh: '肝脏移植就医安排', en: 'Liver transplant care arrangement' },
    hospital: {
      zh: '上海交通大学医学院附属瑞金医院',
      en: 'Ruijin Hospital, Shanghai Jiao Tong University',
    },
    treatment: { zh: '移植评估 + 住院与术后管理', en: 'Transplant review + admission and post-op management' },
    city: { zh: '上海', en: 'Shanghai' },
    date: '2023-11',
    result: {
      zh: '完成住院治疗并进入回国后随访阶段',
      en: 'Completed inpatient treatment and moved into post-return follow-up',
    },
    summary: {
      zh: '客户在当地已明确需要进一步移植评估，希望尽快进入住院和术后管理路径。我们重点推进医院评估、住院衔接和回国后资料整理。',
      en: 'The patient already knew further transplant evaluation was required and needed to move quickly into admission and post-op management. We focused on hospital review, inpatient coordination, and post-return document packaging.',
    },
    serviceFocus: [
      { zh: '确认移植方向与接诊团队', en: 'Confirmed the transplant pathway and receiving team' },
      { zh: '安排住院衔接、翻译和家属陪同', en: 'Coordinated admission, interpretation, and family support' },
      { zh: '整理出院资料和回国后随访事项', en: 'Packaged discharge documents and post-return follow-up items' },
    ],
    timeline: [
      { zh: '提交病例并完成移植方向评估', en: 'Submitted the case and completed transplant-direction review' },
      { zh: '确认住院时间与来华行程', en: 'Confirmed admission timing and travel planning' },
      { zh: '完成住院治疗并启动回国后随访', en: 'Completed inpatient treatment and started post-return follow-up' },
    ],
    note: {
      zh: '该案例重点在于住院治疗衔接和跨国随访连续性。',
      en: 'This case mainly shows inpatient coordination and cross-border follow-up continuity.',
    },
    mediaClass:
      'bg-[linear-gradient(135deg,rgba(204,0,0,0.48),rgba(20,20,20,0.9)),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.14),transparent_42%)]',
  },
  {
    id: 4,
    category: 'reproductive',
    featured: false,
    name: { zh: 'L 女士', en: 'Ms. L' },
    country: { zh: '新加坡', en: 'Singapore' },
    age: 35,
    condition: { zh: '生殖医学辅助治疗安排', en: 'Reproductive care treatment arrangement' },
    hospital: {
      zh: '中山大学附属第一医院',
      en: 'The First Affiliated Hospital of Sun Yat-sen University',
    },
    treatment: { zh: '生殖医学门诊 + 周期管理', en: 'Reproductive medicine clinic + cycle management' },
    city: { zh: '广州', en: 'Guangzhou' },
    date: '2024-02',
    result: {
      zh: '完成阶段治疗安排并按计划继续复诊',
      en: 'Completed stage treatment arrangement and continued follow-up as planned',
    },
    summary: {
      zh: '客户已经在本地尝试过多个周期，希望重新确认医院方向和周期安排。我们重点衔接门诊、检查和后续周期管理。',
      en: 'The patient had already gone through multiple local cycles and wanted to reset the hospital direction and care plan. We focused on clinic setup, testing, and later cycle management.',
    },
    serviceFocus: [
      { zh: '整理既往周期资料和检查结果', en: 'Organized prior cycle records and test results' },
      { zh: '协调门诊、检查和治疗节点', en: 'Coordinated clinic, testing, and treatment milestones' },
      { zh: '安排停留时间与后续复诊计划', en: 'Arranged stay duration and later revisit planning' },
    ],
    timeline: [
      { zh: '完成病例资料整理和专科匹配', en: 'Completed file organization and specialty matching' },
      { zh: '确认检查项目和周期安排', en: 'Confirmed testing items and cycle schedule' },
      { zh: '按阶段推进门诊和后续复诊', en: 'Moved through consultation and later revisit stages as planned' },
    ],
    note: {
      zh: '该案例重点在于周期安排和多次来华就诊衔接。',
      en: 'This case mainly shows cycle planning and coordination across repeated visits.',
    },
    mediaClass:
      'bg-[linear-gradient(135deg,rgba(98,8,8,0.82),rgba(12,12,12,0.92)),radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_40%)]',
  },
  {
    id: 5,
    category: 'neurology',
    featured: false,
    name: { zh: 'J 先生', en: 'Mr. J' },
    country: { zh: '英国', en: 'United Kingdom' },
    age: 55,
    condition: { zh: '神经系统手术评估', en: 'Neurological surgery assessment' },
    hospital: { zh: '北京天坛医院', en: 'Beijing Tiantan Hospital' },
    treatment: { zh: '神经外科门诊 + 手术安排', en: 'Neurosurgery clinic + surgical arrangement' },
    city: { zh: '北京', en: 'Beijing' },
    date: '2023-09',
    result: {
      zh: '完成手术与术后恢复安排',
      en: 'Completed surgery and post-op recovery arrangement',
    },
    summary: {
      zh: '客户希望尽快确认神经外科方向并衔接手术安排。我们重点推进门诊评估、住院衔接和术后恢复阶段的沟通。',
      en: 'The patient needed quick confirmation of the neurosurgery pathway and surgery coordination. We focused on consultation review, admission, and post-op recovery communication.',
    },
    serviceFocus: [
      { zh: '确认神经外科门诊和手术排期', en: 'Confirmed neurosurgery consultation and surgery schedule' },
      { zh: '安排住院、翻译和到院陪同', en: 'Coordinated admission, interpretation, and on-site support' },
      { zh: '整理术后恢复和复查重点', en: 'Organized post-op recovery and recheck points' },
    ],
    timeline: [
      { zh: '提交神经系统相关资料', en: 'Submitted neurology-related files' },
      { zh: '完成手术前门诊评估和检查', en: 'Completed pre-op consultation review and tests' },
      { zh: '完成手术、恢复和返程安排', en: 'Completed surgery, recovery, and return planning' },
    ],
    note: {
      zh: '该案例重点在于神经外科手术前后安排的完整衔接。',
      en: 'This case mainly shows full coordination before and after neurosurgery.',
    },
    mediaClass:
      'bg-[linear-gradient(135deg,rgba(204,0,0,0.42),rgba(14,14,14,0.94)),radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_42%)]',
  },
  {
    id: 6,
    category: 'orthopedics',
    featured: false,
    name: { zh: 'W 先生', en: 'Mr. W' },
    country: { zh: '加拿大', en: 'Canada' },
    age: 48,
    condition: { zh: '脊柱手术与康复安排', en: 'Spine surgery and recovery arrangement' },
    hospital: { zh: '四川大学华西医院', en: 'West China Hospital, Sichuan University' },
    treatment: { zh: '骨科门诊 + 微创手术 + 术后恢复', en: 'Orthopedic clinic + minimally invasive surgery + recovery' },
    city: { zh: '成都', en: 'Chengdu' },
    date: '2024-04',
    result: {
      zh: '完成手术并按计划返程',
      en: 'Completed surgery and returned as planned',
    },
    summary: {
      zh: '客户主要诉求是缩短等待时间，尽快完成手术并安排返程。我们重点衔接骨科门诊、住院和术后恢复管理。',
      en: 'The main goal was to shorten the waiting period, complete surgery quickly, and arrange the return trip. We focused on orthopedic consultation, admission, and post-op recovery coordination.',
    },
    serviceFocus: [
      { zh: '确认骨科方向和术前检查计划', en: 'Confirmed the orthopedic pathway and pre-op test plan' },
      { zh: '安排住院、术后恢复和返程时间', en: 'Coordinated admission, recovery, and return timing' },
      { zh: '同步家属陪同和住宿需求', en: 'Handled family support and lodging needs' },
    ],
    timeline: [
      { zh: '提交资料并确认骨科手术方向', en: 'Submitted files and confirmed the surgical direction' },
      { zh: '完成到院前排期和住院准备', en: 'Completed pre-arrival scheduling and admission preparation' },
      { zh: '完成手术、恢复和返程衔接', en: 'Completed surgery, recovery, and return coordination' },
    ],
    note: {
      zh: '该案例重点在于外科排期、住院管理和短期返程安排。',
      en: 'This case mainly shows surgical scheduling, admission management, and short-stay return planning.',
    },
    mediaClass:
      'bg-[linear-gradient(135deg,rgba(76,6,6,0.86),rgba(12,12,12,0.94)),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.16),transparent_38%)]',
  },
] as const

function pick(locale: 'zh' | 'en', text: LocalizedText) {
  return text[locale]
}

export default function PatientStoriesPage() {
  const { locale } = useI18n()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedStory, setSelectedStory] = useState<Story | null>(null)

  const filteredStories = useMemo(() => {
    if (selectedCategory === 'all') {
      return patientStories
    }

    return patientStories.filter((story) => story.category === selectedCategory)
  }, [selectedCategory])

  return (
    <main className="min-h-screen bg-[#060606] text-white">
      <section className="relative overflow-hidden pb-20 pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(204,0,0,0.24),transparent_34%),radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_26%),linear-gradient(180deg,#080808_0%,#060606_100%)]" />

        <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
            <div>
              <div className="mb-5 inline-flex items-center rounded-full border border-[#cc0000]/30 bg-[#cc0000]/10 px-4 py-2 text-sm text-[#ffb4b4]">
                {locale === 'zh' ? 'Case Studies' : 'Case Studies'}
              </div>

              <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-5xl">
                {locale === 'zh' ? '服务案例' : 'Service Case Studies'}
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
                {locale === 'zh'
                  ? '这一页展示的是我们整理过的跨境就医服务案例。重点不是讲故事，而是把病例背景、医院安排、服务动作和阶段结果展示出来，方便客户了解类似病例通常怎么推进。'
                  : 'This page presents organized cross-border medical service cases. The focus is not storytelling, but showing the case background, hospital arrangement, service actions, and stage outcomes so patients can see how similar cases are usually handled.'}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="mailto:support@sanain.com"
                  className="inline-flex items-center justify-center rounded-full bg-[#cc0000] px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#a30000]"
                >
                  <Stethoscope className="mr-2 h-4 w-4" />
                  {locale === 'zh' ? '提交病例咨询' : 'Submit a Case'}
                </a>
                <a
                  href="/hospitals"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:border-[#cc0000]/40 hover:text-[#ffd0d0]"
                >
                  {locale === 'zh' ? '查看合作医院' : 'View Partner Hospitals'}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-md">
              <p className="mb-3 text-sm uppercase tracking-[0.24em] text-[#cc0000]">
                {locale === 'zh' ? '案例说明' : 'Case Notes'}
              </p>
              <h2 className="mb-5 text-2xl font-semibold leading-tight">
                {locale === 'zh' ? '页面说明' : 'Page Notes'}
              </h2>
              <div className="space-y-4">
                {serviceNotes.map((item) => {
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
            {overviewCards.map((item) => (
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

      <section className="border-y border-white/8 bg-[#0d0d0d] py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <Filter className="h-5 w-5 shrink-0 text-white/40" />
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === cat.value
                    ? 'bg-[#cc0000] text-white'
                    : 'border border-white/10 bg-white/[0.03] text-white/72 hover:border-[#cc0000]/35 hover:text-white'
                }`}
              >
                {locale === 'zh' ? cat.zh : cat.en}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.24em] text-[#cc0000]">
              {locale === 'zh' ? '案例列表' : 'Case List'}
            </p>
            <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
              {locale === 'zh' ? '按病例方向查看案例' : 'Browse cases by care direction'}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredStories.map((story) => (
              <article
                key={story.id}
                onClick={() => setSelectedStory(story)}
                className="cursor-pointer overflow-hidden rounded-[32px] border border-white/10 bg-[#101010] shadow-[0_18px_55px_rgba(0,0,0,0.22)] transition-colors hover:border-[#cc0000]/35"
              >
                <div className={`relative h-56 ${story.mediaClass}`}>
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.56)_100%)]" />
                  {story.featured && (
                    <div className="absolute right-5 top-5 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/80">
                      {locale === 'zh' ? '重点案例' : 'Featured'}
                    </div>
                  )}
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-sm text-white/70">
                      {pick(locale, story.city)} / {pick(locale, story.country)}
                    </p>
                    <h3 className="mt-1 text-2xl font-semibold text-white">
                      {pick(locale, story.condition)}
                    </h3>
                  </div>
                </div>

                <div className="space-y-4 p-6">
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-semibold text-white">
                      {pick(locale, story.name)}
                    </div>
                    <div className="text-sm text-white/45">
                      {story.age} {locale === 'zh' ? '岁' : 'y/o'}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-white/58">
                    <MapPin className="h-4 w-4 text-[#cc0000]" />
                    {pick(locale, story.hospital)}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-white/58">
                    <Calendar className="h-4 w-4 text-[#cc0000]" />
                    {story.date}
                  </div>

                  <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4 text-sm leading-7 text-white/72">
                    {pick(locale, story.summary)}
                  </div>

                  <div>
                    <p className="mb-2 text-sm text-white/45">
                      {locale === 'zh' ? '阶段结果' : 'Stage outcome'}
                    </p>
                    <div className="text-sm font-semibold text-emerald-400">
                      {pick(locale, story.result)}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-[#0d0d0d] py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:px-8">
          <div className="rounded-[32px] border border-white/10 bg-[#101010] p-8 shadow-[0_18px_55px_rgba(0,0,0,0.22)]">
            <p className="mb-3 text-sm uppercase tracking-[0.24em] text-[#cc0000]">
              {locale === 'zh' ? '案例共同点' : 'Shared Patterns'}
            </p>
            <h2 className="mb-6 text-3xl font-semibold leading-tight">
              {locale === 'zh' ? '这类案例通常会先做这些事' : 'These are the common steps in similar cases'}
            </h2>

            <div className="space-y-4">
              {[
                {
                  zh: '先整理病例资料，确认医院和科室方向。',
                  en: 'Organize the case first, then confirm the hospital and specialty direction.',
                },
                {
                  zh: '确认门诊、检查、住院之间怎么衔接。',
                  en: 'Clarify how consultation, testing, and admission should connect.',
                },
                {
                  zh: '同步翻译、住宿、接送和家属安排。',
                  en: 'Coordinate interpretation, lodging, pickup, and family arrangements.',
                },
                {
                  zh: '治疗完成后整理复查节点和回国后随访事项。',
                  en: 'Package recheck timing and post-return follow-up after treatment.',
                },
              ].map((item) => (
                <div
                  key={item.en}
                  className="rounded-[24px] border border-white/8 bg-white/[0.03] px-5 py-5 text-sm leading-7 text-white/72"
                >
                  {pick(locale, item)}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-[#101010] p-8 shadow-[0_18px_55px_rgba(0,0,0,0.22)]">
            <p className="mb-3 text-sm uppercase tracking-[0.24em] text-[#cc0000]">
              {locale === 'zh' ? '页面说明' : 'Page Notice'}
            </p>
            <h2 className="mb-6 text-3xl font-semibold leading-tight">
              {locale === 'zh' ? '案例仅作服务参考' : 'Cases are for service reference'}
            </h2>

            <div className="space-y-4">
              {[
                {
                  icon: Globe2,
                  title: {
                    zh: '已做匿名处理',
                    en: 'Anonymized',
                  },
                  desc: {
                    zh: '案例已隐去客户个人信息，仅保留病例方向和服务安排重点。',
                    en: 'All personal information has been removed. Only the case direction and service arrangements are kept.',
                  },
                },
                {
                  icon: Hospital,
                  title: {
                    zh: '不代表统一方案',
                    en: 'Not a uniform plan',
                  },
                  desc: {
                    zh: '同类病例也可能因为医院、时间和治疗阶段不同而采用不同安排。',
                    en: 'Even similar cases may require different setups due to hospital choice, timing, and treatment stage.',
                  },
                },
                {
                  icon: ShieldCheck,
                  title: {
                    zh: '以实际评估为准',
                    en: 'Actual review comes first',
                  },
                  desc: {
                    zh: '最终医院方向、服务流程和预算仍以实际病例评估结果为准。',
                    en: 'The final hospital direction, workflow, and budget always depend on the actual case review.',
                  },
                },
              ].map((item) => {
                const Icon = item.icon

                return (
                  <article
                    key={item.title.en}
                    className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5"
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#cc0000]/12 text-[#cc0000]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">
                        {pick(locale, item.title)}
                      </h3>
                    </div>
                    <p className="text-sm leading-7 text-white/68">{pick(locale, item.desc)}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-[#cc0000]/20 bg-[linear-gradient(180deg,rgba(204,0,0,0.14),rgba(255,255,255,0.03))] p-8 shadow-[0_18px_55px_rgba(0,0,0,0.22)]">
            <p className="mb-3 text-sm uppercase tracking-[0.24em] text-white/60">Sana</p>
            <h2 className="mb-4 text-3xl font-semibold leading-tight">
              {locale === 'zh' ? '如果你有类似病例，可以直接提交资料' : 'If your case is similar, you can submit the files directly'}
            </h2>
            <p className="mb-6 max-w-3xl text-sm leading-7 text-white/72">
              {locale === 'zh'
                ? '我们会先看病例资料、治疗阶段和到院时间，再给医院方向、服务安排和预算范围。'
                : 'We review the files, treatment stage, and arrival timing first, then return the hospital direction, service setup, and budget range.'}
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:support@sanain.com"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#111111] transition-transform duration-200 hover:-translate-y-0.5"
              >
                <ArrowRight className="mr-2 h-4 w-4" />
                {locale === 'zh' ? '发送病例资料' : 'Send Medical Files'}
              </a>

              <a
                href="/service-process"
                className="inline-flex items-center justify-center rounded-full border border-white/12 bg-black/20 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:border-[#cc0000]/35 hover:text-[#ffd0d0]"
              >
                {locale === 'zh' ? '查看服务流程' : 'View Service Process'}
                <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {selectedStory && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          onClick={() => setSelectedStory(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[32px] border border-white/10 bg-[#101010] shadow-[0_24px_80px_rgba(0,0,0,0.5)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`relative h-64 ${selectedStory.mediaClass}`}>
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.58)_100%)]" />
              <button
                onClick={() => setSelectedStory(null)}
                className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/25 text-white/80 transition-colors hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-sm text-white/72">
                  {pick(locale, selectedStory.city)} / {pick(locale, selectedStory.country)}
                </p>
                <h2 className="mt-2 text-3xl font-semibold text-white">
                  {pick(locale, selectedStory.condition)}
                </h2>
                <p className="mt-2 text-sm text-white/78">
                  {pick(locale, selectedStory.hospital)}
                </p>
              </div>
            </div>

            <div className="grid gap-8 p-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
              <div className="space-y-6">
                <div className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5">
                  <p className="mb-2 text-sm text-white/45">
                    {locale === 'zh' ? '案例概况' : 'Case overview'}
                  </p>
                  <p className="text-sm leading-7 text-white/72">
                    {pick(locale, selectedStory.summary)}
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5">
                    <p className="mb-2 text-sm text-white/45">
                      {locale === 'zh' ? '客户信息' : 'Client info'}
                    </p>
                    <div className="text-base font-semibold text-white">
                      {pick(locale, selectedStory.name)}
                    </div>
                    <div className="mt-2 text-sm text-white/68">
                      {storyLabel(locale, selectedStory.country, selectedStory.age)}
                    </div>
                  </div>

                  <div className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5">
                    <p className="mb-2 text-sm text-white/45">
                      {locale === 'zh' ? '阶段结果' : 'Stage outcome'}
                    </p>
                    <div className="text-base font-semibold text-emerald-400">
                      {pick(locale, selectedStory.result)}
                    </div>
                  </div>
                </div>

                <div className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5">
                  <p className="mb-3 text-sm text-white/45">
                    {locale === 'zh' ? '服务重点' : 'Service focus'}
                  </p>
                  <div className="grid gap-3">
                    {selectedStory.serviceFocus.map((item) => (
                      <div
                        key={item.en}
                        className="rounded-2xl border border-white/8 bg-black/15 px-4 py-4 text-sm leading-7 text-white/72"
                      >
                        {pick(locale, item)}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5">
                  <p className="mb-3 text-sm text-white/45">
                    {locale === 'zh' ? '治疗安排' : 'Treatment arrangement'}
                  </p>
                  <div className="text-base font-semibold text-white">
                    {pick(locale, selectedStory.treatment)}
                  </div>
                </div>

                <div className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5">
                  <p className="mb-3 text-sm text-white/45">
                    {locale === 'zh' ? '推进过程' : 'Case timeline'}
                  </p>
                  <div className="space-y-3">
                    {selectedStory.timeline.map((item) => (
                      <div
                        key={item.en}
                        className="rounded-2xl border border-white/8 bg-black/15 px-4 py-4 text-sm leading-7 text-white/72"
                      >
                        {pick(locale, item)}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[24px] border border-[#cc0000]/20 bg-[#cc0000]/8 p-5">
                  <p className="mb-2 text-sm text-white/55">
                    {locale === 'zh' ? '案例备注' : 'Case note'}
                  </p>
                  <p className="text-sm leading-7 text-white/82">
                    {pick(locale, selectedStory.note)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

function storyLabel(locale: 'zh' | 'en', country: LocalizedText, age: number) {
  return locale === 'zh' ? `${country.zh} / ${age} 岁` : `${country.en} / ${age} y/o`
}
