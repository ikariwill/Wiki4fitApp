import React, { useEffect } from "react";
import useForm from "react-hook-form";
import {
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
  AsyncStorage
} from "react-native";

import api from "../../services/api";

import { Container, Logo, Form, Input, Button, ButtonText } from "./styles";

import logo from "../../assets/logo.png";

export default function Login({ navigation }) {
  const { register, setValue, handleSubmit } = useForm();

  useEffect(() => {
    async function userIsLogged() {
      const user = await AsyncStorage.getItem("@wiki4fit:user");

      if (!user) return false;

      return true;
    }

    if (userIsLogged()) {
      navigation.navigate("Home");
    }
  }, []);

  function onSubmit(data) {
    login(data);
  }

  async function login({ email, senha }) {
    const loginUser = await api.post("/public/login/", { email, senha });

    const { code, message } = loginUser.data;

    if (code === 1) {
      Alert.alert("Falha no login", message);

      return;
    }

    await AsyncStorage.setItem(
      "@wiki4fit:user",
      JSON.stringify(loginUser.data)
    );

    navigation.navigate("Home");
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Container>
        <Logo source={logo} />
        <Form>
          <Input
            ref={register({ name: "email" }, { required: "Digite seu email" })}
            onChangeText={text => setValue("email", text, true)}
            autoCapitalize="none"
            autoCompleteType="email"
            autoCorrect={false}
            placeholder="Email"
          />
          <Input
            ref={register({ name: "senha" }, { required: "Digite sua senha" })}
            onChangeText={text => setValue("senha", text, true)}
            autoCapitalize="none"
            autoCompleteType="password"
            secureTextEntry={true}
            autoCorrect={false}
            placeholder="Senha"
          />
          <Button onPress={handleSubmit(onSubmit)}>
            <ButtonText>Entrar</ButtonText>
          </Button>
        </Form>
      </Container>
    </TouchableWithoutFeedback>
  );
}
