import './App.css';
import { Row, Col, Form, Modal, Container, Button, FormControl } from 'react-bootstrap'
import React from 'react';
import axios from "axios";


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={apiResponse:""};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    let formElements = event.target.elements;
    let oppName = formElements.formOpportunityName.value;
    let orgName = formElements.formOrgName.value;
    let contactEmail = formElements.formOrgEmail.value;
    console.log(formElements)
    // let checkboxes = formElements.formOppType;




  }

  // componentDidMount = () => {
  //   axios.get("/users").then(response=>{
  //     console.log(response);
  //   });
  // }

  render() {
    return (

      <div className="App">
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Organization Database Form</Modal.Title>
          </Modal.Header>
          <Form onSubmit={this.handleSubmit}>
            <Modal.Body>
              <Container style={{ textAlign: "left" }}>
                <Form.Group controlId="formOpportunityName">
                  <Form.Label>Opportunity Name</Form.Label>
                  <Form.Control required type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group controlId="formOrgName">
                  <Form.Label>Organziation Name</Form.Label>
                  <Form.Control required type="text" placeholder="Enter organization" />
                </Form.Group>
                <Form.Group controlId="formOrgEmail">
                  <Form.Label>Contact Email</Form.Label>
                  <Form.Control required type="email" placeholder="email@example.com"></Form.Control>
                </Form.Group>
                <Form.Group controlId="formOppType">
                  <Form.Label>Type of Opportunity/Opportunities</Form.Label>
                  <Row>
                  <Col>
                  <Form.Check type="checkbox" label="Poverty Support" id = "pos"/>
                  </Col>
                  <Col>
                  <Form.Check type="checkbox" label="Religious-Based Service" id="rbs"/>
                  </Col>
                  </Row>
                  <Row>
                    <Col>
                    <Form.Check type="checkbox" label="Environmental Advocacy" id="ea"/>
                    </Col>
                    <Col>
                    <Form.Check type="checkbox" label="Animal Shelters" id="as"/>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                  <Form.Check type="checkbox" label="Support Groups" id="sg"/>
                  </Col>
                  <Col>
                  <Form.Check type="checkbox" label="LGBTQ+ Outreach" id="lo"/>
                  </Col>
                  </Row>
                  <Row>
                    <Col>
                  <Form.Check type="checkbox" label="Disaster Relief" id="rf"/>
                  </Col>
                  <Col>
                  <Form.Check type="checkbox" label="Political/Social Advocacy" id="psa"/>
                  </Col>
                  </Row>
                  <Row>
                    <Col>
                  <Form.Check type="checkbox" label="Minority Groups" id="mg"/>
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group controlId="formLocType">
                  <Form.Label>Location Type</Form.Label>
                  <Form.Control required as="select">
                    <option>Virtual</option>
                    <option>In-Person</option>
                    <option>Both</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="formLocation">
                  <Form.Label>Location</Form.Label>
                  <Form.Control type="text" placeholder="Atlanta, GA"></Form.Control>
                </Form.Group>
                <Form.Group controlId="formLink">
                  <Form.Label>Link</Form.Label>
                  <Form.Control type="link" placeholder="https://www.example.com"></Form.Control>
                </Form.Group>
                <Form.Group controlId="formDate">
                  <Form.Label>Select Date Range</Form.Label>
                  <Row>
                    <Col>
                      <Form.Text muted>Start</Form.Text>
                      <Form.Control type="date" placeholder="MM/DD/YYYY"></Form.Control>
                    </Col>
                    <Col>
                    <Form.Text muted>End</Form.Text>
                      <Form.Control type="date" placeholder="MM/DD/YYYY"></Form.Control>
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group controlId="formDesc">
                  <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea" placeholder="Description"></Form.Control>
                </Form.Group>
                <Form.Group controlId="formMinAge">
                  <Form.Label>Minimum Age</Form.Label>
                  <Form.Control required as="select">
                    <option>13</option>
                    <option>14</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                  </Form.Control>
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
