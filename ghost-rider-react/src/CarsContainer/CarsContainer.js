import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import { CustomInput, Form, FormGroup, Label } from 'reactstrap';
import CarOSell from '../CarOSell'

class CarsContainer extends Component {
render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleCheckbox">HERE ARE THE CARS</Label>
          
        </FormGroup>
        <CarOSell />
        <FormGroup>
          <Label for="exampleCheckbox">Are You a Smoker?</Label>
          <div>
            <CustomInput type="radio" id="exampleCustomRadio" name="customRadio" label="NO Smoking" />
            <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="Smoking OK" />
            <CustomInput type="radio" id="exampleCustomRadio3" label="Vape ONLY" disabled />
          </div>
        </FormGroup>
        <FormGroup>
          <Label for="exampleCheckbox">Trim Packages</Label>
          <div>
          	<CustomInput type="checkbox" id="exampleCustomInline" label="S" inline />
            <CustomInput type="checkbox" id="exampleCustomInline" label="XT" inline />
            <CustomInput type="checkbox" id="exampleCustomInline2" label="LT" inline />
          </div>
        </FormGroup>
        <FormGroup>
          <Label for="exampleCustomSelect">How Long Do You Want to Ride?</Label>
          <CustomInput type="select" id="exampleCustomSelect" name="customSelect">
            <option value="">Rental Duration</option>
            <option>One Day</option>
            <option>3 Days</option>
            <option>One Week</option>
            <option>2 Weeks</option>
            <option>One Month</option>
          </CustomInput>
        </FormGroup>
        
        
        
      </Form>
    );
  }
}
    
export default CarsContainer;





  