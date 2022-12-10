import styled from "styled-components";
import ListaFilmes from "./ListaFilmes.js";

export default function Filmes({ filmes, setFilmes }) {
  return (
    <>
      <TituloParaSelecionar>
        <p>Selecione o filme</p>
      </TituloParaSelecionar>
      <ListaFilmes filmes={filmes} setFilmes={setFilmes}/>
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
    font-weight: 400;
    font-size: 24px;
  }
`;
