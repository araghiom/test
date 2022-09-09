import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../../Context/AuthProvider";


const PrivateRoute = () => {
  const { auth } = useContext<any>(AuthContext);

 
  let logid = false;

  const userToken = localStorage.getItem("user");
  if (userToken === "1") {
    logid = true;
  }

  const userCheck = Object.values(auth).every((value) => {
    if (!value) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <>
      {logid ? (
        <Outlet  />
      ) : !userCheck ? (
       
          <Outlet />
      
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default PrivateRoute;
