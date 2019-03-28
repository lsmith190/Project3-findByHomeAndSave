import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import {LoginPg} from '../styles/Login.js'

class NewUser extends Component {
    state = {
        user: {}
    }

    _handleChange = (event) => {
        const attributeName = event.target.name;
        const attributeValue = event.target.value;
        const user = { ...this.state.user };
        user[attributeName] = attributeValue;
        this.setState({ user })
};

newUser = () => {
    const payload = this.state.user
    axios.post('/api/user', payload)
    .then(res=> {
        console.log(res.data)
    })
}

    render() {
        const id = this.state.user._id
        return (
            <LoginPg>
            <div style= {{textAlign: "center", padding: "50px"}}>
                <h1 style={{textAlign: "center"}}>findByHomeAndSave</h1>
                {/* <Link to={`user/${user}/homes`} key={user._id}>{user}</Link> */}

                <form onSubmit={this.newUser}> 
                    <div>
                    <label htmlFor="name">Name: </label>
                        <input
                            type="text"
                            name="name"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                    <label htmlFor="password">Password: </label>
                        <input
                            type="text"
                            name="password"
                            onChange={this.handleChange}
                        />
                       
                    </div>
                    <Link to={'/'}>Login</Link>
                    {/* <input type="submit" value="Login"/> */}
                </form>


            </div>
            </LoginPg>

        )
    }
}

export default NewUser;