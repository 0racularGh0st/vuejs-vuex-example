import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [
      {name: 'Bananas', price: 20 },
      {name: 'Shiny Star', price: 40 },
      {name: 'Green Shells', price: 60},
      {name: 'Red Shells', price: 80}
    ]
  },
  getters:{
    saleProducts: state => {
      var saleProducts = state.products.map(product => {
        return {
            name: "**"+ product.name+ "**",
            price: product.price/2
        }
    })
    return saleProducts;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
