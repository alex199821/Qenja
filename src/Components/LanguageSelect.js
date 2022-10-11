import { LanguageSelectWrapper } from "../assets/wrappers/Components";

const LanguageSelect = ({ props }) => {
  const options = [
    { value: "EN", input: "EN" },
    { value: "GE", input: "GE" },
    { value: "FR", input: "FR" },
  ];

  const handleChange = () => {
    console.log("Change Handled");
  };
  return (
    <LanguageSelectWrapper onChange={handleChange} className={props}>
      {options.map((option, index) => {
        const { value, input } = option;
        return (
          <option key={index} value={value}>
            {input}
          </option>
        );
      })}
    </LanguageSelectWrapper>
  );
};
export default LanguageSelect;
