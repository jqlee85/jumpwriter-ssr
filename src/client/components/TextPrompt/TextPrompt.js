import React, {Component} from 'react';
import styles from './TextPrompt.scss';
import LoadingDots from '../LoadingDots/LoadingDots';

class TextPrompt extends Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   promptText: '',
    //   error: false
    // }
  }

  state = {
    promptText: false,
    error: false
  }

  async componentDidMount() {
    // try {
    //   const res = await fetch('https://api.jumpwriter.com/wp-json/jumpwriter-theme/v1/noun-verb-prompt/');
    //   const prompt = await res.json();
    //   this.setState({
    //     promptText: prompt.text
    //   })
    //   console.log(prompt);
    // } catch(e) {
    //   this.setState({
    //     error: true,
    //     promptText: 'error'
    //   })
    // }
  }

  render() {
    return <div>
      {!this.props.promptText && <LoadingDots />}
      {this.props.promptText && <h1>{this.props.promptText}</h1>}
    </div>
  }

}


export default TextPrompt
