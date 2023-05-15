import * as S from "./styled"

export type BtnProps = {
  children: any,
}

function Button({
  children,
}: BtnProps) {
  return (
    <S.Wrapper

    >{children}</S.Wrapper>
  )
}



export default Button;