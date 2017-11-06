import React, {Component} from 'react'
import styles from './MenuToggle.scss';

class MenuToggle extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    toggled: false
  }

  toggleClass = (event) => {
    event.target.classList.toggle('toggled');
    this.state.toggled = ! this.state.toggled;
  }

  render() {
    let theClasses = 'menu-toggle';
    if (this.state.toggled) theClasses += ' toggled';
    return <button className={theClasses} id="nav-icon" onClick={this.toggleClass}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  }
}


export default MenuToggle
