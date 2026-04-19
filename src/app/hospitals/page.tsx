'use client'

import {
  ArrowRight,
  Building2,
  ChevronRight,
  CirclePlay,
  ClipboardCheck,
  Globe2,
  Hospital,
  ImageIcon,
  MapPinned,
  ShieldCheck,
  Stethoscope,
  Users,
} from 'lucide-react'
import { useI18n } from '@/i18n/context'

type LocalizedText = {
  zh: string
  en: string
}

const overviewCards = [
  {
    value: {
      zh: '北京 / 上海 / 广州 / 成都',
      en: 'Beijing / Shanghai / Guangzhou / Chengdu',
    },
    label: {
      zh: '常见合作城市',
      en: 'Common partner cities',
    },
  },
  {
    value: {
      zh: '综合医院 / 专科医院 / 国际医疗部',
      en: 'General hospitals / specialist centers / international units',
    },
    label: {
      zh: '按病例安排医院方向',
      en: 'Hospital direction based on the case',
    },
  },
  {
    value: {
      zh: '门诊 / 检查 / 住院 / 复查',
      en: 'Consultation / testing / admission / follow-up',
    },
    label: {
      zh: '可衔接完整就医路径',
      en: 'Supports the full care pathway',
    },
  },
  {
    value: {
      zh: '资料评估后再确认排期',
      en: 'Scheduling after file review',
    },
    label: {
      zh: '先确认病例，再推进预约',
      en: 'Review first, then move into booking',
    },
  },
] as const

const serviceNotes = [
  {
    icon: ClipboardCheck,
    title: {
      zh: '资料评估',
      en: 'File review',
    },
    desc: {
      zh: '我们先看病历、影像、病理和当前治疗节点，再给医院和科室方向。资料不全时，会直接告诉你要补什么。',
      en: 'We review records, imaging, pathology, and the current treatment stage before suggesting hospitals and specialties. If something is missing, we tell you exactly what to add.',
    },
  },
  {
    icon: Hospital,
    title: {
      zh: '医院安排',
      en: 'Hospital arrangement',
    },
    desc: {
      zh: '医院会结合病种、治疗目标、医生出诊、床位节奏和到院时间来定，不会固定只推一家医院。',
      en: 'The hospital choice is based on disease type, treatment goal, physician availability, bed timing, and arrival schedule. We do not push one fixed hospital for every case.',
    },
  },
  {
    icon: Users,
    title: {
      zh: '到院衔接',
      en: 'On-site coordination',
    },
    desc: {
      zh: '医院确认后，我们继续衔接门诊、检查、住院、翻译、接送和住宿，让客户知道每一步怎么走。',
      en: 'Once the hospital is confirmed, we continue with consultation booking, testing, admission, interpretation, pickup, and lodging so the patient knows each next step clearly.',
    },
  },
] as const

