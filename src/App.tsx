import { theme, SaguGlobalStyles, SaguProvider, Container } from "sagu-ui";

import "./App.css";

import Notification from "./ui/Notification";
import Router from "./router/Router";

function App() {
  return (
    <SaguProvider theme={theme}>
      <SaguGlobalStyles />
      <main>
        <Container>
          <Router />
          <Notification />
        </Container>
      </main>
    </SaguProvider>
  );
}

export default App;
