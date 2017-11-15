import React, {Component} from 'react';
import styles from './TextPrompt.css';
import LoadingIcons from '../LoadingIcons/LoadingIcons';


class TextPrompt extends Component {

  constructor(props) {
    super(props);
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
    return <div className="text-prompt">
      {!this.props.promptText && <LoadingIcons />}
      {this.props.promptText && <h3>{this.props.promptText}</h3>}
    </div>
  }

}


export default TextPrompt
