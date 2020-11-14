import './App.css';
import { Row, Col, Form, Modal, Container, Button, FormControl } from 'react-bootstrap'
import React from 'react';
import axios from "axios";
//Need to add error modal if there is an opportunity already in database

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={apiResponse:"", isOpen:false};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this)
  }
  
  handleOpen(){
    this.setState({
      isOpen: true
    })
  }

  handleClose(){
    this.setState({
      isOpen: false
    })
  }

  handleSubmit(event){
    event.preventDefault();
    let formElements = event.target.elements;
    console.log(formElements)
    let oppName = formElements.formOpportunityName.value;
    let orgName = formElements.formOrgName.value;
    let contactEmail = formElements.formOrgEmail.value;
    
    function calcCheckboxes(){
      let result = [];
      for(let i = 0; i < formElements.length;i++){
        if(formElements[i].type === "checkbox"){
            if(formElements[i].checked){
              result.push(formElements[i].value)
            }
        }
      }
      return result;
    }

    let opportunityType = calcCheckboxes();
    let locationType = formElements.formLocType.value;
    let location = formElements.formLocation.value;
    let link = formElements.formLink.value;
    let startDate = formElements.formStartDate.value;
    let endDate = formElements.formEndDate.value;
    let description = formElements.formDesc.value;
    let min_age = formElements.formMinAge.value;
    let jsonFormat = new Object();
    jsonFormat.opp_name = oppName;
    jsonFormat.org_name = orgName;
    jsonFormat.opp_type = opportunityType;
    jsonFormat.email = contactEmail;
    jsonFormat.location_type = locationType.toLowerCase();
    jsonFormat.location = location;
    jsonFormat.link = link;
    jsonFormat.start_date = startDate;
    jsonFormat.end_date = endDate;
    jsonFormat.description = description;
    jsonFormat.min_age = min_age;
    console.log(jsonFormat)
    axios.post("http://34.201.174.195:9000/opportunity",jsonFormat)
          .then(response=> {
            console.log(response);
            //Add success modal
                         })
          .catch(err => {
            if(err.response.status == 201){
              console.log("headass");
              this.handleOpen();
            }
          })



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
                  <Form.Check type="checkbox" label="Poverty Support" value="Poverty Support"/>
                  </Col>
                  <Col>
                  <Form.Check type="checkbox" label="Religious-Based Service" value="Religious-Based Service"/>
                  </Col>
                  </Row>
                  <Row>
                    <Col>
                    <Form.Check type="checkbox" label="Environmental Advocacy" value="Environmental Advocacy"/>
                    </Col>
                    <Col>
                    <Form.Check type="checkbox" label="Animal Shelters" value="Animal Shelters"/>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                  <Form.Check type="checkbox" label="Support Groups" value="Support Groups"/>
                  </Col>
                  <Col>
                  <Form.Check type="checkbox" label="LGBTQ+ Outreach" value="LGBTQ+ Outreach"/>
                  </Col>
                  </Row>
                  <Row>
                    <Col>
                  <Form.Check type="checkbox" label="Disaster Relief" value="Disaster Relief"/>
                  </Col>
                  <Col>
                  <Form.Check type="checkbox" label="Political/Social Advocacy" value="Political/Social Advocacy"/>
                  </Col>
                  </Row>
                  <Row>
                    <Col>
                  <Form.Check type="checkbox" label="Minority Groups" value="Minority Groups" />
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
                  <Form.Control required type="text" placeholder="Atlanta, GA"></Form.Control>
                </Form.Group>
                <Form.Group controlId="formLink">
                  <Form.Label>Link</Form.Label>
                  <Form.Control required type="link" placeholder="https://www.example.com"></Form.Control>
                </Form.Group>
                  <Form.Label>Select Date Range</Form.Label>
                  <Row>
                    <Col>
                    <Form.Group controlId="formStartDate">

                      <Form.Text muted>Start</Form.Text>
                      <Form.Control required type="date" placeholder="MM/DD/YYYY"></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group controlId="formEndDate">

                    <Form.Text muted>End</Form.Text>
                      <Form.Control required type="date" placeholder="MM/DD/YYYY"></Form.Control>
                    </Form.Group>
                    </Col>
                  </Row>
                <Form.Group controlId="formDesc">
                  <Form.Label>Description</Form.Label>
                  <Form.Control required as="textarea" placeholder="Description"></Form.Control>
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
        
        <Modal show={this.state.isOpen} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Opportunity already exists!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Find another one</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      </div>
    );
  }
}

export default App;
