import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import TextField from "@mui/material/TextField";
import { FormControl } from "react-bootstrap";
import * as React from 'react';

function SMInput(props) {

  const { label, disabled, onClick, onChange, className, type,id,placeholder,helperText } = props;


  return (
    <>
     
      <TextField
       id={id}
       label={label}
       placeholder={placeholder}
       helperText={helperText}
        // disabled={disabled} 
        variant="outlined"
        onChange={onChange}
        
        className={className}
        type={type}
       
        size="small"
      />
    </>
  );
}
export default SMInput;
