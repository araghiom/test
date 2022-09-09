import React, { useState } from "react";
import Box from "@mui/material/Box";
import Input from "../../../component/Shared/Input";

interface Iform {
  [key: string]: any;
}

const Form = ({ formData, submitHandler }: Iform) => {
  const [form, setForm] = useState<Iform>(formData);

  const checkValidation = (value: any, rules: any) => {
    let isvalid = false;
    if (rules.require) {
      isvalid = value.trim().match(rules.pattern);
    }
    return isvalid;
  };

  const inputChangeHandler = (event: any, inputElement: string) => {
    const updatedForm = { ...form };
    const updatedElement = { ...updatedForm[inputElement] };
    updatedElement.value = event.target.value;
    updatedElement.valid = checkValidation(
      updatedElement.value,
      updatedElement.validation
    );
    updatedElement.used = true;
    updatedForm[inputElement] = updatedElement;
    setForm(updatedForm);
  };

  const elementArray = [];
  for (let index in form) {
    elementArray.push({ id: index, confiq: form[index] });
  }
  return (
    <>
      <Box
        component="form"
        onSubmit={(e: any) => submitHandler(e, form)}
        sx={{
          width: "100vw",
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        {elementArray.map((item) => {
          return (
            <Input
              key={item.id}
              elementType={item.confiq.elementType}
              elementConfiq={item.confiq.elementConfiq}
              value={item.confiq.value}
              onChange={(event: any) => inputChangeHandler(event, item.id)}
              invalid={!item.confiq.valid}
              used={item.confiq.used}
              {...item.confiq}
            />
          );
        })}
      </Box>
    </>
  );
};

export default Form;
