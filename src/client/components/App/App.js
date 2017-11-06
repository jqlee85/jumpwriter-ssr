import React, {Component} from 'react';
import styles from './App.scss';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Nav from '../Nav/Nav';
import { BrowserRouter } from 'react-router-dom';

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
    return <BrowserRouter>
      <div className="App">
        {this.state.menuToggled && <Nav menuToggled={this.state.menuToggled} />}
        {!this.state.menuToggled && <Nav menuToggled={this.state.menuToggled} />}
        <Nav menuToggled={this.state.menuToggled} />
        <Header menuToggled={this.state.menuToggled} headerMenuToggled={() => this.handleMenuToggle()} />
        <Main />
      </div>
    </BrowserRouter>;
  }

}

export default App;
