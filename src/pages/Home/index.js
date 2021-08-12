import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { Button, ButtonText } from '../Login/styles';
import { Container, Title, List, Icon, ProfileName, Header } from './styles';

import api from '../../services/api';

import Novidades from '../../components/Novidades';
import Treinos from '../../components/Treinos';

export default function Home({ route, navigation }) {
  const [user, setUser] = useState([]);
  const [unidadeId, setUnidadeId] = useState(null);
  const [training, setTraining] = useState([]);
  const [novidades, setNovidades] = useState([]);
  const [options] = useState({
    headers: {
      email: route.params.user.data.email,
      senha: route.params.user.data.senha,
    },
  });

  useEffect(() => {
    async function getTraining() {
      const response = await api.get(
        `/private/treinos/usuario/${user.id}`,
        options
      );

      setTraining(response.data.data);
    }

    getTraining();

    console.log(user);
  }, [user, options]);

  useEffect(() => {
    async function getNews() {
      const response = await api.get(
        `/private/novidades/unidade/${unidadeId}`,
        options
      );

      const news = response.data;

      setNovidades(news.data);
    }

    getNews();
  }, [unidadeId, options]);

  useEffect(() => {
    async function getUnidades() {
      const response = await api.get('/private/usuario/unidades', options);

      setUser(response.data.data[0]);

      setUnidadeId(response.data.data[0].cliente_unidade_id);
    }

    getUnidades();
  }, [options]);

  async function handleLogout() {
    await AsyncStorage.removeItem('@wiki4fit:user');

    navigation.navigate('Login');
  }

  return (
    <ScrollView>
      <Container>
        <Header>
          <ProfileName>
            {user.nome} {user.sobrenome}
          </ProfileName>
          <Icon
            source={{
              uri: `https://wiki4fit.com.br/assets/images/usuarios/${user.imagem_id}`,
            }}
          />
        </Header>
        <Title>Seus Treinos</Title>
        {training.map(treino => (
          <Treinos key={treino.id} route={route} data={treino} />
        ))}
        <Title>Feed</Title>
        <List
          keyboardShouldPersistTaps="handled"
          data={novidades}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Novidades route={route} data={item} />}
        />

        <Button onPress={handleLogout}>
          <ButtonText>Logout</ButtonText>
        </Button>
      </Container>
    </ScrollView>
  );
}
