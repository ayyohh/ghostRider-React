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
              This is some placeholder block-level help text for the above input.
              It's a bit lighter and easily wraps to a new line.
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
                Option three is disabled
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