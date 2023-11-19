import { SaguGlobalStyles, SaguProvider, Container, theme } from "sagu-ui";
import { base } from "sagu-ui/src/styles/theme/colors";

import "./App.css";

import Notification from "./ui/Notification";
import Router from "./router/Router";

function App() {
  // Fix color base bug
  Object.assign(theme.colors.base, base);

  return (
    <SaguProvider theme={theme}>
      <SaguGlobalStyles />
      <main
        style={{
          display: "grid",
          placeItems: "center",
          minHeight: "70vh",
          width: "fit-content",
          margin: "auto",
        }}
      >
        <Container>
          <Router />
          <Notification />
        </Container>
      </main>
    </SaguProvider>
  );
}

export default App;
