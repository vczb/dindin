import { useCallback } from "react";
import { Box, Button } from "sagu-ui";
import { jsonToCSV, saveCSV } from "../services/file";

type FilterProps = {
  data: {
    [key: string]: string;
  };
};

const Filter = ({ data }: FilterProps) => {
  const onDownload = useCallback(() => {
    const csv = jsonToCSV(data);
    saveCSV("dados.csv", csv);
  }, [data]);

  return (
    <Box
      flex="row"
      variant="transparent"
      padding="none"
      justify="end"
      fullWidth={true}
    >
      <Button size="xsmall" onClick={() => onDownload()}>
        Baixar
      </Button>
    </Box>
  );
};

export default Filter;
