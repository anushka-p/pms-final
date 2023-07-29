<template>
  <v-card class="pa-10">
    <!-- <v-main>
      <v-container> -->
    <v-row class="content-row">
      <v-col cols="6">
        <v-card-title>
          <h2 style="font-family: 'Times New Roman', Times, serif">
          Welcome,
        </h2>
        <h2 style="font-family: 'Times New Roman', Times, serif">
          {{ studentName }}
        </h2>
        </v-card-title>
        <p class="description" style="font-family: 'Times New Roman', Times, serif">
          Welcome to our platform, where we believe in empowering students like
          you to shape their own future. Your career journey is a canvas waiting
          for your creativity and determination to paint a vibrant picture of
          success. Build a standout resume and portfolio that showcases your
          unique talents and accomplishments. We're here to provide you with the
          tools and guidance to seize every opportunity that comes your way.
          Embrace the possibilities that lie ahead, as you embark on a path
          towards a fulfilling and rewarding career. Your dreams are within
          reach, and we're excited to be part of your journey.
        </p>
      </v-col>
      <v-col cols="6">
        <v-img src="../assets/grad4.png" alt="Background Image"></v-img>
      </v-col>
    </v-row>
    <!-- </v-container>
    </v-main> -->
  </v-card>
</template>
  
  <script>
  import router from '../router/index'
  import jwtDecode from 'jwt-decode';
import axios from 'axios';
  export default {
    
    data() {
      return {
        studentName: '', // Replace with actual student name
        portfolioExists: false
      };
    },
    mounted(){
      const token = localStorage.getItem("token");
      const decodedToken = jwtDecode(token);
      const user_id = decodedToken.user_id;
       axios.get(`/student/get-name/${user_id}`).then(response=>{
        this.studentName = response.data.data.firstname;
      })
      
      axios.get(`/student/getall/${user_id}`)
      .then(response => {
        if(!response.data.message){
        this.portfolioExists = true
      }
      else{
        this.portfolioExists
      }
      })

    },
    // methods: {
    //   logout() {
    //     localStorage.clear("token");
    //     router.push("/user/login");
    //   },
    // },
  };
  </script>

  
  <style scoped>

.custom-border {
  border: 2px solid gray;
  border-radius: 10px;
  margin-top: 40px; /* You can customize the border style here */
  height: 757px;
  background-color: #F5F5F5;
}
.content-row {
    align-items: flex-start;
  }

  .title {
    font-family: 'Times New Roman', Times, serif;
    margin-bottom: 8px;
  }

  .student-name {
    font-family: 'Times New Roman', Times, serif;
    margin-bottom: 16px;
  }

  .description {
    font-family: 'Times New Roman', Times, serif;
    text-align: justify;
    margin-top: 30px;
    margin-left: 40px;
    margin-right: 40px;
    font-size: 25px;
    line-height: 2;
  }
  .pclass{
    text-align: center;
    margin-top: 60px;
    font-size: 40px;
    text-decoration: underline;
    line-height: 1.5;
  }
  /* Add additional spacing if needed */
  @media only screen and (min-width: 600px) {
    .content-row {
      margin-bottom: 24px;
    }
  }

</style>

  
