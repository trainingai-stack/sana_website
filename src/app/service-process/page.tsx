'use client'

import {
  ArrowRight,
  BadgeCheck,
  CalendarClock,
  ChevronRight,
  ClipboardList,
  FileStack,
  Globe2,
  HeartHandshake,
  Hospital,
  HousePlus,
  Mail,
  PlaneTakeoff,
  ScanText,
  ShieldCheck,
  Stethoscope,
  TimerReset,
  UserRoundCheck,
  Users,
} from 'lucide-react'
import { useI18n } from '@/i18n/context'

type LocalizedText = {
  zh: string
  en: string
}

const pageStats = [
  {
    value: '8',
    label: {
      zh: '核心服务阶段',
      en: 'Core service stages',
    },
  },
  {
    value: '1v1',
    label: {
      zh: '专属病例与行程协同',
      en: 'Dedicated case and travel coordination',
    },
  },
  {
    value: 'Before / During / After',
    label: {
      zh: '覆盖行前、在华与回国后',
      en: 'Covering pre-arrival, in-China, and post-return phases',
    },
  },
  {
    value: 'Clear',
    label: {
      zh: '强调流程透明与边界明确',
      en: 'Built around clarity and well-defined boundaries',
    },
  },
] as const

const servicePillars = [
  {
    icon: ClipboardList,
    title: {
      zh: '先评估，再预约',
      en: 'Assess first, book after',
    },
    desc: {
      zh: '先看病例，再决定医院、专家、时间和来华安排，这样后面才不会反复调整。',
      en: 'We review the case first, then decide on hospitals, specialists, timing, and travel arrangements so later steps do not keep changing.',
    },
  },
  {
    icon: HeartHandshake,
    title: {
      zh: '我们负责协同，医生负责治疗',
      en: 'We coordinate, doctors treat',
    },
    desc: {
      zh: '我们负责资料、预约、翻译、出行和后续跟进，诊断、处方和治疗方案由医院和医生决定。',
      en: 'We handle records, bookings, translation, travel, and follow-up coordination. Diagnosis, prescriptions, and treatment plans remain with the hospital and clinicians.',
    },
  },
  {
    icon: Globe2,
    title: {
      zh: '每一步都会提前告诉你',
      en: 'We tell you each next step in advance',
    },
    desc: {
      zh: '你会知道现在做到哪一步、接下来做什么、要准备什么，不会到了现场才临时处理。',
      en: 'You will know where the case stands, what happens next, and what still needs to be prepared instead of figuring everything out on site.',
    },
  },
] as const

