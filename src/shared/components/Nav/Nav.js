import React, {Component} from 'react';
import styles from './Nav.css';
import { Link } from 'react-router-dom';


class Nav extends Component {

  constructor(props) {
    super(props);
  }

  state = {menuToggled : false}

  componentWillMount(){
    this.setState({menuToggled: this.props.menuToggled})
  }

  componentDidMount(){

    setTimeout(function(){
      if (this.state.menuToggled) {
        document.getElementById('main-nav').classList.add('toggled');
      } else {
        document.getElementById('main-nav').classList.remove('toggled');
      }
    }.bind(this),1);
  }

  closeMenu = (event) => {
    console.log('closeMenu');
    
    
      console.log(this.state);
    if (!this.state.menuToggled) {
      document.getElementById('main-nav').classList.remove('toggled');
      setTimeout(function(){
        this.props.onClick();
      }.bind(this),700);
    } else {
      this.props.onClick();
    }

  }

  render() {
    let theClasses = 'main-nav';
    return <nav id="main-nav" className={theClasses}>
        <ul>
          <li><Link to='/' onClick={this.props.closeMenu}>Home</Link></li>
          <li><Link to='/about' onClick={this.props.closeMenu}>About</Link></li>
        </ul>
    </nav>;
  }

}

export default Nav
