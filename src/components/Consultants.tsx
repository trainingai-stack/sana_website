'use client'

import { useI18n } from '@/i18n/context'
import type { Consultant } from '@prisma/client'
import { Plus } from 'lucide-react'

interface ConsultantsProps {
  consultants: Consultant[]
}

const CONSULTANT_BADGE_ICON =
  'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeGxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ5MC4yIDQ5MC4yIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0OTAuMiA0OTAuMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMSkiPgo8Zz4KCTxwYXRoIGQ9Ik00MjAuOTUsNjEuOEMzNzYuMjUsMjAuNiwzMjAuNjUsMCwyNTQuMjUsMGMtNjkuOCwwLTEyOS4zLDIzLjQtMTc4LjQsNzAuM3MtNzMuNywxMDUuMi03My43LDE3NSAgIGMwLDY2LjksMjMuNCwxMjQuNCw3MC4xLDE3Mi42YzQ2LjksNDguMiwxMDkuOSw3Mi4zLDE4OS4yLDcyLjNjNDcuOCwwLDk0LjctOS44LDE0MC43LTI5LjVjMTUtNi40LDIyLjMtMjMuNiwxNi4yLTM4LjdsMCwwICAgYy02LjMtMTUuNi0yNC4xLTIyLjgtMzkuNi0xNi4yYy00MCwxNy4yLTc5LjIsMjUuOC0xMTcuNCwyNS44Yy02MC44LDAtMTA3LjktMTguNS0xNDEuMy01NS42Yy0zMy4zLTM3LTUwLTgwLjUtNTAtMTMwLjQgICBjMC01NC4yLDE3LjktOTkuNCw1My42LTEzNS43YzM1LjYtMzYuMiw3OS41LTU0LjQsMTMxLjUtNTQuNGM0Ny45LDAsODguNCwxNC45LDEyMS40LDQ0LjdzNDkuNSw2Ny4zLDQ5LjUsMTEyLjUgICBjMCwzMC45LTcuNiw1Ni43LTIyLjcsNzcuMmMtMTUuMSwyMC42LTMwLjgsMzAuOC00Ny4xLDMwLjhjLTguOCwwLTEzLjItNC43LTEzLjItMTQuMmMwLTcuNywwLjYtMTYuNywxLjctMjcuMWwxOC42LTE1Mi4xaC02NCAgIGwtNC4xLDE0LjljLTE2LjMtMTMuMy0zNC4yLTIwLTUzLjYtMjBjLTMwLjgsMC01Ny4yLDEyLjMtNzkuMSwzNi44Yy0yMiwyNC41LTMyLjksNTYuMS0zMi45LDk0LjdjMCwzNy43LDkuNyw2OC4yLDI5LjIsOTEuMyAgIGMxOS41LDIzLjIsNDIuOSwzNC43LDcwLjMsMzQuN2MyNC41LDAsNDUuNC0xMC4zLDYyLjgtMzAuOGMxMy4xLDE5LjcsMzIuNCwyOS41LDU3LjksMjkuNWMzNy41LDAsNjkuOS0xNi4zLDk3LjItNDkgICBjMjcuMy0zMi42LDQxLTcyLDQxLTExOC4xQzQ4OC4wNSwxNTIuOSw0NjUuNzUsMTAzLDQyMC45NSw2MS44eiBNMjczLjU1LDI5MS45Yy0xMS4zLDE1LjItMjQuOCwyMi45LTQwLjUsMjIuOSAgIGMtMTAuNywwLTE5LjMtNS42LTI1LjgtMTYuOGMtNi42LTExLjItOS45LTI1LjEtOS45LTQxLjhjMC0yMC42LDQuNi0zNy4yLDEzLjgtNDkuOHMyMC42LTE5LDM0LjItMTljMTEuOCwwLDIyLjMsNC43LDMxLjUsMTQuMiAgIHMxMy44LDIyLjEsMTMuOCwzNy45QzI5MC41NSwyNTkuMiwyODQuODUsMjc2LjYsMjczLjU1LDI5MS45eiIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPg=='
