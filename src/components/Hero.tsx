'use client'

import Link from 'next/link'
import { useState } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useI18n } from '@/i18n/context'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const slides = [
  {
    id: 1,
    title: {
      zh: '中国医疗，全球关怀',
      en: 'Chinese Healthcare, Global Care',
    },
    subtitle: { zh: 'Sana - Med in China', en: 'Sana - Med in China' },
    description: {
      zh: 'Sana专注为国际患者提供一站式来华就医服务，从签证协助、医院预约到多语言陪诊，让您享受中国顶尖医疗资源，全程无忧。',
      en: 'Access top hospitals, leading specialists, and meaningful cost savings, all supported by personalized concierge care.',
    },
    image:
      'https://819896296302317568.static.wqdcdn.com/res/1081120155347587072/20260324/a49c8d2aaafb45bd874cbccde3339863.png',
  },
  {
    id: 2,
    title: {
      zh: '您通往中国\n先进医疗保健的桥梁',
      en: 'Your Bridge to\nAdvanced Healthcare in China',
    },
    subtitle: { zh: 'Sana - Med in China', en: 'Sana - Med in China' },
    description: {
      zh: '访问顶级医院、顶尖专家，并大幅节省成本 —— 所有这些都有个性化的礼宾支持。',
      en: 'Our professional medical translation team keeps communication clear and accurate throughout consultations, examinations, and treatment.',
    },
    image:
      'https://819896296302317568.static.wqdcdn.com/res/1081120155347587072/20260324/a511d84d293b4b11ae317d35c31be6ba.png',
  },
]

const socialIcons = [
  { id: 'facebook', icon: '/images/social-facebook.svg', href: '#' },
  { id: 'twitter', icon: '/images/social-twitter.svg', href: '#' },
  { id: 'instagram', icon: '/images/social-instagram.svg', href: '#' },
  { id: 'wechat', icon: '/images/social-wechat.svg', href: '#' },
  { id: 'tiktok', icon: '/images/social-tiktok.svg', href: '#' },
]

export function Hero() {
  const { locale } = useI18n()
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null)

  return (
    <section
      className="relative flex items-center overflow-hidden"
      style={{
        height: '880px',
        backgroundColor: 'rgba(6, 6, 6, 1)',
        backgroundImage: 'url(/images/backgrounds/bg-pattern-2.png)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(/images/backgrounds/bg-pattern-1.png)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
        }}
      />

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        onSwiper={setSwiperInstance}
        className="absolute inset-0 h-full w-full translate-y-[50px]"
      >
        {slides.map((slide) => {
          const title = slide.title[locale]
          const isTwoLineTitle = title.includes('\n')

          return (
          <SwiperSlide key={slide.id}>
            <div className="relative flex h-full w-full items-center">
              <div className="relative z-10 mx-auto h-full w-full px-4 sm:px-6 lg:px-8">
                <div className="relative h-full lg:pl-[96px]">
                  <div className="flex h-full max-w-3xl flex-col justify-center text-left lg:w-[66%]">
                    <p className="mb-8 inline-flex h-10 w-fit items-center justify-center rounded-full border border-white/50 bg-black/20 px-6 text-base font-bold text-white">
                      {slide.subtitle[locale]}
                    </p>
                    <h1 className={`mb-6 whitespace-pre-line font-bold leading-[1.4] text-white ${
                      isTwoLineTitle
                        ? 'text-[38px] sm:text-5xl lg:text-[51px]'
                        : 'text-5xl sm:text-6xl lg:text-[64px]'
                    }`}>
                      {title}
                    </h1>
                    <p className="mb-10 max-w-[78%] text-xl leading-[1.6] text-white">
                      {slide.description[locale]}
                    </p>
                    <Link
                      href="#about"
                      className="flex h-[60px] w-[160px] items-center rounded-full bg-white/20 pr-[5px] text-white transition-colors hover:bg-white/25"
                    >
                      <span className="flex flex-1 items-center justify-center whitespace-nowrap text-base">
                        {locale === 'zh' ? '了解更多' : 'Learn More'}
                      </span>
                      <span className="flex h-[36px] w-[36px] shrink-0 aspect-square items-center justify-center rounded-full bg-[#cc0000]">
                        <ArrowUpRight className="h-4 w-4 text-white" />
                      </span>
                    </Link>
                  </div>
                  <div className="absolute right-[10%] top-[80px] bottom-0 hidden w-[30%] items-center justify-end lg:flex">
                    <div
                      className="h-full w-full bg-contain bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${slide.image})` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          )
        })}
      </Swiper>
      <div className="absolute bottom-[2px] left-[-6px] z-2 flex sm:left-[-6px] lg:left-[110px]">
        <button
          onClick={() => swiperInstance?.slidePrev()}
          className="flex h-[85px] w-[85px] items-center justify-center"
        >
          <div className="flex h-[55px] w-[55px] items-center justify-center rounded-full bg-white/27 backdrop-blur-sm">
            <ChevronLeft className="h-6 w-6 text-white" />
          </div>
        </button>

        <button
          onClick={() => swiperInstance?.slideNext()}
          className="flex h-[85px] w-[85px] items-center justify-center"
        >
          <div className="flex h-[55px] w-[55px] items-center justify-center rounded-full bg-white/27 backdrop-blur-sm">
            <ChevronRight className="h-6 w-6 text-white" />
          </div>
        </button>
      </div>

      <div className="absolute bottom-[18px] right-[98px] z-20 hidden items-center gap-5 lg:flex">
        <div className="flex items-center gap-3 text-white/85">
          <span className="h-[10px] w-[10px] rounded-full border border-white/60" />
          <span className="h-px w-[100px] bg-white/60" />
        </div>
        <span className="text-[14px] font-light tracking-[0.04em] text-white">
          FOLLOW US
        </span>
        <div className="flex items-center gap-[2px]">
          {socialIcons.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="flex h-[30px] w-[30px] items-center justify-center"
              aria-label={item.id}
            >
              <span
                className="h-[16px] w-[16px] bg-contain bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${item.icon})` }}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
