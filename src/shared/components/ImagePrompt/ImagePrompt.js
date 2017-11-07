import React, {Component} from 'react';
import styles from './ImagePrompt.scss';
import LoadingDots from '../LoadingDots/LoadingDots';

const unsplashAppName = 'JumpWriter';

class ImagePrompt extends Component {

  constructor(props) {
    super(props);
    this.state.promptImage = props.promptImage;
  }

  state = {
    promptImage: false
  }

  async componentDidMount () {

    if (!this.state.promptImage) {
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
        this.setState({ promptImage : imagePrompt });
      } catch(e) {
        console.log(e);
        this.setState({
          error: true,
          promptImage: 'error'
        })
      }
    }

  }

  render() {
    return <div>
      {!this.state.promptImage.image && <LoadingDots />}
      {this.state.promptImage.image &&
        <div className="prompt-image">
          <img src={this.state.promptImage.imageSrc} alt={this.state.promptImage.alt}/>
          <div className="prompt-image-credit">
            <p>Photo by {this.state.promptImage.imageUserName} on <a href={`${this.state.promptImage.imageUrl}?utm_source=${unsplashAppName}&utm_medium=referral&utm_campaign=api-credit`} target="_blank">Unsplash</a></p>
          </div>
        </div>
      }
      </div>
  }
}


export default ImagePrompt