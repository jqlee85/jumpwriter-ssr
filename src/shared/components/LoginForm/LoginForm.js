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
    return <form className="login-form" id="login-form" onSubmit={this.userLogin}>
      <input name="userName" type="text" ref={ function(node){ this.userName = node }.bind(this) }/>
      <input name="password" type="text" ref={ function(node){ this.password = node }.bind(this) }/>
      <input type="submit" className="button" value="Login" /> 
    </form>
  }
}

export default LoginForm;