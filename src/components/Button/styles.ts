import { Feather } from '@expo/vector-icons';
import { Pressable } from "react-native";
import { styled } from "styled-components/native";

export type ButtonTypeStyleProps = 'BASE' | 'FILLED';

type Props = {
  variant: ButtonTypeStyleProps
  hover: any
}

export const Container = styled(Pressable) <Props>`
  width: 56px;
  height: 56px;

  border-radius: 6px;

  background-color: ${({ variant, hover }) => variant === 'BASE' ? hover : 'transparent'};

  align-items: center;
  justify-content: center;
`;

export const Icon = styled(Feather).attrs({
  size: 24,
}) < Props>`
  color: ${({ theme, variant, hover }) => variant === 'BASE' ? theme.COLORS.GRAY_100 : hover}
`;