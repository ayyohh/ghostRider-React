import React from 'react';


const EditCar = (props) => {

    return (
        <div>
            <h4> Edit Car</h4>
            <form onSubmit={props.closeAndEdit}>
                <label>
                    Edit Car:
                    <input type="text" name="make" onChange={props.handleFormChange} value={props.carToEdit.make} />
                    <input type="text" name="model" onChange={props.handleFormChange} value={props.carToEdit.model} />
                    <input type="text" name="year" onChange={props.handleFormChange} value={props.carToEdit.year} />
                </label>
                <input type='Submit' value="Edit Car" />
            </form>
        </div>

    )
}

export default EditCar;
