import Vue from "vue";
import Router from "vue-router";
import Orders from "./views/Orders.vue";
import Products from "./views/Products.vue";
import Categories from "./views/Categories.vue";
import Customers from "./views/Customers.vue";
import Allusers from "./views/Allusers.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "order",
      component: Orders
    },
    {
      path: "/products",
      name: "product",
      component: Products
    },
    {
      path: "/categories",
      name: "category",
      component: Categories
    },
    {
      path: "/customers",
      name: "customer",
      component: Customers
    },
    {
      path: "/all-users",
      name: "alluser",
      component: Allusers
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
