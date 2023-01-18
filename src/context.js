import React from "react";

import { useContext, useState, useEffect } from "react";
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [cocktails, setCokctails] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [error, setError] = useState(true);
  const [toggleMenu, setToggleMenu] = useState(false);
  const fetchData = async () => {
    setIsloading(true);
    try {
      const response = await fetch(`${url}${searchValue}`);
      const data = await response.json();
      const { drinks } = data;

      setError(false);
      setCokctails(drinks);
      setIsloading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [searchValue]);

  return (
    <AppContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        searchValue,
        setSearchValue,
        setCokctails,
        cocktails,
        isloading,
        error,
        toggleMenu,
        setToggleMenu,
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
