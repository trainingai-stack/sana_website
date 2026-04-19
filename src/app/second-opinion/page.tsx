'use client'

import { useState } from 'react'
import {
  BadgeCheck,
  ChevronRight,
  ClipboardList,
  Clock3,
  FileSearch,
  FileText,
  Globe2,
  HeartPulse,
  Mail,
  MessageSquareText,
  ShieldCheck,
  Stethoscope,
  Upload,
  Users,
} from 'lucide-react'
import { useI18n } from '@/i18n/context'

type LocalizedText = {
  zh: string
  en: string
}

const heroFeatures = [
  {
    icon: Clock3,
    title: {
      zh: '材料完整后 72 小时内反馈',
      en: 'Feedback within 72 hours after full submission',
    },
    desc: {
      zh: '资料齐全后，我们先整理病例，再安排相关专家复核，并尽快给你书面反馈。',
      en: 'Once your files are complete, we organize the case, assign the right specialist, and send written feedback as quickly as possible.',
    },
  },
  {
    icon: Users,
    title: {
      zh: '匹配相关专科专家',
      en: 'Matched to the right specialist',
    },
    desc: {
      zh: '我们会根据疾病方向、既往治疗和现在最关键的问题来匹配专家。',
      en: 'We match specialists based on disease type, prior treatment, and the key question that needs to be answered now.',
    },
  },
  {
    icon: FileText,
    title: {
      zh: '交付书面第二诊疗意见',
      en: 'A written second opinion',
    },
    desc: {
      zh: '我们会把当前判断、下一步建议和需要补充的检查重点直接写清楚。',
      en: 'We put the current assessment, next-step recommendations, and any needed additional tests directly into the written output.',
    },
  },
  {
    icon: Globe2,
    title: {
      zh: '先判断，再决定要不要来华',
      en: 'Review first, decide on travel after',
    },
    desc: {
      zh: '如果你还在本地治疗，或者还没决定要不要来中国，先做远程第二意见会更稳。',
      en: 'If you are still being treated locally or have not decided whether to come to China, starting with a remote second opinion is the steadier move.',
    },
  },
] as const

const keyStats = [
  {
    value: '72h',
    label: {
      zh: '完整材料后的目标反馈时效',
      en: 'Target response time after full file submission',
    },
  },
  {
    value: '1v1',
    label: {
      zh: '病例整理与咨询协同',
      en: 'One-on-one case coordination',
    },
  },
  {
    value: 'Multi',
    label: {
      zh: '支持多专科复杂病例判断',
      en: 'Support for complex multi-specialty cases',
    },
  },
  {
    value: 'Written',
    label: {
      zh: '书面意见便于后续沟通使用',
      en: 'Written output for continued discussion',
    },
  },
] as const

const suitableScenarios = [
  {
    title: {
      zh: '诊断仍不够确定',
      en: 'The diagnosis still feels uncertain',
    },
    desc: {
      zh: '检查结果之间存在差异，或患者和家属对当前判断仍有明显疑问，希望获得另一套专业视角。',
      en: 'There are differences across reports, or the patient and family still have major doubts and want another professional view.',
    },
  },
  {
    title: {
      zh: '治疗方案选择困难',
      en: 'Treatment choices are hard to compare',
    },
    desc: {
      zh: '例如手术、药物、放疗、精准治疗、保守治疗之间难以判断优先顺序和适用条件。',
      en: 'For example, it is difficult to compare surgery, medication, radiotherapy, precision care, or conservative treatment paths.',
    },
  },
  {
    title: {
      zh: '病情复杂或进展较快',
      en: 'The case is complex or progressing quickly',
    },
    desc: {
      zh: '复杂肿瘤、神经系统疾病、疑难慢病、术后反复或多次治疗后效果不理想的情况，通常更需要再次复核。',
      en: 'Complex oncology, neurological disease, difficult chronic cases, post-op recurrence, or poor response after multiple treatments often benefit from another review.',
    },
  },
  {
    title: {
      zh: '想判断是否值得来华治疗',
      en: 'You want to know whether coming to China makes sense',
    },
    desc: {
      zh: '在正式安排出行前，先用远程第二意见判断适配度、时间价值和下一步重点，会更稳妥。',
      en: 'Before planning travel, a remote second opinion can help assess fit, timing value, and the most important next steps.',
    },
  },
  {
    title: {
      zh: '希望家属也能看懂重点',
      en: 'The family needs a clearer explanation',
    },
    desc: {
      zh: '很多家庭的困难并不是没有信息，而是信息太碎、术语太多，无法形成统一判断。',
      en: 'Many families do not lack information; they lack a clear, structured explanation they can align around.',
    },
  },
  {
    title: {
      zh: '正在为下一次门诊或治疗做准备',
      en: 'You are preparing for the next treatment step',
    },
    desc: {
      zh: '第二意见可以帮助梳理下一次就诊前最值得准备的问题、资料和判断重点。',
      en: 'A second opinion can help clarify the most valuable questions, files, and decision points before the next appointment.',
    },
  },
] as const

