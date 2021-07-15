import { useCallback, useState } from 'react'

export function useSort<T = any>() {
  const [key, setKey] = useState<T>()
  const [value, setValue] = useState<0 | 1 | -1>(0)

  const sort = useCallback((sortKey: T) => {
    let newValue: 0 | 1 | -1 = 1
    if (key !== sortKey) {
      setKey(sortKey)
    } else {
      if (value === 1) newValue = -1
      if (value === -1) newValue = 0
      if (value === 0) newValue = 1
    }
    setValue(newValue)
  }, [key, value])

  return { key, value, sort }
}