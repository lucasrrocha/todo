import { StyleSheet } from "react-native";
import { AppColors } from "../../assets/styles/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.gray600,
    paddingHorizontal: 24
  },
  textCounters: {
    fontSize: 14,
    fontWeight: "700"
  },
  counters: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 21,
  },
  wrapper: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center'
  },
  created: {
    color: AppColors.blue
  },
  countersWrapper: {
    borderRadius: 999,
    backgroundColor: AppColors.gray400,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  countersText: {
    color: AppColors.gray200,
  },
  finished: {
    color: AppColors.purple
  },
  emptyList: {
    borderTopColor: AppColors.gray400,
    borderTopWidth: 1,
    paddingVertical: 48,
    paddingHorizontal: 20,
    alignItems: 'center'
  },
  imageEmpty: {
    marginBottom: 16
  },
  textEmpty: {
    color: AppColors.gray300,
    fontSize: 14
  },
  textBold: {
    fontWeight: '700'
  }
})