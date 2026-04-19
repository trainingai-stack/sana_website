import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { FooterContentPage } from '@/components/FooterContentPage'
import { getPageBySlug, insightPages } from '@/content/footer-pages'

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return insightPages.map((page) => ({ slug: page.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const page = getPageBySlug(insightPages, slug)

  if (!page) {
    return {
      title: 'Sana',
    }
  }

  return {
    title: `${page.title.zh} | Sana`,
    description: page.description.zh,
  }
}

export default async function InsightDetailPage({ params }: PageProps) {
  const { slug } = await params
  const page = getPageBySlug(insightPages, slug)

  if (!page) {
    notFound()
  }

  return <FooterContentPage page={page} />
}
