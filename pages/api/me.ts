import type { NextApiRequest, NextApiResponse } from 'next';
import { ResponseData } from '../../type/api';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData<{ username: string }>>
) {
  return res.status(200).json({ success: true, data: { username: 'my-username' } })
}
