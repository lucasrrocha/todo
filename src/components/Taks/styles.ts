import { StyleSheet } from "react-native";
import { AppColors } from "../../assets/styles/Colors";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: AppColors.gray500,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: AppColors.gray400
  },
  task: {
    flex: 1,
    fontSize: 14,
    fontWeight: '400',
    marginLeft: 8,
  }
});