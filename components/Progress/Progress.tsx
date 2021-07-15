import React, { useEffect, useState, VFC } from 'react'
import { Box } from '../Box'

type Props = { loading: boolean }
const Progress: VFC<Props> = ({ loading }) => {
  const [progress, setProgress] = useState(0.2)

  const increment = () => {
    setProgress((p) => Math.min(p + 0.2, 1))
  }

  useEffect(() => {
    let interval: any
    if (loading) interval = setInterval(increment, 1000)
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [loading])

  return (
    <>
      {loading && (
        <Box
          width={`${progress * 100}vw`}
          top={0}
          zIndex={240}
          height={3}
          position='fixed'
          background='#fff'
          transition='all 500ms ease'
        />
      )}
    </>
  )
}
export { Progress }
