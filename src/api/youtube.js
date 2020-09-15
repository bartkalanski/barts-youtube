import axios from 'axios'

const KEY = 'AIzaSyBV-OBTELpEqYr3_YL7WI9DGZ7HqVWOWEE'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5, 
        key: KEY
    }
})