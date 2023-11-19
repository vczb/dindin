import { FormEvent, useCallback, useState } from "react";
import {
  getCollection,
  insertItem,
  insertItemProps,
} from "../services/firebase";
import { TOAST_MESSAGE_EVENT, dispatch } from "../services/events";

const NOTIFICATION_STATUS = {
  success: {
    message: "Adicionado com sucesso!",
    type: "success",
  },
  error: {
    message: "Ops... algo deu errado",
    type: "error",
  },
};

const useInventory = () => {
  const [isLoading, setIsLoading] = useState(false);

  const getFormData = (event: FormEvent<HTMLFormElement>) => {
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dataObject = Object.fromEntries(data.entries()) as any;

    return dataObject;
  };

  const insertOnInventory = async (data: insertItemProps) => {
    return await insertItem(data);
  };

  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const data = getFormData(event);

    insertOnInventory(data)
      .then(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        event.target.reset();
        dispatch(TOAST_MESSAGE_EVENT, NOTIFICATION_STATUS.success);
      })
      .catch(() => {
        dispatch(TOAST_MESSAGE_EVENT, NOTIFICATION_STATUS.error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const getInventory = useCallback(async () => {
    setIsLoading(true);
    return await getCollection()
      .then((data) => {
        return data;
      })
      .catch(() => {
        dispatch(TOAST_MESSAGE_EVENT, NOTIFICATION_STATUS.error);
        return null;
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return {
    getFormData,
    insertOnInventory,
    handleSubmit,
    isLoading,
    getInventory,
  };
};
export default useInventory;
