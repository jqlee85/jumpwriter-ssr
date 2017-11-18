import React, {Component} from 'react'
import styles from './LoginForm.css';

class LoginForm extends Component {

  userLogin = (e) => {
    e.preventDefault();
    let userName = this.userName.value;
    let password = this.password.value;
    this.props.userLogin(userName,password);
  }

  render() {
    return <form className="login-form" id="login-form" >
      <input name="userName" type="text" ref={ function(node){ this.userName = node }.bind(this) }/>
      <input name="password" type="text" ref={ function(node){ this.password = node }.bind(this) }/>
      <button className="button" onClick={this.userLogin}>Login</button> 
    </form>
  }
}

export default LoginForm;