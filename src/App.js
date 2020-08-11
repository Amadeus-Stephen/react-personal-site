import React, { Component } from "react";
import { Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
//styles
import "./App.css";
//Components
import TopNavbar from "./components/navbar/topNavbar";
import LeftNavbar from "./components/navbar/leftNavbar";

import HomePage from "./components/pages/homePage";
library.add(fab, fas);

class App extends Component {
  constructor() {
    super();
    this.state = { leftNavActive: true };
    this.updateAppState = this.updateAppState.bind(this);
  }

  updateAppState(stateObject) {
    this.setState(stateObject);
  }
  render() {
    return (
      <div className="App">
        <TopNavbar
          updateAppState={this.updateAppState}
          leftNavActive={this.state.leftNavActive}
        />
        <LeftNavbar
          updateAppState={this.updateAppState}
          leftNavActive={this.state.leftNavActive}
        />
        <Route path="/" exact render={() => <HomePage />} />
      </div>
    );
  }
}
export default App;