const processSteps = [
  {
    step: '01',
    title: {
      zh: '提交基础病历与问题重点',
      en: 'Submit records and core questions',
    },
    desc: {
      zh: '先提交既往病历、检查报告、影像或病理资料，并说明目前最想解决的核心问题。',
      en: 'Submit medical records, reports, imaging or pathology files, and tell us the main questions you want answered.',
    },
  },
  {
    step: '02',
    title: {
      zh: '病例整理与专家方向匹配',
      en: 'Case organization and specialist matching',
    },
    desc: {
      zh: '我们会先把时间线、既往治疗和关键结果整理清楚，再匹配更相关的专科专家复核。',
      en: 'We organize the timeline, prior treatment, and key findings first, then match the case to a more relevant specialist.',
    },
  },
  {
    step: '03',
    title: {
      zh: '专家复核与必要补充提问',
      en: 'Expert review and follow-up questions',
    },
    desc: {
      zh: '如果现有材料不足以支持判断，我们会提示还需要哪些补充资料，而不是草率给结论。',
      en: 'If the current file set is insufficient, we clarify what additional information is needed instead of giving a rushed conclusion.',
    },
  },
  {
    step: '04',
    title: {
      zh: '形成书面第二诊疗意见',
      en: 'Receive the written second opinion',
    },
    desc: {
      zh: '输出重点通常包括当前判断、可讨论方向、进一步检查建议和下一步优先事项。',
      en: 'The written output typically includes the current assessment, options worth discussing, recommended additional tests, and next priorities.',
    },
  },
  {
    step: '05',
    title: {
      zh: '决定后续本地或来华安排',
      en: 'Decide on local or China-based next steps',
    },
    desc: {
      zh: '在第二意见基础上，再决定是否继续本地治疗、补充检查，或进入来华咨询与预约阶段。',
      en: 'Based on the opinion, you can decide whether to continue locally, do more tests, or move into consultation and booking for care in China.',
    },
  },
] as const

const deliverables = [
  {
    icon: ClipboardList,
    title: {
      zh: '当前阶段的判断重点',
      en: 'Current-stage assessment priorities',
    },
    desc: {
      zh: '帮助患者理解现有信息支持了什么判断，还存在哪些不确定点。',
      en: 'Clarifies what the current data supports and where uncertainty still remains.',
    },
  },
  {
    icon: FileSearch,
    title: {
      zh: '进一步检查或复核建议',
      en: 'Recommendations for further review or testing',
    },
    desc: {
      zh: '说明哪些追加检查更有价值，哪些信息最可能影响后续决策。',
      en: 'Explains which additional tests may be valuable and which missing information could change decisions.',
    },
  },
  {
    icon: Stethoscope,
    title: {
      zh: '可讨论的诊疗路径',
      en: 'Treatment paths worth discussing',
    },
    desc: {
      zh: '不是替代临床决策，而是帮助患者更有准备地进入下一轮门诊和治疗讨论。',
      en: 'Not a replacement for clinical decision-making, but a way to enter the next consultation more prepared.',
    },
  },
  {
    icon: MessageSquareText,
    title: {
      zh: '面向患者的清晰解释版本',
      en: 'A patient-friendly explanation',
    },
    desc: {
      zh: '减少只看得懂术语、却不知道下一步怎么做的情况。',
      en: 'Reduces the common problem of receiving technical language without knowing what to do next.',
    },
  },
] as const

