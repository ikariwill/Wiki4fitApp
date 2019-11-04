import React from "react";
import format from "date-fns/format";

import { Container, Title, Infos, Goal, Calories, Period } from "./styles";

import Sessoes from "../Sessoes";

export default function Treinos({ navigation, data }) {
  const startDate = format(
    new Date(data.dt_inicio.split(" ")[0]),
    "dd/MM/yyyy"
  );
  const endDate = format(new Date(data.dt_fim.split(" ")[0]), "dd/MM/yyyy");

  return (
    <Container>
      <Title>
        {data.nome} {data.id}
      </Title>
      <Period>
        De {startDate} a {endDate}
      </Period>
      <Infos>
        <Goal>{data.objetivo}</Goal>
        <Calories>{data.gasto_calorico} calorias</Calories>
      </Infos>
      <Sessoes navigation={navigation} id={data.id}></Sessoes>
    </Container>
  );
}
