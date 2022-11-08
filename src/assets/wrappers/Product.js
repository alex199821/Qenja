import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 32%;
  height: 100%;
  .productInfoContainerMobileVisible,
  .productInfoContainerMobile {
    display: none;
    padding: 16px;
    flex-direction: column;
    width: 100%;

    .productName {
      font-weight: 700;
      font-size: 28px;
      color: var(--grey);
      margin-bottom: 10px;
      /* text-align: center; */
    }
    .productDescription {
      font-weight: 400;
      font-family: "Inter", sans-serif;
      font-size: 11px;
      color: var(--grey);
      width: 60%;
      line-height: 1.5;
    }
  }
  .productImage {
    width: 100%;
    height: auto;
  }
  .productPurchaseContainerVisible,
  .productPurchaseContainer {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    height: 100%;
    width: 100%;
  }

  .productInformatonContainer {
    display: flex;
    flex-direction: column;
    font-family: "Inter", sans-serif;
    justify-content: space-between;
    .productName {
      margin: 0;
      color: var(--white);
      font-weight: 400;
      font-size: 13px;
      text-transform: uppercase;
      line-height: 1.25;
    }
    .price {
      margin: 0;
      color: var(--white);
      font-weight: 300;
      position: bottom;
      font-size: 13px;
    }
  }
  .purchaseButton {
    display: flex;
    font-size: 14px;
    color: black;
    text-align: center;
    justify-content: center;
    align-items: center;
    background-color: var(--green);
    border: none;
    padding: 12px 14px 12px 14px;
    visibility: hidden;
    text-decoration: none;
  }
  .purchaseButton:active {
    background-color: var(--lightGreen);
  }
  :hover .purchaseButton {
    visibility: visible;
    animation: fadeIn 0.3s;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media (max-width: 769px) {
    width: 100%;
    border-top: 1px solid var(--grey);
    /* border-bottom: 1px solid var(--grey); */
    margin: 0;
    padding: 0;
    .productInfoContainerMobile {
      display: none;
    }
    .productInfoContainerMobileVisible {
      display: flex;
      border-bottom: 1px solid var(--grey);
    }
    .productImage {
      margin: 0;
      width: 100%;
      height: calc(100vw * 0.66);
    }
    .productPurchaseContainer {
      display: none;
      margin-top: 0;
    }
    .productPurchaseContainerVisible {
      display: flex;
      margin-top: 0;
    }
    .productInformatonContainer {
      width: 50%;
      flex-direction: row;
      justify-content: space-between;
      margin: 0;
      background-color: black;
      border-top: 1px solid var(--grey);
      padding-top: 16px;
      padding-bottom: 16px;
      text-align: center;
      .productName {
        font-size: 11px;
        padding-left: 8px;
      }
      .price {
        font-size: 11px;
        padding-right: 8px;
      }
    }
    .purchaseButton {
      visibility: visible;
      justify-content: center;
      width: 50%;
      font-size: 11px;
      align-items: center;
    }
    :hover .purchaseButton {
      animation: none;
    }
  }
  @media (min-width: 769px) {
    .imageSquared {
      aspect-ratio: 32/32;
      object-fit: cover;
    }
  }
`;
export default Wrapper;
