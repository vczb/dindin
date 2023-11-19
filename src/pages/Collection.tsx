import { Box, Breadcrumb } from "sagu-ui";
import Dashboard from "../ui/Dashboard";

const Collection = () => {
  const breadcrumb = [
    { name: "Inicio", link: "/dindin" },
    { name: "Lista", link: "/dindin/lista" },
  ];

  return (
    <Box flex="column" variant="transparent">
      <Breadcrumb items={breadcrumb} />
      <Dashboard />
    </Box>
  );
};

export default Collection;
