import { Component } from 'react';

class TimerComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timer: 0,
    };

    this.intervalId = null;
  }

  componentDidMount() {
    // Start a timer that updates the state every second
    this.intervalId = setInterval(() => {
      this.setState(prevState => ({
        timer: prevState.timer + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    // Clear the timer interval when the component is about to unmount
    console.log("ComponentWillUnmount được gọi")
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div>
        <h2>Timer: {this.state.timer} seconds</h2>
      </div>
    );
  }
}

export default TimerComponent;