const partnerHospitals = [
  {
    city: {
      zh: '北京',
      en: 'Beijing',
    },
    name: {
      zh: '北京协和医院',
      en: 'Peking Union Medical College Hospital',
    },
    direction: {
      zh: '复杂内科、疑难病例、多学科会诊',
      en: 'Complex internal medicine, difficult cases, MDT review',
    },
    details: [
      {
        zh: '常见安排：初诊评估、复核诊断、综合门诊路径',
        en: 'Common setup: initial assessment, diagnosis review, integrated outpatient pathway',
      },
      {
        zh: '适合资料较多、既往治疗复杂、需要重新梳理方向的病例',
        en: 'Suitable for cases with extensive records, complex prior treatment, and the need to reset the pathway',
      },
    ],
    mediaClass:
      'bg-[linear-gradient(135deg,rgba(204,0,0,0.62),rgba(18,18,18,0.88)),radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_42%)]',
  },
  {
    city: {
      zh: '北京',
      en: 'Beijing',
    },
    name: {
      zh: '中国医学科学院肿瘤医院',
      en: 'Cancer Hospital, Chinese Academy of Medical Sciences',
    },
    direction: {
      zh: '肿瘤专病、系统治疗、肿瘤评估',
      en: 'Oncology pathways, systemic treatment, oncology review',
    },
    details: [
      {
        zh: '常见安排：肿瘤门诊、病理复核、治疗方案衔接',
        en: 'Common setup: oncology consultation, pathology review, treatment-plan coordination',
      },
      {
        zh: '适合诊断方向已明确、需要尽快进入肿瘤专病路径的病例',
        en: 'Suitable when the disease direction is already clear and rapid oncology access is needed',
      },
    ],
    mediaClass:
      'bg-[linear-gradient(135deg,rgba(122,0,0,0.72),rgba(10,10,10,0.92)),radial-gradient(circle_at_top_left,rgba(255,190,190,0.18),transparent_38%)]',
  },
  {
    city: {
      zh: '上海',
      en: 'Shanghai',
    },
    name: {
      zh: '上海交通大学医学院附属瑞金医院',
      en: 'Ruijin Hospital, Shanghai Jiao Tong University',
    },
    direction: {
      zh: '神经、内分泌、综合治疗管理',
      en: 'Neurology, endocrinology, and integrated treatment management',
    },
    details: [
      {
        zh: '常见安排：专科门诊、系统检查、阶段性住院',
        en: 'Common setup: specialist consultation, systematic testing, staged admission',
      },
      {
        zh: '适合需要稳定排期和持续治疗管理的客户',
        en: 'Suitable for patients who need stable scheduling and longer treatment management',
      },
    ],
    mediaClass:
      'bg-[linear-gradient(135deg,rgba(204,0,0,0.34),rgba(24,24,24,0.96)),radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_44%)]',
  },
  {
    city: {
      zh: '上海',
      en: 'Shanghai',
    },
    name: {
      zh: '复旦大学附属华山医院',
      en: 'Huashan Hospital, Fudan University',
    },
    direction: {
      zh: '神经系统、外科、疑难专科门诊',
      en: 'Neurology, surgery, and difficult specialty clinics',
    },
    details: [
      {
        zh: '常见安排：专科会诊、检查衔接、手术前评估',
        en: 'Common setup: specialty consultation, testing coordination, pre-op review',
      },
      {
        zh: '适合专科方向明确、希望直接进入对应门诊的病例',
        en: 'Suitable when the specialty direction is already clear and fast access is needed',
      },
    ],
    mediaClass:
      'bg-[linear-gradient(135deg,rgba(86,8,8,0.78),rgba(14,14,14,0.92)),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.16),transparent_40%)]',
  },
  {
    city: {
      zh: '广州',
      en: 'Guangzhou',
    },
    name: {
      zh: '中山大学肿瘤防治中心',
      en: 'Sun Yat-sen University Cancer Center',
    },
    direction: {
      zh: '肿瘤专病、放疗、化疗、复查管理',
      en: 'Oncology pathways, radiotherapy, chemotherapy, and follow-up management',
    },
    details: [
      {
        zh: '常见安排：肿瘤专病门诊、系统治疗、复查衔接',
        en: 'Common setup: oncology specialist clinic, systemic treatment, follow-up coordination',
      },
      {
        zh: '适合华南到院和肿瘤治疗节奏较紧的病例',
        en: 'Suitable for southern China access and oncology cases with tighter treatment timing',
      },
    ],
    mediaClass:
      'bg-[linear-gradient(135deg,rgba(204,0,0,0.56),rgba(26,12,12,0.94)),radial-gradient(circle_at_top_left,rgba(255,255,255,0.15),transparent_36%)]',
  },
  {
    city: {
      zh: '成都',
      en: 'Chengdu',
    },
    name: {
      zh: '四川大学华西医院',
      en: 'West China Hospital, Sichuan University',
    },
    direction: {
      zh: '外科、微创、康复与区域转诊',
      en: 'Surgery, minimally invasive care, recovery, and regional referral',
    },
    details: [
      {
        zh: '常见安排：术前评估、住院衔接、术后恢复管理',
        en: 'Common setup: pre-op review, admission coordination, post-op recovery management',
      },
      {
        zh: '适合西南区域到院和外科方向已经比较明确的病例',
        en: 'Suitable for southwest China access and cases with a clearer surgical direction',
      },
    ],
    mediaClass:
      'bg-[linear-gradient(135deg,rgba(204,0,0,0.42),rgba(18,18,18,0.95)),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.12),transparent_42%)]',
  },
] as const

