let contas = [];

function handler(req, res) {
  if (req.method === "POST") {
    const { descricao, valor } = JSON.parse(req.body);
    const conta = { descricao: descricao, valor: valor };
    contas.push(conta);
    res.status(201).json({ message: "Conta Adicionada!" });
    return;
  }
  if (req.method === "GET") {
    res.status(200).json(contas);
    return;
  }
}

export default handler;
