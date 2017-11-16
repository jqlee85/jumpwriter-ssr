import React, {Component} from 'react';
import styles from './Prompt.css';
import ImagePrompt from '../ImagePrompt/ImagePrompt';
import TextPrompt from '../TextPrompt/TextPrompt';
import CameraIcon from '../CameraIcon/CameraIcon';


class Prompt extends Component {

  render(){
    return <div className="prompt">

      { this.props.promptRequested  && this.props.textPrompt &&
        <TextPrompt promptText={this.props.textPrompt}/>
      }
      { this.props.promptRequested && this.props.imagePrompt &&
        <ImagePrompt imagePrompt={this.props.imagePrompt} />
      }
      { !this.props.promptRequested &&
        <div className="prompt-types">
          <button className="prompt-type-button jo-chasing-icon jo-icon-1" onClick={this.props.getTextPrompt}>
            <span>TEXT</span>
          </button>
          <button className="prompt-type-button prompt-image-button jo-chasing-icon jo-icon-2" onClick={this.props.getImagePrompt}>
            <CameraIcon iconWidth="30px" color="rgba(0,0,0,.7)" hoverColor="#3ae0b1" />
          </button>
        </div>
      }
    </div>
  }
}


export default Prompt
