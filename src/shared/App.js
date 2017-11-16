import styles from './App.css';
import React, { Component } from "react";
import { Route } from "react-router-dom";
import routes from "./routes";
import {PropsRoute} from 'react-router-with-props';
import {connect} from 'react-redux';
import {fetchImagePrompt} from './actions/promptActions';
import {fetchTextPrompt} from './actions/promptActions';
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
        {routes.map((route, i) => <PropsRoute 
          key={i}
          exact={route.exact} 
          path={route.path} 
          component={route.component} 
          promptRequested={this.props.prompt.promptRequested}
          imagePrompt={this.props.prompt.imagePrompt}
          getImagePrompt={this.props.fetchImagePrompt}
          textPrompt={this.props.prompt.textPrompt} 
          getTextPrompt={this.props.fetchTextPrompt} 
        />)}
      </div>
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
    fetchImagePrompt: () => {
      dispatch(fetchImagePrompt());
    },
    fetchTextPrompt: () => {
      dispatch(fetchTextPrompt());
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);