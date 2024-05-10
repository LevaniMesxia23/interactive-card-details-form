import styled from "styled-components";
import Completed from "../../public/images/icon-complete.svg";

export default function Thanks() {
  return (
    <Container>
      <img src={Completed} alt="" />
      <h2>THANK YOU !</h2>
      <span>We’ve added your card details</span>
      <button>Continue</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 3rem;
  h2 {
    color: var(--Deep-Violet, #21092f);
    text-align: center;
    font-feature-settings: "clig" off, "liga" off;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.21388rem;
    margin-top: 2.19rem;
    margin-bottom: 1rem;
  }
  span {
    color: var(--Purplish-Grey, #8f8694);
    text-align: center;
    font-feature-settings: "clig" off, "liga" off;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 3rem;
  }
  button {
    border-radius: 0.5rem;
    background: var(--Deep-Violet, #21092f);
    width: 20.4375rem;
    height: 3.3125rem;
    flex-shrink: 0;
    color: var(--White, #fff);
    font-feature-settings: "clig" off, "liga" off;
    border: none;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    cursor: pointer;
  }
`;
