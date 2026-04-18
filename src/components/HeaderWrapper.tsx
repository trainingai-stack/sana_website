import { prisma } from '@/lib/prisma'
import { Header } from './Header'

export async function HeaderWrapper() {
  const navItems = await prisma.navItem.findMany({
    orderBy: { order: 'asc' }
  })
  
  return <Header navItems={navItems} />
}
