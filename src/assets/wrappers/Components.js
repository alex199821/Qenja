import styled from "styled-components";
import Logo from "../images/Logo.png";
import greenCircle from "../images/greenCircle.png";

export const LanguageSelectWrapper = styled.select`
  font-size: 16px;
  color: var(--white);
  font-weight: 500;
  text-transform: uppercase;
  background: var(--primary);
  border: 0;
  outline: none;
`;

export const SearchSection = styled.input`
  border: 1px solid #c4c4c4;
  text-align: center;
  padding: 16px 50px 16px 50px;
  background-color: var(--secondary);
  color: var(--green);
  font-weight: 300;
  font-size: 16px;
  font-family: "Space Grotesk", sans-serif;
  width: 60%;
  ::placeholder {
    color: var(--green);
    font-weight: 300;
    font-size: 16px;
    font-family: "Space Grotesk", sans-serif;
  }
`;

export const LogoSection = styled.section`
  display: flex;
  flex-direction: row;
  img {
    width: 60px;
    height: auto;
  }
  @media (max-width: 769px) {
    img {
      width: 60px;
      height: 60px;
    }
  }
`;

export const SearchBar = styled.input`
  display: flex;
  color: var(--white);
  background-color: transparent;
  border: none;
  font-size: 16px;
  width: 80px;
  margin-top: 2px;
  ::placeholder {
    color: var(--white);
  }
  :focus::placeholder {
    font-size: 14px;
  }
  :focus {
    padding: 10px;
    outline: none;
    font-size: 14px;
    width: 12rem;
    border: 1px solid white;
    border-radius: 14px;
  }
  @media (max-width: 769px) {
    display: none;
  }
`;

export const EmailSignupWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-bottom: 80px;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  h3 {
    font-size: 82px;
    color: var(--green);
    font-weight: 700;
    margin: 0;
  }
  img {
    width: auto;
    max-height: 3rem;
  }
  input {
    background: transparent;
    padding-bottom: 10px;
    margin-bottom: 20px;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 1px solid var(--grey);
    color: var(--grey);
    font-family: "Inter", sans-serif;
    align-items: center;
  }
  input:focus {
    outline: none;
  }
  p {
    font-weight: 700;
    color: var(--grey);
    font-size: 20px;
    margin: 0;
  }
  @media (max-width: 769px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    h3 {
      font-size: 32px;
    }
    p {
      line-height: 1.25;
      font-size: 18px;
      font-weight: 500;
    }
  }
`;

export const SubscibeFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  p {
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 15px;
  }
  div {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
  input {
    padding: 10px 0 10px 0;
    margin-right: 30px;
    background: transparent;
    color: var(--primary);
    border-left: 0;
    border-right: 0;
    border-top: 0;
    border-bottom: 1px solid var(--primary);
    width: 40%;
  }
  input::placeholder {
    color: var(--primary);
    font-size: 14px;
  }
  input:focus {
    outline: none;
  }
  button {
    font-weight: 400;
    color: var(--primary);
    background-color: var(--green);
    border: 1px solid var(--primary);
    font-size: 14px;
    padding: 10px 30px 10px 30px;
  }

  @media (max-width: 769px) {
    width: 100%;
    p {
      margin-bottom: 16px;
    }
    div {
      justify-content: space-between;
    }
    input {
      width: 50%;
      margin-right: 0;
    }
  }
`;
