import { TextField } from "sagu-ui";

const CATEGORIES = ["Mercado", "Lazer", "Casa"];

const Select = () => {
  return (
    <TextField
      required
      name="category"
      label="Categoria"
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      as="select"
    >
      {CATEGORIES.map((category) => (
        <option key={category}>{category}</option>
      ))}
    </TextField>
  );
};

export default Select;
