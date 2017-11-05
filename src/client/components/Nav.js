import React, {Component} from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
// const Header = () => (

class Nav extends Component {

  render() {
    return <nav className="main-nav">
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/write'>Write</Link></li>
      </ul>
    </nav>;
  }

}

export default Nav
