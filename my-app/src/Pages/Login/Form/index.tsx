import React, { useContext } from "react";
import Form from "../../../component/Shared/Form";
import { useNavigate } from "react-router-dom";
import AuthContex from "../../../Context/AuthProvider";
import { login } from "../../../Forms/Forms";

const Login = () => {
  let navigate = useNavigate();
  const { setAuth, storeLogin } = useContext<any>(AuthContex);

  const submitHandler = (event: any, loginData: any) => {
    event.preventDefault();
    setAuth({ loginData });
    storeLogin();
    navigate("../dashbord/home", { replace: true });
  };

  return (
    <>
      <Form formData={login} submitHandler={submitHandler} />
    </>
  );
};

export default Login;
