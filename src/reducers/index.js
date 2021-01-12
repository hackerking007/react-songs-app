import { combineReducers } from 'redux';

const songsReducer = () => {
    return[
        { title: 'No Scrubs', duration: '4:05' },
        { title: 'Macarena', duration: '2:30' }
    ];
};

const SelectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.pyload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: SelectedSongReducer
});