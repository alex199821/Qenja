import { EmailSignupWrapper } from "../assets/wrappers/Components";
import emailArrow from "../assets/images/emailArrow.png";

const EmailSignup = () => {
  return (
    <EmailSignupWrapper>
      <div>
        <h3>GOT EMAIL?</h3>
        <img src={emailArrow} alt="Submit Mail Arrow" />
      </div>
      <input type="email" />
      <p>
        Get updates, drops, information and more direct to your inbox. No spam!
      </p>
    </EmailSignupWrapper>
  );
};
export default EmailSignup;
