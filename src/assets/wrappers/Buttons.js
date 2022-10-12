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
