import { theme, SaguGlobalStyles, SaguProvider, Container } from "sagu-ui";

import "./App.css";
import Form from "./ui/Form";

function App() {
  return (
    <SaguProvider theme={theme}>
      <SaguGlobalStyles />
      <main>
        <Container>
          <Form />
        </Container>
      </main>
    </SaguProvider>
  );
}

export default App;
