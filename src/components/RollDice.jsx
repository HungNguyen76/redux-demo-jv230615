import { Component } from "react";
import Dice from "./Dice";
export default class RollDice extends Component {
  //Face numbers passes as default props
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"],
  };
  constructor(props) {
    super(props);
    this.state = {
      dice1: "six",
      dice2: "one",
      rolling: false,
    };
    // this.roll = this.roll.bind(this)
  }
  roll = () => {
    const { sides } = this.props;
    this.setState({
      dice1: sides[Math.floor(Math.random() * sides.length)],
      dice2: sides[Math.floor(Math.random() * sides.length)],
      rolling: true,
    });
    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
    this.setState((state, props) => {
        
    });
  };
  render() {
    const { dice1, dice2, rolling } = this.state;
    return (
      <div>
        <h1>This is RollDice</h1>
        <Dice face={dice1} rolling={rolling} roll={this.roll} />
        <Dice face={dice2} rolling={rolling} />
        <button disabled={rolling} onClick={() => this.roll()}>
          {this.state.rolling ? "Rolling" : "Roll Dice!"}
        </button>
      </div>
    );
  }
}
