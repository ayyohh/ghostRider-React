import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Your ride. Is here..</h1>
        <img src="https://i.imgur.com/eP4nlId.jpg"  width="100%"/>
        <hr className="my-2" />
        <p>"It's like...airBnB...for cars!" -Satisfied A. Customer</p>
        <p className="lead">
          <Button color="primary">Ride Me</Button>
        </p>
      </Jumbotron>
    </div>
  );
};
export default Example;