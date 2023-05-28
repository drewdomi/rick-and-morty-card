import styled, { DefaultTheme, css } from "styled-components";
import { CardProps } from ".";

type StyledCard = {
  theme: DefaultTheme;
} & CardProps &
  object;

export const Wrapper = styled.div<StyledCard>`
  ${({ theme }) => css`
    background-color: ${theme.color.tertiary};
  `}
`;
