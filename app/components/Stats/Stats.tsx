'use client'
import { useAppSelector } from "@/lib/hooks"
import { selectStats } from "@/lib/features/records"
import styles from './stats.module.scss'

export const Stats = (): React.ReactNode => {
  const {completed, uncompleted} = useAppSelector(selectStats)

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th colSpan={2}>Stats</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Completed</th>
          <th>Uncompleted</th>
        </tr>
        <tr>
          <td>{completed}</td>
          <td>{uncompleted}</td>
        </tr>
      </tbody>
    </table>
  )
}