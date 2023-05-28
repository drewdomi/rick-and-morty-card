import { CardProps } from ".";
import styled, { css, DefaultTheme } from "styled-components";

type StyledCard = {
  theme: DefaultTheme;
} & CardProps;

export const Wrapper = styled.div<StyledCard>`
  ${({ theme }) => css`
    background-color: ${theme.color.white};
  `}
`;
