import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios'

class Home extends Component {
    state = {
        home: []
    }

    // componentDidMount() {
    //     this.getHomes()
    // }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps.home)
        console.log(this.props.home)
        if (prevState.home !== this.props.home) 
        // {
        //     this.getHomes()
        // }
        console.log('something')
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
        // this.setState({
        //   home: res.data
        // });
        console.log(res)
        })
      }

    render(props) {
        const id = this.props.userId
        console.log(id)
        return (
            <div>
                <h6>
                <Link to={`/user/${id}/homes/${this.props.home._id}/edit`}>+ Edit Home</Link>
                <Link to={`/user/${id}/homes/`} onClick={this.deleteHome}>+ Delete Home</Link>
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