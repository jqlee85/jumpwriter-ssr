import React, {Component} from 'react';
import styles from './ImagePrompt.css';
// import LoadingDots from '../LoadingDots/LoadingDots';
import LoadingIcons from '../LoadingIcons/LoadingIcons';

const unsplashAppName = 'JumpWriter';

class ImagePrompt extends Component {

  async componentDidMount () {

    console.log(this.props);

  }

  render() {
    return <div className="image-prompt-wrapper">
      {!this.props.imagePrompt.image && <LoadingIcons />}
      {this.props.imagePrompt.image &&
        <div className="prompt-image">
          <img src={this.props.imagePrompt.imageSrc} alt={this.props.imagePrompt.alt}/>
          <div className="prompt-image-credit">
            <p>Photo by {this.props.imagePrompt.imageUserName} on <a href={`${this.props.imagePrompt.imageUrl}?utm_source=${unsplashAppName}&utm_medium=referral&utm_campaign=api-credit`} target="_blank">Unsplash</a></p>
          </div>
        </div>
      }
      </div>
  }
}


export default ImagePrompt
