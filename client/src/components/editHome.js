import React, { Component } from 'react';
import axios from 'axios'
import { Redirect} from "react-router-dom";

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

    componentDidMount = () => {
        this.getAllHomes()
    }

    getAllHomes = () => {
        const id = this.props.match.params.userId
        axios.get(`/api/user/${id}/homes/${this.props.match.params.homeId}`)
        .then(res => {
        this.setState({
          editHome: {address: res.data.address, 
                     numberOfBeds: res.data.numberOfBeds, 
                     price: res.data.price, 
                     comments: res.data.comments, 
                     image: res.data.image}
        });
        })
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
    const payload = this.state.editHome
    console.log(payload)
    const id = this.props.match.params.userId
    const homeId = this.props.match.params.homeId
    axios
        .put(`/api/user/${id}/homes/${homeId}/edit`, payload)
        .then((res => {
            this.setState({"redirect": true})
        }))
        .catch(err => console.log(err))
       
}
//controller: /api/user/:id/homes/
//:homeId/edit

    render() {
        const id = this.props.match.params.userId
        if (this.state.redirect) {
            return <Redirect to={`/user/${id}/homes`}/>
        } else {
        return (
            <form onSubmit={this.editHome}>
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
}

export default editHome;