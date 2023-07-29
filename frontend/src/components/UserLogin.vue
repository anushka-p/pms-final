<template>
  <v-sheet class=" pa-12 mt-15" rounded>
      <v-card class="mx-auto px-6 py-8" max-width="444">
          <v-form ref="form" @submit.prevent="loginUser">
            <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field v-model="email" label="Email" required></v-text-field>     
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
          </v-col>
        </v-row>
        <v-btn type="submit" color="primary">Login</v-btn>
      </v-container>
          </v-form>
          <v-card-text>Don't have an account?<router-link to="/user/registration">Register</router-link></v-card-text>
      </v-card>
  </v-sheet>
</template>

<script>
import axios from "axios";
// import jwtDecode from "jwt-decode";
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
     mounted(){
        const token= localStorage.getItem("token");
        
        if(token!=null)
        {
          const decodedToken= jwtDecode(token);
        const user_role= decodedToken.role;
          if(user_role == "student")
          {
          this.$router.push("/student/home");
          }
          else{
            this.$router.push("/college/home");
          }
        }
    },
    methods: {
      
     async loginUser() {
      
  try {
    if (this.$refs.form.validate()) {
      // console.log("ffffffff");
          const user = {
            email: this.email,
            password: this.password
          };
          const response = await axios.post("/user/login", user);
          // console.log(response.data.message);
          if(response.data.message == "Invalid password"){
            // console.log("jiiii");
            alert("Invalid password")
          }
          else{
            const token = response.data.token;
          localStorage.setItem('token', token);
          if(response.data.message == "student route"){
            console.log("student");
            this.$router.push('/student/home');
          }
          else if(response.data.message == "college route"){
            console.log("college");
            this.$router.push('/college/new');
          }
          }
  
           // Redirect the user to the dashboard or any other authorized page
          // For example: this.$router.push('/dashboard');
        }
  } catch (error) {
    if(error.response.status == 409){
      alert("Invalid password")
    }
    else{
      console.log(error);
    }
  }
        
      },
    },
  };
</script>