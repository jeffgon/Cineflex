import { Form, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useEffect } from "react";

export default function Formulario({
  nome,
  setNome,
  cpf,
  setCpf,
  assentoSelecionados,
}) {
  const navigate = useNavigate()
  function reservarAssento(e) {
    e.preventDefault();
    const URL =
      "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many";
    const promise = axios.post(URL, {
      ids: assentoSelecionados,
      name: nome,
      cpf: cpf,
    });
    promise.then(() => navigate("/sucesso"));
    promise.catch((err) => console.log(err.response.data));
  }

  return (
    <FormularioContainer onSubmit={reservarAssento}>
      <div>
        <p>Nome do comprador:</p>
        <input
          type="text"
          required
          placeholder="Digite seu nome..."
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
      <div>
        <p>CPF do comprador:</p>
        <input
          type="number"
          required
          placeholder="Digite seu CPF..."
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
      </div>
      <BotaoReservarAssento type="submit">
        <p>Reservar assento(s)</p>
      </BotaoReservarAssento>
    </FormularioContainer>
  );
}

const FormularioContainer = styled.form`
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

const BotaoReservarAssento = styled.button`
  width: 225px;
  height: 42px;
  margin-top: 25px;
  margin-left: 15%;
  margin-right: 20%;
  background-color: #e8833a;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 18px;
  border-radius: 3px;
  border-style: none;
  p {
    margin-bottom: 15px;
  }
`;
