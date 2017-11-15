import styles from './App.css';
import React, { Component } from "react";
import { Route } from "react-router-dom";
import routes from "./routes";
import {connect} from 'react-redux';
// import {fetchImagePrompt} from './reducer';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menuToggled : false
    }
  }

  componentDidMount(){
    console.log(this.props);
  }

  handleMenuToggle(){
    console.log('hey');
    this.setState({menuToggled : !this.state.menuToggled});
  }

  closeMenu() {
    console.log('closeMenu called');
    this.setState({menuToggled : false});
  }


  render(){
    return <div className="App">
      {this.state.menuToggled && <Nav menuToggled={this.state.menuToggled} closeMenu={() => this.closeMenu()}/>}
      {!this.state.menuToggled && <Nav menuToggled={this.state.menuToggled} closeMenu={() => this.closeMenu()}/>}
      {/* <Nav menuToggled={this.state.menuToggled} /> */}
      <Header menuToggled={this.state.menuToggled} headerMenuToggled={() => this.handleMenuToggle()} />
      <div className="main">
        {routes.map((route, i) => <Route key={i} {...route} />)}
      </div>
      <button onClick={this.props.requestImagePrompt}>Button</button>
    </div>
  }

}

// Application State
const mapStateToProps = (state) => {
  return {
    imagePrompt: state.imagePrompt
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    requestImagePrompt: () => {
      dispatch({
        type: 'FETCH_IMAGE_PROMPT_REQUEST'
      });
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);