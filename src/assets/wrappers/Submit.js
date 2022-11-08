import styled from "styled-components";

const Wrapper = styled.section`
  .submitHeader {
    display: flex;
    margin: 18px 16px 32px 16px;
    justify-content: start;
    h3 {
      color: var(--white);
      font-family: "Inter", sans-serif;
      font-weight: 500;
      font-size: 28px;
    }
  }

  @media (max-width: 769px) {
    .submitHeader{
      margin: 18px 8px 32px 8px;
    }
  }
`;
export default Wrapper;
