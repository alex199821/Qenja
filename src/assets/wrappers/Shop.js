import styled from "styled-components";

const Wrapper = styled.section`
  border-top: 1px solid white;
  .productsListContainer {
    display: flex;
    flex-wrap: wrap;
    padding-left: 32px;
    padding-right: 32px;
    margin-top: 50px;
    margin-bottom: 50px;
    justify-content: flex-start;
    column-gap: 1.75vw;
    /* justify-content: space-between; */
    row-gap: 1.5vw;
  }
  .shopInfoForMobile {
  }
  @media (max-width: 769px) {
    border-top: 0;
    .productsListContainer {
      padding-left: 0px;
      padding-right: 0px;
      row-gap: 0rem;
      flex-direction: column;
      margin-top: 0px;
      margin-bottom: 0px;
    }
    .hideOnMobile {
      display: none;
    }
  }
`;
export default Wrapper;
