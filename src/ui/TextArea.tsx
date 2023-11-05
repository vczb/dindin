import { TextField } from "sagu-ui";
import styled from "styled-components";

const S = {
  Wrapper: styled("div")`
    label {
      height: fit-content;
    }
  `,
};

const TextArea = () => {
  return (
    <S.Wrapper>
      <TextField
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        as="textarea"
        type="number"
        name="description"
        required
        label="Descrição"
        rows={8}
        style={{
          padding: "2rem 2.2rem 0 1.5rem",
        }}
      />
    </S.Wrapper>
  );
};

export default TextArea;
