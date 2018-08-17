import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Form>
        
        <FormGroup row>
          <Label for="exampleSelect" sm={2}>Select</Label>
          <Col sm={10}>
            <Input type="select" name="select" id="exampleSelect" />
          </Col>
        </FormGroup>
        
        <FormGroup row>
          <Label for="exampleText" sm={2}>Comments</Label>
          <Col sm={10}>
            <Input type="textarea" name="text" id="exampleText" />
          
            <FormText color="muted">
              Please include a descriptive comment to help other users 
              make a decision on whether or not to make this vehicle one 
              of their own selections.
            </FormText>
          </Col>
        </FormGroup>
        <FormGroup tag="fieldset" row>
          
          
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio2" />{' '}
                I would recommend this car
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio2" />{' '}
                I would not recommend this car
              </Label>
            </FormGroup>
            <FormGroup check disabled>
              <Label check>
                <Input type="radio" name="radio2" disabled />{' '}
                Undecided
              </Label>
            </FormGroup>
         
        </FormGroup>
        <FormGroup row>
          <Label for="checkbox2" sm={2}>MyCars</Label>
          <Col sm={{ size: 10 }}>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox2" />{' '}
                Save this car
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>
       
      </Form>
    );
  }
}