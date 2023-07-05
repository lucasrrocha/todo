import { TextInput } from "react-native";
import { AppColors } from "../../assets/styles/Colors";
import { styles } from "./styles";

type Props = {
  onChangeText: any;
  value: string;
  isFocused: boolean;
  onFocus: () => void;
  onBlur: () => void;
}

export function Input({ onChangeText, value, onFocus, onBlur, isFocused }: Props) {

  return (
    <TextInput
      style={[styles.input, { borderColor: isFocused ? AppColors.purple : 'transparent', borderWidth: 1 }]}
      placeholder='Adicione uma nova tarefa'
      placeholderTextColor='#6B6B6B'
      onChangeText={onChangeText}
      value={value}
      selectionColor={AppColors.gray100}
      onFocus={onFocus}
      onBlur={onBlur}
    />

  )
}