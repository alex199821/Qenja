import Wrapper from "../assets/wrappers/SessionPopup";
import { useDispatch } from "react-redux";
import { resetState } from "../features/cart/cartSlice";
const SessionPopup = ({ setPopupOpen }) => {
  const dispatch = useDispatch();

  const handleSession = (e) => {
    setPopupOpen(false);
    if (e.target.value === "no") {
      dispatch(resetState());
    } else {
      localStorage.setItem("openModals", JSON.stringify(false));
      return;
    }
  };
  return (
    <Wrapper>
      <section className="modal">
        <div className="popup">
          <h1>Would you like to continue your previous session?</h1>
          <div className="buttonContainer">
            <button
              className="sessionButton"
              onClick={handleSession}
              value={"yes"}
            >
              Yes
            </button>
            <button
              className="sessionButton"
              onClick={handleSession}
              value={"no"}
            >
              No
            </button>
          </div>
        </div>
      </section>
      ;
    </Wrapper>
  );
};
export default SessionPopup;
