import React from "react";
import styled from "styled-components";
import Avatar from "../assets/avatar.png";
import Estrela from "../assets/estrela.png";

const MainStyle = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-image: url(${Avatar});
  background-position: center;
  background-size: cover;
  height: 100vh;
`;

const Conteudo = styled.div`
  display: flex;
  width: 90%;
  height: 30vh;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  font-family: Arial, Helvetica, sans-serif;
  color: #f2f2f2;
  h2 {
    font-size: 2rem;
  }
  
  h4 {
    font-size: 0.8rem;
  }
  h3 {
    font-size: 1.5rem;
  }
  p {
    width: 50%;
    font-size: 1.2rem;
  }
  ul {
    list-style: none;
    height: 0.1vh;
    width: 77rem;
    display: flex;
    justify-content: space-around;
    font-size: 1.1rem;
`;
const EstrelaDiv = styled.div`
  display: flex;
  width: 50%;
  align-items: center;

  button {
    border: none;
    background: none;
  }
`;

const ButtonDiv = styled.div`
  width: 25%;
  display: flex;
  justify-content: space-around;
`;

const ButtonAssistir = styled.button`
  width: 12vw;
  height: 5vh;
  margin: 1rem;
  color: #f2f2f2;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 15px;
  border: none;
  background-color: #d53a00;
`;
const ButtonTrailer = styled.button`
  width: 12vw;
  height: 5vh;
  margin: 1rem;
  color: #f2f2f2;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 20px;
  border-radius: 15px;
  border: none;
  background-color: #717171;
`;

export default function Main() {
  return (
    <MainStyle>
      <Conteudo>
        <h1> Avatar: o Caminho da Moana Água </h1>
        <h4> 3hr 23 min | Fantasia, Família | 2023 </h4>
        <EstrelaDiv>
          <button>
            <img src={Estrela} alt="estrela" />
          </button>
          <h3> 9.0/10 </h3>
        </EstrelaDiv>
        <p>
          Após formar uma família, Jake Sully e Ney'tiri fazem de tudo para
          ficarem juntos. No entanto, eles devem sair de casa e explorar as
          regiões de Pandora quando uma antiga ameaça ressurge, e Jake deve
          travar uma guerra difícil contra os humanos.
        </p>
        <ButtonDiv>
          <ButtonAssistir> Assitir Agora </ButtonAssistir>
          <ButtonTrailer> Trailer </ButtonTrailer>
        </ButtonDiv>

        <div className="listContainer">
          <ul>
            <li>Popular</li>
            <li>Drama</li>
            <li>Ação</li>
            <li>Aventura</li>
            <li>Comédia</li>
            <li>Crime</li>
            <li>Fantasia</li>
            <li>Família</li>
          </ul>
        </div>
      </Conteudo>
    </MainStyle>
  );
}
