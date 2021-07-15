import { act, renderHook } from '@testing-library/react-hooks';
import { defaultDebounceTime } from '../const/time';
import { useDebounce } from './useDebounce';


test('test debounce hook', () => {
  jest.useFakeTimers();

  const initValue = 'first'
  const { result } = renderHook(() => useDebounce(initValue))

  // initial debounce state value should undefined
  expect(result.current).toBe(undefined)
  act(() => {
    jest.advanceTimersByTime(defaultDebounceTime);
  })
  // after {defaultDebounceTime} debounce state value should be equal to {initValue}
  expect(result.current).toBe(initValue)
})
