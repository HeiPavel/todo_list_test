'use client'

import styles from "./form.module.scss"
import { useAppSelector, useAppDispatch } from "@/lib/hooks"
import { changeTerm, selectTerm, addRecordAndClearTerm } from "@/lib/features/form"
import { Stats } from "../Stats/Stats"
import {v4 as uuidv4} from 'uuid'
import type { KeyboardEvent, MouseEvent } from "react"

export const RecordForm = (): React.ReactNode => {
  const term = useAppSelector(selectTerm)
  const dispatch = useAppDispatch()

  const handleAdd = (event: MouseEvent | KeyboardEvent): void => {
    if (term && (event.type === 'keydown' && (event as KeyboardEvent).key === 'Enter' || event.type === 'click')) 
      dispatch(addRecordAndClearTerm({id: uuidv4(), content: term}))
  }

  return (
    <div className={styles.form}>
      <div className={styles.label_container}>
        <label htmlFor="record">Create record:</label>
        <div className={styles.input_container}>
          <input 
            type="text" 
            name="record"
            id="record"
            placeholder="Record..."
            autoComplete="off"
            maxLength={20}
            value={term}
            onChange={(event) => dispatch(changeTerm(event.target.value))}
            onKeyDown={handleAdd}
          />
          <button type="button" onClick={handleAdd}>Add Record</button>
        </div>
        <div className={styles.message}>
          <p>Max length 20</p>
          <span className={`${styles.length} ${term.length === 20 ? styles.max_length : ''}`}>{term.length}/20</span>
        </div>
      </div>
      <Stats/>
    </div>
  )
}