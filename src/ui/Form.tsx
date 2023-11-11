import { Button, Input, TextArea, Select } from "sagu-ui";
import styled from "styled-components";
import useInventory from "../hooks/useInventory";

const OPTIONS = [
  "Mercado",
  "Restaurantes",
  "Passeios",
  "Casa",
  "Farmácia",
  "Outros",
];

const S = {
  Form: styled("form")`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  `,
};

const Form = () => {
  const { handleSubmit, isFormLoading } = useInventory();

  return (
    <S.Form id="form" onSubmit={(e) => handleSubmit(e)}>
      <Select options={OPTIONS} name="category" label="Categoria" />
      <Input name="price" type="number" required label="Valor" step="0.1" />
      <Input
        label="Data"
        type="date"
        name="date"
        defaultValue={new Date().toISOString().substring(0, 10)}
      />
      <TextArea label="Descrição" name="description" />
      <Button type="submit" variant="filled" disabled={isFormLoading}>
        {isFormLoading ? "Carregando..." : "Adicionar"}
      </Button>
    </S.Form>
  );
};

export default Form;
