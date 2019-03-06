import React, { Component } from 'react';
import "./TimerBox.css";

class TimerBox extends Component {
  render() {
    return (
      <div className="timerBox">
        <div className="number">{ this.props.text }</div>
        <div className="label"><strong>{ this.props.type }</strong></div>
      </div>
    );
  }
}

export default TimerBox;