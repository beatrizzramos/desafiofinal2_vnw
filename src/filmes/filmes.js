import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const FilmesContainer = styled.section`
  padding-left: 5rem;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #000000;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 25%;
    margin-bottom: 2rem;
  }

  h2 {
    font-size: 1.2rem;
    color: #f2f2f2;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

const Image = styled.img`
  width: 70%;
`;

const ContainerTitle = styled.h2`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2rem;
  color: #f2f2f2;
  background: #000000;
  padding: 3rem;
`;

export default function Filmes() {
  const [filmes, setFilmes] = useState([]);

  const getApi = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=34635a3c54d72514d08fd6979b14e222&language=pt-Br&page=1"
      )
      .then((response) => {
        setFilmes(response.data.results);
      });
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <>
      <ContainerTitle> Filmes Populares </ContainerTitle>
      <FilmesContainer>
        {filmes.map((item) => (
          <div>
            <Image
              src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              alt={item.title}
            />
            <h2>{item.title} </h2>
          </div>
        ))}
      </FilmesContainer>
    </>
  );
}
