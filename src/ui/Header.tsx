import { Box } from "sagu-ui";
import Logo from "./Logo";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

const Header = () => {
  const theme = useContext(ThemeContext)!;
  return (
    <Box
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      as="header"
      flex="row"
      padding="small"
      variant="transparent"
      style={{
        margin: "auto",
      }}
    >
      <Logo fill={theme.colors.primary.medium} />
    </Box>
  );
};

export default Header;
