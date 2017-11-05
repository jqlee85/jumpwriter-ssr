import React, {Component} from 'react';
import Prompt from './Prompt';
import WritePage from './WritePage';

class Write extends Component {
  render() {
    return <div className="write">
      <Prompt />
      <WritePage />
    </div>
  }
}


export default Write
