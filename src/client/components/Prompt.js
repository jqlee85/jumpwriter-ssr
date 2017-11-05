import React, {Component} from 'react';
import ImagePrompt from './ImagePrompt';
import TextPrompt from './TextPrompt';

class Prompt extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  state = {
    prompted: false,
    promptType: 'image',
    promptText: '',
    promptImage: ''
  }

  async componentDidMount() {

    // Fetch Text Prompt
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
        promptText: false
      })
    }

    try {
      const res = await fetch('https://api.jumpwriter.com/wp-json/jumpwriter-theme/v1/image-prompt/');
      const prompt = await res.json();
      console.log(prompt);
      let imagePrompt = {
        image : true,
        imageSrc : prompt.imageSrc,
        imageUrl : prompt.imageUrl,
        alt : prompt.alt,
        imageUserName : prompt.imageUserName
      }
      this.setState({ promptImage : imagePrompt});
    } catch(e) {
      console.log(e);
      this.setState({
        error: true,
        promptImage: false
      })
    }
  }

  textPrompt = () =>{
    this.setState( {
      promptType: 'text',
      prompted: true
    });
  }

  imagePrompt = () => {
    this.setState( {
      promptType: 'image',
      prompted: true
    });
  }

  render(){
    return <div className="prompt">

      { this.state.prompted && this.state.promptType === 'text' &&
        <TextPrompt promptText={this.state.promptText}/>
      }
      {
        this.state.prompted && this.state.promptType === 'image' &&
        <ImagePrompt promptImage={this.state.promptImage}/>
      }
      { !this.state.prompted && this.state.promptType === 'text' &&
        <div>
          <div className="prompt-types">
            <button className="prompt-type-button toggled" onClick={this.textPrompt}>Text Prompt</button>
            <button className="prompt-type-button" onClick={this.imagePrompt}>Image Prompt</button>
          </div>
        </div>
      }
      { !this.state.prompted && this.state.promptType === 'image' &&
        <div>
          <div className="prompt-types">
            <button className="prompt-type-button" onClick={this.textPrompt}>Text Prompt</button>
            <button className="prompt-type-button toggled" onClick={this.imagePrompt}>Image Prompt</button>
          </div>
        </div>
      }
    </div>
  }
}


export default Prompt
