import Cards from "./components/Cards";
import FormsHeader from "./components/Forms";
import GlobalStyles from "./styles/GlobalStyles";
import MainMobile from "../public/images/bg-main-mobile.png";
import styled from "styled-components";

function App() {
  return (
    <>
      <Body>
        <GlobalStyles />
        <Container>
          <Cards />
          <FormDiv>
            <FormsHeader />
          </FormDiv>
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
