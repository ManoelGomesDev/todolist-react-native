import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { TextInput } from "react-native";

export const Container = styled.View`
  flex-direction: row;

  padding: 0 12px;
  margin-top: -27px;
`;

export const Input = styled(TextInput)`
  flex: 1;
  height: 52px;
  padding: 16px;
  border-radius: 6px;
  background-color: #262626;
  color: #f2f2f2;
`;

export const BtnAdd = styled(TouchableOpacity)`
  height: 52px;
  width: 52px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.BLUE_DARK};
  align-items: center;
  justify-content: center;
  margin-left: 4px;
`;

export const ContainerTasks = styled.View`
  padding: 0 12px;
`;
export const HeaderTasks = styled.View`
  flex-direction: row;
  justify-content: space-between;

  margin-top: 32px;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_400};
  border-style: solid;
`;

export const ContainerTaskStatus = styled.View`
  flex-direction: row;
`;

export const Icon = styled(Ionicons).attrs(({ theme }) => ({
  color: theme.COLORS.WHITE,
  size: 24,
}))``;
