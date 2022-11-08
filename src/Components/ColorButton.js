import { useEffect, useState } from "react";
import Wrapper from "../assets/wrappers/ColorButton";
const ColorButton = ({ color, onChange, value }) => {
  const [checked, setChecked] = useState(false);

  const handleClick = (e) => {
    setChecked(!checked);
    onChange(e);
  };

  //Function to uncheck all colors if they are not chosen one
  useEffect(() => {
    if (color !== value) {
      setChecked(false);
    }
  }, [value, color]);

  return (
    <Wrapper>
      <button
        style={{ backgroundColor: color }}
        className={checked ? "colorButton  colorButtonSelected" : "colorButton"}
        value={color}
        onClick={handleClick}
        type="button"
      />
    </Wrapper>
  );
};
export default ColorButton;
