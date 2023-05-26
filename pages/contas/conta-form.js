import { useRef } from "react";

function ContaForm(props) {
  const descricaoInputRef = useRef();
  const valorInputRef = useRef();

  function salvarConta(event) {
    event.preventDefault();
    console.log("Salvar Conta");

    const enteredDescricao = descricaoInputRef.current.value;
    const enteredValor = valorInputRef.current.value;

    const conta = {
      descricao: enteredDescricao,
      valor: enteredValor,
    };

    props.onSalvarConta(conta);
  }

  return (
    <>
      <form onSubmit={salvarConta}>
        <div>
          <label htmlFor="descricao">Descrição</label>
          <input
            type="text"
            id="descricao"
            placeholder="Sua descrição"
            aria-label="Sua descrição"
            ref={descricaoInputRef}
          />
        </div>
        <div>
          <label htmlFor="valor">Valor</label>
          <input
            type="text"
            id="valor"
            placeholder="Seu valor"
            aria-label="Seu valor"
            ref={valorInputRef}
          />
        </div>
        <button>Salvar</button>
      </form>
    </>
  );
}

export default ContaForm;
