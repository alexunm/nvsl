import type { NextApiRequest, NextApiResponse } from 'next';
import { CookieName, FetchOptions } from '../../const/fetch';
import { ResponseData } from '../../type/api';

export type Server = { name: string, distance: number }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData<Server[]>>
) {
  const token = req.cookies[CookieName]

  if (!token) {
    return res.status(401).json({ success: false, message: 'You need to be authenticated!' })
  }

  const { method } = req

  try {
    const response = await fetch(`${process.env.ENDPOINT}/servers`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          ...FetchOptions.headers
        },
        method,
      }
    )
    const data = await response.json()
    if (response.status === 200) {
      return res.status(response.status).json({ success: true, data })
    } else {
      return res.status(response.status).json({ success: false, message: data.message })
    }
  } catch (e) {
    return res.status(500).send({ success: false, message: e.message })
  }
}
