import { MongoClient } from "mongodb";

let contas = [];

async function dbInsertConta(conta) {
  const client = await MongoClient.connect(
    "mongodb://172.21.64.1:27017/MyDB"
  ).then((client) => {
    const db = client.db();
  });
  const db = client.db();

  const result = await db.collection("contas").insertOne(conta);

  client.close();
}

//http://172.21.64.1
async function dbFindAllContas() {
  const client = await MongoClient.connect(
    "mongodb://172.21.64.1:27017/MyDB"
  ).then((client) => {
    const db = client.db();
    console.log("CONECTADO...");
  });

  const contas = await db
    .collection("contas")
    .find()
    .sort({ _id: -1 })
    .toArray();

  client.close();

  return contas;
}

function handler(req, res) {
  if (req.method === "POST") {
    const { descricao, valor } = JSON.parse(req.body);
    const conta = { descricao: descricao, valor: valor };
    //contas.push(conta);

    dbInsertConta(conta);

    res.status(201).json({ message: "Conta Adicionada!" });
    return;
  }
  if (req.method === "GET") {
    const contas = dbFindAllContas().then((contas) => console.log(contas));
    console.log(contas);
    res.status(200).json({ contas: contas });
    return;
  }
}

export default handler;