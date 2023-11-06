import { FormEvent } from "react";

import { insertItem } from "../services/firebase";

import { Button, TextField, TextArea, Select } from "sagu-ui";
import styled from "styled-components";

const OPTIONS = ["Mercado", "Lazer", "Casa"];

const S = {
  Form: styled("form")`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  `,
};

const Form = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const category = data.get("category") as string;
    const price = parseFloat(data.get("price") as string);
    const description = (data?.get("description") || "") as string;
    console.log({ category, price, description });
    insertItem({ category, price, description })
      .then(() => {
        console.log("success");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <S.Form id="form" onSubmit={(e) => handleSubmit(e)}>
      <Select options={OPTIONS} name="category" label="Categoria" />
      <TextField name="price" type="number" required label="Valor" />

      <TextArea label="Descrição" name="description" />

      <Button type="submit" variant="filled">
        Adicionar
      </Button>
    </S.Form>
  );
};

export default Form;
