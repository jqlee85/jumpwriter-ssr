import React, {Component} from 'react'
import styles from './LoadingDots.css';

class LoadingDots extends Component {

  render(){
    return <div className="sk-chasing-dots">
      <div className="sk-child sk-dot1"></div>
      <div className="sk-child sk-dot2"></div>
    </div>
  }


}



export default LoadingDots
