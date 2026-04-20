'use client'

import Link from 'next/link'
import { Plus, ArrowUpRight } from 'lucide-react'
import { useI18n } from '@/i18n/context'

export function About() {
  const { locale } = useI18n()

  const copy = {
    zh: {
      title: '了解 Sana',
      paragraph1:
        'Sana，作为深耕跨国医疗服务的专业品牌，以「Med in China」为核心主张，致力于打破全球医疗资源壁垒，为每一位海外患者搭建安心、便捷、高性价比的来华就医桥梁。',
      paragraph2:
        '我们始终坚守以患者为中心的服务理念，整合国内JCI认证、三甲顶尖医院及权威医疗专家资源，覆盖精准重症治疗、中医特色理疗、高端健康体检、国际门诊等全品类医疗服务，全程提供病情评估、医疗签证协助、多语种翻译、专属陪诊、行程住宿安排、术后回国随访等一站式闭环服务。',
      cta: '了解更多',
    },
    en: {
      title: 'About Sana',
      paragraph1:
        'Sana is a professional brand deeply rooted in cross-border medical services. Guided by the idea of "Med in China", we work to remove barriers to global medical access and build a safe, convenient, and cost-effective bridge to healthcare in China for every overseas patient.',
      paragraph2:
        'We follow a patient-centered service philosophy and integrate JCI-accredited hospitals, top-tier medical institutions, and authoritative specialists across China. Our services span precision treatment, traditional Chinese medicine, premium health checkups, and international outpatient care, with end-to-end support from case evaluation and medical visa assistance to multilingual interpretation, escort services, travel arrangements, and post-treatment follow-up.',
      cta: 'Learn More',
    },
  }[locale]

  return (
    <section
      id="about"
      className="relative overflow-hidden"
      style={{
        minHeight: '760px',
        backgroundColor: 'rgba(6, 6, 6, 1)',
        backgroundImage: 'url(/images/backgrounds/about-intro-bg.png)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center -400px',
      }}
    >
      <div className="relative mx-auto h-full w-[90%]">
        <div className="h-[100px]" />

        <div className="relative flex flex-col gap-12 lg:min-h-[620px] lg:flex-row lg:items-start">
          <div className="relative w-full lg:w-[60%]">
            <div className="relative h-[520px]">
              <div
                className="absolute left-[15px] right-[15px] top-[14px] bottom-[16px]"
                style={{
                  backgroundImage: 'url(/images/about/bdc8273e64f84b41b7ed20300adc71ce.webp)',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  borderTopLeftRadius: '15px',
                  borderTopRightRadius: '15px',
                  borderBottomLeftRadius: '0px',
                  borderBottomRightRadius: '120px',
                  boxShadow: '0px 15px 0px rgba(204, 0, 0, 1)',
                }}
              />
            </div>
          </div>

          <div className="relative w-full lg:w-[40%] lg:pt-[50px]">
            <div className="w-full lg:w-[95%] lg:max-w-[540px]">
              <div className="mb-4 flex items-start gap-4">
                <Plus
                  className="mt-3 h-6 w-6 shrink-0 text-[#cc0000] animate-spin [animation-duration:3s]"
                  strokeWidth={3}
                />
                <h2 className="text-[36px] font-bold leading-[1.4] text-white">
                  {copy.title}
                </h2>
              </div>

              <p className="pt-[15px] text-left text-base leading-[1.8] text-white/60">
                {copy.paragraph1}
              </p>

              <p className="pt-[15px] text-left text-base leading-[1.8] text-white/60">
                {copy.paragraph2}
              </p>

              <Link
                href="#services"
                className="mt-[60px] flex h-[60px] w-[160px] items-center rounded-full bg-white/20 pr-[5px] text-white transition-colors hover:bg-white/25"
              >
                <span className="flex flex-1 items-center justify-center whitespace-nowrap text-base">
                  {copy.cta}
                </span>
                <span className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full bg-[#cc0000]">
                  <ArrowUpRight className="h-4 w-4 text-white" />
                </span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
