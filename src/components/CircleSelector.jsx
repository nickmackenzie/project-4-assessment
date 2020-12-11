import "./CircleSelector.css";
import { Component } from "react";

class CircleSelector extends Component {
  constructor() {
    super();
    this.state = {
      active: false,
      box1: false,
      box2: false,
    };
  }

  buttonClicked = (e) => {
    if (e.target.id === "1") {
      const currentState = this.state.box1;
      this.setState({ box1: !currentState });
      this.setState({ box2: false });
      this.setState({ box3: false });
      this.setState({ box4: false });
      this.props.changeClass(e);
    } else if (e.target.id === "2") {
      const currentState = this.state.box2;
      this.setState({ box1: false });
      this.setState({ box2: !currentState });
      this.setState({ box3: false });
      this.setState({ box4: false });
      this.props.changeClass(e);
    } else if (e.target.id === "3") {
      const currentState = this.state.box3;
      this.setState({ box1: false });
      this.setState({ box2: false });
      this.setState({ box3: !currentState });
      this.setState({ box4: false });
      this.props.changeClass(e);
    } else if (e.target.id === "4") {
      const currentState = this.state.box4;
      this.setState({ box1: false });
      this.setState({ box2: false });
      this.setState({ box3: false });
      this.setState({ box4: !currentState });
      this.props.changeClass(e);
    }
  };
  render() {
    return (
      <div className="CircleSelector">
        <button
          onClick={this.buttonClicked}
          className={this.state.box1 ? "selected" : null}
          id="1"
        >
          1
        </button>
        <button
          onClick={this.buttonClicked}
          className={this.state.box2 ? "selected" : null}
          id="2"
        >
          2
        </button>
        <button
          onClick={this.buttonClicked}
          className={this.state.box3 ? "selected" : null}
          id="3"
        >
          3
        </button>
        <button
          onClick={this.buttonClicked}
          className={this.state.box4 ? "selected" : null}
          id="4"
        >
          4
        </button>
      </div>
    );
  }
}
export default CircleSelector;
