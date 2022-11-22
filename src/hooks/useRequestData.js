import { useEffect, useState } from "react";
import axios from "axios";

export const useRequestData = (estadoInicial, baseUrl, path) => {
  const [dados, setDados] = useState(estadoInicial);
  const [isLoading, setIsLoading] = useState(false);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${baseUrl}${path}`)
      .then((response) => {
        setDados(response.data);
        setErro(false);
      })
      .catch(() => {
        setErro(true);
      });
    setIsLoading(false);
  }, [path]);
  return [dados, isLoading, erro];
};
