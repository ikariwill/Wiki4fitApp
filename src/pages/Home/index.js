import React, { useEffect, useState } from "react";
import { View, Text, AsyncStorage } from "react-native";

// import { Container } from './styles';

export default function Home() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    async function getUser() {
      const userLogged = await AsyncStorage.getItem("@wiki4fit:user");

      setUser(userLogged);
    }

    getUser();
  }, []);

  return (
    <View>
      <Text> {user} </Text>
    </View>
  );
}
