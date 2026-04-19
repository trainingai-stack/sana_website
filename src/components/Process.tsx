'use client'

import { Plus } from 'lucide-react'
import { useI18n } from '@/i18n/context'
import type { ProcessStep } from '@prisma/client'

interface ProcessProps {
  steps: ProcessStep[]
}

const PROCESS_POINT_ICON =
  '/target/remote/b308658f7ba8484eb1fb97f909312498.svg'

const PROCESS_COPY = {
  zh: {
    title: '一站式跨国就医全流程',
    subtitle:
      '从中国领先的专家那里获得全面的诊断和治疗方案评估。我们以灵活的选项优先考虑您的便利性，从经济实惠的医疗记录和影像审核开始，让您在无出差或时间冲突的情况下获得专家的清晰信息。',
  },
  en: {
    title: 'One-Stop Cross-Border Medical Process',
    subtitle:
      'Obtain comprehensive diagnosis and treatment plan evaluations from leading experts in China. We prioritize your convenience with flexible options, starting from affordable medical record and imaging reviews so you can get clear expert guidance without travel or schedule conflicts.',
  },
} as const

const PROCESS_OVERRIDES_ZH: Record<
  number,
  { title: string; lines: string[] }
> = {
  1: {
    title: '免费评估',
    lines: [
      '提交既往病历、病情简述',
      '免费病历审查、跨境就医适配性，规划专属诊疗路径',
      '全程保密、零费用评估，24小时极速反馈',
    ],
  },
  2: {
    title: '精准匹配',
    lines: [
      '确认就医需求、诊疗方向',
      '专属国际通道，三甲及国际认证医院、科室顶尖专家',
      '按需匹配、名医直达，免去繁琐筛选流程',
    ],
  },
  3: {
    title: '远程问诊',
    lines: [
      '上传诊断报告、影像资料',
      '顶尖专家复核诊断，出具书面诊疗方案与权威报告',
      '出行前敲定方案，72小时内邮箱直达，决策更安心',
    ],
  },
  4: {
    title: '方案定制',
    lines: [
      '根据诊断结果和患者需求',
      '报价入境规划',
      '全程保密、零费用评估，24小时极速反馈',
    ],
  },
  5: {
    title: '行程确认',
    lines: [
      '准备个人基础材料',
      '代办S1/S2医疗签证、预约酒店、专属接机、交通协调',
      '代办S1/S2医疗签证、预约酒店、专属接机、交通协调',
    ],
  },
  6: {
    title: '双语陪诊',
    lines: [
      '到院检查、专家面诊',
      '专业医学双语全程陪同，无障碍沟通、保障就医权益',
      '告别语言壁垒，就诊全程无忧、高效顺畅',
    ],
  },
  7: {
    title: '诊疗康复',
    lines: [
      '接受专项治疗、术后养护',
      '西医精准治疗+中医康养结合，康复方案、住院陪护',
      '中西结合康复快，副作用管控佳，恢复周期更短',
    ],
  },
  8: {
    title: '回国随访',
    lines: [
      '康复回国、远程复诊',
      '线上复诊、病历翻译归档、本地医生对接、用药指导',
      '康复不中断，长期健康守护，全程售后保障',
    ],
  },
}

function splitFallbackDescription(text: string) {
  const normalized = text.replace(/\r\n/g, '\n').trim()

  if (!normalized) {
    return []
  }

  const byLine = normalized
    .split('\n')
    .map((item) => item.trim())
    .filter(Boolean)

  if (byLine.length > 1) {
    return byLine
  }

  const sentences =
    normalized.match(/[^。！？.!?]+[。！？.!?]?/g)?.map((item) => item.trim()) ?? []

  return sentences.length > 0 ? sentences : [normalized]
}