const imageGallery = [
  {
    section: {
      zh: '门诊接待区',
      en: 'Outpatient reception',
    },
    hospital: {
      zh: '北京协和医院',
      en: 'Peking Union Medical College Hospital',
    },
    note: {
      zh: '适合首诊接待、资料递交和就诊前确认',
      en: 'Used for first-visit check-in, file handoff, and pre-visit confirmation',
    },
    mediaClass:
      'bg-[linear-gradient(135deg,rgba(204,0,0,0.58),rgba(0,0,0,0.68)),radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_34%)]',
  },
  {
    section: {
      zh: '国际医疗部',
      en: 'International medical unit',
    },
    hospital: {
      zh: '瑞金医院',
      en: 'Ruijin Hospital',
    },
    note: {
      zh: '适合国际客户到院后的接待与安排说明',
      en: 'Useful for international patient arrival and care setup explanation',
    },
    mediaClass:
      'bg-[linear-gradient(135deg,rgba(120,0,0,0.78),rgba(10,10,10,0.76)),radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_38%)]',
  },
  {
    section: {
      zh: '住院区',
      en: 'Inpatient area',
    },
    hospital: {
      zh: '华西医院',
      en: 'West China Hospital',
    },
    note: {
      zh: '适合住院前后衔接和家属陪同安排',
      en: 'Relevant for admission coordination and family support planning',
    },
    mediaClass:
      'bg-[linear-gradient(135deg,rgba(204,0,0,0.48),rgba(15,15,15,0.84)),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.16),transparent_40%)]',
  },
  {
    section: {
      zh: '检查区',
      en: 'Testing area',
    },
    hospital: {
      zh: '中山大学肿瘤防治中心',
      en: 'Sun Yat-sen University Cancer Center',
    },
    note: {
      zh: '适合影像、化验和系统检查衔接展示',
      en: 'Useful for imaging, lab, and coordinated testing presentation',
    },
    mediaClass:
      'bg-[linear-gradient(135deg,rgba(92,6,6,0.84),rgba(16,16,16,0.82)),radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_36%)]',
  },
] as const

const videoTours = [
  {
    title: {
      zh: '医院环境与到院路线',
      en: 'Hospital environment and arrival route',
    },
    hospital: {
      zh: '北京协和医院',
      en: 'Peking Union Medical College Hospital',
    },
    duration: '02:18',
    note: {
      zh: '主要展示门诊入口、接待动线和就诊前集合点。',
      en: 'Shows the outpatient entrance, reception flow, and meeting point before the visit.',
    },
    mediaClass:
      'bg-[linear-gradient(135deg,rgba(204,0,0,0.54),rgba(8,8,8,0.82)),radial-gradient(circle_at_center,rgba(255,255,255,0.18),transparent_36%)]',
  },
  {
    title: {
      zh: '国际客户接待与门诊区域',
      en: 'International patient reception and clinic area',
    },
    hospital: {
      zh: '瑞金医院',
      en: 'Ruijin Hospital',
    },
    duration: '03:05',
    note: {
      zh: '主要展示接待区域、候诊区域和门诊衔接方式。',
      en: 'Shows the reception area, waiting space, and clinic handoff flow.',
    },
    mediaClass:
      'bg-[linear-gradient(135deg,rgba(104,0,0,0.78),rgba(14,14,14,0.84)),radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_42%)]',
  },
  {
    title: {
      zh: '住院安排与病区环境',
      en: 'Admission setup and ward environment',
    },
    hospital: {
      zh: '华西医院',
      en: 'West China Hospital',
    },
    duration: '02:41',
    note: {
      zh: '主要展示住院区、病区动线和陪同家属关注的区域。',
      en: 'Shows the admission area, ward flow, and the spaces families usually focus on.',
    },
    mediaClass:
      'bg-[linear-gradient(135deg,rgba(204,0,0,0.44),rgba(12,12,12,0.9)),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.15),transparent_38%)]',
  },
] as const

