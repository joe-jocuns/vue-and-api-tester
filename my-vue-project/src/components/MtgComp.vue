<template>
 <div :style="{ borderColor: bgColor }" id="bg">
    <h1>{{name}}</h1>
    <img :src="imgUrl" alt="">
  
   
  </div>
</template>

<script>
import MtgService from '../services/MtgService';

export default {
  name: 'user-list',
  data() {
    return {
      name: '',
      colorIdent: [],
      bgColor: '',
      imgUrl:'',
    };
  },
  methods: {
    loadCard() {
      MtgService.GetRandomCard().then((response) => {
        this.name = response.data.name;
        this.colorIdent = response.data.colors;
        this.bgColor = this.bgColorSelector(response.data.colors); 
        this.imgUrl = response.data.image_uris.border_crop;
      });
    },
    bgColorSelector(colorIdent) {
      switch (colorIdent[0]) {
        case 'G':
          return 'rgb(0,115,62)';
        case 'U':
          return 'rgb(14,104,171)';
        case 'R':
          return 'rgb(211,32,42)';
        case 'B':
          return 'rgb(21, 11, 0)';
        case 'W':
          return 'rgb(211,211,211)';
      }
    },
  },
  mounted() {
    this.loadCard();
  },
};
</script>

<style>
#bg{
  border-style: solid;
  border-width: 2em;
  background: rgb(23, 18, 15);
}
h1{
  color: aliceblue;
}
</style>
