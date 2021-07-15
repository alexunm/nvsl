import { ButtonHTMLAttributes, FC, MouseEvent } from 'react'
import { classNames, classVariation } from '../../utils/styles'
import styles from './Button.module.scss'

type Props = {
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  style?: 'text' | 'fill'
  color?: 'primary' | 'secondary' | 'yellow' | 'green'
  active?: boolean
  disabled?: boolean
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

const Button: FC<Props> = ({ children, style, color, active, type, disabled, onClick }) => {
  const buttonStyle = classNames(
    styles.Button,
    active && styles.Active,
    disabled && styles.Disabled,
    style && styles[classVariation('Style', style)],
    color && styles[classVariation('Color', color)]
  )
  return (
    <button className={buttonStyle} onClick={onClick} type={type} disabled={disabled}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  style: 'text',
  color: 'secondary',
}

export { Button }
