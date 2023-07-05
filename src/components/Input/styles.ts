import { StyleSheet } from "react-native";
import { AppColors } from "../../assets/styles/Colors";

export const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 54,
    backgroundColor: AppColors.gray500,
    borderRadius: 8,
    color: AppColors.gray100,
    padding: 16,
    fontSize: 16,
    marginRight: 4,
    borderColor: AppColors.purple
  },
})