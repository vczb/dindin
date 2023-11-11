import {
  theme,
  SaguGlobalStyles,
  SaguProvider,
  Container,
  Toaster,
} from "sagu-ui";

import "./App.css";
import Form from "./ui/Form";
import { useEffect, useState } from "react";
import { TOAST_MESSAGE_EVENT, observe } from "./services/events";

type StatusStateProps = {
  message: string;
  type: "error" | "success";
};

function App() {
  const [showToast, setShowToast] = useState<StatusStateProps | null>(null);

  useEffect(() => {
    observe(TOAST_MESSAGE_EVENT, (data: StatusStateProps) => {
      setShowToast(data);
    });
  }, []);

  return (
    <SaguProvider theme={theme}>
      <SaguGlobalStyles />
      <main>
        <Container>
          <Form />
          {showToast?.message && (
            <Toaster
              onClose={() => setShowToast(null)}
              severity={showToast.type}
              closable={false}
              showIcon={true}
              duration={3000}
              style={{ marginTop: ".8rem" }}
            >
              {showToast.message}
            </Toaster>
          )}
        </Container>
      </main>
    </SaguProvider>
  );
}

export default App;
