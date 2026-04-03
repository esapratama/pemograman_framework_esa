// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { signUp } from "@/utils/db/servicefirebase";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  alamat: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    // Sesuaikan tipe data result agar match dengan servicefirebase
    await signUp(req.body, (result: { status: boolean; message: string }) => {
      if (result.status) { // Jika status adalah true
        res.status(200).json({ name: result.message, alamat: "" });
      } else { // Jika status adalah false
        res.status(400).json({ name: result.message, alamat: "" });
      }
    });
  } else {
    res.status(405).json({ name: "Method not allowed", alamat: "" });
  }
}