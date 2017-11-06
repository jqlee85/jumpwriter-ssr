import React, {Component} from 'react';
import styles from './App.scss';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Nav from '../Nav/Nav';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {

  render(){
    return <BrowserRouter>
      <div className="App">
        <Nav />
        <Header />
        <Main />
      </div>
    </BrowserRouter>;
  }

}

export default App;
