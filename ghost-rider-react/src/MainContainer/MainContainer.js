import React, { Component } from "react";
import Aux from '../hoc/Aux';
import TitleBar from '../TitleBar'
import Nav from '../Nav'
import CarsContainer from '../CarsContainer/CarsContainer';
import InfoContainer from '../InfoContainer/InfoContainer';
import { Container, Row, Col } from 'reactstrap';

class MainContainer extends Component {
    render() {
        return (
          <Aux>
          	
            <Nav />
            <TitleBar />
            <Container>
            <Row>
            <Col>
            <CarsContainer />
            </Col>
            <Col>
            <InfoContainer />
            </Col>
            </Row>
            </Container>
          </Aux>

        )
    }
}

export default MainContainer;
