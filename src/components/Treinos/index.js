import React, { useEffect, useState } from "react";
import format from "date-fns/format";

import { FlatList, View } from "react-native";
import { Container, Title, Infos, Goal, Calories, Period } from "./styles";

import api from "../../services/api";

import Sessoes from "../Sessoes";

export default function Treinos({ navigation, data }) {
  const startDate = format(
    new Date(data.dt_inicio.split(" ")[0]),
    "dd/MM/yyyy"
  );
  const endDate = format(new Date(data.dt_fim.split(" ")[0]), "dd/MM/yyyy");

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

    getSessoes(data.id);
  });

  return (
    <Container>
      <Title>{data.nome}</Title>
      <Period>
        De {startDate} a {endDate}
      </Period>
      <Infos>
        <Goal>{data.objetivo}</Goal>
        <Calories>{data.gasto_calorico} calorias</Calories>
      </Infos>
      <FlatList
        data={sessoes}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View>
            <Sessoes navigation={navigation} data={item}></Sessoes>
          </View>
        )}
      />
    </Container>
  );
}
