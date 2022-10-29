//productTypeFilter gap-2 row d-flex w-80-sm  px-3-sm mb-10

import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  gap: 0.5rem !important;
  margin-bottom: 0px;
  padding-left: 32px;
  padding-right: 32px;
  margin-top: 30px;
  @media (max-width: 769px) {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
    margin-top: 20px;
    width: 80%;
    padding-left: 16px;
    padding-right: 16px;
  }
`;
export default Wrapper;
