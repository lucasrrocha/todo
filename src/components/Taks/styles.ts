import { css, styled } from "styled-components/native";

type Props = {
  value: boolean;
}

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