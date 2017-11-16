import React, {Component} from 'react';
import Prompt from '../Prompt/Prompt';
import WritePage from '../WritePage/WritePage';

class Write extends Component {
  
  
  componentDidMount(){
    console.log('writedidimount');
    console.log(this.props);
    console.log('-----')
  }
  
  render() {
    return <div className="write">
      <Prompt 
        textPrompt={this.props.textPrompt}
        imagePrompt={this.props.imagePrompt}
        getImagePrompt={this.props.getImagePrompt}
        getTextPrompt={this.props.getTextPrompt}
      />
      <WritePage />
    </div>
  }
}


export default Write