const CONSULTANT_BADGE_CENTER_ICON = '/images/consultants/@_1.svg'
const CONSULTANT_IMAGES: Record<number, string> = {
  1: '/target/remote/e5726401b48c433aaaade223625cbda8.png',
  2: '/target/remote/a64c6942c673454084ccaed7cb748944.png',
  3: '/target/remote/e9509377544b4e6b96f95a34186ea356.png',
  4: '/target/remote/a64c6942c673454084ccaed7cb748944.png',
}

function ConsultantCard({
  consultant,
  locale,
}: {
  consultant: Consultant
  locale: 'zh' | 'en'
}) {
  const imageUrl =
    CONSULTANT_IMAGES[consultant.order] ||
    consultant.image ||
    '/target/remote/e5726401b48c433aaaade223625cbda8.png'

  return (
    <div className="relative h-[553px] px-[15px] pb-[15px] pt-[15px]">
      <div className="group relative flex h-full justify-center overflow-hidden rounded-[30px]">
        <div className="absolute inset-0 origin-center scale-x-0 rounded-[30px] bg-[#2098D1] transition-transform duration-300 ease-out group-hover:scale-x-100" />

        <div className="relative h-full w-full">
          <div className="h-[20px]" />

          <div
            className="relative mx-auto h-[421px] w-[90%] bg-transparent bg-contain bg-top bg-no-repeat"
            style={{ backgroundImage: `url(${imageUrl})` }}
          >
            <div
              className="absolute left-0 top-[3px] flex w-[20.5%] items-center justify-center rounded-[50px]"
              style={{
                aspectRatio: '1.3888888889 / 1',
                background:
                  'linear-gradient(to top right, rgba(204, 0, 0, 1), #2098D1)',
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0)',
                  backgroundImage: `url(${CONSULTANT_BADGE_ICON})`,
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                  borderColor: 'rgba(0, 0, 0, 0)',
                  borderStyle: 'solid',
                  borderWidth: '12px',
                  boxShadow: '0px 0px 0px rgba(255,0,0,1)',
                }}
              />
              <div
                className="absolute left-1/2 top-1/2 z-10 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 bg-contain bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${CONSULTANT_BADGE_CENTER_ICON})`,
                }}
              />
            </div>
          </div>

          <div className="pl-[14px] pt-[5px]">
            <p className="w-[90%] text-left text-[14px] font-normal leading-[1.4] text-white/60">
              {consultant.languages} {locale === 'zh' ? '顾问' : 'Consultant'}
            </p>
            <p className="w-[90%] pt-[5px] text-left text-[16px] font-bold leading-[1.4] text-white">
              {consultant.name}
            </p>
          </div>

          <div className="h-[25px]" />
        </div>
      </div>
    </div>
  )
}

export function Consultants({ consultants }: ConsultantsProps) {
  const { locale } = useI18n()

  return (
    <section
      className="relative overflow-hidden py-24"
      style={{ backgroundColor: 'rgba(6, 6, 6, 0.85)' }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: 'url(/images/backgrounds/bg-pattern-1.png)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#060606] via-transparent to-[#060606]" />
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#CC0000]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#CC0000]/30 to-transparent" />

      <div className="relative mx-auto w-full max-w-[1536px] px-4 sm:px-6 2xl:px-0">
        <div className="mb-10 text-center">
          <div className="mb-4 flex items-start justify-center gap-4">
            <Plus
              className="mt-3 h-4 w-4 shrink-0 animate-spin text-[#cc0000] [animation-duration:3s]"
              strokeWidth={6}
            />
            <h2 className="text-[36px] font-bold leading-[1.4] text-white">
              {locale === 'zh' ? 'SANA 全球顾问' : 'SANA Global Consultants'}
            </h2>
            <Plus
              className="mt-3 h-4 w-4 shrink-0 animate-spin text-[#cc0000] [animation-direction:reverse] [animation-duration:3s]"
              strokeWidth={6}
            />
          </div>
          <p className="mx-auto max-w-3xl text-[18px] leading-[1.6] text-white/60">
            {locale === 'zh'
              ? '以国际视野与人文关怀，为每一位患者提供定制化医疗解决方案。'
              : 'With a global perspective and human-centered care, we provide customized medical solutions for every patient.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {consultants.map((consultant) => (
            <ConsultantCard
              key={consultant.id}
              consultant={consultant}
              locale={locale}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
