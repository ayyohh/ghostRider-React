import React, { Component } from "react";
import Aux from '../hoc/Aux';
import CarsContainer from '../CarsContainer/CarsContainer';
import InfoContainer from '../InfoContainer/InfoContainer';

class MainContainer extends Component {
    render() {
        return (
          <Aux>
            <div>NAVBAR</div>
            <CarsContainer />
          </Aux>

        )
    }
}

export default MainContainer;
