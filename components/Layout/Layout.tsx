import React, { FC } from 'react'
import { Header, Navigation, Section, Separator } from './components'
import styles from './Layout.module.scss'

type Comps = {
  Section: typeof Section
  Header: typeof Header
  Navigation: typeof Navigation
  Separator: typeof Separator
}
type Props = {}
const Layout: FC<Props> & Comps = ({ children }) => {
  return <main className={styles.Layout}>{children}</main>
}

Layout.Navigation = Navigation
Layout.Section = Section
Layout.Header = Header
Layout.Separator = Separator

export { Layout }
