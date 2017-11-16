import React, {Component} from 'react';
import styles from './TextPrompt.css';
import LoadingIcons from '../LoadingIcons/LoadingIcons';


class TextPrompt extends Component {

  render() {
    console.log('----');
    console.log(this.props.promptText);
    return <div className="text-prompt">
      {!this.props.promptText.text && <LoadingIcons />}
      {this.props.promptText.text && <h3>{this.props.promptText.text}</h3>}
    </div>
  }

}


export default TextPrompt
