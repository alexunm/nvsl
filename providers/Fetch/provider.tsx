import React, { FC, useState } from 'react'
import { Progress } from '../../components/Progress'
import { Context } from './context'

const Provider: FC = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false)

  return (
    <Context.Provider value={{ loading, setLoading }}>
      {/* progress indicator */}
      <Progress loading={loading} />
      {/* content */}
      {children}
    </Context.Provider>
  )
}
export { Provider }
