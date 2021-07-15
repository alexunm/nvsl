import type { NextApiRequest, NextApiResponse } from 'next';
import { CookieName } from '../../const/fetch';
import { ResponseData } from '../../type/api';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData<{ username: string }>>
) {
  const token = req.cookies[CookieName]

  if (!token) {
    return res.status(401).json({ success: false, message: 'You need to be authenticated!' })
  }

  const username = req.cookies[`${CookieName}-me`]

  return res.status(200).json({ success: true, data: { username } })
}
