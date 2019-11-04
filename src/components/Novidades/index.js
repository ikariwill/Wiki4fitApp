import React from "react";
import { Linking } from "react-native";

import {
  Container,
  Image,
  Title,
  Description,
  Button,
  ButtonText,
  Empty
} from "./styles";

export default function Novidades({ data, navigation }) {
  const imagem =
    data.imagem_id === "" || data.imagem_id === null
      ? "default.png"
      : data.imagem_id;

  return (
    <Container>
      <Image
        source={{
          uri: `https://wiki4fit.com.br/assets/images/novidades/${imagem}`
        }}
      />
      <Title>{data.titulo}</Title>
      <Description>{data.mensagem}</Description>
      {data.link ? (
        <Button onPress={() => Linking.openURL(data.link)}>
          <ButtonText>Acessar</ButtonText>
        </Button>
      ) : (
        <Empty />
      )}
    </Container>
  );
}
