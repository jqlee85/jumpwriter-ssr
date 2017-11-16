import styles from './App.css';
import React, { Component } from "react";
import { Route } from "react-router-dom";
import routes from "./routes";
import {connect} from 'react-redux';
import {fetchImagePromptRequest} from './actions/promptActions';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';


class App extends Component {

  componentDidMount(){
    console.log(this.props);
  }

  render(){
    return <div className="App">
      <Nav menuToggled={this.props.app.menuToggled} />
      <Header menuToggled={this.props.app.menuToggled}/>
      <div className="main">
        {routes.map((route, i) => <Route key={i} {...route} />)}
      </div>
      <button onClick={this.props.fetchImagePromptRequest}>Button</button>
    </div>
  }

}

// Application State
const mapStateToProps = (state) => {
  
  return {
    prompt: state.prompt,
    app: state.app
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchImagePromptRequest: () => {
      dispatch(fetchImagePromptRequest());
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);