import React, {Component} from 'react'
import styles from './Header.scss';
import Nav from '../Nav/Nav';
import MenuToggle from '../MenuToggle/MenuToggle';

class Header extends Component {

  render(){
    return <header id="header">
      <MenuToggle />
      <Nav />
    </header>
  }

}

export default Header
