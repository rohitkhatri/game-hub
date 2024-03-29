import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '05a4ab5ea42443d4828fd4e91d17080c',
  },
});

export default client;
