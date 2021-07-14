import React, { FC, useEffect, useState } from 'react'
import { Context } from './context'

const Provider: FC = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false)

  return (
    <Context.Provider value={{ loading, setLoading }}>
      <>{children}</>
    </Context.Provider>
  )
}
export { Provider }
