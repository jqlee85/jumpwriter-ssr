import React, {Component} from 'react'
import styles from './Header.scss';
import MenuToggle from '../MenuToggle/MenuToggle';
import { Link } from 'react-router-dom';

class Header extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount(){
    this.setState({menuToggled: this.props.menuToggled});
  }

  handleMenuToggle(){
    this.setState({menuToggled: !this.props.menuToggled});
    this.props.headerMenuToggled();
  }

  render(){
    return <header id="header">
      <MenuToggle menuToggled={this.props.menuToggled} onClick={() => this.handleMenuToggle()}/>
      <Link className="site-title" to='/'><h1>JumpWriter</h1></Link>
    </header>
  }

}

export default Header
