import { createContext, useReducer, useContext } from "react";
import { blogConstant } from "../client/constants";

export const Store = createContext();

const initialState = {
  loading: false,
  error: "", 
};

function reducer(state, action) {
  switch (action.type) {
    case blogConstant.LOGIN_REQUEST:
      return { ...state, loading: true, error: "" };
    case blogConstant.LOGIN_SUCCESS:
      return { ...state, loading: false, error: "" };
    case blogConstant.LOGIN_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{children}</Store.Provider>;
}
