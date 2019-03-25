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
        console.log(id)
        axios.get(`/api/user/${id}/homes`)
        .then(res => {
        this.setState({
          id: res.data._id,
          user: res.data
        });
        })
      }


    render() {
        return (
            <div>
                <h1>{this.state.allhomes.map(home => {
                    console.log(home)
                    return(
                        <Home 
                            key={home._id}
                            home={home}
                        />
                    )
                })}</h1>
                hello
            </div>
        );
    }
}

export default AllHomes;