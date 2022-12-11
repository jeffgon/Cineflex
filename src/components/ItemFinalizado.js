import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function ItemFinalizado({
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

  const navigate = useNavigate();

  function voltarHome(){
    navigate("/")
    setNome("")
    setCpf("")
    setFilmes("")
    setSessoes("")
  }

  console.log(sessoes?.days);
  return (
    <>
      <Item>
        <p>Filme e sessão</p>
        <h1>{sessoes?.title}</h1>
        {/* <h2>{sessoes.days.date} - 15:00</h2> */}
      </Item>
      <Item>
        <p>Ingresso</p>
        {assentoSelecionados.map((a) => <h1>Assento {a}</h1>)}
        
      </Item>
      <Item>
        <p>Comprador</p>
        <h1>Nome: {nome}</h1>
        <h2>CPF: {cpf}</h2>
      </Item>
      <CentralizarBotao>
        <BotaoHome onClick={voltarHome}>Voltar pra home</BotaoHome>
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
`;

const BotaoHome = styled.div`
  width: 225px;
  height: 42px;
  background-color: #e8833a;
  border-radius: 3px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 25%;
  margin-right: 25%;
`;
