//imports react app and imports marketitem file
import React, {Component} from 'react';
import Marketitem from './marketitem'

//sets the count to 0
class Market extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  };


render() {
//defines count that will be returned on click 
    return (
      <div>
        <Marketitem count={this.state.count}/>
        <button onClick={() => this.setState({count: this.state.count +1})}>Add Item</button>
      </div>

    );
};
};

export default Market;




