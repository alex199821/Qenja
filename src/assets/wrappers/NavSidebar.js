import styled from "styled-components";
import backgroundGrid from "../images/backgroundGrid.png";

const Wrapper = styled.nav`
  .navSidebar-container {
    background: var(--primary);
    background-image: url(${backgroundGrid});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 250% 100%;
    height: 100vh;
    margin-left: -100%;
    transition: var(--transition);
    position: fixed;
    width: 100%;
  }
  .show-navSidebar {
    margin-left: 0;
    z-index: 99;
  }
  header {
    display: flex;
    flex-direction: row;
    padding: 20px;
    align-items: center;
    width: auto;
    justify-content: space-between;
  }
  main {
    display: flex;
    flex-direction: column;
    display: flex;
    align-items: center;
    gap: 15px;
    margin: 20vh;
  }
  .socialIconsContainer {
    display: flex;
    gap: 50px;
    margin-top: 100px;
  }
  .socialIcon {
    color: var(--white);
    width: 32px;
    height: 32px;
  }
  .linkSidebar {
    font-size: 28px;
    color: var(--white);
    text-decoration: none;
    font-weight: 400;
    margin-bottom: 16px;
  }
`;
export default Wrapper;
