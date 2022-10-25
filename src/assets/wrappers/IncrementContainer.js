import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  .amountIcrementer {
    background-color: transparent;
    border-color: transparent;
    color: var(--white);
    font-family: "Inter", sans-serif;
    font-size: 18px;
    /* margin-bottom: 4px; */
    padding-left: 10px;
    padding-right: 10px;
    border: 0;
    padding-top: 0px;
    padding-bottom: 0px;
  }
  .amount {
    color: var(--white);
    font-size: 20px;
    font-weight: 400;
    padding-left: 5px;
    padding-right: 5px;
    align-items: center;
  }
  @media (max-width: 769px) {
    /* padding-top: 5px;
    padding-bottom: 5px; */
    padding: 0;
    margin: 0;
    .amountIcrementer {
      margin-bottom: 0px;
    }
    .amount {
      font-size: 16px;
    }
  }
`;
