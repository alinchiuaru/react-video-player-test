import { NEXT_VIDEO, PREVIOUS_VIDEO, TOGGLE_SHUFFLE, TOGGLE_AUTOPLAY_NEXT, CHANGE_VIDEO } from '../actions/player';

import _ from 'lodash';

const playlist = [
  {
    id: _.uniqueId('video_'),
    src: 'http://mirrors.standaloneinstaller.com/video-sample/jellyfish-25-mbps-hd-hevc.mp4'
  },
  {
    id: _.uniqueId('video_'),
    src: 'http://mirrors.standaloneinstaller.com/video-sample/P6090053.mp4'
  },
  {
    id: _.uniqueId('video_'),
    src: 'http://mirrors.standaloneinstaller.com/video-sample/small.mp4'
  },
  {
    id: _.uniqueId('video_'),
    src: 'http://mirrors.standaloneinstaller.com/video-sample/grb_2.mp4'
  }
];

const initialState = {
  currentVideo: playlist[0],
  playlist,
  settings: {
    shuffle: false,
    autoplayNext: false,
  }
};

export default function questionReducer(state = initialState, action) {
    switch (action.type) {
        case NEXT_VIDEO:
          const currentVideoIndex = state.playlist.indexOf(state.currentVideo);
          let nextVideo = null;
      
          if (currentVideoIndex < state.playlist.length - 1) {
            nextVideo = state.playlist[currentVideoIndex+1];
          } else {
            nextVideo = state.playlist[0];
          }

          return {
              ...state,
              currentVideo: nextVideo
          };

        case PREVIOUS_VIDEO:
            const videoIndex = state.playlist.indexOf(state.currentVideo);
            let previousVideo = null;

            if (videoIndex - 1 < 0) {
              previousVideo = state.playlist[state.playlist.length-1];
            } else {
              previousVideo = state.playlist[videoIndex -1];
            }

            return {
                ...state,
                currentVideo: previousVideo
            };

        case TOGGLE_AUTOPLAY_NEXT:
            const shouldAutoplay = !state.settings.autoplayNext;

            return {
              ...state,
              settings: {...state.settings, autoplayNext: shouldAutoplay}
            };
        
        case TOGGLE_SHUFFLE:
            const shuffledPlayList = _.shuffle(state.playlist);

            return {
              ...state,
              playlist: shuffledPlayList
            };
        
        case CHANGE_VIDEO:
            const upcomingVideoId = action.id;

            const upcomingVideo = state.playlist.find((element) => {
              return element.id === upcomingVideoId;
            });

            return {
              ...state,
              currentVideo: upcomingVideo
            };
            
        default:
            return state;
    }
}