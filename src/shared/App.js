import styles from './App.css';
import React, { Component } from "react";
import { Route } from "react-router-dom";
import routes from "./routes";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menuToggled : false
    }
  }

  handleMenuToggle(){
    this.setState({menuToggled : !this.state.menuToggled});
  }

  render(){
    return <div className="App">
        {routes.map((route, i) => <Route key={i} {...route} />)}
        {/*{this.state.menuToggled && <Nav menuToggled={this.state.menuToggled} />}
        {!this.state.menuToggled && <Nav menuToggled={this.state.menuToggled} />}
        <Nav menuToggled={this.state.menuToggled} />
        <Header menuToggled={this.state.menuToggled} headerMenuToggled={() => this.handleMenuToggle()} />
        <Main />*/}
      </div>;
  }

}

export default App;
