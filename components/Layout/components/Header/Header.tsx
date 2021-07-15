import React, { FC } from 'react'
import { classNames } from '../../../../utils/styles'
import styles from './Header.module.scss'

type Props = { wide?: boolean; title?: string }
const Header: FC<Props> = ({ children, wide, title }) => {
  const headerClassNames = classNames(styles.Header, wide && styles.Header__Wide)
  return (
    <header className={headerClassNames}>
      {title && <h2 className={styles.Title}>{title}</h2>}
      {children}
    </header>
  )
}
export { Header }
