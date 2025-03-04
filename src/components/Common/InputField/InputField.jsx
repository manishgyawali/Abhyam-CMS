import { Input } from "@mui/material";
import React from "react";

const InputField = ({ type, placeholder }) => {
  return <Input type={type} placeholder={placeholder} />;   
};

export default InputField;
