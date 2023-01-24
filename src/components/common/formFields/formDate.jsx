import React from 'react';
import { Form, FormGroup, FormLabel, FormSelect } from 'react-bootstrap';

const FormInput = ({
    placeholder = "",
    type= "text",
    name="",
    className="form-jack",
    label= ""
}) => {
  return (
    <FormGroup class="form-group">
      {label && <FormLabel>{label}</FormLabel>}
      <DatePicker id="example-datepicker" value={this.state.value} onChange={this.handleChange} />
      <HelpBlock>Help</HelpBlock>
    </FormGroup>
  );
}

export default FormInput
