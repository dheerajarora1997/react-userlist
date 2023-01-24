import React from 'react';
import { Form, FormGroup, FormLabel, FormSelect } from 'react-bootstrap';

const FormInput = ({
    placeholder = "",
    type= "text",
    name="",
    className="form-jack",
    label= "",
    onChange
}) => {
  return (
     <FormGroup className='form-group'>
       {label && <FormLabel>{label}</FormLabel>}
       <FormSelect onChange={onChange} name={name}>
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </FormSelect>
    </FormGroup>
  );
}

export default FormInput
