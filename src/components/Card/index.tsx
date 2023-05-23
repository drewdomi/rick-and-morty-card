import * as S from "./styled";

export type CardProps = {
  title: string;
  imgUrl: string;
  status: string;
};

function Card({ title, imgUrl, status }: CardProps) {
  return (
    <S.Wrapper>
      <div className="cardBody">
        <img src={imgUrl} />
        <h1>{title}</h1>
        <h2>{status}</h2>
      </div>
    </S.Wrapper>
  );
}

export default Card;
