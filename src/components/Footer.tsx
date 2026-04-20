'use client'

import Link from 'next/link'
import { useI18n } from '@/i18n/context'
import {
  footerLinkGroups,
  servicePages,
  type FooterLinkItem,
} from '@/content/footer-pages'

const FOOTER_LOGO = '/images/icons/footer-logo.svg'
const FOOTER_BG =
  'https://819896296302317568.static.wqdcdn.com/res/1081120155347587072/20260404/2593c6ae6cce457d84dfb6b384abd56e.jpg'
const SOCIAL_ICONS = [
  '/images/icons/wechat.svg',
  '/images/icons/twitter.svg',
  '/images/icons/tiktok.svg',
  '/images/icons/facebook.svg',
  '/images/icons/instagram.svg',
]

const FOOTER_COPY = {
  zh: {
    brand:
      '以专业护航跨国就医，以暖心陪伴诊疗全程，整合中国优质医疗资源，为全球患者搭建安心、便捷、高质量的来华就医桥梁。',
    contact: {
      title: '联系我们',
      lines: [
        '邮箱：support@sanain.com',
        '电话：+86 133 00000000',
        '微信：+86 133 00000000',
        '地址：中国 · 北京，海淀区XX街道XX大厦XXX号',
      ],
    },
  },
  en: {
    brand:
      'Sana supports international patients with coordinated access to medical care in China, combining clear guidance, practical logistics, and compassionate communication throughout the journey.',
    contact: {
      title: 'Contact Us',
      lines: [
        'Email: support@sanain.com',
        'Phone: +86 133 00000000',
        'WeChat: +86 133 00000000',
        'Address: Haidian District, Beijing, China',
      ],
    },
  },
}

const FIXED_SERVICE_FOOTER_SLUGS = [
  'health-checkups',
  'international-clinic',
  'precision-medicine',
] as const

const FIXED_SERVICE_FOOTER_LINKS: FooterLinkItem[] = FIXED_SERVICE_FOOTER_SLUGS.reduce<
  FooterLinkItem[]
>((links, slug) => {
  const page = servicePages.find((item) => item.slug === slug)

  if (page) {
    links.push({ href: page.href, label: page.title })
  }

  return links
}, [])

function FooterColumn({
  title,
  links,
}: {
  title: string
  links: FooterLinkItem[]
}) {
  const { locale } = useI18n()

  return (
    <div className="w-full shrink-0 border-[15px] border-transparent lg:w-[150px]">
      <h4 className="text-left text-[18px] font-bold leading-[1.4] text-white">
        {title}
      </h4>
      <div className="h-5" />
      <div className="space-y-0">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="flex h-[45px] items-center border-b border-transparent px-[5px] text-left text-[14px] leading-[1.4] text-white/70 shadow-[0px_1px_0px_rgba(255,255,255,0.2)] transition-colors duration-200 hover:text-[#cc0000]"
          >
            {link.label[locale]}
          </Link>
        ))}
      </div>
    </div>
  )
}

function ContactColumn({
  title,
  lines,
}: {
  title: string
  lines: string[]
}) {
  return (
    <div className="w-full shrink-0 border-[15px] border-transparent lg:w-[300px]">
      <h4 className="text-left text-[18px] font-bold leading-[1.4] text-white">
        {title}
      </h4>
      <div className="h-5" />
      <div className="space-y-0">
        {lines.map((line, index) => (
          <div
            key={line}
            className={`flex items-center border-b border-transparent px-[5px] text-left text-[14px] leading-[1.4] text-white/70 shadow-[0px_1px_0px_rgba(255,255,255,0.2)] ${
              index === lines.length - 1 ? 'h-[66px]' : 'h-[45px]'
            }`}
          >
            {line}
          </div>
        ))}
      </div>
    </div>
  )
}

export function Footer() {
  const { locale } = useI18n()
  const copy = FOOTER_COPY[locale]

  return (
    <footer
      className="relative overflow-hidden text-gray-300"
      style={{
        backgroundColor: 'rgba(6, 6, 6, 0.85)',
        backgroundImage: `url(${FOOTER_BG})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="relative mx-auto max-w-[1440px] px-[15px] pt-20">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-start lg:gap-0">
          <div className="w-full shrink-0 border-[15px] border-transparent lg:w-[360px]">
            <div
              className="h-[70px] w-full bg-contain bg-left bg-no-repeat"
              style={{ backgroundImage: `url(${FOOTER_LOGO})` }}
            />
            <div className="h-5" />
            <p className="text-left text-[14px] leading-[1.8] text-white/70">
              {copy.brand}
            </p>
            <div className="h-10" />
            <div className="flex h-[60px] items-center">
              {SOCIAL_ICONS.map((icon) => (
                <div
                  key={icon}
                  className="h-[60px] w-[50px] shrink-0 border-b-[5px] border-l-[5px] border-r-[10px] border-t-[5px] border-transparent"
                >
                  <a
                    href="#"
                    className="relative flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white/20 transition-colors duration-200 hover:bg-[#cc0000]"
                    aria-label="Sana social link"
                  >
                    <span
                      className="absolute left-1/4 top-1/4 h-1/2 w-1/2 bg-contain bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${icon})` }}
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>

          <FooterColumn
            title={footerLinkGroups.about.title[locale]}
            links={footerLinkGroups.about.links}
          />
          <FooterColumn
            title={footerLinkGroups.services.title[locale]}
            links={FIXED_SERVICE_FOOTER_LINKS}
          />
          <FooterColumn
            title={footerLinkGroups.news.title[locale]}
            links={footerLinkGroups.news.links}
          />
          <ContactColumn title={copy.contact.title} lines={copy.contact.lines} />
        </div>

        <div className="border-[15px] border-b-[20px] border-l-[15px] border-r-[15px] border-t-[15px] border-transparent">
          <div className="h-[15px] border-t border-white/20" />
          <div className="flex flex-col gap-4 py-[15px] text-[12px] font-light text-white/70 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex flex-wrap items-center">
              <span className="px-[3px]">© 2026</span>
              <span className="cursor-pointer px-[3px]">Sana</span>
              <span className="px-[3px]">All right reserved.</span>
            </div>

            <div className="flex flex-wrap items-center">
              {footerLinkGroups.legal.links.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-[3px] text-white/70 transition-colors duration-200 hover:text-[#cc0000]"
                >
                  {item.label[locale]}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
