import type { NextApiRequest, NextApiResponse } from 'next';
import { ResponseData, Server } from '../../type/api';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData<Server[]>>
) {
  return res.status(200).json({ success: true, data: [{ distance: 1000, name: 'Japan' }] })
}
