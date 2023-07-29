// Composables
import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../views/UserLogin.vue";
import jwt_decode from "jwt-decode";

// import store from '../store'

const routes = [
  {
    path: "/",
    component: () => import("../views/Home.vue"),
  },

  {
    path: "/user/registration",
    component: () => import("../views/UserRegistraion.vue"),
  },
  {
    path: "/user/login",
    component: () => import("../views/UserLogin.vue"),
   
  },
  {
    path: "/student/home",
    component: () => import("../views/StudentHomepage.vue"),
    // meta: { requiresAuth: true },
  }, //add authorization
  {
    path: "/college/home",
    component: () => import("../views/CollegeHomePage.vue"),
    // meta: { requiresAuth: true },
  },
  {
    path: "/student/update-portfolio",
    component: () => import("../views/UpdateStudentPortfolio.vue"),
    // meta: { requiresAuth: true },
  },
  {
    path: "/student/portfolio",
    component: () => import("../views/PortFolio.vue"),
    // meta: { requiresAuth: true },
  },
  {
    path: "/college/new",
    component: () => import("../views/CollegeDetails.vue"),
    meta: { requiresAuth: true },
  },
<<<<<<< Updated upstream
=======

  {
    path: "/user/registration",
    component: () => import("../views/UserRegistraion.vue"),
  },
  {
    path: "/user/login",
    component: () => import("../views/UserLogin.vue"),
   
  },
  {
    path: "/student/home",
    component: () => import("../views/StudentHomepage.vue"),
    meta: { requiresAuth: true },
  }, //add authorization
  {
    path: "/college/home",
    component: () => import("../views/CollegeHomePage.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/student/update-portfolio",
    component: () => import("../views/UpdateStudentPortfolio.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/student/portfolio",
    component: () => import("../views/PortFolio.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/college/new",
    component: () => import("../views/CollegeDetails.vue"),
    meta: { requiresAuth: true },
  },
>>>>>>> Stashed changes
  // { path: '/user/portfolio', component: PortFolio, meta: {requiresAuth: true}},
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

<<<<<<< Updated upstream
// router.beforeEach((to, from, next) => {
//   const token = localStorage.getItem("token");
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
    // if(token != null){
    //   const user = jwt_decode(token)
    //   const role = user.role
    //   // if(role == "student"){
    //   //   store.commit('setStudentIsAuthenticated', true)
    //   // }
    //   // else{
    //   //   store.commit('setCollegeIsAuthenticated', true)
    //   // }
    //   if(to.path.startsWith("/student") && role == "student"){
    //     next();
    //   }
    //   else if(to.path.startsWith("/college") && role == "college"){
    //     next();
    //   }
    //   else{
    //     alert("Unauthorized access")
    //     if(role == "college"){
    //       router.push("/college/home")
    //     }
    //     else{
    //       router.push("/student/home")
    //     }
    //   }
    // }
    // else{
    //   router.push("/user/login")
    // }
//   } else {
//     next();
//   }
// });
=======
router.beforeEach((to, from, next) => {
  // console.log("path changed");
  const token = localStorage.getItem("token");
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if(token != null){
      const user = jwt_decode(token)
      const role = user.role
      console.log(user);
      if(role == "student"){
        console.log("------------");
        store.commit('setStudentIsAuthenticated', true)
      }
      else{
        store.commit('setCollegeIsAuthenticated', true)
      }
      if(to.path.startsWith("/student") && role == "student"){
        next();
      }
      else if(to.path.startsWith("/college") && role == "college"){
        next();
      }
      else{
        alert("Unauthorized access")
        if(role == "college"){
          router.push("/college/home")
        }
        else{
          router.push("/student/home")
        }
      }
    }
    else{
      router.push("/user/login")
    }
  } else {
    next();
  }
});
>>>>>>> Stashed changes
export default router;
