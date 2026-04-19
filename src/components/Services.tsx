'use client'

import Link from 'next/link'
import { Plus } from 'lucide-react'
import type { MedicalService } from '@prisma/client'

interface ServicesProps {
  services: MedicalService[]
}

const serviceCards = [
  {
    id: 'checkup',
    icon: '/images/services/service-icon-checkup.png',
    title: '体检服务\n—',
    description:
      '从基础体检到高端基因检测，我们提供国际标准的全面健康评估。多语言医疗团队与先进设备，让您快速获取精准报告，掌握健康全貌。',
    bullets: [
      '▸ 覆盖全身系统的深度筛查',
      '▸ 48小时内出具体检报告',
      '▸ 双语专家解读健康数据',
    ],
  },
  {
    id: 'clinic',
    icon: '/images/services/service-icon-clinic.png',
    title: '国际门诊\n—',
    description:
      '为国际患者提供多语种支持、国际保险直付、资深专家团队与私密诊疗环境。快速预约，无需等待，尊享国际化医疗标准。',
    bullets: [
      'JCI标准，全球医疗质量保障',
      '100+位国际医疗背景专家坐诊',
      '合作200+家国际保险公司',
    ],
  },
  {
    id: 'precision',
    icon: '/images/services/service-icon-precision.png',
    title: '精准医疗\n—',
    description:
      '基于基因检测与大数据分析，提供个性化的癌症治疗、慢性病管理及抗衰老方案。国际认证专家团队，让治疗更精准、更高效。',
    bullets: [
      '▸ 国际领先的基因测序技术',
      '▸ 靶向治疗方案，副作用更低',
      '▸ 90%以上早期癌症检出率',
    ],
  },
  {
    id: 'tcm',
    icon: '/images/services/service-icon-tcm.png',
    title: '中医理疗\n—',
    description:
      '结合传统中医（针灸、推拿、中药）与现代科技，缓解疼痛、调理慢性病、提升免疫力。国际患者见证：自然疗法，持久疗效。',
    bullets: [
      '▸ 非侵入式治疗，副作用低',
      '▸ 个性化中医方案与西医协同',
      '▸ 85%慢性疼痛缓解率',
    ],
  },
] as const

function ServiceCard({
  title,
  description,
  bullets,
  icon,
}: (typeof serviceCards)[number]) {
  return (
    <div className="group relative h-[470px] px-[15px] pb-[45px] pt-[15px] transition-transform duration-300 ease-out will-change-transform hover:-translate-y-[6px]">
      <div
        className="relative h-full overflow-hidden rounded-[20px] border-2 border-white/20 transition-[border-color,box-shadow] duration-300 ease-out group-hover:border-[#cc0000] group-hover:shadow-[0px_5px_15px_rgba(0,0,0,0.12549019607843137)]"
        style={{
          backgroundImage:
            'url(/target/remote/38a4042f525e43cd97c4c65d5e893ac1.png)',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.08235294117647059)',
            backgroundImage:
              'url(/target/remote/5ec7781183324bf5a6d9af2a161a50aa.png)',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        />
        <div className="absolute bottom-0 left-[26%] right-[26%] h-[5px] rounded-t-[5px] bg-white/20 transition-colors duration-300 ease-out group-hover:bg-[#cc0000]" />

        <div className="absolute inset-x-[30px] bottom-[15px] top-[30px]">
          <div
            className="h-[70px] w-[80px] bg-contain bg-left bg-no-repeat"
            style={{ backgroundImage: `url(${icon})` }}
          />

          <div className="mt-[-70px] ml-[70px] flex min-h-[70px] items-center border-l-[15px] border-transparent">
            <h3 className="whitespace-pre-line text-left text-[22px] font-normal leading-[1.4] text-white">
              {title}
            </h3>
          </div>

          <div className="h-[20px]" />

          <p className="text-left text-[14px] leading-[1.8] text-white">
            {description}
          </p>

          <div className="h-[20px] border-b border-white/20" />

          <p className="whitespace-pre-line pt-[15px] text-left text-[14px] leading-[1.8] text-white">
            {bullets.join('\n')}
          </p>

          <div className="absolute inset-x-0 bottom-0 flex h-[60px] items-center justify-between">
            <Link
              href="#"
              className="flex h-[40px] w-[48%] items-center justify-center rounded-[5px] border border-white/20 bg-white/[0.13333333333333333] text-[14px] text-white transition-colors hover:bg-[#cc0000] hover:border-[#cc0000]"
            >
              了解详情
            </Link>
            <Link
              href="#contact"
              className="flex h-[40px] w-[48%] items-center justify-center rounded-[5px] border border-white/20 bg-white/[0.13333333333333333] text-[14px] text-white transition-colors hover:bg-[#cc0000] hover:border-[#cc0000]"
            >
              立即咨询
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Services({ services }: ServicesProps) {
  void services

  return (
    <section
      id="services"
      className="relative overflow-hidden py-24"
      style={{
        backgroundColor: 'rgba(6, 6, 6, 1)',
        backgroundImage: 'url(/images/backgrounds/services-section-bg.png)',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '80% auto',
      }}
    >
      <div className="relative mx-auto w-full max-w-[1536px] px-4 sm:px-6 2xl:px-0">
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-start justify-center gap-4">
            <Plus
              className="mt-3 h-4 w-4 shrink-0 animate-spin text-[#cc0000] [animation-duration:3s]"
              strokeWidth={6}
            />
            <h2 className="text-[36px] font-bold leading-[1.4] text-white">
              医疗服务
            </h2>
            <Plus
              className="mt-3 h-4 w-4 shrink-0 animate-spin text-[#cc0000] [animation-direction:reverse] [animation-duration:3s]"
              strokeWidth={6}
            />
          </div>
          <p className="mx-auto max-w-3xl text-[18px] leading-[1.6] text-white/60">
            从精准诊断到中医调理，您的国际医疗一站式解决方案
          </p>
        </div>

        <div className="grid grid-cols-1 gap-y-6 md:grid-cols-2 xl:grid-cols-4">
          {serviceCards.map((card) => (
            <ServiceCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}
