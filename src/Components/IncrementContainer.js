import { Wrapper } from "../assets/wrappers/IncrementContainer";
const IncrementerContainer = ({ onChange, value, className }) => {
  const handleAmount = (e) => {
    let type = e.target.value;
    if (type === "inc") {
      onChange(value + 1);
    } else if (type === "dec" && value > 1) {
      onChange(value - 1);
    }
  };

  return (
    <Wrapper>
      <button
        onClick={handleAmount}
        value="dec"
        className="amountIcrementer"
        type="button"
      >
        −
      </button>
      <span className={className ? `amount ${className}` : "amount"}>
        {value}
      </span>
      <button
        onClick={handleAmount}
        value="inc"
        className="amountIcrementer"
        type="button"
      >
        +
      </button>
    </Wrapper>
  );
};
export default IncrementerContainer;
