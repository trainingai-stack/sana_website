'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Menu, X, Globe, ChevronDown } from 'lucide-react'
import { useI18n } from '@/i18n/context'
import { locales, localeNames, type Locale } from '@/i18n/config'
import type { NavItem } from '@prisma/client'

interface HeaderProps {
  navItems: NavItem[]
}

const treatmentsMenu = {
  zh: [
    { label: '核心医疗服务', items: ['医疗宾礼服务', '康复旅游服务'] },
    { label: '体检服务', items: ['精准医疗'] },
    { label: '门诊服务', items: ['中医诊疗'] },
    { label: '基础服务', items: ['双语陪诊', '入境协助', '术后康复', '医疗旅游'] },
  ],
  en: [
    { label: 'Core Medical Services', items: ['Medical Concierge', 'Recovery Tourism'] },
    { label: 'Health Checkup', items: ['Precision Medicine'] },
    { label: 'Outpatient Services', items: ['TCM Diagnosis'] },
    { label: 'Basic Services', items: ['Bilingual Escort', 'Entry Assistance', 'Post-op Recovery', 'Medical Tourism'] },
  ],
}

export function Header({ navItems }: HeaderProps) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [showLangMenu, setShowLangMenu] = useState(false)
  const [showTreatmentsMenu, setShowTreatmentsMenu] = useState(false)
  const { locale, setLocale, t } = useI18n()

  // Check if current path matches nav item
  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname === href
  }

  const handleLocaleChange = (newLocale: Locale) => {
    setLocale(newLocale)
    setShowLangMenu(false)
  }

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-[#060606]"
      style={{
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.08)',
      }}
    >
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[70px]">
          <div className="flex items-center space-x-12">
            <Link href="/" className="flex items-center group">
              <div 
                className="h-[40px] w-[120px] bg-contain bg-left-center bg-no-repeat"
                style={{ 
                  backgroundImage: 'url(/images/logo.svg)',
                }}
              />
            </Link>

            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => {
                const active = isActive(item.href)
                return (
                  <div
                    key={item.href}
                    className="relative group"
                    onMouseEnter={() => item.hasDropdown && setShowTreatmentsMenu(true)}
                    onMouseLeave={() => item.hasDropdown && setShowTreatmentsMenu(false)}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center transition-all duration-300 text-[15px] font-medium py-6 ${
                        active 
                          ? 'text-[#CC0000] border-b-2 border-[#CC0000]' 
                          : 'text-gray-300 group-hover:text-[#CC0000]'
                      }`}
                    >
                      {locale === 'zh' ? item.labelZh : item.labelEn}
                      {item.hasDropdown && <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${active ? 'rotate-180' : 'group-hover:rotate-180'}`} />}
                    </Link>
                    {item.hasDropdown && showTreatmentsMenu && (
                      <div className="absolute top-full left-0 mt-0 w-72 bg-[#111] shadow-2xl border-t-2 border-[#CC0000] py-0">
                        {treatmentsMenu[locale].map((section, idx) => (
                          <div key={idx} className="px-6 py-4 border-b border-[#222] last:border-b-0">
                            <div className="text-xs font-semibold text-[#CC0000] mb-3 uppercase tracking-wider">{section.label}</div>
                            {section.items.map((item, itemIdx) => (
                              <Link
                                key={itemIdx}
                                href="#services"
                                className="block py-2.5 text-sm text-gray-300 hover:text-[#CC0000] hover:translate-x-1 transition-all duration-200"
                              >
                                {item}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
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
                className="flex items-center space-x-2 text-gray-300 hover:text-[#CC0000] transition-colors duration-300 text-[14px]"
              >
                <Globe className="w-4 h-4" />
                <span className="font-medium">{localeNames[locale]}</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${showLangMenu ? 'rotate-180' : ''}`} />
              </button>
              {showLangMenu && (
                <div className="absolute right-0 mt-2 w-40 bg-[#111] shadow-2xl border-t-2 border-[#CC0000] py-2 z-50">
                  {locales.map((loc) => (
                    <button
                      key={loc}
                      onClick={() => handleLocaleChange(loc)}
                      className={`w-full text-left px-6 py-2.5 text-sm hover:bg-[#CC0000]/10 hover:translate-x-1 transition-all duration-200 ${
                        locale === loc ? 'text-[#CC0000] font-semibold' : 'text-gray-300'
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
              className="lg:hidden text-gray-300 hover:text-[#CC0000] transition-colors duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden py-6 border-t border-[#222] bg-[#060606]">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const active = isActive(item.href)
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 transition-all duration-200 text-[15px] font-medium rounded-lg ${
                      active 
                        ? 'text-[#CC0000] bg-[#CC0000]/10' 
                        : 'text-gray-300 hover:text-[#CC0000] hover:bg-[#CC0000]/10'
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
  )
}
