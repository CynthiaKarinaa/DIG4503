import React from 'react';
//displays name on homepage
class HomePage extends React.Component {
    render (fname, lname) {
        return <h1>Hello, my name is {this.props.firstName} {this.props.lastName}</h1>;
    }
}

export default HomePage;