import React, { Component } from 'react';

class Home extends Component {
    render(props) {
        // const id = this.props.match.params.userId
        return (
            <div>
                <h6>
                {/* <div><a class="btn btn-light" href={`/user/${id}/homes/edit`}>+ Edit Home</a></div> */}
                <div><a class="btn btn-light" href="/">+ Delete Home</a></div>
                <div><img src={this.props.home.image} height="200" width="200" alt="home"/></div>
                <div>{this.props.home.address}</div>
                <div>Listing price: {this.props.home.price}</div>
                <div>{this.props.home.numberOfBeds} Beds</div>
                <div>Your comments about this home: {this.props.home.comments}</div>
                </h6>
            </div>
        );
    }
}

export default Home;