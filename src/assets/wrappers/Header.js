import styled from "styled-components";

const Wrapper = styled.nav`
  padding: 16px 0 16px 0;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  background: var(--primary);
  border-bottom: 1px solid white;

  .navContainer {
    display: flex;
    gap: 1.5rem;
    align-items: center;
    width: 40%;
    padding-left: 32px;
    padding-right: 32px;
  }
  .cartContainer {
    display: flex;
    justify-content: flex-end;
  }
  .logo {
    display: flex;
    flex-direction: row;
  }
  .burger {
    display: none;
    gap: 1.5rem;
    width: 40%;
    background: transparent;
    border: 0;
  }
  .p,
  .links {
    font-size: 18px;
    color: var(--white);
    text-decoration: none;
  }
  .cart {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: relative;
  }
  .cart > span {
    color: var(--green);
    font-size: 18px;
    font-weight: 500;
    position: absolute;
    margin-top: -20px;
  }
  .searchIcon {
    display: none;
    background: transparent;
    border: 0;
  }
  @media (max-width: 1300px) {
    border-bottom: 0;

    .searchIcon,
    .burger {
      display: flex;
    }
    .navContainer {
      padding-right: 16px;
      padding-left: 16px;
      gap: 0;
    }
    .navContainer > .links,
    .search-bar,
    .languageSelect {
      display: none;
    }
  }
`;
export default Wrapper;
