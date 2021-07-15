import { CSSProperties, FC } from 'react'
import { classNames } from '../../utils/styles'
import { Box } from '../Box'
import styles from './Stack.module.scss'

type Props = {
  gap?: number
  align?: CSSProperties['alignItems']
  justify?: CSSProperties['justifyContent']
  vertical?: boolean
}
const Stack: FC<Props> = ({ children, gap, align, justify, vertical }) => {
  const stackStyle = classNames(styles.Stack, vertical && styles.Vertical)
  return (
    <Box className={stackStyle} gap={gap} alignItems={align} justifyContent={justify}>
      {children}
    </Box>
  )
}

Stack.defaultProps = { gap: 3 }

export { Stack }
