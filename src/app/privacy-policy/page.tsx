import type { Metadata } from 'next'
import { FooterContentPage } from '@/components/FooterContentPage'
import { legalPages } from '@/content/footer-pages'

const page = legalPages.find((item) => item.slug === 'privacy-policy')!

export const metadata: Metadata = {
  title: `${page.title.zh} | Sana`,
  description: page.description.zh,
}

export default function PrivacyPolicyPage() {
  return <FooterContentPage page={page} />
}
