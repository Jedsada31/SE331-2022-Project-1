import { createRouter, createWebHistory } from "vue-router";
// import EventListView from "@/views/EventListView.vue";
import EventEditView from "@/views/event/EventEditView.vue";
import EventRegisterView from "@/views/event/EventRegisterView.vue";
import AboutView from "../views/AboutView.vue";
import EventLayoutView from "@/views/event/EventLayoutView.vue";
import EventDetailView from "@/views/event/EventDetailView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import NetWorkErrorView from "@/views/NetworkErrorView.vue";
import NProgress from "nprogress";
import EventService from "@/services/EventService.js";
import GStore from "@/store";
import DoctorDetail from "@/views/DoctorView.vue";
import VaccineDetial from "@/views/VaccineDetail.vue";
const routes = [
  {
    path: "/",
    name: "EventList",
    component: VaccineDetial,
    props: (route) => ({ page: parseInt(route.query.page) || 1 }),
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/aboutt",
    name: "aboutt",
    component: DoctorDetail,
  },
  {
    path: "/event/:id",
    name: "EventLayoutView",
    component: EventLayoutView,
    props: true,
    beforeEnter: (to) => {
      //<-- put API call here
      return EventService.getEvent(to.params.id) //return and params.id
        .then((response) => {
          //still need to set the data here
          GStore.event = response.data;
        })
        .catch((error) => {
          if (error.response && error.response.status == 404) {
            return {
              //<---Return
              name: "404Resource",
              params: { resource: "event" },
            };
          } else {
            return { name: "NetworkError" };
          }
        });
    },
    children: [
      {
        path: "",
        name: "EventDetails",
        component: EventDetailView,
        props: true,
      },
      {
        path: "register",
        name: "EventRegister",
        props: true,
        component: EventRegisterView,
      },
      {
        path: "edit",
        name: "EventEdit",
        props: true,
        component: EventEditView,
      },
    ],
  },
  {
    path: "/404/:resource",
    name: "404Resource",
    component: NotFoundView,
    props: true,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFoundView,
  },
  {
    path: "/network-error",
    name: "NetworkError",
    component: NetWorkErrorView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});
router.beforeEach(() => {
  NProgress.start();
});
router.afterEach(() => {
  NProgress.done();
});
export default router;
