import React from 'react';


const Cars = (props) => {
    const carList = props.cars.map((car, i) => {
        console.log(car, ' car id')
        return (
            <li key={car.id}>
                <span>{car.make}</span><br />
                <span>{car.model}</span><br />
                <button onClick={props.deleteCar.bind(null, car.id)}>Delete</button>
                <button onClick={props.showModal.bind(null, car.id)}>Edit</button>

            </li>
          )
    })

    return (
        <ul>
            {carList}
        </ul>
    )

};


export default Cars;
