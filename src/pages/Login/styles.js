import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  align-self: center;
  margin-top: 20px;
  min-width: 211px;
  min-height: 38px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 20px;
  padding: 0 20px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#999"
})`
  padding: 12px 15px;
  border-radius: 4px;
  height: 44px;
  font-size: 16px;
  color: #333;
  background: #fff;
  margin-bottom: 10px;
  width: 80%;
  align-self: center;
`;

export const Button = styled.TouchableOpacity`
  padding: 10px 16px;
  background: #f58421;
  align-items: center;
  align-self: center;
  border-radius: 4px;
  width: 80%;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
`;
