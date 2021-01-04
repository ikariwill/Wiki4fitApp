import React, { useEffect } from 'react';
import useForm from 'react-hook-form';
import {
  Alert,
  Keyboard,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/api';

import { Container, Logo, Form, Input, Button, ButtonText } from './styles';

import logo from '../../assets/logo.png';
import background from '../../assets/background.png';

export default function Login({ navigation }) {
  const { register, setValue, handleSubmit } = useForm();

  useEffect(() => {
    async function skipLogin() {
      const user = await AsyncStorage.getItem('@wiki4fit:user');

      if (!user) return;

      navigation.navigate('Home', { user: JSON.parse(user) });
    }

    skipLogin();
  });

  async function login({ email, senha }) {
    try {
      const loginUser = await api.post('/public/login/', { email, senha });

      const { code, message } = loginUser.data;

      if (code === 1) {
        Alert.alert('Falha no login', message);

        return;
      }

      await AsyncStorage.setItem(
        '@wiki4fit:user',
        JSON.stringify(loginUser.data)
      );

      navigation.navigate('Home', { user: loginUser.data });
    } catch (error) {
      Alert.alert('Erro ao acessar o servidor', error);
    }
  }

  function onSubmit(data) {
    login(data);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ImageBackground
        style={{ width: '100%', height: '100%' }}
        source={background}
      >
        <Container>
          <Logo source={logo} />
          <Form>
            <Input
              ref={register(
                { name: 'email' },
                { required: 'Digite seu email' }
              )}
              onChangeText={text => setValue('email', text, true)}
              autoCapitalize="none"
              autoCompleteType="email"
              autoCorrect={false}
              placeholder="Email"
            />
            <Input
              ref={register(
                { name: 'senha' },
                { required: 'Digite sua senha' }
              )}
              onChangeText={text => setValue('senha', text, true)}
              autoCapitalize="none"
              autoCompleteType="password"
              secureTextEntry
              autoCorrect={false}
              placeholder="Senha"
            />
            <Button onPress={handleSubmit(onSubmit)}>
              <ButtonText>Entrar</ButtonText>
            </Button>
          </Form>
        </Container>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}
