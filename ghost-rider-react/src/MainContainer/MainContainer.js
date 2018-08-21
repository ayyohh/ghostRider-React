import React, { Component } from "react";
import Aux from '../hoc/Aux';
import CarsContainer from '../CarsContainer/CarsContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import NavbarComponent from '../Login/navbar';
import classes from './MainContainer.css';
import WelcomePageModal from './WelcomePageModal';


class MainContainer extends Component {
  constructor() {
    super();
    this.state = {
      modal: true,
    }
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
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


            <NavbarComponent />
            <img src={require('./Ghost-Rider-Final.png')} className="logo" /><br/>
            <CarsContainer />
          </div>

        )
    }
}

export default MainContainer;
