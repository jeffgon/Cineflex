import styled from "styled-components";
import ListaSessoes from "./ListaSessoes";
import PosterFoto from "../assets/image 3.png";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ContainerPosterSelecionado from "./ContainerPosterFIlme";

export default function Sessoes({ sessoes, setSessoes }) {
  const { idFilme } = useParams();

  useEffect(() => {
    const URL = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`;
    const promise = axios.get(URL);
    promise.then((res) => setSessoes(res.data));
    promise.catch((err) => console.log(err.response.data));
  }, []);

  return (
    <>
      <TituloParaSelecionar>
        <p>Selecione o horário</p>
      </TituloParaSelecionar>

      <ListaSessoes sessoes={sessoes} />

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

const FilmeSelecionado = styled.div`
  width: 100%;
  height: 117px;
  margin-top: 200px;
  background-color: #dfe5ed;
  border: 1px solid #9eadba;
`;

const PosterFilme = styled.div`
  background-color: #dfe6ed;
  border-radius: 2px;
  display: flex;
  align-items: center;
  margin-top: 15px;
  margin-left: 15px;
  img {
    width: 48px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    padding: 8px;
    background-color: #ffffff;
    margin-left: 10px;
  }
  p {
    font-family: "Roboto";
    font-weight: 400;
    font-size: 26px;
    color: #293845;
    margin-left: 14px;
  }
`;
