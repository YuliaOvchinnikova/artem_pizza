import { useState, createContext, useContext } from "react";
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState();

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
