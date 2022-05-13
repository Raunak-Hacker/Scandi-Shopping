import { createApp } from "vue";
// import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import DynProd from "./components/products/DynProd.vue";
import Productlist from "./components/pages/productList.vue";
import addProduct from "./components/pages/addProduct.vue";
import TheHeader from "./components/layouts/TheHeader.vue";

// const router = createRouter({
//   history: createWebHistory(),
//   routes: [
//     {
//       // path: "/add-product",
//       // component: addProduct,
//       // emit: true,
//       // props: true,
//     },
//     {
//       // path: "/",
//       // component: Productlist,
//       // emit: true,
//       // props: true,
//     },
//   ],
// });
const app = createApp(App);

app.component("product-list", Productlist);
app.component("add-product", addProduct);
app.component("the-header", TheHeader);
app.component("dyn-prod", DynProd);
// app.use(router);
app.mount("#app");
