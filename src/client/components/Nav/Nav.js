import React, {Component} from 'react';
import styles from './Nav.scss';
import { Link } from 'react-router-dom';


class Nav extends Component {

  state = {
    toggled: false
  }

  render() {
    return <nav className="main-nav">
      { this.state.toggled &&
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
      }
    </nav>;
  }

}

export default Nav
