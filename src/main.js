import { createApp } from "vue";

import App from "./App.vue";
import AddProduct from "./components/pages/AddProduct.vue";
import TheHeader from "./components/layouts/TheHeader.vue";
import TheFooter from "./components/layouts/TheFooter.vue";
import ProductBox from "./components/products/ProductBox.vue";


const app = createApp(App);

app.component("add-product", AddProduct);
app.component("the-header", TheHeader);
app.component("the-footer", TheFooter);
app.component("product-box", ProductBox);
app.mount("#app");
