import React, { useEffect, useState } from "react";
import { AsyncStorage, ScrollView, FlatList, View } from "react-native";

import { Button, ButtonText } from "../Login/styles";
import { Container, Title, List, Icon, Welcome } from "./styles";

import api from "../../services/api";

import Novidades from "../../components/Novidades";
import Treinos from "../../components/Treinos";

export default function Home({ navigation }) {
  const [user, setUser] = useState([]);
  const [unidades, setUnidades] = useState([]);
  const [treinos, setTreinos] = useState([]);
  const [novidades, setNovidades] = useState([]);

  const [userIcon, setUserIcon] = useState(
    "https://wiki4fit.com.br/assets/global/img/boneco.png"
  );

  useEffect(() => {
    const loggedUser = navigation.getParam("user").data;
    const options = {
      headers: {
        email: loggedUser.email,
        senha: loggedUser.senha
      }
    };

    async function getNews(unidadeId) {
      const response = await api.get(
        `/private/novidades/unidade/${unidadeId}`,
        options
      );

      const news = response.data;

      setNovidades(news.data);
    }

    async function getUnidades() {
      const response = await api.get("/private/usuario/unidades", options);

      const unidades = response.data;

      setUserIcon(
        `https://wiki4fit.com.br/assets/images/usuarios/${unidades.data[0].imagem_id}`
      );

      setUnidades(unidades.data[0]);

      getTreinos(unidades.data[0].id);
      getNews(unidades.data[0].cliente_unidade_id);
    }

    async function getTreinos(userId) {
      const response = await api.get(
        `/private/treinos/usuario/${userId}`,
        options
      );

      const treinos = response.data;

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
        <Welcome>
          Bem vind
          {unidades.sexo === "F" ? "a" : "o"} {user.apelido}
        </Welcome>
        <Title>Seus Treinos</Title>
        {treinos.map(treino => (
          <Treinos key={treino.id} navigation={navigation} data={treino} />
        ))}

        {/* <VideoContainer>
          <VideoPlayer
            videoProps={{
              shouldPlay: true,
              resizeMode: Video.RESIZE_MODE_CONTAIN,
              source: {
                uri: "https://wiki4fit.com.br/videos/1/536380.mp4"
              }
            }}
            inFullscreen={true}
            videoBackground="transparent"
            height={250}
            isLooping={true}
            isMuted={true}
            showFullscreenButton={true}
          />
        </VideoContainer> */}

        <Title>Feed</Title>
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
