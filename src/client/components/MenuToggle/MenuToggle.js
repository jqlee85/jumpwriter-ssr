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
    event.target.classList.toggle('toggled');
    this.state.menuToggled = ! this.state.menuToggled;
    this.props.onClick();
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
