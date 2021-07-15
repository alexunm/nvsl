import { useEffect, useState } from 'react';
import { defaultDebounceTime } from '../const/time';
import { InputValue } from '../type/input';

export function useDebounce(value: InputValue, options: { delay: number } = { delay: defaultDebounceTime }): InputValue {
  const [debouncedValue, setDebouncedValue] = useState<InputValue>()

  useEffect(() => {
    const interval = setInterval(() => setDebouncedValue(value), options.delay)
    return () => clearInterval(interval)
  }, [value, options])

  return debouncedValue
}