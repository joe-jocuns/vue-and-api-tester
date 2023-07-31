import axios from 'axios';

const http = axios.create({
  baseURL: "https://api.scryfall.com/cards/random"
});

export default {
  GetRandomCard(){
    return http.get();
  }

};
