import React, { useEffect, useState } from "react";
import { AsyncStorage } from "react-native";

import { Container, Button, ButtonText } from "../Login/styles";
import { Title } from "./styles";

export default function Home({ navigation }) {
  const [user, setUser] = useState([]);
  useEffect(() => {
    console.log(navigation.getParam("user"));
    const loggedUser = navigation.getParam("user").data;

    setUser(loggedUser);
  }, []);

  async function handleLogout() {
    await AsyncStorage.removeItem("@wiki4fit:user");

    navigation.navigate("Login");
  }

  return (
    <Container>
      <Title>Bem vindo {user.apelido} </Title>
      <Button onPress={handleLogout}>
        <ButtonText>Logout</ButtonText>
      </Button>
    </Container>
  );
}
