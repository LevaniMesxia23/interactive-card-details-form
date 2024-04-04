import styled from "styled-components";
import CardBack from "../../public/images/bg-card-back.png";
import CardFront from "../../public/images/bg-card-front.png";

export default function Cards() {
  return (
    <Container>
      <img className="card-back" src={CardBack} alt="" />
      <img className="card-front" src={CardFront} alt="" />
    </Container>
  );
}

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
    width: 17.875rem;
    height: 9.8125rem;
    flex-shrink: 0;
    top: 0;
    left: 0;
  }

  .card-front {
    position: absolute;
    width: 17.875rem;
    height: 9.8125rem;
    flex-shrink: 0;
    bottom: 0;
    right: 0;
  }
`;
