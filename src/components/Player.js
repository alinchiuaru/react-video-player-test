import React, { Component } from 'react';

export default class Player extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <video src={this.props.video.src} className="video-wrapper" controls onEnded={() => this.props.handleEnded()} />
        <button onClick={() => this.props.handleNext()}>Next video</button>
        <button onClick={() => this.props.handlePrevious()}>Previous video</button>
      </div>
    );
    
  }
}