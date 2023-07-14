import { Feather } from '@expo/vector-icons';
import { useCallback, useState } from 'react';
import { PressableProps } from 'react-native';
import { useTheme } from 'styled-components/native';
import { ButtonTypeStyleProps, Container, Icon } from "./styles";

type Props = PressableProps & {
  icon: keyof typeof Feather.glyphMap;
  variant: ButtonTypeStyleProps;
}

export function Button({ icon, variant = 'BASE', ...rest }: Props) {
  const { COLORS } = useTheme();
  const [pressed, setPressed] = useState(false);

  const handlePressIn = useCallback(() => setPressed(true), []);
  const handlePressOut = useCallback(() => setPressed(false), []);

  const hoverEffect = pressed
    ? COLORS.BLUE
    : COLORS.BLUE_DARK;

  const hoverFilledEffect = pressed
    ? COLORS.DANGER
    : COLORS.GRAY_300;

  return (
    <Container
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      hover={hoverEffect}
      variant={variant}
      {...rest}
    >
      <Icon name={icon} variant={variant} hover={hoverFilledEffect} />
    </Container>
  )
}