const arrangementCards = [
  {
    icon: ShieldCheck,
    title: {
      zh: '综合医院安排',
      en: 'When we use a general hospital',
    },
    bullets: [
      {
        zh: '资料比较多，既往治疗过程复杂，需要重新梳理方向',
        en: 'When the file set is large, treatment history is complex, and the pathway needs to be reset',
      },
      {
        zh: '需要把门诊、检查、住院和后续管理放在同一条路径里',
        en: 'When consultation, testing, admission, and follow-up should stay in one pathway',
      },
      {
        zh: '需要多学科一起看病例，不能只看单一科室',
        en: 'When multiple specialties need to review the case together',
      },
    ],
  },
  {
    icon: Stethoscope,
    title: {
      zh: '专科医院安排',
      en: 'When we use a specialist center',
    },
    bullets: [
      {
        zh: '病种方向已经比较明确，目标是尽快进入对应专科门诊',
        en: 'When the disease direction is clear and quick specialty access is needed',
      },
      {
        zh: '重点是专项治疗、复查或固定专病路径',
        en: 'When the focus is targeted treatment, recheck, or a defined specialty pathway',
      },
      {
        zh: '客户更关注该专科的经验、排期和治疗节奏',
        en: 'When the patient mainly cares about specialty experience, scheduling, and treatment rhythm',
      },
    ],
  },
  {
    icon: Globe2,
    title: {
      zh: '确认医院时还会看这些',
      en: 'Other points we review before confirming',
    },
    bullets: [
      {
        zh: '医生出诊和床位情况',
        en: 'Physician availability and bed timing',
      },
      {
        zh: '客户来华时间、停留天数和预算范围',
        en: 'Travel date, length of stay, and budget range',
      },
      {
        zh: '检查、住院、翻译、接送和住宿能不能顺利衔接',
        en: 'Whether testing, admission, interpretation, pickup, and lodging can connect smoothly',
      },
    ],
  },
] as const

const cityDirections = [
  {
    city: {
      zh: '北京',
      en: 'Beijing',
    },
    summary: {
      zh: '常见于复杂病例、诊断复核和多学科会诊安排。',
      en: 'Common for complex cases, diagnosis review, and multidisciplinary arrangements.',
    },
    hospitals: [
      {
        zh: '北京协和医院',
        en: 'Peking Union Medical College Hospital',
      },
      {
        zh: '中国医学科学院肿瘤医院',
        en: 'Cancer Hospital, Chinese Academy of Medical Sciences',
      },
      {
        zh: '北京天坛医院',
        en: 'Beijing Tiantan Hospital',
      },
    ],
  },
  {
    city: {
      zh: '上海',
      en: 'Shanghai',
    },
    summary: {
      zh: '常见于神经、心血管、内分泌和长期治疗管理安排。',
      en: 'Common for neurology, cardiovascular care, endocrinology, and longer treatment planning.',
    },
    hospitals: [
      {
        zh: '瑞金医院',
        en: 'Ruijin Hospital',
      },
      {
        zh: '华山医院',
        en: 'Huashan Hospital',
      },
      {
        zh: '中山医院',
        en: 'Zhongshan Hospital',
      },
    ],
  },
  {
    city: {
      zh: '广州',
      en: 'Guangzhou',
    },
    summary: {
      zh: '常见于肿瘤专病路径和华南地区到院安排。',
      en: 'Common for oncology pathways and southern China access planning.',
    },
    hospitals: [
      {
        zh: '中山大学肿瘤防治中心',
        en: 'Sun Yat-sen University Cancer Center',
      },
      {
        zh: '中山大学附属第一医院',
        en: 'The First Affiliated Hospital of Sun Yat-sen University',
      },
    ],
  },
  {
    city: {
      zh: '成都',
      en: 'Chengdu',
    },
    summary: {
      zh: '常见于外科、微创和西南区域转诊安排。',
      en: 'Common for surgery, minimally invasive care, and southwest regional referral.',
    },
    hospitals: [
      {
        zh: '四川大学华西医院',
        en: 'West China Hospital, Sichuan University',
      },
    ],
  },
] as const

const preparationChecklist = [
  {
    zh: '病历、出院小结、门诊记录',
    en: 'Medical records, discharge summary, and clinic notes',
  },
  {
    zh: '影像报告、原始影像文件和病理报告',
    en: 'Imaging reports, original image files, and pathology reports',
  },
  {
    zh: '最近 6-12 个月的重要检查结果',
    en: 'Key findings from the last 6-12 months',
  },
  {
    zh: '既往治疗经过和当前用药情况',
    en: 'Treatment history and current medication use',
  },
  {
    zh: '这次来华想解决的问题，以及大致到院时间',
    en: 'The main goal for the China visit and the expected arrival window',
  },
  {
    zh: '是否有家属同行，对住宿和语言支持有什么要求',
    en: 'Whether family will accompany the patient and any lodging or language support requirements',
  },
] as const

