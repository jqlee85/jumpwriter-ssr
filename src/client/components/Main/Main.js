import React, {Component} from 'react';
// import Home from './Home';
import About from '../About/About';
import Write from '../Write/Write';
import { Route, Switch } from 'react-router-dom';

class Main extends Component {
  render() {
    return <div className="main">
      <Switch>
          <Route exact path='/' component={Write}/>
          <Route path='/about' component={About}/>
      </Switch>
    </div>
  }
}


export default Main
