
import React, { useState } from 'react';
import classNames from "classnames";
// reactstrap components
import {
  Alert,
  Badge,
  Breadcrumb, BreadcrumbItem ,
  ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from "reactstrap";

const Dashboard = (props) => {

  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);
    return (
    <>
      <div>
      <Alert color="primary">
        This is a primary alert — check it out!
      </Alert>
      <Alert color="secondary">
        This is a secondary alert — check it out!
      </Alert>

      {/* Badge */}
      
      <Badge color="primary">Primary</Badge>
      <Badge color="secondary">Secondary</Badge>

      {/* Breadcrumb */}
      <Breadcrumb tag="nav" listTag="div">
        <BreadcrumbItem tag="a" href="#">Home</BreadcrumbItem>
        <BreadcrumbItem tag="a" href="#">Library</BreadcrumbItem>
        <BreadcrumbItem tag="a" href="#">Data</BreadcrumbItem>
        <BreadcrumbItem active tag="span">Bootstrap</BreadcrumbItem>
      </Breadcrumb>

      <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Button Dropdown
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Header</DropdownItem>
        <DropdownItem disabled>Action</DropdownItem>
        <DropdownItem>Another Action</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Another Action</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
    </div>
   </>
  );
}


export default  Dashboard;