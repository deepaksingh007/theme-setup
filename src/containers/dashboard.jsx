
import React, { useState } from 'react';
// reactstrap components
import {
  Alert,
  Badge,
  Breadcrumb, BreadcrumbItem ,
  ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem,
  Button, ButtonGroup,
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle ,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Row, Col
} from "reactstrap";

const items = [
  {
    src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];
const Dashboard = (props) => {

  const [dropdownOpen, setOpen] = useState(false);

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });
  const toggle = () => setOpen(!dropdownOpen);
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
       <h1>Colors</h1>  
        <p className="text-muted">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>
        <p className="text-primary">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
        <p className="text-success">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
        <p className="text-info">Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
        <p className="text-warning">Etiam porta sem malesuada magna mollis euismod.</p>
        <p className="text-danger">Donec ullamcorper nulla non metus auctor fringilla.</p>
        <p className="text-white">Etiam porta sem malesuada ultricies vehicula.</p>

        <h1>Colors</h1>
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
    {/* ButtonGroup */}
    <ButtonGroup>
      <Button>Left</Button>
      <Button>Middle</Button>
      <Button>Right</Button>
    </ButtonGroup> 
    {/* Button */}
      <Button color="primary">primary</Button>
      <Button color="secondary">secondary</Button>
      {/* card */}

      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>

      <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
    </div>

    <Row>
      <Col sm="6">
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      <Col sm="6">
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
    </Row>
   </>
  );
}


export default  Dashboard;