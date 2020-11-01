import './App.css';
import { Form , Modal, Container, Button} from 'react-bootstrap'
import React from 'react';
import Mongoose from 'mongoose';

var mongoDB = 'mongodb://127.0.0.1/my_database';


class App extends React.Component {

  render() {
    return (
      
      <div className="App">
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Organization Database Form</Modal.Title>
          </Modal.Header>
          <Form>
          <Modal.Body>
              <Container style={{ textAlign: "left" }}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit">Submit</Button>
          </Modal.Footer>
          </Form>
        </Modal.Dialog>

      </div>
  );
  }
}

export default App;
