import axios from 'axios';

const API_KEY = 'AIzaSyDO_MBMAWLWgKGaEJiU3gF_M23EmJo9Ix8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: API_KEY,
    }
})