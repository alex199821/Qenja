import styled from "styled-components";
import backgroundGrid from "../images/backgroundGrid.png";

const Wrapper = styled.div`
  .searchSidebar-container {
    background: var(--primary);
    background-image: url(${backgroundGrid});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 250% 100%;
    height: 100vh;
    margin-left: 200%;
    transition: var(--transition);
    position: fixed;
    width: 100%;
  }
  .show-searchSidebar {
    margin-left: 0;
    z-index: 99;
  }
  header {
    display: flex;
    justify-content: flex-end;
    padding: 20px;
  }
  main {
    display: flex;
    justify-content: center;
    margin-top: 30vh;
  }
`;

export default Wrapper;
