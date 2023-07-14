import { css, styled } from "styled-components/native";

type Props = {
  isFocused: boolean;
}

export const Container = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.COLORS.GRAY_300,
  selectionColor: theme.COLORS.GRAY_100
})) <Props>`
  flex: 1;
  height: 54px;

  padding: 16px;

  margin-right: 4px;
  
  ${({ theme }) => css`
  background-color: ${theme.COLORS.GRAY_500};
  color: ${theme.COLORS.GRAY_100};
  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.MD}px;
  `}
  
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme, isFocused }) => isFocused ? theme.COLORS.PURPLE : 'transparent'} ;
`;