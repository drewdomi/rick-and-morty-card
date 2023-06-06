import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.color.white};
    box-shadow: 0 0 3px 1px #000000aa;
    max-width: 300px;
    text-align: center;
    border-radius: 10px;
    margin: 50px auto;
    padding-bottom: 10px;
    img {
      position: relative;
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
    }
    h1 {
      margin: 10px;
      height: 80px;
    }
  `}
`;
