import { useEffect, useState } from "react";
import useInventory from "../hooks/useInventory";
import { Box, Skeleton, Table } from "sagu-ui";

const Dashboard = () => {
  const { getInventory, isLoading } = useInventory();
  const [items, setItems] = useState();

  useEffect(() => {
    async function fetchData() {
      const data = await getInventory();
      setItems(data);
    }

    fetchData();
  }, [getInventory]);

  if (isLoading) {
    return (
      <Box gap="xxsmall" variant="transparent" flex="column">
        {Array.from({ length: 7 }, (_, index) => (
          <Skeleton
            key={index}
            variant="rectangular"
            height={10}
            width={100 + 10 * index}
          />
        ))}
      </Box>
    );
  }

  if (!isLoading && !items) {
    return <>Ops... algo deu errado</>;
  }

  const columns = [
    // { title: "Id", key: "id" },
    { title: "Categoria", key: "category" },
    { title: "Preço", key: "price" },
    { title: "Data", key: "date" },
  ];

  return (
    <Box
      variant="transparent"
      flex="row"
      padding="none"
      shadow={true}
      style={{
        maxWidth: "70vw",
        overflow: "scroll",
      }}
    >
      <Table columns={columns} data={items} />
    </Box>
  );
};

export default Dashboard;
