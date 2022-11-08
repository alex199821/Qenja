import Wrapper from "../assets/wrappers/SizeButton";
import { useEffect, useState } from "react";

const SizeSelection = ({ size, onChange, value }) => {
  const [checked, setChecked] = useState(false);

  //Mark given size checked
  const handleClick = (e) => {
    setChecked(!checked);
    onChange(e);
  };

  //Mark all other sizes unchecked if one size is chekced
  useEffect(() => {
    if (size !== value) {
      setChecked(false);
    }
  }, [value, size]);
  return (
    <Wrapper>
      <button
        className={checked ? "sizeButton sizeButtonSelected" : "sizeButton"}
        value={size}
        onClick={handleClick}
        type="button"
      >
        {size}
      </button>
    </Wrapper>
  );
};
export default SizeSelection;
