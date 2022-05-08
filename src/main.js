import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import Productlist from "./pages/productList.vue";
import addProduct from "./pages/addProduct.vue";
import TheHeader from "./components/TheHeader.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/product-list",
      component: Productlist,
    },
  ],
});
const app = createApp(App);

app.component("product-list", Productlist);
app.component("add-product", addProduct);
app.component("the-header", TheHeader);
// app.component('adding', Adding);
app.use (router);
app.mount("#app");