const checklist = [
  {
    zh: '近期门诊病历、出院小结或治疗记录',
    en: 'Recent consultation notes, discharge summary, or treatment records',
  },
  {
    zh: '影像报告与原始影像文件（如 CT、MRI、PET-CT）',
    en: 'Imaging reports and source files such as CT, MRI, or PET-CT',
  },
  {
    zh: '病理报告、基因检测或其他关键检验结果',
    en: 'Pathology reports, genomic testing, or other key lab findings',
  },
  {
    zh: '既往治疗方式、时间线和当前用药情况',
    en: 'Prior treatment timeline and current medication use',
  },
  {
    zh: '目前最想解决的 2-4 个核心问题',
    en: 'The 2-4 most important questions you want answered',
  },
  {
    zh: '如有时间限制，也请说明计划中的下一次治疗节点',
    en: 'If timing matters, include the date of the next planned treatment step',
  },
] as const

const coveredFields = [
  { zh: '肿瘤与精准治疗评估', en: 'Oncology and precision-care review' },
  { zh: '神经系统与神经外科', en: 'Neurology and neurosurgery' },
  { zh: '心血管与复杂内科病例', en: 'Cardiovascular and complex internal medicine' },
  { zh: '骨科、脊柱与运动损伤', en: 'Orthopedics, spine, and sports injury' },
  { zh: '消化、呼吸与慢病管理', en: 'Gastroenterology, respiratory, and chronic-care review' },
  { zh: '妇科、生殖与儿科疑难问题', en: 'Gynecology, reproductive, and pediatric complex cases' },
] as const

const trustPoints = [
  {
    icon: ShieldCheck,
    title: {
      zh: '先判断是否适合，不盲目推进',
      en: 'Suitability first, not forced progression',
    },
    desc: {
      zh: '并不是所有病例都适合立即做第二诊疗意见，我们会先看材料完整度和判断价值。',
      en: 'Not every case is ready for a second opinion immediately. We first assess file completeness and whether a review will be meaningful.',
    },
  },
  {
    icon: BadgeCheck,
    title: {
      zh: '强调边界清晰和预期管理',
      en: 'Clear boundaries and expectation setting',
    },
    desc: {
      zh: '远程第二意见能帮助判断方向，但不替代线下面诊、急诊处理或处方执行。',
      en: 'A remote second opinion can clarify direction, but it does not replace in-person evaluation, emergency care, or prescription execution.',
    },
  },
  {
    icon: HeartPulse,
    title: {
      zh: '以患者和家属能理解为目标',
      en: 'Built for patient and family understanding',
    },
    desc: {
      zh: '我们不希望交付的是一份“看起来专业、实际无法使用”的意见，而是能帮助下一步决策的内容。',
      en: 'We do not want to deliver a document that looks professional but cannot be used; the goal is to support the next decision clearly.',
    },
  },
] as const

