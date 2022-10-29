import styled from "styled-components";

export const LoadingWrapper = styled.section`
  height: 75vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .loading {
    width: 6rem;
    height: 6rem;
    border: 5px solid var(--grey);
    border-radius: 50%;
    border-top-color: var(--green);
    animation: spinner 2s linear infinite;
  }
  .loading-center {
    margin: 0 auto;
  }
  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
  @media (max-width: 769px) {
  }
`;
