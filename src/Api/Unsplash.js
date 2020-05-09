import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID TQUY7KyfIU4ugFGnWQFRZCr7RLCOp4lhyAGqGVNB37U'
    } 
});