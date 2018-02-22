import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import CameraView from "@/components/CameraView";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "Hello",
      component: Hello
    },
    {
      path: "/camera",
      name: "camera",
      component: CameraView
    }
  ]
});
