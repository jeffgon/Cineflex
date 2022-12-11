import styled from "styled-components";
import ItemFinalizado from "./ItemFinalizado";

export default function FinalizarPedido({
  nome,
  cpf,
  filmes,
  sessoes,
  assentoSelecionados,
  setNome,
  setCpf,
  setFilmes,
  setSessoes
}) {
  return (
    <>
      <TituloParaSelecionar>
        <p>Pedido feito com sucesso!</p>
      </TituloParaSelecionar>
      <ItemFinalizado
        nome={nome}
        cpf={cpf}
        filmes={filmes}
        sessoes={sessoes}
        assentoSelecionados={assentoSelecionados}
        setSessoes={setSessoes}
        setFilmes={setFilmes}
        setCpf={setCpf}
        setNome={setNome}
      />
    </>
  );
}

const TituloParaSelecionar = styled.div`
  width: 70%;
  height: 110px;
  margin-left: 15%;
  margin-right: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-family: "Roboto";
    font-weight: 700;
    font-size: 24px;
    color: #247a6b;
  }
`;
