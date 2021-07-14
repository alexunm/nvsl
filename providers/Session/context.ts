import { createContext } from 'react';

const defaultState: ContextState = {
  logIn: () => { },
  isLoggedIn: false
}

export type SessionContextLoginFunction = (value: { username?: string }) => void

export type ContextState = {
  username?: string
  isLoggedIn?: boolean
  logIn: SessionContextLoginFunction
}
const Context = createContext<ContextState>(defaultState)
export { Context };
