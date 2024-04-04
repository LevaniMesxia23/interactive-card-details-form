import styled from "styled-components";

export default function FormsHeader() {
  return (
    <Container>
      <div className="first-div">
        <span>Cardholder Name</span>
        <input type="text" placeholder="e.g. Jane Appleseed" />
      </div>

      <div className="second-div">
        <span>Card Number</span>
        <input type="number" placeholder="e.g. 1234 5678 9123 0000" />
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .first-div,
  .second-div {
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
      border: 1px solid var(--Light-Grey, #DFDEE0);
      background: var(--White, #FFF);
      padding-left: 1rem;
    }
  }
  .first-div {
    margin-top: 3.02rem;
  }
`;
