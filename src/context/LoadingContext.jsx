"use client";
import { useContext, createContext, useState } from "react";

const LoadingContext = createContext();

export const useLoader = () => {
  return useContext(LoadingContext);
};

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [initialLoad, setInitialLoad] = useState(true);

  const load = () => {
    setLoading(true);
  };

  const endLoad = () => {
    setLoading(false);
    setInitialLoad(false);
  };

  const value = {
    loading,
    initialLoad,
    load,
    endLoad,
  };

  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
};
