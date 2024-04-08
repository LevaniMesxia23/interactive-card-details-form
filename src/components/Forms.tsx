import React, { useState, ChangeEvent, ChangeEventHandler } from "react";
import styled from "styled-components";

interface FormsHeaderProps{
  monthYear: string;
  setMonthYear: React.Dispatch<React.SetStateAction<string>>;
  cardNumber: string;
  setCardNumber: React.Dispatch<React.SetStateAction<string>>;
  expiryYear: string;
  setExpiryYear: React.Dispatch<React.SetStateAction<string>>;
  cvcNumber: string;
  setCvcNumber: React.Dispatch<React.SetStateAction<string>>;
  handleCardNumberChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleExpiryYearChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleMonthYearChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleCvcChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

 const FormsHeader: React.FC<FormsHeaderProps> = (props) => {
  const {
    monthYear,
    setMonthYear,
    cardNumber,
    setCardNumber,
    expiryYear,
    setExpiryYear,
    cvcNumber,
    setCvcNumber,
    handleCardNumberChange,
    handleExpiryYearChange,
    handleMonthYearChange,
    handleCvcChange,
  } = props;

  return (
    <Container>
      <div className="name-div">
        <span>Cardholder Name</span>
        <input type="text" placeholder="e.g. Jane Appleseed" />
      </div>

      <div className="card-number-div">
        <span>Card Number</span>
        <input type="text" placeholder="e.g. 1234 5678 9123 0000" onChange={handleCardNumberChange} value={cardNumber}/>
      </div>
      <Forms>
        <div>
          <span>EXP. DATE</span>
          <input type="number" placeholder="MM" onChange={handleExpiryYearChange} value={expiryYear}/>
        </div>
        <div>
          <span className="mm-yy">(MM/YY)</span>
          <input type="number" placeholder="YY" onChange={handleMonthYearChange} value={monthYear}/>
        </div>
        <div>
          <span className="span-cvc">CVC</span>
          <input className="cvc" type="number" placeholder="e.g. 123" onChange={handleCvcChange} value={cvcNumber}/>
        </div>
      </Forms>
      <Button>Confirm</Button>
    </Container>
  );
}

export default FormsHeader;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .name-div,
  .card-number-div {
    display: flex;
    width: 20.4375rem;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0.5625rem;
    margin-bottom: 1.25rem;
    span {
      color: var(--Deep-Violet, #21092f);
      font-feature-settings: "clig" off, "liga" off;
      font-size: 0.75rem;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 0.125rem;
      text-transform: uppercase;
    }
    input {
      width: 20.4375rem;
      height: 2.8125rem;
      flex-shrink: 0;
      border-radius: 0.5rem;
      border: 1px solid var(--Light-Grey, #dfdee0);
      background: var(--White, #fff);
      padding-left: 1rem;
    }
  }
  .name-div {
    margin-top: 3.02rem;
  }
`;

const Forms = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 0.3rem;

  div {
    display: flex;
    flex-direction: column;
  }
  span {
    color: var(--Deep-Violet, #21092f);
    font-feature-settings: "clig" off, "liga" off;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.125rem;
    text-transform: uppercase;
    margin-left: 0.1rem;
  }

  input {
    width: 4.5rem;
    height: 2.8125rem;
    flex-shrink: 0;
    border-radius: 0.5rem;
    border: 1px solid var(--Light-Grey, #dfdee0);
    background: var(--White, #fff);
    padding-left: 1rem;
    margin-top: 0.56rem;
  }

  .span-cvc {
    margin-left: 0.7rem;
  }
  .cvc {
    width: 10.25rem;
    height: 2.8125rem;
    flex-shrink: 0;
  }
`;
const Button = styled.button`
  width: 20.4375rem;
  height: 3.3125rem;
  flex-shrink: 0;
  margin-top: 1.75rem;
  border-radius: 0.5rem;
  background: var(--Deep-Violet, #21092f);

  color: var(--White, #fff);
  font-feature-settings: "clig" off, "liga" off;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
`;
