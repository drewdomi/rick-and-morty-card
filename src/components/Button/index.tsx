import * as S from "./styled";

export type BtnProps = {
  color?: string;
  variant?: "solid" | "ghost" | "text";
  size?: "small" | "medium" | "large";
  children: any;
  onClick?: () => void;
};

function Button({
  color,
  variant = "solid",
  size = "medium",
  children,
  onClick,
}: BtnProps) {
  return (
    <S.Wrapper color={color} variant={variant} size={size} onClick={onClick}>
      {children}
    </S.Wrapper>
  );
}

export default Button;
