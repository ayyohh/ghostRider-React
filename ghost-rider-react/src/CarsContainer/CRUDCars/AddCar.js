import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import classes from './addCar.css';


class CreateCar extends Component {
    constructor() {
        super();

        this.state = {
            make: '',
            model: '',
            year: '',
            img_url: '',
            description: '',
            selectedFile: '',
        }
    }
    updateCar = (e) => {

        this.setState({ [e.currentTarget.name]: e.currentTarget.value });

    }

    fileChangedHandler = (event) => {
      this.setState({selectedFile: event.target.files[0]})
    }

    uploadHandler = () => {
      console.log(this.state.selectedFile, 'this is selectedFile')
      this.props.toggle();
    }




    render() {
        return (

          <div className='addCarForm'>
          <p>Here you can put a car up for rent!  Make sure to fill out the following form completely.</p>
          <p>Note - In description, make sure you inlude details about renting or a way to get in contact with you</p>
            <form onSubmit={this.props.addCar.bind(this, this.state)} id="addCarForm">
              <input type="text" name="make" onChange={this.updateCar} placeholder='make' /><br/>
              <input type="text" name="model" onChange={this.updateCar} placeholder='model' /><br/>
              <input type="text" name="year" onChange={this.updateCar} placeholder='year' /><br/>
              <input type="text" name="img_url" onChange={this.updateCar} placeholder='img_url' /><br/>
              <input type="text" name="description" onChange={this.updateCar} placeholder='description'/>
              <input type="file" onChange={this.fileChangedHandler} />
              <button onClick={this.uploadHandler} >Upload!</button>
            </form>
          </div>
        )
    }
}

export default CreateCar;
