import { Toaster } from "sagu-ui";
import { TOAST_MESSAGE_EVENT, observe } from "../services/events";
import { useEffect, useState } from "react";

type StatusStateProps = {
  message: string;
  type: "error" | "success";
};

const Notification = () => {
  const [showToast, setShowToast] = useState<StatusStateProps | null>(null);

  useEffect(() => {
    observe(TOAST_MESSAGE_EVENT, (data: StatusStateProps) => {
      setShowToast(data);
    });
  }, []);

  return (
    <>
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
    </>
  );
};

export default Notification;
