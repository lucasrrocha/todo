import { css, styled } from "styled-components/native";

type Props = {
  created?: boolean;
}

export const Container = styled.View`
    flex: 1;

    background-color: ${({ theme }) => theme.COLORS.GRAY_600};

    padding: 0px 24px;
`;

export const InputWrapper = styled.View`
  flex-direction: row;
  
  top: -30px;
`;

export const CountersContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 20px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const Title = styled.Text<Props>`
  ${({ theme, created }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${created ? theme.COLORS.BLUE : theme.COLORS.PURPLE};
  `}
`;

export const CountersWrapper = styled.View`
border-radius: 50%;
  padding: 2px 8px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`

export const Numbers = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;