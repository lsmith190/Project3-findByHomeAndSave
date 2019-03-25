import React, { Component } from 'react';

class Home extends Component {
    render(props) {
        console.log(this.props)
        return (
            <div>
                <img src={this.props.home.image} alt="home"/>
                {this.props.home.address}
            </div>
        );
    }
}

export default Home;