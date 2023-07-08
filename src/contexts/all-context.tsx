import React, { useContext, useState } from "react";

export interface IAllContext {
  orders?: any;
  setOrders?: any;
  faceImage?: any;
  setFaceImage?: any;
  login?: any;
  setLogin?: any;
}
const AllContext = React.createContext({} as IAllContext);

export const StateProvider = ({ children }: any) => {
  const [orders, setOrders] = useState();
  const [faceImage, setFaceImage] = useState();
  const [login, setLogin] = useState();
  const value = {
    orders,
    setOrders,
    faceImage,
    setFaceImage,
    login,
    setLogin,
  };

  return (
    <>
      <AllContext.Provider value={value}>{children}</AllContext.Provider>
    </>
  );
};
export const ContextManager = () => {
  const allContext = useContext<IAllContext>(AllContext);
  return allContext;
};
