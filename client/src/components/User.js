import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class User extends Component {
    render(props) {
        return (
            <div>
                <Link to={`user/${this.props._id}/homes`}>{this.props.name}</Link>
            </div>
        );
    }
}

export default User;