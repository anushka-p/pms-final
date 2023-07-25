<template>
    <div>
      <v-app-bar app color="primary">
        <v-toolbar-title>Student Portfolio</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text to="update-portfolio" v-if="portfolioExists">Update Portfolio</v-btn>
        <v-btn text to="/student/portfolio" v-else>Create Portfolio</v-btn>
        <v-btn @click="logout" text>Logout</v-btn>
      </v-app-bar>
  
      <v-main>
        <v-container>
          <h2>Welcome, {{ studentName }}</h2>
        </v-container>
      </v-main>
    </div>
  </template>
  
  <script>
  import router from '../router/index'
  import jwtDecode from 'jwt-decode';
import axios from 'axios';
  export default {
    
    data() {
      return {
        studentName: 'John Doe', // Replace with actual student name
        bio: 'This is the student bio.', // Replace with actual student bio
        portfolioExists: false
      };
    },
    mounted(){
      const token = localStorage.getItem("token");
      const decodedToken = jwtDecode(token);
      const user_id = decodedToken.user_id;
      axios.get(`/student/getall/${user_id}`)
      .then(response => {
        console.log(response)
        if(!response.data.message){
        this.portfolioExists = true
      }
      else{
        this.portfolioExists
      }
      })

    },
    methods: {
      logout() {
        localStorage.clear("token");
        router.push("/user/login");
      },
    },
  };
  </script>
  