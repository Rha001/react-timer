import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// components
import TimerBox from "./components/timerBox/TimerBox";

class App extends Component {
  constructor(props) {
    super(props);
    this.secondsInDay = 86400;
    this.secondsInHour = 3600;
    this.secondsInMinute = 60;

    // Initial time 1 day and 1 Hour
    this.state = {
      seconds: 90000
    };
  }

  componentDidMount = () => { 
    this.timer = setInterval(this.decreaseSeconds, 1000);
  }

  getDays = () => {
    return Math.floor(this.state.seconds / this.secondsInDay);
  }
  
  getHours = () => {
    return Math.floor((this.state.seconds / this.secondsInHour) % 24);
  }

  getMinutes = () => {
    return Math.floor((this.state.seconds / this.secondsInMinute) % 60);
  }

  getSeconds = () => {
    return this.state.seconds % this.secondsInMinute;
  }

  decreaseSeconds = () => {
    const seconds = this.state.seconds;
    
    if(seconds >= 1) {
      this.setState({'seconds': seconds - 1});
    } else {
      clearInterval(this.timer);
    }
  }


  render() {
    return (
      <div>
        <TimerBox type={'Days'} text={this.getDays()}/>
        <TimerBox type={'Hours'} text={this.getHours()}/>
        <TimerBox type={'Minutes'} text={this.getMinutes()}/>
        <TimerBox type={'Seconds'} text={this.getSeconds()}/>
      </div>
    );
  }
}

export default App;
