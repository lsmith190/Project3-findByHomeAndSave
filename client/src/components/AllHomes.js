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
        const id = this.props.match.params.userId
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


                <h2><a class="btn btn-light" href={`/user/${id}/homes/new`}>+ Add Home</a></h2>
            
            </div>
        );
    }
}

export default AllHomes;