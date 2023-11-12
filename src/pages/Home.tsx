import { Box, Divider, NavLink, Ribbon } from "sagu-ui";

const Home = () => {
  return (
    <Box
      flex="column"
      gap="small"
      variant="transparent"
      alignment="center"
      justify="center"
      fullWidth={false}
      style={{ margin: "auto" }}
    >
      <NavLink size={"large"} href="adicionar" padding="none">
        Adicionar
      </NavLink>
      <Divider style={{ width: "100%" }} />
      <Box
        flex="column"
        gap="small"
        variant="transparent"
        alignment="center"
        justify="center"
        style={{ position: "relative" }}
      >
        <Ribbon size="small" color="secondary">
          Em breve
        </Ribbon>
        <div />
        <NavLink size={"large"} href="#" disabled={true} padding="none">
          Ver todos
        </NavLink>
        <NavLink size={"large"} href="#" disabled={true} padding="none">
          Gráficos
        </NavLink>
      </Box>
    </Box>
  );
};

export default Home;
