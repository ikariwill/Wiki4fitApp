import React, { useEffect, useState } from "react";
import { AsyncStorage, ScrollView } from "react-native";

import { Button, ButtonText } from "../Login/styles";
import { Container, Title, List, Icon, TreinoTitle } from "./styles";

import api from "../../services/api";

import Novidades from "../../components/Novidades";
import Treinos from "../../components/Treinos";

export default function Home({ navigation }) {
  const [user, setUser] = useState([]);
  const [userIcon, setUserIcon] = useState(
    "https://wiki4fit.com.br/assets/global/img/boneco.png"
  );
  const [unidades, setUnidades] = useState([]);
  const [treinos, setTreinos] = useState([]);
  const [novidades, setNovidades] = useState([]);

  useEffect(() => {
    const loggedUser = navigation.getParam("user").data;

    async function getNews() {
      const response = await api.get(`/private/novidades/unidade/3`, {
        headers: {
          email: loggedUser.email,
          senha: loggedUser.senha
        }
      });

      const news = response.data;

      setNovidades(news.data);
    }

    async function getUnidades() {
      const response = await api.get(`/private/usuario/unidades`, {
        headers: {
          email: loggedUser.email,
          senha: loggedUser.senha
        }
      });

      const unidades = response.data;

      setUserIcon(
        `https://wiki4fit.com.br/assets/images/usuarios/${unidades.data[0].imagem_id}`
      );

      setUnidades(unidades.data[0]);

      getTreinos(unidades.data[0].id);
    }

    async function getTreinos(userId) {
      const response = await api.get(`/private/treinos/usuario/${userId}`, {
        headers: {
          email: loggedUser.email,
          senha: loggedUser.senha
        }
      });

      const treinos = response.data;
      console.log(treinos);

      setTreinos(treinos.data);
    }

    getNews();

    getUnidades();

    setUser(loggedUser);
  }, []);

  async function handleLogout() {
    await AsyncStorage.removeItem("@wiki4fit:user");

    navigation.navigate("Login");
  }

  return (
    <ScrollView>
      <Container>
        <Icon
          source={{
            uri: userIcon
          }}
        />
        <Title>
          Bem vind{unidades.sexo === "F" ? "a" : "o"} {user.apelido}
        </Title>
        <TreinoTitle>Seus Treinos</TreinoTitle>
        {treinos.map(treino => (
          <Treinos
            key={treino.id}
            navigation={navigation}
            data={treino}
          ></Treinos>
        ))}

        <List
          keyboardShouldPersistTaps="handled"
          data={novidades}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Novidades navigation={navigation} data={item} />
          )}
        />

        <Button onPress={handleLogout}>
          <ButtonText>Logout</ButtonText>
        </Button>
      </Container>
    </ScrollView>
  );
}
