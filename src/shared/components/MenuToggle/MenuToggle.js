import React, {Component} from 'react'
import styles from './MenuToggle.scss';

class MenuToggle extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount(){
    this.setState({menuToggled: this.props.menuToggled});
  }

  toggleMenu = (event) => {
    this.state.menuToggled = ! this.state.menuToggled;
    event.target.classList.toggle('toggled');
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
    let theClasses = 'menu-toggle';
    if (this.state.menuToggled) theClasses += ' toggled';
    return <button className={theClasses} id="nav-icon" onClick={this.toggleMenu}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  }
}


export default MenuToggle
