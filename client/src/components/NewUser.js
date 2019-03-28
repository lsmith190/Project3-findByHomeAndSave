import React, { Component } from 'react';
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'
import { LoginPg } from '../styles/Login.js'

class NewUser extends Component {
    state = {
        user: {
            name: '',
            password: ''
        },
        redirect: false
    }

    handleChange = (event) => {
        const attributeName = event.target.name;
        const attributeValue = event.target.value;
        const user = { ...this.state.user };
        user[attributeName] = attributeValue;
        console.log(user)
        this.setState({ user })
    };

    newUser = () => {
        const payload = this.state.user
        axios.post('/api/user', { name: this.state.user.name, password: this.state.user.password })
            .then(res => {
                this.setState({ redirect: true })
            })
    }

    render() {
        // const id = this.state.user._id
        if (this.state.redirect) {
            return <Redirect to={"/"} />
        } else {
            return (
                <LoginPg>
                    <div style={{ textAlign: "center", padding: "50px" }}>
                        <h1 style={{ textAlign: "center" }}>findByHomeAndSave</h1>

                        <form>
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
                            <Link to={`/`}><input type="submit" value="Login" onClick={this.newUser}/></Link>
                        </form>


                    </div>
                </LoginPg>

            )
        }
    }
}

export default NewUser;