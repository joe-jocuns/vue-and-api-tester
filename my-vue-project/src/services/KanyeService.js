import axios from 'axios';

const http = axios.create({
  baseURL: "https://api.kanye.rest"
});

export default {
  GetKanyeQuote(){
    return http.get();
  }

};
