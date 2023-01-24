import React from 'react';
import { Button, Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap';

const FormInput = ({
    placeholder = "Please enter your Input",
    type= "text",
    name="",
    className="form-jack",
    label= "",
    onChange,
    helpText= ""
}) => {
  return (
     <FormGroup className='form-group'>
       {label && <FormLabel>{label}</FormLabel>}
        <FormControl 
            placeholder={placeholder}
            type={type}
            name={name}
            className={className}
            onChange={onChange}
          />
      {helpText && <div className='help-text small'>{helpText}</div>}
    </FormGroup>
    
  );
}

export default FormInput
