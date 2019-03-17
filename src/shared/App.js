import './App.css';
import React, { Component } from "react";
import { Route } from "react-router-dom";
import routes from "./routes";
import {PropsRoute} from 'react-router-with-props';
import {connect} from 'react-redux';
import {fetchImagePrompt} from './actions/promptActions';
import {fetchTextPrompt} from './actions/promptActions';
import {requestUserLogin} from './actions/userActions';
import {userLogout} from './actions/userActions';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      navToggled: false,
      navFrontToggled: false,
      navInitialized: false,
    };  
  }

  toggleAppNav = () => {
    if ( this.state.navToggled && !this.state.navInitialized) {
      this.setState(prevState => ({
        navInitialized: true
      }));
    }
    
    // Change Navigation Z-Index
    if (this.state.navFrontToggled) {
      setTimeout(() => {
        this.setState(prevState => ({
          navFrontToggled: !prevState.navFrontToggled
        }));
      },400);
    } else {
      this.setState(prevState => ({
        navFrontToggled: !prevState.navFrontToggled
      }));
    }
    // Toggle the Navigation
    setTimeout(() => {
      this.setState(prevState => ({
        navToggled: !prevState.navToggled
      }));
    }, 100); 
  }

  render(){
    
    let appClasses = 'App';
    if (this.state.navToggled) appClasses += ' app-menu-toggled';
    if (this.state.navFadeToggled) appClasses += ' nav-fade';
    
    return <div className="App">
      <Nav 
        navToggled={this.state.navToggled} 
        userLogin={this.props.requestUserLogin} 
        userData={this.props.user} 
        userLogout={this.props.userLogout}
        toggleNav={this.toggleAppNav}
        navFront={this.state.navFrontToggled}
        navInitialized={this.state.navInitialized}
      />
      <Header 
        navToggled={this.state.navToggled} 
        userLogin={this.props.requestUserLogin} 
        userData={this.props.user}
        toggleNav={this.toggleAppNav}
      />
      <div className="main">
        {routes.map((route, i) => <PropsRoute 
          key={i}
          exact={route.exact} 
          path={route.path} 
          component={route.component} 
          prompt={this.props.prompt}
          user={this.props.user}
          getImagePrompt={this.props.fetchImagePrompt}
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
    app: state.app,
    user: state.user
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchImagePrompt: () => {
      dispatch(fetchImagePrompt());
    },
    fetchTextPrompt: () => {
      dispatch(fetchTextPrompt());
    },
    requestUserLogin: (userName,password) => {
      dispatch(requestUserLogin(userName,password));
    },
    userLogout: (userName,password) => {
      dispatch(userLogout(userName,password));
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);