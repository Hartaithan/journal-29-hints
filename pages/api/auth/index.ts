import type { NextApiRequest, NextApiResponse } from "next";
import { validatePayload } from "../../../helpers/payload";
import { supabase } from "../../../helpers/supabase";
import { ISignInPayload } from "../../../models/UserModel";

const signIn = async (req: NextApiRequest, res: NextApiResponse) => {
  const { body } = req;
  const payload: ISignInPayload = {
    email: body.email,
    password: body.password,
  };
  const results = validatePayload(payload);
  if (results.length > 0) {
    return res
      .status(400)
      .json({ message: "Invalid payload", errors: results });
  }
  const { data, error } = await supabase.auth.signInWithPassword(payload);
  if (error) {
    return res.status(400).json({ message: "Sign in failed", error });
  }
  return res.status(200).json(data);
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  switch (method) {
    case "POST":
      return signIn(req, res);
    default:
      res.setHeader("Allow", ["POST"]);
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default handler;
