// Composables
import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/UserLogin.vue'

const routes = [
  {
    path: '/',
    component: () => import('../views/Home.vue')
  },
 
  { path: '/user/registration', component: () => import('../views/UserRegistraion.vue') },
  { path: '/user/login', component: ()=> import('../views/UserLogin.vue') },
  { path: '/student/home', component: ()=> import('../views/StudentHomepage.vue') },
  // { path: '/college/home', component: ()=> import('../views/CollegeHomePage.vue') },
  { path: '/student/add-bio', component: ()=> import('../views/BioStu.vue') },
  // { path: '/user/portfolio', component: PortFolio, meta: {requiresAuth: true}},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router
// router.beforeEach((to, from, next) => {
//   const token = localStorage.getItem("token")
//   const user = jwt_decode(token)
//   const role = user.role
//   if(to.matched.some(record => record.meta.requiresAuth)){
//     if(token != null){
//       if(to == "/user/portfolio" && role == "student"){
//         next();
//       }
//       else if(to == collegeroute && role == "college"){
//         next();
//       }
//       else{
//         alert("Unauthorized access")
//       }
//     }
//     else{
//       router.push("/user/login")
//     }
//   }
//   else{
//     next();
//   }
// })


