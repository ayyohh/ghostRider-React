import React, { Component } from "react";
import InfoForm from './InfoForm'
import CarOSell from '../CarOSell'

class InfoContainer extends Component {
    render() {
        return (
            <div>
              HERE IS INFO ON A SPECIFIC CAR
              <InfoForm />
              <CarOSell />
            </div>
        )
    }
}

export default InfoContainer;
