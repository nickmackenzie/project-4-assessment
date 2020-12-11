import React, { Component } from "react";
import "./App.css";
import CircleSelector from "./components/CircleSelector";
import Circles from "./components/Circles";
import "./components/Circles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      selected: false,
      box: false,
      box2: false,
      box3: false,
      box4: false,
    };
  }

  changeClass = (e) => {
    console.log(e.target.id);
    this.setState({ box: e.target.id });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector
            changeClass={this.changeClass}
            className={this.state.box1 ? "selected" : null}
          ></CircleSelector>
          <Circles box={this.state.box}></Circles>
        </main>
      </div>
    );
  }
}

export default App;
