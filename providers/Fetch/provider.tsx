import React, { FC, useEffect, useState } from 'react'
import { Box } from '../../components/Box'
import { Context } from './context'

const Provider: FC = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [progress, setProgress] = useState(0.2)

  const increment = () => {
    setProgress((p) => Math.min(p + 0.2, 1))
  }

  useEffect(() => {
    const interval = setInterval(increment, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [loading])

  return (
    <Context.Provider value={{ loading, setLoading }}>
      {/* progress indicator */}
      {loading && (
        <Box
          width={`${progress * 100}vw`}
          top={0}
          zIndex={240}
          height={3}
          position='fixed'
          background='var(--blue)'
          transition='all 500ms ease'
        />
      )}
      {/* content */}
      <>{children}</>
    </Context.Provider>
  )
}
export { Provider }
