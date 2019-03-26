import React, { Component } from 'react';
import axios from 'axios';
// import { Redirect, Link } from "react-router-dom";

class NewHome extends Component {
    state = {
        newHome: {
            address: '',
            numberOfBeds: '',
            price: '',
            comments: '',
            image: ''
        },
        redirect: false
    }

    _handleChange = (event) => {
             const attributeName = event.target.name;
             const attributeValue = event.target.value;
             const newHome = { ...this.state.newHome };
             newHome[attributeName] = attributeValue;
             this.setState({ newHome })
     };
    
     addNewHome = (evt) => {
        evt.preventDefault();
        const id = this.props.match.params.userId
        this.props.addNewHome(this.state.newHome)
        axios
            .post(`/api/user/${id}/homes/new`, {
                address: this.state.newHome.address,
                numberOfBeds: this.state.newHome.numberOfBeds,
                price: this.state.newHome.price,
                comments: this.state.newShow.comments,
                image: this.state.newShow.image
            })
            
    }


    render() {
        return (
        //     <div>Hello</div>
            <form>
            <div>
                    <label htmlFor="address">Address: </label>
                    <input 
                    value={this.state.newHome.address}
                    type="text" 
                    name="address" 
                    onChange={this._handleChange}
                    />
            </div>
            <div>
                    <label htmlFor="numberOfBeds">How many bedrooms? </label>
                    <input
                    value={this.state.newHome.numberOfBeds}
                    type="number"
                    name="numberOfBeds"
                    onChange={this._handleChange}
                    />
            </div>
            <div>
                    <label htmlFor="price">Price: </label>
                    <input
                    value={this.state.newHome.price}
                    type="number"
                    name="price"
                    onChange={this._handleChange}
                    />
            </div>
            <div>
                    <label htmlFor="comments">Comments on this home: </label>
                    <input
                    value={this.state.newHome.comments}
                    type="text"
                    name="comments"
                    onChange={this._handleChange}
                    />
            </div>
            <div>
                    <label htmlFor="image">Image Link: </label>
                    <input
                    value={this.state.newHome.image}
                    type="text"
                    name="image"
                    onChange={this._handleChange}
                    />
            </div>
            </form>
        );
    }
};

export default NewHome;