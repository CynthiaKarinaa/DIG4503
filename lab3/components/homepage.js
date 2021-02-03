import React from 'react';

class HomePage extends React.Component {
    render (fname, lname) {
        return <h1>Hello, {this.props.firstName} {this.props.lastName}</h1>;
    }
}

export default HomePage;