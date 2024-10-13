import { unstable_cache } from 'next/cache'
import styles from './footer.module.scss'

const getCachedTime = unstable_cache(
  async () => new Date().toLocaleTimeString(),
  ['current-time'],
  {
    revalidate: 30
  }
)

export const Footer = async (): Promise<JSX.Element> => {
  const time = await getCachedTime()

  return (
    <footer className={styles.footer}>
      <p className={styles.time}>{time}</p>
    </footer>
  )
}