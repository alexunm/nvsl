import { serialize } from 'cookie';
import type { NextApiRequest, NextApiResponse } from 'next';
import { CookieName, CookieSettings, FetchOptions } from '../../const/fetch';
import { ResponseData } from '../../type/api';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData<{ username?: string }>>
) {
  const { method, body } = req

  try {
    const response = await fetch(`${process.env.ENDPOINT}/tokens`,
      {
        ...FetchOptions,
        method,
        body: JSON.stringify(body),
      }
    )
    const data = await response.json()

    if (response.status === 200) {
      res.setHeader('Set-Cookie', [
        serialize(`${CookieName}-me`, body.username, CookieSettings),
        serialize(CookieName, data.token, CookieSettings)]
      )
      res.status(200).json({ success: true, data: { username: body.username } })
      return res.status(response.status).json({ success: true, data })
    } else if (response.status === 401) {
      return res.status(response.status).json({ success: false, message: 'Invalid credentials' })
    } else {
      return res.status(response.status).json({ success: false, message: data.message })
    }
  } catch (e) {
    throw e
  }
}
