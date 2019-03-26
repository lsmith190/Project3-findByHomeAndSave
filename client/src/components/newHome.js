import React, { Component } from 'react';
import axios from 'axios';
// import { Redirect, Link } from "react-router-dom";

class NewHome extends Component {
    state = {
        newHome: {
            address: '',
            numberOfBeds: '',
            price: '',
            rating: '',
            image: ''
        },
        redirect: false
    }

    componentDidMount = () => {
        this.newHome()
    }

    newHome = () => {
        const id = this.props.match.params.userId
        axios.get(`/api/user/${id}/homes/new`)
        .then(res => {
        this.setState({
          newHome: res.data
        });
        })
      }


    render() {
        return (
            <div>Hello</div>
            // <form>
            // <div>
            //         <label htmlFor="address">Address: </label>
            //         <input 
            //         value={this.state.homes.address} 
            //         type="text" 
            //         name="address" 
            //         onChange={this._handleChange}
            //         />
            // </div>
            // <div>
            //         <label htmlFor="numberOfBeds">How many bedrooms? </label>
            //         <input
            //         value={this.state.homes.numberOfBeds}
            //         type="number"
            //         name="numberOfBeds"
            //         onChange={this._handleChange}
            //         />
            // </div>
            // <div>
            //         <label htmlFor="price">Price: </label>
            //         <input
            //         value={this.state.homes.price}
            //         type="number"
            //         name="price"
            //         onChange={this._handleChange}
            //         />
            // </div>
            // <div>
            //         <label htmlFor="rating">Rate this home: </label>
            //         <input
            //         value={this.state.homes.rating}
            //         type="number"
            //         name="rating"
            //         onChange={this._handleChange}
            //         />
            // </div>
            // <div>
            //         <label htmlFor="image">Image Link: </label>
            //         <input
            //         value={this.state.homes.image}
            //         type="text"
            //         name="image"
            //         onChange={this._handleChange}
            //         />
            // </div>
            // </form>
        );
    }
};

export default NewHome;