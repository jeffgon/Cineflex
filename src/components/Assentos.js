import styled from "styled-components";
import ListaAssento from "./ListaAssentos";

import Bolinhas from "./BolinhasContainer";
import ContainerPosterSelecionado from "./ContainerPosterFIlme";

export default function Assentos() {
  return (
    <>
      <TituloParaSelecionar>
        <p>Selecione o(s) assento(s)</p>
      </TituloParaSelecionar>

      <AssentosContainer>
        <ListaAssento />
      </AssentosContainer>

      <ContainerBolinhas>
        <Bolinhas />
      </ContainerBolinhas>

      <Formulario>
        <div>
          <p>Nome do comprador:</p>
          <input placeholder="Digite seu nome..." />
        </div>
        <div>
          <p>CPF do comprador:</p>
          <input placeholder="Digite seu CPF..." />
        </div>
      </Formulario>

      <BotaoReservarAssento>
        <p>Reservar assento(s)</p>
      </BotaoReservarAssento>

      <FilmeSelecionado>
        <ContainerPosterSelecionado />
      </FilmeSelecionado>
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

const AssentosContainer = styled.div`
  width: 70%;
  height: 110px;
  margin-left: 15%;
  margin-right: 20%;
  flex-wrap: wrap;
`;

const FilmeSelecionado = styled.div`
  width: 100%;
  height: 117px;
  margin-top: 165px;
  background-color: #dfe5ed;
  border: 1px solid #9eadba;
`;

const ContainerBolinhas = styled.div`
  width: 70%;
  height: 110px;
  margin-left: 15%;
  margin-right: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Formulario = styled.div`
  width: 70%;
  height: 110px;
  margin-left: 15%;
  margin-right: 20%;
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-top: 15px;
  }
  input {
    width: 327px;
    height: 51px;
    border: 1px solid #d5d5d5;
    border-radius: 3px;
    margin-top: 5px;
    &::placeholder {
      font-style: italic;
    }
  }
`;

const BotaoReservarAssento = styled.div`
  width: 225px;
  height: 42px;
  margin-top: 110px;
  margin-left: 25%;
  margin-right: 20%;
  background-color: #e8833a;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 18px;
  border-radius: 3px;
`;