const timelineSteps = [
  {
    step: '01',
    icon: ScanText,
    title: {
      zh: '初步评估与病例梳理',
      en: 'Initial assessment and case review',
    },
    stage: {
      zh: '行前阶段',
      en: 'Before arrival',
    },
    description: {
      zh: '先根据现有病历、检查结果、治疗史和患者目标，判断是否适合来华继续就医，以及应该优先看哪一类医院、科室和专家方向。',
      en: 'We begin by reviewing existing records, findings, treatment history, and patient goals to assess whether further care in China makes sense and which hospitals, specialties, and expert directions should be prioritized.',
    },
    bullets: [
      {
        zh: '梳理病情时间线与已做过的治疗',
        en: 'Organize the disease timeline and prior treatment history',
      },
      {
        zh: '识别还缺哪些关键资料和判断依据',
        en: 'Identify missing files and key decision inputs',
      },
      {
        zh: '帮助患者明确这次来华想解决的核心问题',
        en: 'Help clarify the core question the China trip is meant to solve',
      },
    ],
  },
  {
    step: '02',
    icon: UserRoundCheck,
    title: {
      zh: '医院与专家匹配',
      en: 'Hospital and specialist matching',
    },
    stage: {
      zh: '行前阶段',
      en: 'Before arrival',
    },
    description: {
      zh: '不是单纯推荐“最有名”的医院，而是结合疾病方向、复杂程度、时间安排、预算与患者诉求，筛选更适合的匹配方案。',
      en: 'Rather than simply recommending the most famous hospital, we filter options based on disease type, case complexity, timing, budget, and the patient’s actual goals.',
    },
    bullets: [
      {
        zh: '匹配科室、医生方向与门诊路径',
        en: 'Match specialty, doctor profile, and appointment pathway',
      },
      {
        zh: '初步解释不同选择的特点和适配度',
        en: 'Explain the strengths and fit of different options',
      },
      {
        zh: '帮助比较“是否值得来、先来做什么”',
        en: 'Help compare whether the trip is worthwhile and what should happen first',
      },
    ],
  },
  {
    step: '03',
    icon: FileStack,
    title: {
      zh: '资料准备与入境协助',
      en: 'Record preparation and entry support',
    },
    stage: {
      zh: '行前阶段',
      en: 'Before arrival',
    },
    description: {
      zh: '一旦决定推进，就需要把预约、资料、签证支持、航班和住宿衔接成一条清楚的线，避免患者到达前后都陷入重复沟通。',
      en: 'Once the decision is made to proceed, bookings, documents, visa support, flights, and lodging need to be connected into one clear line to avoid repeated confusion before and after arrival.',
    },
    bullets: [
      {
        zh: '整理预约所需材料与就医文件',
        en: 'Prepare booking files and hospital documents',
      },
      {
        zh: '协助来华时间、签证支持与基础行程衔接',
        en: 'Coordinate travel timing, visa support, and baseline itinerary planning',
      },
      {
        zh: '让患者到达前就知道首日或次日会发生什么',
        en: 'Make sure the patient already knows what happens on day one or day two after arrival',
      },
    ],
  },
  {
    step: '04',
    icon: PlaneTakeoff,
    title: {
      zh: '抵达与落地安顿',
      en: 'Arrival and on-the-ground setup',
    },
    stage: {
      zh: '在华阶段',
      en: 'In China',
    },
    description: {
      zh: '患者抵达后的体验会显著影响后续就医节奏。越能把接机、入住、交通半径和首诊安排做清楚，越能减少不必要的体力和心理消耗。',
      en: 'What happens right after arrival strongly shapes the entire care experience. The clearer the pickup, lodging, transport radius, and first-visit setup are, the less unnecessary fatigue and stress the patient faces.',
    },
    bullets: [
      {
        zh: '接机、入住与医院路径衔接',
        en: 'Coordinate pickup, lodging, and access to the hospital',
      },
      {
        zh: '根据时差和体力情况调整首日节奏',
        en: 'Adjust the first-day pace based on jet lag and energy level',
      },
      {
        zh: '帮助家属也理解当前安排和注意事项',
        en: 'Help accompanying family members understand the plan and precautions',
      },
    ],
  },
  {
    step: '05',
    icon: Hospital,
    title: {
      zh: '门诊、检查与住院衔接',
      en: 'Consultations, testing, and admission handoff',
    },
    stage: {
      zh: '在华阶段',
      en: 'In China',
    },
    description: {
      zh: '这一阶段的关键不是“带患者跑流程”，而是确保患者在最重要的门诊、检查、住院安排中不会因为语言、节奏或信息碎片而错失重点。',
      en: 'The key at this stage is not merely escorting the patient through the system, but making sure important consultations, tests, and admissions are not compromised by language friction, scheduling confusion, or fragmented information.',
    },
    bullets: [
      {
        zh: '门诊与检查时间串联，减少无效往返',
        en: 'Connect consultations and tests to reduce inefficient back-and-forth',
      },
      {
        zh: '支持双语沟通和关键结论记录',
        en: 'Support bilingual communication and capture key conclusions',
      },
      {
        zh: '把“下一步是什么”讲清楚给患者和家属',
        en: 'Clarify what happens next for both the patient and family',
      },
    ],
  },
  {
    step: '06',
    icon: Stethoscope,
    title: {
      zh: '治疗执行与恢复期协同',
      en: 'Treatment execution and recovery coordination',
    },
    stage: {
      zh: '在华阶段',
      en: 'In China',
    },
    description: {
      zh: '无论是手术、系统治疗、康复方案还是阶段性观察，患者真正需要的往往是对恢复节奏、复查节点和居住安排的持续解释与协调。',
      en: 'Whether the patient is undergoing surgery, systemic treatment, rehabilitation, or staged observation, what they often need most is continued explanation of recovery pacing, follow-up timing, and practical living arrangements.',
    },
    bullets: [
      {
        zh: '帮助理解治疗前后关键注意事项',
        en: 'Help explain the most important pre- and post-treatment instructions',
      },
      {
        zh: '协调康复、生活与短期复查节奏',
        en: 'Coordinate recovery pacing, daily life, and short-term rechecks',
      },
      {
        zh: '减少家属在陌生环境中的信息压力',
        en: 'Reduce family information pressure in an unfamiliar care environment',
      },
    ],
  },
  {
    step: '07',
    icon: HousePlus,
    title: {
      zh: '出院、资料整理与返程准备',
      en: 'Discharge, file packaging, and return preparation',
    },
    stage: {
      zh: '返程阶段',
      en: 'Return phase',
    },
    description: {
      zh: '很多患者以为出院就意味着流程结束，但真正影响回国后连续性的，是出院资料是否清楚、复查节点是否明确、返程时机是否合适。',
      en: 'Many patients think discharge means the process is over, but what really shapes continuity after returning home is whether discharge documents are clear, follow-up timing is defined, and the return schedule is appropriate.',
    },
    bullets: [
      {
        zh: '整理出院资料、复查安排和阶段性结论',
        en: 'Package discharge documents, follow-up plans, and stage summaries',
      },
      {
        zh: '说明返程前后需要特别注意的事项',
        en: 'Explain the points that matter most before and after returning home',
      },
      {
        zh: '帮助患者把“在华治疗”顺利转成“回国继续管理”',
        en: 'Help transition the case from in-China treatment into continued local management',
      },
    ],
  },
  {
    step: '08',
    icon: TimerReset,
    title: {
      zh: '回国后随访与长期衔接',
      en: 'Post-return follow-up and long-term continuity',
    },
    stage: {
      zh: '回国后阶段',
      en: 'After returning home',
    },
    description: {
      zh: '服务真正闭环的标志，不是患者完成了一次来华治疗，而是回国后仍知道下一次复查是什么、什么时候需要联系医生、哪些变化值得警惕。',
      en: 'A real service loop is not defined by completing one treatment trip to China, but by making sure the patient still knows the next checkup point, when to reconnect with clinicians, and which changes should raise concern after returning home.',
    },
    bullets: [
      {
        zh: '远程复查资料准备与随访提醒',
        en: 'Prepare remote follow-up files and reminders',
      },
      {
        zh: '把报告、结论与后续问题继续串起来',
        en: 'Continue connecting reports, conclusions, and next questions',
      },
      {
        zh: '帮助患者和家属维持更稳定的长期节奏',
        en: 'Help patients and families maintain steadier long-term continuity',
      },
    ],
  },
] as const

