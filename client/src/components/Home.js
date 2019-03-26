import React, { Component } from 'react';

class Home extends Component {
    render(props) {
        return (
            <div>
                <h6>
                <a class="btn btn-light" href="/">+ Edit Home</a>
                <a class="btn btn-light" href="/">+ Delete Home</a>
                <img src={this.props.home.image} alt="home"/>
                {this.props.home.address}
                </h6>
            </div>
        );
    }
}

export default Home;