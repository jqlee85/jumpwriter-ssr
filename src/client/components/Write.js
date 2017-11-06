import React, {Component} from 'react';
import Prompt from './Prompt/Prompt';
import WritePage from './WritePage/WritePage';

class Write extends Component {
  render() {
    return <div className="write">
      <Prompt />
      <WritePage />
    </div>
  }
}


export default Write
