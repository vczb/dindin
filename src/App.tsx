import { theme, SaguGlobalStyles, SaguProvider, Container } from "sagu-ui";

import "./App.css";
import Form from "./ui/Form";
import Notification from "./ui/Notification";

function App() {
  return (
    <SaguProvider theme={theme}>
      <SaguGlobalStyles />
      <main>
        <Container>
          <Form />
          <Notification />
        </Container>
      </main>
    </SaguProvider>
  );
}

export default App;
