import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


class HomePage extends Component {
    state = {
        user: []
    }

    componentDidMount() {
        this.users()
    }

    users = () => {
        axios.get('/api/user').then(res => {
            this.setState({user: res.data})
        })
    }

    newUser = () => {
        const payload = this.state.newHome
        axios.post('/api/user', payload).then(res => {
            this.setState({user: res.data})
        })
    }
    
    render() {
        const user = this.state.user.map((user) => {
            return user._id
        })
        return (
            <div style= {{textAlign: "center", padding: "50px"}}>
                <h1 style={{textAlign: "center"}}>Login</h1>
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
                    <Link to={`user/${user}/homes`}>Login</Link>
                </form>

            </div>

        )
    }
}

export default HomePage