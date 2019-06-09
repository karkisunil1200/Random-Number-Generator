import React, {Component} from 'react';

class Rando extends Component {
  constructor(props) {
    super(props);
    this.state = {num: ''};
  }

  clickHandler = event => {
    event.preventDefault();
    let number = Math.floor(Math.random() * 10) + 1;
    this.setState({
      num: number
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Number : {this.state.num}</h1>
        <button onClick={this.clickHandler} type='button' className='btn btn-primary btn-lg'>
          Add me
        </button>
      </div>
    );
  }
}

export default Rando;
