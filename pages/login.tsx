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
import { loginSchema } from '../utils/validation'

const Login = () => {
  const username = useInput('')
  const password = useInput('')

  const router = useRouter()
  const { loading, data, fetch, error } = useFetch<{ username: string }>('/api/login', { method: 'POST' }, false)
  const { logIn } = useSession()

  const [validationError, setValidationError] = useState<string>()

  const handleLogIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = { username: username.value, password: password.value }
    try {
      const value = await loginSchema.validateAsync(data)
      await fetch(value)
    } catch (error) {
      setValidationError(error.message)
    }
  }
  useEffect(() => {
    if (data) {
      logIn({ username: data.username })
      router.push('/')
    }
    return () => {}
  }, [data])

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
                <TextField label='Username' {...username} />
                {/* password */}
                <TextField label='Password' type='password' {...password} />
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
