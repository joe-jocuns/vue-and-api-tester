import axios from 'axios';

const http = axios.create({
  baseURL: "https://api.scryfall.com/cards"
});

export default {
  GetRandomCard(){
    return http.get("/random");
  },

  //GetSearchedCards(id){
   // return http.get('/search${id}')

 // }

};
