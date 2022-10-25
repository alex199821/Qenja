import styled from "styled-components";

const Wrapper = styled.section`
  .sizeButton {
    display: flex;
    width: 25px;
    height: 25px;
    font-size: 14px;
    font-weight: 600;
    border: none;
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    color: black;
    background-color: var(--grey);
  }
  .sizeButtonSelected {
    border: none;
    background-color: var(--green);
  }
`;
export default Wrapper;