const faqs = [
  {
    q: {
      zh: '第二诊疗意见适合替代本地医生吗？',
      en: 'Does a second opinion replace the local doctor?',
    },
    a: {
      zh: '不适合。第二诊疗意见更适合作为复核、比较和准备下一步决策的依据，不能替代患者当前所在地医生的面对面检查、处方和即时处理。',
      en: 'No. A second opinion is best used for review, comparison, and planning next decisions. It does not replace in-person examination, prescription authority, or immediate management by the local treating doctor.',
    },
  },
  {
    q: {
      zh: '多久能拿到意见？',
      en: 'How long does it take?',
    },
    a: {
      zh: '在材料完整、问题明确的前提下，我们通常以 72 小时内给出首轮反馈为目标。若病例复杂或仍缺关键资料，时间会相应延长。',
      en: 'When the file set is complete and the core questions are clear, we usually target first-round feedback within 72 hours. More complex cases or missing key files can extend the timeline.',
    },
  },
  {
    q: {
      zh: '如果材料不完整怎么办？',
      en: 'What if the materials are incomplete?',
    },
    a: {
      zh: '我们会先告诉你还缺什么，以及这些资料为什么重要。比起在信息不足的情况下仓促出结论，我们更重视判断质量。',
      en: 'We will tell you what is still missing and why it matters. We would rather improve decision quality than issue a rushed conclusion with incomplete information.',
    },
  },
  {
    q: {
      zh: '能否根据第二意见直接安排来华治疗？',
      en: 'Can treatment in China be arranged directly after this?',
    },
    a: {
      zh: '可以作为后续咨询的重要基础。如果第二意见显示来华有明确价值，我们可以继续协助进入专家匹配、门诊预约、入境协助和整体行程安排。',
      en: 'Yes, it can become a strong foundation for the next step. If the opinion suggests clear value in pursuing care in China, we can continue with expert matching, booking, entry support, and travel planning.',
    },
  },
  {
    q: {
      zh: '哪些情况不适合等待远程第二意见？',
      en: 'When should you not wait for a remote second opinion?',
    },
    a: {
      zh: '如果患者正处于急诊、重症恶化、需要立即手术或即时线下处置的状态，应先以当地医疗机构的紧急处理为优先。',
      en: 'If the patient is in an emergency, clinically deteriorating, or needs immediate surgery or urgent in-person care, local emergency treatment should always come first.',
    },
  },
] as const

function pick(locale: 'zh' | 'en', text: LocalizedText) {
  return text[locale]
}

