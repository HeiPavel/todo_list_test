'use client'

import styles from './filter.module.scss'
import { useAppSelector } from '@/lib/hooks'
import { selectRecords, type Record } from '@/lib/features/records'
import { filteredRecords, type FilterTerm } from '../util/filteredRecords'
import { Note } from '../components/Note/Note'

export default function FilterPage({params}: {params: {term?: FilterTerm[]}}): React.ReactNode {
  const records = useAppSelector(selectRecords)
  const term = params?.term ? params.term[0] : 'all'
  const filtered = filteredRecords(term, records)

  return (
    <div className={styles.records_container}>
      <div className={styles.records_list}>
        {filtered.map((record: Record) => <Note key={record.id} {...record} />)}
      </div>
    </div>
  )
}