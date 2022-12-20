import React from "react";

import { useContext, useState, useEffect, useCallback } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [cocktails, setCokctails] = useState([]);
  return (
    <AppContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        searchValue,
        setSearchValue,
        setCokctails,
        cocktails,
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
