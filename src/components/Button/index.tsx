import * as S from "./styled";

export type BtnProps = {
  color?: string;
  variant?: "solid" | "ghost" | "text";
  size?: "small" | "medium" | "large";
  children: any;
};

function Button({
  color,
  variant = "solid",
  size = "medium",
  children,
}: BtnProps) {
  return (
    <S.Wrapper color={color} variant={variant} size={size}>
      {children}
    </S.Wrapper>
  );
}

export default Button;
