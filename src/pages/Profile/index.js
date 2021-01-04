import React, { useState, useEffect } from 'react';

import { FlatList } from 'react-native';

import { Container, Card, Title, Unidade, Logo, Icon } from './styles';

import api from '../../services/api';

export default function Profile({ route }) {
  const [users, setUsers] = useState([]);

  const [options] = useState({
    headers: {
      email: route.params.user.data.email,
      senha: route.params.user.data.senha,
    },
  });

  useEffect(() => {
    async function getUsers() {
      const response = await api.get('/private/usuario/unidades', options);

      setUsers(response.data.data);

      console.log(response.data);
    }

    getUsers();
  }, [options]);

  function handleProfile(profile) {
    console.log(profile, 2);
  }

  return (
    <Container>
      <FlatList
        data={users}
        showsVerticalScrollIndicator
        vertical
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Card>
            <Title>{item.nome}</Title>
            <Unidade>{item.cliente_unidade.nome}</Unidade>
            {item.imagem_id ? (
              <Icon
                source={{
                  uri: `https://wiki4fit.com.br/assets/images/usuarios/${item.imagem_id}`,
                }}
              />
            ) : (
              ''
            )}
            <Logo
              source={{
                uri: `https://wiki4fit.com.br/imagem.php?imagem=${item.cliente_unidade.logo_pequeno}`,
              }}
            />
          </Card>
        )}
      />
    </Container>
  );
}
