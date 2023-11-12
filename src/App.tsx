import { theme, SaguGlobalStyles, SaguProvider, Container } from "sagu-ui";

import "./App.css";

import Notification from "./ui/Notification";
import Router from "./router/Router";

function App() {
  return (
    <SaguProvider theme={theme}>
      <SaguGlobalStyles />
      <main
        style={{ display: "grid", placeItems: "center", minHeight: "70vh" }}
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
