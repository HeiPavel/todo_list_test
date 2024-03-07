import styles from "./header.module.scss"

export const Header = (): React.ReactNode => {
  return (
    <header className={styles.header}>
      <h1>Todo List</h1>
    </header>
  )
}