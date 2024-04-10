import React, {
  useState,
  ChangeEvent,
  ChangeEventHandler,
  useEffect,
} from "react";
import styled from "styled-components";

interface FormsHeaderProps {
  monthYear: string;
  setMonthYear: React.Dispatch<React.SetStateAction<string>>;
  cardNumber: string;
  setCardNumber: React.Dispatch<React.SetStateAction<string>>;
  expiryYear: string;
  setExpiryYear: React.Dispatch<React.SetStateAction<string>>;
  cvcNumber: string;
  setCvcNumber: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  handleCardNumberChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleExpiryYearChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleMonthYearChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleCvcChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleNameChange: (event: ChangeEvent<HTMLInputElement>) => void;
  isValid: boolean;
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormsHeader: React.FC<FormsHeaderProps> = (props) => {
  const [error, setError] = useState(0);
  const [nameError, setNameError] = useState<string>("");
  const [cardNumberError, setCardNumberError] = useState<string>("");
  const [expiryYearError, setExpiryYearError] = useState<string>("");
  const [cvcNumberError, setCvcNumberError] = useState<string>("");
  const [monthYearError, setMonthYearError] = useState<string>("");

  const {
    isValid,
    setIsValid,
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
    handleCvcChange,
    handleNameChange,
  } = props;

  const validateInputs = () => {
    setError(error + 1);
    if (!name.trim()) {
      setNameError("Can’t be blank");
    } else {
      setNameError("");
    }

    if (!cardNumber.trim()) {
      setCardNumberError("Can’t be blank");
    } else if (cardNumber.length < 16) {
      setCardNumberError("Enter full number");
    } else {
      setCardNumberError("");
    }
    console.log(cardNumber);

    if (!expiryYear.trim()) {
      setExpiryYearError("Can’t be blank");
    } else {
      setExpiryYearError("");
    }

    if (!cvcNumber.trim()) {
      setCvcNumberError("Can’t be blank");
    } else {
      setCvcNumberError("");
    }
    if (!monthYear.trim()) {
      setMonthYearError("Can’t be blank");
    } else {
      setMonthYearError("");
    }

    
  };

  useEffect(() => {
    if (
      name != "" &&
      expiryYear != "" &&
      cvcNumber != "" &&
      monthYear != "" &&
      cardNumber != "" &&
      cardNumberError == "" &&
      expiryYearError == "" &&
      cvcNumberError == "" &&
      monthYearError == "" &&
      nameError == ""
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [cardNumberError,expiryYearError,cvcNumberError,monthYearError,nameError])
  return (
    <Container>
      <div className="name-div">
        <span>Cardholder Name</span>
        <input
          style={
            error == 0
              ? { border: "1px solid #DFDEE0" }
              : !name
              ? { border: "1.5px solid #FF7979" }
              : {}
          }
          type="text"
          placeholder="e.g. Jane Appleseed"
          onChange={handleNameChange}
          value={name}
        />
        {nameError && <span className="error">{nameError}</span>}
      </div>

      <div className="card-number-div">
        <span>Card Number</span>
        <input
          style={
            error == 0
              ? { border: "1px solid #DFDEE0" }
              : !cardNumber
              ? { border: "1.5px solid #FF7979" }
              : {}
          }
          type="text"
          placeholder="e.g. 1234 5678 9123 0000"
          onChange={handleCardNumberChange}
          value={cardNumber}
        />
        {cardNumberError && <span className="error">{cardNumberError}</span>}
      </div>

      <Forms>
        <div>
          <span>EXP. DATE</span>
          <input
            style={
              error == 0
                ? { border: "1px solid #DFDEE0" }
                : !expiryYear
                ? { border: "1.5px solid #FF7979" }
                : {}
            }
            type="number"
            placeholder="MM"
            onChange={handleExpiryYearChange}
            value={expiryYear}
          />
          {expiryYearError && (
            <span className="error error-month">{expiryYearError}</span>
          )}
        </div>

        <div>
          <span className="mm-yy">(MM/YY)</span>
          <input
            style={
              error == 0
                ? { border: "1px solid #DFDEE0" }
                : !monthYear
                ? { border: "1.5px solid #FF7979" }
                : {}
            }
            type="number"
            placeholder="YY"
            onChange={handleMonthYearChange}
            value={monthYear}
          />
          {monthYearError && (
            <span className="error error-yy">{monthYearError}</span>
          )}
        </div>
        <div>
          <span className="span-cvc">CVC</span>
          <input
            style={
              error == 0
                ? { border: "1px solid #DFDEE0" }
                : !cvcNumber
                ? { border: "1.5px solid #FF7979" }
                : {}
            }
            className="cvc"
            type="number"
            placeholder="e.g. 123"
            onChange={handleCvcChange}
            value={cvcNumber}
          />
          {cvcNumberError && <span className="error">{cvcNumberError}</span>}
        </div>
      </Forms>
      <Button onClick={validateInputs}>Confirm</Button>
    </Container>
  );
};

export default FormsHeader;

const errorColor = "red";

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
    .error {
      color: var(--Red, #ff5050);
      font-feature-settings: "clig" off, "liga" off;
      font-size: 0.75rem;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
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
  .error {
    color: var(--Red, #ff5050);
    font-feature-settings: "clig" off, "liga" off;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 500;
    margin-top: 0.5rem;
    line-height: normal;
  }
  .error-month {
    margin-right: -1.5rem;
  }
  .error-yy {
    display: none;
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