const supportSteps = [
  {
    title: {
      zh: '确认医院前',
      en: 'Before hospital confirmation',
    },
    bullets: [
      {
        zh: '整理病例重点，确认医院和科室方向',
        en: 'Organize the case and confirm hospital and specialty direction',
      },
      {
        zh: '说明当前资料是否足够，缺什么直接列出来',
        en: 'Tell the patient whether the files are sufficient and list what is missing',
      },
    ],
  },
  {
    title: {
      zh: '确认医院后',
      en: 'After hospital confirmation',
    },
    bullets: [
      {
        zh: '继续推进门诊、检查、住院和时间安排',
        en: 'Move forward with consultation, testing, admission, and scheduling',
      },
      {
        zh: '同步翻译、接送、住宿和到院路线',
        en: 'Coordinate interpretation, pickup, lodging, and the arrival route',
      },
    ],
  },
  {
    title: {
      zh: '到院期间',
      en: 'During the visit',
    },
    bullets: [
      {
        zh: '配合关键门诊、检查和住院衔接',
        en: 'Support key consultations, testing, and admission handoffs',
      },
      {
        zh: '整理重要结论，方便客户和家属同步信息',
        en: 'Package key conclusions so patients and families stay aligned',
      },
    ],
  },
] as const

const faqs = [
  {
    q: {
      zh: '可以直接指定某家医院吗？',
      en: 'Can the patient request a specific hospital?',
    },
    a: {
      zh: '可以先提出偏好，我们会一起看病例和排期，再确认是不是这家医院最合适。',
      en: 'Yes. The patient can state a preference first, and we will review the case and schedule before confirming whether that hospital is the best fit.',
    },
  },
  {
    q: {
      zh: '资料不全可以先发吗？',
      en: 'Can we send the case before the files are complete?',
    },
    a: {
      zh: '可以。先把现有资料发来，我们会告诉你还缺什么，哪些必须补，哪些可以后补。',
      en: 'Yes. Send what you already have, and we will tell you what is still missing, what must be added now, and what can be added later.',
    },
  },
  {
    q: {
      zh: '医院确认后你们具体做什么？',
      en: 'What do you handle after the hospital is confirmed?',
    },
    a: {
      zh: '我们继续推进门诊、检查、住院、翻译、接送、住宿和到院期间的沟通衔接。诊断和治疗方案仍然由医院和医生决定。',
      en: 'We continue with consultation booking, testing, admission, interpretation, pickup, lodging, and on-site coordination. Diagnosis and treatment decisions remain with the hospital and doctors.',
    },
  },
  {
    q: {
      zh: '页面里的医院图片和视频说明什么？',
      en: 'What do the hospital images and videos represent on this page?',
    },
    a: {
      zh: '这一页展示的是我们常见对接医院和院区环境资料方向，方便客户先了解合作医院、到院环境和就诊动线。',
      en: 'This page shows the common partner hospitals and environment materials we use so patients can understand the partner hospitals, arrival environment, and care flow in advance.',
    },
  },
] as const

function pick(locale: 'zh' | 'en', text: LocalizedText) {
  return text[locale]
}

