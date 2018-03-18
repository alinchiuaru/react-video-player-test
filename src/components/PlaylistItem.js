import React from 'react';


const PlaylistItem = (props) => {
  return (
    <div className="playlist-item-title" onClick={() => props.changeVideo(props.id)}>
      <p>{props.title}</p>
    </div>
  )
}

export default PlaylistItem;