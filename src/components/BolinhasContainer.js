import styled from "styled-components";

export default function Bolinhas() {
  return (
    <>
      <div>
        <Bolinha></Bolinha>
        <Titulo>Selecionado</Titulo>
      </div>
      <div>
        <Bolinha2></Bolinha2>
        <Titulo>Disponível</Titulo>
      </div>
      <div>
        <Bolinha3></Bolinha3>
        <Titulo>Indisponível</Titulo>
      </div>
    </>
  );
}

const Bolinha = styled.div`
  width: 25px;
  height: 25px;
  border: 1px solid #0e7d71;
  border-radius: 17px;
  background-color: #0e7d71;
  margin-left: 25px;
`;
const Bolinha2 = styled.div`
  width: 25px;
  height: 25px;
  border: 1px solid #c3cfd9;
  border-radius: 17px;
  background-color: #c3cfd9;
  margin-left: 25px;
`;
const Bolinha3 = styled.div`
  width: 25px;
  height: 25px;
  border: 1px solid #fbe192;
  border-radius: 17px;
  background-color: #fbe192;
  margin-left: 25px;
`;

const Titulo = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  color: #4e5a65;
  margin-top: 10px;
`;
