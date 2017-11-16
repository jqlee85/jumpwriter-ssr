import React, {Component} from 'react'
import styles from './LoginForm.css';

class LoginForm extends Component {

  render() {
    return <form className="login-form" id="login-form" >
      <input type="text" value=""/>
      <input type="text" value=""/>
      <input type="submit"/>
    </form>
  }
}

export default LoginForm;