export default function HospitalsPage() {
  const { locale } = useI18n()

  return (
    <main className="min-h-screen bg-[#060606] text-white">
      <section className="relative overflow-hidden pb-20 pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(204,0,0,0.24),transparent_34%),radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_26%),linear-gradient(180deg,#080808_0%,#060606_100%)]" />

        <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
            <div>
              <div className="mb-5 inline-flex items-center rounded-full border border-[#cc0000]/30 bg-[#cc0000]/10 px-4 py-2 text-sm text-[#ffb4b4]">
                {locale === 'zh' ? 'Partner Hospitals' : 'Partner Hospitals'}
              </div>

              <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-5xl">
                {locale === 'zh' ? '合作医院与就医安排' : 'Partner Hospitals and Care Arrangements'}
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
                {locale === 'zh'
                  ? '我们会根据病例、当前治疗阶段、到院时间和预算，安排医院、科室和就诊顺序。下面这页主要给你看我们常对接的医院、城市、院区环境，以及医院确认前后会怎么推进。'
                  : 'We arrange hospitals, specialties, and visit order based on the case, current treatment stage, arrival timing, and budget. This page shows the hospitals and cities we commonly work with, the hospital environment materials we use, and how we move before and after hospital confirmation.'}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="mailto:support@sanain.com"
                  className="inline-flex items-center justify-center rounded-full bg-[#cc0000] px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#a30000]"
                >
                  <Stethoscope className="mr-2 h-4 w-4" />
                  {locale === 'zh' ? '提交病例资料' : 'Submit Medical Files'}
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
                {locale === 'zh' ? '服务说明' : 'Service Notes'}
              </p>
              <h2 className="mb-5 text-2xl font-semibold leading-tight">
                {locale === 'zh' ? '这一页主要看这三部分' : 'This page focuses on these three parts'}
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

      <section className="border-y border-white/8 bg-[#0d0d0d] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.24em] text-[#cc0000]">
              {locale === 'zh' ? '合作医院' : 'Partner Hospitals'}
            </p>
            <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
              {locale === 'zh' ? '常见合作医院' : 'Hospitals we commonly work with'}
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {partnerHospitals.map((item) => (
              <article
                key={item.name.en}
                className="overflow-hidden rounded-[32px] border border-white/10 bg-[#101010] shadow-[0_18px_55px_rgba(0,0,0,0.22)]"
              >
                <div className={`relative h-56 ${item.mediaClass}`}>
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.46)_100%)]" />
                  <div className="absolute left-6 top-6 inline-flex items-center rounded-full border border-white/15 bg-black/20 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/80">
                    {pick(locale, item.city)}
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-black/20 text-white">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">
                      {pick(locale, item.name)}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-white/80">
                      {pick(locale, item.direction)}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 p-6">
                  {item.details.map((detail) => (
                    <div
                      key={detail.en}
                      className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4 text-sm leading-7 text-white/72"
                    >
                      {pick(locale, detail)}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm uppercase tracking-[0.24em] text-[#cc0000]">
                {locale === 'zh' ? '医院环境图片' : 'Hospital Image Gallery'}
              </p>
              <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
                {locale === 'zh' ? '合作医院图片展示' : 'Hospital image materials'}
              </h2>
            </div>
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/68">
              <ImageIcon className="mr-2 h-4 w-4 text-[#cc0000]" />
              {locale === 'zh'
                ? '门诊区 / 检查区 / 住院区 / 国际医疗部'
                : 'Outpatient / testing / inpatient / international units'}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {imageGallery.map((item) => (
              <article
                key={`${item.hospital.en}-${item.section.en}`}
                className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-[0_14px_40px_rgba(0,0,0,0.2)]"
              >
                <div className={`relative aspect-[4/5] ${item.mediaClass}`}>
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.58)_100%)]" />
                  <div className="absolute left-5 top-5 inline-flex items-center rounded-full border border-white/15 bg-black/20 px-3 py-1 text-xs text-white/80">
                    {pick(locale, item.section)}
                  </div>
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-lg font-semibold text-white">
                      {pick(locale, item.hospital)}
                    </p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm leading-7 text-white/70">{pick(locale, item.note)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-[#0d0d0d] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.24em] text-[#cc0000]">
              {locale === 'zh' ? '医院环境视频' : 'Hospital Video Tours'}
            </p>
            <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
              {locale === 'zh' ? '常见医院视频资料' : 'Common hospital video materials'}
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {videoTours.map((item) => (
              <article
                key={`${item.hospital.en}-${item.title.en}`}
                className="overflow-hidden rounded-[32px] border border-white/10 bg-[#101010] shadow-[0_18px_55px_rgba(0,0,0,0.22)]"
              >
                <div className={`relative aspect-video ${item.mediaClass}`}>
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.54)_100%)]" />
                  <div className="absolute left-5 top-5 inline-flex items-center rounded-full border border-white/15 bg-black/20 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/80">
                    {item.duration}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-black/25 text-white backdrop-blur-sm">
                      <CirclePlay className="h-7 w-7" />
                    </div>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-sm text-white/70">{pick(locale, item.hospital)}</p>
                    <h3 className="mt-1 text-2xl font-semibold text-white">
                      {pick(locale, item.title)}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm leading-7 text-white/72">{pick(locale, item.note)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.24em] text-[#cc0000]">
              {locale === 'zh' ? '医院安排说明' : 'Hospital Arrangement Notes'}
            </p>
            <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
              {locale === 'zh' ? '医院和科室通常这样确认' : 'How we usually confirm the hospital and specialty'}
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {arrangementCards.map((item) => {
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

      <section className="border-y border-white/8 bg-[#0d0d0d] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
            <div className="rounded-[32px] border border-white/10 bg-[#101010] p-8 shadow-[0_18px_55px_rgba(0,0,0,0.22)]">
              <p className="mb-3 text-sm uppercase tracking-[0.24em] text-[#cc0000]">
                {locale === 'zh' ? '常见合作城市' : 'Partner Cities'}
              </p>
              <h2 className="mb-6 text-3xl font-semibold leading-tight">
                {locale === 'zh' ? '这些城市是我们常见安排方向' : 'These are the cities we arrange most often'}
              </h2>

              <div className="space-y-4">
                {cityDirections.map((item) => (
                  <article
                    key={item.city.en}
                    className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5"
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#cc0000]/12 text-[#cc0000]">
                        <MapPinned className="h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">
                        {pick(locale, item.city)}
                      </h3>
                    </div>
                    <p className="mb-4 text-sm leading-7 text-white/68">
                      {pick(locale, item.summary)}
                    </p>
                    <div className="grid gap-3">
                      {item.hospitals.map((hospital) => (
                        <div
                          key={hospital.en}
                          className="rounded-2xl border border-white/8 bg-black/15 px-4 py-4 text-sm leading-7 text-white/72"
                        >
                          {pick(locale, hospital)}
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-[#101010] p-8 shadow-[0_18px_55px_rgba(0,0,0,0.22)]">
              <p className="mb-3 text-sm uppercase tracking-[0.24em] text-[#cc0000]">
                {locale === 'zh' ? '资料准备' : 'File Preparation'}
              </p>
              <h2 className="mb-6 text-3xl font-semibold leading-tight">
                {locale === 'zh' ? '确认医院前先准备这些资料' : 'Prepare these files before hospital confirmation'}
              </h2>

              <div className="space-y-3">
                {preparationChecklist.map((item) => (
                  <div
                    key={item.en}
                    className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4"
                  >
                    <ClipboardCheck className="mt-1 h-4 w-4 shrink-0 text-[#cc0000]" />
                    <p className="text-sm leading-7 text-white/72">{pick(locale, item)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
            <div className="rounded-[32px] border border-white/10 bg-[#101010] p-8 shadow-[0_18px_55px_rgba(0,0,0,0.22)]">
              <p className="mb-3 text-sm uppercase tracking-[0.24em] text-[#cc0000]">
                {locale === 'zh' ? '我们负责的安排' : 'What We Coordinate'}
              </p>
              <h2 className="mb-6 text-3xl font-semibold leading-tight">
                {locale === 'zh' ? '医院确认前后，我们主要做这些' : 'This is what we handle before and after confirmation'}
              </h2>

              <div className="space-y-5">
                {supportSteps.map((group, index) => (
                  <article
                    key={group.title.en}
                    className={`rounded-[28px] border p-6 ${
                      index === 1
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

            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.24em] text-[#cc0000]">
                {locale === 'zh' ? '常见问题' : 'FAQ'}
              </p>
              <h2 className="mb-6 text-3xl font-semibold leading-tight md:text-4xl">
                {locale === 'zh' ? '医院安排相关常见问题' : 'Common questions about hospital arrangements'}
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
          </div>
        </div>
      </section>

      <section className="border-t border-white/8 pb-20 pt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-[#cc0000]/20 bg-[linear-gradient(180deg,rgba(204,0,0,0.14),rgba(255,255,255,0.03))] p-8 shadow-[0_18px_55px_rgba(0,0,0,0.22)]">
            <p className="mb-3 text-sm uppercase tracking-[0.24em] text-white/60">Sana</p>
            <h2 className="mb-4 text-3xl font-semibold leading-tight">
              {locale === 'zh' ? '先提交病例资料，我们来安排医院方向' : 'Submit the case first and we will arrange the hospital direction'}
            </h2>
            <p className="mb-6 max-w-3xl text-sm leading-7 text-white/72">
              {locale === 'zh'
                ? '你可以先发现有病历、影像、病理和当前想解决的问题。我们先看资料，再给医院、科室和下一步安排。'
                : 'You can start by sending the current records, imaging, pathology, and the main question that needs to be solved now. We review the case first, then return the hospital, specialty, and next-step arrangement.'}
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
                href="/second-opinion"
                className="inline-flex items-center justify-center rounded-full border border-white/12 bg-black/20 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:border-[#cc0000]/35 hover:text-[#ffd0d0]"
              >
                {locale === 'zh' ? '先看远程第二诊疗意见' : 'Explore Remote Second Opinion'}
                <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
