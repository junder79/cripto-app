import styled from "@emotion/styled";
import useSelectMonedas from "../hooks/useSelectMonedas";
import { monedas } from "../data/monedas";
import { useState, useEffect } from "react";
import Error from "./Error";
const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-top: 20px;
  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`;

const Formulario = ({ setMonedas }) => {
  const [criptos, setCriptos] = useState([]);
  const [error, setError] = useState(false);
  const [moneda, SelectMonedas] = useSelectMonedas(
    "Selecciona el tipo de moneda",
    monedas
  );

  const [criptoMoneda, SelectCriptoMoneda] = useSelectMonedas(
    "Elige tu Critomoneda",
    criptos
  );

  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      const arrayCriptos = resultado.Data.map((critpo) => {
        const objetoCripto = {
          id: critpo.CoinInfo.Name,
          nombre: critpo.CoinInfo.FullName,
        };

        return objetoCripto;
      });
      setCriptos(arrayCriptos);
    };
    consultarAPI();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    if ([moneda, criptoMoneda].includes("")) {
      setError(true);
    } else {
      setError(false);

      setMonedas({
        moneda,
        criptoMoneda,
      });
    }
  };
  return (
    <>
      {error && <Error>Todos los campos son obligatorio</Error>}
      <form onSubmit={handleSubmit}>
        <SelectMonedas></SelectMonedas>
        <SelectCriptoMoneda></SelectCriptoMoneda>
        <InputSubmit type="submit" value="Cotiza" />
      </form>
    </>
  );
};

export default Formulario;
