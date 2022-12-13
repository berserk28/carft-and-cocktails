import React from "react";
import { createContext } from "react";
import { useContext, useState, useEffect, useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{ name: "toufik" }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalcontext = () => {
  return useContext(AppContext);
};

export { AppProvider };
