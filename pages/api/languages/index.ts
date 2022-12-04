import type { NextApiRequest, NextApiResponse } from "next";
import { validatePayload } from "../../../helpers/payload";
import { supabase } from "../../../helpers/supabase";
import { ILanguagePayload } from "../../../models/LanguageModel";

const getAllLanguages = async (req: NextApiRequest, res: NextApiResponse) => {
  const { data, error } = await supabase.from("languages").select("*");
  if (error) {
    return res.status(400).json({ message: "Error fetching languages", error });
  }
  return res.status(200).json({ data });
};

const createLanguage = async (req: NextApiRequest, res: NextApiResponse) => {
  const { body } = req;
  const payload: ILanguagePayload = {
    label: body.label,
    value: body.value,
  };
  const results = validatePayload(payload);
  if (results.length > 0) {
    return res
      .status(400)
      .json({ message: "Invalid payload", errors: results });
  }
  const { data, error } = await supabase
    .from("languages")
    .insert([payload])
    .single();
  if (error) {
    return res
      .status(400)
      .json({ message: "Error creating new language", error });
  }
  return res
    .status(201)
    .json({ message: "Language successfully created", data });
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  switch (method) {
    case "GET":
      return getAllLanguages(req, res);
    case "POST":
      return createLanguage(req, res);
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default handler;
