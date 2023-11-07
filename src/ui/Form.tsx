import { FormEvent, useState } from "react";

import { insertItem } from "../services/firebase";

import {
  Button,
  TextField,
  TextArea,
  Select,
  Toaster,
  GenericInput,
} from "sagu-ui";
import styled from "styled-components";

const OPTIONS = ["Mercado", "Restaurantes", "Passeios", "Casa", "Outros"];

const S = {
  Form: styled("form")`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  `,
};

type StatusStateProps = {
  message: string;
  type: "error" | "success";
};

const Form = () => {
  const [status, setStatus] = useState<StatusStateProps | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(null);

    const data = new FormData(event.currentTarget);

    const category = data.get("category") as string;
    const price = parseFloat(data.get("price") as string);
    const description = (data?.get("description") || "") as string;
    const date = (data?.get("date") || "") as string;

    console.log({ category, price, description });
    insertItem({ category, price, description, date })
      .then(() => {
        setStatus({
          message: "Adicionado com sucesso!",
          type: "success",
        });
      })
      .catch((error) => {
        setStatus({
          message: "Ops... algo deu errado",
          type: "error",
        });
        console.log(error);
      });
  };

  return (
    <S.Form id="form" onSubmit={(e) => handleSubmit(e)}>
      <Select options={OPTIONS} name="category" label="Categoria" />
      <TextField name="price" type="number" required label="Valor" step="0.1" />
      <GenericInput
        type="date"
        name="date"
        defaultValue={new Date().toISOString().substring(0, 10)}
      />
      <TextArea label="Descrição" name="description" />
      <Button type="submit" variant="filled">
        Adicionar
      </Button>
      {!!status?.message && (
        <Toaster
          severity={status.type}
          isFullWidth
          duration={8000}
          closable={false}
        >
          {status.message}
        </Toaster>
      )}
    </S.Form>
  );
};

export default Form;
