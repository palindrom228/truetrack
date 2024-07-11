import {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";

import {addCLientAction, getClientsAction} from "./index";

import {ClientWithoutId} from "~client/data/api/models";
import {AppDispatch, RootState} from "~core/store";

const useClientViewModel = () => {
  const authState = useSelector((state: RootState) => state.clientSlice);
  const dispatch = useDispatch<AppDispatch>();

  const getClients = useCallback(() => {
    dispatch(getClientsAction());
  }, []);

  const addClient = useCallback(async (client: ClientWithoutId) => {
    const data = await dispatch(addCLientAction(client));
    if (data.meta.requestStatus === "fulfilled") {
      return true;
    }
    return false;
  }, []);

  return {...authState, getClients, addClient};
};

export {useClientViewModel};
