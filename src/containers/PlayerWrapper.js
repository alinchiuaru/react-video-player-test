import React, { Component } from 'react';
import { connect } from 'react-redux';
import { nextVideo, previousVideo, toggleShuffle, toggleAutoplayNext, changeVideo } from '../actions/player';
import {Grid, Row, Col} from 'react-bootstrap';
import Player from '../components/Player';
import Playlist from '../components/Playlist';

class PlayerWrapper extends Component {
  nextVideo = () => {
    this.props.nextVideo();
  }

  previousVideo = () => {
    this.props.previousVideo();
  }

  videoEnded = () => {
    if (this.props.settings.autoplayNext) {
      this.nextVideo();
    }
  }

  toggleShuffle = () => {
    this.props.toggleShuffle();
  }

  toggleAutoplayNext = () => {
    this.props.toggleAutoplayNext();
  }

  changeVideo = (id) => {
    this.props.changeVideo(id);
  }

  render() {
    return (
      <Grid>
          <Row>
            <Col xs={12} md={8}>
              <Player video={this.props.currentVideo} handleNext={this.nextVideo} handlePrevious={this.previousVideo} handleEnded={this.videoEnded} />
            </Col>

            <Col xs={6} md={4}>
              <Playlist 
              items={this.props.playlist} 
              handleAutoPlay={this.toggleAutoplayNext} 
              handleShuffle={this.toggleShuffle} 
              handleChangeVideo={this.changeVideo}
              autoplayStatus={this.props.settings.autoplayNext} />
            </Col>
          </Row>
      </Grid>
    );
  }
}


function mapStateToProps(state) {
  console.log(state);
  return {
    currentVideo: state.player.currentVideo,
    playlist: state.player.playlist,
    settings: state.player.settings
  }
}


export default connect(mapStateToProps, { nextVideo, previousVideo, toggleAutoplayNext, toggleShuffle, changeVideo })(PlayerWrapper);