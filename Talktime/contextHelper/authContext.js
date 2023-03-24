import { createContext, useEffect, useState } from "react";

import { readData, removeData, storeData } from "../asyncStorageHelper";

const AuthContext = createContext();

const asyncStorageKey = "TalkTime-Chat";

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    readData(asyncStorageKey)
      .then((response) => {
        if (response) {
          setUser(JSON.parse(response));
        }
      })
      .catch((error) => {
        console.log("Error in auth context read Data");
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (user != null) {
      storeData(asyncStorageKey, JSON.stringify(user))
        .then()
        .catch((error) => {
          console.log("Error in auth context store Data");
          console.log(error);
        });
    }
  }, [user]);

  const loginUser = (user) => {
    setUser(user);
  };

  const getUser = () => {
    return user;
  };

  const logoutUser = async () => {
    try {
      await removeData(asyncStorageKey);
      setUser(null);
    } catch (error) {
      console.log("Error in logoutUser");
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ loginUser, getUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
