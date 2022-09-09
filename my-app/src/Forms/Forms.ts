export const nameRegex = /^[a-zA-Z][a-zA-Z\s]{1,14}[a-zA-Z]$/;
export const passwordRegex =
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,20}/;
export const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const login = {
  email: {
    elementType: "input",
    elementConfiq: { type: "text", placeholder: "Email" , label:'email'},
    value: "",
    valid: false,
    validation: {
      require: true,
      pattern: emailRegex,
    },
    used: false,
    errorMessege: " it should be a valid email address",
  },
  password: {
    elementType: "input",
    elementConfiq: { type: "password", placeholder: "Password" , label:'Password'},
    value: "",
    valid: false,
    validation: {
      require: true,
      pattern: passwordRegex,
    },
    used: false,
    errorMessege:
      " password should be 8-20 and includes at least one letter and one nuber and one special characters  ",
  },
  button: {
    elementType: "button",
    elementConfiq: {
      type: "submit",
      variant:"contained"
    },
    elementName:'Sign in'
  },
};


export const inputs = [
  {
    id: 1,
    elementType: "input",
    name: "userName",
    type: "text",
    placeholder: "user name",
    label: "user name",
    errorMessage:
      " user name should be 3-16 characters and should not include any special words ",
    required: true,
    pattern: "john",
  },
  {
    id: 2,
    elementType: "input",
    name: "email",
    type: "text",
    placeholder: "Email",
    label: "Email",
    errorMessage: " it should be a valid email address",
    required: true,
    error: false,
  },
  {
    id: 3,
    elementType: "input",
    name: "birthDay",
    type: "date",
    placeholder: "",
    label: "",
    errorMessege: "it should be  date ",
    required: true,
  },
  {
    id: 4,
    elementType: "input",
    name: "password",
    type: "password",
    placeholder: "password",
    label: "password",
    errorMessege:
      " password should be 8-20 and includes at least one letter and one nuber and one special characters  ",

    required: true,
  },
  {
    id: 5,
    elementType: "input",
    name: "confirmPassword",
    type: "password",
    placeholder: "confirm password",
    label: "confirm password",
    errorMessege: "  password not match ",
    required: true,
  },
];

export const form = {
  name: {
    elementType: "input",
    elementConfiq: { type: "text", placeholder: "Name", label: "Name" },
    value: "",
    valid: false,
    validation: {
      require: true,
      pattern: nameRegex,
    },
    used: false,
    errorMessege:
      " user name should be 3-16 characters and should not include any special words ",
  },
  email: {
    elementType: "input",
    elementConfiq: { type: "text", placeholder: "Email", label: "Email" },
    value: "",
    valid: false,
    validation: {
      require: true,
      pattern: emailRegex,
    },
    used: false,
    errorMessege: " it should be a valid email address",
  },
  password: {
    elementType: "input",
    elementConfiq: {
      type: "password",
      placeholder: "Password",
      label: "Passwor",
    },
    value: "",
    valid: false,
    validation: {
      require: true,
      pattern: passwordRegex,
    },
    used: false,
    errorMessege:
      " password should be 8-20 and includes at least one letter and one nuber and one special characters  ",
  },
  button: {
    elementType: "button",
    elementConfiq: {
      type: "submit",
      variant:"contained"
    },
    elementName:'Sign in'
  },
};
