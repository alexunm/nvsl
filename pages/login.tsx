import { useRouter } from 'next/dist/client/router'
import React, { FormEvent, useEffect, useState } from 'react'
import { Box } from '../components/Box'
import { Button } from '../components/Button'
import { Layout } from '../components/Layout'
import { Stack } from '../components/Stack'
import { TextField } from '../components/TextField'
import { useFetch } from '../hooks/useFetch'
import { useInput } from '../hooks/useInput'
import { useSession } from '../hooks/useSession'

const Login = () => {
  const username = useInput('')
  const password = useInput('')

  const { isLoggedIn } = useSession()
  const router = useRouter()
  const { loading, data, fetch, error } = useFetch<{ username: string }>('/api/login', { method: 'POST' }, false)
  const { logIn } = useSession()

  const [validationError, setValidationError] = useState<string>()

  const handleLogIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data = { username: username.value, password: password.value }
    if (!username.value || username.value === '') {
      setValidationError('Username is required')
      return
    }
    if (!password.value || password.value === '') {
      setValidationError('Password is required')
      return
    }
    try {
      await fetch(data)
    } catch (error) {
      setValidationError(error.message)
    }
  }

  useEffect(() => {
    if (data) {
      logIn({ username: data.username })
    }
    return () => {}
  }, [logIn, data])

  useEffect(() => {
    if (isLoggedIn) router.push('/')
  }, [isLoggedIn, router])

  return (
    <>
      <Layout.Header title='Login' />
      <Layout.Section>
        <Box marginTop={3}>
          {/* form */}
          <form action='' onSubmit={handleLogIn}>
            <Stack vertical>
              <Stack align='flex-end'>
                {/* username */}
                <TextField label='Username' {...username} required />
                {/* password */}
                <TextField label='Password' type='password' {...password} required />
                {/* submit */}
                <fieldset>
                  <Button type='submit' style='fill' color='primary' disabled={loading}>
                    Submit
                  </Button>
                </fieldset>
              </Stack>
              {/* error */}
              {(error || validationError) && <fieldset className={'error'}>{error || validationError}</fieldset>}
            </Stack>
          </form>
        </Box>
      </Layout.Section>
    </>
  )
}
export default Login
