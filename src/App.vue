<template>
  <div id="mainapp">
    <product-list-one v-bind:products = "products"></product-list-one>
    <product-list-two v-bind:products = "products"></product-list-two>
  </div>
 
</template>
<script>
import ProductListOne from './components/ProductListOne';
import ProductListTwo from './components/ProductListTwo';

export default {
  components: {
    'product-list-one': ProductListOne,
    'product-list-two': ProductListTwo
  },
  name: 'mainapp',
  data(){
    return {
      products: [
        {name: 'Banana', price: 20 },
         {name: 'Shiny Star', price: 40 },
          {name: 'Green Shells', price: 60},
           {name: 'Red Shells', price: 80}
      ]
    }
  }
}
</script>
<style lang="scss">
body{
   font-family: Ubuntu;
    color: #555;
}
</style>
