import Cards from "./components/Cards";
import { useState, ChangeEvent } from "react";
import Forms from "./components/Forms";
import GlobalStyles from "./styles/GlobalStyles";
import MainMobile from "../public/images/bg-main-mobile.png";
import styled from "styled-components";
import Thanks from "./components/Thanks";


function App() {
  const [cardNumber, setCardNumber] = useState<string>("");
  const [expiryYear, setExpiryYear] = useState<string>("");
  const [monthYear, setMonthYear] = useState<string>("");
  const [cvcNumber, setCvcNumber] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false)

  const handleCardNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    let newValue = event.target.value;
    newValue = newValue.replace(/\D/g, "");
    newValue = newValue.replace(/(\d{4}(?=\d))/g, '$1 ');
    if (newValue.length > 16) {
      newValue = newValue.slice(0, 19);
    }
    setCardNumber(newValue);
    console.log(newValue);
  };

  const handleExpiryYearChange = (event: ChangeEvent<HTMLInputElement>) => {
    let newValue = event.target.value;
    if (newValue.length > 2) {
      newValue = newValue.slice(0, 2);
    }
    setExpiryYear(newValue);
    console.log(newValue);
  };

  const handleMonthYearChange = (event: ChangeEvent<HTMLInputElement>) => {
    let newValue = event.target.value;
    if (newValue.length > 2) {
      newValue = newValue.slice(0, 2);
    }
    setMonthYear(newValue);
    console.log(newValue);
  }

  const handleCvcChange = (event: ChangeEvent<HTMLInputElement>) => {
    let newValue = event.target.value;
    if (newValue.length > 3) {
      newValue = newValue.slice(0, 3);
    }
    setCvcNumber(newValue);
    console.log(newValue);
  }

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    let newValue = event.target.value;
    setName(newValue);
    console.log(newValue);
  }
  return (
    <>
      <Body>
        <GlobalStyles />
        <Container>
          <Cards
              name={name}
              setName={setName}
              cvcNumber={cvcNumber}
              setCvcNumber={setCvcNumber}
              monthYear={monthYear}
              setMonthYear={setMonthYear}
              cardNumber={cardNumber}
              setCardNumber={setCardNumber}
              expiryYear={expiryYear}
              setExpiryYear={setExpiryYear}
              handleCardNumberChange={handleCardNumberChange}
              handleExpiryYearChange={handleExpiryYearChange}
              handleMonthYearChange={handleMonthYearChange}
              handleCvcChange={handleCvcChange}
              handleNameChange={handleNameChange}/>
              {!isValid ?
          <FormDiv>
            <Forms
              isValid={isValid}
              setIsValid={setIsValid}
              name={name}
              setName={setName}
              cvcNumber={cvcNumber}
              setCvcNumber={setCvcNumber}
              monthYear={monthYear}
              setMonthYear={setMonthYear}
              cardNumber={cardNumber}
              setCardNumber={setCardNumber}
              expiryYear={expiryYear}
              setExpiryYear={setExpiryYear}
              handleCardNumberChange={handleCardNumberChange}
              handleExpiryYearChange={handleExpiryYearChange}
              handleMonthYearChange={handleMonthYearChange}
              handleCvcChange={handleCvcChange}
              handleNameChange={handleNameChange}
            />
          </FormDiv> : <Thanks />}
          
        </Container>
      </Body>
    </>
  );
}

export default App;

const Body = styled.div`
  background: url(${MainMobile});
  background-size: cover;
  background-repeat: no-repeat;
  min-width: 23.4375rem;
  height: 15rem;
  flex-shrink: 0;
  padding: 1.5rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const FormDiv = styled.div``;
