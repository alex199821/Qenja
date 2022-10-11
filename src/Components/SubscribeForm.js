import { SubscibeFormWrapper } from "../assets/wrappers/Components";
const SubscibeForm = () => {
  return (
    <SubscibeFormWrapper>
      <p>Get the latest news and updates</p>
      <div>
        <input type="email" placeholder="email" />
        <button>Subscribe</button>
      </div>
    </SubscibeFormWrapper>
  );
};
export default SubscibeForm;
