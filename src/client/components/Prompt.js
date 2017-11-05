import React, {Component} from 'react';
import ImagePrompt from './ImagePrompt';
import TextPrompt from './TextPrompt';

class Prompt extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    prompted: false,
    promptType: 'image'
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
        <TextPrompt />
      }
      {
        this.state.prompted && this.state.promptType === 'image' &&
        <ImagePrompt />
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
