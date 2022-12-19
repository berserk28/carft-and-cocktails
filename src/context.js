import React from "react";

import { useContext, useState, useEffect, useCallback } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  return (
    <AppContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        searchValue,
        setSearchValue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
