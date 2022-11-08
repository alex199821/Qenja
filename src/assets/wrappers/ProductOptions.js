import styled from "styled-components";

const Wrapper = styled.form`
  width: 50%;
  padding: 0;
  .productName {
    margin-bottom: 50px;
    margin-bottom: 30px;
    font-family: "Inter", sans-serif;
    font-size: 22px;
    color: var(--white);
  }
  .productDescription {
    line-height: 1.25 !important;
    font-weight: 200;
    width: 75%;
    margin-bottom: 30px;
    font-size: 13px;
    color: var(--grey);
    font-family: "Inter", sans-serif;
  }
  .deliveryTime {
    font-family: "Inter", sans-serif;
    align-items: center;
    margin-bottom: 40px;
    font-size: 13px;
    color: var(--white);
  }
  .additionalInfoContainer {
    display: flex;
    flex-direction: row;
    font-size: 14px;
    font-family: "Inter", sans-serif;
    margin-bottom: 15px;
    color: var(--white);
    font-weight: 400;
    .availabilityInfo {
      width: 37.5%;
    }
  }
  .productOptionsContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 75%;
  }
  .colorSelectionContainer {
    display: flex;
    font-size: 14px;
    font-family: "Inter", sans-serif;
    flex-direction: row;
    width: 50%;
    gap: 8px;
    align-items: center;
    .colorLabel {
      color: var(--white);
    }
  }
  .sizeSelectionContainer {
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
    font-size: 14px;
    font-family: "Inter", sans-serif;
    .sizeLabel {
      color: var(--white);
    }
  }
  .purchaseContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 75%;
    padding-top: 20px;
    border-top: 1px solid var(--grey);
  }
  .priceQuantityContainer {
    display: flex;
    width: 65%;
    justify-content: space-between;
    align-items: center;
  }
  .priceContainer {
    display: flex;
  }
  .priceLabel {
    display: none;
    font-weight: 600;
    font-size: 16px;
    color: var(--white);
    font-family: "Inter", sans-serif;
  }
  .price {
    color: var(--white);
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 26px;
  }
  .quantityContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .quantity {
    display: none;
    font-weight: 600;
    color: var(--white);
    font-size: 16px;
    font-family: "Inter", sans-serif;
  }
  .buyContainer {
    button {
      color: black;
      background-color: var(--green);
      border: none;
      padding: 12px 26px 12px 26px;
    }
    button:active {
      background-color: var(--lightGreen);
    }
  }

  .errorsContainer {
    display: flex;
    flex-direction: row;
    margin-bottom: 5px;
    .validationOptionsError {
      font-size: 11px;
      color: red;
      font-weight: 300;
      margin-top: 5px;
    }
    .colorError {
      width: 37.5%;
    }
  }

  @media (max-width: 769px) {
    width: 100%;
    .productName {
      margin-left: 15px;
      margin-right: 15px;
      margin-top: 20px;
      font-weight: 500;
      margin-bottom: 10px;
    }
    .productDescription {
      margin-left: 15px;
      margin-right: 15px;
      font-weight: 300;
      font-size: 14px;
      margin-bottom: 15px;
      width: 90%;
    }
    .deliveryTime {
      margin-left: 15px;
      margin-right: 15px;
      font-size: 14px;
      font-weight: 400;
      margin-bottom: 35px;
    }
    .additionalInfoContainer {
      font-size: 14px;
      display: flex;
      /* justify-content: space-between; */
      margin-bottom: 20px;
      .availabilityInfo {
        width: 50%;
        margin: 0;
        padding-left: 15px;
      }
      .matterInfo {
        padding-right: 15px;
        width: 50%;
      }
    }
    .productOptionsContainer {
      width: 100%;
      display: flex;
      flex-direction: row;
      border-bottom: none;
    }
    .colorSelectionContainer {
      width: 50%;
      justify-content: flex-start;
      gap: 0rem;
      margin: 0;
      .colorLabel {
        font-size: 14px;
        margin-left: 15px;
      }
    }
    .sizeSelectionContainer {
      margin-bottom: 0;
      gap: 0rem;
      justify-content: flex-start;
      font-size: 14px;
      width: 50%;
      .sizeLabel {
        font-size: 14px;
      }
    }
    .purchaseContainer {
      flex-direction: column;
      width: 100%;
      background-color: black;
      border-top: 1px solid var(--grey);
      margin-top: 0px;
      padding-top: 0px;
    }
    .priceQuantityContainer {
      width: 100%;
    }
    .priceContainer {
      flex-direction: row;
      padding-left: 16px;
      padding-right: 16px;
      width: 50%;
      justify-content: space-between;
      border-right: 1px solid var(--grey);
      align-items: center;
    }
    .priceLabel {
      display: flex;
      font-weight: 500;
      font-size: 14px;
      margin-top: 10px;
      margin-bottom: 10px;
      padding-top: 10px;
      padding-bottom: 10px;
    }
    .price {
      font-size: 14px;
      font-weight: 500;
      padding-top: 10px;
      padding-bottom: 10px;
    }
    .quantityContainer {
      width: 50%;
      padding-left: 16px;
      padding-right: 16px;
    }
    .quantity {
      display: flex;
      font-weight: 500;
      font-size: 11px;
      padding-top: 10px;
      padding-bottom: 10px;
    }
    .buyContainer {
      width: 100%;
      button {
        width: 100%;
      }
    }
    .errorsContainer {
      font-size: 12px;
      display: flex;
      padding: 0;
      .validationOptionsError {
        font-size: 12px;
      }
      .colorError {
        width: 50%;
        p {
          margin-left: 15px;
          font-size: 12px;
        }
      }
      .sizeError {
        width: 50%;
        p {
          font-size: 12px;
        }
      }
    }
  }
`;
export default Wrapper;
