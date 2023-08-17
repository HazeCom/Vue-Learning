import HomePage from "./components/home/HomePage.vue";
import AboutPage from "./components/about/AboutPage.vue";

const routes = [
  {
    path: "/counter",
    component: HomePage,
  },
  {
    path: "/hello",
    component: AboutPage,
  },
  // Add more routes here
];

export default routes;
