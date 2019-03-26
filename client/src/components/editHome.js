import React, { Component } from 'react';
import axios from 'axios'

class editHome extends Component {
    state = {
        editHome: {
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
        const editHome = { ...this.state.editHome };
        editHome[attributeName] = attributeValue;
        this.setState({ editHome })
};

    editHome = (evt) => {
    evt.preventDefault();
    const payload = this.state
    const id = this.props.match.params.userId
    this.props.editHome(this.state.editHome)
    axios
        .post(`/api/user/${id}/homes/edit`, payload)
        .then((res => {
            this.setState({"redirect": true})
        }))
        .catch(err => console.log(err))
       
}

    render() {
        return (
            <form>
            <div>
                    <label htmlFor="address">Address: </label>
                    <input 
                    value={this.state.editHome.address} 
                    type="text" 
                    name="address" 
                    onChange={this._handleChange}
                    />
            </div>
            <div>
                    <label htmlFor="numberOfBeds">How many bedrooms? </label>
                    <input
                    value={this.state.editHome.numberOfBeds}
                    type="number"
                    name="numberOfBeds"
                    onChange={this._handleChange}
                    />
            </div>
            <div>
                    <label htmlFor="price">Price: </label>
                    <input
                    value={this.state.editHome.price}
                    type="number"
                    name="price"
                    onChange={this._handleChange}
                    />
            </div>
            <div>
                    <label htmlFor="comments">Comments on this home: </label>
                    <input
                    value={this.state.editHome.comments}
                    type="text"
                    name="comments"
                    onChange={this._handleChange}
                    />
            </div>
            <div>
                    <label htmlFor="image">Image Link: </label>
                    <input
                    value={this.state.editHome.image}
                    type="text"
                    name="image"
                    onChange={this._handleChange}
                    />
            </div>
            <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default editHome;