import styled from "styled-components/native";

export const Container = styled.View`
  height: 19px;
  width: 25px;

  border-radius: 99px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
  margin-left: 8px;
  align-items: center;
  justify-content: center;
`;

export const Number = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
