import React, { Component } from 'react';
import Cars from './Cars';
import CreateCar from './CRUDCars/AddCar';
import EditCar from './CRUDCars/EditCar';

class CarsContainer extends Component {
  constructor() {
    super();
    this.state = {
      cars: [],
      showEdit: false,
      editCarId: null,
      carToEdit: {
        name: '',
      }
    }
  }
  componentDidMount() {
    this.getCars().then((cars) => {
      this.setState({ cars: cars})
    }).catch((err) => {
      console.log(err);
    })
  }

  getCars = async () => {
    const cars = await fetch('http://127.0.0.1:8000/api/cars/');
    const carsJson = await cars.json();
    console.log(carsJson, 'cars JSON');
    console.log(cars, 'this is cars');
    return carsJson
  }
  addCar = async (car, e) => {
    e.preventDefault();
    try {
      const createdCar = await fetch('http://127.0.0.1:8000/api/cars/', {
        method: 'POST',
        body: JSON.stringify(car),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const createdCarJson = await createdCar.json();
      this.setState({ cars: [...this.state.cars, createdCarJson] });
    } catch (err) {
        console.log(err)
    }
  }
  deleteCar = async (id, e) => {
    e.preventDefault();
    console.log('deleteCar function is being called, this is the id: ', id);
    try {
      fetch('http://127.0.0.1:8000/api/cars/' + id, {
        method: 'DELETE'
      });
    } catch(err) {
        console.log(err);
    }
  }
  showModal = (id, e) => {
  // i comes before e, when called with bind
    const carToEdit = this.state.cars.find((car) => car.id === id)
    console.log(carToEdit, ' carToEdit')
    console.log(id);
    this.setState({
      showEdit: true,
      editCarId: id,
      carToEdit: carToEdit
    });
  }
  closeAndEdit = async (e) => {
    console.log('close and edit');
    e.preventDefault();
    try {
      const editResponse = await fetch('http://127.0.0.1:8000/api/cars/' + this.state.editCarId, {
        method: 'PUT',
        body: JSON.stringify(this.state.carToEdit),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const editResponseJson = await editResponse.json();
      const editedCarArray = this.state.cars.map((car) => {
        if (car.id === this.state.editCarId) {car.make = editResponseJson.make;}
          return car
      });
      this.setState({
        car: editedCarArray,
        showEdit: false
      });
    } catch (err) {
      console.log(err);
    }
  }
  handleFormChange = (e) => {
    this.setState({
      carToEdit: {...this.state.carToEdit, [e.target.name]: e.target.value}
    })
  }

    render() {
        return (
            <div>
              <Cars cars={this.state.cars} deleteCar={this.deleteCar} showModal={this.showModal} />
              <CreateCar addCar={this.addCar} />
              {this.state.showEdit ? <EditCar closeAndEdit={this.closeAndEdit} handleFormChange={this.handleFormChange} carToEdit={this.state.carToEdit} /> : null}
            </div>
        )
    }
}

export default CarsContainer;
