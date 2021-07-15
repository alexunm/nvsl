import { CookieSerializeOptions } from 'cookie'

export const FetchOptions: RequestInit = {
  headers: {
    'Content-Type': 'application/json'
  }
}

export const CookieName: string = 'no-need-to-steal'
export const CookieSettings: CookieSerializeOptions = { sameSite: 'lax', httpOnly: true, maxAge: 60 * 60 * 24 * 14 }

