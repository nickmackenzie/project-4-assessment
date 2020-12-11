import { Component } from "react";
import "./Circles.css";

class Circles extends Component {
  constructor() {
    super();
    this.state = {
      active: false,
    };
  }

  render() {
    return (
      <div className="Circles">
        <div className={this.props.box === "1" ? "selected" : null}>1</div>
        <div className={this.props.box === "2" ? "selected" : null}>2</div>
        <div className={this.props.box === "3" ? "selected" : null}>3</div>
        <div className={this.props.box === "4" ? "selected" : null}>4</div>
      </div>
    );
  }
}

export default Circles;
