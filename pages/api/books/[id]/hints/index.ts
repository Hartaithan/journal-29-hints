import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { id },
  } = req;
  res.status(200).json({ data: `api/books/${id}/hints response` });
};

export default handler;
