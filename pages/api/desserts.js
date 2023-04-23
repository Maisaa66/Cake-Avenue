import {desserts} from "@/Data/data.json"
export default function handler(req, res) {
  res.status(200).json(desserts)
}
