import styled from "styled-components";
import { Link } from "react-router-dom";

export default function ListaSessoes({ sessoes }) {
  console.log(sessoes);

  if (sessoes === undefined) {
    return <div>Carregando...</div>;
  }
  return (
    <>
      <HorarioContainer>
        {sessoes?.days.map((s) => (
          <div key={s.id} data-test="movie-day">
            <Dia>
              {s.weekday} - {s.date}
            </Dia>
            <ContainerBotao>
              {s.showtimes.map((h) => (
                <LinkPersonalizado key={h.id} to={`/assentos/${h.id}`} data-test="showtime">
                  <Botao>{h.name}</Botao>
                </LinkPersonalizado>
              ))}
            </ContainerBotao>
          </div>
        ))}
      </HorarioContainer>
    </>
  );
}

const HorarioContainer = styled.div`
  width: 70%;
  margin-left: 15%;
  margin-right: 20%;
`;
const Botao = styled.div`
  width: 83px;
  height: 43px;
  background-color: #e8833a;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 18px;
  font-weight: 400;
  margin-top: 5px;
  border-radius: 3px;
`;
const ContainerBotao = styled.div`
  width: 173px;
  display: flex;
  justify-content: space-between;
`;
const Dia = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  margin-top: 10px;
`;
const LinkPersonalizado = styled(Link)`
  text-decoration: none;
`
