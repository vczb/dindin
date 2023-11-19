import { Box, Breadcrumb } from "sagu-ui";
import Form from "../ui/Form";

const Inventory = () => {
  const breadcrumb = [
    { name: "Inicio", link: "/dindin" },
    { name: "Adicionar", link: "/dindin/adicionar" },
  ];
  return (
    <Box flex="column" variant="transparent">
      <Breadcrumb items={breadcrumb} />
      <Form />
    </Box>
  );
};

export default Inventory;
