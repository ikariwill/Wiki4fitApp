import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: ${40 + getStatusBarHeight(true)}px;
  padding-left: 10px;
  padding-right: 10px;
  flex: 1;
  justify-content: center;
  align-items: center;
  align-content: center;

  background: #443daa;
`;

export const Card = styled.View`
  padding: 10px 10px 10px 10px;
  border-radius: 4px;
  margin-bottom: 10px;
  width: 100%;
  background: #fff;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #222;
  margin-bottom: 0px;
`;

export const Unidade = styled.Text.attrs({
  numberOfLines: 1,
  ellipsizeMode: 'tail',
})`
  font-size: 16px;
  color: #999;
  margin-bottom: 10px;
`;

export const Logo = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 100%;
  height: 50px;
`;

export const Icon = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 100%;
  height: 50px;
  border-radius: 200px;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingHorizontal: 20,
  },
  showsVerticalScrollIndicator: false,
})`
  display: flex;
`;
