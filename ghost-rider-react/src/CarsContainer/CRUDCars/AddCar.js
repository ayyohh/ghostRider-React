import React, { Component } from 'react';


class CreateCar extends Component {
    constructor() {
        super();

        this.state = {
            make: '',
            model: '',
            year: '',
            img_url: '',
        }
    }
    updateCar = (e) => {

        this.setState({ [e.currentTarget.name]: e.currentTarget.value });

    }

    render() {
        console.log(this.props, ' this is props')
        return (

                <div>
                    <form onSubmit={this.props.addCar.bind(this, this.state)}>


                            <input type="text" name="make" onChange={this.updateCar} placeholder='make' />

                            <input type="text" name="model" onChange={this.updateCar} placeholder='model' />
                            <input type="text" name="year" onChange={this.updateCar} placeholder='year' />
                            <input type="text" name="img_url" onChange={this.updateCar} placeholder='img_url' />


                        <input type='Submit' />
                    </form>
                </div>
    
        )
    }
}

export default CreateCar;
