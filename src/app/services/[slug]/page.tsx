import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { FooterContentPage } from '@/components/FooterContentPage'
import { getPageBySlug, servicePages } from '@/content/footer-pages'

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return servicePages.map((page) => ({ slug: page.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const page = getPageBySlug(servicePages, slug)

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

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params
  const page = getPageBySlug(servicePages, slug)

  if (!page) {
    notFound()
  }

  return <FooterContentPage page={page} />
}
