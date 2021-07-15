import Link from 'next/link'
import React, { VFC } from 'react'
import { useSession } from '../../../../hooks/useSession'
import { Button } from '../../../Button'
import { Layout } from '../../Layout'
import styles from './Navigation.module.scss'

type Props = {}
const Navigation: VFC<Props> = ({}) => {
  const { username, isLoggedIn } = useSession()
  return (
    <nav className={styles.Navigation}>
      <div>NVSL</div>
      {isLoggedIn && (
        <div className={styles.Actions}>
          <div className={styles.Username}>{username}</div>
          <Layout.Separator vertical />
          <Link href='/api/logout' passHref>
            <Button>Logout</Button>
          </Link>
        </div>
      )}
    </nav>
  )
}
export { Navigation }
