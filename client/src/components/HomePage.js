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
    
    render() {
        const user = this.state.user.map((user) => {
            return user._id
        })
        return (
            <div>
                {/* {
                    this.state.user.map((user) => {
                        return(
                            <Link to={'/homes'}>Enter Site</Link>
                            
                        )
                    })
                } */}
                <Link to={`user/${user}/homes`} key={user._id}>{user}</Link>
            </div>
        )
    }
}

export default HomePage