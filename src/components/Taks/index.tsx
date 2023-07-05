import { Text, View } from "react-native";
import { Button } from "../Button";
import { styles } from "./styles";

import Trash from '../../assets/images/trash.png';
import { AppColors } from "../../assets/styles/Colors";
import { CheckboxComponent } from "../Checkbox";

type Props = {
  task: string;
  value: boolean;
  onRemove: () => void;
  onValueChange: () => void;
}

export function Tasks({ task, onRemove, onValueChange, value }: Props) {
  return (
    <View style={styles.container}>
      <CheckboxComponent
        value={value}
        onValueChange={onValueChange}
      />
      <Text style={[styles.task,
      {
        textDecorationLine: value ? 'line-through' : 'none',
        color: value ? AppColors.gray300 : AppColors.gray100
      }
      ]}>
        {task}
      </Text>
      <Button
        variant='filled'
        icon={Trash}
        onPress={onRemove}
      />
    </View>
  );
}