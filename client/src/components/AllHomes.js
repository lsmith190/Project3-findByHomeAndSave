import React, { Component } from 'react';
import axios from 'axios'
import Home from './Home.js'
import styled from 'styled-components'
import { Link } from "react-router-dom";

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

      deleteUser = () => {
        const id = this.props.match.params.userId;
        axios.delete(`/api/user/${id}`).then(() => {
          this.props.history.goBack();
        });
      };

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
                <div><Link to={`/user/${id}/homes/new`}>+ Add Home</Link></div>
                <div><Link to='/' onClick={this.deleteUser}>+ Delete Account</Link></div>
                <div><Link to='/'>+ Back to home</Link></div>
                </AddHome>
            
            </div>
        );
    }
}

export default AllHomes;