import styles from './filter.module.scss'
import { useAppSelector, useAppDispatch } from '@/lib/hooks'
import { selectRecords } from '@/lib/features/records'
import { filteredRecords } from '../util/filteredRecords'

export default function FilterPage({params}: {params: {term?: string[]}}): React.ReactNode {
  const term = params?.term?.[0] ? params.term[0] : 'all'
  return (
    <div className={styles.records_container}>
      <div className={styles.records_list}>{term}</div>
    </div>
  )
}