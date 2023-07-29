<template>
  <v-card max-width="500" style="position: sticky; z-index: 1000">
    <v-layout>
      <v-app-bar color="primary">
        <v-app-bar-title>College Placement Portal</v-app-bar-title>
        <v-spacer></v-spacer>
<<<<<<< Updated upstream
        <v-btn text to="user/login">Login</v-btn>
        <v-btn color="white" to="user/registration">Register</v-btn>
        <div>
          <v-btn text to="update-portfolio">Update Portfolio</v-btn>
          <v-btn text to="/student/portfolio">Create Portfolio</v-btn>
          <v-btn text>Logout</v-btn>
=======
        <v-btn to="/user/login" v-if="!this.$store.state.studentIsAuthorized && !this.$store.state.collegeIsAuthorized">Login</v-btn>
        <v-btn color="white" to="/user/registration" v-if="!this.$store.state.studentIsAuthorized && !this.$store.state.collegeIsAuthorized">Register</v-btn>
        <div>
          <v-btn to="/student/update-portfolio" v-if="portfolioExists && this.$store.state.studentIsAuthorized">Update Portfolio</v-btn>
          <v-btn to="/student/portfolio" v-if="!portfolioExists && this.$store.state.studentIsAuthorized">Create Portfolio</v-btn>
          <v-btn @click="logout" v-if="this.$store.state.studentIsAuthorized || this.$store.state.collegeIsAuthorized">Logout</v-btn>
>>>>>>> Stashed changes
        </div>
      </v-app-bar>
    </v-layout>
  </v-card>
<<<<<<< Updated upstream
</template>
=======
</template>
<script>
  import router from '../../router/index'
  import jwtDecode from 'jwt-decode';
import axios from 'axios';
  export default {
    
    data() {
      return {
        portfolioExists: false
      };
    },
    watch: {
    $route(to, from) {
      console.log(this.$store.state.studentIsAuthorized, this.$store.state.collegeIsAuthorized);
      
      const token = localStorage.getItem("token");
      if(token != null){
        const decodedToken = jwtDecode(token);
      const user_id = decodedToken.user_id;
      if (to.path.startsWith("/student")) {
        axios.get(`/student/getall/${user_id}`)
      .then(response => {
        if(!response.data.message){
        this.portfolioExists = true
      }
      else{
        this.portfolioExists
      }
      })
      }
    }
    },
  },
    mounted(){
      console.log(this.$store.state.studentIsAuthorized, this.$store.state.collegeIsAuthorized);
      const token = localStorage.getItem("token");
      if(token != null){
        const decodedToken = jwtDecode(token);
      const user_id = decodedToken.user_id;
      
      axios.get(`/student/getall/${user_id}`)
      .then(response => {
        if(!response.data.message){
        this.portfolioExists = true
      }
      else{
        this.portfolioExists
      }
      })
      }


    },
    methods: {
      logout() {
        this.$store.commit('setStudentIsAuthenticated', false);
        this.$store.commit('setCollegeIsAuthenticated', false);
        localStorage.clear("token");
        router.push("/");
      },
    },
  };
  </script>
>>>>>>> Stashed changes
