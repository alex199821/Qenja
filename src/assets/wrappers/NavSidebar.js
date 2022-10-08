import styled from "styled-components";
import backgroundGrid from "../images/backgroundGrid.png";

const Wrapper = styled.nav`
  background: var(--primary);
  background-image: url(${backgroundGrid});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 250% 100%;
  height: 100vh;
`;
export default Wrapper;
