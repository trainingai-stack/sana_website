import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { FooterContentPage } from '@/components/FooterContentPage'
import { aboutPages, getPageBySlug } from '@/content/footer-pages'

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return aboutPages.map((page) => ({ slug: page.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const page = getPageBySlug(aboutPages, slug)

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

export default async function AboutDetailPage({ params }: PageProps) {
  const { slug } = await params
  const page = getPageBySlug(aboutPages, slug)

  if (!page) {
    notFound()
  }

  return <FooterContentPage page={page} />
}
