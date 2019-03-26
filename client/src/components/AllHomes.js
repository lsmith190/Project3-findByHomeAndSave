import React, { Component } from 'react';
import axios from 'axios'
import Home from './Home.js'

class AllHomes extends Component {
    state = {
        allhomes: []
    }

    componentDidMount = () => {
        this.getAllHomes()
    }

    getAllHomes = () => {
        const id = this.props.match.params.userId
        axios.get(`/api/user/${id}/homes`)
        .then(res => {
        this.setState({
          allhomes: res.data
        });
        })
      }

    render() {
        return (
            <div>
                <h1>{this.state.allhomes.map(home => {
                    return(
                        <Home 
                            key={home._id}
                            home={home}
                        />
                    )
                })}</h1>
                <a class="btn btn-light" href="/">+ Add Home</a>
            
            </div>
        );
    }
}

export default AllHomes;