import { FormEvent } from "react";

import { insertItem } from "../services/firebase";

import "./Form.css";

const CATEGORIES = ["Mercado", "Lazer", "Casa"];

const Form = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const category = data.get("category") as string;
    const price = parseFloat(data.get("price") as string);
    const description = (data?.get("description") || "") as string;

    insertItem({ category, price, description })
      .then(() => {
        console.log("success");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form id="form" onSubmit={(e) => handleSubmit(e)}>
      <select required name="category" placeholder="Categoria">
        {CATEGORIES.map((category) => (
          <option key={category}>{category}</option>
        ))}
      </select>

      <input placeholder="Valor" type="number" name="price" required />
      <textarea placeholder="Descrição" rows={8} name="description" />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default Form;
