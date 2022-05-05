import { createApp } from 'vue'


import App from './App.vue'
import Productlist from './pages/productList.vue'
import addProduct from './pages/addProduct.vue'

const app = createApp(App);

app.component('product-list', Productlist);
app.component('add-product', addProduct);
// app.component('adding', Adding);

app.mount('#app');