import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { slug },
  } = req;
  res.status(200).json({ data: `api/languages/${slug} response` });
};

export default handler;
