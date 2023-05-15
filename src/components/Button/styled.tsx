import styled, { DefaultTheme, css } from "styled-components";
import { BtnProps } from ".";

type StyledProps = {
  theme: DefaultTheme;
} & BtnProps;

export const Wrapper = styled.button<StyledProps>`
  cursor: pointer;
`;
