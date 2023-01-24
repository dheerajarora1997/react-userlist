import {useState, useEffect} from 'react'
import FormInput from '../../components/common/formFields/formInput';
import FormSelect  from '../../components/common/formFields/formSelect';
import CommonLayout from '../../components/common/layout/commonLayout';

import {Card, Button} from 'react-bootstrap';

function UserFormComponent() {
const [state, setState] = useState()
  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setState({
      ...state,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("formData", state);
    // ... submit to API or something
  };
  return (
    <>    
    <CommonLayout footer={false}>
    <Card>
    <Card.Header>User Form</Card.Header>
    <Card.Body>
    <form>
      <div className='row'>
        <div className='col-sm-4'>
          <FormInput 
          name="name"
          type='text'
          label='Name'
          onChange = {handleInputChange}
          helpText='Please Enter Full name as mentioned in pan card'
          />
        </div>
        <div className='col-sm-4'>
          <FormInput 
          name="email"
          type='email'
          placeholder='Enter your Email'
          label='Emai ID'
          onChange = {handleInputChange}
          />
        </div>
        <div className='col-sm-4'>
          <FormInput
           name="phone"
           type='tel' 
           placeholder='Enter your Phone Number'
            label='Phone' 
            onChange = {handleInputChange}
            />
        </div>
        <div className='col-sm-4'>
          <FormSelect 
          name="category"
          label="Choose One Category"
          onChange = {handleInputChange}
          />
        </div>
        <div className='col-sm-12'>
        <Button variant="primary" onClick={handleSubmit}>Submit your Details</Button>
        </div>
      </div>
    </form>
    </Card.Body>
    </Card>
    </CommonLayout>
    </>
  );
}

export default UserFormComponent;
