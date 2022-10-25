import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--white);
  font-family: "Inter", sans-serif;
  font-weight: 600;
  justify-content: space-between;
  .productInfoContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    img {
      height: 70px;
    }
    .productName {
      font-size: 14px;
      text-align: center;
    }
  }
  .productPurchaseContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: center;
  }

  .incrementContainer {
    font-size: 14px;
  }

  .priceQuantityContainer {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    /* background-color: blue; */
    .priceContainer {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding-top: 12px;
      padding-bottom: 12px;
      .priceLabel {
        display: none;
      }
      .price {
        color: var(--white);
        font-family: "Inter", sans-serif;
        font-size: 14px;
        font-weight: 400;
        padding-top: 4px;
        padding-bottom: 4px;
      }
    }
    .quantityContainer {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      border: 1px solid var(--grey);
      .quantity {
        display: none;
      }
    }
  }

  @media (max-width: 769px) {
    align-items: flex-end;
    width: 100%;
    flex-direction: column;
    border-top: 1px solid var(--grey);

    img {
      padding-top: 10px;
      padding-bottom: 10px;
      padding-left: 16px;
    }
    .productName {
      padding-right: 16px;
      padding-left: 16px;
    }
    .productInfoContainer {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100%;
      justify-content: flex-start;
    }

    .priceQuantityContainer {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      background-color: black;
      .priceContainer {
        flex-direction: row;
        padding-left: 16px;
        padding-right: 16px;
        width: 50%;
        justify-content: space-between;
        border-right: 1px solid var(--grey);
        border-top: 1px solid var(--grey);
        border-bottom: 1px solid var(--grey);
        .priceLabel {
          display: flex;
          font-weight: 400;
          font-size: 14px;
          color: var(--white);
          font-family: "Inter", sans-serif;
        }
        .price {
          color: var(--white);
          font-family: "Inter", sans-serif;
          font-size: 14px;
          font-weight: 400;
          padding-top: 4px;
          padding-bottom: 4px;
        }
      }
      .quantityContainer {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 50%;
        border-top: 1px solid var(--grey);
        border-bottom: 1px solid var(--grey);
        padding-left: 16px;
        padding-right: 16px;
        padding-top: 12px;
        padding-bottom: 12px;
        .quantity {
          display: flex;
          font-weight: 400;
          color: var(--white);
          font-family: "Inter", sans-serif;
          font-size: 14px;
        }
      }
    }
  }
`;
export default Wrapper;
