export const SelectItems = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (text: string) => void;
}) => {
  return (
    <>
      <label htmlFor="select1">
        Choose one of the values &nbsp;
      </label>
      <select
        title="select1"
        name="select1"
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
      >
        <option value="none">None</option>
        <option value="one">One</option>
        <option value="two">Two</option>
        <option value="three">
          Three
        </option>
        <option value="four">Four</option>
      </select>
    </>
  );
};
