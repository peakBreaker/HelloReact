import React from 'react';
import ReactDOM from 'react-dom';
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Button } from 'react-bootstrap';


function App(props) {
    const [count, setCount] = React.useState(0);

    return <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="2"></Col>
          <Col md="auto">
            <Row><Col><h3 className="text-center">How many fish can the dolphin eat?</h3></Col></Row>
            <Row>
              <Col>
                <p className="text-center">{props.text} : {count}</p>
              </Col>
            </Row>
            <Row>
              <Button block bsStyle="primary" bsSize='large' onClick={ () => setCount(count+1) }>🐟🐟🐟</Button>
            </Row>
          </Col>
          <Col xs lg="2"></Col>
        </Row>
    </Container>
}


ReactDOM.render(
    <App text="🐬" />,
    document.getElementById('root')
)
