import { VFC } from 'react'
import { classNames } from '../../../../utils/styles'
import styles from './Separator.module.scss'

type Props = { vertical?: boolean }
const Separator: VFC<Props> = ({ vertical }) => {
  const separatorStyle = classNames(styles.Separator, vertical && styles['Separator--Vertical'])
  return <div className={separatorStyle} />
}
export { Separator }
