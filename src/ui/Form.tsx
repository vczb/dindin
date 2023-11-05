import { FormEvent } from "react";

import { insertItem } from "../services/firebase";

import { Button, TextField } from "sagu-ui";
import TextArea from "./TextArea";
import styled from "styled-components";
import Select from "./Select";

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
      <Select />
      <TextField type="number" name="price" required label="Valor" />

      <TextArea />

      <Button type="submit" variant="filled">
        Adicionar
      </Button>
    </S.Form>
  );
};

export default Form;
