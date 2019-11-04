import React, { useEffect, useState } from "react";

import { Container, Title } from "./styles";

import api from "../../services/api";

export default function Sessoes({ navigation, id }) {
  const [sessoes, setSessoes] = useState([]);

  const loggedUser = navigation.getParam("user").data;
  const options = {
    headers: {
      email: loggedUser.email,
      senha: loggedUser.senha
    }
  };

  useEffect(() => {
    async function getSessoes(treinoId) {
      const response = await api.get(
        `/private/treinos/sessao/${treinoId}`,
        options
      );

      setSessoes(response.data.data);
    }

    getSessoes(id);
  }, []);

  return (
    <Container>
      {sessoes.map(sessao => (
        <Title key={sessao.id}>{sessao.nome}</Title>
      ))}
    </Container>
  );
}
