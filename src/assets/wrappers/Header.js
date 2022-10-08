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

  .nav-container {
    display: flex;
    gap: 1.5rem;
    align-items: center;
    width: 40%;
    padding-left: 32px;
    padding-right: 32px;
  }
  .cart-container {
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
  .language-select {
    font-size: 18px;
    color: white;
    font-weight: 500;
    text-transform: uppercase;
    background: var(--primary);
    border: 0;
  }
  .p,
  .links {
    font-size: 18px;
    color: white;
    text-decoration: none;
  }
  .search-bar {
    color: white;
    background-color: transparent;
    border: none;
    font-size: 18px;
    width: 80px;
    margin-top: 2px;
  }
  .search-bar::placeholder {
    color: white;
  }
  .search-bar:focus::placeholder {
    font-size: 14px;
  }
  .search-bar:focus {
    padding: 10px;
    outline: none;
    font-size: 14px;
    width: 12rem;
    border: 1px solid white;
    border-radius: 14px;
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
    .searchIcon,
    .burger {
      display: flex;
    }
    .nav-container {
      padding-right: 16px;
      padding-left: 16px;
      gap: 0;
    }
    .nav-container>.links, 
    .search-bar,
    .language-select {
      display: none;
    }
  }
`;
export default Wrapper;
