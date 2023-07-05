import { Image, TouchableHighlight } from "react-native";
import { AppColors } from "../../assets/styles/Colors";
import { styles } from "./styles";


type Props = {
  variant: 'base' | 'filled';
  onPress: () => void;
  icon: number;
}

export function Button({ variant, onPress, icon }: Props) {
  return (
    <TouchableHighlight
      style={variant === 'base' ? styles.base : styles.filled}
      onPress={onPress}
      underlayColor={variant === 'base' ? AppColors.blue : AppColors.gray700}
    >
      <Image source={icon} />
    </TouchableHighlight>
  )
}