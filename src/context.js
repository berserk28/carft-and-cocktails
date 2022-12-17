import React from "react";
import { useContext, useState, useEffect, useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsloading] = useState(true);
  const fetsh
  
  return (
    <AppContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        searchValue,
        setSearchValue,
        isLoading,
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
