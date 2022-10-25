import styled from "styled-components";

export const Wrapper = styled.section`
  padding-bottom: 100px;
  /* background-color: red; */
  width: 90%;
  margin: auto;
  .cartHeader {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 80px;
    h3 {
      color: var(--white);
      font-family: "Inter", sans-serif;
      font-weight: 500;
      font-size: 28px;
    }
  }
  .cartMainContainer {
    display: flex;
    flex-direction: row;
    .itemsSummaryContainer {
      width: 60%;
      display: flex;
      flex-direction: column;
      h3 {
        margin-bottom: 30px;
        color: var(--white);
        font-weight: 600;
        font-family: "Inter", sans-serif;
        span {
          color: var(--green);
        }
      }
      .productInCartContainer {
        border-top: 1px solid var(--grey);
        border-bottom: 1px solid var(--grey);
        padding-top: 15px;
        padding-bottom: 15px;
        display: flex;
        flex-direction: column;
        row-gap: 15px;
      }
    }
    .orderSummaryContainer {
      display: flex;
      width: 40%;
      height: auto;
      flex-direction: column;
      align-items: flex-end;
      .headerandOrderInfoContainer {
        width: 70%;
        h3 {
          color: var(--white);
          font-family: "Inter", sans-serif;
          font-weight: 600;
        }
        .orderInfoContainer {
          //my-4-sm
          display: flex;
          flex-direction: column;
          border: 1px solid var(--grey);
          padding: 30px 16px 30px 16px;
          margin-top: 30px;
          margin-bottom: 30px;
          color: var(--white);
          font-family: "Inter", sans-serif;
          font-weight: 600;
          .orderInfo {
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
          .subtotal {
            margin-bottom: 50px;
          }
          .discounts {
            margin-bottom: 30px;
          }
          .discounts,
          .subtotal,
          .grandTotal {
            font-size: 14px;
          }
        }
      }
    }
  }
  .checkoutLink {
    text-decoration: none;
    color: black;
  }
  @media (max-width: 769px) {
    width: 100%;
    .cartHeader {
      margin-bottom: 20px;
      h3 {
        font-size: 18px;
      }
    }
    .cartMainContainer {
      width: 100%;
      flex-direction: column;
      .itemsSummaryContainer {
        width: 100%;
        border: 0;
        h3 {
          display: none;
        }
        .productInCartContainer {
          padding: 0;
          border: 0;
        }
      }
      .orderSummaryContainer {
        width: 100%;
        .headerandOrderInfoContainer {
          width: 90%;
          margin: auto;
          h3 {
            font-weight: 500;
            font-size: 18px;
          }
          .orderInfoContainer {
            margin-top: 20px;
            margin-bottom: 20px;
            background-color: var(--secondary);
            .subtotal {
              margin-bottom: 50px;
            }
          }
        }
      }
    }
  }
`;
