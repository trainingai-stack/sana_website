'use client'

import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { useI18n } from '@/i18n/context'
import type { ContentPage, LocalizedText } from '@/content/footer-pages'

function pick(locale: 'zh' | 'en', text: LocalizedText) {
  return text[locale]
}

const CATEGORY_LABELS = {
  about: { zh: '关于我们', en: 'About Us' },
  services: { zh: '医疗服务', en: 'Medical Services' },
  insights: { zh: '就医动态', en: 'Medical News' },
  legal: { zh: '法律支持', en: 'Legal' },
} as const

export function FooterContentPage({ page }: { page: ContentPage }) {
  const { locale } = useI18n()

  return (
    <main className="bg-[#060606] text-white">
      <section className="relative overflow-hidden pb-16 pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(204,0,0,0.22),transparent_38%),radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_28%),linear-gradient(180deg,#080808_0%,#060606_100%)]" />

        <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 text-sm text-white/60">
            <Link href="/" className="transition-colors duration-200 hover:text-[#cc0000]">
              {locale === 'zh' ? '首页' : 'Home'}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span>{pick(locale, CATEGORY_LABELS[page.category])}</span>
          </div>

          <div className="max-w-4xl">
            <p className="mb-4 text-sm uppercase tracking-[0.28em] text-[#cc0000]">
              {pick(locale, CATEGORY_LABELS[page.category])}
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
              {pick(locale, page.title)}
            </h1>
            <p className="mb-4 max-w-3xl text-lg leading-8 text-white/80">
              {pick(locale, page.summary)}
            </p>
            <p className="max-w-3xl text-base leading-8 text-white/60">
              {pick(locale, page.description)}
            </p>
          </div>

          {page.stats && (
            <div className="grid gap-4 md:grid-cols-3">
              {page.stats.map((item) => (
                <div
                  key={`${item.value}-${item.label.en}`}
                  className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md"
                >
                  <div className="mb-2 text-3xl font-bold text-[#cc0000]">{item.value}</div>
                  <div className="text-sm leading-6 text-white/70">
                    {pick(locale, item.label)}
                  </div>
                </div>
              ))}
            </div>
          )}

          {page.highlights && (
            <div className="grid gap-4 lg:grid-cols-3">
              {page.highlights.map((item) => (
                <div
                  key={item.title.en}
                  className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.2)] backdrop-blur-md"
                >
                  <h2 className="mb-3 text-xl font-semibold text-white">
                    {pick(locale, item.title)}
                  </h2>
                  <p className="text-sm leading-7 text-white/70">
                    {pick(locale, item.description)}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:px-8">
          {page.sections.map((section, index) => (
            <article
              key={`${section.title.en}-${index}`}
              className="rounded-[32px] border border-white/10 bg-[#101010] p-8 shadow-[0_18px_55px_rgba(0,0,0,0.22)]"
            >
              <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
                <div>
                  <p className="mb-3 text-sm uppercase tracking-[0.24em] text-[#cc0000]">
                    {locale === 'zh' ? `章节 ${index + 1}` : `Section ${index + 1}`}
                  </p>
                  <h2 className="text-2xl font-semibold leading-tight text-white">
                    {pick(locale, section.title)}
                  </h2>
                </div>

                <div className="space-y-5">
                  {section.paragraphs.map((paragraph, paragraphIndex) => (
                    <p
                      key={`${paragraph.en}-${paragraphIndex}`}
                      className="text-base leading-8 text-white/72"
                    >
                      {pick(locale, paragraph)}
                    </p>
                  ))}

                  {section.bullets && (
                    <ul className="grid gap-3 pt-1">
                      {section.bullets.map((bullet, bulletIndex) => (
                        <li
                          key={`${bullet.en}-${bulletIndex}`}
                          className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4 text-sm leading-7 text-white/72"
                        >
                          {pick(locale, bullet)}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </article>
          ))}

          {page.disclaimer && (
            <div className="rounded-[28px] border border-[#cc0000]/20 bg-[#cc0000]/8 p-6 text-sm leading-7 text-white/80">
              {pick(locale, page.disclaimer)}
            </div>
          )}

          <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,rgba(204,0,0,0.22),rgba(255,255,255,0.06))] p-8 shadow-[0_18px_55px_rgba(0,0,0,0.22)]">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="mb-3 text-sm uppercase tracking-[0.24em] text-white/60">
                  Sana
                </p>
                <h2 className="mb-4 text-3xl font-semibold leading-tight text-white">
                  {locale === 'zh'
                    ? '如果您希望把这些信息变成可执行的就医计划，我们可以继续往下推进。'
                    : 'If you want to turn this information into an actionable care plan, we can help you move forward.'}
                </h2>
                <p className="text-base leading-7 text-white/70">
                  {locale === 'zh'
                    ? '从病历梳理、预约协调到来华行程安排，我们会根据您的具体情况给出下一步建议。'
                    : 'From record preparation and appointment coordination to travel planning, we can suggest next steps based on your specific situation.'}
                </p>
              </div>

              <Link
                href={page.ctaHref ?? '/#contact'}
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#111111] transition-transform duration-200 hover:-translate-y-0.5"
              >
                {pick(
                  locale,
                  page.ctaLabel ?? {
                    zh: '联系 Sana',
                    en: 'Contact Sana',
                  },
                )}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
