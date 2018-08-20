import React from 'react';
import Comments from './Comments';
import CreateComment from './CRUDComments/AddComment';


const Cars = (props) => {
    const carList = props.cars.map((car, i) => {
        console.log(car, ' car id')
        console.log(props.comments[0], 'this props comments in Cars');


        return (
            <li key={car.id}>
                <span>{car.make}</span><br />
                <span>{car.model}</span><br />
                <button onClick={props.deleteCar.bind(null, car.id)}>Delete</button>
                <button onClick={props.showModal.bind(null, car.id)}>Edit</button>

                <Comments carID={car.id} comments={props.comments} deleteComment={props.deleteComment} showCommentModal={props.showCommentModal} />

                <CreateComment carID={'http://127.0.0.1:8000/api/cars/' + car.id} addComment={props.addComment} />
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