const preparationChecklist = [
  {
    zh: '尽可能完整的病历、检查、影像和病理资料',
    en: 'As complete a file set as possible, including records, reports, imaging, and pathology',
  },
  {
    zh: '当前最想解决的 2-4 个核心问题',
    en: 'The 2-4 core questions you most want answered',
  },
  {
    zh: '既往治疗方式、效果和当前用药情况',
    en: 'Prior treatment approaches, response, and current medication use',
  },
  {
    zh: '出行时间限制、预算范围和家属陪同情况',
    en: 'Travel constraints, budget range, and whether family will accompany the patient',
  },
  {
    zh: '对这次来华最在意的目标，例如确诊、治疗、复查或康复',
    en: 'Your main objective for the trip, such as diagnosis, treatment, recheck, or recovery planning',
  },
] as const

const responsibilities = [
  {
    title: {
      zh: '我们负责协调和解释',
      en: 'What we coordinate and explain',
    },
    bullets: [
      {
        zh: '病例梳理、路径建议、预约衔接、资料准备与多语言沟通支持',
        en: 'Case organization, pathway guidance, booking coordination, document preparation, and multilingual communication support',
      },
      {
        zh: '来华节奏、接送、住宿、门诊和复查等非临床协同事项',
        en: 'Non-clinical coordination across travel pacing, pickup, lodging, consultations, and follow-up logistics',
      },
      {
        zh: '帮助患者和家属理解流程、重点和下一步动作',
        en: 'Helping patients and families understand the process, priorities, and next steps',
      },
    ],
  },
  {
    title: {
      zh: '医生和医院负责临床决策',
      en: 'What remains a clinical responsibility',
    },
    bullets: [
      {
        zh: '最终诊断、处方、手术、住院和治疗方案选择',
        en: 'Final diagnosis, prescriptions, surgery, admission, and treatment-path decisions',
      },
      {
        zh: '任何紧急情况、病情恶化或即时线下处置',
        en: 'Any emergency, clinical deterioration, or urgent in-person management',
      },
      {
        zh: '检查结果、治疗反应与并发症风险的医学判断',
        en: 'Medical interpretation of findings, treatment response, and complication risk',
      },
    ],
  },
] as const

