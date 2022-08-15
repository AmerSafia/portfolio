import React, { createContext, useContext, useState, useEffect } from "react";
import { client } from "../lib/client";
const Context = createContext()

export const StateContext = ({ children }) => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const query = '*[_type=="user"]';
    const user = await client.fetch(query);
    setUser(user[0]);
  };
  return <Context.Provider
    value={{user}} >
    {children}
  </Context.Provider >

}
export const useStateContext = () => useContext(Context)
