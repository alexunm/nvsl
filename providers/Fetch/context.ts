import { createContext, Dispatch, SetStateAction } from 'react';

const defaultState: ContextState = {
  loading: false,
  setLoading: () => { }
}

export type ContextState = {
  loading: boolean
  setLoading: Dispatch<SetStateAction<boolean>>
}
const Context = createContext<ContextState>(defaultState)
export { Context };
