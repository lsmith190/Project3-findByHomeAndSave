import React, { Component } from 'react';
import axios from 'axios'

class AllHomes extends Component {
    state = {

    }

    componentDidMount = () => {
        this.getAllHomes()
    }

    getAllHomes = () => {
        axios.get('/api/allhomes').then(res => {
            this.setState({homes: res.data})
        })
    }


    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default AllHomes;