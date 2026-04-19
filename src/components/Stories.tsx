'use client'

import { useState } from 'react'
import type { PatientStory } from '@prisma/client'
import type { Swiper as SwiperType } from 'swiper'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Plus } from 'lucide-react'
import { useI18n } from '@/i18n/context'

import 'swiper/css'

interface StoriesProps {
  stories: PatientStory[]
}

const STORY_TEXTURE_BG = '/target/remote/4dce190aca534c92ad89689708585ee7.png'
const STORY_HOVER_BG = '/target/remote/f0283a3b8a0f446191875e27ca654806.jpg'
const STORY_PREV_ICON = '/target/remote/2a9b328ddb30490b985bb3607ef7713b.svg'
const STORY_NEXT_ICON = '/target/remote/2a5b0f3c86f34ebea0e76f78733be351.svg'
const STORIES_SECTION_BG =
  'https://819896296302317568.static.wqdcdn.com/res/1081120155347587072/20260404/b41285fc77ea452c955a8aac97187299.jpg'

const STORY_COPY = {
  zh: {
    title: '患者故事',
    subtitle: '海外患者就医纪实——用专业守护健康，用陪伴温暖跨国诊疗路',
    ageLabel: '年龄:',
  },
  en: {
    title: 'Patient Stories',
    subtitle:
      'Documenting overseas patient journeys with professional care and warm cross-border companionship.',
    ageLabel: 'Age:',
  },
} as const

const STORY_SLIDES = {
  zh: [
    {
      id: 1,
      title: '俄罗斯高端体检客户——精准筛查，守护全家健康',
      summary:
        'Anna一直重视全家健康，想要做一次全面精准的深度体检，俄罗斯本土体检项目单一、设备老旧，且无专业的多语种报告解读服务。在朋友推荐下，她通过Sana带着家人来到中国做全身体检。',
      name: 'Anna',
      location: '俄罗斯莫斯科',
      age: '38',
      image: '/target/remote/8dd1c1a97dae49178f992c4f565ff7e8.webp',
    },
    {
      id: 2,
      title: '美国慢性偏头痛患者——千年中医，摆脱十年病痛',
      summary:
        '得知中医在慢性疼痛调理上有独特优势后，她通过Sana平台开启了来华就医之旅。',
      name: 'Emily',
      location: '美国纽约',
      age: '42',
      image: '/target/remote/f56cd6f88b3d4f3ba56dc229a49186bf.webp',
    },
    {
      id: 3,
      title: '英国膝关节置换患者——高性价比，重拾行走自由',
      summary:
        'Thomas膝关节病变严重，无法正常行走，英国本土医院关节置换手术排队周期长达1年，且整体费用极高，术后康复服务也不完善。急于恢复行动能力的他，对比多国医疗资源后，选择了Sana平台来华就医。',
      name: 'Thomas',
      location: '英国伦敦',
      age: '68',
      image: '/target/remote/596227b31d3d401d8667727c47463ae5.webp',
    },
    {
      id: 4,
      title: '澳大利亚肝癌患者——绝境逢生，在中国重获新生',
      summary:
        '陷入绝望的Michael，偶然通过海外医疗论坛了解到Sana·Med in China平台，抱着试一试的心态提交了病历。',
      name: 'Michael',
      location: '澳大利亚悉尼',
      age: '54',
      image: '/target/remote/ad07fb89eb734a2da2850ce030966138.webp',
    },
  ],
  en: [
    {
      id: 1,
      title: 'Russian Premium Checkup Client - Precision Screening for Family Health',
      summary:
        'Anna wanted a comprehensive precision checkup for her family. Local options in Russia were limited, equipment was outdated, and multilingual report interpretation was unavailable. Through Sana, she brought her family to China for a full-body examination.',
      name: 'Anna',
      location: 'Moscow, Russia',
      age: '38',
      image: '/target/remote/8dd1c1a97dae49178f992c4f565ff7e8.webp',
    },
    {
      id: 2,
      title: 'American Chronic Migraine Patient - TCM Relief After Ten Years of Pain',
      summary:
        'After learning that traditional Chinese medicine offered unique benefits for chronic pain management, she started her medical journey to China through Sana.',
      name: 'Emily',
      location: 'New York, USA',
      age: '42',
      image: '/target/remote/f56cd6f88b3d4f3ba56dc229a49186bf.webp',
    },
    {
      id: 3,
      title: 'UK Knee Replacement Patient - Better Value and Walking Freely Again',
      summary:
        'Thomas suffered severe knee degeneration and could barely walk. In the UK, joint replacement came with long wait times, high costs, and limited rehabilitation support. After comparing options across countries, he chose Sana for treatment in China.',
      name: 'Thomas',
      location: 'London, UK',
      age: '68',
      image: '/target/remote/596227b31d3d401d8667727c47463ae5.webp',
    },
    {
      id: 4,
      title: 'Australian Liver Cancer Patient - Finding Hope and Starting Again',
      summary:
        'In despair, Michael discovered Sana Med in China through an overseas medical forum and submitted his records with a final hope that something was still possible.',
      name: 'Michael',
      location: 'Sydney, Australia',
      age: '54',
      image: '/target/remote/ad07fb89eb734a2da2850ce030966138.webp',
    },
  ],
} as const

