import { createContext } from "react";

const AppContext = createContext();

const ContextProvider = (props) => {
  const phone = "123456";
  return (
    <AppContext.Provide value={phone}>{props.children}</AppContext.Provide>
  );
};
export default ContextProvider;
