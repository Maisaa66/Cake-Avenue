// import { desserts } from "@/Data/desserts";

// export default function handler(req, res) {
//   if (req.method === "GET") {
//     let { dessertId } = req.query;
//     let dessert = desserts.find((dessert) => (dessert.id === dessertId));
//     res.status(200).json(dessert);
//   } else if (req.method === "DELETE") {
//     let { dessertId } = req.query;
//     let index = desserts.findIndex((dessert)=>dessert.id === dessertId);
//     desserts.splice(index, 1);
//     res.status(201).json(desserts);
//   } else if (req.method === "PUT") {
//     let { dessertId } = req.query;
//     let index = desserts.findIndex((dessert) => dessert.id === dessertId);
//     if (index !== -1) {
//       desserts[index] = req.body;
//       res.status(200).json(desserts);
//     } else {
//       res.status(404).send("Dessert not found");
//     }
// }}

import fs from "fs";
import path from "path";
const dessertsFilePath = path.join(process.cwd(), "public/Data", "desserts.json");

export default function handler(req, res) {

  if (req.method === "GET") {

    const desserts = JSON.parse(fs.readFileSync(dessertsFilePath));

    let { dessertId } = req.query;

    let dessert = desserts.find((dessert) => (parseInt(dessert.id) === parseInt(dessertId)));

    res.status(200).json(dessert);

  } else if (req.method === "DELETE") {
    const desserts = JSON.parse(fs.readFileSync(dessertsFilePath));

    let { dessertId } = req.query;
    let index = desserts.findIndex((dessert)=>(parseInt(dessert.id) === parseInt(dessertId)));
    desserts.splice(index, 1);
    fs.writeFileSync(dessertsFilePath, JSON.stringify(desserts));

    res.status(201).json(desserts);
  }
   else if (req.method === "PATCH") {
    const desserts = JSON.parse(fs.readFileSync(dessertsFilePath));

    let { dessertId } = req.query;
    desserts.forEach((dessert, index) => {
      if (parseInt(dessert.id) === parseInt(dessertId)) {
        let updatedDessert = { ...dessert, ...req.body };
        desserts[index] = updatedDessert;
      }



    });
    fs.writeFileSync(dessertsFilePath, JSON.stringify(desserts));



    // res.status(200).json({ message: "Dessert updated successfully" });
    res.status(200).json(desserts);

  }
}
