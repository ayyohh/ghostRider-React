import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Cars from './Cars';
import CreateCar from './CRUDCars/AddCar';
import EditCar from './CRUDCars/EditCar';
import EditComment from './CRUDComments/EditComment';
import classes from './CarsContainer.css';

class CarsContainer extends Component {
  constructor() {
    super();
    this.state = {
      cars: [],
      comments: [],
      showEdit: false,
      editCarId: null,
      carToEdit: {
        name: '',
      },
      showCommentEdit: false,
      editCommentId: null,
      commentToEdit: {
        name: '',
      },
      modal: false,
      }
      this.toggle = this.toggle.bind(this);
    }

    toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }




  componentDidMount() {
    this.getCars().then((cars) => {
      this.setState({ cars: cars})
    }).catch((err) => {
      console.log(err);
    });
    this.getComment().then((comments) => {
      this.setState({ comments: comments})
    }).catch((err) => {
      console.log(err);
    })
  }

//======================== Cars API calls ==================================================

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
      const deleteCar = await fetch('http://127.0.0.1:8000/api/cars/' + id, {
        method: 'DELETE'
      });
      console.log(deleteCar, 'this is delete car');

      if (deleteCar.status === 204) {
                this.setState({ cars: this.state.cars.filter((car, i) => car.id !== id) });
            } else {
                console.log('you fucked');
            }
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
        if (car.id === this.state.editCarId) {
          car.make = editResponseJson.make;
          car.model = editResponseJson.model;
          car.year = editResponseJson.year;
        }
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


  //======================== Comments API calls ==================================================

  getComment = async () => {
    const comments = await fetch('http://127.0.0.1:8000/api/comments/');
    const commentsJson = await comments.json();
    console.log(commentsJson, 'comments JSON');
    console.log(comments, 'this is comments');
    return commentsJson
  }


  addComment = async (comment, e) => {
    e.preventDefault();
    try {
      const createdComment = await fetch('http://127.0.0.1:8000/api/comments/', {
        method: 'POST',
        body: JSON.stringify(comment),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const createdCommentJson = await createdComment.json();
      this.setState({ comments: [...this.state.comments, createdCommentJson] });
    } catch (err) {
        console.log(err)
    }
  }


  deleteComment = async (id, e) => {
    e.preventDefault();
    console.log('deleteComment function is being called, this is the id: ', id);
    try {
      const deleteComment = await fetch('http://127.0.0.1:8000/api/comments/' + id, {
        method: 'DELETE'
      });
      console.log(deleteComment, 'this is delete car');

      if (deleteComment.status === 204) {
                this.setState({ comments: this.state.comments.filter((comment, i) => comment.id !== id) });
            } else {
                console.log('you fucked');
            }
    } catch(err) {
        console.log(err);
    }
  }

  showCommentModal = (id, e) => {
  // i comes before e, when called with bind
    const commentToEdit = this.state.comments.find((comment) => comment.id === id)
    console.log(commentToEdit, ' commentToEdit')
    console.log(id);
    this.setState({
      showCommentEdit: true,
      editCommentId: id,
      commentToEdit: commentToEdit
    });
  }


  closeAndEditComment = async (e) => {
    console.log('close and edit');
    e.preventDefault();
    try {
      const editResponse = await fetch('http://127.0.0.1:8000/api/comments/' + this.state.editCommentId, {
        method: 'PUT',
        body: JSON.stringify(this.state.commentToEdit),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const editResponseJson = await editResponse.json();
      const editedCommentArray = this.state.comments.map((comment) => {
        if (comment.id === this.state.editCommentId) {
          comment.comment = editResponseJson.comment;
        }
          return comment
      });
      console.log(editResponseJson, 'this edit editResponseJson');
      console.log(editedCommentArray, 'this editedCommentArray');
      this.setState({
        comment: editedCommentArray,
        showCommentEdit: false
      });
    } catch (err) {
      console.log(err);
    }
  }


  handleCommentFormChange = (e) => {
    this.setState({
      commentToEdit: {...this.state.commentToEdit, [e.target.name]: e.target.value}
    })
  }



//========================== What's being returned (displayed)================================================


    render() {
        return (
            <div>
              <div className="addCarBTN">
                <Button color="primary" onClick={this.toggle}>Add a Car!</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                <ModalHeader toggle={this.toggle}>Add Car!</ModalHeader>
                  <ModalBody>

                    <CreateCar addCar={this.addCar} toggle={this.toggle} fileChangedHandler={this.fileChangedHandler} uploadHandler={this.uploadHandler} />

                  </ModalBody>
                <ModalFooter>
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
            </Modal>
          </div>

              <Cars cars={this.state.cars} deleteCar={this.deleteCar} showModal={this.showModal} comments={this.state.comments} addComment={this.addComment} deleteComment={this.deleteComment} showCommentModal={this.showCommentModal} />

              {this.state.showCommentEdit ? <EditComment closeAndEditComment={this.closeAndEditComment} handleCommentFormChange={this.handleCommentFormChange} commentToEdit={this.state.commentToEdit} /> : null}

              {this.state.showEdit ? <EditCar closeAndEdit={this.closeAndEdit} handleFormChange={this.handleFormChange} carToEdit={this.state.carToEdit} /> : null}
            </div>
        )
    }
}

export default CarsContainer;
