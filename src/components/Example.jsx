import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import LeftComponent from './LeftComponent';
import MiddleComponent from './MiddleComponent';
import RightComponent from './RightComponent';

const Example = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <LeftComponent />
        </Col>
        <Col>
          <MiddleComponent />
        </Col>
        <Col>
          <RightComponent />
        </Col>
      </Row>
    </Container>
  );
}

export default Example;