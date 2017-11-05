import React, {Component} from 'react';

class TextPrompt extends Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   promptText: '',
    //   error: false
    // }
  }

  state = {
    promptText: '',
    error: false
  }

  async componentDidMount() {
    try {
      const res = await fetch('https://api.jumpwriter.com/wp-json/jumpwriter-theme/v1/noun-verb-prompt/');
      const prompt = await res.json();
      this.setState({
        promptText: prompt.text
      })
      console.log(prompt);
    } catch(e) {
      this.setState({
        error: true,
        promptText: 'error'
      })
    }
  }

  render() {
    return <div>
      <h1>{this.state.promptText}</h1>
    </div>
  }

}


export default TextPrompt
