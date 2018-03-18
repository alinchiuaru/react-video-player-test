import React from 'react';
import PlaylistItem from './PlaylistItem'; 

import {Button, ButtonGroup, ButtonToolbar, Glyphicon } from 'react-bootstrap';

const renderPlaylistItems = (items, changeVideo) => {
  const playlistItems = items.map((element, index) => {
    return (
      <div className="playlist-item" key={element.id}>
        <PlaylistItem id={element.id} title={element.id} changeVideo={changeVideo} />
      </div>
    ); 
  });

  return playlistItems;
};


const Playlist = (props) => {
  return (
    <div className="playlist-wrapper">
      <div className="playlist-header">
          <ButtonToolbar>
            <ButtonGroup>
              <Button onClick={() => props.handleAutoPlay()} active={props.autoplayStatus}>
                <Glyphicon glyph="glyphicon glyphicon-expand" /> AutoPlay Next
              </Button>

              <Button onClick={() => props.handleShuffle()}>
                <Glyphicon glyph="glyphicon glyphicon-refresh" /> Shuffle Playlist
              </Button>

            </ButtonGroup>
          </ButtonToolbar>
      </div>

      <div className="playlist-body">
        {renderPlaylistItems(props.items, props.handleChangeVideo)}
      </div> 
    </div>
  )
};

export default Playlist;