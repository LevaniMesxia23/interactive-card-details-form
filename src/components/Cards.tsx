import styled from "styled-components";
import CardBack from "../../public/images/bg-card-back.png";
import CardFront from "../../public/images/bg-card-front.png";
import React, { ChangeEventHandler, ChangeEvent } from "react";

interface CardsProps{
  monthYear: string;
  setMonthYear: React.Dispatch<React.SetStateAction<string>>;
  cardNumber: string;
  setCardNumber: React.Dispatch<React.SetStateAction<string>>;
  expiryYear: string;
  setExpiryYear: React.Dispatch<React.SetStateAction<string>>;
  cvcNumber: string;
  setCvcNumber: React.Dispatch<React.SetStateAction<string>>
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  handleCardNumberChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleExpiryYearChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleMonthYearChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleCvcChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleNameChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Cards: React.FC<CardsProps> = (props) => {
  const {
    monthYear,
    setMonthYear,
    cardNumber,
    setCardNumber,
    expiryYear,
    setExpiryYear,
    cvcNumber,
    setCvcNumber,
    name,
    setName,
    handleCardNumberChange,
    handleExpiryYearChange,
    handleMonthYearChange,
    handleNameChange,
  } = props;

  return (
    <Container>
      <div className="card-back">
        <span>{props.cvcNumber ? cvcNumber : "000"}</span>
      </div>
      <div className="card-front">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="54"
          height="30"
          viewBox="0 0 54 30"
          fill="none"
        >
          <ellipse cx="15.0932" cy="15" rx="15.0932" ry="15" fill="white" />
          <path
            d="M53.5 15C53.5 18.4489 50.6859 21.25 47.2081 21.25C43.7302 21.25 40.9161 18.4489 40.9161 15C40.9161 11.5511 43.7302 8.75 47.2081 8.75C50.6859 8.75 53.5 11.5511 53.5 15Z"
            stroke="white"
          />
        </svg>

        <div>
          <span className="private-num">{(props.cardNumber ? cardNumber : "0000 0000 0000 0000")}</span>
          <div className="name-date">
            <span>{props.name ? name : "JANE APPLESEED"}</span>
            <span>{props.expiryYear ? expiryYear : "00"}/{props.monthYear ? monthYear : "00"}</span>
          </div>
        </div>
      </div>
    </Container>
  );
}


export default Cards;
const Container = styled.div`
  min-width: 13.3rem;
  height: 15rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-top: 2rem;
  position: relative;

  .card-back {
    position: absolute;
    background-image: url(${CardBack});
    background-size: cover;
    border-radius: 0.375rem;
    width: 17.875rem;
    height: 9.8125rem;
    flex-shrink: 0;
    top: 0;
    left: 0;
    padding: 4.5rem 2.31rem 4.6rem 14.31rem;

    color: var(--White, #fff);
    text-align: right;
    font-size: 0.5625rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.08038rem;
  }

  .card-front {
    position: absolute;
    width: 17.875rem;
    height: 9.8125rem;
    flex-shrink: 0;
    bottom: 0;
    right: 0;
    background-image: url(${CardFront});
    background-size: cover;
    border-radius: 0.375rem;
    margin-bottom: -0.4rem;
    padding: 1.1rem 1.31rem 1.29rem 1.19rem;

    div {
      display: flex;
      justify-content: center;
      flex-direction: column;
      .private-num {
        color: var(--White, #fff);
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 0.1375rem;
        margin-top: 2.31rem;
      }

      .name-date {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        max-width: 15.31rem;
        margin-top: 1.06rem;

        color: var(--White, #fff);
        font-size: 0.5625rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 0.08038rem;
      }
    }
  }
`;
