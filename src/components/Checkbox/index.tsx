import { Image, TouchableHighlight, View } from "react-native";
import { styles } from "./styles";

import Checked from '../../assets/images/checked.png';
import { AppColors } from "../../assets/styles/Colors";

type Props = {
  value: boolean;
  onValueChange: () => void;
}

export function CheckboxComponent({ value, onValueChange }: Props) {
  return (
    <TouchableHighlight
      style={[styles.container,
      {
        borderColor: value ? AppColors.purpleDark : AppColors.blue,
        backgroundColor: value ? AppColors.purpleDark : AppColors.gray500,
      }
      ]}
      onPress={onValueChange}
      underlayColor={value ? AppColors.purple : AppColors.blueDark}
    >
      <View>
        {value &&
          <Image style={styles.checkbox} source={Checked} />
        }
      </View>
    </TouchableHighlight>
  )
}