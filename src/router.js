import Vue from "vue";
import VueRouter from "vue-router";
import Index from "./routes/Index.vue";

const routes = [{ path: "", component: Index }];

export default new VueRouter({
  mode: "history",
  routes
});
