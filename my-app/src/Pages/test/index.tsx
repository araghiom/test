import React from "react";
import "./index.css";
import Input from "../../component/Shared/Input";
import { Box } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";

import axios from "../../Servise/index";
import { form } from "../../Forms/Forms";

class Submit extends React.Component {
  state: { [key: string]: any } = { form };

  checkValidation = (value: any, rules: any) => {
    let isValid = false;
    if (rules.require) {
      isValid = value.trim().match(rules.pattern);
    }
    return isValid;
  };

  inputChangeHandler = (event: any, inputElement: any) => {
    
    const updatedForm = {
      ...this.state.form,
    };
    const updatedElement = { ...updatedForm[inputElement] };
    updatedElement.value = event.target.value;
    updatedElement.valid = this.checkValidation(
      updatedElement.value,
      updatedElement.validation
    );
    updatedElement.used = true;
    updatedForm[inputElement] = updatedElement;
    this.setState({ form: updatedForm });
  };
  submitHandler = (event: any) => {
    event.preventDefault();
    const formData: { [key: string]: any } = {};

    for (let item in this.state.form) {
      formData[item] = this.state.form[item].value;
    }
    const onSubmit = async (formData: object) => {
      try {
        const response = await axios.post("account", formData);

        console.log(JSON.stringify(response?.data));
      } catch (err) {
        console.log(err);
      }
    };
    onSubmit(formData);
  };

  render() {
    const elementArray = [];

    for (let index in this.state.form) {
      elementArray.push({
        id: index,
        confiq: this.state.form[index],
      });
    }

    return (
      <>
        <Box
          component="main"
          sx={{
            height: "100vh",
          }}>
          <Toolbar />
          <div className="account">
            <h2> Account</h2>
            <form onSubmit={this.submitHandler}>
              <Box sx={{ width: "30vw" }}>
                {elementArray.map((item) => {
                  return (
                    <Input
                      key={item.id}
                      elementType={item.confiq.elementType}
                      elementConfiq={item.confiq.elementConfiq}
                      value={item.confiq.value}
                      onChange={(event: any) =>
                        this.inputChangeHandler(event, item.id)
                      }
                      invalid={!item.confiq.valid}
                      used={item.confiq.used}
                      {...item.confiq}
                    />
                  );
                })}
              </Box>
            </form>
          </div>
        </Box>
      </>
    );
  }
}
export default Submit;
