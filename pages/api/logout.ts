import { serialize } from 'cookie';
import type { NextApiRequest, NextApiResponse } from 'next';
import { CookieName } from '../../const/fetch';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader('Set-Cookie', serialize(CookieName, '', { httpOnly: true, maxAge: -1 }))
  res.status(200).redirect('/login')
}
