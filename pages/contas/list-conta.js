function ListConta(props) {
  console.log("ListConta: ", props.contas);
  return props.contas
    .map((conta) => (
      <>
        <li key={conta._id}>
          <p>
            Descrição: {conta.descricao} - Valor: {conta.valor}
          </p>
        </li>
      </>
    ))
    .sort()
    .reverse();
}

export default ListConta;
