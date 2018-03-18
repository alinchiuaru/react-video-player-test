export const NEXT_VIDEO = 'NEXT_VIDEO';
export const PREVIOUS_VIDEO = 'PREVIOUS_VIDEO';
export const VIDEO_ENDED = 'VIDEO_ENDED';
export const TOGGLE_SHUFFLE = 'TOGGLE_SHUFFLE';
export const TOGGLE_AUTOPLAY_NEXT = 'TOGGLE_AUTOPLAY_NEXT';
export const CHANGE_VIDEO = 'CHANGE_VIDEO'

export function nextVideo() {
    return {
        type: NEXT_VIDEO,
    }
}

export function previousVideo() {
    return {
        type: PREVIOUS_VIDEO,
    }
}

export function videoEnded() {
    return {
        type: VIDEO_ENDED
    }
}

export function toggleShuffle() {
    return {
        type: TOGGLE_SHUFFLE
    }
}

export function toggleAutoplayNext() {
    return {
        type: TOGGLE_AUTOPLAY_NEXT
    }
}

export function changeVideo(videoId) {
    return {
        type: CHANGE_VIDEO,
        id: videoId
    }
}