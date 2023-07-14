import styled, { css } from "styled-components/native";

type Props = {
  bold?: boolean;
}

export const Container = styled.View`
  padding: 48px 20px;

  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.COLORS.GRAY_400};

  align-items: center;
`;

export const Image = styled.Image`
  margin-bottom: 16px;
`;

export const Text = styled.Text<Props>`
  ${({ theme, bold }) => css`
    color: ${theme.COLORS.GRAY_300};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${bold ? theme.FONT_FAMILY.BOLD : theme.FONT_FAMILY.REGULAR};
  `}

  line-height: 20px;
`