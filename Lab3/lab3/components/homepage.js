//imports react
import React from 'react';
//returns varibles defined on app.js 
class HomePage extends React.Component {
    render (fname, lname) {
        return <h1>Hello, {this.props.firstName} {this.props.lastName}</h1>;
    }
}
// exports single class
export default HomePage;