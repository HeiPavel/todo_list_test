'use client'

import { useAppDispatch } from "@/lib/hooks"
import { changeStatus, removeRecord, type Record } from "@/lib/features/records"
import { XMarkIcon, PencilSquareIcon } from "@heroicons/react/24/outline"
import styles from './note.module.scss'

export const Note = ({id, content, isComplete}: Record): React.ReactNode => {
  const dispatch = useAppDispatch()

  return (
    <div className={styles.note}>
      <div className={styles.text} onClick={() => dispatch(changeStatus(id))}>
        <div className={styles.title_container}>
          <div className={styles.note_icon}><PencilSquareIcon/></div>
          <p>{content}</p>
        </div>
        <span className={`${styles.status} ${isComplete ? styles.complete : styles.pending}`}>{isComplete ? 'Complete' : 'Pending'}</span>
      </div>
      <div className={styles.icon} onClick={() => dispatch(removeRecord(id))}>
        <XMarkIcon/>
      </div>
    </div>
  )
}