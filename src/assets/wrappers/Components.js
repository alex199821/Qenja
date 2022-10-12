import styled from "styled-components";
import Logo from "../images/Logo.png";
import greenCircle from "../images/greenCircle.png";

export const LanguageSelectWrapper = styled.select`
  font-size: 18px;
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
`;

export const SearchBar = styled.input`
  display: flex;
  color: var(--white);
  background-color: transparent;
  border: none;
  font-size: 18px;
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
    font-size: 92px;
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
    font-size: 28px;
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
    font-size: 16px;
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
    font-size: 16px;
  }
  input:focus {
    outline: none;
  }
  button {
    font-weight: 400;
    color: var(--primary);
    background-color: var(--green);
    border: 1px solid var(--primary);
    font-size: 16px;
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

export const MainLandingWrapper = styled.section`
  .mainLanding {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
  .mainLandingText {
    display: flex;
    align-items: center;
    width: 50%;
    border-right: 1px solid var(--white);
    p {
      width: 60%;
      color: var(--white);
      font-size: 62px;
      font-weight: 700;
      line-height: 1.5;
    }
    b {
      background-image: url(${greenCircle});
      background-size: 150px;
      background-repeat: no-repeat;
      display: flex;
    }
  }
  .mainLandingImage {
    display: flex;
    justify-content: flex-end;
    width: 50%;
    height: 100%;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 32px;
    img {
      aspect-ratio: 1.075/1;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  @media (max-width: 769px) {
    .mainLanding {
      flex-direction: column;
    }
    .mainLandingText {
      width: 80%;
      border: 0;
      p {
        font-size: 32px;
        width: 100%;
      }
      b {
        background-image: url(${greenCircle});
        background-size: 70px;
        background-repeat: no-repeat;
        display: flex;
      }
    }
    .mainLandingImage {
      border: 0;
      width: 100%;
      padding-left: 0;
    }
  }
`;

export const ImageCollectionWrapper = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 32px;
  padding-bottom: 32px;
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
    .imageContainer {
      width: 100%;
    }
    img {
      width: 100%;
    }
  }
`;
