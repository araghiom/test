import React, { createContext,  useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }: any) => {
  const [auth, setAuth] = useState({});

  const storeLogin = () => {
    localStorage.setItem("user", "1");
  };

  const clearLogin = () => {
    localStorage.clear();
    setAuth({});
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, storeLogin ,clearLogin}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
