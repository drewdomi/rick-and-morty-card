import * as S from "./styled";

export type CardProps = {
  children: any;
  name: string;
  imgUrl: string;
  status: string;
};

function Card({ children, name, imgUrl, status }: CardProps) {
  return (
    <S.Wrapper>
      <div className="cardBody">
        <img src={imgUrl} />
        <h1>{name}</h1>
        <h2 className="status">{status}</h2>
      </div>
      {children}
    </S.Wrapper>
  );
}

export default Card;