export default function SecondOpinionPage() {
  const { locale } = useI18n()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    condition: '',
    question: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-[#060606] text-white">
      <section className="relative overflow-hidden pb-20 pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(204,0,0,0.24),transparent_34%),radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_26%),linear-gradient(180deg,#080808_0%,#060606_100%)]" />

        <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
            <div>
              <div className="mb-5 inline-flex items-center rounded-full border border-[#cc0000]/30 bg-[#cc0000]/10 px-4 py-2 text-sm text-[#ffb4b4]">
                {locale === 'zh'
                  ? 'Remote Second Opinion'
                  : 'Remote Second Opinion'}
              </div>

              <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-5xl">
                {locale === 'zh'
                  ? '提交病历，我们先帮你做远程第二诊疗意见'
                  : 'Send your records first and we will arrange a remote second opinion'}
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
                {locale === 'zh'
                  ? '不来中国，也可以先判断现在的诊断是否清楚、方案要不要调整、还有没有必要来华继续治疗。材料完整后，我们会匹配相关专科专家，给你书面意见。'
                  : 'You do not need to travel first. We can help you judge whether the current diagnosis is clear, whether the plan should change, and whether coming to China is necessary. Once the files are complete, we match the case to the right specialist and provide a written opinion.'}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#second-opinion-form"
                  className="inline-flex items-center justify-center rounded-full bg-[#cc0000] px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#a30000]"
                >
                  {locale === 'zh' ? '提交病例咨询' : 'Start My Case Review'}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="mailto:support@sanain.com"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:border-[#cc0000]/40 hover:text-[#ffd0d0]"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  {locale === 'zh' ? '邮件发送资料' : 'Send Files by Email'}
                </a>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-md">
              <p className="mb-3 text-sm uppercase tracking-[0.24em] text-[#cc0000]">
                {locale === 'zh' ? '服务内容' : 'Service Scope'}
              </p>
              <h2 className="mb-5 text-2xl font-semibold leading-tight">
                {locale === 'zh'
                  ? '服务包含这四项'
                  : 'This service includes these four parts'}
              </h2>
              <div className="space-y-4">
                {heroFeatures.map((item) => {
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
            {keyStats.map((item) => (
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

      <section className="border-y border-white/8 bg-[#0d0d0d] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.24em] text-[#cc0000]">
              {locale === 'zh' ? '适用情况' : 'Use Cases'}
            </p>
            <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
              {locale === 'zh'
                ? '以下情况可先做第二诊疗意见'
                : 'These are the situations where a second opinion should come first'}
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {suitableScenarios.map((item) => (
              <article
                key={item.title.en}
                className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_14px_40px_rgba(0,0,0,0.2)]"
              >
                <h3 className="mb-3 text-xl font-semibold text-white">
                  {pick(locale, item.title)}
                </h3>
                <p className="text-sm leading-7 text-white/68">
                  {pick(locale, item.desc)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div className="rounded-[32px] border border-white/10 bg-[#101010] p-8 shadow-[0_18px_55px_rgba(0,0,0,0.22)]">
              <p className="mb-3 text-sm uppercase tracking-[0.24em] text-[#cc0000]">
                {locale === 'zh' ? '资料准备' : 'Required Files'}
              </p>
              <h2 className="mb-6 text-3xl font-semibold leading-tight">
                {locale === 'zh'
                  ? '先提交这些资料'
                  : 'Submit these files first'}
              </h2>

              <div className="space-y-3">
                {checklist.map((item) => (
                  <div
                    key={item.en}
                    className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4"
                  >
                    <Upload className="mt-1 h-4 w-4 shrink-0 text-[#cc0000]" />
                    <p className="text-sm leading-7 text-white/72">{pick(locale, item)}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-[#101010] p-8 shadow-[0_18px_55px_rgba(0,0,0,0.22)]">
              <p className="mb-3 text-sm uppercase tracking-[0.24em] text-[#cc0000]">
                {locale === 'zh' ? '服务流程' : 'Process'}
              </p>
              <h2 className="mb-6 text-3xl font-semibold leading-tight">
                {locale === 'zh'
                  ? '提交后按这 5 步推进'
                  : 'After submission, we move in these 5 steps'}
              </h2>

              <div className="space-y-4">
                {processSteps.map((item) => (
                  <div
                    key={item.step}
                    className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5"
                  >
                    <div className="mb-3 flex items-center gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#cc0000] text-sm font-bold text-white">
                        {item.step}
                      </div>
                      <h3 className="text-lg font-semibold text-white">
                        {pick(locale, item.title)}
                      </h3>
                    </div>
                    <p className="text-sm leading-7 text-white/68">
                      {pick(locale, item.desc)}
                    </p>
                  </div>
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
              {locale === 'zh' ? '交付内容' : 'Deliverables'}
            </p>
            <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
              {locale === 'zh'
                ? '书面意见包含这些内容'
                : 'The written opinion includes these parts'}
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {deliverables.map((item) => {
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
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <div className="rounded-[32px] border border-white/10 bg-[#101010] p-8 shadow-[0_18px_55px_rgba(0,0,0,0.22)]">
              <p className="mb-3 text-sm uppercase tracking-[0.24em] text-[#cc0000]">
                {locale === 'zh' ? '适用科室' : 'Specialties Covered'}
              </p>
              <h2 className="mb-6 text-3xl font-semibold leading-tight">
                {locale === 'zh'
                  ? '常见申请方向'
                  : 'Common case directions'}
              </h2>

              <div className="grid gap-3">
                {coveredFields.map((item) => (
                  <div
                    key={item.en}
                    className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4 text-sm leading-7 text-white/72"
                  >
                    {pick(locale, item)}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-[#101010] p-8 shadow-[0_18px_55px_rgba(0,0,0,0.22)]">
              <p className="mb-3 text-sm uppercase tracking-[0.24em] text-[#cc0000]">
                {locale === 'zh' ? '服务边界' : 'Service Boundaries'}
              </p>
              <h2 className="mb-6 text-3xl font-semibold leading-tight">
                {locale === 'zh'
                  ? '开始前先确认这些'
                  : 'Please confirm these points first'}
              </h2>

              <div className="space-y-4">
                {trustPoints.map((item) => {
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
                      <p className="text-sm leading-7 text-white/68">
                        {pick(locale, item.desc)}
                      </p>
                    </article>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-[#0d0d0d] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(340px,0.95fr)]">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.24em] text-[#cc0000]">
                {locale === 'zh' ? '常见问题' : 'FAQ'}
              </p>
              <h2 className="mb-6 text-3xl font-semibold leading-tight md:text-4xl">
                {locale === 'zh'
                  ? '申请前，最常问的几个问题'
                  : 'The most common questions before starting'}
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

            <div
              id="second-opinion-form"
              className="rounded-[32px] border border-[#cc0000]/20 bg-[linear-gradient(180deg,rgba(204,0,0,0.14),rgba(255,255,255,0.03))] p-8 shadow-[0_18px_55px_rgba(0,0,0,0.22)]"
            >
              <p className="mb-3 text-sm uppercase tracking-[0.24em] text-white/60">
                Sana
              </p>
              <h2 className="mb-4 text-3xl font-semibold leading-tight">
                {locale === 'zh'
                  ? '把病例发给我们，我们先判断能不能接、值不值得做'
                  : 'Send us the case first and we will assess whether it should move forward now'}
              </h2>
              <p className="mb-6 text-sm leading-7 text-white/72">
                {locale === 'zh'
                  ? '资料不完整也可以先发。我们会先告诉你缺什么、下一步怎么补。'
                  : 'You can still send the case even if the files are incomplete. We will tell you what is missing and what to add next.'}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    placeholder={locale === 'zh' ? '姓名' : 'Name'}
                    className="w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white placeholder:text-white/35 focus:border-[#cc0000]/60 focus:outline-none"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white placeholder:text-white/35 focus:border-[#cc0000]/60 focus:outline-none"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                  <input
                    type="tel"
                    placeholder={locale === 'zh' ? '电话 / WhatsApp' : 'Phone / WhatsApp'}
                    className="w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white placeholder:text-white/35 focus:border-[#cc0000]/60 focus:outline-none"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                  <input
                    type="text"
                    placeholder={locale === 'zh' ? '国家 / 地区' : 'Country / Region'}
                    className="w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white placeholder:text-white/35 focus:border-[#cc0000]/60 focus:outline-none"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    required
                  />
                </div>

                <textarea
                  rows={4}
                  placeholder={
                    locale === 'zh'
                      ? '请简要说明目前的诊断、治疗经过和最想确认的问题'
                      : 'Briefly describe the current diagnosis, treatment history, and the most important question you want clarified'
                  }
                  className="w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white placeholder:text-white/35 focus:border-[#cc0000]/60 focus:outline-none"
                  value={formData.condition}
                  onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
                  required
                />

                <textarea
                  rows={3}
                  placeholder={
                    locale === 'zh'
                      ? '如果有下一次手术、化疗、复查或出行时间限制，也请一并说明'
                      : 'If you have a deadline for surgery, chemotherapy, recheck, or travel planning, include it here'
                  }
                  className="w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white placeholder:text-white/35 focus:border-[#cc0000]/60 focus:outline-none"
                  value={formData.question}
                  onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                />

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#111111] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  {locale === 'zh' ? '提交病例咨询' : 'Submit My Case'}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </button>

                {isSubmitted && (
                  <div className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 px-4 py-4 text-sm leading-7 text-emerald-100">
                    {locale === 'zh'
                      ? '信息已记录。下一步可以继续通过邮件发送病历资料，我们会根据现有内容先判断是否适合进入第二诊疗意见流程。'
                      : 'Your information has been recorded. You can next send the medical files by email, and we will first assess whether the case is suitable for the second-opinion process.'}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
