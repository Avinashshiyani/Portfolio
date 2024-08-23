import React from "react";
import Context from "./Context";

const Provider = ({ children }) => {
  return <Context.Provider value="dark">{children}</Context.Provider>;
};

export { Provider };
