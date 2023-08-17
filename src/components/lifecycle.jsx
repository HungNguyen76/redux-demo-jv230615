import { Component } from "react";
import TimerComponent from "./timer";

export default class Lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      userId: 5,
      userUpdate: {},
      isToggle: false
    };
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((users) => this.setState({ users }));
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.userId !== this.state.userId) {
      fetch(`https://jsonplaceholder.typicode.com/users/${this.state.userId}`)
        .then((res) => res.json())
        .then((userUpdate) => this.setState({ userUpdate }));
    }
  }

  randomId = () => {
    const { users } = this.state;
    const ranId = Math.floor(Math.random() * users.length);
    this.setState({ userId: ranId });
  };

  render() { 
    return (
      <div>
        <h1>List users</h1>
        {this.state.users.map((item, index) => (
          <li>{item.name}</li>
        ))}

        <button onClick={() => this.randomId()}>Random ID</button>
        <h1>User choose from random ID</h1>

        <p>{this.state.userId  == 0 ? "There is not user in random id" : this.state.userUpdate.name}</p>
        <button onClick={() => this.setState({ isToggle: !this.state.isToggle})}>Toggle</button>
        {this.state.isToggle ? <TimerComponent /> : ""}
      </div>
    );
  }
}
