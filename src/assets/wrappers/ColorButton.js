import styled from "styled-components";

const Wrapper = styled.div`
  .colorButton {
    display: flex;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    cursor: pointer;
    border: none;
  }

  .colorButtonSelected {
    box-shadow: 0px 0px 0px 2px var(--primary), 0px 0px 0px 3px white;
  }
  
  @media (max-width: 769px) {
    .colorButton {
      margin-left: 8px;
    }
  }
`;
export default Wrapper;
