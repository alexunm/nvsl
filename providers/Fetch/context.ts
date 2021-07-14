import { createContext } from 'react';

const defaultState: ContextState = {
  loading: false,
  setLoading: () => { }
}

export type ContextState = {
  loading: boolean
  setLoading: (value: boolean) => void
}
const Context = createContext<ContextState>(defaultState)
export { Context }