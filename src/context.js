import React from "react";

import { useContext, useState, useEffect, useCallback } from "react";

const AppContext = React.createContext();
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";
const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [cocktails, setCokctails] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(false);
  const FetchData = async () => {
    console.log("hii");
    setIsloading(true);
    try {
      const response = await fetch(`${url}${searchValue}`);
      const data = await response.json();
      setIsloading(false);
      setError(false);
      console.log(data);
    } catch (error) {
      setError(true);
    }

    useEffect(() => {
      FetchData();
    });
  };
  return (
    <AppContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        searchValue,
        setSearchValue,
        setCokctails,
        cocktails,
        isLoading,
        error,
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