const trustPoints = [
  {
    icon: ShieldCheck,
    title: {
      zh: '先判断适不适合推进',
      en: 'Suitability before escalation',
    },
    desc: {
      zh: '并不是每位患者都适合立刻来华或进入复杂流程。更稳妥的方式是先看病例价值、时间窗口和可执行性。',
      en: 'Not every patient should immediately travel to China or enter a complex pathway. The steadier approach is to first assess clinical value, timing, and execution feasibility.',
    },
  },
  {
    icon: Users,
    title: {
      zh: '重视家属同步与跨文化沟通',
      en: 'Family alignment and cross-cultural communication matter',
    },
    desc: {
      zh: '跨国就医往往不只是患者一个人的决策。家属是否同步理解，会直接影响后续配合与恢复体验。',
      en: 'Cross-border care is rarely a decision made by the patient alone. Family understanding strongly affects coordination, follow-through, and recovery experience.',
    },
  },
  {
    icon: BadgeCheck,
    title: {
      zh: '流程透明比“看起来很快”更重要',
      en: 'Transparency matters more than simply looking fast',
    },
    desc: {
      zh: '很多焦虑并不是因为流程本身复杂，而是因为不知道现在到了哪一步、下一步会发生什么、自己该准备什么。',
      en: 'Much of the anxiety comes not from complexity itself, but from not knowing where things stand, what comes next, and what still needs to be prepared.',
    },
  },
] as const

const faqs = [
  {
    q: {
      zh: '整个流程通常从哪里开始？',
      en: 'Where does the process usually begin?',
    },
    a: {
      zh: '通常从病例评估开始，而不是直接订票或挂号。只有先看清病例、目标和时间限制，后面的安排才更稳。',
      en: 'It usually begins with case assessment, not with booking flights or appointments. Once the case, goals, and timing are clear, later steps become much steadier.',
    },
  },
  {
    q: {
      zh: '如果还没有决定是否来华，可以先咨询吗？',
      en: 'Can we consult before deciding whether to travel to China?',
    },
    a: {
      zh: '可以，而且通常应该先这样做。很多患者会先通过病例整理、第二诊疗意见或初步匹配，来判断这次来华是否真的有价值。',
      en: 'Yes, and that is often the better first step. Many patients first use case review, second-opinion work, or preliminary matching to assess whether a China trip is truly worthwhile.',
    },
  },
  {
    q: {
      zh: '来华后你们会一直陪同吗？',
      en: 'Will support continue after arrival?',
    },
    a: {
      zh: '支持重点会根据阶段变化。不是每个环节都需要同样密度的陪同，但关键节点如初诊、检查衔接、住院与出院阶段通常会更需要协同支持。',
      en: 'Support intensity changes by stage. Not every part of the journey needs the same level of accompaniment, but key points such as first consultations, test coordination, admission, and discharge usually benefit from closer support.',
    },
  },
  {
    q: {
      zh: '回国后流程就结束了吗？',
      en: 'Does the process end once the patient goes home?',
    },
    a: {
      zh: '不应该。对很多患者而言，回国后的复查、资料回传、远程随访和康复管理，才是真正决定体验是否闭环的部分。',
      en: 'It should not. For many patients, rechecks, record return, remote follow-up, and recovery management after returning home are what truly determine whether the service loop is complete.',
    },
  },
] as const

function pick(locale: 'zh' | 'en', text: LocalizedText) {
  return text[locale]
}

