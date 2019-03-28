import React, { Component } from 'react'
import axios from 'axios'
import User from './User'
// import styled from 'styled-components'


class HomePage extends Component {
    state = {
        user: [],
    }

    componentDidMount() {
        this.users()
    }

    users = () => {
        axios.get('/api/user').then(res => {
            this.setState({user: res.data})
        })
    }

    
    render() {
       const user = this.state.user.map((user) => {
           return <User {...user} key={user._id}>{user.name}</User>
       })

        return (
            <div>
                {user}
            </div>

        )
    }
}

export default HomePage