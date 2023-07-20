<!-- src/components/LoginForm.vue -->
<template>
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
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    
   async loginUser() {
try {
  if (this.$refs.form.validate()) {
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
        }
        else if(response.data.message == "college route"){
          console.log("college");
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
