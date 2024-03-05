'use client'

import styles from "./form.module.scss"
import { useAppSelector, useAppDispatch } from "@/lib/hooks"
import { changeTerm, selectTerm } from "@/lib/features/form"

export const RecordForm = (): React.ReactNode => {
  const term = useAppSelector(selectTerm)
  const dispatch = useAppDispatch()

  return (
    <form className={styles.form}>
      <label htmlFor="record">Create record:</label>
      <div className={styles.input_wraper}>
        <input 
          type="text" 
          name="record" 
          id="record"
          placeholder="Record"
          maxLength={20}
          value={term}
          onChange={(event) => dispatch(changeTerm(event.target.value))}
        />
        <button>Add</button>
      </div>
    </form>
  )
}