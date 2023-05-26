import { useState, useEffect } from "react";
import ContaForm from "./conta-form";

function ContasPage(props) {
  const [contas, setContas] = useState([]);

  useEffect(() => {
    fetch("/api/contas", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("LOAD CONTAS 11: ", data.contas);
        setContas(data.contas);
      });
  }, []);

  function salvarContaHander(conta) {
    console.log("CONTA: ", conta);
    //contas.push(conta);
    console.log("CONTAS 55: ", contas);

    fetch("/api/contas", {
      method: "POST",
      body: JSON.stringify(conta),
      heders: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setContas(contas);
      });
  }

  return (
    <>
      <h1>Contas</h1>
      <ContaForm onSalvarConta={salvarContaHander} />
      <ul>
        {contas.map((conta) => (
          <>
            <li key={conta.name}>
              <p>
                Descrição: {conta.descricao} - Valor: {conta.valor}
              </p>
            </li>
          </>
        ))}
      </ul>
    </>
  );
}

export default ContasPage;

/*
      <ul>
        {contas.map((conta) => (
          <li key={conta.name}>
            <p>
              {conta.nome} - {conta.valor}
            </p>
          </li>
        ))}
      </ul>
*/
