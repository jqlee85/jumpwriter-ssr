import React, {Component} from 'react';
import Header from './Header';
import Main from './Main';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {

  render(){
    return <BrowserRouter>
      <div className="App">
        <Header welcomeText="Welcome to JumpWriter V4!"/>
        <Main />
      </div>
    </BrowserRouter>;
  }

}

export default App;
