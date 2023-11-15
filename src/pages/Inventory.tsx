import { Box, Breadcrumb } from "sagu-ui";
import Form from "../ui/Form";

const Inventory = () => {
  const breadcrumb = [
    { name: "Inicio", link: "/" },
    { name: "Adicionar", link: "" },
  ];
  return (
    <Box flex="column">
      <Breadcrumb items={breadcrumb} />
      <Form />
    </Box>
  );
};

export default Inventory;
