import { Box } from "@mui/material";
import React, { useState } from "react";

import Input from "../../component/Shared/Input";
import { inputs } from "../../Forms/Forms";

const Form = () => {
  const [values, setValues] = useState<any>({
    userName: "",
    email: "",
    birthDay: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <Box
      sx={{
        marginTop: "200px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "100vw",
      }}>
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <Input
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
            elementType={input.elementType}
          />
        ))}
     
      </form>
    </Box>
  );
};

export default Form;
