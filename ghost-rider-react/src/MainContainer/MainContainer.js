import React, { Component } from "react";
import Aux from '../hoc/Aux';
import CarsContainer from '../CarsContainer/CarsContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from '../Login/navbar';
import classes from './MainContainer.css';


class MainContainer extends Component {
    render() {
        return (
          <div className='mainContainer'>
            <NavbarComponent />
            <img src={require('./Ghost-Rider-Final.png')} className="logo" />
            <CarsContainer />
          </div>

        )
    }
}

export default MainContainer;
