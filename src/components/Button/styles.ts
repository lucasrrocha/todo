import { StyleSheet } from "react-native";
import { AppColors } from "../../assets/styles/Colors";

export const styles = StyleSheet.create({
  base: {
    width: 56,
    height: 56,
    borderRadius: 6,
    backgroundColor: AppColors.blueDark,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filled: {
    alignItems: 'center',
    justifyContent: 'center',
  }
})