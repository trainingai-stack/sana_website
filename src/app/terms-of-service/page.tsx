import type { Metadata } from 'next'
import { FooterContentPage } from '@/components/FooterContentPage'
import { legalPages } from '@/content/footer-pages'

const page = legalPages.find((item) => item.slug === 'terms-of-service')!

export const metadata: Metadata = {
  title: `${page.title.zh} | Sana`,
  description: page.description.zh,
}

export default function TermsOfServicePage() {
  return <FooterContentPage page={page} />
}
