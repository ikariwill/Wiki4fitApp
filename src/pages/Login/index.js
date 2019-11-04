import React from "react";

import { Container, Logo, Form, Input, Button, ButtonText } from "./styles";

import logo from "../../assets/logo.png";

export default function Login({ navigation }) {
  return (
    <Container>
      <Logo source={logo} />
      <Form>
        <Input autoCapitalize="none" autoCorrect={false} placeholder="Email" />
        <Input textContentType="password" placeholder="Senha" />
        <Button>
          <ButtonText>Entrar</ButtonText>
        </Button>
      </Form>
    </Container>
  );
}
