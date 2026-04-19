'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  ChevronDown,
  Globe,
  HeartPulse,
  Menu,
  ScanSearch,
  Stethoscope,
  X,
} from 'lucide-react'
import type { NavItem } from '@prisma/client'
import { locales, localeNames, type Locale } from '@/i18n/config'
import { useI18n } from '@/i18n/context'

interface HeaderProps {
  navItems: NavItem[]
}

type TreatmentMenuCard = {
  label: string
  href: string
  iconType: 'lucide' | 'remote'
  iconKey?: 'checkup' | 'precision' | 'clinic'
  iconSrc?: string
  cardClassName: string
  iconClassName?: string
}

type TreatmentMenuTab = {
  label: string
  cards: TreatmentMenuCard[]
}

const TREATMENT_MENU = {
  zh: {
    tabs: [
      {
        label: '核心医疗服务',
        cards: [
          {
            label: '中医诊疗',
            href: '/services/tcm-diagnosis',
            iconType: 'remote',
            iconSrc: '/target/remote/db822a50c1a84c269f647cf4c0ecf518.svg',
            cardClassName: 'left-[150px] top-[38px]',
          },
          {
            label: '精准医疗',
            href: '/services/precision-medicine',
            iconType: 'lucide',
            iconKey: 'precision',
            cardClassName: 'left-[270px] top-[38px]',
          },
          {
            label: '体检服务',
            href: '/services/health-checkups',
            iconType: 'lucide',
            iconKey: 'checkup',
            cardClassName: 'left-[180px] top-[92px]',
          },
          {
            label: '门诊服务',
            href: '/services/international-clinic',
            iconType: 'lucide',
            iconKey: 'clinic',
            cardClassName: 'left-[300px] top-[92px]',
          },
        ],
      },
      {
        label: '医疗宾礼服务',
        cards: [
          {
            label: '入境协助',
            href: '/services/entry-assistance',
            iconType: 'remote',
            iconSrc: '/target/remote/8873b3630ef34a089ca0b37e77853214.svg',
            cardClassName: 'left-[240px] top-[38px]',
          },
          {
            label: '双语陪诊',
            href: '/services/bilingual-escort',
            iconType: 'remote',
            iconSrc: '/target/remote/bc69d4feda4048b1a93a9e515551be54.svg',
            cardClassName: 'left-[210px] top-[92px]',
          },
          {
            label: '基础服务',
            href: '/services/basic-services',
            iconType: 'remote',
            iconSrc: '/target/remote/506418bba3e24352bfaf24ac188b968b.svg',
            cardClassName: 'left-[330px] top-[92px]',
            iconClassName:
              'absolute left-[17.5%] top-[17.5%] h-[65%] w-[65%] bg-contain bg-center bg-no-repeat',
          },
        ],
      },
      {
        label: '康复旅游服务',
        cards: [
          {
            label: '术后康复',
            href: '/services/post-op-recovery',
            iconType: 'remote',
            iconSrc: '/target/remote/8ba23025554747d38714e143cda53341.svg',
            cardClassName: 'left-[210px] top-[92px]',
          },
          {
            label: '医疗旅游',
            href: '/services/medical-tourism',
            iconType: 'remote',
            iconSrc: '/target/remote/46359f3d6b2a4e109c57e2bd5742d26b.svg',
            cardClassName: 'left-[330px] top-[92px]',
          },
        ],
      },
    ],
  },
  en: {
    tabs: [
      {
        label: 'Core Medical Services',
        cards: [
          {
            label: 'TCM Diagnosis',
            href: '/services/tcm-diagnosis',
            iconType: 'remote',
            iconSrc: '/target/remote/db822a50c1a84c269f647cf4c0ecf518.svg',
            cardClassName: 'left-[150px] top-[38px]',
          },
          {
            label: 'Precision Medicine',
            href: '/services/precision-medicine',
            iconType: 'lucide',
            iconKey: 'precision',
            cardClassName: 'left-[270px] top-[38px]',
          },
          {
            label: 'Health Checkups',
            href: '/services/health-checkups',
            iconType: 'lucide',
            iconKey: 'checkup',
            cardClassName: 'left-[180px] top-[92px]',
          },
          {
            label: 'Outpatient Services',
            href: '/services/international-clinic',
            iconType: 'lucide',
            iconKey: 'clinic',
            cardClassName: 'left-[300px] top-[92px]',
          },
        ],
      },
      {
        label: 'Medical Concierge',
        cards: [
          {
            label: 'Entry Assistance',
            href: '/services/entry-assistance',
            iconType: 'remote',
            iconSrc: '/target/remote/8873b3630ef34a089ca0b37e77853214.svg',
            cardClassName: 'left-[240px] top-[38px]',
          },
          {
            label: 'Bilingual Escort',
            href: '/services/bilingual-escort',
            iconType: 'remote',
            iconSrc: '/target/remote/bc69d4feda4048b1a93a9e515551be54.svg',
            cardClassName: 'left-[210px] top-[92px]',
          },
          {
            label: 'Basic Services',
            href: '/services/basic-services',
            iconType: 'remote',
            iconSrc: '/target/remote/506418bba3e24352bfaf24ac188b968b.svg',
            cardClassName: 'left-[330px] top-[92px]',
            iconClassName:
              'absolute left-[17.5%] top-[17.5%] h-[65%] w-[65%] bg-contain bg-center bg-no-repeat',
          },
        ],
      },
      {
        label: 'Recovery Tourism',
        cards: [
          {
            label: 'Post-op Recovery',
            href: '/services/post-op-recovery',
            iconType: 'remote',
            iconSrc: '/target/remote/8ba23025554747d38714e143cda53341.svg',
            cardClassName: 'left-[210px] top-[92px]',
          },
          {
            label: 'Medical Tourism',
            href: '/services/medical-tourism',
            iconType: 'remote',
            iconSrc: '/target/remote/46359f3d6b2a4e109c57e2bd5742d26b.svg',
            cardClassName: 'left-[330px] top-[92px]',
          },
        ],
      },
    ],
  },
} satisfies Record<Locale, { tabs: TreatmentMenuTab[] }>

