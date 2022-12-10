import styled from "styled-components";

export default function ItemFinalizado() {
  return (
    <>
      <Item>
        <p>Filme e sessão</p>
        <h1>Enola Holmes</h1>
        <h2>24/06/2021 15:00</h2>
      </Item>
      <Item>
        <p>Ingresso</p>
        <h1>Assento 15</h1>
        <h2>Assento 16</h2>
      </Item>
      <Item>
        <p>Comprador</p>
        <h1>Nome: João da Silva Sauro</h1>
        <h2>CPF: 123.456.789-10</h2>
      </Item>
      <CentralizarBotao>
      <BotaoHome>Voltar pra home</BotaoHome>
      </CentralizarBotao>
      
    </>
  );
}

const Item = styled.div`
  width: 70%;
  height: 110px;
  margin-left: 15%;
  margin-right: 20%;
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
  }
  h1 {
    font-family: "Roboto";
    font-size: 22px;
    font-weight: 400;
    margin-top: 15px;
  }
  h2 {
    font-family: "Roboto";
    font-size: 22px;
    font-weight: 400;
    margin-top: 5px;
  }
`;

const CentralizarBotao = styled.div`
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`

const BotaoHome = styled.div`
  width: 225px;
  height: 42px;
  background-color: #E8833A;
  border-radius: 3px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 25%;
  margin-right: 25%;

`;
