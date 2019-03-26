import React, { Component } from 'react';
import axios from 'axios'

class editHome extends Component {
    state = {
        editHome: {
            address: '',
            numberOfBeds: '',
            price: '',
            rating: '',
            image: ''
        },
        redirect: false
    }

    componentDidMount = () => {
        this.editHome()
    }

    editHome = () => {
        const id = this.props.match.params.userId
        axios.get(`/api/user/${id}/homes/edit`)
        .then(res => {
        this.setState({
          editHome: res.data
        });
        })
      }

    render() {
        return (
            <form>
            <div>
                    <label htmlFor="address">Address: </label>
                    <input 
                    value={this.state.homes.address} 
                    type="text" 
                    name="address" 
                    onChange={this._handleChange}
                    />
            </div>
            <div>
                    <label htmlFor="numberOfBeds">How many bedrooms? </label>
                    <input
                    value={this.state.homes.numberOfBeds}
                    type="number"
                    name="numberOfBeds"
                    onChange={this._handleChange}
                    />
            </div>
            <div>
                    <label htmlFor="price">Price: </label>
                    <input
                    value={this.state.homes.price}
                    type="number"
                    name="price"
                    onChange={this._handleChange}
                    />
            </div>
            <div>
                    <label htmlFor="rating">Rate this home: </label>
                    <input
                    value={this.state.homes.rating}
                    type="number"
                    name="rating"
                    onChange={this._handleChange}
                    />
            </div>
            <div>
                    <label htmlFor="image">Image Link: </label>
                    <input
                    value={this.state.homes.image}
                    type="text"
                    name="image"
                    onChange={this._handleChange}
                    />
            </div>
            </form>
        );
    }
}

export default editHome;