import { MongoClient } from "mongodb";
import { connectDatabase, insertDocument } from "../../../helpers/api-util";

let contas = [];

//http://172.21.64.1
async function dbFindAllContas() {
  const client = await MongoClient.connect("mongodb://localhost:27017/MyDB");
  const db = client.db();
  const contas = await db
    .collection("contas")
    .find()
    .sort({ _id: -1 })
    .toArray();
  client.close();
  return contas;
}

async function handler(req, res) {
  if (req.method === "POST") {
    const { _id, descricao, valor } = JSON.parse(req.body);
    const conta = { _id: _id, descricao: descricao, valor: valor };

    let client;
    try {
      console.log("Conecting Database...");
      client = await connectDatabase();
    } catch (error) {
      console.log("Error Connecting: ", error);
      res.status(500).json({ message: "Connecting to the database failed!" });
    }
    try {
      console.log("Inserting Document");
      let newConta = await insertDocument(client, conta, "contas");
      console.log("New Conta: ", newConta);
      conta._id = newConta.insertedId;
      res.status(201).json({ message: "Conta Adicionada!", conta: conta });

      client.close();
    } catch (error) {
      res.status(500).json({ message: "Inserting data failed! " });
    }

    return;
  }
  if (req.method === "GET") {
    const contas = dbFindAllContas().then((contas) => {
      console.log("GET: ", contas);
      res.status(200).json({ contas: contas });
    });
    return;
  }
}

export default handler;
