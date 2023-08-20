<template>
<div>
<SearchComp
@rando-clicked="loadCard"
/>
 <div :style="{ borderColor: bgColor }" id="bg">
 
    <h2>{{name}}</h2>
    <img :src="imgUrl" id="img1" alt="">
  
   
  </div>
</div>
</template>

<script>
import MtgService from '../services/MtgService';
import SearchComp from './SearchComp.vue';


export default {
  components: {
    SearchComp
   

  },
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
        default:
          return 'rgb(192,192,192)';
      }
    },
  },
};
</script>

<style>
#bg{
  border-style: solid;
  border-width: 2em;
  background: rgb(23, 18, 15);
}
h1,h2{
  color: aliceblue;
  text-decoration: none;
  
}
#img1{
  height: auto;
  width: auto;
}
</style>
