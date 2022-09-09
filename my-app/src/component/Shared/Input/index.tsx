import React from "react";
import "./index.css";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

const Input = (props: any) => {
  const {
    elementType,
    elementConfiq,
    elementName,
    value,
    valid,
    validation,
    onChange,
    inValid,
    used,
    errorMessege,
    ...others
  } = props;

  let inputElement = null;
  const inputClass = ["input-element"];
  const error = ["error"];
  if (props.invalid && props.used) {
    inputClass.push("invalid");
    error.push(":acitve");
  }

  switch (elementType) {
    case "input":
      inputElement = (
        <>
          <TextField
            {...elementConfiq}
            value={value}
            onChange={onChange}
            className={inputClass.join(" ")}
            autoFocus
            sx={{ width: "300px" }}
          />
          <Typography className={error.join()}>{props.errorMessege}</Typography>
        </>
      );

      break;

    case "button":
      inputElement = (
        <Button {...elementConfiq} className="button-element">
          {elementName}
        </Button>
      );
      break;
  }

  return (
    <>
      <div className="input">{inputElement} </div>
    </>
  );
};

export default Input;
