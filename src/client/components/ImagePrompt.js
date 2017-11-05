import React, {Component} from 'react';
// import Unsplash, { toJson } from 'unsplash-js';

const unsplashAppName = 'JumpWriter';

class ImagePrompt extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    image : false,
    imageUrl : '',
    imageSrc : '',
    alt : '',
    imageUserName : ''
  }

  async componentDidMount () {
    try {
      // const unsplash = new Unsplash({
      //   applicationId: process.env.UNSPLASH_APP_ID,
      //   secret: process.env.UNSPLASH_APP_SECRET,
      //   callbackUrl: "https://jumpwriter.com/api-callback/"
      // });
      // unsplash.photos.getRandomPhoto()
      // .then(toJson)
      // .then(json => {
      //   console.log(json);
      //   this.setState({
      //     image : true,
      //     imageSrc : json.urls.regular,
      //     imageUrl : json.links.html,
      //     alt : json.description,
      //     imageUserName : json.user.name
      //   });
      // });
      const res = await fetch('https://api.jumpwriter.com/wp-json/jumpwriter-theme/v1/image-prompt/');
      const prompt = await res.json();
      console.log(prompt);
      this.setState({
        image : true,
        imageSrc : prompt.imageSrc,
        imageUrl : prompt.imageUrl,
        alt : prompt.alt,
        imageUserName : prompt.imageUserName
      });
      // this.updateImage(prompt);
    } catch(e) {
      console.log(e);
      this.setState({
        error: true,
        promptImage: 'error'
      })
    }
  }

  render() {
    return <div>
      {this.state.image &&
        <div className="prompt-image">
          <img src={this.state.imageSrc} alt={this.state.alt}/>
          <div className="prompt-image-credit">
            <p>Photo by {this.state.imageUserName} on <a href={`${this.state.imageUrl}?utm_source=${unsplashAppName}&utm_medium=referral&utm_campaign=api-credit`} target="_blank">Unsplash</a></p>
          </div>
        </div>
      }
      </div>
  }
}


export default ImagePrompt