function ProcessCard({
  step,
  locale,
}: {
  step: ProcessStep
  locale: 'zh' | 'en'
}) {
  const override = locale === 'zh' ? PROCESS_OVERRIDES_ZH[step.step] : undefined
  const title =
    override?.title ?? (locale === 'zh' ? step.titleZh : step.titleEn)
  const lines =
    override?.lines ??
    splitFallbackDescription(locale === 'zh' ? step.descZh : step.descEn)

  return (
    <div className="relative px-[15px] pb-[15px] pt-[15px]">
      <div className="group/outer relative h-[341px] rounded-[30px]">
        <div className="pointer-events-none absolute inset-0 rounded-[30px] opacity-0 shadow-[0px_0px_30px_rgba(255,0,0,1)] transition-opacity duration-300 group-hover/outer:opacity-100" />

        <div className="relative h-full rounded-[30px] bg-black p-[10px]">
          <div className="group relative h-full overflow-hidden rounded-[20px] border-2 border-white/20 bg-white/[0.08235294117647059] transition-[background-color,border-color] duration-300 hover:border-[#cc0000] hover:bg-[rgba(189,36,36,0.2)]">
            <div
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                backgroundImage:
                  'url(/target/remote/ef153785f4ea4f48a7b3ba5a2c141a83.png)',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
            />

            <div className="absolute left-1/2 top-0 h-[100px] w-[120%] -translate-x-1/2 rounded-b-[100%] bg-black shadow-[0px_0px_40px_rgba(204,0,0,0.44)] transition-shadow duration-300 group-hover:shadow-[0px_0px_30px_rgba(255,0,0,1)]" />

            <div className="absolute left-0 top-[21px] w-full text-center">
              <p className="text-[20px] font-bold leading-none text-white">
                {`STEP ${String(step.step).padStart(2, '0')}`}
              </p>
              <h3 className="mx-auto mt-[20px] w-[70%] text-[20px] font-normal leading-[1.4] text-white">
                {title}
              </h3>
            </div>

            <div className="relative px-[28px] pt-[120px]">
              <div className="h-5" />

              {lines.map((line, index) => {
                const isLast = index === lines.length - 1

                return (
                  <div
                    key={`${step.id}-${index}`}
                    className={`relative pl-6 pt-[10px] ${
                      isLast
                        ? 'pb-0'
                        : 'border-b border-dashed border-white/20 pb-[10px]'
                    }`}
                  >
                    <span
                      className="absolute left-0 top-[10px] h-6 w-4 bg-contain bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${PROCESS_POINT_ICON})` }}
                    />
                    <p className="whitespace-pre-line text-left text-[14px] leading-[1.6] text-white">
                      {line}
                    </p>
                  </div>
                )
              })}

              <div className="h-[15px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Process({ steps }: ProcessProps) {
  const { locale } = useI18n()
  const copy = PROCESS_COPY[locale]

  return (
    <section
      className="relative overflow-hidden py-20"
      style={{
        backgroundColor: 'rgba(6, 6, 6, 0.85)',
        backgroundImage:
          'url(/target/remote/dafb06a12d7846a687984ccb8fbc762d.jpg)',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="absolute inset-0 bg-[#060606]/55" />

      <div className="relative mx-auto max-w-[1536px] px-4 sm:px-6 2xl:px-0">
        <div className="mb-14 text-center">
          <div className="mb-4 flex items-start justify-center gap-4">
            <Plus
              className="mt-3 h-4 w-4 shrink-0 animate-spin text-[#cc0000] [animation-direction:reverse] [animation-duration:3s]"
              strokeWidth={6}
            />
            <h2 className="text-[36px] font-bold leading-[1.4] text-white">
              {copy.title}https://819896296302317568.static.wqdcdn.com/res/1081120155347587072/20260404/b41285fc77ea452c955a8aac97187299.jpgb
            </h2>
            <Plus
              className="mt-3 h-4 w-4 shrink-0 animate-spin text-[#cc0000] [animation-duration:3s]"
              strokeWidth={6}
            />
          </div>

          <p className="mx-auto max-w-5xl text-[18px] leading-[1.6] text-white/60">
            {copy.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <ProcessCard key={step.id} step={step} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  )
}
