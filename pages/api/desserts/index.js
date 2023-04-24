import { desserts } from "@/Data/data";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(desserts);

  } else if (req.method === "POST") {

    let dessert = req.body;
    let id = parseInt(desserts[desserts.length -1].id) +1;
    dessert.ingredients = dessert.ingredients.split(",");
    dessert.instructions = dessert.instructions.split(",")
    desserts.push({id, ...dessert});

    res.status(201).json(desserts);
  }
}
