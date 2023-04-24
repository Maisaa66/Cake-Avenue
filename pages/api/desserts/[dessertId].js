import { desserts } from "@/Data/data.json";

export default function handler(req, res) {
  if (req.method === "GET") {
    let { dessertId } = req.query;
    let dessert = desserts.find((dessert) => (dessert.id === dessertId));
    res.status(200).json(dessert);
  } else if (req.method === "DELETE") {
    let { dessertId } = req.query;
    let index = desserts.findIndex((dessert)=>dessert.id === dessertId);
    desserts.splice(index, 1);
    res.status(201).json(desserts);
  } else if (req.method === "PUT") {
    let { dessertId } = req.query;
    desserts.forEach((dessert, index) => {
      if (dessert.id === dessertId) {
        desserts[index] = req.body;
      }
    });
    res.status(200).json({ message: "Dessert updated successfully" });
  }
}
