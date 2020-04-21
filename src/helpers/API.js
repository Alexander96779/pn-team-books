import axios from 'axios';

export default axios.create({
url: 'https://www.googleapis.com/books/v1',
responseType: 'json',
});