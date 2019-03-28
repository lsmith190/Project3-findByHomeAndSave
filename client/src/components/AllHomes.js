import React, { Component } from 'react';
import axios from 'axios'
import Home from './Home.js'
import styled from 'styled-components'

const AddHome = styled.h2`
    display: flex;
    justify-content: center;
`;

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
                            userId={id}
                        />
                    )
                })}</h1>

                <AddHome>
                <h2><a className="btn btn-light" href={`/user/${id}/homes/new`}>+ Add Home</a></h2>
                </AddHome>
            
            </div>
        );
    }
}

export default AllHomes;