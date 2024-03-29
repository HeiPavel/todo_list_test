'use client'

import Link from "next/link"
import styles from './links.module.scss'
import { usePathname } from "next/navigation"

export const FilterLinks = (): React.ReactNode => {
  const pathname = usePathname()
  const path = pathname.split('/')[1]

  return (
    <nav className={styles.nav}>
      {['all', 'completed', 'current'].map((term, index) => 
        <Link
          key={index}
          href={`/${term}`}
          className={path === term || term === 'all' && !path ? styles.active : ''}
        >
          {term ? term : 'all'}
        </Link>)}
    </nav>
  )
}