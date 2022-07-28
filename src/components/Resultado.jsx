import React from "react";
import styled from "@emotion/styled";
const Contenedor = styled.div`
  color: "black";
  font-family: "Lato", sans-serif;
  display: flex;
  align-items: start;
  gap: 1rem;
  margin-top: 30;
`;
const Imagen = styled.img`
  display: block;
  width: 120px;
`;

const Texto = styled.div`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`;
const Precio = styled.div`
  font-size: 24px;
  span {
    font-weight: 700;
  }
`;
const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;
  return (
    <Contenedor>
      <div>
        <Imagen
          src={`https://cryptocompare.com/${IMAGEURL}`}
          alt="imagen cripto"
        />
      </div>
      <Precio>
        El Precio es de: <span>{PRICE}</span>{" "}
      </Precio>
      <Texto>
        El Precio mas alto del día : <span>{HIGHDAY}</span>{" "}
      </Texto>
      <Texto>
        El Precio mas bajo del dia: <span>{LOWDAY}</span>{" "}
      </Texto>
      <Texto>
        Variacion ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span>{" "}
      </Texto>
      <Texto>
        Ultima Actualizacion: <span>{LASTUPDATE}</span>{" "}
      </Texto>
      <p>
        El Precio es de: <span>{PRICE}</span>{" "}
      </p>
    </Contenedor>
  );
};

export default Resultado;
