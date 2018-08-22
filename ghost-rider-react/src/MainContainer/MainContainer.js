import React, { Component } from "react";
import Aux from '../hoc/Aux';
import CarsContainer from '../CarsContainer/CarsContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import NavbarComponent from '../Navbar/navbar';
import classes from './MainContainer.css';
import WelcomePageModal from './WelcomePageModal';


class MainContainer extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      auth_token: '',
      modal: true,
    }
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  handleChange = (e) => {
    console.log(e.currentTarget.value);
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });

  }

  handleSubmit = async (e) => {
    console.log(this.props.csrf_token)
    e.preventDefault();
    const data = {...this.state, csrfmiddlewaretoken: this.props.csrf_token};
    console.log(data)
    const loginResponse = await fetch('http://localhost:8000/get_auth_token/', {
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify(
        data),
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': this.props.csrf_token,
      }
    });

    const parsedResponse = await loginResponse.json();
    console.log(parsedResponse);
    this.setState({auth_token:parsedResponse.token})

    if (parsedResponse.data === 'login successful') {
      // switch our route.
      // Programmatically switching to a new route.
      this.props.history.push('/');
    }
  }


    render() {
        return (
          <div className='mainContainer'>

          <div className="welcomePage">

            <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}></ModalHeader>
              <ModalBody>

                <WelcomePageModal />

              </ModalBody>
            <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Ghostrr</Button>
          </ModalFooter>
        </Modal>
      </div>


            <NavbarComponent username={this.state.username} password={this.state.password} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
            <img src={require('./Ghost-Rider-Final.png')} className="logo" /><br/>
            <CarsContainer />
          </div>

        )
    }
}

export default MainContainer;
