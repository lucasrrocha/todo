import { StyleSheet } from "react-native";
import { css, styled } from "styled-components/native";
import { AppColors } from "../../assets/styles/Colors";

type Props = {
  value: boolean;
}

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

export const Container = styled.View`
  width: 100%;
  
  flex-direction: row;

  align-items: center;
  justify-content: center;

  margin-bottom: 10px;

  padding: 12px;

  border-radius: 8px;
  border-width: 1px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_500};
    border-color: ${theme.COLORS.GRAY_400};
  `}
`;

export const Task = styled.Text<Props>`
  flex: 1;

  margin-left: 8px;

  ${({ theme, value }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${value ? theme.COLORS.GRAY_300 : theme.COLORS.GRAY_100};
    text-decoration-line: ${value ? 'line-through' : 'none'};
  `}
`;