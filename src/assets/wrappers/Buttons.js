import styled from "styled-components";
import Xmark from "../images/Xmark.png";
import burgerIcon from "../images/burgerIcon.png";
import searchIcon from "../images/searchIcon.png";

export const CloseButton = styled.button`
  background: transparent;
  background-image: url(${Xmark});
  background-repeat: no-repeat;
  background-position: center;
  width: 25px;
  height: 25px;
  border: none;
`;

export const BurgerButton = styled.button`
  display: none;
  background: transparent;
  background-image: url(${burgerIcon});
  background-repeat: no-repeat;
  background-position: center;
  width: 25px;
  height: 25px;
  border: none;
  @media (max-width: 769px) {
    display: flex;
  }
`;

export const SearchButton = styled.button`
  display: none;
  background: transparent;
  border: 0;
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-position: center;
  width: 25px;
  height: 25px;
  border: none;
  @media (max-width: 769px) {
    display: flex;
  }
`;

export const FilterButtonWrapper = styled.div`
  button {
    display: flex;
    padding: 12px 20px 12px 20px;
    font-size: 12px;
    font-family: "Inter", sans-serif;
  }
  .checked {
    border: black;
    color: black;
    background-color: #d9ec00;
    border: #d9ec00 1px solid;
  }
  .unchecked {
    border: #c4c4c4 1px solid;
    color: #c4c4c4;
    background-color: transparent;
  }
  @media (max-width: 769px) {
    button {
    }
  }
`;

export const RemoveButton = styled.button`
  display: flex;
  font-family: "Inter", sans-serif;
  margin-top: 0px;
  color: var(--white);
  background-color: transparent;
  border: 0;
  padding: 0;
  font-weight: 400;
  font-size: 11px;
  align-items: center;

  @media (max-width: 769px) {
    margin-top: 20;
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export const CheckoutButton = styled.button`
  display: flex;
  color: black;
  background-color: var(--green);
  border: none;
  padding: 12px 26px 12px 26px;
  width: 100%;
  font-weight: 600;
  font-size: 14px;
  justify-content: center;
  text-decoration: none;
  :active {
    color: black;
    background-color: var(--lightGreen);
    border: none;
  }

  @media (max-width: 769px) {
    width: 100%;
    font-size: 12px;
  }
`;

export const BackButtonWrapper = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 16px;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  @media (max-width: 769px) {
  }
`;
