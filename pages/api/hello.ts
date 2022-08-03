// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
  work: string
  bug: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: `${process.env.VERCEL_URL}`, work: `${process.env.VERCEL_ENV}`, bug:`${process.env.FAUNA_SECRET}` })
}
