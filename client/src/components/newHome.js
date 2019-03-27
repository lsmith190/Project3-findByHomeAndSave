import React, { Component } from 'react';
import axios from 'axios';
import { Redirect} from "react-router-dom";

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
        const payload = this.state.newHome
        const id = this.props.match.params.userId
        axios
            .post(`/api/user/${id}/homes/new`, payload)
            .then((res => {
                this.setState({"redirect": true})
            }))
            .catch(err => console.log(err))
            
    }

    render() {
        const id = this.props.match.params.userId
        if (this.state.redirect) {
            return <Redirect to={`/user/${id}/homes`}/>
        } else {
        return (
            <form onSubmit={this.addNewHome}>
            <div>
                    <label htmlFor="address">Address: </label>
                    <input
                    type="text" 
                    name="address" 
                    onChange={this._handleChange}
                    />
            </div>
            <div>
                    <label htmlFor="numberOfBeds">How many bedrooms? </label>
                    <input
                    type="number"
                    name="numberOfBeds"
                    onChange={this._handleChange}
                    />
            </div>
            <div>
                    <label htmlFor="price">Price: </label>
                    <input
                    type="number"
                    name="price"
                    onChange={this._handleChange}
                    />
            </div>
            <div>
                    <label htmlFor="comments">Comments on this home: </label>
                    <input
                    type="text"
                    name="comments"
                    onChange={this._handleChange}
                    />
            </div>
            <div>
                    <label htmlFor="image">Image Link: </label>
                    <input
                    type="text"
                    name="image"
                    onChange={this._handleChange}
                    />
            </div>
            <input type="submit" value="Submit" />
            </form>
        )
    }
}
}

export default NewHome