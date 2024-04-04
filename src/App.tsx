import Cards from "./components/Cards";
import FormsHeader from "./components/FormsHeader";
import FormsFooter from "./components/FormsFooter";
import GlobalStyles from "./styles/GlobalStyles";
import styled from "styled-components";

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <ImagesBox></ImagesBox>
        <FormDiv>
          <NameNumber></NameNumber>
          <ExpDate></ExpDate>
        </FormDiv>
      </Container>
    </>
  );
}

export default App;

const Container = styled.div``;

const ImagesBox = styled.div``;

const FormDiv = styled.div``;
const NameNumber = styled.div``;
const ExpDate = styled.div``;
