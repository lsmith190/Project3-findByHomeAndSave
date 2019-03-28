import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios'
// import styled from 'styled-components'

class Home extends Component {
    state = {
        home: []
    }

    getHomes = () => {
        const id = this.props.userId;
        axios.get(`/api/user/${id}/homes`)
        .then((res) => {
            this.setState({home: res.data})
        })
    }

    deleteHome = () => {
        const id = this.props.userId
        const homeId = this.props.home._id
        axios.delete(`/api/user/${id}/homes/${homeId}`)
        .then(res => {
            const copiedHome = [...this.state.home]
            console.log(copiedHome)
            const filteredHomes = copiedHome.filter(home => home._id !== res.data._id)
            console.log(filteredHomes)
            this.setState({ home: filteredHomes, redirectToHome: true })
        })
      }

    render(props) {
        const id = this.props.userId
        return (

            <div>
                <h6 style={{textAlign:"center", width:350}}>
                <div><Link to={`/user/${id}/homes/${this.props.home._id}/edit`}>+ Edit Home</Link></div>
                <div><Link to={`/user/${id}/homes`} onClick={this.deleteHome}>+ Delete Home</Link></div>
                <div><img src={this.props.home.image} height="200" width="200" alt="home"/></div>
                <div>{this.props.home.address}</div>
                <div>Listing price: {this.props.home.price}</div>
                <div>{this.props.home.numberOfBeds} Beds</div>
                <div>Your comments about this home: {this.props.home.comments}</div>
                </h6>
            </div>
        );
    }
}

export default Home;