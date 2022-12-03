import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ data: "api/books response" });
};

export default handler;
