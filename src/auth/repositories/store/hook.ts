import {useDispatch, useSelector} from "react-redux";

import {authentication} from "./index";

import {AppDispatch, RootState} from "~core/store";

const useAuthViewModel = () => {
  const authState = useSelector((state: RootState) => state.authSlice);

  const dispatch = useDispatch<AppDispatch>();

  const login = (log: string, password: string) => {
    dispatch(authentication({login: log, password: password}));
  };

  return {...authState, login};
};

export {useAuthViewModel};
