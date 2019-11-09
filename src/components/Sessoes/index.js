import React from "react";

import Image from "react-native-remote-svg";

import { Container, Title } from "./styles";

export default function Sessoes({ navigation, data }) {
  return (
    <Container>
      <Title key={data.id}>{data.nome}</Title>
      <Image
        source={{
          uri: `https://wiki4fit.com.br/${data.icone}`
        }}
        style={{ width: 50, height: 50 }}
      />
    </Container>
  );
}
