import styled from "styled-components";
import ItemFinalizado from "./ItemFinalizado";

export default function FinalizarPedido() {
  return (
    <>
    <TituloParaSelecionar>
      <p>Pedido feito com sucesso!</p>
    </TituloParaSelecionar>
    <ItemFinalizado />
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
    color: #247A6B;
  }
`;