function StoryCard({
  title,
  summary,
  name,
  location,
  age,
  image,
  ageLabel,
}: {
  title: string
  summary: string
  name: string
  location: string
  age: string
  image: string
  ageLabel: string
}) {
  return (
    <article className="relative h-[470px] w-[853.333px] shrink-0">
      <div
        className="group absolute left-[15px] right-[15px] top-[15px] bottom-[90px] overflow-hidden rounded-[20px] border-2 border-white/20 bg-white/[0.08235294117647059] transition-all duration-300 hover:-translate-y-[8px] hover:border-[#cc0000] hover:bg-black/40 hover:shadow-[0px_5px_15px_rgba(255,0,0,0.25098039215686274)]"
        style={{
          backgroundImage: `url(${STORY_TEXTURE_BG})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            backgroundImage: `url(${STORY_HOVER_BG})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundBlendMode: 'overlay',
          }}
        />

        <div className="absolute right-5 top-5 bottom-5 w-[330px]">
          <div className="relative h-full overflow-hidden rounded-[10px]">
            <img src={image} alt="" className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="absolute left-[30px] right-[380px] top-[45px] bottom-0">
          <div className="border-b-[20px] border-b-transparent shadow-[0px_1px_0px_rgba(255,255,255,0.2)]">
            <h3 className="text-left text-[20px] font-normal leading-[1.4] text-white">
              {title}
            </h3>
          </div>

          <p className="pt-[15px] text-left text-[14px] leading-[1.6] text-white/60">
            {summary}
          </p>
        </div>

        <div className="absolute left-[30px] right-[380px] bottom-0 flex h-[70px] items-center text-[12px] leading-[1.4] text-white/60">
          <span className="font-light">{name}</span>
          <span className="px-[10px]">·</span>
          <span>{location}</span>
          <span className="px-[10px]">·</span>
          <span>{ageLabel}</span>
          <span className="ml-[4px] font-light">{age}</span>
        </div>
      </div>
    </article>
  )
}

export function Stories({ stories }: StoriesProps) {
  void stories

  const { locale } = useI18n()
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null)
  const copy = STORY_COPY[locale]
  const slides = STORY_SLIDES[locale]

  return (
    <section
      id="stories"
      className="relative overflow-hidden py-20"
      style={{
        backgroundColor: 'rgba(6, 6, 6, 1)',
        backgroundImage: `url(${STORIES_SECTION_BG})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="relative mx-auto w-full">
        <div className="mb-[35px] pt-[80px] text-center">
          <div className="mb-4 flex items-start justify-center gap-4">
            <Plus
              className="mt-3 h-4 w-4 shrink-0 animate-spin text-[#cc0000] [animation-direction:reverse] [animation-duration:3s]"
              strokeWidth={6}
            />
            <h2 className="text-[36px] font-bold leading-[1.4] text-white">
              {copy.title}
            </h2>
            <Plus
              className="mt-3 h-4 w-4 shrink-0 animate-spin text-[#cc0000] [animation-duration:3s]"
              strokeWidth={6}
            />
          </div>
          <p className="text-[18px] leading-[1.6] text-white/60">
            {copy.subtitle}
          </p>
        </div>

        <div className="relative h-[470px]">
          <div className="absolute left-[-580px] top-0 h-[470px] w-[2560px]">
            <Swiper
              modules={[Navigation]}
              onSwiper={setSwiperInstance}
              slidesPerView="auto"
              spaceBetween={0}
              className="!h-[470px] !w-[2560px]"
            >
              {slides.map((story) => (
                <SwiperSlide
                  key={story.id}
                  className="!h-[470px] !w-[853.333px]"
                  style={{ height: '470px', width: '853.333px' }}
                >
                  <StoryCard {...story} ageLabel={copy.ageLabel} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <button
            type="button"
            onClick={() => swiperInstance?.slidePrev()}
            className="group absolute bottom-0 right-1/2 z-20 h-[70px] w-[90px] cursor-pointer flex items-center justify-center rounded-full transition-colors duration-200 hover:bg-white/[0.1450980392156863]"
            aria-label="Previous stories"
          >
            <span className="absolute inset-[15px] rounded-full bg-white/[0.1450980392156863] transition-colors duration-200 group-hover:bg-[#cc0000]" />
            <span
              className="absolute inset-0 m-auto h-[30%] w-[30%] bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${STORY_PREV_ICON})` }}
            />
          </button>

          <button
            type="button"
            onClick={() => swiperInstance?.slideNext()}
            className="group absolute bottom-0 left-1/2 z-20 h-[70px] w-[90px] cursor-pointer flex items-center justify-center"
            aria-label="Next stories"
          >
            <span className="absolute inset-[15px] rounded-full bg-white/[0.1450980392156863] transition-colors duration-200 group-hover:bg-[#cc0000]" />
            <span
              className="absolute inset-0 m-auto h-[30%] w-[30%] bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${STORY_NEXT_ICON})` }}
            />
          </button>
        </div>
      </div>
    </section>
  )
}
