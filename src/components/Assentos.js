import styled from "styled-components";
import ListaAssento from "./ListaAssentos";
import Bolinhas from "./BolinhasContainer";
import ContainerPosterSelecionado from "./ContainerPosterFIlme";
import { Form, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Formulario from "./Formulario";

export default function Assentos({
  assentos,
  setAssentos,
  assentoSelecionados,
  setAssentoSelecionados,
  sessoes,
  nome,
  setNome,
  cpf,
  setCpf,
}) {
  const { idSessao } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const URL = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`;
    const promise = axios.get(URL);
    promise.then((res) => setAssentos(res.data));
    promise.catch((err) => console.log(err.response.data));
  }, []);

  return (
    <>
      <TituloParaSelecionar>
        <p>Selecione o(s) assento(s)</p>
      </TituloParaSelecionar>

      <AssentosContainer>
        <ListaAssento
          assentos={assentos}
          setAssentos={setAssentos}
          assentoSelecionados={assentoSelecionados}
          setAssentoSelecionados={setAssentoSelecionados}
        />
      </AssentosContainer>

      <ContainerBolinhas>
        <Bolinhas />
      </ContainerBolinhas>

      <Formulario
        nome={nome}
        setNome={setNome}
        cpf={cpf}
        setCpf={setCpf}
        assentoSelecionados={assentoSelecionados}
      />

      <FilmeSelecionado>
        <ContainerPosterSelecionado sessoes={sessoes} />
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
  margin-left: 15%;
  margin-right: 20%;
  flex-wrap: wrap;
  display: flex;
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
  flex-wrap: wrap;
`;
