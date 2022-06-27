import axios from "axios";
import { IItem } from "./interfaces";

const BASE_URL =
  "https://bu8rt5j4uh.execute-api.eu-central-1.amazonaws.com/Prod";

export const getItems = async (type: string): Promise<IItem[]> => {
  const res = await axios.get(`${BASE_URL}/get-items/${type}`);
  return res.data;
};