function TreatmentMenuIcon({
  iconType,
  iconKey,
  iconSrc,
  iconClassName,
}: {
  iconType: 'lucide' | 'remote'
  iconKey?: 'checkup' | 'precision' | 'clinic'
  iconSrc?: string
  iconClassName?: string
}) {
  if (iconType === 'remote' && iconSrc) {
    return (
      <span
        className={
          iconClassName ??
          'absolute left-[20%] top-[20%] h-[60%] w-[60%] bg-contain bg-center bg-no-repeat'
        }
        style={{ backgroundImage: `url(${iconSrc})` }}
      />
    )
  }

  const iconClassNameBase = 'h-10 w-10 text-white'

  if (iconKey === 'checkup') {
    return <HeartPulse className={iconClassNameBase} strokeWidth={1.75} />
  }

  if (iconKey === 'precision') {
    return <ScanSearch className={iconClassNameBase} strokeWidth={1.75} />
  }

  return <Stethoscope className={iconClassNameBase} strokeWidth={1.75} />
}

function TreatmentsMegaMenu({
  locale,
  activeTab,
  onTabChange,
  onMouseEnter,
  onMouseLeave,
}: {
  locale: Locale
  activeTab: number
  onTabChange: (index: number) => void
  onMouseEnter: () => void
  onMouseLeave: () => void
}) {
  const tabs = TREATMENT_MENU[locale].tabs

  return (
    <div
      className="absolute left-1/2 top-[calc(100%-1px)] z-50 h-[330px] w-[1320px] max-w-[calc(100vw-64px)] -translate-x-1/2"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="relative h-full w-full overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0),rgba(0,0,0,0.6))]" />

        <div className="absolute inset-0 top-[10px]">
          <div className="flex h-[55px] justify-center">
            <ul className="flex justify-center">
              {tabs.map((tab, index) => {
                const isActive = index === activeTab

                return (
                  <li key={tab.label} className="m-[5px]">
                    <button
                      type="button"
                      onMouseEnter={() => onTabChange(index)}
                      onFocus={() => onTabChange(index)}
                      className={`relative h-[45px] w-[180px] rounded-full bg-white/20 text-[14px] leading-[1.4] transition-all duration-200 ${
                        isActive ? 'text-[#cc0000]' : 'text-white'
                      }`}
                    >
                      <span
                        className={`flex h-full w-full items-center justify-center rounded-full border transition-all duration-200 ${
                          isActive
                            ? 'border-white/60 bg-white text-[#cc0000]'
                            : 'border-white/[0.5333333333333333] bg-transparent text-white'
                        }`}
                      >
                        {tab.label}
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>

          <ul className="relative h-[255px] overflow-hidden">
            {tabs.map((tab, index) => {
              const isActive = index === activeTab

              return (
                <li
                  key={tab.label}
                  className={`absolute inset-0 transition-all duration-200 ${
                    isActive ? 'visible opacity-100' : 'invisible opacity-0'
                  }`}
                >
                  <div className="h-[15px]" />

                  <div className="relative mx-auto h-[220px] w-[720px] rounded-[15px] border border-white/20 bg-white/[0.13333333333333333] shadow-[0px_10px_30px_rgba(0,0,0,0.18823529411764706)] backdrop-blur-[10px]">
                    <div className="absolute inset-0 rounded-[15px] bg-[linear-gradient(to_top,rgba(204,0,0,0.6),rgba(0,47,167,0.6))]" />

                    <div className="relative flex h-full w-full items-center justify-center gap-10 px-10">
                      {tab.cards.map((card) => (
                        <Link
                          key={card.label}
                          href={card.href}
                          className="group flex h-[126px] w-[120px] shrink-0 flex-col items-center justify-start text-center"
                        >
                          <span className="relative flex h-20 w-20 items-center justify-center rounded-[20px] bg-white/[0.3333333333333333] transition-transform duration-200 group-hover:scale-95">
                            <span className="absolute inset-0 rounded-[20px] bg-[linear-gradient(to_left_top,rgba(255,255,255,0),rgba(255,255,255,0.17))]" />

                            <span className="relative flex h-full w-full items-center justify-center">
                              <TreatmentMenuIcon
                                iconType={card.iconType}
                                iconKey={card.iconKey}
                                iconSrc={card.iconSrc}
                                iconClassName={card.iconClassName}
                              />
                            </span>
                          </span>

                          <span className="mt-[1px] px-2 pt-2 text-[14px] leading-[1.4] text-white">
                            {card.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export function Header({ navItems }: HeaderProps) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [showLangMenu, setShowLangMenu] = useState(false)
  const [showTreatmentsMenu, setShowTreatmentsMenu] = useState(false)
  const [activeTreatmentTab, setActiveTreatmentTab] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const treatmentsMenuCloseTimeoutRef = useRef<number | null>(null)
  const { locale, setLocale } = useI18n()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname === href
  }

  const handleLocaleChange = (newLocale: Locale) => {
    setLocale(newLocale)
    setShowLangMenu(false)
  }

  const openTreatmentsMenu = () => {
    if (treatmentsMenuCloseTimeoutRef.current !== null) {
      window.clearTimeout(treatmentsMenuCloseTimeoutRef.current)
      treatmentsMenuCloseTimeoutRef.current = null
    }

    setShowTreatmentsMenu(true)
  }

  const scheduleTreatmentsMenuClose = () => {
    if (treatmentsMenuCloseTimeoutRef.current !== null) {
      window.clearTimeout(treatmentsMenuCloseTimeoutRef.current)
    }

    treatmentsMenuCloseTimeoutRef.current = window.setTimeout(() => {
      setShowTreatmentsMenu(false)
      treatmentsMenuCloseTimeoutRef.current = null
    }, 120)
  }

  useEffect(() => {
    return () => {
      if (treatmentsMenuCloseTimeoutRef.current !== null) {
        window.clearTimeout(treatmentsMenuCloseTimeoutRef.current)
      }
    }
  }, [])

  return (
    <>
      {showTreatmentsMenu && (
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-40 bg-black/45 transition-opacity duration-300"
        />
      )}

      <header
        className="fixed left-0 right-0 top-0 z-50 backdrop-blur-xl transition-all duration-300"
        style={{
          height: '81px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08235294117647059)',
          boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.08235294117647059)',
          backgroundColor: isScrolled
            ? 'rgba(255, 255, 255, 0.12549019607843137)'
            : 'rgba(255, 255, 255, 0)',
        }}
      >
        <div className="relative z-10 mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-[81px] items-center justify-between">
          <div className="flex items-center space-x-12">
            <Link href="/" className="group flex h-full items-center">
              <div
                className="h-[80px] w-[172px] bg-contain bg-left-center bg-no-repeat"
                style={{
                  backgroundImage: 'url(/images/logo.svg)',
                  backgroundPosition: 'left center',
                }}
              />
            </Link>

            <nav className="hidden items-center space-x-8 lg:flex">
              {navItems.map((item) => {
                const active = isActive(item.href)
                const label = locale === 'zh' ? item.labelZh : item.labelEn

                return (
                  <div
                    key={item.href}
                    className="group relative"
                    onMouseEnter={() => {
                      if (item.hasDropdown) {
                        openTreatmentsMenu()
                        setActiveTreatmentTab(0)
                      }
                    }}
                    onMouseLeave={() => {
                      if (item.hasDropdown) {
                        scheduleTreatmentsMenuClose()
                      }
                    }}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center py-6 text-left text-[15px] font-normal not-italic no-underline transition-all duration-300 ${
                        active
                          ? 'border-b-2 border-[#cc0000] text-[#cc0000]'
                          : 'text-white group-hover:font-bold group-hover:text-[#cc0000]'
                      }`}
                    >
                      {label}
                      {item.hasDropdown && (
                        <ChevronDown
                          className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                            showTreatmentsMenu ? 'rotate-180' : ''
                          }`}
                        />
                      )}
                    </Link>

                    {item.hasDropdown && showTreatmentsMenu && (
                      <TreatmentsMegaMenu
                        locale={locale}
                        activeTab={activeTreatmentTab}
                        onTabChange={setActiveTreatmentTab}
                        onMouseEnter={openTreatmentsMenu}
                        onMouseLeave={scheduleTreatmentsMenuClose}
                      />
                    )}
                  </div>
                )
              })}
            </nav>
          </div>

          <div className="flex items-center space-x-6">
            <div className="relative">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="flex items-center space-x-2 text-[14px] text-white transition-colors duration-300 hover:text-[#cc0000]"
              >
                <Globe className="h-4 w-4" />
                <span className="font-medium">{localeNames[locale]}</span>
                <ChevronDown
                  className={`h-3 w-3 transition-transform duration-300 ${
                    showLangMenu ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {showLangMenu && (
                <div className="absolute right-0 z-50 mt-2 w-40 border-t-2 border-[#cc0000] bg-white/95 py-2 shadow-2xl backdrop-blur-xl">
                  {locales.map((loc) => (
                    <button
                      key={loc}
                      onClick={() => handleLocaleChange(loc)}
                      className={`w-full px-6 py-2.5 text-left text-sm transition-all duration-200 hover:translate-x-1 hover:bg-[#cc0000]/10 ${
                        locale === loc ? 'font-semibold text-[#cc0000]' : 'text-gray-700'
                      }`}
                    >
                      {localeNames[loc]}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white transition-colors duration-300 hover:text-[#cc0000] lg:hidden"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div
            className="border-t border-white/20 py-6 backdrop-blur-xl transition-all duration-300 lg:hidden"
            style={{
              backgroundColor: isScrolled
                ? 'rgba(255, 255, 255, 0.2)'
                : 'rgba(255, 255, 255, 0)',
            }}
          >
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const active = isActive(item.href)

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`rounded-lg px-4 py-3 text-left text-[15px] font-normal not-italic no-underline transition-all duration-200 ${
                      active
                        ? 'bg-[#cc0000]/10 text-[#cc0000]'
                        : 'text-white hover:bg-[#cc0000]/10 hover:font-bold hover:text-[#cc0000]'
                    }`}
                  >
                    {locale === 'zh' ? item.labelZh : item.labelEn}
                  </Link>
                )
              })}
            </nav>
          </div>
        )}
        </div>
      </header>
    </>
  )
}
