import {
  SaguGlobalStyles,
  SaguProvider,
  Container,
  theme,
  GridMain,
} from "sagu-ui";
import { base } from "sagu-ui/src/styles/theme/colors";

import Notification from "./ui/Notification";
import Router from "./router/Router";
import Header from "./ui/Header";

function App() {
  // Fix color base bug
  Object.assign(theme.colors.base, base);

  return (
    <SaguProvider theme={theme}>
      <SaguGlobalStyles />
      <GridMain>
        <Header />
        <Container>
          <Router />
          <Notification />
        </Container>
      </GridMain>
    </SaguProvider>
  );
}

export default App;
