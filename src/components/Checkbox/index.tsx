import { useCallback, useState } from "react";
import { PressableProps } from "react-native";
import { useTheme } from "styled-components/native";
import { Container, Icon } from "./styles";

type Props = PressableProps & {
  value: boolean;
  onValueChange: () => void;
}

export function CheckboxComponent({ value, onValueChange, ...rest }: Props) {
  const { COLORS } = useTheme();
  const [pressed, setPressed] = useState(false);

  const handlePressIn = useCallback(() => setPressed(true), []);
  const handlePressOut = useCallback(() => setPressed(false), []);

  function handleHoverEffect() {
    if (value) {
      return pressed
        ? COLORS.PURPLE
        : COLORS.PURPLE_DARK;
    } else {
      return pressed
        ? COLORS.BLUE_DARK
        : 'transparent'
    }
  }


  return (
    <Container
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      value={value}
      onPress={onValueChange}
      hover={handleHoverEffect}
      {...rest}
    >
      {value &&
        <Icon name='check' />
      }
    </Container>
  )
}