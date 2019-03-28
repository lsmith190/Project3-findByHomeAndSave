import React, { Component } from 'react'
import axios from 'axios'
import User from './User'
// import styled from 'styled-components'
import {LoginPg} from '../styles/Login.js'
import { Link } from "react-router-dom";


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
            <LoginPg>

            <div>
                <h1>findByHomeAndSave</h1>
                <div><Link to={`/new`}>+ Create account</Link></div>
                {user}
            </div>
            </LoginPg>

        )
    }
}

export default HomePage