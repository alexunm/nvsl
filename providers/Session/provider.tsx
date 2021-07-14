import React, { FC, useEffect, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { Context, SessionContextLoginFunction } from './context'

const Provider: FC<{}> = ({ children }) => {
  const [username, setUsername] = useState<string | undefined>()

  const { data } = useFetch<{ username: string }>('/api/me')

  const logIn: SessionContextLoginFunction = (value) => {
    setUsername(value.username)
  }

  useEffect(() => {
    if (data) setUsername(data!.username)
  }, [data])

  const isLoggedIn = !!username

  return <Context.Provider value={{ username, isLoggedIn, logIn }}>{children}</Context.Provider>
}
export { Provider }
