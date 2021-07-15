import { useContext } from 'react';
import { SessionContext } from '../providers';

export function useSession() {
  const state = useContext(SessionContext)
  // 
  return state
}