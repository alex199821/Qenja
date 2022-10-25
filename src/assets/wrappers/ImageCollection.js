import styled from "styled-components";

export const ImageCollectionWrapper = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 32px;
  margin-top: 42px;
  margin-bottom: 42px;
  justify-content: space-between;
  row-gap: 2vw;
  .imageContainer {
    width: 49%;
  }
  img {
    width: 100%;
  }

  @media (max-width: 769px) {
    gap: 16px;
    flex-direction: column;
    padding-left: 16px;
    padding-right: 16px;
    .imageContainer {
      width: 100%;
    }
    img {
      width: 100%;
    }
  }
`;
