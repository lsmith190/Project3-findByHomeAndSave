import React, { Component } from 'react'

class HomePage extends Component {
    state = {
        user: ''
    }

    componentDidMount() {
        this.setState({ user: 'Lindsey' })
    }
    
    render() {
        return (
            <div>
                <h1>HELLO {this.state.user}</h1>
            </div>
        )
    }
}

export default HomePage