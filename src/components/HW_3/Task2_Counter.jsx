import React, {Component} from 'react';
import './Task2_Counter.scss';

class Task2_Counter extends Component {

  state = {
    value:0
  }

  countUp(){
    console.log(this.state);
    this.setState((state)=>({value:state.value+1}))
  }

  countDown(){
    console.log(this.state);
    this.setState((state)=>({value:state.value-1}))
  }

  render() {
    return (
      <div className="counter">
        <p className="counter__value">{this.state.value}</p>
        <button className="counter__minus" onClick={()=>this.countDown()}>MINUS</button>
        <button className="counter__plus" onClick={()=>this.countUp()}>PLUS</button>
      </div>
    );
  }
}

export default Task2_Counter;