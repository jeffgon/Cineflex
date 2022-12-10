import styled from "styled-components";
import PosterFoto from "../assets/image 3.png";


export default function ContainerPosterSelecionado({ sessoes }) {
    return (
        <PosterFilme>
          <img src={sessoes?.posterURL} alt={"poster do filme"} />
          <p>{sessoes?.title}</p>
        </PosterFilme>
    )
}
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