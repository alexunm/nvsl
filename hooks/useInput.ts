import { ChangeEvent, useState } from 'react';
import { InputProps, InputValue } from '../type/input';

export function useInput(initialValue: string): InputProps {
  const [value, setValue] = useState<InputValue>(initialValue)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const onReset = () => {
    setValue('')
  }

  return { value, onChange, onReset }
}