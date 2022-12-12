import { useState } from "react";
import styled from "styled-components";

export default function ItemAssento({
  assento,
  mudarAssento,
  estaSelecionado,
  adicionarAssento,
  removerAssento,
}) {
  const { isAvailable, name, id } = assento;
  const [cor, setCor] = useState(isAvailable ? "#C3CFD9" : "#FBE192");

  function lidarCliqueAssento(assentoClicado) {
    if (!isAvailable) {
      alert("Esse assento não está disponivel!");
      return;
    }
    if(estaSelecionado(assentoClicado)){
        removerAssento(assentoClicado)
        setCor("#C3CFD9")
        return
    } 
    adicionarAssento(assentoClicado)
    setCor("#1AAE9E")
  }

  return (
    <ItemAssentoContainer onClick={() => lidarCliqueAssento(assento)} cor={cor} data-test="seat">
      {name}
    </ItemAssentoContainer>
  );
}

const ItemAssentoContainer = styled.div`
  width: 26px;
  height: 26px;
  background-color: ${(props) => props.cor};
  color: black;
  border: 1px solid #808f9d;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
`;
