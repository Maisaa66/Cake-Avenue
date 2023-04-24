// import { desserts } from "@/Data/desserts";

// export default function handler(req, res) {
//   if (req.method === "GET") {
//     res.status(200).json(desserts);

//   } else if (req.method === "POST") {

//     let dessert = req.body;
//     let id = parseInt(desserts[desserts.length -1].id) +1;
//     dessert.ingredients = dessert.ingredients.split(",");
//     dessert.instructions = dessert.instructions.split(",")
//     desserts.push({id, ...dessert});

//     res.status(201).json(desserts);
//   }
// }

import fs from "fs";
import path from "path";
const dessertsFilePath = path.join(process.cwd(), "public/Data", "desserts.json");

export default function handler(req, res) {
  if (req.method === "GET") {
    const desserts = JSON.parse(fs.readFileSync(dessertsFilePath));
    res.status(200).json(desserts);

  } else if (req.method === "POST") {
    const desserts = JSON.parse(fs.readFileSync(dessertsFilePath));

    let dessert = req.body;
    let id = parseInt(desserts[desserts.length -1].id) +1;
    dessert.ingredients = dessert.ingredients.split(",");
    dessert.instructions = dessert.instructions.split(",");
    desserts.push({id, ...dessert});

    fs.writeFileSync(dessertsFilePath, JSON.stringify(desserts));


    res.status(201).json(desserts);
  }
}
