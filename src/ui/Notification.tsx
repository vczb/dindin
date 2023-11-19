import { Toaster } from "sagu-ui";
import { TOAST_MESSAGE_EVENT, observe } from "../services/events";
import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    > div {
      background: ${theme.colors.base.white};
      position: fixed;
      top: 20%;
      width: fit-content;

      @keyframes move {
        0% {
          transform: translateX(-100%);
        }
        100% {
          transform: translateX(0);
        }
      }
      animation-name: move;
      animation-duration: 1s;
      animation-timing-function: ease-in-out;
      animation-iteration-count: 1;
      will-change: transform;
    }
  `}
`;

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
    <Wrapper>
      {showToast?.message && (
        <Toaster
          onClose={() => setShowToast(null)}
          severity={showToast.type}
          closable={true}
          showIcon={true}
          duration={2500}
        >
          {showToast.message}
        </Toaster>
      )}
    </Wrapper>
  );
};

export default Notification;
