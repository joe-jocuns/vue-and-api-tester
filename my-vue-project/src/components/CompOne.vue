<template>
  <div id="bg1">
    <a href="https://kanye.rest/" target="_blank">
    <h1>Kanye.Rest</h1>
    </a>
    <h2>
      "{{ quote }}"~Kayne West
    </h2>
  </div>
</template>

<script>
import KanyeService from '../services/KanyeService';

export default {
  name: 'user-list',
  data() {
    return {
      quote: ''
    };
  },
  methods: {
    loadQuote() {
      KanyeService.GetKanyeQuote().then((response) => {
        this.quote = response.data.quote; 
      });
    }
  },
  mounted() {
    this.loadQuote();
  }
};
</script>

<style>

#bg1{
  background-color: rgb(158, 158, 158);
}
</style>
