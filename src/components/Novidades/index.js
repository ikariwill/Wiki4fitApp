import React from "react";

import * as WebBrowser from "expo-web-browser";

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

  async function openInAppBrowser(url) {
    await WebBrowser.openBrowserAsync(url, {
      toolbarColor: "#fdb94e",
      showTitle: true,
      controlsColor: "#fdb94e",
      collapseToolbar: true
    });
  }

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
        <Button onPress={() => openInAppBrowser(data.link)}>
          <ButtonText>Acessar</ButtonText>
        </Button>
      ) : (
        <Empty />
      )}
    </Container>
  );
}
