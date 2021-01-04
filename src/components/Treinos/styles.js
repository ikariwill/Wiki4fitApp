import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 0 10px 0;
  border-radius: 4px;
  margin-bottom: 15px;
  background: #fff;
  width: 90%;
`;

export const Title = styled.Text`
  padding-left: 10px;
  padding-top: 5px;
  font-size: 18px;
  font-weight: bold;
  color: #6bd4c1;
  text-transform: uppercase;
`;

export const Infos = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 10px;
  margin-top: 5px;
`;

export const Goal = styled.Text`
  font-size: 17px;
  color: #fff;
  line-height: 20px;
  padding: 5px 10px;
  background: #13a78b;
  border-radius: 4px;
`;

export const Calories = styled.Text`
  font-size: 17px;
  color: #fff;
  line-height: 20px;
  padding: 5px 10px;
  background: #ffb100;
  border-radius: 4px;
  margin-left: 5px;
`;

export const Period = styled.Text`
  padding-left: 10px;
  font-size: 16px;
  color: #666;
  margin-top: 5px;
  line-height: 20px;
`;
