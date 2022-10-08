const LanguageSelect = () => {
  const options = [
    { value: "EN", input: "EN" },
    { value: "GE", input: "GE" },
    { value: "FR", input: "FR" },
  ];

  const handleChange = () => {
    console.log("Change Handled");
  };
  return (
      <select className="language-select" onChange={handleChange}>
        {options.map((option, index) => {
          const { value, input } = option;
          return (
            <option key={index} value={value}>
              {input}
            </option>
          );
        })}
      </select>
  );
};
export default LanguageSelect;
