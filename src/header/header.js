import React from "react";
import Logo from "../assets/logo.png";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 8vh;
  position: fixed;
  width: 100%;
  background: opacity#000000 0% 0% no-repeat padding-box;
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
  height: 5rem;
`;

const DivHeader = styled.div`
  width: 33%;
  display: flex;
  justify-content: ${(props) => props.justifyContent};
`;
const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  width: 40%;

  li {
    list-style: none;
    color: #f2f2f2;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.3rem;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <DivHeader justifyContent="flex-start">
        <img src={Logo} alt="logo" />
      </DivHeader>
      <DivHeader justifyContent="center">
        <List>
          <li> Séries </li>
          <li> Filmes </li>
        </List>
      </DivHeader>
      <DivHeader justifyContent="flex-end">
        <img
          className="searchIcon"
          src="https://14hp17.csb.app/Icon%20ionic-ios-search.png"
          alt="imagem (icone) de uma lupa"
        />
        <List>
          <li> Filtro </li>
          <li> Login </li>
        </List>
      </DivHeader>
    </HeaderContainer>
  );
}
