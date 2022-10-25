import styled from "styled-components";

const FormWrapper = styled.form`
  width: 75%;
  margin: auto;
  display: flex;
  flex-direction: row;
  margin: auto;
  font-family: "Inter", sans-serif;
  color: var(--white);
  justify-content: space-between;
  margin-bottom: 90px;
  .validationError {
    color: red;
    font-size: 9px;
    font-weight: 300;
    margin-top: 5px;
    :focus {
      opacity: 1;
    }
  }
  .checkboxValidationError {
    margin-bottom: 5px;
  }
  .personalInformationContainer {
    display: flex;
    flex-direction: column;
    width: 55%;
    .personalInformationLabel {
      margin-bottom: 35px;
    }
    .mainFormContainer {
      display: flex;
      flex-direction: column;
      gap: 1rem !important;
      border-top: 1px solid var(--grey);
      padding-top: 1.5rem;
      .inputsContainer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .shortInputContainer {
          display: flex;
          flex-direction: column;
          font-family: "Inter", sans-serif;
          color: var(--white);
          width: 45%;
        }
      }
      .longInputContainer {
        display: flex;
        flex-direction: column;
        font-family: "Inter", sans-serif;
        color: var(--white);
        width: 100%;
      }
      .labelStyle {
        font-size: 11px;
        margin-bottom: 5px;
      }
      .inputStyle {
        padding-left: 10px;
        border: 1px solid var(--grey);
        padding-top: 10px;
        padding-bottom: 10px;
        background: transparent !important;
        color: var(--white);
        font-size: 11px;
        font-weight: 300;
        :focus {
          outline: none;
        }
      }
      .inputStyle::placeholder {
        color: transparent;
      }

      .inputStyle:-webkit-autofill {
        -webkit-text-fill-color: var(--white);
        transition: background-color 5000s ease-in-out 0s;
        box-shadow: none;
        -webkit-box-shadow: 0 0 0 30px var(--primary) inset;
      }
    }
  }
  .orderFinalizationContainer {
    width: 35%;
    display: flex;
    flex-direction: column;
    /* background-color: red; */
    .bilingSummaryContainer {
      width: 100%;
      display: flex;
      flex-direction: column;
      .billingSummaryLabel {
        display: flex;
        margin-bottom: 35px;
      }
      .orderReviewContainer {
        display: flex;
        flex-direction: column;
        border-top: 1px solid var(--grey);
        .itemsInCartContainer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 25px 0px 25px 0px;
          .orderReviewLabel {
            font-weight: 700;
            font-size: 14px;
          }
          .itemsInCartLabel {
            font-size: 11px;
          }
        }
        .subtotalContainer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 5px;
          color: var(--darkGrey);
          .subtotalLabel {
            font-size: 11px;
          }
          .priceLabel {
            font-weight: 700;
            font-size: 14px;
          }
        }
        .discountContainer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          padding-bottom: 25px;
          color: var(--darkGrey);
          border-bottom: 1px solid var(--grey);
          .discountLabel {
            font-size: 11px;
          }
          .discountAmount {
            font-weight: 700;
            font-size: 14px;
          }
        }
        .totalContainer {
          display: flex;
          margin-bottom: 40px;
          justify-content: space-between;
          .totalLabel {
            font-weight: 700;
            font-size: 14px;
          }
          .totalPrice {
            font-weight: 700;
            color: var(--green);
            font-size: 14px;
          }
        }
        .orderCommentContainer {
          //d-flex flex-column font-inter white
          display: flex;
          flex-direction: column;
          label {
            //fs-6 mb-1
            font-size: 11px;
            margin-bottom: 5px;
          }
          textarea {
            // mb-10-sm
            background-color: transparent;
            border: 1px solid var(--grey);
            margin-bottom: 30x;
            padding: 10px;
            color: var(--white);
            font-family: "Inter", sans-serif;
            font-size: 11px;
            height: 10vh;
            :focus {
              outline: none;
            }
          }
        }
        .termsCheckboxContainer {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin: 20px 0 0 0;
          font-weight: 300;
          color: var(--grey);
          font-size: 14px;
          padding: 0;
          input {
            margin: 0;
          }
          .termsLabel {
            font-size: 11px;
            padding-left: 5px;
            b {
              color: var(--green);
            }
          }
        }
      }
    }
  }
  @media (max-width: 769px) {
    flex-direction: column;
    width: 100%;
    .personalInformationContainer {
      width: 90%;
      margin-bottom: 35px;
      margin: auto;
      .personalInformationLabel {
        font-size: 18px;
        margin-bottom: 10px;
      }
      .mainFormContainer {
        gap: 0.5rem !important;
        border: none;
        .inputsContainer {
          flex-direction: column;
          gap: 0.5rem !important;
          .shortInputContainer {
            width: 100%;
          }
        }
        .longInputContainer {
        }
        .labelStyle {
          display: none;
        }
        .inputStyle {
          padding-left: 25px;
        }
        .inputStyle::placeholder {
          color: var(--grey);
        }
      }
    }
    .orderFinalizationContainer {
      width: 100%;
      .bilingSummaryContainer {
        width: 90%;
        margin: auto;
        margin-top: 35px;
        .orderReviewContainer {
          .orderCommentContainer {
            textarea {
              margin-bottom: 50px;
            }
          }
        }
      }
    }
  }
`;
export default FormWrapper;
