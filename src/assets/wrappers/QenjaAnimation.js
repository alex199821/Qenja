import styled from "styled-components";

const Wrapper = styled.section`
  p {
    flex-shrink: 0;
    margin: 0;
    min-width: 100%;
    white-space: nowrap;
    margin: 0 4px;
    font-family: "Inter", sans-serif;
    animation: qenjaTextScroll 120s linear infinite;
  }
  .tiltAnimation {
    position: absolute;
    transform: rotate(-42deg);
    /* clip-path: polygon(100% 0%, 100% 60%, 60% 100%, 0% 100%); */
  }

  @keyframes qenjaTextScroll {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
  .animation {
    display: flex;
    width: 100vw;
    box-sizing: border-box;
    position: relative;
    font-size: 1.5rem;
    margin-left: calc(-50vw + 50%);
    padding-bottom: 15px;
    padding-top: 15px;
  }
  .rotateAnimation {
    transform: rotate(1.5deg);
  }
  .animationWhite {
    color: #cfcfcf;
    border-top: 1px solid #cfcfcf;
    border-bottom: 1px solid #cfcfcf;
  }
  .animationYellow {
    color: #d9ec00;
    border-top: 1px solid #d9ec00;
    border-bottom: 1px solid #d9ec00;
  }
  .animationGreen {
    background-color: #d9ec00;
    color: #1d1d1d;
    border: transparent;
    font-weight: 500;
  }
  .animationOrange {
    background-color: #cb5b1a;
    color: #1d1d1d;
    border: transparent;
    font-weight: 500;
  }
`;
export default Wrapper;
