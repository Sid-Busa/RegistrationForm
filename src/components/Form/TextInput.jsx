import React from "react";
import { TextField } from '@mui/material';


const TextInput = ({ field, form, ...props }) => {
  return <TextField {...field} {...props} />;
};

export default TextInput;
