import React from 'react';
import { Form, FormGroup, Input } from 'reactstrap';


const CustomInput = () => {
  return (
    <Form>
      <FormGroup>
        <Input type="email" name="email" id="exampleEmail" placeholder="Input Field" />
      </FormGroup>
    </Form>
  )
}

export default CustomInput;