import React, {Component} from 'react';

class Rando extends Component {
  constructor(props) {
    super(props);
    this.state = {num: '', clicked: false};
  }

  clickHandler = event => {
    event.preventDefault();
    let number = Math.floor(Math.random() * 10) + 1;
    this.setState({
      num: number,
      clicked: true
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className=' card p-4'>
        <h1 className='bg-info p-3'>Play the Game and match the number to win!!</h1>
        <h1 className='bg-danger p-3'>Number : {this.state.num}</h1>
        {this.state.num === 4 ? (
          <h2 className='text-success'>You win</h2>
        ) : (
          <button onClick={this.clickHandler} type='button' className='btn btn-primary btn-lg'>
            Add me
          </button>
        )}
      </div>
    );
  }
}

export default Rando;
