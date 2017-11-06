import React, {Component} from 'react'
import styles from './Header.scss';
import MenuToggle from '../MenuToggle/MenuToggle';
import { Link } from 'react-router-dom';

class Header extends Component {

  render(){
    return <header id="header">
      <MenuToggle />
      <Link className="site-title" to='/'><h1>JumpWriter</h1></Link>
    </header>
  }

}

export default Header
