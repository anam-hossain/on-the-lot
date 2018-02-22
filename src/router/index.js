import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import PlateScanner from "@/components/PlateScanner";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/plate-scanner",
      name: "PlateScanner",
      component: PlateScanner
    }
  ]
});
