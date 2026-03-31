import type { NextApiRequest, NextApiResponse } from "next";
import {
  retrieveDataById,
  retrieveData,
} from "../../../utils/db/servicefirebase";

type Data = {
  status: boolean;
  status_code: number;
  data: any;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.query.produk && req.query.produk.length > 0) {
    const id = req.query.produk[0]; 
    const data = await retrieveDataById("produk", id);
    
    if (data) {
      res.status(200).json({ status: true, status_code: 200, data });
    } else {
      res.status(404).json({ status: false, status_code: 404, data: null, message: "Data tidak ditemukan" });
    }
  } else {
    const data = await retrieveData("produk");
    res.status(200).json({ status: true, status_code: 200, data });
  }
}