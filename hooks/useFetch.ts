import { useRouter } from 'next/dist/client/router';
import { useCallback, useContext, useEffect, useState } from 'react';
import { FetchOptions } from '../const/fetch';
import { FetchContext } from '../providers';

export type FetchResponse<T = any> = { success: boolean, message?: string, data: T }

const defaultOptions = {}

export function useFetch<T>(path: string, options: RequestInit = defaultOptions, runOnRender: boolean = true) {

  const router = useRouter()
  const { loading, setLoading } = useContext(FetchContext)

  const [error, setError] = useState<string>()
  const [data, setData] = useState<T>()

  const handleFetchData = useCallback(async (data?: any) => {
    const requestOptions = { ...FetchOptions, ...options }
    if (data) {
      requestOptions.body = JSON.stringify(data)
    }

    setLoading(true)
    try {
      const response = await fetch(path, requestOptions)

      if (response.status === 401 && router.route !== '/login')
        router.push('/login')

      const responseData: FetchResponse = await response.json()

      if (responseData.success)
        setData(responseData.data as T)
      else
        setError(responseData.message)
      setLoading(false)
    } catch (e) {
      setError(e.message)
      setLoading(false)
    }
  }, [options, path, router, setLoading])


  useEffect(() => {
    if (runOnRender) {
      handleFetchData()
    }
  }, [runOnRender, handleFetchData])

  return { loading, fetch: handleFetchData, error, data }
}