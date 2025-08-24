import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '7ec1a7b1abdd4814a60cd031280c2302',
  },
});