export default function ServiceProcessPage() {
  const { locale } = useI18n()

  return (
    <main className="min-h-screen bg-[#060606] text-white">
      <section className="relative overflow-hidden pb-20 pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(204,0,0,0.24),transparent_34%),radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_26%),linear-gradient(180deg,#080808_0%,#060606_100%)]" />

        <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
            <div>
              <div className="mb-5 inline-flex items-center rounded-full border border-[#cc0000]/30 bg-[#cc0000]/10 px-4 py-2 text-sm text-[#ffb4b4]">
                {locale === 'zh' ? 'Service Process' : 'Service Process'}
              </div>

              <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-5xl">
                {locale === 'zh'
                  ? '从病例评估到回国随访，我们按这 8 步推进'
                  : 'From case review to post-return follow-up, we move in these 8 steps'}
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
                {locale === 'zh'
                  ? '你先发病例。我们先判断适不适合来华、看哪个医院、先约什么。确认后，再安排资料、行程、门诊、住院、康复和回国后的随访。'
                  : 'You send the case first. We assess whether care in China makes sense, which hospital to target, and what should be booked first. Once confirmed, we move into records, travel, consultations, admission, recovery, and post-return follow-up.'}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#process-timeline"
                  className="inline-flex items-center justify-center rounded-full bg-[#cc0000] px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#a30000]"
                >
                  {locale === 'zh' ? '查看完整流程' : 'View Full Process'}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="mailto:support@sanain.com"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:border-[#cc0000]/40 hover:text-[#ffd0d0]"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  {locale === 'zh' ? '先发病例咨询' : 'Send a Case First'}
                </a>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-md">
              <p className="mb-3 text-sm uppercase tracking-[0.24em] text-[#cc0000]">
                {locale === 'zh' ? '服务原则' : 'Service Principles'}
              </p>
              <h2 className="mb-5 text-2xl font-semibold leading-tight">
                {locale === 'zh'
                  ? '服务先确认这三项'
                  : 'These three points come first'}
              </h2>
              <div className="space-y-4">
                {servicePillars.map((item) => {
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

          <div className="grid gap-4 md:grid-cols-4">
            {pageStats.map((item) => (
              <div
                key={`${item.value}-${item.label.en}`}
                className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md"
              >
                <div className="mb-2 text-3xl font-bold text-[#cc0000]">{item.value}</div>
                <div className="text-sm leading-7 text-white/70">
                  {pick(locale, item.label)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="process-timeline"
        className="border-y border-white/8 bg-[#0d0d0d] py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.24em] text-[#cc0000]">
              {locale === 'zh' ? '服务流程' : 'Process Timeline'}
            </p>
            <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
              {locale === 'zh'
                ? '标准服务流程'
                : 'Standard service process'}
            </h2>
          </div>

          <div className="space-y-5">
            {timelineSteps.map((item) => {
              const Icon = item.icon

              return (
                <article
                  key={item.step}
                  className="rounded-[32px] border border-white/10 bg-[#101010] p-6 shadow-[0_18px_55px_rgba(0,0,0,0.22)] md:p-8"
                >
                  <div className="grid gap-8 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]">
                    <div>
                      <div className="mb-4 flex items-center gap-4">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#cc0000] text-lg font-bold text-white">
                          {item.step}
                        </div>
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#cc0000]/12 text-[#cc0000]">
                          <Icon className="h-5 w-5" />
                        </div>
                      </div>
                      <p className="mb-3 text-sm uppercase tracking-[0.24em] text-[#cc0000]">
                        {pick(locale, item.stage)}
                      </p>
                      <h3 className="text-2xl font-semibold leading-tight text-white">
                        {pick(locale, item.title)}
                      </h3>
                    </div>

                    <div>
                      <p className="mb-5 text-base leading-8 text-white/72">
                        {pick(locale, item.description)}
                      </p>
                      <div className="grid gap-3">
                        {item.bullets.map((bullet) => (
                          <div
                            key={bullet.en}
                            className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4 text-sm leading-7 text-white/72"
                          >
                            {pick(locale, bullet)}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
            <div className="rounded-[32px] border border-white/10 bg-[#101010] p-8 shadow-[0_18px_55px_rgba(0,0,0,0.22)]">
              <p className="mb-3 text-sm uppercase tracking-[0.24em] text-[#cc0000]">
                {locale === 'zh' ? '提交前准备' : 'Before Submission'}
              </p>
              <h2 className="mb-6 text-3xl font-semibold leading-tight">
                {locale === 'zh'
                  ? '开始前先准备这些'
                  : 'Prepare these before we start'}
              </h2>
              <div className="space-y-3">
                {preparationChecklist.map((item) => (
                  <div
                    key={item.en}
                    className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4"
                  >
                    <CalendarClock className="mt-1 h-4 w-4 shrink-0 text-[#cc0000]" />
                    <p className="text-sm leading-7 text-white/72">{pick(locale, item)}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-[#101010] p-8 shadow-[0_18px_55px_rgba(0,0,0,0.22)]">
              <p className="mb-3 text-sm uppercase tracking-[0.24em] text-[#cc0000]">
                {locale === 'zh' ? '职责边界' : 'Roles & Boundaries'}
              </p>
              <h2 className="mb-6 text-3xl font-semibold leading-tight">
                {locale === 'zh'
                  ? '我们负责什么，医生负责什么'
                  : 'What we handle and what stays with the doctor'}
              </h2>

              <div className="space-y-5">
                {responsibilities.map((group, index) => (
                  <article
                    key={group.title.en}
                    className={`rounded-[28px] border p-6 ${
                      index === 0
                        ? 'border-[#cc0000]/20 bg-[#cc0000]/8'
                        : 'border-white/8 bg-white/[0.03]'
                    }`}
                  >
                    <h3 className="mb-4 text-xl font-semibold text-white">
                      {pick(locale, group.title)}
                    </h3>
                    <div className="grid gap-3">
                      {group.bullets.map((item) => (
                        <div
                          key={item.en}
                          className="rounded-2xl border border-white/8 bg-black/15 px-4 py-4 text-sm leading-7 text-white/72"
                        >
                          {pick(locale, item)}
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
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.24em] text-[#cc0000]">
              {locale === 'zh' ? '服务标准' : 'Service Standards'}
            </p>
            <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
              {locale === 'zh'
                ? '流程按这个标准推进'
                : 'This is the standard we follow'}
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {trustPoints.map((item) => {
              const Icon = item.icon

              return (
                <article
                  key={item.title.en}
                  className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_14px_40px_rgba(0,0,0,0.2)]"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#cc0000]/12 text-[#cc0000]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-white">
                    {pick(locale, item.title)}
                  </h3>
                  <p className="text-sm leading-7 text-white/68">
                    {pick(locale, item.desc)}
                  </p>
                </article>
              )
            })}
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
                {locale === 'zh'
                  ? '流程相关常见问题'
                  : 'Common process questions'}
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
                    <p className="text-sm leading-7 text-white/70">
                      {pick(locale, item.a)}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-[#cc0000]/20 bg-[linear-gradient(180deg,rgba(204,0,0,0.14),rgba(255,255,255,0.03))] p-8 shadow-[0_18px_55px_rgba(0,0,0,0.22)]">
              <p className="mb-3 text-sm uppercase tracking-[0.24em] text-white/60">
                Sana
              </p>
              <h2 className="mb-4 text-3xl font-semibold leading-tight">
                {locale === 'zh'
                  ? '如果你已经有病例，我们就先从评估开始'
                  : 'If you already have records, we can start with the assessment now'}
              </h2>
              <p className="mb-6 text-sm leading-7 text-white/72">
                {locale === 'zh'
                  ? '先把病例发给我们。我们先看现在的问题、时间节点和来华价值，再往下安排医院、预约和行程。'
                  : 'Send the case first. We will review the current problem, timing, and value of coming to China before moving into hospital matching, booking, and travel planning.'}
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:support@sanain.com"
                  className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#111111] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  {locale === 'zh' ? '发送病例资料' : 'Send Medical Files'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>

                <a
                  href="/second-opinion"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/12 bg-black/20 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:border-[#cc0000]/35 hover:text-[#ffd0d0]"
                >
                  {locale === 'zh' ? '先看远程第二诊疗意见' : 'Explore Remote Second Opinion'}
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
