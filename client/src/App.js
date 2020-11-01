import './App.css';
import { Form, Modal, Container, Button } from 'react-bootstrap'
import React from 'react';
import axios from "axios";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={apiResponse:""};
  }

  componentDidMount = () => {
    axios.get("/users").then(response=>{
      console.log(response);
    });
  }

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
