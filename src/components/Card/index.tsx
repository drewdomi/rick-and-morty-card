import * as S from "./styled";

export type CardProps = {
  children: any;
  title: string;
  imgUrl: string;
  status: string;
};

function Card({ children, title, imgUrl, status }: CardProps) {
  return (
    <S.Wrapper>
      <div className="cardBody">
        <img src={imgUrl} />
        <h1>{title}</h1>
        <h2>{status}</h2>
      </div>
      {children}
    </S.Wrapper>
  );
}

export default Card;
