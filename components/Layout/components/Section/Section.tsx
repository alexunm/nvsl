import React, { FC } from 'react'
import { classNames } from '../../../../utils/styles'
import styles from './Section.module.scss'

type Props = { wide?: boolean }
const Section: FC<Props> = ({ children, wide }) => {
  const sectionClassNames = classNames(styles.Section, wide && styles.Section__Wide)
  return <section className={sectionClassNames}>{children}</section>
}
export { Section }
