import styled from "styled-components";
import imagemFilme from "../assets/image 3.png";
import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ListaFilmes({ filmes, setFilmes }) {
  useEffect(() => {
    const URL = "https://mock-api.driven.com.br/api/v8/cineflex/movies";
    const promise = axios.get(URL);
    promise.then((res) => setFilmes(res.data));
    promise.catch((err) => console.log(err.response.data));
  }, []);

  if (filmes === undefined) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <FilmesContainer>
        {filmes.map((f) => (
          <Link to={`/sessoes/${f.id}`} key={f.id}>
            <img src={f.posterURL} alt="poster do filme" />
          </Link>
        ))}
      </FilmesContainer>
    </>
  );
}

const FilmesContainer = styled.div`
  width: 70%;
  height: 100%;
  margin-left: 15%;
  margin-right: 20%;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-around;
  img {
    width: 129px;
    padding: 8px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
  }
`;
