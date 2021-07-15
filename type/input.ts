import { ChangeEvent } from 'react';

export type InputValue = string | number | undefined
export type InputProps = {
  value: InputValue
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onReset?: () => void
}