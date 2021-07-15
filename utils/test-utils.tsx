import { render, RenderOptions } from '@testing-library/react'
import React, { FC, ReactElement } from 'react'
import { Layout } from '../components/Layout'
import { FetchProvider, SessionProvider } from '../providers'

const Providers: FC = ({ children }) => {
  return (
    <FetchProvider>
      <SessionProvider>
        <Layout>{children}</Layout>
      </SessionProvider>
    </FetchProvider>
  )
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: Providers, ...options })

export * from '@testing-library/react'
export { customRender as render }
