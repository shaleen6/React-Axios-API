import axios from 'axios';

const KEY='AIzaSyAj1thWAHKwC4H0CrlgfyMd2SHMTFg1I1g';

export default axios.create({

    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part: 'snippet',
        maxResults: 10,
        key: KEY
    }
});