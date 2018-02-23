import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import PlateScanner from "@/components/PlateScanner";
import CarDetail from "@/components/CarDetail";

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
    },
    {
      path: "/car-detail",
      name: "CarDetail",
      component: CarDetail
    }
  ]
});
