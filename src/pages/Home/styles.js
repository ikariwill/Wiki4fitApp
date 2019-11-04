import styled from "styled-components/native";

import { getStatusBarHeight } from "react-native-status-bar-height";

export const Container = styled.View`
  flex: 1;
  padding-top: ${40 + getStatusBarHeight(true)}px;
  background: #443daa;
  align-items: center;
`;

export const Icon = styled.Image`
  max-height: 200px;
  border-radius: 75px;
  width: 150px;
  height: 150px;
`;

export const Welcome = styled.Text`
  font-size: 20px;
  color: #fff;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  margin-bottom: 5px;
  margin-left: 20px;
  align-self: flex-start;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: { paddingHorizontal: 20 },
  showsVerticalScrollIndicator: false
})``;

export const VideoContainer = styled.View`
  flex: 1;
`;
