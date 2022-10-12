import styled from "styled-components";

export const Wrapper = styled.nav`
  background-color: var(--green);
  padding-left: 32px;
  padding-right: 32px;
  img {
    padding-top: 80px;
    padding-bottom: 15px;
  }
  .pageNavigationContainer {
    display: flex;
    justify-content: space-between;
    padding-bottom: 50px;
    border-bottom: 1px solid #1d1d1d;
    nav {
      display: flex;
      justify-content: space-between;
      gap: 12rem;
      div {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
    }
    .linksFooter {
      //"fs-5 font-inter fw-700 black mb-3 fs-3-sm fw-600-sm"
      font-size: 16px;
      font-family: "Inter", sans-serif;
      font-weight: 700;
      color: var(--primary);
      text-decoration: none;
    }
  }
  .socialNavigationContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 20px;
    padding-bottom: 40px;
    p {
      font-weight: 300;
      font-family: "Inter", sans-serif;
      font-size: 16px;
    }
  }
  .socialLinksContainer {
    display: flex;
    align-items: flex-start;
  }
  .socialMediaIcon {
    display: none;
    color: "black";
    width: 32px;
    height: 32px;
  }
  .socialMediaLink {
    display: flex;
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: var(--primary);
    text-decoration: none;
    margin-left: 16px;
  }
  .additionalLinksContainer {
    display: none;
    flex-direction: column;
    align-items: center;
    margin-bottom: 80px;
    gap: 5px;
  }
  .additionalLinks {
    font-weight: 400px;
    color: var(--primary);
    text-decoration: none;
  }

  @media (max-width: 769px) {
    padding-left: 15px;
    padding-right: 15px;
    img {
      display: none;
    }
    .pageNavigationContainer {
      flex-direction: column-reverse !important;
      border-bottom: none;
      nav {
        flex-direction: column;
        gap: 0;
        padding-top: 40px;
        padding-bottom: 40px;
        div {
          align-items: center;
          margin-bottom: 16px;
        }
      }
      .linksFooter {
        font-size: 28px;
        font-weight: 600;
      }
      .hideLinksFooter {
        display: none;
      }
    }
    .socialNavigationContainer {
      flex-direction: column;
      padding-top: 10px;
      padding-bottom: 0px;
      p {
        display: none;
      }
    }
    .socialLinksContainer {
      gap: 1rem;
      justify-content: center;
      margin-bottom: 10px;
      align-items: center;
    }
    .socialMediaIcon {
      display: flex;
      color: black;
    }
    .socialMediaLink {
      display: none;
    }
    .additionalLinksContainer {
      margin-bottom: 40px;
      display: flex;
    }
  }
`;
