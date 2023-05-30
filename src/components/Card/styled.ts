import styled, { DefaultTheme, css } from "styled-components";
import { CardProps } from ".";

type StyledCard = {
  theme: DefaultTheme;
} & CardProps &
  object;

export const Wrapper = styled.div<StyledCard>`
  ${({ theme }) => css`
    background-color: ${theme.color.white};
    box-shadow: 0 0 3px 1px #000000aa;
    max-width: 300px;
    text-align: center;
    border-radius: 10px;
    margin: 0 auto;
    padding-bottom: 10px;
    img {
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
    }
  `}
`;
