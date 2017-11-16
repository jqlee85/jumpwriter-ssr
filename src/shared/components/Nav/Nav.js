import React, {Component} from 'react';
import styles from './Nav.css';
import { Link } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';


class Nav extends Component {

  constructor(props){
    super(props);
  }

  render() {
    let theClasses = 'main-nav';
    if (this.props.menuToggled) theClasses += ' toggled';
    return <nav id="main-nav" className={theClasses}>
        <LoginForm />
        
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
    </nav>;
  }

}

export default Nav
