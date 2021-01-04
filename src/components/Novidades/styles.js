import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 3px 3px 10px 3px;
  border-radius: 4px;
  margin-bottom: 15px;
  background: #fff;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'cover',
})`
  max-height: 225px;
  border-radius: 4px;
  width: 100%;
  height: 225px;
`;

export const Title = styled.Text`
  padding-left: 10px;
  padding-top: 5px;
  font-size: 18px;
  font-weight: bold;
  color: #6bd4c1;
  text-transform: uppercase;
`;

export const Description = styled.Text`
  padding-left: 10px;
  font-size: 16px;
  color: #666;
  margin-top: 5px;
  line-height: 20px;
`;

export const Button = styled.TouchableOpacity`
  padding: 10px 16px;
  margin-top: 10px;
  background: #13a78b;
  align-items: center;
  align-self: center;
  border-radius: 4px;
  width: 95%;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
`;

export const Empty = styled.View``;
