
import React, { useState } from 'react';
// reactstrap components
import {
  Row, 
  Col,
  Button
} from "reactstrap";

const Dashboard = (props) => {
    return (
    <>
      <div>
       <h2>Basic elements</h2>
       <h4>Buttons</h4>
       <Row>
          <Col><Button color="primary">Primary Button</Button></Col>
          <Col><Button color="secondary">Warning Button</Button></Col>
          <Col><Button color="success">Default Button</Button></Col>
          <Col><Button color="info">Danger Button</Button></Col>
       </Row>
       </div>
   </>
  );
}


export default  Dashboard;