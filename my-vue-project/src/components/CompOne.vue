<template>
  <div>
    <h1>
      "{{ quote }}"~Kayne West
    </h1>
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
    loadUsers() {
      KanyeService.GetKanyeQuote().then((response) => {
        this.quote = response.data.quote; 
      });
    }
  },
  mounted() {
    this.loadUsers();
  }
};
</script>

<style>

</style>
