import { VFC } from 'react'
import { InputProps } from '../../type/input'
import { classNames } from '../../utils/styles'
import styles from './TextField.module.scss'

type Props = {
  label?: string
  placeholder?: string
  type?: 'text' | 'number' | 'password'
  clearable?: boolean
} & InputProps

const TextField: VFC<Props> = ({ label, clearable, ...props }) => {
  const textFieldStyle = classNames(styles.TextField, clearable && styles['TextField--Clearable'])
  const clearButtonStyle = classNames(styles.Button, styles['Button--Clear'])
  return (
    <fieldset className={textFieldStyle}>
      {/* label */}
      {label && <label className={styles.Label}>{label}</label>}
      {/* clear button */}
      {clearable && props.value && (
        <button className={clearButtonStyle} onClick={props.onReset}>
          clear
        </button>
      )}
      {/* input field */}
      <input className={styles.Input} {...props} />
    </fieldset>
  )
}

TextField.defaultProps = {
  type: 'text',
}

export { TextField }
