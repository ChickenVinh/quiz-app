import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className = "App">
      <Container>
        <Row>
          <Col className = "d-flex justify-content-center"><h3>Question</h3></Col>
        </Row>
        <Row>
          <Col className = "d-flex justify-content-center">Answer 1</Col>
          <Col className = "d-flex justify-content-center">Answer 2</Col>
        </Row>
        <Row>
          <Col className = "d-flex justify-content-center">Answer 3</Col>
          <Col className = "d-flex justify-content-center">Answer 4</Col>
        </Row>
        <Row>
          <Col className = "d-flex justify-content-center">Next Question</Col>
        </Row>
      </Container>
    </div>   
  );
}

export default App;
