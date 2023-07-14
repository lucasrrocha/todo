import { MaterialIcons } from '@expo/vector-icons';
import { Pressable } from "react-native";
import { styled } from "styled-components/native";

type Props = {
  value: boolean;
  hover: () => string;
}

export const Container = styled(Pressable) <Props>`
width: 24px;
height: 24px;

background-color: ${({ hover }) => hover};
border-color: ${({ theme, value }) => value ? theme.COLORS.PURPLE_DARK : theme.COLORS.BLUE};
border-width: 1px;
border-radius: 50px;

align-items: center;
justify-content: center;
`

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 14,
  color: theme.COLORS.GRAY_100,
}))`
`;