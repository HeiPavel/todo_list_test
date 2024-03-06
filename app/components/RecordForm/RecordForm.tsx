'use client'

import styles from "./form.module.scss"
import { useAppSelector, useAppDispatch } from "@/lib/hooks"
import { changeTerm, selectTerm, addRecordAndClearTerm } from "@/lib/features/form"
import {v4 as uuidv4} from 'uuid'

export const RecordForm = (): React.ReactNode => {
  const term = useAppSelector(selectTerm)
  const dispatch = useAppDispatch()

  const handleAdd = (): void => {
    dispatch(addRecordAndClearTerm({id: uuidv4(), content: term}))
  }

  return (
    <form className={styles.form}>
      <div className={styles.label_container}>
        <label htmlFor="record">Create record:</label>
        <div className={styles.input_container}>
          <input 
            type="text" 
            name="record"
            id="record"
            placeholder="Record"
            autoComplete="off"
            maxLength={20}
            value={term}
            onChange={(event) => dispatch(changeTerm(event.target.value))}
          />
          <button type="button" onClick={handleAdd}>Add</button>
        </div>
        <div className={styles.message}>
          <p>Max length 20</p>
          <span className={`${styles.length} ${term.length === 20 ? styles.max_length : ''}`}>{term.length}/20</span>
        </div>
      </div>
    </form>
  )
}